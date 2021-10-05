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
import Finalizacao from "./Finalizacao";

function Inicio(aoEnviar) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  const [dadosColetados, setDados] = useState(0);
  const etapas = [
    <Inicial />,
    <Etapa1 aoEnviar={coletar} />,
    <Etapa2 aoEnviar={coletar} />,
    <Etapa3 aoEnviar={coletar} />,
    <Etapa4 aoEnviar={coletar} />,
    <Etapa5 aoEnviar={coletar} />,
    <Etapa6 aoEnviar={coletar} />,
    <Etapa7 aoEnviar={coletar} />,
    <Etapa8 aoEnviar={coletar} />,
    <Etapa9 aoEnviar={coletar} />,
    <Etapa10 aoEnviar={coletar} />,
    <Finalizacao />,
  ];

  function coletar(resposta) {
    setDados(resposta);
  }

  const respostas = [0, 3, 2, 1, 5, 2, 1, 1, 1, 2, 3];

  return (
    <Container fixed className="container" maxWidth="sm">
      {etapas[etapaAtual]}
      <div className="grupo-botoes">
        {etapaAtual < 11 && (
          <Button
            onClick={() => {
              if (
                etapaAtual > 0 &&
                etapaAtual < 11 &&
                dadosColetados == respostas[etapaAtual]
              ) {
                setEtapaAtual(etapaAtual + 1);
              }
              if (etapaAtual === 0) {
                setEtapaAtual(etapaAtual + 1);
              }
            }}
            variant="outlined"
            color="secondary"
            className="botao-proximo"
          >
            Próximo
          </Button>
        )}
        {etapaAtual === 11 &&(
          <Button
          onClick={() => {
            setEtapaAtual(0)
          }}
          variant="outlined"
          color="secondary"
          className="botao-proximo"
        >
          Reiniciar
        </Button>
        )}
        
      </div>
    </Container>
  );
}

export default Inicio;
