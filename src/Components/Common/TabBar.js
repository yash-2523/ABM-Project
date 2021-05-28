import { RssFeed, SyncOutlined, ViewModuleOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import { colGap } from '../../Dynamic Styles/styles'

export default function TabBar() {

    const [tabBar,setTabBar] = useState(0);
    return (
        <div className="pt-5 w-100 px-lg-3 px-md-3 px-1 d-flex align-items-center justify-content-between tabbar">
            <span className="d-flex align-items-center" style={colGap(0.7)}>
                <button className={"d-flex align-items-center" + (tabBar === 0 ? " active" : "")} onClick={() => setTabBar(0)} style={colGap(0.3)}>
                    <RssFeed></RssFeed>
                    <p>Permissions</p>
                </button>
                <span>|</span>
                <button className={"d-flex align-items-center" + (tabBar === 1 ? " active" : "")} onClick={() => setTabBar(1)} style={colGap(0.3)}>
                    <ViewModuleOutlined></ViewModuleOutlined>
                    <p>Approval Matrix</p>
                </button>
            </span>
            <div className="d-flex" style={colGap(0.5)}>
                <SyncOutlined style={{transform: "rotateZ(90deg)",color: "#888888"}}></SyncOutlined>
                Last synced 15 min ago
            </div>
        </div>
    )
}
