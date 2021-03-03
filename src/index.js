import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log(`I'm`, this.name, 'and I am', this.age, 'years old.');
  }
}

const animal1 = new Animal('Simba', 29);
animal1.speak();

console.log(animal1);

class Lion extends Animal {
  constructor(name, age, furColor, speed) {
    super(name, age);
    this.furColor = furColor;
    this.speed = speed;
  }
  roar() {
    console.log(
      'Roooor! My fur is: ',
      this.furColor,
      'color and my top speed is: ',
      this.speed
    );
  }
}

const lion1 = new Lion('Mufasa', 22, 'golden', '88km/h');

console.log(lion1);

lion1.speak();
lion1.roar();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
