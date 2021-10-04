import React from "react";
import "./home.css";
import {
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
} from "@material-ui/core";

function Etapa6() {
  return (
    <FormControl component="fieldset">
      <h3>Qual é meu jogo preferido ??</h3>

      <RadioGroup
        aria-label="gender"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="1"
          control={<Radio color="secondary" />}
          label="League Of Legends"
        />
        <FormControlLabel
          value="2"
          control={<Radio color="secondary" />}
          label="Counter Strike"
        />
        <FormControlLabel
          value="3"
          control={<Radio color="secondary" />}
          label="Fifa"
        />
        <FormControlLabel
          value="4"
          control={<Radio color="secondary" />}
          label="Valorant"
        />
        <FormControlLabel
          value="5"
          control={<Radio color="secondary" />}
          label="Heartstone"
        />
      </RadioGroup>
      
    </FormControl>
  );
}

export default Etapa6;