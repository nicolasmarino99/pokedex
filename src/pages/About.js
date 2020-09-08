import React from 'react';
import Title from '../components/Title';


const About = () => {
    return (
        <div className="inner">
        <Title lineContent="This is the " lineContent2="About Page"/>
        <div>
            <p className="info">
                New to the channel?
                Hey there my name is Akram, I am a Front end developer and UI Designer. 
                I'm here to hopefully educated people on how to code projects that actually look good. 
                My stack mainly consist of react.js and node.js. For UI design I like to use adobe XD 
                as my go to. If you have any suggestions on tutorials you would like to see feel free 
                to DM me :)
            </p>
        </div>
    </div>
    );
};


export default About;
