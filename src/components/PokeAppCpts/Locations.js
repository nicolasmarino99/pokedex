import React from 'react';
import Auth from './Auth';

const Locations = (props) => {
    return (
        <button className="back-btn" type="button" onClick={() => { Auth.back(() => { props.history.push('/'); }); }}>
      Logout
    </button>
    );
}

export default Locations;
