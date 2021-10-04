import React from "react";
import "./home.css";
import {
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
} from "@material-ui/core";

function Etapa4() {
  return (
    <FormControl component="fieldset">
      <h3>Qual doce eu não Gosto ??</h3>

      <RadioGroup
        aria-label="gender"
        value="female"
        name="radio-buttons-group"
      >
        <FormControlLabel
          defaultValue="1"
          control={<Radio color="secondary" />}
          label="Chocolate"
        />
        <FormControlLabel
          value="2"
          control={<Radio color="secondary" />}
          label="Churros"
        />
        <FormControlLabel
          value="3"
          control={<Radio color="secondary" />}
          label="Sorvete"
        />
        <FormControlLabel
          value="4"
          control={<Radio color="secondary" />}
          label="Algodão Doce"
        />
        <FormControlLabel
          value="5"
          control={<Radio color="secondary" />}
          label="Açai"
        />
      </RadioGroup>
      
    </FormControl>
  );
}

export default Etapa4;