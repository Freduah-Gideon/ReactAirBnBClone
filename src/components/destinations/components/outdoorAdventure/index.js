import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'


function OutdoorAdventure() {
    const lists = [
        { id: '0', name: 'New York', subName: 'New York', link: '' },
        { id: '1', name: 'Miami', subName: 'Florida', link: '' },
        { id: '2', name: 'Seattle', subName: 'Washington', link: '' },
        { id: '3', name: 'Austin', subName: 'Texas', link: '' },
        { id: '4', name: 'Houston', subName: 'Texas', link: '' },
        { id: '5', name: 'Memphis', subName: 'Tennessee', link: '' },
        { id: '6', name: 'Lexington', subName: 'Kentucky', link: '' },
        { id: '7', name: 'Pheonix', subName: 'Arizona', link: '' },
        { id: '8', name: 'San Diego', subName: 'California', link: '' },
        { id: '9', name: 'Boston', subName: 'Massachusetts', link: '' },
        { id: '10', name: 'Washington', subName: 'District of Columbia', link: '' },
        { id: '10', name: 'Los Angeles', subName: 'California', link: '' },
        { id: '11', name: 'Rome', subName: 'Italy', link: '' },
        { id: '12', name: 'Atlanta', subName: 'Georgia', link: '' },
        { id: '13', name: 'San Francisco', subName: 'California', link: '' },
        { id: '14', name: 'Philadelphia', subName: 'Pennsylvania', link: '' },
        { id: '15', name: 'New Orleans', subName: 'Louisiana', link: '' },
        { id: '16', name: 'London', subName: 'United Kingdom', link: '' },
        { id: '17', name: 'Barcelona', subName: 'Spain', link: '' },
        { id: '18', name: 'Chicago', subName: 'lllinois', link: '' },
        { id: '19', name: 'Nashville', subName: 'Tennesse', link: '' },
        { id: '20', name: 'Dallas', subName: 'Texas', link: '' },
        { id: '21', name: 'San Antonio', subName: 'Texas', link: '' },
        { id: '22', name: 'Paris', subName: 'France', link: '' },
        { id: '23', name: 'Amsterdam', subName: 'Netherlands', link: '' },
    ]

    const render_list  = ()=>{
    return lists.map(location=><div key={location.id}> <a href={location.link}><p>{location.name}</p> <p>{location.subName}</p></a> </div>)
    }
    return (
        <div>

        </div>
    )
}