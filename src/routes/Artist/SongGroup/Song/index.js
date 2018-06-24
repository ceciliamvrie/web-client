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
        <div className={ styles.title } >{ name.toUpperCase() }</div>
        <div className={ styles['popularity'] }> { stars(popularity) } </div>
      </div>
    );
  }
}

function rank(popularity) {
  return 'red'
  const starCount = Math.ceil(popularity/10)
  const ranks = [
    '', 'white', 'yellow', 'orange', 'green', 'blue', 'purple', 'brown', 'red', 'black'
  ]

  return ranks[starCount]
}

function stars(popularity) {
  const count = popularity/20
  let arr = []
  for(let i=0; i<count; i++) {
    arr.push('🌟')
  }
  return arr.join(' ')
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
