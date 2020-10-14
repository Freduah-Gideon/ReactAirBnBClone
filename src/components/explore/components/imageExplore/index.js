import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import explore1 from './image/explore1.jpg'
import explore2 from './image/explore2.jpg'
import explore3 from './image/explore3.jpg'
import explore4 from './image/explore4.jpg'
export default class ImageExplore extends Component {

    render() {
        return (
            <section style={{ position: 'relative', marginTop: '-200px' }}>
                <div className='imageExplore'>
                    <div className='card-container exploreImgDiv1'>
                        <a href=''>
                            <img src={explore1} />
                        </a>
                        <div className='card-footer' style={{ backgroundColor: 'rgb(20, 20, 20)' }}>
                                    <p>Decode the science of 2020 with Bill Nye</p>
                                </div>
                    </div>
                    <div className='exploreImgDiv2'>
                        <section className='exploreImgDivMany'>
                            <div className='card-container' style={{ width: '300px', height: '300px' }}>
                                <a href='' className='card-img'>
                                    <img src={explore2} className='card-img' />
                                </a>
                                <div className='card-footer' style={{ backgroundColor: 'rgb(20, 20, 20)' }}>
                                    <p>Go On A Leopard Safari In Sri Lanka</p>
                                </div>
                            </div>
                            <div className='card-container' style={{ width: '300px', height: '300px' }}>
                                <a href=''>
                                    <img src={explore3} className='card-img' />
                                </a>
                                <div className='card-footer' style={{ backgroundColor: 'rgb(20, 20, 20)' }}>
                                    <p>Discover Buenoss Aires street art and sketch</p>
                                </div>
                            </div>
                        </section>
                        <div className='exploreImgDiv3' style={{position:'absolute', bottom:'0;'}}>
                        <a href='' style={{width:'inherit'}}>
                            <img src={explore4} style={{width:'inherit'}}/>
                        </a>
                        <div className='card-footer' style={{ backgroundColor: 'rgb(20, 20, 20)' }}>
                                    <p>Dive under the sea with a shark scientist</p>
                                </div>
                    </div>
                    </div>
                </div>

            </section>
        )
    }
}