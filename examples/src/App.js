// These line are importing components defined in their own source files
import TextOutput from './components/TextOutput.js';
import TestMUI from './components/TestMUI.js';

// Those lines are importing data from local files (here an image and a CSS style sheet)
// svg is a markup language used to create images from geometric instructions
import logo from './logo.svg';
// The CSS style sheet imported below define all styling properties used below including the animation
import './App.css';

function App() {
  return (
    <div className="App">
    <header className="App-header">
        <TextOutput text="React Internship Project" />
        <TestMUI />
        <img src={logo} className="App-logo" alt="logo" />
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
    </div>
  );
}

export default App;
