import React from 'react'
import ReactDOM from 'react-dom'

function AboutUs() {
    return(
        <div className='aboutAll'>
            <Descr />
            <div className='image'></div>
        </div>
    )
}

function Descr() {
    return(
    <div className='about'>
        <p className='title'>O nas</p>
        <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
        <div className="sign"></div>
    </div>
    )
}

export default AboutUs