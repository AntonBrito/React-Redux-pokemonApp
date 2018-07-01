import React, { Component } from 'react';

class Pokemon extends Component {
    
    render() {

        console.log(this.props.count)
        return (
            <li>
                helllo iam pokemon component
            </li>
        )
    }
}

export default Pokemon;