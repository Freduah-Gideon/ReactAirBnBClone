import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './form.css'

export default class RoomSearchForm extends Component {
    constructor(){
        super()
        this.state = {
            guestCount : 'Add'
        }
    }
    render() {
        return (
            <section>
            <form className='searchForm'>
                <div className='form-row'>
                    <p className='form-row-p-first'>Location</p>
                    <input className='form-input form-row-p-last' placeholder='Where Are You Going?' />

                </div>
                <div className='form-row hide' role='experience' id='experience-form'>
                    <p className='form-row-p-first'>Date</p>
                    <p className='form-row-p-last'>Add When you want to go</p>

                </div>
                <div className='group-form' id='group-form'>
                    <div className='form-row'>
                        <p className='form-row-p-first'>Check in</p>
                        <p className='form-row-p-last'>Add Dates</p>

                    </div>
                    <div className='form-row'>
                        <p className='form-row-p-first'>Check Out</p>
                        <p className='form-row-p-last'>Add Dates</p>
                    </div>
                    <div className='form-row' onClick={this.props.toggleGuestChildren}>
                        <p className='form-row-p-first'>Guests</p>
                        <p className='form-row-p-last'>{this.state.guestCount} guests</p>
                    </div>
                </div>
            </form>

            </section>
        )
    }
}