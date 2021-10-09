import React, { useState } from "react";
import "./home.css";
import {
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
} from "@material-ui/core";

function Etapa2({ aoEnviar, verificar }) {
  var [resposta, setResposta] = useState("");

  const [isCheched, setChecked] = useState(false);
  return (
    <FormControl component="fieldset">
      <h3>2) Qual é o time que eu torço ??</h3>

      <RadioGroup aria-label="gender" name="radio-buttons-group ">
        <FormControlLabel
          value="1"
          control={
            <Radio
              color="secondary"
              onClick={(event) => {
                setResposta(event.target.value);
                resposta = event.target.value;
                aoEnviar(parseInt(resposta));
                setChecked(false);
                verificar(isCheched);
              }}
            />
          }
          label="Fluminense"
        />
        <FormControlLabel
          value="2"
          control={
            <Radio
              color="secondary"
              onClick={(event) => {
                setResposta(event.target.value);
                resposta = event.target.value;
                aoEnviar(parseInt(resposta));
                setChecked(false);
                verificar(isCheched);
              }}
            />
          }
          label="Grêmio"
        />
        <FormControlLabel
          value="3"
          control={
            <Radio
              color="secondary"
              onClick={(event) => {
                setResposta(event.target.value);
                resposta = event.target.value;
                aoEnviar(parseInt(resposta));
                setChecked(false);
                verificar(isCheched);
              }}
            />
          }
          label="Palmeiras"
        />
        <FormControlLabel
          value="4"
          control={
            <Radio
              color="secondary"
              onClick={(event) => {
                setResposta(event.target.value);
                resposta = event.target.value;
                aoEnviar(parseInt(resposta));
                setChecked(false);
                verificar(isCheched);
              }}
            />
          }
          label="Internacional"
        />
        <FormControlLabel
          value="5"
          control={
            <Radio
              color="secondary"
              onClick={(event) => {
                setResposta(event.target.value);
                resposta = event.target.value;
                aoEnviar(parseInt(resposta));
                setChecked(false);
                verificar(isCheched);
              }}
            />
          }
          label="Flamengo"
        />
      </RadioGroup>
    </FormControl>
  );
}

export default Etapa2;
