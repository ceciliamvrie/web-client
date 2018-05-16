import React, { Component } from 'react'
import FestivalCategory from './FestivalCategory'

export default class Home extends Component {
  render() {
    return (
      <div>
        <FestivalCategory category={'popular'} />
        <FestivalCategory category={'upcoming'} />
        <FestivalCategory category={'near'} />
      </div>
    )
  }
}
