import React, { useState } from "react";
import "./home.css";
import {
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
} from "@material-ui/core";

function Etapa2({ aoEnviar }) {
  var [resposta, setResposta] = useState("");
  return (
    <FormControl component="fieldset">
      <h3>Qual é o time que eu torço ??</h3>

      <RadioGroup aria-label="gender" name="radio-buttons-group ">
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
          label="Fluminense"
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
          label="Grêmio"
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
          label="Palmeiras"
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
          label="Internacional"
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
          label="Flamengo"
        />
      </RadioGroup>
    </FormControl>
  );
}

export default Etapa2;
