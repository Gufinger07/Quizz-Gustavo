import React, { useState } from "react";
import "./home.css";
import {
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
} from "@material-ui/core";

function Etapa10({ aoEnviar, verificar }) {
  var [resposta, setResposta] = useState("");
  const [isCheched, setChecked] = useState(false);
  return (
    <FormControl component="fieldset">
      <h3>10) Qual é meu desenho Preferido ??</h3>

      <RadioGroup aria-label="gender" name="radio-buttons-group">
        <FormControlLabel
          value="1"
          control={
            <Radio
              color="secondary"
              onClick={(event) => {
                setResposta(event.target.value);
                resposta = event.target.value
                aoEnviar(parseInt(resposta));
                setChecked(false);
                verificar(isCheched);
              }}
            />
          }
          label="Dragon ball"
        />
        <FormControlLabel
          value="2"
          control={
            <Radio
              color="secondary"
              onClick={(event) => {
                setResposta(event.target.value);
                resposta = event.target.value
                aoEnviar(parseInt(resposta));
                setChecked(false);
                verificar(isCheched);
              }}
            />
          }
          label="Thundercats"
        />
        <FormControlLabel
          value="3"
          control={
            <Radio
              color="secondary"
              onClick={(event) => {
                setResposta(event.target.value);
                resposta = event.target.value
                aoEnviar(parseInt(resposta));
                setChecked(false);
                verificar(isCheched);
              }}
            />
          }
          label="Naruto"
        />
        <FormControlLabel
          value="4"
          control={
            <Radio
              color="secondary"
              onClick={(event) => {
                setResposta(event.target.value);
                resposta = event.target.value
                aoEnviar(parseInt(resposta));
                setChecked(false);
                verificar(isCheched);
              }}
            />
          }
          label="Avatar"
        />
        <FormControlLabel
          value="5"
          control={
            <Radio
              color="secondary"
              onClick={(event) => {
                setResposta(event.target.value);
                resposta = event.target.value
                aoEnviar(parseInt(resposta));
                setChecked(false);
                verificar(isCheched);
              }}
            />
          }
          label="Cavaleiro do Zodíaco"
        />
      </RadioGroup>
    </FormControl>
  );
}

export default Etapa10;
