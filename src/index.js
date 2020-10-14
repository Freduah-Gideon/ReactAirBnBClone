import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/heading/header/header.js'
import Hero from './components/hero/main/hero.js'
import AfterHero from './components/afterHero/main/main.js'
import Explore from './components/explore/main/main.js'
import BlackLivesMatter from './components/blackLivesMatter/main/main.js'
ReactDOM.render(<Header /> , document.getElementById('header'))
ReactDOM.render(<Hero />, document.getElementById('hero-div'))
ReactDOM.render(<AfterHero />,document.getElementById('afterHero'))
ReactDOM.render(<Explore />,document.getElementById('more'))
ReactDOM.render(<BlackLivesMatter />,document.getElementById('blackLivesMatter'))