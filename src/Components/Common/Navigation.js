import { HelpOutline, NotificationsOutlined } from '@material-ui/icons'
import React from 'react'
import {colGap} from '../../Dynamic Styles/styles'

export default function Navigation() {


    

    return (
        <div className="w-100 px-lg-5 px-md-3 px-1 d-flex justify-content-between align-items-center navigation">
            <div className="d-flex justify-content-between align-items-center" style={colGap(1)}>
                <img src="Subtract.png" width={25} height={25} className="rounded-circle"></img>
                <img height={20} src="mysite.png"></img>
            </div>
            <div className="d-flex justify-content-between align-items-center" style={colGap(1.2)}>
                <div className="d-flex justify-content-around align-items-center" style={colGap(0.7)}>
                    <img src="Oval.png" width={25} height={25}></img>
                    <b>Kishore</b>
                </div>
                <div className="d-flex justify-content-between align-items-center" style={colGap(0.7)}>
                    <NotificationsOutlined style={{color: "#888888"}}></NotificationsOutlined>
                    <HelpOutline style={{color: "#888888"}}></HelpOutline>
                </div>
            </div>
        </div>
    )
}
