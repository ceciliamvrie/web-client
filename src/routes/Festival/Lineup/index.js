import React, { PureComponent } from 'react'
import Artist from './Artist'

export default class Lineup extends PureComponent {
  render() {
    console.log('artists', this.props.lineup)
    return (
      <div>
      {
        this.props.lineup.length  &&
        this.props.lineup.map(artist => (
          <Artist {...artist} />
        ))
      }
      </div>
    );
  }
}
