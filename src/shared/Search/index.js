import React from "react"
import styles from "./styles.css"
import { SearchSVG } from './SearchSVG'

const SearchButton = ({ className }) => (
  <div className={className || styles.searchButton}>
    <SearchSVG height={23} width={23} fill="#00000087" />
  </div>
)

export const Search = ({ className }) => (
  <div className={className || styles.container}>
    <SearchButton className={styles.searchButton} />
    <input type="text" placeholder="Search by festivals, artists, genre, location" />
  </div>
);
