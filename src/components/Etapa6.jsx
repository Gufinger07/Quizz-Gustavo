import React, { useState } from "react";
import "./home.css";
import {
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
} from "@material-ui/core";

function Etapa6({ aoEnviar }) {
  var [resposta, setResposta] = useState("");

  return (
    <FormControl component="fieldset">
      <h3>Qual é meu jogo preferido ??</h3>

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
          label="League Of Legends"
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
          label="Counter Strike"
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
          label="Fifa"
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
          label="Valorant"
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
          label="Heartstone"
        />
      </RadioGroup>
    </FormControl>
  );
}

export default Etapa6;
