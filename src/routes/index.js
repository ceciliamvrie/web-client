import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Festival from './Festival'
import Artist from './Artist'

export default class RootRouter extends Component {
  render() {
    return (
      <Router>
          <div>
              <Route exact path="/" component={Home}/>
              <Route exact path="/festivals/:name" component={Festival}/>
              <Route exact path="/artists/:name" component={Artist}/>
          </div>
      </Router>
    )
  }
}