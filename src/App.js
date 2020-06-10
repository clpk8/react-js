import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    input: 'Hello',
  };

  submit = () => {
    //
    console.log(this.text.value)
  };

  updateInput = (event) => {
    // This is what need to be find. onChange alwast send event.
    // console.log(event.target.value);
    this.setState({
      //event.target.value.trim() will make sure no space entered
      //event.target.value.toLowerCase() make sure no uppser case
      input: event.target.value
    })
  };

  render() {

    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <Welcome text="Welcome to React!!"/>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>

          {/*
          This function is DOM element of this input is referenced by this.text
          So, when you log this.text, you can see the reference
          */}
          <p>{this.state.input}</p>
          <input type="text" ref={(input) => this.text = input}/>
          <input type="text" value={this.state.input} onChange={this.updateInput}/>
          {/*this will run the function toggle*/}
          <button onClick={this.submit}> Show Value</button>
        </div>
    );
  }
}


function Welcome(props) {
  const {text} = props;
  return (
      <h1 className="App-title"> {text} </h1>
  )
}

export default App;
