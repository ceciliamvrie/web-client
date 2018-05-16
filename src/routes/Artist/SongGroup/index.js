import React, { Component } from 'react'
import './styles.css'

export default class SongGroup extends Component {
  render() {
    const { tracks, title } = this.props
    console.log('Tracks ', tracks)
    return (
      <div className='container'>
      <span className='title'>{ title }</span>
      {
        tracks && tracks && tracks.map(t => (
          <div className='track'>
            <img className='song-img' src={ t.album.imgSrc } alt={ t.name } />
            <a href={ t.externalUrl } >
              <div className="song-name">{ t.name.toUpperCase() }</div>
            </a>
            <div>poularity score: { t.popularity }</div>
          </div>
        ))
      }
      </div>
    );
  }
}
