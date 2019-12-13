import React, {Component} from 'react'
import ReactDOM from 'react-dom'

function Footer() {
    return(
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
    )
}

class Form extends Component {
    render() {
        return (
            <form>
                <div className='nameAndMail'>
                    <label>Wpisz swoje imię<br/>
                        <input type='text' placeholder='Krzysztof'/>
                    </label>
                    <label>Wpisz swój email<br/>
                        <input type='email' placeholder='abc@xyz.pl'/>
                    </label>
                </div>
                <label>Wpisz swoją wiadomość<br/>
                    <textarea placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
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

export default Footer