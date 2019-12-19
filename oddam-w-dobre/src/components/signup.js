import React from 'react'
import ReactDOM from 'react-dom'
import Login from './header/login.js'
import Navigation from './header/navigation.js'

function Signup() {
    return (
        <div className='loginBg'>
            <Login />
            <Navigation />  
            <SignupTable />
        </div>
    )
}

function SignupTable() {
    return (
        <div className='signupTable'>
            <h1>Zarejestruj się</h1>
            <div className='decor'/>
            <SignupForm />
            <LoginButtons />
        </div>
    )
}

function SignupForm() {
    return (
        <form className='signup'>
            <label>Email<br/>
                <input type='email' />
            </label>
            <label>Hasło<br/>
                <input type='password' />
            </label>
            <label>Powtórz hasło<br/>
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

export default Signup