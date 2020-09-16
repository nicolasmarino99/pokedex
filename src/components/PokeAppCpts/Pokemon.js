import React from 'react';
import { connect } from 'react-redux';

const Pokemon = ({match, pokemon}) => {
    console.log(match)
    return (
        <div>
            {match.params.name}
          {pokemon.name ? pokemon.name : 'no mi perro'}
        </div>
    );
}

const mapStateToProps = state => ({
    pokemon: state.pokemon,
});

export default connect(mapStateToProps)(Pokemon);
