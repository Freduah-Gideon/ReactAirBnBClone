import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import LeftMessage from '../components/left/left.js'
import RightMessage from '../components/right/right.js'
import './main.css'
export default class BlackLivesMatter extends Component{
    render(){
        return(
            <div className='messageContainer'>   
                <LeftMessage />
                <RightMessage />
            </div>
        )
    }
}

