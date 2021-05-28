import { Button } from '@material-ui/core'
import { Add, DeleteOutline, EditOutlined } from '@material-ui/icons'
import React from 'react'
import { colGap } from '../../Dynamic Styles/styles'

export default function Operations() {
    return (
        <div className="d-flex align-items-center operations" style={colGap(1)}>
            <Button variant="contained" startIcon={<Add />} style={{backgroundColor: '#673AB7',color: "white"}}>Add One</Button>
            <EditOutlined style={{color: "#888888"}}></EditOutlined>
            <DeleteOutline style={{color: "#888888"}}></DeleteOutline>
        </div>
    )
}
