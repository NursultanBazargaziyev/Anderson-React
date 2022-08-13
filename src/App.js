import React from 'react';
import './App.css';
import Header from './components/header/Header.js';
import Body from './components/body/Body.js'
import Footer from './components/footer/Fotter.js'

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Header/>
        <Body/>
        <Footer/>
      </div>
    );
  }
}
export default App;
