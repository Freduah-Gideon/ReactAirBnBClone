import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import TextExplore from '../components/TextExplore/index.js'
import ImageExplore from '../components/imageExplore/index.js'
export default class Explore extends Component {

    render() {
        return (
            <div>
                <TextExplore />

                <ImageExplore />
            </div>
        )
    }
}