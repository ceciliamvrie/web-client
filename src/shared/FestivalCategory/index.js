import React, { Component } from 'react'
import { capitalize } from '../../helpers/capitalize'
import axios from 'axios'
import Festival from '../Festival'
import styles from './styles.css'

export default class FestivalCategory extends Component {
    render() {
        return (
          <div className={styles.container}>
            <h2 className={styles.category}>{capitalize(this.props.category)}</h2>
            <div className={styles.scroll}>
              {this.props.items.length > 0 ? this.props.items.map(item => (
                <Festival key={item.name} category={this.props.type} {...item}/>
               )) : null}
            </div>
          </div>
        )
    }
}

