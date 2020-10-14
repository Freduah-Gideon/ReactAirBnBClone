import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Logo from '../logo/logo.js'
import Middle from '../middle/middle.js'
import Form from '../form/form.js'
import Last from '../last/last.js'
import './hero.css'
import GuestSnippet from '/home/freduah/React/Airbnb/src/components/hero/form/snippet/guestSnippet.js'
import GoNear from '../goNear/goNear.js'

export default class Hero extends Component{
    toggleGuestChildren = ()=>{
        const guestChild = document.getElementById('guestChild')
        guestChild.classList.toggle('hide')
    }
    render(){
        return(
            <main >
                <section className='hero-header'>

            <Logo />
            <div >
                <div style={{marginLeft:'200px'}}>
                <Middle />
                </div>
                <Form toggleGuestChildren={this.toggleGuestChildren}/>
                <div style={{position:'absolute',right:'420px'}}>
                <GuestSnippet />
                </div>
            </div>
            <Last />
            </section>

            <div>
                <GoNear />
            </div>
            </main>
        )
    }
}