import React, { Component } from 'react';

class PokemonList extends Component {

    render(){
        // console.log(this.props)
        if ( this.props.pokemonResult.length > 0) {
            return(
                <ul>
                    {this.renderPokemons()}
                </ul>
            );
        }
        return(<div>.loading...</div>) 
        
    }
}
export default PokemonList;