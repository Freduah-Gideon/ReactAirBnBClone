import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './guestSnippet.css'
export default class GuestSnippet extends Component{
    constructor(){
        super()
        this.state = {
            counter : {
                AdultsCounter : 0,
                ChildrenCounter : 0,
                InfantsCounter : 0
            }
        }
    }
    incrementGuestCount = (event) =>{
        const event_name = event.target
        const attr = event_name.getAttribute('data-target')
        console.log(this.state.counter.attr)
        this.setState(()=>{})
    }
    render() {
        return (
            <div className='guestSnippetContainer hide' id='guestChild'>
                <div className='guestSnippetChild'>
                    <section className='guestSnippetChild1'>
                        <p>Adults</p>
                        <p className='dim'>Ages 13 or above</p>
                    </section>

                    <section className='guestSnippetChild2'>
                        <div className='changesIconDiv'>
                        <p className='changesIcon' onClick={this.decrementGuestCount} style={{marginLeft:'8px',marginTop:'-13px'}} >&#45;</p>
                        </div>
                        <p className='changesCounter' id='AdultCounter'>
                            {this.state.counter.AdultsCounter}
                        </p>
                        <div className='changesIconDiv' data-target='changesCounter'>
                            <p className='changesIcon' data-target='AdultCounter' onClick={this.incrementGuestCount}>&#43;</p>
                        </div>
                    </section>
                </div>
                <div className='guestSnippetChild'>
                    <section className='guestSnippetChild1'>
                        <p>Children</p>
                        <p className='dim'>Ages 2-12</p>
                    </section>
                    <section className='guestSnippetChild2'>
                        <div className='changesIconDiv'>
                        <p className='changesIcon' onClick={this.decrementGuestCount} style={{marginLeft:'8px',marginTop:'-13px'}}>&#45;
                        </p>
                        </div>
                        <p className='changesCounter'>
                            {this.state.counter.ChildrenCounter}
                        </p>
                        <div className='changesIconDiv'>
                            <p className='changesIcon' onClick={this.incrementGuestCount}>&#43;</p>
                        </div>
                    </section>
                </div>
                <div className='guestSnippetChild'>
                    <section className='guestSnippetChild1'>
                        <p>Infants</p>
                        <p className='dim'>Under 2</p>
                    </section>
                    <section className='guestSnippetChild2'>
                        <div className='changesIconDiv'>
                        <p className='changesIcon' onClick={this.decrementGuestCount} style={{marginLeft:'8px',marginTop:'-13px'}} >&#45;</p>
                        </div>
                        <p className='changesCounter'>
                            {this.state.counter.InfantsCounter}
                        </p>
                        <div className='changesIconDiv'>
                            <p className='changesIcon' onClick={this.incrementGuestCount}>&#43;</p>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}