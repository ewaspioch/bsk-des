import React from 'react';

//TABELE ZE STALYMI
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

const TablePC2 =
[
    14, 17, 11, 24, 1, 5,
    3, 28, 15, 6, 21, 10,
    23, 19, 12, 4, 26, 8,
    16, 7, 27, 20, 13, 2,
    41, 52, 31, 37, 47, 55,
    30, 40, 51, 45, 33, 48,
    44, 49, 39, 56, 34, 53,
    46, 42, 50, 36, 29, 32 
];

const TableE =
[
    32, 1, 2, 3, 4, 5,
    4, 5, 6, 7, 8, 9,
    8, 9, 10, 11, 12, 13,
    12, 13, 14, 15, 16, 17,
    16, 17, 18, 19, 20, 21,
    20, 21, 22, 23, 24, 25,
    24, 25, 26, 27, 28, 29,
    28, 29, 30, 31, 32, 1 
];

const S1 = 
[
    [14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7],
    [0, 15, 7, 4, 14, 2, 13, 1, 10, 6, 12, 11, 9, 5, 3, 8],
    [4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7, 3, 10, 5, 0],
    [15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13]
]
const S2 = 
[
    [15, 1, 8, 14, 6, 11, 3, 4, 9, 7, 2, 13, 12, 0, 5, 10],
    [3, 13, 4, 7, 15, 2, 8, 14, 12, 0, 1, 10, 6, 9, 11, 5],
    [0, 14, 7, 11, 10, 4, 13, 1, 5, 8, 12, 6, 9, 3, 2, 15],
    [13, 8, 10, 1, 3, 15, 4, 2, 11, 6, 7, 12, 0, 5, 14, 9]
]

const S3 = 
[
    [10, 0, 9, 14, 6, 3, 15, 5, 1, 13, 12, 7, 11, 4, 2, 8],
    [13, 7, 0, 9, 3, 4, 6, 10, 2, 8, 5, 14, 12, 11, 15, 1],
    [13, 6, 4, 9, 8, 15, 3, 0, 11, 1, 2, 12, 5, 10, 14, 7],
    [1, 10, 13, 0, 6, 9, 8, 7, 4, 15, 14, 3, 11, 5, 2, 12] 
]

const S4 = 
[
    [7, 13, 14, 3, 0, 6, 9, 10, 1, 2, 8, 5, 11, 12, 4, 15],
    [13, 8, 11, 5, 6, 15, 0, 3, 4, 7, 2, 12, 1, 10, 14, 9],
    [10, 6, 9, 0, 12, 11, 7, 13, 15, 1, 3, 14, 5, 2, 8, 4],
    [3, 15, 0, 6, 10, 1, 13, 8, 9, 4, 5, 11, 12, 7, 2, 14]
]

const S5 = 
[
    [2, 12, 4, 1, 7, 10, 11, 6, 8, 5, 3, 15, 13, 0, 14, 9],
    [14, 11, 2, 12, 4, 7, 13, 1, 5, 0, 15, 10, 3, 9, 8, 6],
    [4, 2, 1, 11, 10, 13, 7, 8, 15, 9, 12, 5, 6, 3, 0, 14],
    [11, 8, 12, 7, 1, 14, 2, 13, 6, 15, 0, 9, 10, 4, 5, 3] 
]

const S6 = 
[
    [12, 1, 10, 15, 9, 2, 6, 8, 0, 13, 3, 4, 14, 7, 5, 11],
    [10, 15, 4, 2, 7, 12, 9, 5, 6, 1, 13, 14, 0, 11, 3, 8],
    [9, 14, 15, 5, 2, 8, 12, 3, 7, 0, 4, 10, 1, 13, 11, 6],
    [4, 3, 2, 12, 9, 5, 15, 10, 11, 14, 1, 7, 6, 0, 8, 13]
]

const S7 = 
[
    [4, 11, 2, 14, 15, 0, 8, 13, 3, 12, 9, 7, 5, 10, 6, 1],
    [13, 0, 11, 7, 4, 9, 1, 10, 14, 3, 5, 12, 2, 15, 8, 6],
    [1, 4, 11, 13, 12, 3, 7, 14, 10, 15, 6, 8, 0, 5, 9, 2],
    [6, 11, 13, 8, 1, 4, 10, 7, 9, 5, 0, 15, 14, 2, 3, 12]
]

