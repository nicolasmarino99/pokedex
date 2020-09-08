import React from 'react'
import PropTypes from 'prop-types'
import Title from '../components/Title';

const Home = () => {
    
    return (
        <div className="inner">
            <Title lineContent="This is the " lineContent2="Home Page"/>
            <div>
                <p className="info">
                My stack mainly consist of react.js and node.js. For UI design I like to use adobe XD 
                    as my go to. If you have any suggestions on tutorials you would like to see feel free 
                    to DM me :). 
                    My stack mainly consist of react.js and node.js. For UI design I like to use adobe XD 
                    as my go to. If you have any suggestions on tutorials you would like to see feel free 
                    to DM me :)
                </p>
            </div>
        </div>
    );
};

Home.propTypes = {

}

export default Home

