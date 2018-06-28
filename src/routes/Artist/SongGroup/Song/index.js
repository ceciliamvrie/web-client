import React, { Component } from 'react'
import styles from './styles.css'
import propTypes from 'prop-types'

export default class Song extends Component {
  render() {
    const { name, externalUrl, album, popularity } = this.props
    return (
      <div className={ styles.container } >
        <a target='_blak' href={ externalUrl } >
          <img className={ styles['song-img'] } src={ album.imgSrc } alt={ name } />
        </a>
        <div className={ styles.title } >{ name }</div>
      </div>
    );
  }
}

Song.propTypes = {
  name: propTypes.string,
  externalUrl: propTypes.string,
  popularity: propTypes.number,
  album: propTypes.shape({
    name: propTypes.string,
    imgSrc: propTypes.string,
    externalUrl: propTypes.string,
  }),
}
