import React from 'react';
import {Link} from 'react-router-dom';

export const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="inner-content">
                <div className="brand">
                    <Link to="/">Watch List</Link>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link to="/">Watch List</Link>
                    </li>
                    <li>
                        <Link to="/Watched">Watched</Link>
                    </li>
                    <li>
                        <Link to="/Addmovie" className="btn">Add Movie</Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}