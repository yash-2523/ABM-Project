
import { BusinessCenterOutlined, DashboardOutlined, Security } from '@material-ui/icons'
import React, { useState } from 'react'
import { colGap } from '../../Dynamic Styles/styles'

export default function SideNav() {


    const [sideNavTab,setSideNavTab] = useState(2);

    return (
        <div className="pt-4 px-lg-1 d-flex flex-column side-nav">
            <div className={"px-lg-4 py-2 d-flex align-items-center" + (sideNavTab===0 ? " side-nav-active" : "")} style={colGap(0.7)} onClick={() => setSideNavTab(0)}>
                <DashboardOutlined></DashboardOutlined>
                <p>Projects</p>
            </div>
            <div className={"px-lg-4 py-2 d-flex align-items-center" + (sideNavTab===1 ? " side-nav-active" : "")} style={colGap(0.7)} onClick={() => setSideNavTab(1)}>
                <BusinessCenterOutlined></BusinessCenterOutlined>
                <p>Organisation Profile</p>
            </div>
            <div className={"px-lg-4 py-2 d-flex align-items-center" + (sideNavTab===2 ? " side-nav-active" : "")} style={colGap(0.7)} onClick={() => setSideNavTab(2)}>
                <Security></Security>
                <p>Access Control</p>
            </div>
        </div>
    )
}
