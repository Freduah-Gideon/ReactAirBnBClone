import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import uniqueImg from './images/unique.png'
import experienceImg from './images/experience.jpg'
import homeImg from './images/home.jpg'
import './main.css'
export default class AfterHero extends Component {
    lists = [
        { id: '0', mainText: 'Unique stays', img: uniqueImg, subText: 'Spaces that are more than just a place to sleep' },
        { id: '1', mainText: 'Online Experiences', img: experienceImg, subText: 'A new way to travel from home.' },
        { id: '2', mainText: 'Entire homes', img: homeImg, subText: 'Comfortable private places, with room for friends or family.' }
    ]

    render_list = () => {
        return this.lists.map(list => <div className='card-container' style={{ width: '400px', height: '350px' }} id={list.id}>
            <img className='card-img' src={list.img} />
            <div className='card-footer'>
                <p className='card-text-p'>{list.mainText}</p>
                <h3 className='card-text-h3'>{list.subText}</h3>
            </div>
        </div>)
    }
    render() {
        return (
            <main style={{ display: 'flex', justifyContent: 'center', width: 'max-content', margin: 'auto' }}>
                {this.render_list()}
            </main>
        )
    }
}