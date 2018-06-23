import React, { PureComponent } from 'react'
import styles from './styles.css'

export default class ArtistCard extends PureComponent {
  render() {
    const { imgSrc, name, popularity, size } = this.props
    return (
      <div className={ size === 'big' ? styles['card-big'] : styles.card }>
        <a className={ styles.a } href={ '/artists/' + name.split(' ').join('-').toLowerCase() } >
          <img className={ styles.img } src={ imgSrc } alt={ name } />
        </a>
          <div className={ styles.caption } >
            <h3>{ name.toUpperCase() }</h3>
            <h3 className={ styles.stars } >{ stars(popularity) }</h3>
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
