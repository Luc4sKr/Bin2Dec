import { useState } from 'react'

export const Converter = () => {
    const [binaryText, setBinaryText] = useState('');
    const [decimalText, setDecimalText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const onFormSubmit = (e: any) => {
        e.preventDefault();

        if (binaryText.match(/^[0-1]+$/g) === null) {
            setErrorMessage('Enter either 0 or 1');
            return
        }

        setErrorMessage('');
        convertToDecimal(binaryText);
    }

    const convertToDecimal = (binaryText: string) => {
        let decimal = 0;
        
        binaryText = binaryText
            .split("")
            .reverse()
            .join("");

        for(let i = binaryText.length; i > 0; i--) {
            decimal += Number(binaryText[i-1]) * Math.pow(2, i-1);
        }

        setDecimalText(String(decimal));
    }

    return (
        <form onSubmit={onFormSubmit}>
            {errorMessage && <span style={{ color: 'red' }}>{errorMessage}</span>}
            <div>
                <label>
                    Binary
                    <input
                        type="text"
                        autoComplete="off"
                        name="binary"
                        placeholder="Enter 0 or 1"
                        value={binaryText}
                        onChange={e => setBinaryText(e.target.value)}
                    />
                </label>
            </div>

            <div>
                <label>
                    Decimal
                    <input
                        type="text"
                        name="decimal"
                        placeholder="Result"
                        value={decimalText}
                        disabled
                    />
                </label>
            </div>

            <button type="submit">Convert</button>
        </form>
    )
}