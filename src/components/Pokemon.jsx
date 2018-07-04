import React, { Component } from 'react';

class Pokemon extends Component {
    constructor() {
        super()

        this.state = {
            showValues: false,
            imageURL : '',
            height : 0,
            weight: 0
        }
    }

    onPokemonClick () {
        // console.log(this.props.url)

        fetch(this.props.url)
            .then(result => {
                return result.json()
            }).then(data => {
            this.setState({
                showValues : true,
                height : data.height,
                weight : data.weight,
                imageURL : data.sprites.front_default

            })
        }).catch(error => console.log(error))
    }
    
    render() {

        if(!this.state.showValues){
        return (
            <li 
            onClick={this.onPokemonClick.bind(this)}
            className="card">
                name: {this.props.name}
            </li>
        )
    }
    else if(this.state.showValues){
        return (
            <li className="card">
                <div className="row">
                    <div className="col-6">
                        <p>name: {this.props.name}</p>
                        <p>height: {this.state.height}</p>
                        <p>weight: {this.state.weight}</p>
                    </div>
                    <div className="col-6">
                        <img src={this.state.imageURL} />
                    </div>
                </div>
            </li>

        );
    }
    else {
        return(<div>adind...</div>)
    }
  }
}

export default Pokemon;