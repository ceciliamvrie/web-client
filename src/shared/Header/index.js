import React, { Component } from 'react'
import Search from './Search'
import styles from './styles.css'

export default class Header extends Component {
  render() {
    return (
      <div className={ styles.container } >
        <div className={ styles['cell-1'] } >
          <a href='/' className={ styles.logo } >
            <h2>lineuplist</h2>
          </a>
        </div>
      <div className={ styles['search-container'] }>
          <Search />
      </div>
      </div>
    );
  }
}
