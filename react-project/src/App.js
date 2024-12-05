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
import { format } from "sql-formatter";

function App() {
  var [sourceText, setSourceText] = useState("write in here");
  var [valeur, setValeur] = useState("copy.txt.from.textbox.n°1->");
  var [error, seterror] = useState("null");

  function transform(paramsToto) {
    var sqlQuery = "SELECT * FROM, sourceText";
    //console.log(format(sqlQuery, { language: "mysql" })); // on appelle format en lui passant sqlQuery
    try {
      var newQuery = format(paramsToto, { language: "mysql" }); // appelle format en lui passant paramsToto
      return newQuery;
    } catch (e) {
      seterror(e);
    }

    return "";
  }

  /*
  function greet(originalValue, setErrorMessage) {
    if (originalValue.length < 5) {
      setErrorMessage("Input must be at least five characters long");
      return false;
    } else {
      setErrorMessage("");
      return true;
    }
}*/

  const handleChange1 = (event) => {
    setSourceText(event.target.value);
  };

  /*  
  const handleChange2 = (event) => {
    const value = event.target.value;
    setInputValue(value);
    greet(inputValue, setErrorMessage);
  };*/

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
          onChange={handleChange1}
        />

        <Button
          variant="contained"
          color="success"
          onClick={() => {
            console.log({ valeur });
            setValeur(transform(sourceText));
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
        /*    onChange={handleChange2}
        error={Boolean(errorMessage)}
        helperText={errorMessage}*/
      />
    </Grid>
  );
}
export default App;
