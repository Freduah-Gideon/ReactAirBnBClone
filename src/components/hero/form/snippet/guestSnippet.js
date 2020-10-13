import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './guestSnippet.css'
export default class GuestSnippet extends Component{
    render() {
        return (
            <div className='guestSnippetContainer'>
                <div className='guestSnippetChild'>
                    <section className='guestSnippetChild1'>
                        <p>Adults</p>
                        <p className='dim'>Ages 13 or above</p>
                    </section>

                    <section className='guestSnippetChild2'>
                        <div>
                        <span className='fa fa-minus-circle changesIcon'></span>
                        </div>
                        <span className='changesCounter'>
                            0
                        </span>
                        <div>
                            <span className='fa fa-plus-circle changesIcon'></span>
                        </div>
                    </section>
                </div>
                <div className='guestSnippetChild'>
                    <section className='guestSnippetChild1'>
                        <p>Children</p>
                        <p className='dim'>Ages 2-12</p>
                    </section>
                    <section className='guestSnippetChild2'>
                        <div>
                        <span className='fa fa-minus-circle changesIcon'></span>
                        </div>
                        <span className='changesCounter'>
                            0
                        </span>
                        <div>
                            <span className='fa fa-plus-circle changesIcon'></span>
                        </div>
                    </section>
                </div>
                <div className='guestSnippetChild'>
                    <section className='guestSnippetChild1'>
                        <p>Infants</p>
                        <p className='dim'>Under 2</p>
                    </section>
                    <section className='guestSnippetChild2'>
                        <div>
                        <span className='fa fa-minus-circle changesIcon'></span>
                        </div>
                        <span className='changesCounter'>
                            0
                        </span>
                        <div>
                            <span className='fa fa-plus-circle changesIcon'></span>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}