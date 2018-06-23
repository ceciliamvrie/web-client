import React, { Component } from 'react'
import FestivalCategory from './FestivalCategory'
import Header from '../../shared/Header'
import styles from './styles.css'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className= { styles['main-content'] } >
          <FestivalCategory category={ 'popular' } />
          <FestivalCategory category={ 'upcoming' } />
          <FestivalCategory category={ 'near' } />
        </div>
      </div>
    )
  }
}
