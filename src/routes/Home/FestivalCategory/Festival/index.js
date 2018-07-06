import React, { Component } from 'react'
import styles from './styles.css'
import propTypes from 'prop-types'

export default class Festival extends Component {
  render() {
    const { name, imgSrc } = this.props
    return (
      <div className={ styles.card }>
        <a href={ '/festivals/' + name.split(' ').join('-').toLowerCase()}>
          <div className={ styles['img-container'] } >
            <img className={ styles.img } src={ imgSrc } alt={ name } />
          </div>
          <div className={ styles.caption }>
            <span>{ name }</span>
          </div>
        </a>
      </div>
    );
  }
}

Festival.propTypes = {
    name: propTypes.string,
    imgSrc: propTypes.string,
    startDate: propTypes.string,
    endDate: propTypes.string,
    location: propTypes.shape({
      country: propTypes.string,
      state: propTypes.string,
      city: propTypes.string
    }),
}

