import React,{Component} from 'react';

import Navbar from './components/Navbar';
import Mainbanner from './components/Mainbanner';
import About from './components/About';
import Cards from './components/Cards';

import './css/custom.css';

class App extends  Component{
  
  constructor(props) {
    super(props);
    this.state = {
      theme: ''
    }
    this.themeValue = this.themeValue.bind(this);
  }
 
  themeValue(newValue) {
    this.setState({ theme: newValue });
  }
 
  render(){
    return (
      <div className="main" data-theme={`${this.state.theme ? "dark" : ""}`}>
          <Navbar handleInput={this.themeValue} />  
          <Mainbanner />
          <About />
          <Cards />
          <About />
          <Cards />
      </div>
  );
    }
}

export default App;
