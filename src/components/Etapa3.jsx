import React, { useState } from "react";
import "./home.css";
import {
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
} from "@material-ui/core";

function Etapa3({ aoEnviar }) {
  const [resposta, setResposta] = useState("");
  return (
    <FormControl component="fieldset" >
      <h3>Qual é a minha comida preferida ??</h3>

      <RadioGroup aria-label="gender" name="radio-buttons-group" >
        <FormControlLabel
          value="1"
          control={
            <Radio
            
              color="secondary"
              onClick={(event) => {
                setResposta(event.target.value);
                aoEnviar(event.target.value);
              }}
            />
          }
          label="Churrasco"
        />
        <FormControlLabel
          value="2"
          control={
            <Radio
              color="secondary"
              onClick={(event) => {
                setResposta(event.target.value);
                aoEnviar(event.target.value);
              }}
            />
          }
          label="Pizza"
        />
        <FormControlLabel
          value="3"
          control={
            <Radio
              color="secondary"
              onClick={(event) => {
                setResposta(event.target.value);
                aoEnviar(event.target.value);
              }}
            />
          }
          label="Sushi"
        />
        <FormControlLabel
          value="4"
          control={
            <Radio
              color="secondary"
              onClick={(event) => {
                setResposta(event.target.value);
                aoEnviar(event.target.value);
              }}
            />
          }
          label="Hamburger"
        />
        <FormControlLabel
          value="5"
          control={
            <Radio
              color="secondary"
              onClick={(event) => {
                setResposta(event.target.value);
                aoEnviar(event.target.value);
              }}
            />
          }
          label="Macarrão"
        />
      </RadioGroup>
    </FormControl>
  );
}

export default Etapa3;
