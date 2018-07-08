import React, { Component, Fragment } from 'react'
import Festival from '../../../shared/Festival'
import styles from './styles.css'
import propTypes from 'prop-types'

export default class Related extends Component {
  render() {
    const { artists } = this.props
    return (
      <Fragment>
        <h2 className={styles.title}>Related Artists</h2>
        <div className={ styles.container } >
          <div className={ styles.artists } >
            {
              artists && artists.length && artists.map((a, i) => (
                <Festival { ...a } index={i}/>
              ))
            }
          </div>
        </div>
      </Fragment>
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
