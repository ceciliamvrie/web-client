import React, { PureComponent } from 'react'

export default class Artist extends PureComponent {
  render() {
    const { imgSrc, name } = this.props
    return (
      <div className="card">
        <a href={ '/artists/' + name.split(' ').join('-').toLowerCase()}>
          <img className="img" src={ imgSrc } alt={ name } />
          <div className="caption">
            <h3>{ name }</h3>
          </div>
        </a>
      </div>
    );
  }
}
