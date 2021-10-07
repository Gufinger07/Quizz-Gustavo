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

  const [dadosColetados, setDados] = useState(0);

  const [booleanColetado, setBoolean] = useState(true)

  const [contadorRespostas, setContador] = useState(0);
  const etapas = [
    <Inicial />,
    <Etapa1 aoEnviar={coletar}  verificar={verifica}/>,
    <Etapa2 aoEnviar={coletar}  verificar={verifica}/>,
    <Etapa3 aoEnviar={coletar}  verificar={verifica}/>,
    <Etapa4 aoEnviar={coletar}  verificar={verifica}/>,
    <Etapa5 aoEnviar={coletar}  verificar={verifica}/>,
    <Etapa6 aoEnviar={coletar}  verificar={verifica}/>,
    <Etapa7 aoEnviar={coletar}  verificar={verifica}/>,
    <Etapa8 aoEnviar={coletar}  verificar={verifica}/>,
    <Etapa9 aoEnviar={coletar}  verificar={verifica}/>,
    <Etapa10 aoEnviar={coletar} verificar={verifica}/>,
  ];

  function coletar(resposta) {
    setDados(resposta);
  }

  function verifica(boolean) {
    setBoolean(boolean)
  }

  const respostas = [0, 3, 2, 1, 5, 2, 1, 1, 1, 2, 3];

  
  return (
    <Container fixed className="container" maxWidth="sm">
      {etapas[etapaAtual]}
      <div className="grupo-botoes">
        {etapaAtual < 11 && (
          <Button
            onClick={() => {
              if (etapaAtual > 0 && etapaAtual < 11 && booleanColetado === !true) {
                setEtapaAtual(etapaAtual + 1);
                setBoolean(true)
                
              }
              if (etapaAtual > 0 && etapaAtual < 11 && booleanColetado === !true && dadosColetados === respostas[etapaAtual]) {
                setEtapaAtual(etapaAtual + 1);
                setBoolean(true)
                setContador(contadorRespostas + 1);
                
              
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
        {etapaAtual === 11 && (
          <div className="finalizacao">
            <h1>
              {" "}
              Parabéns, você acertou {contadorRespostas} / 10 perguntas XD !!
            </h1>
            <Button
              onClick={() => {
                setEtapaAtual(0);
                setContador(1);
              }}
              variant="outlined"
              color="secondary"
              className="botao-proximo"
            >
              Reiniciar
            </Button>
          </div>
        )}
      </div>

    </Container>
  );
}

export default Inicio;
