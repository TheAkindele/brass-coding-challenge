import React from "react"

export const Sidebar = ({smallNav}: any) => {
    return (
        <div className="sider">
            <div id="menu-box"
                onClick={() => smallNav()}
            >
                <img src="icons/cancelss.svg" alt="hamburger" id="hamburger" />
            </div>
            <div className="step1">
                <img src="/icons/brass-logo.png" alt="icon" id="logo"/>
                <div className="name-box">
                </div>
            </div>
            <div className="step2">
                <ul className={`menu-list`}>
                <li className="list">
                        <img src="/icons/invoice.svg" alt="icon" id="list" />
                        <p>Invoice</p>
                    </li>
                    <li className="list">
                        <img src="/icons/management.svg" alt="icon" id="list" />
                        <p>Transfers</p>
                    </li>
                    <li className="list">
                        <img src="/icons/management.svg" alt="icon" id="list" />
                        <p>Security</p>
                    </li>
                    <li className="list">
                        <img src="/icons/management.svg" alt="icon" id="list" />
                        <p>Support</p>
                    </li>
                </ul>
                
            </div>
        </div>
    )
}
