import React from 'react';
import { Link } from 'react-router-dom';


const Items = () => {
    return (
      <Link to="/"><button className="back-btn" type="button">Logout</button></Link>
    );
}

export default Items;
