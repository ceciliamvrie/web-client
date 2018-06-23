import React, { Component } from 'react'
import styles from './styles.css'

export default class Festival extends Component {
  render() {
    const { name, imgSrc } = this.props
    return (
      <div className={ styles.card }>
        <a href={ '/festivals/' + name.split(' ').join('-').toLowerCase()}>
          <img className={ styles.img } src={ imgSrc } alt={ name } />
          <div className={ styles.caption }>
            <h3>{ name }</h3>
          </div>
        </a>
      </div>
    );
  }
}

