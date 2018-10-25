import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import css from './styles';

export default class Menu extends Component {
    render() {
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
}
