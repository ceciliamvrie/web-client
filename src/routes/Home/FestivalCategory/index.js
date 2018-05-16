import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Festival from './Festival'
import './styles.css'

export default class FestivalCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            festivals: []
        }
    }

    async componentDidMount() {
        const festivals = await axios(`/api/festivals?category=${this.props.category}`).then(r => r.data)
        this.setState({ festivals })
    }

    render() {
        return (
          <div className="container">
            <h2>{ this.props.category }</h2>
            <div className="scroll">
              { this.state.festivals.length > 0 ? this.state.festivals.map(f => (
                  <Festival {...f} className="scroll-item"/>
              )) : null}
            </div>
          </div>
        )
    }
}


FestivalCategory.PropTypes = {
    category: PropTypes.string
}

