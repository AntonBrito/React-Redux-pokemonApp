import React, { Component } from 'react';

class PokemonList extends Component {
    constructor() {
        super()
    }
    //-----------Message
    renderPokemons(){
        let counter = 0;

        return this.props.pokemonResult.map( pokemons => {
            console.log(pokemons);
            counter = counter +1;

            return <li key={counter}className="card">name: {pokemons.pokemon.name} <br/> url: {pokemons.pokemon.url}</li>

            // return <Pokemon key={counter} count{counter}/>
        })
    }
    
    //-------------

    
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