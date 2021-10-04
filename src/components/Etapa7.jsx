import React from "react";
import "./home.css";
import {
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
} from "@material-ui/core";

function Etapa7() {
  return (
    <FormControl component="fieldset">
      <h3>Qual é minha área preferida ??</h3>

      <RadioGroup aria-label="gender" name="radio-buttons-group">
        <FormControlLabel
          value="1"
          control={<Radio color="secondary" />}
          label="Front-End"
        />
        <FormControlLabel
          value="2"
          control={<Radio color="secondary" />}
          label="Back-End"
        />
        <FormControlLabel
          value="3"
          control={<Radio color="secondary" />}
          label="Ux-Designer"
        />
        <FormControlLabel
          value="4"
          control={<Radio color="secondary" />}
          label="Bando de Dados"
        />
        <FormControlLabel
          value="5"
          control={<Radio color="secondary" />}
          label="Designer Gráfico"
        />
      </RadioGroup>
    </FormControl>
  );
}

export default Etapa7;
