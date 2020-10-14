import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './left.css'
export default class LeftMessage extends Component {
    render() {
        return (
            <div className='leftDiv'>
                <p className='leftMessage'>
                    We embrace a world where everyone belongs, and stand with #BlackLivesMatter
                </p>
                <p className='leftLink'>
                    <a href=''>
                        Learn More
                    </a>
                </p>
            </div>
        )
    }
}