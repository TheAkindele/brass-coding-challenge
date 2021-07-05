import React, {useState} from 'react'
import {Table, Modal} from "components"
import {TransferForm} from  "./Transfer.form"
import {useSelector} from "react-redux"
import {formatCurrency} from "utils"
import {Details} from "./Details"

interface Props {
    smallNav?: () => void;
}


export const tableHeader = [
	{ title: "S/N", key: "sn", component: null },
    { title: "Receiver", key: "receiver", component: null },
    { title: "Amount", key: "amount", component: ({item}: any) => (
        <span>{formatCurrency(item?.toString() || "0", "NGN")}</span>
    ) },
    { title: "Bank", key: "bank", component: null },
    {title: "Account", key: "account", component: null},
    {title: "Details", key: "details", component: ({ data: { onClick } }: any) => (
        <button onClick={onClick} className="transaction-details">
            Details
        </button>
    ),}
];


export const Dashboard = ({smallNav}: Props) => {
    const [modal, setModal] = useState({ open: false, modalType: "", modalObj: {} });
    const showModal = (modalObj: any) => {
		setModal({ open: true, modalType: "modal", modalObj});
	};

	const closeModal = () => {
		setModal({ open: !modal, modalType: "", modalObj: {} });
	};

    const {transactions, loading} = useSelector((state: any) => state.verification)


    return (
        <div className="dashboard">
            <nav>
                <div className="logo-box">
                    <img src="/icons/brass-logo.png" alt="logo" id="logo" />
                </div>
                <div className="menu-box" onClick={() => smallNav && smallNav()}>
                    <img src="/icons/hamburger.svg" alt="menu" />
                </div>
            </nav>
            <div className="step1">
                <p>Dashboard</p>
                <div className="profile">
                    <img src="/icons/bell.svg" alt="bell" />
                    <img src="/icons/avatar.svg" alt="avatar" id="avatar" />
                </div>
            </div>
            <div className="step2">
                <div className="greeting">
                    <p id="welcome">Hello Emmanuel</p>
                    <p id="here">Welcome back</p>
                </div>
            </div>
            
            <section>
                <div className="form-box">
                <h3>Transfer Form</h3>
                    <TransferForm />
                </div>
                <div className="history">
                    <h3>Transaction History</h3>
                    <Table 
                        header={tableHeader}
                        data={transactions.length && [...transactions]?.map((item: any, i: any) => ({
                            ...item,
                            sn: ++i,
                            receiver: item?.receiver,
                            amount: item?.amount,
                            bank: item?.bankName,
                            account: item?.accountNumber,
                            onClick: () => showModal(item)
                        }))} 
                        loading={loading}
                    />
                </div>
            </section>
            <>
                <Modal 
                    modalOpen={modal.open}
                    modalClose={closeModal}
                    modalChild={
                        modal.modalType === "modal" && <Details 
                        modalClose={closeModal} modalContent={modal.modalObj} />
                    }
                />
            </>
        </div>
    )
}
