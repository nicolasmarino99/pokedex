import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/stlyes/FilterNav.scss';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Filter from './Filter';

const FilterNav = () => (
  <nav>
    <Link to="/"><FontAwesomeIcon icon={faArrowLeft} size="sm" /></Link>
    <Filter />
  </nav>
);

export default FilterNav;
