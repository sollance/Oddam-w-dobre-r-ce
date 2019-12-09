import React from 'react'
import ReactDOM from 'react-dom'
import Component from 'react'

function AboutOrg() {
    return(
        <div>
        <Who />
        <Buttons />
        <Changing />
        </div>
    )
}

function Who() {

}

function Buttons() {

}

class Changing extends Component {
    state = {
        fund: [
        {id: 1,
        name: '“Dbam o Zdrowie”',
        aim: 'Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
        needed: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki' },
    
        {id: 2,
        name: '“Dla dzieci”',
        aim: 'Pomoc dzieciom z ubogich rodzin.',
        needed: 'ubrania, meble, zabawki' },
    
        {id: 3,
        name: '“Bez domu”',
        aim: 'Pomoc dla osób nie posiadających miejsca zamieszkania.',
        needed: 'ubrania, jedzenie, ciepłe koce' },
    
        {id: 4,
        name: 'Lorem ipsum 1',
        aim: 'Vestibulum facilisis nibh ut tortor elementum tempor.',
        needed: 'Mauris tempor metus at mollis sodales.' },
    
        {id: 5,
        name: 'Lorem ipsum 2',
        aim: 'Vestibulum facilisis nibh ut tortor elementum tempor.',
        needed: 'Mauris tempor metus at mollis sodales.' },
    
        {id: 6,
        name: 'Lorem ipsum 3',
        aim: 'Vestibulum facilisis nibh ut tortor elementum tempor.',
        needed: 'Mauris tempor metus at mollis sodales.' },
    
        {id: 7,
        name: 'Lorem ipsum 4',
        aim: 'Vestibulum facilisis nibh ut tortor elementum tempor.',
        needed: 'Mauris tempor metus at mollis sodales.' },
    
        {id: 8,
        name: 'Lorem ipsum 5',
        aim: 'Vestibulum facilisis nibh ut tortor elementum tempor.',
        needed: 'Mauris tempor metus at mollis sodales.' },
    
        {id: 9,
        name: 'Lorem ipsum 6',
        aim: 'Vestibulum facilisis nibh ut tortor elementum tempor.',
        needed: 'Mauris tempor metus at mollis sodales.' },
    ]}

    render () {
        return (
            <p>TEST</p>
        )
    }
}



export default AboutOrg