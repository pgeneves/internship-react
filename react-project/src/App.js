import TextOutput from "./components/TextOutput.js";
import TestMUI from "./components/TestMUI.js";
import logo from "./logo.svg";
import Grid from "@mui/material/Grid2";
import "./App.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default App;

function App() {
  var [sourceText, setSourceText] = useState("write in here");
  var [valeur, setValeur] = useState("copy.txt.from.textbox.n°1->");
  var [error, seterror] = useState("null");

  const handleChange = (event) => {
    setSourceText(event.target.value);
  };

  return (
    <Grid container spacing={0}>
      <Grid size={12}>
        <TextOutput text="projet react" />
      </Grid>

      <Grid size={12}>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            console.log({ sourceText });
            setSourceText(":");
          }}
        >
          reset
        </Button>

        <TextField
          hiddenLabel
          id="button-1"
          value={sourceText}
          variant="outlined"
          multiline
          rows={10}
          fullWidth
          size="medium"
          onChange={handleChange}
        />

        <Button
          variant="contained"
          color="success"
          onClick={() => {
            console.log({ valeur });
            setValeur(sourceText);
          }}
        >
          Copy to textbox n°2
        </Button>

        <TextField
          hiddenLabel
          id="button-3"
          value={valeur}
          variant="outlined"
          multiline
          rows={10}
          fullWidth
          size="medium"
        />
      </Grid>

      <TextField
        hiddenLabel
        id="button-1"
        value={error}
        variant="outlined"
        multiline
        rows={10}
        fullWidth
        size="medium"
      />

      <Grid size={6}></Grid>
    </Grid>
  );
}
