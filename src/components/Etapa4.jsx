import React, { useState } from "react";
import "./home.css";
import {
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
} from "@material-ui/core";

function Etapa4({ aoEnviar }) {
  var [resposta, setResposta] = useState("");
  return (
    <FormControl component="fieldset">
      <h3>Qual doce eu não Gosto ??</h3>

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
          label="Chocolate"
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
          label="Churros"
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
          label="Sorvete"
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
          label="Algodão Doce"
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
          label="Açai"
        />
      </RadioGroup>
    </FormControl>
  );
}

export default Etapa4;
