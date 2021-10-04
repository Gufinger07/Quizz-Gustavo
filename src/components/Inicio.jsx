import React, { useState } from "react";
import { Container, Button } from "@material-ui/core";
import "./home.css";
import Inicial from "./Inicial";
import Etapa1 from "./Etapa1";
import Etapa2 from "./Etapa2";
import Etapa3 from "./Etapa3";
import Etapa4 from "./Etapa4";
import Etapa5 from "./Etapa5";
import Etapa6 from "./Etapa6";
import Etapa7 from "./Etapa7";
import Etapa8 from "./Etapa8";
import Etapa9 from "./Etapa9";
import Etapa10 from "./Etapa10";

function Inicio() {
  const [etapaAtual, setEtapaAtual] = useState(0);

 

  const etapas = [
    <Inicial />,
    <Etapa1 />,
    <Etapa2 />,
    <Etapa3 />,
    <Etapa4 />,
    <Etapa5 />,
    <Etapa6 />,
    <Etapa7 />,
    <Etapa8 />,
    <Etapa9 />,
    <Etapa10 />,
  ];


  return (
    <Container fixed className="container" maxWidth="sm">
      {etapas[etapaAtual]}
      <div className="grupo-botoes">
        <Button
          onClick={() => {
            if (etapaAtual < 10) {
              setEtapaAtual(etapaAtual + 1);
            }
          }}
          variant="outlined"
          color="secondary"
          className="botao-proximo"
        >
          Próximo
        </Button>
      </div>
    </Container>
  );
}

export default Inicio;
