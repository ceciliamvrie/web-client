import React, { Component } from 'react'
import styles from './styles.css'
import propTypes from 'prop-types'

export default class Album extends Component {
  render() {
    const { name, imgSrc, externalUrl } = this.props
    return (
      <div className={ styles.container }>
        <a target='_blank' href={ externalUrl } className={ styles.a }>
          <img src={ imgSrc } className={ styles.img } />
        </a>
          <div className={ styles.title }>
            { name.toUpperCase() } 
          </div>
      </div>
    );
  }
}

Album.propTypes = {
    name: propTypes.string,
    imgSrc: propTypes.string,
    externalUrl: propTypes.string,
}
