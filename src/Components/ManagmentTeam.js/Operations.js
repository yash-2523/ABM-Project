import { IconButton } from '@material-ui/core'
import { KeyboardBackspace, EditOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { colGap } from '../../Dynamic Styles/styles'

export default function Operations() {
    return (
        <div className="d-flex align-items-center managment-operations" style={colGap(1)}>
            <IconButton onClick={() => window.location="/"}><KeyboardBackspace style={{color: "#888888"}}></KeyboardBackspace></IconButton>
            <p>Managment Team</p>
            <EditOutlined style={{color: "#888888"}}></EditOutlined>
        </div>
    )
}
