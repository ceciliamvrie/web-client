import React, { Component } from 'react'
import propTypes from 'prop-types'
import axios from 'axios'
import Festival from './Festival'
import styles from './styles.css'

export default class FestivalCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            festivals: []
        }
    }

    async componentDidMount() {
        const festivals = await axios(`${SERVER_ADDRESS}/api/festivals?category=${this.props.category}`).then(r => r.data)
        this.setState({ festivals })
    }

    render() {
        return (
          <div className={styles.container}>
            <h2>{ this.props.category }</h2>
            <div className={styles.scroll}>
              { this.state.festivals.length > 0 ? this.state.festivals.map(f => (
                  <Festival
                    {...f}
                    className={styles['scroll-item']}
                    key={f.name}
                  />
              )) : null}
            </div>
          </div>
        )
    }
}


FestivalCategory.propTypes = {
    category: propTypes.string
}

