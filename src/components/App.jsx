import React, {Component} from 'react';


class App extends Component {
    constructor() {
        super();

        this.state = {
            type: '1',
            pokemonList : []
            }
        }
    }

    render(){

        console.log('this is the app state', this.state)
        
        return(
            <div
            className="container app-container"
            >
                 <div>
                    <h4>Our small pokeman app</h4>
                        <form>
                            <label>Choose your Pokemon type</label>
                            <select >
                                <option value="1">normal</option>
                                <option value="2">fighting</option>
                                <option value="3">flying</option>
                            </select>
                            <button className="btn btn-success">Search for type!</button>

                        </form>

            
                </div>

            </div>
        );
    }
}

export default App;