import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/stlyes/FilterNav.scss';
import { faArrowLeft, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoveNav = () => (
  <nav>
    <Link to="/"><FontAwesomeIcon icon={faArrowLeft} size="2x" /></Link>
    <div><FontAwesomeIcon icon={faHeart} size="2x" /></div>
  </nav>
);

export default LoveNav;
