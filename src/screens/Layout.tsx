import React, {useState} from 'react'
import {Dashboard} from "./Dashboard"
import {Sidebar} from "../components"

export const Layout = () => {
    const [side, setSide] = useState(false)
    const toggleSide = () => setSide(!side)

    return (
        <div className="layout">
            <div className="log-sider">
                <Sidebar smallNav={toggleSide}/>
            </div>
            <div className="log-content">
                <Dashboard smallNav={toggleSide}/>
            </div>
            <div className={`small-menu ${side ? "side-open" : "side-close"}`}>
                <Sidebar smallNav={toggleSide} small={true}/>
            </div>
        </div>
    )
}
