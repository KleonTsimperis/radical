import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './components/NavBar';
import Menu from './containers/Menu';
import BottomNavBar from './containers/BottomNavBar';

class App extends Component {

  render() {
    return (
      <div className="App">
        <CssBaseline />
        <NavBar/>
        <Menu/>
        <BottomNavBar/>
      </div>
    );
  }
}

export default connect()(App);
