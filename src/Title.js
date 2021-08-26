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
    console.log('The Title Component has been loaded successfully');
    this.animateTitles();
  }

  animateTitles = () => {
    setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
      this.setState({ titleIndex });
    }, 2000);
  };

  render() {
    const title = TITLES[this.state.titleIndex];
    return <p>I am {title}</p>;
  }
}

export default Title;
