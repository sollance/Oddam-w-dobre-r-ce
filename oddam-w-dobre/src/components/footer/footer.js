import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { findDOMNode } from "react-dom";
// import scrollIntoView from "../scroller/scroll-into-view";
// import PropTypes from "prop-types";
import Navigation from '../header/navigation'
// import ScrollView, { ScrollElement } from '../scroller/scroller';



class Footer extends Component {
    
      render() {
    return(
        <section className='contact' ref={(section) => { this.Footer = section; }}>
        <div className='footer'>
            <div className='background'/>
            <div className='allComponents'>
            <div className='hAndForm'>
                <div className='placingH'>
                <h2>Skontaktuj się z nami</h2>
                <div className='decor'/>
                </div>
                <Form />
            </div>
            <BottomLine />
            </div>
        </div>
        </section>
    )
    }
}

class Form extends Component {
    state = {
        name: '',
        email: '',
        errors: {
            name: '',
            email: '',
            message: ''
        }
    }

    

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })

        const {name, value} = e.target;
        let errors = this.state.errors;
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;        

        switch(name) {
            case 'message':
                errors.message =
                value.length < 120
                ? 'Wiadomość musi mieć przynajmniej 120 znaków'
                : '';
                break;
            
            case 'email': 
                errors.email = 
                re.test(value)
                ? ''
                : 'Email is not valid!';
                break;

            case 'name':
                errors.name =
                value != ' '
                ? ''
                : 'Imię musi być jednym wyrazem';
                break;
        }

        this.setState({errors, [name]: value}, ()=> {
            console.log(errors)
        })
    }

    handleSubmit = e => {
        e.preventDefault();
       
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        fetch('https://fer-api.coderslab.pl/v1/portfolio/contact',{
            method: 'POST',
            body: JSON.stringify({name: name, email: email, message: message}),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => res.json())
        .then((data) =>  console.log(data))
        .catch((err)=> console.log(err))
    }


    render() {
        return (
            <form  onSubmit={this.handleSubmit}>
                <div className='nameAndMail'>
                    <label>Wpisz swoje imię<br/>
                        <input type='text' id='name' name='name' placeholder='Krzysztof' value={this.state.name} onChange={this.handleChange}/>
                    </label>
                    <label>Wpisz swój email<br/>
                        <input type='email' id='email' name='email' placeholder='abc@xyz.pl' value={this.state.email} onChange={this.handleChange}/>
                    </label>
                </div>
                <label>Wpisz swoją wiadomość<br/>
                    <textarea id='message' placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                </label>
                <div className='submit'>
                    <input type='submit' value='Wyślij'/>
                </div>
            </form>
        )
    }
}

function BottomLine() {
    return(
        <>
            <p>Copyright by Coders Lab
            <div className='facebook'/>
            <div className='instagram'/>
            </p>
        </>
    )
}

export default Footer;