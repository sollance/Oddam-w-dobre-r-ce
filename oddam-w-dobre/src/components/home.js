import React from 'react'
import ReactDOM from 'react-dom'

import Login from './header/login.js'
import Navigation from './header/navigation.js'
import HeaderButtons from './header/twoButtons'
import ThreeColumns from './threeColumns/columns'
import FourIcons from './fourIcons/fourIcons'
import AboutUs from './aboutUs/aboutUs'
import AboutOrg from './aboutOrg/aboutOrg'
import Footer from './footer/footer'

function Home() {
    return(
        <div>
        <Header />
        <ThreeColumns />
        <FourIcons />
        <AboutUs />
        <AboutOrg />
        <Footer />
        </div>
    )
}

function Header() {
    return(
        <div className="headerBg">
            <Login />
            <Navigation />  
            <HeaderButtons />          
        </div>
    )
}






export default Home;