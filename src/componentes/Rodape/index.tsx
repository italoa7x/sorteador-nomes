import React from "react";
import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";
import { useSorteador } from "../../state/hooks/useSorteador";

import "./styles.css";
export const Rodape = () => {
  const participantes = useListaDeParticipantes();
  const router = useNavigate();
  const sortear = useSorteador();

  const disableButton = () => {
    return participantes.length < 3;
  };

  const navegarPara = () => {
    sortear();
    router("/sorteio");
  };
  return (
    <footer className="rodape-configuracoes">
      <button
        className="botao"
        disabled={disableButton()}
        onClick={navegarPara}
      >
        Iniciar brincadeira
      </button>
      <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
    </footer>
  );
};
