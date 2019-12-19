import React from 'react'
import ReactDOM from 'react-dom'
import Login from './header/login.js'
import Navigation from './header/navigation.js'
import LoginPage from './loginPage.js'

function Logout() {
    return(
        <div className='loginBg'>
            <Login />
            <Navigation />  
            <LogoutPage  />
        </div>
    )
}

function LogoutPage() {
    return (
        <div className='logout'>
            <h1>Wylogowanie nastąpiło pomyślnie!</h1>
            <div className='decor'/>
            <div className='button'><a href='/'>Załóż konto</a></div>
        </div>
    )
}

export default Logout