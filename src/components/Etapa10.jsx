import React from "react";
import "./home.css";
import {
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
} from "@material-ui/core";

function Etapa10() {
  return (
    <FormControl component="fieldset">
      <h3>Qual é meu desenho Preferido ??</h3>

      <RadioGroup aria-label="gender" name="radio-buttons-group">
        <FormControlLabel
          value="1"
          control={<Radio color="secondary" />}
          label="Dragon ball"
        />
        <FormControlLabel
          value="2"
          control={<Radio color="secondary" />}
          label="Thundercats"
        />
        <FormControlLabel
          value="3"
          control={<Radio color="secondary" />}
          label="Naruto"
        />
        <FormControlLabel
          value="4"
          control={<Radio color="secondary" />}
          label="Avatar"
        />
        <FormControlLabel
          value="5"
          control={<Radio color="secondary" />}
          label="Cavaleiro do Zodíaco"
        />
      </RadioGroup>
    </FormControl>
  );
}

export default Etapa10;
