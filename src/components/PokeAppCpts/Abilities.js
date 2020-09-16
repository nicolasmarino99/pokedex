import React from 'react';
import Auth from './Auth';

const Abilities = props => (
  <div>
    <button className="back-btn" type="button" onClick={() => { Auth.back(() => { props.history.push('/'); }); }}>
      Logout
    </button>
  </div>
);

export default Abilities;
