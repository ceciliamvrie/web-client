import React, { Component } from 'react'
import axios from 'axios'
import Header from '../../shared/Header'
import Lineup from './Lineup'
import styles from './styles.css'
import propTypes from 'prop-types'

export default class Festival extends Component {
  constructor(props) {
    super(props)
    this.state = {
      festival: {
        name: '',
        imgSrc: '',
        date: '',
        location: {
          city: '',
          state: '',
          country: '',
        },
        lineup: []
      }
    }
  }

  async componentDidMount() {
    const festival = await axios(`${SERVER_ADDRESS}/api/festivals/` + this.props.match.params.name).then(r => r.data)
    this.setState({ festival })
  }

  render() {
    const { name, imgSrc, lineup} = this.state.festival
    return (
      <div>
        <Header />
        <div className={ styles['main-content'] } >
          <img className={ styles.img } src={ imgSrc } alt={ name } />
          { name }
        <Lineup lineup={ lineup } />
        </div>
      </div>
    );
  }
}

Festival.propTypes = {
  name: propTypes.string,
  imgSrc: propTypes.string,
  lineup: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      imgSrc: propTypes.string,
      popularity: propTypes.number
    })
  )
}
