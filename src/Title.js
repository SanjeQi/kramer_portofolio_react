import React, { Component } from 'react';

const TITLES = [
  'a CEO at Kramerica Industries',
  'a Tobacco Poster Boy',
  'a Kelvin Clain perfume creator',
  'a software developer',
];

class Title extends Component {
  state = { titleIndex: 0 };

  componentDidMount() {
    this.animateTitles();
  }

  componentWillUnmount() {
    clearInterval(this.titleInterval);
  }

  animateTitles = () => {
    this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
      this.setState({ titleIndex });
    }, 1500);
  };

  render() {
    const title = TITLES[this.state.titleIndex];
    return <p>I am {title}</p>;
  }
}

export default Title;
