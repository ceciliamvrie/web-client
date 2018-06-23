import React, { Component } from 'react'
import axios from 'axios'
import Header from '../../shared/Header'
import SongGroup from './SongGroup'
import AlbumGroup from './AlbumGroup'
import Related from './Related'
import styles from './styles.css'

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
    console.log('artist: ', artist)
    this.setState({ artist })
  }

  render() {
    console.log('artist: ', this.state.artist)
    const { name, imgSrc, topTracks, popularity, relatedArtists, externalUrl, albums } = this.state.artist
    return (
      <div>
        <Header className={ styles['main-content'] } />
        <div>
          <div className={ styles.cover } >
            <a target='_blank' href={ externalUrl } className={ styles['artist-a'] }>
              <img className={ styles['artist-img']} src={ imgSrc } alt={ name }/>
            </a>
            <div>
              <div className={ styles.name } >{ name }</div>
              <div className={ styles.popularity } >{ stars(popularity) }</div>
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

function stars(popularity) {
  const count = popularity/20
  let arr = []
  for(let i=0; i<count; i++) {
    arr.push('🌟')
  }
  return arr.join(' ')
}
