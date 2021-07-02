import React from 'react'
import {formatCurrency} from "utils"

interface Props {
    balance?: number;
    accountType?: string;
    bankname: string;
    accountNumber?: number;
    icon?: string;
    type?: string;
}

// blue card color code #2196F3
// green card color code #21F3B8

export const Card = ({balance, accountType, bankname, accountNumber, icon, type}: Props) => {
    return (
        <div className={`card-box ${type === "left" && "left-card"}`}>
            <div className="top">
                <div className="left">
                    <p id="acc">{accountType} Account</p>
                    <p id="num">{bankname} - {accountNumber}</p>
                </div>
                <img src={icon} alt="card" id="card-icon" />
            </div>
            <div className="down">
                <p id="balance">{formatCurrency(balance?.toString() || "0", "NGN")}</p>
            </div>
        </div>
    )
}
