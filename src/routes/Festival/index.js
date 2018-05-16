import React, { Component } from 'react'
import axios from 'axios'
import Lineup from './Lineup'
import './styles.css'

export default class Festival extends Component {
  constructor(props) {
    super(props)
    this.state = {
      festival: {
        name: '',
        imgSrc: '',
        date: '',
        location: {
          city: '',
          state: '',
          country: '',
        },
        lineup: []
      }
    }
  }

  async componentDidMount() {
    const festival = await axios('/api/festivals/' + this.props.match.params.name).then(r => r.data)
    this.setState({ festival })
  }

  render() {
    const { name, imgSrc, lineup} = this.state.festival
    return (
      <div>
        <div >
          <img src={ imgSrc } alt={ name } />
          { name }
        </div>
        <Lineup lineup={ lineup } />
      </div>
    );
  }
}
