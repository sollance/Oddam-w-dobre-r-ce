import React, {Component} from 'react'
import ReactDOM from 'react-dom'
// import PropTypes from "prop-types";
// import ScrollView, { ScrollElement } from '../scroller/scroller';
import Footer from '../footer/footer'
import scrollToComponent from 'react-scroll-to-component';





class Navigation extends React.Component {
  
    

render() {
    return(
        <nav>
            <ul>
                <li><a>Start</a></li>
                <li><a>O co chodzi?</a></li>
                <li><a>O nas</a></li>
                <li><a>Fundacje i organizacje</a></li>
                <li><a>Kontakt</a></li>
            </ul>
        </nav>
    )
    }
}

export default Navigation;