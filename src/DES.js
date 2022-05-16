import React from "react";
import * as Constants from "./constants";

//************************************************************************************************************************************************************************************
//DUZO KODU zwiazanego z przeksztalcaniem w BYTE, CHAR etc.
//************************************************************************************************************************************************************************************
function CharToByte(byte) {
	let converted = byte.charCodeAt().toString(2);
	let n = converted.length;
	let newChar = "";
	for (let a = 0; a < 8 - n; a++) {
		newChar += "0";
	}
	newChar += converted;
	return newChar;
}

function StringToBytes(bytes) {
	let outputText = "";
	const bytesLen = bytes.length;
	for (let a = 0; a < bytesLen; a++) {
		outputText += CharToByte(bytes[a]);
	}
	return outputText;
}

function ByteToChar(byte) {
	let outputChar = 0;
	let decDigit = parseInt(byte, 2);
	// for (let a = 0; a < 8; a++) {
	//     let b = byte.charAt(a);

	//     if (b === '1')
	//         outputChar += Math.pow(2, 7-a);
	// }
	outputChar = String.fromCharCode(decDigit);
	return outputChar;
}

function BytesToString(bytes) {
	let outputText = "";
	let n = bytes.length;

	for (let a = 0; a < n / 8; a++) {
		let x = bytes.substring(a * 8, a * 8 + 8);
		outputText += ByteToChar(x);
	}
	return outputText;
}

//************************************************************************************************************************************************************************************
//************************************************************************************************************************************************************************************
//************************************************************************************************************************************************************************************

function TablePermutation(inputText, tab, n) {
	let outputText = "";
	for (let a = 0; a < n; a++) {
		outputText += inputText[tab[a] - 1];
	}

	return outputText;
}

