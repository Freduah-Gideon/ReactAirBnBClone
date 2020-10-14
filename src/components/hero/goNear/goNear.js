import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './goNear.css'
export default class GoNear extends Component {

    render() {
        return (
            <div className='goNearDiv'>
                <p className='goNearText'>Go Near</p>
                <h3 className='goNearMoreText'>Settle in somewhere new. Discover stays to live, work, or just relax</h3><br />
                 <a href='' className='goNearExplore'>Explore nearby</a>
            </div>
        )
    }
}