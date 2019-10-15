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
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score })
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over \nScore: ${this.state.score}`);
    this.setState({ score: 0 });
    return true;
  }


  // Find and randomly arrange this.state.card for cards after each click
  clickCount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if (cards[i].count === 0) {
          cards[i].count = cards[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function () {
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  };

  // Map over this.state.cards and render a Card component for each Card object
  render() {
    return (
      <Wrapper>
        <Header>Family Guy Clicky Game
        </Header>
        <Score highscore={this.state.highscore} score={this.state.score} />
        {this.state.cards.map(card => (
          <Card
            clickCount={this.clickCount}
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
