import React, { Component, Fragment } from 'react'
import FestivalCategory from './FestivalCategory'
import { NavigationBar, Header }  from '../../shared'
import styles from './styles.css'

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <NavigationBar/>
        <Header />
        <div className={ styles.mainContent }>
          <FestivalCategory category={ 'popular' } />
          <FestivalCategory category={ 'upcoming' } />
          <FestivalCategory category={ 'near' } />
        </div>
      </Fragment>
    )
  }
}
