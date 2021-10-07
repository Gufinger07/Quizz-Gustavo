import React, { useState } from "react";
import "./home.css";
import {
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
} from "@material-ui/core";

function Etapa9({ aoEnviar }) {
  var [resposta, setResposta] = useState("");
  return (
    <FormControl component="fieldset">
      <h3>Qual é o meu personagem Preferido ??</h3>

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
              }}
            />
          }
          label="Homem de Ferro"
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
              }}
            />
          }
          label="Homem Aranha"
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
              }}
            />
          }
          label="Thor"
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
              }}
            />
          }
          label="Thanos"
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
              }}
            />
          }
          label="Batman"
        />
      </RadioGroup>
    </FormControl>
  );
}

export default Etapa9;
