import React ,{useState} from 'react';
import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils"


export const Navbar = () => {
    const [menuOpen , setMenuOpen]=useState(false)
  return (
    <nav className={styles.navbar}>
    <a className={styles.title} href="/">Umanga Khanal</a>
    <div className={styles.menu}>
        <img className={styles.menuBtn} src={menuOpen? getImageUrl("/closeIcon.png"):getImageUrl("/menuIcon.png")} alt="Menu-button" 
        onClick={()=>setMenuOpen(!menuOpen)} />
        <ul onClick={()=>setMenuOpen(false)} className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
            <li>
                <a href='#about'>About</a>
            </li>
            <li>
                <a href='#experience'>Experience</a>
            </li>
            <li>
                <a href='#projects'>Projects</a>
            </li>
            <li>
                <a href='#contact'>Contact</a>
            </li>
        </ul>
    </div>
    </nav>
  )
}
