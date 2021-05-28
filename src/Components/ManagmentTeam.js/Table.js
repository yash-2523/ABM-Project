import React from 'react'
import TableRow from './TableRow'

export default function Table() {

    const Data = [
        {
            "Name": "Budget",
            "Access Level": 1,
            "Summary": ["View","Edit","Create","Delete"],
            "Last Updated": "1 min ago",
            "switch": true,
        },
        {
            "Name": "Bidding",
            "Access Level": 3,
            "Summary": [],
            "Last Updated": "1 min ago",
            "switch": false,
        },
        {
            "Name": "Vendor Portal",
            "Access Level": 2,
            "Summary": ["View","Create"],
            "Last Updated": "1 min ago",
            "switch": true,
        },
        {
            "Name": "Purchase Order/Work Order",
            "Access Level": 2,
            "Summary": ["View","Create"],
            "Last Updated": "1 min ago",
            "switch": true,
        },
        {
            "Name": "Organisational Profile",
            "Access Level": 2,
            "Summary": ["View","Edit","Create","Delete"],
            "Last Updated": "1 min ago",
            "switch": true,
        },
        {
            "Name": "Permissions & Access Control",
            "Access Level": 3,
            "Summary": [],
            "Last Updated": "1 min ago",
            "switch": false,
        },
    ]

    return (
        <table className="w-100 px-lg-1 px-md-1 mt-4 tables">
            <thead>
                <tr>
                    <th></th>
                    <th>Deparment/Role Name</th>
                    <th>Access Level</th>
                    <th>Summary</th>
                    <th>Last Updated</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {Data.map((data,id) => 
                    <TableRow key={id} data={data}></TableRow>
                )}
                
            </tbody>

        </table>
    )
}
