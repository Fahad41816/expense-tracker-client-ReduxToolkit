import React from 'react';
import {useSelector}  from "react-redux"
import numberWithCommas from '../utils/numberWithcomas';

const Balance = () => {
    
    const {transections} = useSelector((state)=> state.expense)

    let TotalBalance = 0; 

    transections.forEach((data) => {
        if(data.type === "income"){
            TotalBalance += data.amount
        }else{
            TotalBalance -= data.amount
        }


    });

    return (
    <div className="top_card">
        <p>Your Current Balance</p>
        <h3>
            <span>৳</span>
            <span>{numberWithCommas(TotalBalance)}</span>
        </h3>
    </div>
    );
};

export default Balance;