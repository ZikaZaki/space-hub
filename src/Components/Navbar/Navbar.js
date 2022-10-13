import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
// import the nav-logo image
import NavLogo from './planet.png';

const Navbar = () => (
  <div className={styles['nav-container']}>
    <nav className={styles.nav}>
      <div className={styles['nav-logo']}>
        <img className={styles['logo-img']} src={NavLogo} alt="planet" />
        <h1 className={styles['logo-title']}>Space Travelers&apos; Hub</h1>
      </div>
      <ul className={styles['nav-list']}>
        <li className={styles['list-item']}>
          <NavLink
            className={({ isActive }) => (isActive ? styles['active-link'] : styles['inactive-link'])}
            end
            to="/"
          >
            Rockets
          </NavLink>
        </li>
        <li className={styles['list-item']}>
          <NavLink
            className={({ isActive }) => (isActive ? styles['active-link'] : styles['inactive-link'])}
            to="/dragons"
          >
            Dragons
          </NavLink>
        </li>
        <li className={styles['list-item']}>
          <NavLink
            className={({ isActive }) => (isActive ? styles['active-link'] : styles['inactive-link'])}
            to="/missions"
          >
            Missions
          </NavLink>
        </li>
        <span className={styles.separator}> | </span>
        <li className={styles['list-item']}>
          <NavLink
            className={({ isActive }) => (isActive ? styles['active-link'] : styles['inactive-link'])}
            to="/profile"
          >
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
    <hr />
  </div>
);

export default Navbar;
