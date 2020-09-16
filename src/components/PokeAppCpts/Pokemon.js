import React from 'react';

const Pokemon = ({match}) => {
    console.log(match)
    return (
        <div>
            {match.params.name}
        </div>
    );
}

export default Pokemon;