const S8 = 
[
    [13, 2, 8, 4, 6, 15, 11, 1, 10, 9, 3, 14, 5, 0, 12, 7],
    [1, 15, 13, 8, 10, 3, 7, 4, 12, 5, 6, 11, 0, 14, 9, 2],
    [7, 11, 4, 1, 9, 12, 14, 2, 0, 6, 10, 13, 15, 3, 5, 8],
    [2, 1, 14, 7, 4, 10, 8, 13, 15, 12, 9, 0, 3, 5, 6, 11],
]


const TableShiftRound = [ 1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1 ];

//************************************************************************************************************************************************************************************
//DUZO KODU zwiazanego z przeksztalcaniem w BYTE, CHAR etc.
//************************************************************************************************************************************************************************************
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


//************************************************************************************************************************************************************************************
//************************************************************************************************************************************************************************************
//************************************************************************************************************************************************************************************


function TablePermutation(inputText, tab, n){ 
    let outputText = ""
    for (let a = 0; a < n; a++) {
        
        outputText += inputText[tab[a] - 1]
    }

    return outputText;
}

//PRZESUWANIE W LEWO
function shiftLeft(key, x){ 
    let n = key.length;
    let newKey = key;

    for (let a = 0, a2 = 0; a < n; a++) {
        if (a + x < n)
            newKey = setCharAt(newKey, a, key.charAt(a + x));
            //newKey[a] = key[a + x];
        else {
            newKey = setCharAt(newKey, a, key.charAt(a2));
            //newKey[a] = key[a2];
            a2++;
        }
    }
    return newKey;
}

//XOR dla argumentow o tej samej dlugosci
function XOR(arg1, arg2){
    let length = arg1.length

    let result = ""
    for(let i = 0; i < length; i++){
        if(arg1[i] != arg2[i]){
            result += "1"
        }
        else{
            result += "0"
        }
    }
    return result
}

function BytesToBCD(code, length){
    let resultBCD = 0
    for(let i = length; i > 0; i--){
        if(code[i - 1] == "1"){
            resultBCD += Math.pow(2, length - i)
        }
    }
    return resultBCD
}


function BCDtoBytes(number){
    let resultBytes = ""


    for(let i = 3; i >= 0; i--){

        if(number >= Math.pow(2, i)){
            resultBytes += "1"
            number -= Math.pow(2, i)
        }
        else{
            resultBytes += "0"
        }
    }


    return resultBytes
}



function Sequence6bytesTo4bytes(position, table){
    let column = position[0] + position[5]
    let index = position.substring(1, 5)

    let columnBCD = BytesToBCD(column, column.length)
    let indexBCD = BytesToBCD(index, index.length)



    let result = table[columnBCD][indexBCD]
    // console.log("result " + result)
    let result4bytes = BCDtoBytes(result)
    // console.log("result4 " + result4bytes)

    
    return result4bytes
}

