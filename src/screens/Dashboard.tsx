import React, {useState} from 'react'
import {Card, Button, Table, Modal} from "components"

interface Props {
    smallNav?: () => void;
}


export const sampleHeader = [
	{ title: "S/N", key: "sn", component: null },
    { title: "Name", key: "name", component: null },
    { title: "UserId", key: "id", component: null },
    { title: "S/N", key: "sn", component: null },
    { title: "S/N", key: "sn", component: null },
];

export const Dashboard = ({smallNav}: Props) => {
    const [modal, setModal] = useState({ open: false, modalType: "", modalObj: {} });
    const showModal = (modalObj: string) => {
		setModal({ open: true, modalType: "modal", modalObj});
	};

	const closeModal = () => {
		setModal({ open: !modal, modalType: "", modalObj: {} });
	};


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
                <Button 
                    text="Transfer Fund" 
                    className="dash-btn" 
                    // onClick={}
                />
            </div>
            <main className="step3">
                <Card
                    balance={50002974}
                    accountNumber={1234567890}
                    bankname={"JogbJogbo bank"}
                    accountType="Savings"
                    icon="/icons/green-card.svg"
                    type="left"
                />
                <Card
                    balance={929704}
                    accountNumber={1234567890}
                    bankname={"Alaye Bank"}
                    accountType="Current"
                    icon="/icons/blue-card.svg"
                />
            </main>
            <section>
                <h3>Transaction History</h3>
                <Table header={sampleHeader} data="" />
            </section>
            <>
                <Modal 
                    modalOpen={modal.open}
                    modalClose={closeModal}
                    // modalChild={
                    //     modal.modalType === "modal" && <WebcamCapture 
                    //     modalClose={closeModal} modalContent={modal.modalObj} />
                    // }
                    className="verify-modal"
                />
            </>
        </div>
    )
}
