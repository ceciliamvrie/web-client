import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { Header, NavigationBar, Search } from '../../shared'
import FestivalCategory from '../../shared/FestivalCategory'
import styles from './styles.css'

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
    const festival = await axios(`${SERVER_ADDRESS}/api/lineup/` + this.props.match.params.name)
    .then(({ data }) => this.setState({ festival: data }))
    .catch(console.error)
  }

  render() {
    const { name, imgSrc, lineup} = this.state.festival
    return (
      <Fragment>
        <NavigationBar>
          <Search className={styles.festivalSearch}/>
        </NavigationBar>
        <div className={styles['main-content']}>
          {
            this.state.festival.lineup.map(({category, lineup}) => (
              <FestivalCategory type="artists" category={category + "Artists"} items={lineup} />
            ))
          }
        </div>
      </Fragment>
    );
  }
}
