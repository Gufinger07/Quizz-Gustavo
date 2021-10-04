import React from "react";
import "./home.css";
import {
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
} from "@material-ui/core";

function Etapa5() {
  return (
    <FormControl component="fieldset">
      <h3>Qual estilo musical eu mais gosto ??</h3>

      <RadioGroup
        aria-label="gender"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="1"
          control={<Radio color="secondary" />}
          label="Funk"
        />
        <FormControlLabel
          value="2"
          control={<Radio color="secondary" />}
          label="Trap"
        />
        <FormControlLabel
          value="3"
          control={<Radio color="secondary" />}
          label="Sertanejo kkkkk"
        />
        <FormControlLabel
          value="4"
          control={<Radio color="secondary" />}
          label="Rock"
        />
        <FormControlLabel
          value="5"
          control={<Radio color="secondary" />}
          label="Pagóde"
        />
      </RadioGroup>
      
    </FormControl>
  );
}

export default Etapa5;