import TextOutput from './components/TextOutput.js';
import TestMUI from './components/TestMUI.js';
import logo from './logo.svg';
import Grid from '@mui/material/Grid2';
import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// This is importing code already existing; Here a function in React library named 'useState'
import { useState } from "react";

export default App

function App() {

  var [sourceText, setSourceText] = useState("write in here")
  var [valeur, setValeur] = useState("copy.txt.from.textbox.n°1->");

  const handleChange = (event) => { setSourceText(event.target.value);
  };

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid size={8}>

        </Grid>


        <Grid size={12}>

            <TextField
              hiddenLabel
              id="button-1"
              value={sourceText}
              variant="outlined"
              size="medium"
              onChange={handleChange}
            />

          <Button
            variant="contained" color="success" onClick={() => {
              console.log({sourceText});
              setSourceText(":");
            }}>
          reset
          </Button>

          
            <TextField
              hiddenLabel
              id="button-3"
              value={valeur}
              variant="outlined"
              size="medium"
              
            />
            <Button
              onClick={() => {
                ;
              }}
            >
              <Button
            variant="contained" color="success" onClick={() => {
              console.log({valeur});
              setValeur(sourceText);
            }}>
            Copy to textbox n°2
          </Button>

          </Button>

        </Grid>

        <Grid size={6}>

          <TextOutput text="'seconds-counter'" />

        </Grid>


        <Grid size={6}>

          <TextOutput text="React Internship Project" />
        </Grid>


      </Grid>



      <header className="App-header">

        <TextOutput text="'seconds-counter'" />

        <TextOutput text="React Internship Project" />

        <TextOutput text="React Internship Project" />

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