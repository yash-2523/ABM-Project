import React from 'react'
import Tabbar from './Tabbar'
import Table from './Table'

export default function Content() {
    return (
        <div className="w-100 mt-4 pb-5 px-lg-4 px-md-2 px-1">
            <Tabbar></Tabbar>
            <Table></Table>
        </div>
    )
}
