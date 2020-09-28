import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <ul>
            <li>
                <Link to="games">Games</Link>
            </li>
            <li>
                <Link to="games-with-child">Main Component</Link>
            </li>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="games/1">Game 1</Link>
            </li>
        </ul>
    );
}