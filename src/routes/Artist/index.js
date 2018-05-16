import React, { Component } from 'react'
import axios from 'axios'
import SongGroup from './SongGroup'
import './styles.css'

export default class Artist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artist: {
        name: '',
        imgUrl: '',
        topTracks: []
      }
    }
  }

  async componentDidMount() {
    const { name } = this.props.match.params
    const artist = await axios('/api/artists/' + name).then(r => r.data).catch(console.log)
    console.log('artist: ', artist)
    this.setState({ artist })
  }

  render() {
    console.log('artist: ', this.state.artist)
    const { name, imgUrl, topTracks} = this.state.artist
    return (
      <div>
      <img className='artist-card' src={ imgUrl } alt={ name }/>
      <span className='name'>{ name }</span>
      <SongGroup title='Popular' tracks={topTracks}/>
      <SongGroup title='Recent' tracks={topTracks}/>
      </div>
    );
  }
}
