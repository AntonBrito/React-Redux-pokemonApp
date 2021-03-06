import React, {Component} from 'react';

import PokemonList from './PokemonList';


class App extends Component {
    constructor() {
        super();

        this.state = {
            type: '1',
            pokemonList : []
            }
        }

        onSelectTypeChange(event){
            // console.log(event.target.value)
            this.setState( { type: event.target.value} )
        }

        onButtonClick(event){
            event.preventDefault();
           
            const API_URL = `https://pokeapi.co/api/v2/type/${this.state.type}/`; 
    
            fetch(API_URL)
                .then(result => {
                    return result.json()
                }).then(data => {
                   // console.log(data.pokemon)
                   this.setState({pokemonList : data.pokemon})
                }).catch(error => console.log(error))
    
        }
    
    render() {

        console.log('this is the app state', this.state)
        
        return(
            <div
            className="container app-container"
            >
                 <div>
                    <h4>Our small pokeman app</h4>
                        <form>
                            <label>Choose your Pokemon type</label>
                            <br/>
                            <select 
                                onChange={this.onSelectTypeChange.bind(this)}       
                            >
                                <option value="1">normal</option>
                                <option value="2">fighting</option>
                                <option value="3">flying</option>
                                <option value="4">poison</option>
                            </select>

                            <button 
                                onClick={this.onButtonClick.bind(this)}
                                className="btn btn-success">Search for type!</button>

                        </form>
            
                </div>

                 <PokemonList pokemonResult={this.state.pokemonList}/>

            </div>
        );
    }
}

export default App;