import React from 'react';

const TableIP =
[
    58, 50, 42, 34, 26, 18, 10, 2,
    60, 52, 44, 36, 28, 20, 12, 4,
    62, 54, 46, 38, 30, 22, 14, 6,
    64, 56, 48, 40, 32, 24, 16, 8,
    57, 49, 41, 33, 25, 17, 9, 1,
    59, 51, 43, 35, 27, 19, 11, 3,
    61, 53, 45, 37, 29, 21, 13, 5,
    63, 55, 47, 39, 31, 23, 15, 7 ];

const  TableIP1 =
[
    40, 8, 48, 16, 56, 24, 64, 32,
    39, 7, 47, 15, 55, 23, 63, 31,
    38, 6, 46, 14, 54, 22, 62, 30,
    37, 5, 45, 13, 53, 21, 61, 29,
    36, 4, 44, 12, 52, 20, 60, 28,
    35, 3, 43, 11, 51, 19, 59, 27,
    34, 2, 42, 10, 50, 18, 58, 26,
    33, 1, 41, 9, 49, 17, 57, 25
];


const TablePC =
[
    57, 49, 41, 33, 25, 17, 9,
    1, 58, 50, 42, 34, 26, 18,
    10, 2, 59, 51, 43, 35, 27,
    19, 11, 3, 60, 52, 44, 36,
    63, 55, 47, 39, 31, 23, 15,
    7, 62, 54, 46, 38, 30, 22,
    14, 6, 61, 53, 45, 37, 29,
    21, 13, 5, 28, 20, 12, 4
];

const TableShiftRound = [ 1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1 ];

function CharToByte(byte)
{
    let converted = byte.charCodeAt().toString(2);
    let n = converted.length;
    let newChar="";
    for (let a = 0; a < 8 - n; a++) {
        newChar += "0";
    }
    newChar += converted;
    return newChar;
}

function StringToBytes(bytes)
{
    let outputText = "";
    for (let a = 0; a < 8; a++) {
        outputText += CharToByte(bytes.charAt(a));
    }
    return outputText;
}

function ByteToChar(byte)
{
    let outputChar = 0;
    for (let a = 0; a < 8; a++) {
        let b = byte.charAt(a);

        if (b === '1')
            outputChar += Math.pow(2, 7-a);
    }
    outputChar = String.fromCharCode(outputChar);
    return outputChar;
}

function BytesToString(bytes)
{
    let outputText = "";
    let n = bytes.length;

    for (let a = 0; a < n / 8; a++) {
        let x = bytes.substring(a * 8, (a * 8) + 8);
        outputText += ByteToChar(x);
    }
    return outputText;
}

function TablePermutation(inputText, tab, n){
    let outputText = inputText;
    for (let a = 0; a < n; a++) {
        //outputText.charAt(tab.charAt(a) - 1) = inputText.charAt(a);
        outputText = setCharAt(outputText, tab[a] - 1, inputText.charAt(a))
    }

    return outputText;
}

function shiftLeft(key, x){
    let n = key.length;
    let newKey = key;

    for (let a = 0, a2 = 0; a < n; a++) {
        if (a + x < n)
            newKey[a] = key[a + x];
        else {
            newKey[a] = key[a2];
            a2++;
        }
    }
    return newKey;
}

//function AlgorithmDES(props) {
//    let newText = props.inputText;
//    let newKey = props.key;

//    return <p>{newText} {newKey}</p>;
//}

function AlgorithmDES(inputText, key){
    let outputText = StringToBytes(inputText);
    outputText = TablePermutation(outputText, TableIP, 64);
    //let BlockL = outputText.substring(0, 32);
    //let BlockR = outputText.substring(32, 64);

    //let keyByte = StringToBytes(key);
    //keyByte = TablePermutation(keyByte, TablePC, 56);
    //let keyByte2 = "";
    //for (let a = 0; a < 64; a++) {
    //    if (((a + 1) % 8) !== 0) {
    //        keyByte2 += keyByte[a];
    //    }
    //}

    //let BlockC = keyByte2.substr(0, 28);
    //let BlockD = keyByte2.substr(28, 56);

    //for (let a = 0; a < 16; a++) {
    //    BlockC = shiftLeft(BlockC, TableShiftRound[a]);
    //    BlockD = shiftLeft(BlockD, TableShiftRound[a]);
    //    let newKey = BlockC + BlockD;
    //}

    outputText = TablePermutation(outputText, TableIP1, 64);
    outputText = BytesToString(outputText);

    return outputText;
}

function AddBytes(inputText){
    let n = inputText.length;
    if (n % 8 === 0) {
        inputText += "0000000";
        inputText += 8;
    }
    else {
        for (let a = (n % 8); a < 7; a++) {
            inputText += '0';
        }
        inputText += 8 - (n % 8);
    }

    return inputText;
}

function RemoveBytes(inputText){
    let n = inputText.length;
    let bytesCount = inputText.charAt(n - 1);
    let outputText = inputText.substring(0, n - bytesCount);

    return outputText;
}

function setCharAt(text, id, c) {
    if (id > text.length - 1)
        return text;
    return text.substring(0, id) + c + text.substring(id + 1);
}


class DES extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleKeyChange = this.handleKeyChange.bind(this);
        this.Ciphering = this.Ciphering.bind(this);
        this.Deciphering = this.Deciphering.bind(this);
        this.state = {
            inputText: '',
            output: ''
        };
    }    

    Ciphering() {
        var props = { inputText: this.state.inputText, key: this.state.key };
        let outputText = "";

        let inputText = this.state.inputText;
        let key = this.state.key;
        inputText = AddBytes(inputText);
        let n = inputText.length;
        
        for (let a = 0; a < n; a += 8) {
            let x = inputText.substring(a, a+8);
            outputText += AlgorithmDES(x, key);
        }

        //outputText = inputText;

        outputText = RemoveBytes(outputText);

        this.setState({ output: outputText });
    }

    Deciphering() {
        var props = { inputText: this.state.inputText, key: this.state.key };
        let outputText = AlgorithmDES(props);
        this.setState({ output: outputText });
    }

    handleInputChange(newText) {
        this.setState({ inputText: newText.target.value });
    }

    handleKeyChange(newText) {
        this.setState({ key: newText.target.value });
    }

    render() {
        const inputText = this.state.inputText;
        const key = this.state.key;
        const output = this.state.output;

        return (
            <div>
                <h1>Szyfr DES</h1>
                <p>
                    Input Text:&emsp;
                    <input value={inputText} onChange={this.handleInputChange} />
                </p>
                <p>
                    Key:&emsp;
                    <input value={key} onChange={this.handleKeyChange} />
                </p>
                <button onClick={() => this.Ciphering()}>Cipher</button>
                <button onClick={() => this.Deciphering()}>Decipher</button>
                <p></p>
                {output}
            </div>
        );
    }
}

export default DES