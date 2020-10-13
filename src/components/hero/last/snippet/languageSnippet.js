import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import "./languagesnippet.css";
export default class LanguageSnippet extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className='language-snippet snippet hide' id='language-snippet'>
                <div>
                    <span className='fa fa-globe'></span>
                    <p>English (US)</p>
                </div>
                <div>
                    <p className='fa fa-dollar'></p>
                    <p>USD</p>
                </div>
            </div>
        )
    }
}