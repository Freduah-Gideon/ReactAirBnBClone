import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
export default class TextExperience extends Component {

    render(){
        return(
            <div className='textExperienceDiv'>
                <div className='textExperienceFirstText'>
                    <p>Online Experiences</p>
                    <h3>Join Interactive, global adventures with aspiring, kid-friendly hosts</h3>
                </div>

                <div className='textExperienceSecondButton'>
                    <p>Explore all</p>
                </div>
            </div>
        )
    }
}