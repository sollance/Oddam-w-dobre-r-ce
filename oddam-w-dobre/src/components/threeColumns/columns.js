import React from 'react'
import ReactDOM from 'react-dom'

function ColumnOne() {
    return(
        <div className='column'>
            <p className='number'>10</p>
            <p className='descr'>ODDANYCH WORKÓW</p>
            <p className='paragr'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
        </div>
    )
}

function ColumnTwo() {
    return(
        <div className='column'>
            <p className='number'>5</p>
            <p className='descr'>WSPARTYCH ORGANIZACJI</p>
            <p className='paragr'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
        </div>
    )
}

function ColumnThree() {
    return(
        <div className='column'>
            <p className='number'>7</p>
            <p className='descr'>ZORGANIZOWANY ZBIÓREK</p>
            <p className='paragr'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
        </div>
    )
}

function ThreeColumns() {
    return(
        <div className='threeCol'>
            <ColumnOne />
            <ColumnTwo />
            <ColumnThree />
        </div>
    )
}

export default ThreeColumns