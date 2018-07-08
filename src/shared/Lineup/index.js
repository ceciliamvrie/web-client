import React, { PureComponent } from 'react'
import Festival from '../../../shared/Festival'
import styles from './styles.css'
import propTypes from 'prop-types'

export default class Lineup extends PureComponent {
  render() {
    return (
      <div className={ styles.continer }>
        <div className={ styles.artists }>
        {
          this.props.lineup ?
          this.props.lineup.map((artist, i) => (
            <Festival { ...artist } index={i} key={ artist.name } className={styles.card}/>
          )) : null
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
