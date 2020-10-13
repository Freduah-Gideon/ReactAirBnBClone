import React, { Component } from 'react'
import './last.css'
import avatar from './images/avatar.png'
import LanguageSnippet from './snippet/languageSnippet'
import UserDetailsSnipppet from './snippet/userDetailsSnippet'
export default class Last extends Component {
    constructor(props) {
        super()

    }
    toggleDetails = () => {
        const ele = document.getElementById('userDetailsSnippet')
        console.log(ele)
        ele.classList.toggle('hide')
    }
    toggleLanguage = () => {
        const ele = document.getElementById('language-snippet')
        ele.classList.toggle('hide')
    }
    render() {
        return (
            <section>
                <div className='last'>
                    <div className='become-a-host'>
                        <a href='' style={{ color: 'white', textDecoration: 'none' }}>Become a host</a>
                    </div>
                    <div className='language-div' onClick={this.toggleLanguage} id='language-div'>
                        <span className='fa fa-globe'></span>
                        <span className='fa fa-angle-down'></span>
                    </div>

                    <div className='userContainer' onClick={this.toggleDetails}>
                        <div className='fa fa-bars'>
                        </div>
                        <div className='avatarContainer'>
                            <img src={avatar} className='avatar' />
                        </div>
                        <div className='notify-count'>
                            <p>0</p>
                        </div>
                    </div>
                </div>
                <LanguageSnippet />
                <UserDetailsSnipppet />
            </section>
        )
    }
}