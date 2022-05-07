import React from 'react';


function AlgorithmDES(props) {
    let newText = props.inputText;

    return <p>{newText}</p>;
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
        this.Ciphering = this.Ciphering.bind(this);
        this.Deciphering = this.Deciphering.bind(this);
        this.state = {
            inputText: '',
            output: ''
        };
    }    

    Ciphering() {
        var props = { inputText: this.state.inputText };
        let outputText = AlgorithmDES(props);
        this.setState({ output: outputText });
    }

    Deciphering() {
        var props = { inputText: this.state.inputText };
        let outputText = AlgorithmDES(props);
        this.setState({ output: outputText });
    }

    handleInputChange(newText) {
        this.setState({ inputText: newText.target.value });
    }

    render() {
        const inputText = this.state.inputText;
        const output = this.state.output;

        return (
            <div>
                <h1>Szyfr DES</h1>
                <p>
                    Input Text:&emsp;
                    <input value={inputText} onChange={this.handleInputChange} />
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