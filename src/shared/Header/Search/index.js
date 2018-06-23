import React, { Component } from 'react'
import styles from './styles.css'

export default class Search extends Component {
  render() {
    return (
      <div className={ styles.container }>
        <input type='text' placeholder='search' onClick={() => {}}/>
      </div>
    );
  }
}
