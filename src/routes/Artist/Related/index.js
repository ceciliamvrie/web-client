import React, { Component } from 'react'
import ArtistCard from '../../../shared/ArtistCard'
import styles from './styles.css'
import propTypes from 'prop-types'

export default class Related extends Component {
  render() {
    const { artists } = this.props
    return (
      <div className={ styles.container } >
      <div className={ styles.title } >Related Artists</div>
      <div className={ styles.artists } >
        {
          artists && artists.length && artists.map((a, i) => (
            <ArtistCard { ...a } index={i}/>
          ))
        }
        </div>
      </div>
    );
  }
}

Related.propTypes = {
  artists: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      imgSrc: propTypes.string,
      popularity: propTypes.number
    })
  ),
}