//PRZESUWANIE W LEWO
function shiftLeft(key, x) {
	let n = key.length;
	let newKey = key;

	for (let a = 0, a2 = 0; a < n; a++) {
		if (a + x < n) newKey = setCharAt(newKey, a, key.charAt(a + x));
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
function XOR(arg1, arg2) {
	let length = arg1.length;

	let result = "";
	for (let i = 0; i < length; i++) {
		if (arg1[i] != arg2[i]) {
			result += "1";
		} else {
			result += "0";
		}
	}
	return result;
}

function BytesToBCD(code, length) {
	let resultBCD = 0;
	for (let i = length; i > 0; i--) {
		if (code[i - 1] == "1") {
			resultBCD += Math.pow(2, length - i);
		}
	}
	return resultBCD;
}

function BCDtoBytes(number) {
	let resultBytes = "";

	for (let i = 3; i >= 0; i--) {
		if (number >= Math.pow(2, i)) {
			resultBytes += "1";
			number -= Math.pow(2, i);
		} else {
			resultBytes += "0";
		}
	}

	return resultBytes;
}

function Sequence6bytesTo4bytes(position, table) {
	let column = position[0] + position[5];
	let index = position.substring(1, 5);

	let columnBCD = BytesToBCD(column, column.length);
	let indexBCD = BytesToBCD(index, index.length);

	let result = table[columnBCD][indexBCD];
	// console.log("result " + result)
	let result4bytes = BCDtoBytes(result);
	// console.log("result4 " + result4bytes)

	return result4bytes;
}

// take x sequences and join into one
const joinSequences = (...sequences) => {
	let newSequence = [];
	for (let sequence of sequences) {
		newSequence.push(...sequence);
	}
	return newSequence;
};

// initialArray, permutationArray must be of equal size
const arrayPermutation = (initialArray, permutationArray) => {
	const arraySize = initialArray.length;
	let resultArray = [];

	for (let i = 0; i < arraySize; i++) {
		// permutation array is 1-based - change new position to 0-based
		let newPosition = permutationArray[i] - 1;
		resultArray.push(initialArray[newPosition]);
	}
	return resultArray;
};

//************************************************************************************************************************************************************************************
//----------GLOWNY ALGORYTM------------------
//************************************************************************************************************************************************************************************
function AlgorithmDES(inputText, key) {
	let outputText = StringToBytes(inputText);

	outputText = TablePermutation(outputText, Constants.TableIP, 64);

	//PODZIAL TEKSTU NA BLOKI: L i R
	let BlockL = outputText.substring(0, 32);
	let BlockR = outputText.substring(32, 64);

	//REDUKCJA KLUCZA
	let keyByte = StringToBytes(key);
	keyByte = TablePermutation(keyByte, Constants.TablePC, 56);

	// for (let a = 0; a < 64; a++) {
	//     if (((a + 1) % 8) !== 0) {
	//         keyByte2 += keyByte.charAt(a);          // chyba nie potrzeba sprawia ze z 56 bitowego klucza mamy 49 bity
	//     }
	// }

	//PODZIAL KLUCZA NA BLOKI: C i D
	let BlockC = keyByte.substring(0, 28);
	let BlockD = keyByte.substring(28, 56);

	for (let a = 0; a < 16; a++) {
		BlockC = shiftLeft(BlockC, Constants.TableShiftRound[a]);
		BlockD = shiftLeft(BlockD, Constants.TableShiftRound[a]);
		let newKey = BlockC + BlockD;

		//TUTAJ MAJA SIE ODBYWAC TYCH 16 RUND

		let Key48 = TablePermutation(newKey, Constants.TablePC2, 48); // krok 7

		let BlockR48 = TablePermutation(BlockR, Constants.TableE, 48); // krok 8

		//?
		let xorResult = XOR(Key48, BlockR48); // krok 9

		let bytes6Sequence1 = xorResult.substring(0, 6); //krok 10
		let bytes6Sequence2 = xorResult.substring(6, 12);
		let bytes6Sequence3 = xorResult.substring(12, 18);
		let bytes6Sequence4 = xorResult.substring(18, 24);
		let bytes6Sequence5 = xorResult.substring(24, 30);
		let bytes6Sequence6 = xorResult.substring(30, 36);
		let bytes6Sequence7 = xorResult.substring(36, 42);
		let bytes6Sequence8 = xorResult.substring(42, 48);

		let bytes4Sequence1 = Sequence6bytesTo4bytes(
			bytes6Sequence1,
			Constants.S1
		); // krok 11, 12
		let bytes4Sequence2 = Sequence6bytesTo4bytes(
			bytes6Sequence2,
			Constants.S2
		);
		let bytes4Sequence3 = Sequence6bytesTo4bytes(
			bytes6Sequence3,
			Constants.S3
		);
		let bytes4Sequence4 = Sequence6bytesTo4bytes(
			bytes6Sequence4,
			Constants.S4
		);
		let bytes4Sequence5 = Sequence6bytesTo4bytes(
			bytes6Sequence5,
			Constants.S5
		);
		let bytes4Sequence6 = Sequence6bytesTo4bytes(
			bytes6Sequence6,
			Constants.S6
		);
		let bytes4Sequence7 = Sequence6bytesTo4bytes(
			bytes6Sequence7,
			Constants.S7
		);
		let bytes4Sequence8 = Sequence6bytesTo4bytes(
			bytes6Sequence8,
			Constants.S8
		);

		// szymciowy kod

		// KROK #13
		let joinedSequence = joinSequences(
			bytes4Sequence1,
			bytes4Sequence2,
			bytes4Sequence3,
			bytes4Sequence4,
			bytes4Sequence5,
			bytes4Sequence6,
			bytes4Sequence7,
			bytes4Sequence8
		);
		// KROK #14
		let finalBlockR = arrayPermutation(joinedSequence, Constants.tableP);
		let blocksAfterXOR = XOR(finalBlockR, BlockL);
		BlockL = BlockR.slice()
		BlockR = blocksAfterXOR;
	}
	let finalSequence = BlockR + BlockL;
	let permutedFinal = arrayPermutation(
		finalSequence.split(""),
		Constants.TableIP1
	);
	console.log(permutedFinal.join(""));

	//TO TYLKO DO SPRAWDZENIA - wydaje mi sie ze dopiero pozniej przy innych podpunktach trzeba to wykorzystac
	// outputText = TablePermutation(outputText, Constants.TableIP1, 64);
	outputText = BytesToString(permutedFinal.join(""));
	console.log(outputText);
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
        // eksperymenty zmiany
        return inputText
		// inputText += "0000000";
		// inputText += 8;
	} else {
		for (let a = n % 8; a < 7; a++) {
			inputText += "0";
		}
		inputText += 8 - (n % 8);
	}

	return inputText;
}

//USUWA NADMIAROWY BYTE
function RemoveBytes(inputText) {
	let n = inputText.length;
	let bytesCount = inputText.charAt(n - 1);
	let outputText = inputText.substring(0, n - bytesCount);

	return outputText;
}

//Pozwala w latwy sposob ustawic chara w stringu
function setCharAt(text, id, c) {
	if (id > text.length - 1) return text;
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
			inputText: "",
			output: "",
		};
	}

	//SZYFROWANIE
	Ciphering() {
		var props = { inputText: this.state.inputText, key: this.state.key };
		let outputText = "";

		let inputText = this.state.inputText;
		let key = this.state.key;
		inputText = AddBytes(inputText); //dodanie nadmiarowego bitu
		let n = inputText.length;

		//Podzial wiadomosci na 64 bitowe bloki i wykonanie na nich algorytmuDES
		for (let a = 0; a < n; a += 8) {
			let x = inputText.substring(a, a + 8);
			outputText += AlgorithmDES(x, key);
		}

		// outputText = RemoveBytes(outputText);   //usuwanie nadmiarowego bitu
		// console.log(`OSTATNI: ${outputText}`)

		this.setState({ output: outputText });
	}

	//DESZYFROWANIE - to bedzie prawie takie same co szyfrowanie
	Deciphering() {
		var props = { inputText: this.state.inputText, key: this.state.key };

		let outputText = this.state.inputText;

		// outputText = RemoveBytes(outputText);   //usuwanie nadmiarowego bitu
		// console.log(`OSTATNI: ${outputText}`)
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
					<input
						value={inputText}
						onChange={this.handleInputChange}
					/>
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

export default DES;
