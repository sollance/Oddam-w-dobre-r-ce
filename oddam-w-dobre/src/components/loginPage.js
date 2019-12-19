import React from 'react'
import ReactDOM from 'react-dom'
import Login from './header/login.js'
import Navigation from './header/navigation.js'

function LoginPage() {
    return (
        <div className='loginBg'>
            <Login />
            <Navigation />  
            <LoginTable />
        </div>
    )
}

function LoginTable() {
    return (
        <div className='loginTable'>
            <h1>Zaloguj się</h1>
            <div className='decor'/>
            <LoginForm />
            <LoginButtons />
        </div>
    )
}

function LoginForm() {
    return (
        <form>
            <label>Email<br/>
                <input type='email' />
            </label>
            <label>Hasło<br/>
                <input type='password' />
            </label>
        </form>
    )
}

function LoginButtons() {
    return (
        <div className='loginButtons'>
            <ul>
                <li><a href='/signup'>Załóż konto</a></li>
                <li><a href='/loginPage'>Zaloguj się</a></li>
            </ul>
        </div>
    )
}

export default LoginPage