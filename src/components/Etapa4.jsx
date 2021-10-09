import React, { useState } from "react";
import "./home.css";
import {
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
} from "@material-ui/core";

function Etapa4({ aoEnviar, verificar }) {
  var [resposta, setResposta] = useState("");
  const [isCheched, setChecked] = useState(false);
  return (
    <FormControl component="fieldset">
      <h3>4) Qual comida eu não Gosto ??</h3>

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
                setChecked(false);
                verificar(isCheched);
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
                setChecked(false);
                verificar(isCheched);
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
                setChecked(false);
                verificar(isCheched);
              }}
            />
          }
          label="Waffle"
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
          label="Açai"
        />
      </RadioGroup>
    </FormControl>
  );
}

export default Etapa4;
