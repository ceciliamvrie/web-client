import React, { PureComponent } from 'react'
import ArtistCard from '../../../shared/ArtistCard'
import styles from './styles.css'
import propTypes from 'prop-types'

export default class Lineup extends PureComponent {
  render() {
    return (
      <div className={ styles.continer }>
        <div className={ styles.artists }>
        {
          this.props.lineup && this.props.lineup.length  &&
          this.props.lineup.map((artist, i) => (
            <ArtistCard { ...artist } index={i} key={ artist.name }/>
          ))
        }
        </div>
      </div>
    );
  }
}

Lineup.propTypes = {
  lineup: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      imgSrc: propTypes.string,
      popularity: propTypes.number
    })
  )
}
