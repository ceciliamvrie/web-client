import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.css'
export default class Festival extends Component {
  render() {
    const { name, imgSrc, className, category } = this.props
    return (
      <a className={styles.a} href={`/${category}/` + name.split(' ').join('-').toLowerCase() }>
        <div className={ styles.card }>
          <img className={ styles['img'] } src={ imgSrc } alt={ name } />
        </div>
        <span className={ styles.caption }>{ name }</span>
      </a>
    );
  }
}
