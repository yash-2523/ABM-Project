import React, { useState } from 'react'
import { colGap } from '../../Dynamic Styles/styles'

export default function Tabbar() {

    const [activeTab,setActiveTab] = useState(0);

    return (
        <div className="w-100 px-2 d-flex align-items-center tabbar" style={colGap(0.7)}>
            <button className={activeTab === 0 ? "active": ""} onClick={() => setActiveTab(0)}>Access Control</button>
            <span>|</span>
            <button className={activeTab === 1 ? "active": ""} onClick={() => setActiveTab(1)}>Assigned Members</button>
        </div>
    )
}
