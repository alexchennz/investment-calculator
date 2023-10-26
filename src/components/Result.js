import React from "react";
import classes from "./Result.module.css";

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

const Result = (props) =>{
    /* Todo: Show below table conditionally (only once result data is available) */
    /* Show fallback text if no data is available */
    return (
        
        <table className={classes.result}>
            <thead>
            <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
            {props.data.map((yearData) => (
                <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.savingsEndOfYear)}</td>
                    <td>{formatter.format(yearData.yearlyInterest)}</td>
                    <td>{formatter.format(yearData.savingsEndOfYear - props.initialInvestment - yearData.yearlyContribution * yearData.year)}</td>
                    <td>{formatter.format(props.initialInvestment + yearData.yearlyContribution * yearData.year)}</td>
                </tr>
            ))
            }
            </tbody>
        </table>
    )
}

export default Result;