import React, { Component } from "react";
import './App.css';
import Routes from "./components/routes/RoutesV2";
import { withRouter } from 'react-router-dom';
import Header from './components/ui/Header'


class App extends Component {
  
  render() {
  return (
    <>
     <Header/>
     <Routes/>  
  </>
  );
  }
}

export default withRouter(App);
