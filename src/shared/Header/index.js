import React from 'react';
import styles from './styles.css';
import { Search } from '../Search';

export const Header = () => (
  <div className={ styles.container }>
    <Search className={ styles.searchBar } />
  </div>
);