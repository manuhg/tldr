import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import About from 'pages/About';
import Summarize from 'pages/Summarize';

import 'css/loader.css';
import 'css/App.css';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/summarize" exact component={Summarize} />
        </Switch>
      </Router>
    );
  }
  // updateDimensions() {
  //   var w = window,
  //     d = document,
  //     documentElement = d.documentElement,
  //     body = d.getElementsByTagName('body')[0],
  //     width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
  //     height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

  //   this.setState({ width, height });
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.updateDimensions);
  // }
  // componentDidMount() {
  //   window.addEventListener('resize', this.updateDimensions.bind(this));
  // }
}

export default App;
