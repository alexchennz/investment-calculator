import React, { useState } from "react";
import classes from "./Form.module.css";

const initialData = {
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    'duration': 10
};

const Form = (props) => {

    const [userInput, setUserInput] = useState(initialData);

    const submitHandler = (event) => {
        event.preventDefault();
        props.onCalculate(userInput);
    }

    const resetHandler = () => {
        setUserInput(initialData);
    }

    const inputChangeHandler = (input, value) => {
        // console.log(input, value);
        setUserInput((prevData) => {
            return {
                ...prevData,
                [input]: +value
            }
        });
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes["input-group"]}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" 
                    value={userInput["current-savings"]} 
                    onChange={(event) => inputChangeHandler('current-savings', event.target.value)}
                    id="current-savings" />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" value={userInput["yearly-contribution"]} onChange={(event) => inputChangeHandler('yearly-contribution', event.target.value)} id="yearly-contribution" />
                </p>
            </div>
            <div className={classes["input-group"]}>
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" value={userInput["expected-return"]} onChange={(event) => inputChangeHandler('expected-return', event.target.value)} id="expected-return" />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" value={userInput["duration"]} onChange={(event) => inputChangeHandler('duration', event.target.value)} id="duration" />
                </p>
            </div>
            <p className={classes.actions}>
                <button type="reset" className={classes.buttonAlt} onClick={resetHandler}>
                    Reset
                </button>
                <button type="submit" className={classes.button}>
                    Calculate
                </button>
            </p>
        </form>
    )
}

export default Form;