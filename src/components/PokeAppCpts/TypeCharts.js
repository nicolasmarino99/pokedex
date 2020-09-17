import React from 'react';
import Auth from './Auth';


const TypeCharts = (props) => {
    return (
        <div>
            <button className="back-btn" type="button" onClick={() => { Auth.back(() => { props.history.push('/'); }); }}>
      Logout
    </button>
        </div>
    );
}

export default TypeCharts;
