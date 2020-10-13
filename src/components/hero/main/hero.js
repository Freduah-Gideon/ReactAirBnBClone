import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Logo from '../logo/logo.js'
import Middle from '../middle/middle.js'
import Form from '../form/form.js'
import Last from '../last/last.js'
import './hero.css'
export default class Hero extends Component{
    render(){
        return(
            <main className='hero-header'>
            <Logo />

            <div >
                <div style={{marginLeft:'200px'}}>
                <Middle />
                </div>
                <Form />
            </div>

            <Last />
            </main>
        )
    }
}