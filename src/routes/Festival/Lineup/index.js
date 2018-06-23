import React, { PureComponent } from 'react'
import ArtistCard from '../../../shared/ArtistCard'
import styles from './styles.css'

export default class Lineup extends PureComponent {
  render() {
    console.log('artists', this.props.lineup)
    return (
      <div className={ styles.continer }>
        <div className={ styles.artists }>
        {
          this.props.lineup && this.props.lineup.length  &&
          this.props.lineup.map(artist => (
            <ArtistCard {...artist} />
          ))
        }
        </div>
      </div>
    );
  }
}
