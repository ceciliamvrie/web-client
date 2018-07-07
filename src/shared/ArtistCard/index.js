import React from "react"
import styles from "./styles.css"
import propTypes from "prop-types"
import { handleMoveCard, handleLeaveCard } from "./addStyles.js"

export const ArtistCard = ({ imgSrc, name, popularity, size, index }) => (
  <div className={ styles.container }>
    <div
      className={ styles.card }
      onMouseMove={ event => handleMoveCard(event, index, styles.container, styles.card, styles.light) }
      onMouseLeave={ event => handleLeaveCard(event, index, styles.container, styles.card, styles.light) }
    >
      <a className={ styles["card-a"] } href={ "/artists/" + name.split(" ").join("-").toLowerCase() }>
        <img className={ styles["card-img"] } src={ imgSrc } alt={ name } />
      </a>
      <div className={ styles.label } >
        <h1 className={ styles["label-h1"] }>{ name }</h1>
      </div>
    </div>
  </div>
);

ArtistCard.propTypes = {
  name: propTypes.string,
  imgSrc: propTypes.string,
  popularity: propTypes.number,
  size: propTypes.string,
  index: propTypes.number,
}
