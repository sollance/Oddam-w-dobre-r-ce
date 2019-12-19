import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import { Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
 

import Home from './home.js'
import AboutUs from './aboutUs/aboutUs.js';
import AboutOrg from './aboutOrg/aboutOrg.js';
import Footer from './footer/footer.js';
import ThreeColumns from './threeColumns/columns.js';
import scrollToComponent from 'react-scroll-to-component';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.scrollToTopWithCallback = this.scrollToTopWithCallback.bind(this)
  }

  componentDidMount() {
    scrollToComponent(this.footer, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
  }

  scrollToTopWithCallback() {
    let scroller = scrollToComponent(this.footer, { offset: 0, align: 'top', duration: 1500});
    scroller.on('end', () => console.log('Scrolling end!') );
  }

  render() {
    scrollToComponent(this.refs.name);
  return (
    <>
          <HashRouter>
               <Route exact path='/' component={Home} />
               <Route path='/aboutProgram' component={ThreeColumns} />
               <Route path='/aboutUs' component={AboutUs} />
               <Route path='/fundations' component={AboutOrg} />
               <Route path='/contact' component={Footer} />
          </HashRouter>
    </>
  );
}
}

export default App;
