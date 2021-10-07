import React, { useState } from "react";
import "./home.css";
import {
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
} from "@material-ui/core";

function Etapa8({ aoEnviar, verificar }) {
  var [resposta, setResposta] = useState("");
  const [isCheched, setChecked] = useState(false);
  return (
    <FormControl component="fieldset">
      <h3>Qual Bebida não pode faltar no meu dia ??</h3>

      <RadioGroup aria-label="gender" name="radio-buttons-group">
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
          label="Café"
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
          label="Suco"
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
          label="Chá"
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
          label="Refrigerante"
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
          label="Cerveja"
        />
      </RadioGroup>
    </FormControl>
  );
}

export default Etapa8;
