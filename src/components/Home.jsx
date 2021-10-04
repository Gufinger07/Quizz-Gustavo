import React from "react";
import "./home.css";
import {
  Container,
  Button,
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
} from "@material-ui/core";

function Home() {
  return (
    <Container fixed className="container" maxWidth="sm">
      <FormControl component="fieldset">
        <h3>Qual é a minha Série Favorita ??</h3>

        <RadioGroup
          aria-label="gender"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="1"
            control={<Radio color="secondary" />}
            label="Sintonia"
          />
          <FormControlLabel
            value="2"
            control={<Radio color="secondary" />}
            label="La Casa De Papel"
          />
          <FormControlLabel
            value="3"
            control={<Radio color="secondary" />}
            label="Cobra Kai"
          />
          <FormControlLabel
            value="4"
            control={<Radio color="secondary" />}
            label="Outer Banks"
          />
          <FormControlLabel
            value="5"
            control={<Radio color="secondary" />}
            label="Stranger Things"
          />
        </RadioGroup>
        <div className="grupo-botoes">
          <Button variant="outlined" color="secondary" className="botao-voltar">
            Voltar
          </Button>
          <Button variant="outlined" color="secondary" className="botao-proximo">
            Próximo
          </Button>
        </div>
      </FormControl>
    </Container>
  );
}

export default Home;
