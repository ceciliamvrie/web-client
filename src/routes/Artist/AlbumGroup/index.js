import React, { Component } from 'react'
import styles from './styles.css'
import Album from './Album'
import propTypes from 'prop-types'

export default class AlbumGroup extends Component {
  render() {
    const { albums } = this.props
    return (
      <div className={ styles.container } >
      <span className={ styles.title } >Albums</span>
      <div className={ styles['album-container']  } >
        {
          albums && albums.length && albums.slice(0, 4).map(album => (
            <Album { ...album } />
          ))
        }
      </div>
      </div>
    );
  }
}

AlbumGroup.propTypes = {
  albums: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      imgSrc: propTypes.string,
      externalUrl: propTypes.string,
    }),
  ),
}
