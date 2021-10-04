import React from "react";
import "./home.css";
import {
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
} from "@material-ui/core";

function Etapa3() {
  return (
    <FormControl component="fieldset">
      <h3>Qual é a minha comida preferida ??</h3>

      <RadioGroup
        aria-label="gender"
        value="female"
        name="radio-buttons-group"
      >
        <FormControlLabel
          defaultValue="1"
          control={<Radio color="secondary" />}
          label="Churrasco"
        />
        <FormControlLabel
          value="2"
          control={<Radio color="secondary" />}
          label="Pizza"
        />
        <FormControlLabel
          value="3"
          control={<Radio color="secondary" />}
          label="Sushi"
        />
        <FormControlLabel
          value="4"
          control={<Radio color="secondary" />}
          label="Hamburger"
        />
        <FormControlLabel
          value="5"
          control={<Radio color="secondary" />}
          label="Macarrão"
        />
      </RadioGroup>
      
    </FormControl>
  );
}

export default Etapa3;