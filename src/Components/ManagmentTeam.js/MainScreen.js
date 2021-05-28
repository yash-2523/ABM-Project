import React from 'react'
import Content from './Content'
import Operations from './Operations'

export default function MainScreen() {
    return (
        <div className="w-100 mt-4 px-lg-5 px-md-3 px-1">
            <Operations></Operations>
            <Content></Content>
        </div>
    )
}
