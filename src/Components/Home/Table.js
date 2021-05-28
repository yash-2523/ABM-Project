import { Radio, RadioGroup } from '@material-ui/core'
import { VisibilityOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { colGap } from '../../Dynamic Styles/styles'

export default function Table() {

    const Data = [
        {
            "Name": "Management Team",
            "Access Level": "All Access",
            "No of memebers": "4",
            "Last Updated": "1 min ago"
        },
        {
            "Name": "Procurement Team",
            "Access Level": "Restricted Access",
            "No of memebers": "8",
            "Last Updated": "1 min ago"
        },
        {
            "Name": "Project Team",
            "Access Level": "Restricted Access",
            "No of memebers": "16",
            "Last Updated": "1 min ago"
        },
        {
            "Name": "IT Team",
            "Access Level": "Restricted Access",
            "No of memebers": "4",
            "Last Updated": "1 min ago"
        },
        {
            "Name": "Super Admin",
            "Access Level": "All Access",
            "No of memebers": "1",
            "Last Updated": "1 min ago"
        },

    ]

    return (
        <table className="w-100 px-1 mt-4 tables">
            <thead>
                <tr>
                    <th></th>
                    <th>Deparment/Role Name</th>
                    <th>Access Level</th>
                    <th>No of members</th>
                    <th>Last Updated</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {Data.map(data => 
                    <tr>
                        <td className="text-right"><Radio disabled /></td>
                        <td><Link to="/managment">{data.Name}</Link></td>
                        <td><div className={"w-100 access" + (data['Access Level']==="Restricted Access" ? " restricted": "")}>{data['Access Level']}</div></td>
                        <td>{data['No of memebers']}</td>
                        <td>{data['Last Updated']}</td>
                        <td><VisibilityOutlined style={{color: "#888888"}}></VisibilityOutlined></td>
                    </tr>
                )}
                
                
            </tbody>
            
        </table>
    )
}
