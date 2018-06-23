import React, { Component } from 'react'
import styles from './styles.css'

export default class Album extends Component {
  render() {
    const { name, imgSrc, externalUrl } = this.props
    return (
      <div className={ styles.container }>
        <a target='_blank' href={ externalUrl } className={ styles.a }>
          <img src={ imgSrc } className={ styles.img } />
        </a>
          <span className={ styles.title }>
            { name.toUpperCase() } 
          </span>
      </div>
    );
  }
}
