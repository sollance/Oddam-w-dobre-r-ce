import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from '../App'

class Login extends Component {
    
    render() {
        return(
            <div className="login">
                    <ul>
                        <li><a href='/loginPage'>Zaloguj</a></li>
                        <li><a>Załóż konto</a></li>
                    </ul>
            </div>
        )
    }
}

export default Login;