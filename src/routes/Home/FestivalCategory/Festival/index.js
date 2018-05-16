import React, { Component } from 'react'
import './styles.css'

export default class Festival extends Component {
  render() {
    const { name, imgSrc } = this.props
    return (
      <div className="card">
        <a href={ '/festivals/' + name.split(' ').join('-').toLowerCase()}>
          <img className="img" src={ imgSrc } alt={ name } />
          <div className="caption">
            <h3>{ name }</h3>
          </div>
        </a>
      </div>
    );
  }
}

