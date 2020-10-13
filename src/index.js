import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/heading/header/header.js'
import Hero from './components/hero/main/hero.js'
import GuestSnippet from './components/hero/form/snippet/guestSnippet.js'
ReactDOM.render(<Header /> , document.getElementById('header'))
ReactDOM.render(<Hero />, document.getElementById('hero-div'))
ReactDOM.render(<GuestSnippet />, document.getElementById('root'))
