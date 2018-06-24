import React, { Component } from 'react'
import styles from './styles.css'
import Song from './Song'
import propTypes from 'prop-types'

export default class SongGroup extends Component {
  render() {
    const { tracks, title } = this.props
    return (
      <div className={ styles.container } >
      <span className={ styles.title } >{ title }</span>
      <div className={ styles['track-container']  } >
        {
          tracks && tracks.length && tracks.map(t => (
            <Song {...t} />
          ))
        }
      </div>
      </div>
    );
  }
}

SongGroup.propTypes = {
  title: propTypes.string,
  tracks: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      externalUrl: propTypes.string,
      popularity: propTypes.number,
      album: propTypes.shape({
        name: propTypes.string,
        imgSrc: propTypes.string,
        externalUrl: propTypes.string,
      }),
    })
  )
}
