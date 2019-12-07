import React from 'react'
import ReactDOM from 'react-dom'

function HeaderButtons() {
    return(
        <div className='headerButtons'>
            <div className='paragraph'>
            <p className='pOne'>Zacznij pomagać!</p>
            <p className='pTwo'>Oddaj niechciane rzeczy w zaufane ręce</p>
            </div>
            <div className='button'>
            <button>Oddaj<br/> rzeczy</button>
            <button>Zorganizuj<br/> zbiórkę</button>
            </div>
        </div>
    )
}

export default HeaderButtons