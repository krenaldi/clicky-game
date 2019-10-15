import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Score from "./components/Score";
import cards from "./cards.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cards,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    
  }
  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const cards = this.state.cards.filter(card => card.id !== id);
    // Set this.state.cards equal to the new cards array
    this.setState({ cards });
  };

  // Map over this.state.cards and render a Card component for each Card object
  render() {
    return (
      <Wrapper>
        <Header>Family Guy Clicky Game
        </Header>
          <Score highscore={this.state.highscore} score={this.state.score}/>
        {this.state.cards.map(card => (
          <Card
            removeFriend={this.removeFriend}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
