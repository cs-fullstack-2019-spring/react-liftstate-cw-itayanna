import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Player from "./Player";

class App extends Component {
  constructor(props){
    super(props);
    this.state={lastClicked:0, score1:0, score2:0};
  }

  payer1Clicked= (e) =>{
    let updateScore= this.state.score+1;
    this.setState({lastClicked:1});
    this.setState({score1:updateScore})

  };

  player2clicked= (e) =>{
    let updateScore= this.state.score+1;
    this.setState({lastClicked:2});
    this.setState({score2:updateScore})
  };

  render() {
    return (
      <div className="App">
        <h1>Last player to click:{this.state.lastClicked}</h1>
        <Player player='1' whoClicked={this.payer1Clicked} points={this.state.score1}/>
        <Player player='2' whoClicked={this.player2clicked} points={this.state.score2}/>
      </div>
    );
  }
}

export default App;
