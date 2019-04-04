import React, { Component } from 'react';
import './App.css';

class Player extends Component {

    render() {
        return (
            <div>
                <h1>Player{this.props.player}</h1>
                <h1>Score:{this.props.points}</h1>
                <button onClick={this.props.whoClicked}>click me</button>
            </div>
    );
    }
}

export default Player;
