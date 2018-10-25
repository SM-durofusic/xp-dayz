import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import css from './styles';

const Menu = () => {
    return (
        <nav>
            <ul className={css.navBarStyle}>
                <li className={css.listStyle}>
                    <Link to='/'>Link</Link>
                </li>
                <li>
                    <Link to='/'>Link</Link>
                </li>
                <li>
                    <Link to='/'>Link</Link>
                </li>
                <li>
                    <Link to='/'>Link</Link>
                </li>
                <li>
                    <Link to='/'>Link</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;
