import React from 'react';
import { Link } from 'react-router-dom';
import Filter from './Filter';
import '../assets/stlyes/FilterNav.scss';

const FilterNav = () => (
    <nav >
        <Link to="/"><button className="back-btn" type="button">Logout</button></Link>
        <Filter />
    </nav>
);


export default FilterNav;
