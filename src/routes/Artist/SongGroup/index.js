import React, { Component } from 'react'
import styles from './styles.css'
import Song from './Song'

export default class SongGroup extends Component {
  render() {
    const { tracks, title } = this.props
    console.log('Tracks ', tracks)
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