//************************************************************************************************************************************************************************************
//----------GLOWNY ALGORYTM------------------
//************************************************************************************************************************************************************************************
function AlgorithmDES(inputText, key){
    // console.log(inputText)
    // console.log(key)
    let outputText = StringToBytes(inputText);
    
    outputText = TablePermutation(outputText, TableIP, 64);


    //PODZIAL TEKSTU NA BLOKI: L i R
    let BlockL = outputText.substring(0, 32);
    let BlockR = outputText.substring(32, 64);

    //REDUKCJA KLUCZA
    let keyByte = StringToBytes(key);
    keyByte = TablePermutation(keyByte, TablePC, 56);
    let keyByte2 = "";

    // for (let a = 0; a < 64; a++) {
    //     if (((a + 1) % 8) !== 0) {  
    //         keyByte2 += keyByte.charAt(a);          // chyba nie potrzeba sprawia ze z 56 bitowego klucza mamy 49 bity
    //     }
    // }

    //PODZIAL KLUCZA NA BLOKI: C i D
    let BlockC = keyByte.substring(0, 28);
    let BlockD = keyByte.substring(28, 56);

    
    for (let a = 0; a < 16; a++) {
        BlockC = shiftLeft(BlockC, TableShiftRound[a]);
        BlockD = shiftLeft(BlockD, TableShiftRound[a]);
        let newKey = BlockC + BlockD;
        //TUTAJ MAJA SIE ODBYWAC TYCH 16 RUND
 
        // Sebastian code
        let Key48 = TablePermutation(newKey, TablePC2, 48) // krok 7
        
        let BlockR48 = TablePermutation(BlockR, TableE, 48) // krok 8

        //mozliwe ze odtad powinno nie byc w pentli
        let xorResult = XOR(Key48, BlockR48) // krok 9
        
        let bytes6Sequence1 = xorResult.substring(0, 6);  //krok 10
        let bytes6Sequence2 = xorResult.substring(6, 12);
        let bytes6Sequence3 = xorResult.substring(12, 18);
        let bytes6Sequence4 = xorResult.substring(18, 24);
        let bytes6Sequence5 = xorResult.substring(24, 30);
        let bytes6Sequence6 = xorResult.substring(30, 36);
        let bytes6Sequence7 = xorResult.substring(36, 42);
        let bytes6Sequence8 = xorResult.substring(42, 48);

        let bytes4Sequence1 = Sequence6bytesTo4bytes(bytes6Sequence1, S1) // krok 11, 12
        let bytes4Sequence2 = Sequence6bytesTo4bytes(bytes6Sequence2, S2)
        let bytes4Sequence3 = Sequence6bytesTo4bytes(bytes6Sequence3, S3)
        let bytes4Sequence4 = Sequence6bytesTo4bytes(bytes6Sequence4, S4)
        let bytes4Sequence5 = Sequence6bytesTo4bytes(bytes6Sequence5, S5)
        let bytes4Sequence6 = Sequence6bytesTo4bytes(bytes6Sequence6, S6)
        let bytes4Sequence7 = Sequence6bytesTo4bytes(bytes6Sequence7, S7)
        let bytes4Sequence8 = Sequence6bytesTo4bytes(bytes6Sequence8, S8)

        // console.log("ciag 4 bitowy" + test + " " + test.length)
        //Sebastian code end
    }

    

    //TO TYLKO DO SPRAWDZENIA - wydaje mi sie ze dopiero pozniej przy innych podpunktach trzeba to wykorzystac
    outputText = TablePermutation(outputText, TableIP1, 64);
    outputText = BytesToString(outputText);
    //*******

    return outputText;
}
//************************************************************************************************************************************************************************************
//************************************************************************************************************************************************************************************
//************************************************************************************************************************************************************************************

//DODAJE NADMIAROWY BYTE
function AddBytes(inputText) { 
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

//USUWA NADMIAROWY BYTE
function RemoveBytes(inputText){ 
    let n = inputText.length;
    let bytesCount = inputText.charAt(n - 1);
    let outputText = inputText.substring(0, n - bytesCount);

    return outputText;
}

//Pozwala w latwy sposob ustawic chara w stringu
function setCharAt(text, id, c) {
    if (id > text.length - 1)
        return text;
    return text.substring(0, id) + c + text.substring(id + 1);
}





//************************************************************************************************************************************************************************************
//----------GLOWNY KLASA------------------
//************************************************************************************************************************************************************************************
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

    //SZYFROWANIE
    Ciphering() {
        var props = { inputText: this.state.inputText, key: this.state.key };
        let outputText = "";

        let inputText = this.state.inputText;
        let key = this.state.key;
        inputText = AddBytes(inputText);    //dodanie nadmiarowego bitu
        let n = inputText.length;


        //Podzial wiadomosci na 64 bitowe bloki i wykonanie na nich algorytmuDES
        for (let a = 0; a < n; a += 8) {
            let x = inputText.substring(a, a+8);
            outputText += AlgorithmDES(x, key);
        }

        
        outputText = RemoveBytes(outputText);   //usuwanie nadmiarowego bitu

        this.setState({ output: outputText });
    }

    //DESZYFROWANIE - to bedzie prawie takie same co szyfrowanie
    Deciphering() {
        var props = { inputText: this.state.inputText, key: this.state.key };

        let outputText = this.state.inputText;

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