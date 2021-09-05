import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import kramer from '../assets/kramer.png';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = { displayBio: false };
  //   this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  // }
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <img src={kramer} alt="portfolio" className="profile" />
        <h1>Hello!</h1>
        <p>My name is Kramer.I'm always around Jerry's apartment</p>
        <Title />
        <p>I just got a haircut</p>
        {this.state.displayBio ? (
          <div>
            <p>I live in New York City</p>
            <p>I like fruits</p>
            <p>I love my jacket</p>
            <p>I have the Kavorka.</p>
            <button onClick={this.toggleDisplayBio}>Show Less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read More</button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
