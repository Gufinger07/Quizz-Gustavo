import React, { useState, useEffect } from "react";
import { Container, Button, TextField } from "@material-ui/core";
import "./home.css";
import Axios from "axios";
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

import {
  SentimentSatisfiedAlt,
  SentimentDissatisfied,
} from "@material-ui/icons";

function Inicio() {
  const [etapaAtual, setEtapaAtual] = useState(0);

  const [dadosColetados, setDados] = useState(0);

  const [booleanColetado, setBoolean] = useState(true);

  const [contadorRespostas, setContador] = useState(0);

  const [nome, setNome] = useState("");

  const [lista, setLista] = useState([]);
  const etapas = [
    <Inicial />,
    <Etapa1 aoEnviar={coletar} verificar={verifica} />,
    <Etapa2 aoEnviar={coletar} verificar={verifica} />,
    <Etapa3 aoEnviar={coletar} verificar={verifica} />,
    <Etapa4 aoEnviar={coletar} verificar={verifica} />,
    <Etapa5 aoEnviar={coletar} verificar={verifica} />,
    <Etapa6 aoEnviar={coletar} verificar={verifica} />,
    <Etapa7 aoEnviar={coletar} verificar={verifica} />,
    <Etapa8 aoEnviar={coletar} verificar={verifica} />,
    <Etapa9 aoEnviar={coletar} verificar={verifica} />,
    <Etapa10 aoEnviar={coletar} verificar={verifica} />,
  ];

  useEffect(() => {
    Axios.get("http://localhost:3009/api/get").then((response) => {
      setLista(response.data);
    });
  }, []);

  function coletar(resposta) {
    setDados(resposta);
  }

  function verifica(boolean) {
    setBoolean(boolean);
  }

  function envia() {
    Axios.post("http://localhost:3009/api/insert", {
      nome: nome,
      acertos: contadorRespostas,
    });
    setLista([...lista, { nome: nome, acertos: contadorRespostas }]);
  }
  const respostas = [0, 3, 2, 1, 5, 2, 1, 1, 1, 2, 3];

  return (
    <div className="conteudo">
      <h1 className="titulo">Quizz de Gustavo Finger ◕‿◕ </h1>
      <TextField
        className="form"
        id="filled-basic"
        label="NOME"
        variant="filled"
        onChange={(e) => {
          setNome(e.target.value);
        }}
      />
      <Container fixed className="container" maxWidth="false">
        {etapas[etapaAtual]}
        <div className="grupo-botoes">
          {etapaAtual < 11 && (
            <Button
              onClick={() => {
                if (
                  etapaAtual > 0 &&
                  etapaAtual < 11 &&
                  booleanColetado === !true
                ) {
                  setEtapaAtual(etapaAtual + 1);
                  setBoolean(true);
                }
                if (
                  etapaAtual > 0 &&
                  etapaAtual < 11 &&
                  booleanColetado === !true &&
                  dadosColetados === respostas[etapaAtual]
                ) {
                  setEtapaAtual(etapaAtual + 1);
                  setBoolean(true);
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
              {contadorRespostas >= 6 && (
                <>
                  <h1 className="finalizacao-titulo">Parabéns !!</h1>
                  <SentimentSatisfiedAlt fontSize="large" color="secondary" />
                </>
              )}
              {contadorRespostas <= 5 && (
                <>
                  <h1 className="finalizacao-titulo">Estou Decepcionado </h1>
                  <SentimentDissatisfied fontSize="large" color="secondary" />
                </>
              )}

              <h1 className="finalizacao-titulo">
                {" "}
                Você acertou {contadorRespostas} / 10 perguntas
              </h1>
              <Button
                onClick={() => {
                  setEtapaAtual(0);
                  setContador(0);
                  envia();
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
      <h2 className="titulo">Score:</h2>
      <table className="tabela">
        <tr>
          <td className="linha"><span>Nome</span></td>
          <td className="linha">Acertos</td>
        </tr>
        {lista.map((val) => {
          return (
            <tr>
              <td className="linha">{val.nome}</td>
              <td className="linha">{val.acertos}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Inicio;
