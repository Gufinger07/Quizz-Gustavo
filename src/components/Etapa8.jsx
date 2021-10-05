import React, {useState} from "react";
import "./home.css";
import {
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
} from "@material-ui/core";

function Etapa8({aoEnviar}) {

  const [resposta, setResposta] = useState("")
  return (
    <FormControl component="fieldset">
      <h3>Qual Bebida não pode faltar no meu dia ??</h3>

      <RadioGroup aria-label="gender" name="radio-buttons-group">
        <FormControlLabel
          value="1"
          control={<Radio color="secondary" onClick={(event) => {
            setResposta(event.target.value)
            aoEnviar(event.target.value)
          }}/>}
          label="Café"
        />
        <FormControlLabel
          value="2"
          control={<Radio color="secondary" onClick={(event) => {
            setResposta(event.target.value)
            aoEnviar(event.target.value)
          }}/>}
          label="Suco"
        />
        <FormControlLabel
          value="3"
          control={<Radio color="secondary" onClick={(event) => {
            setResposta(event.target.value)
            aoEnviar(event.target.value)
          }}/>}
          label="Chá"
        />
        <FormControlLabel
          value="4"
          control={<Radio color="secondary" onClick={(event) => {
            setResposta(event.target.value)
            aoEnviar(event.target.value)
          }}/>}
          label="Refrigerante"
        />
        <FormControlLabel
          value="5"
          control={<Radio color="secondary" onClick={(event) => {
            setResposta(event.target.value)
            aoEnviar(event.target.value)
          }}/>}
          label="Cerveja"
        />
      </RadioGroup>
    </FormControl>
  );
}

export default Etapa8;
