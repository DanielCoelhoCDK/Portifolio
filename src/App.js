import React, { Component } from 'react';
import foto from '.././src/assets/img/d.jpeg'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showImage: false,
    };
  }

  toggle = () => {
    this.setState({
      showImage: !this.state.showImage,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button type="button" onClick={this.toggle}>
            {this.state.showImage ? 'Esconder' : 'Mostrar'}
          </button>
          {this.state.showImage && (
            <img src={foto} className="App-logo" alt="perfíl" />
          )}
          <p>
            Meu <code>Portifólio</code> / Daniel Coelho.
          </p>
          <div className='App-contatos'>
            <a
              className="App-link"
              href="https://www.linkedin.com/in/daniel-coelho-1b161979/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="App-link"
              href="https://github.com/DanielCoelhoCDK"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </header>
      </div>
    );
  }

}

export default App;
