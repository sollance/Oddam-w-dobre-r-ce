import React from 'react'
import ReactDOM from 'react-dom'

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
            <div className="login">
                <ul>
                    <li>Zaloguj</li>
                    <li>Załóż konto</li>
                </ul>
            </div>
            <nav>
                <ul>
                    <li>Start</li>
                    <li>O co chodzi?</li>
                    <li>O nas</li>
                    <li>Fundacje i organizacje</li>
                    <li>Kontakt</li>
                </ul>
            </nav>
        </div>
    )
}

function ThreeColumns() {
    return(
        <h1>JESTEM KOLUMIENKAMI</h1>
    )
}

function FourIcons() {
    return(
        <h1>JESTEM IKONKAMI</h1>
    )
}

function AboutUs() {
    return(
        <h1>JESTEM OPISEM</h1>
    )
}

function AboutOrg() {
    return(
        <h1>JESTEM KLIKALNYM OPISEM</h1>
    )
}

function Footer() {
    return(
        <h1>JESTEM STOPKĄ</h1>
    )
}

export default Home;