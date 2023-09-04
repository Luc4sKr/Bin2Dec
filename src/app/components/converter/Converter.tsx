import { useState } from 'react'

import style from "./Converter.module.css";

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

        for (let i = binaryText.length; i > 0; i--) {
            decimal += Number(binaryText[i - 1]) * Math.pow(2, i - 1);
        }

        setDecimalText(String(decimal));
    }

    return (
        <form onSubmit={onFormSubmit} className={style.form}>
            {errorMessage && <span style={{ color: 'red' }}>{errorMessage}</span>}
            <div className={style.formControl}>
                <label className={style.formLabel}>
                    Binary:
                </label>
                <input
                    className={style.formInput}
                    type="text"
                    autoComplete="off"
                    name="binary"
                    placeholder="Enter 0 or 1"
                    value={binaryText}
                    onChange={e => setBinaryText(e.target.value)}
                />
            </div>

            <div className={style.formControl}>
                <label className={style.formLabel}>
                    Decimal:
                </label>
                <input
                    className={style.formInput}
                    type="text"
                    name="decimal"
                    placeholder="Result"
                    value={decimalText}
                    disabled
                />
            </div>

            <button type="submit" className={style.submitBtn}>Convert</button>
        </form>
    )
}