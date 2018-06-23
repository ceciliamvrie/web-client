import React, { Component } from 'react'
import ArtistCard from '../../../shared/ArtistCard'
import styles from './styles.css'

export default class Related extends Component {
  render() {
    const { artists } = this.props
    return (
      <div className={ styles.container } >
      <span className={ styles.title } >Related Artists</span>
      <div className={ styles.artists } >
        {
          artists && artists.length && artists.map(a => (
            <ArtistCard { ...a } />
          ))
        }
        </div>
      </div>
    );
  }
}
