import React from "react";
import "./home.css";
import {
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
} from "@material-ui/core";

function Etapa9() {
  return (
    <FormControl component="fieldset">
      <h3>Qual é o meu personagem Preferido ??</h3>

      <RadioGroup aria-label="gender" name="radio-buttons-group">
        <FormControlLabel
          value="1"
          control={<Radio color="secondary" />}
          label="Homem de Ferro"
        />
        <FormControlLabel
          value="2"
          control={<Radio color="secondary" />}
          label="Homem Aranha"
        />
        <FormControlLabel
          value="3"
          control={<Radio color="secondary" />}
          label="Thor"
        />
        <FormControlLabel
          value="4"
          control={<Radio color="secondary" />}
          label="Thanos"
        />
        <FormControlLabel
          value="5"
          control={<Radio color="secondary" />}
          label="Batman"
        />
      </RadioGroup>
    </FormControl>
  );
}

export default Etapa9;
