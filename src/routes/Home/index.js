import React, { Component, Fragment } from 'react'
import axios from 'axios'
import FestivalCategory from '../../shared/FestivalCategory'
import { NavigationBar, Header }  from '../../shared'
import styles from './styles.css'


export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { festivalCategories: [] };

  }
  async componentDidMount() {
    await axios(`${SERVER_ADDRESS}/api/feed`)
      .then(({ data }) => this.setState({ festivalCategories: data }))
      .catch(console.error)
  }

  render() {
    const { festivalCategories } = this.state;
    return (
      <Fragment>
        <NavigationBar/>
        <Header />
        <div className={ styles.mainContent }>
          {festivalCategories.length ? festivalCategories.map(({ festivals, category }) => (
            <FestivalCategory type="festivals" category={category + " Festivals"} items={festivals} />
          )) : null}
        </div>
      </Fragment>
    )
  }
}