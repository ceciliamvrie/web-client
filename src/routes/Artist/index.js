import React, { Component } from 'react'
import axios from 'axios'
import Header from '../../shared/Header'
import SongGroup from './SongGroup'
import AlbumGroup from './AlbumGroup'
import Related from './Related'
import styles from './styles.css'
import propTypes from 'prop-types'

export default class Artist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artist: {
        name: '',
        imgSrc: '',
        topTracks: [],
        relatedArtists: []
      },
    }
  }

  async componentDidMount() {
    const { name } = this.props.match.params
    const artist = await axios(`${SERVER_ADDRESS}/api/artists/${name}`).then(r => r.data).catch(console.log)
    this.setState({ artist })
  }

  render() {
    const { name, imgSrc, topTracks, popularity, relatedArtists, externalUrl, albums } = this.state.artist
    return (
      <div>
        <Header />
        <div className={ styles['main-content'] }>

          <div className={ styles.cover } >
            <a target='_blank' href={ externalUrl } className={ styles['artist-a'] }>
              <img className={ styles['artist-img']} src={ imgSrc } alt={ name }/>
            </a>
            <div>
              <div className={ styles.name } >{ name }</div>
            </div>
          </div>

          <div>
            <SongGroup title='Popular' tracks={ topTracks.slice(0, 4) }/>
            <SongGroup title='Recent' tracks={ topTracks.slice(0, 4)  }/>
            <AlbumGroup albums={ albums }/>
            <Related artists={ relatedArtists }/>
          </div>

        </div>
      </div>
    );
  }
}

Artist.propTypes = {
  name: propTypes.string,
  imgSrc: propTypes.string,
  popularity: propTypes.number,
  externalUrl: propTypes.string,
  topTracks: propTypes.arrayOf(
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
  ),
  albums: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      imgSrc: propTypes.string,
      externalUrl: propTypes.string,
    }),
  ),
  relatedArtists: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      imgSrc: propTypes.string,
      popularity: propTypes.number
    })
  ),
}
