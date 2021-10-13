import React, { useState } from "react";
import "./home.css";
import {
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
} from "@material-ui/core";

function Etapa1({ aoEnviar, verificar }) {
  var [resposta, setResposta] = useState("");

  const [isCheched, setChecked] = useState(false);

  return (
    <FormControl component="fieldset">
      <h3>1) Qual é a minha Série Favorita ??</h3>
      

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
          label="Sintonia"
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
          label="La Casa De Papel"
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
          label="Cobra Kai"
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
          label="Outer Banks"
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
          label="Stranger Things"
        />
      </RadioGroup>
    </FormControl>
  );
}

export default Etapa1;
