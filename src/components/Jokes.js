import React, { Component } from 'react';

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
    const { setup, punchline } = this.state.joke;
    return (
      <div>
        <h3>Random Joke of the day:</h3>
        <p>
          {setup} <em>{punchline}</em>
        </p>
        <hr />
        <h3>Get 10 more !?</h3>
        <button onClick={this.fetchJokes}>Jokes</button>
        {this.state.jokes.map((joke) => {
          const { id, setup, punchline } = joke;
          return (
            <p key={id}>
              {setup} <em>{punchline}</em>
            </p>
          );
        })}
      </div>
    );
  }
}

export default Jokes;
