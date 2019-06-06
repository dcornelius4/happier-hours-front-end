import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';
import logo from '../../assets/undraw_beer_celebration_3wc8.png';

export default function Header() {
  return (
    <header className={styles.Header}>
      <img src={logo} />
      <h1>Happier Hours</h1>
      <Link to="/add">Add</Link>
      <Link to="/">Home</Link>
    </header>
  );
}
