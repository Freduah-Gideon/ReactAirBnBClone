import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import  './userDetailsSnippet.css'
export default class UserDetailsSnippet extends Component {
    constructor() {
        super()
        this.state = {
            logged_in: false,
            key : 0
        }
    }
    loggedIn_lists = [
        { link: '1', name: 'Messages' },
        { link: '2', name: 'Notifications' },
        { link: '3', name: 'Trips' },
        { link: '4', name: 'Saved' },
        { link: '5', name: 'Host Your Home' },
        { link: '6', name: 'Host An Experience' },
        { link: '7', name: 'Account' },
        { link: '8', name: 'Help' },
        { link: '9', name: 'Logout' }
    ]
    loggedOut_lists = [
        { link: '1', name: 'Log In' },
        { link: '2', name: 'Sign Up' },
        { link: '3', name: 'Host Your Home' },
        { link: '4', name: 'Host An Experience' },
        { link: '5', name: 'Help' }
    ]
    render_lists = () => {
        return this.state.logged_in ? 
        this.loggedIn_lists.map((list) => <a className='snippet-link' href='' key={list.key}> <p>{list.name} </p></a> ) 
        : 
        this.loggedOut_lists.map(list => <a className='snippet-link' href='' key={list.key} href={list.link}> <p>{list.name}</p></a> )
    }
    render() {
        return (
            <div className='snippet userDetailsSnippet' style={{display : this.props.DetailVisibility}} id='userDetailsSnippet'>
            {this.render_lists()}

            </div>

        )
    }
}