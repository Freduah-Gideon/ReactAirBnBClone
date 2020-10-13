import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import logo from './images/airbnb.svg'

export default class Logo extends Component {
    render() {
        return (
            <div>
                <a href='http://localhost:3000'>
                    <img style={{ color: 'white' }} width='100px' src={logo} />
                </a>
            </div>
        )
    }
}