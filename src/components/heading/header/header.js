import React from 'react'
import ReactDOM from 'react-dom'
import COVIDINFO from './covid.js'

export default class Header extends React.Component{


  render(){
    return(
      <header>
      <COVIDINFO />
      </header>
    )
  }
}
