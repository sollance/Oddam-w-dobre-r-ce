import React from 'react'
import ReactDOM from 'react-dom'

function FourIcons() {
    return(
        <div className='fourIcons'>
            <FourSteps />
            <Icons />
            <Button />
        </div>
    )
}

function FourSteps() {
    return (
        <p className='steps'>Wystarczą 4 proste kroki</p>
    )
}

function Icons() {
    return (
        <div className='allIcons'>
            <IconOne />
            <IconTwo />
            <IconThree />
            <IconFour />
        </div>
    )
}

function Button() {
    return (
        <div className='button'><a src=''>ODDAJ<br/> RZECZY</a></div>
    )
}

function IconOne() {
    return (
        <div className='icon'>
            <div className='imageOne'></div>
            <p className='pOne'>Wybierz rzeczy</p>
            <p>ubrania, zabawki, sprzęt i inne</p>
        </div>
    )
}

function IconTwo() {
    return (
        <div className='icon'>
            <div className='imageTwo'></div>
            <p className='pOne'>Spakuj je</p>
            <p>skorzystaj z worków na śmieci</p>
        </div>
    )    
}

function IconThree() {
    return (
        <div className='icon'>
            <div className='imageThree'></div>
            <p className='pOne'>Zdecyduj komu chcesz pomóc</p>
            <p>wybierz zaufane miejsce</p>
        </div>
    )    
}

function IconFour() {
    return (
        <div className='icon'>
            <div className='imageFour'></div>
            <p className='pOne'>Zamów kuriera</p>
            <p>kurier przyjedzie w dogodnym terminie</p>
        </div>
    )    
}

export default FourIcons