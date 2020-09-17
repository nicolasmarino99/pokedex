import React from 'react';
import { Link } from 'react-router-dom';
import Auth from './Auth';

const Abilities = () => (
  <div>
    <Link to="/"><button className="back-btn" type="button">Logout</button></Link>
  </div>
);

export default Abilities;
