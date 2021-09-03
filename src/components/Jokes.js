import React, { Component } from 'react';

const Joke = ({ joke: { setup, punchline } }) => (
  <p style={{ margin: 20 }}>
    {setup} <em>{punchline}</em>
  </p>
);

class Jokes extends Component {
  state = { joke: {}, jokes: [] };

  componentDidMount() {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then((res) => res.json())
      .then((joke) => this.setState({ joke }));
  }

  fetchJokes = () => {
    fetch('https://official-joke-api.appspot.com/random_ten')
      .then((res) => res.json())
      .then((jokes) => this.setState({ jokes }));
  };

  render() {
    return (
      <div>
        <h3>Random Joke of the day:</h3>
        <Joke joke={this.state.joke} />
        <hr />
        <h3>Get 10 more !?</h3>
        <button onClick={this.fetchJokes}>Jokes</button>
        {this.state.jokes.map((joke) => (
          <Joke key={joke.id} joke={joke} />
        ))}
      </div>
    );
  }
}

export default Jokes;
