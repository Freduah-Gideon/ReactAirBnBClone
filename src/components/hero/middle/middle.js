import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './middle.css'
export default class HeroMiddle extends Component {
    toggleForm = (event) => {
        const group = document.getElementById('group-form')
        const exp = document.getElementById('experience-form')

        event.target.getAttribute('role') === 'experience' ?
            (() => {
                exp.classList.remove('hide')
                group.classList.add('hide')
            })()
            :
            (() => {
                exp.classList.add('hide')
                group.classList.remove('hide')
            })()

    }
    render() {
        return (
            <section className='middle'>

                <p onClick={this.toggleForm}>Places to stay</p>

                <p onClick={this.toggleForm} role='experience'>Experiences</p>

                <p> <a href='' className='middle-link'>Online Experiences </a></p>
            </section>
        )
    }
}