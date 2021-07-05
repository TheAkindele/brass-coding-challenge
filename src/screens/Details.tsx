import React from 'react'
import {formatCurrency} from "utils"

interface Props {
    modalClose?: () => void;
    modalContent?: any;
}

export const Details = ({modalContent}: Props) => {
    const {receiver, amount, bankName, accountNumber } = modalContent

    return (
        <div className="details">
            <h4>Transaction Details</h4>
            <main>
                <div className="row">
                    <div className="list">
                        <span id="title">Receiver:</span>
                        <span id="desc">{receiver}</span>
                    </div>
                    <div className="list">
                        <span id="title">Amount:</span>
                        <span id="desc">{formatCurrency(amount?.toString() || "0", "NGN")}</span>
                    </div>
                    <div className="list"> 
                        <span id="title">Receiver's Bank:</span>
                        <span id="desc">{bankName}</span>
                    </div>
                    <div className="list">
                        <span id="title">Account Number:</span>
                        <span id="desc">{accountNumber}</span>
                    </div>
                </div>
            </main>
        </div>
    )
}
