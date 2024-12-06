import TextOutput from "./components/TextOutput.js";
import Grid from "@mui/material/Grid2";
import "./App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { format } from "sql-formatter";

function App() {
  var [sourceText, setSourceText] = useState(
    "select * from table where cond = true"
  );
  var [valeur, setValeur] = useState("copy.txt.from.textbox.n°1->");
  var [error, seterror] = useState("");

  function transform(params) {
    try {
      var newQuery = format(params, { language: "mysql" }); // appelle format en lui passant paramsToto
      return newQuery;
    } catch (e) {
      seterror(e);
    }

    return "";
  }

  const handleChange1 = (event) => {
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
        color="error"
      />
    </Grid>
  );
}
export default App;
