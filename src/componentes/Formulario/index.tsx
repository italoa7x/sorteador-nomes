import React, { useRef, useState } from "react";
import { useAdicionarParticipante } from "../../state/hooks/useAdicionarParticipante";
import { useMensagemDeErro } from "../../state/hooks/useMensagemDeErro";

import "./styles.css";

export const Formulario = () => {
  const [nome, setNome] = useState("");
  const adicionarNaLista = useAdicionarParticipante();
  const mensagemDeErro = useMensagemDeErro();

  const inputRef = useRef<HTMLInputElement>(null);

  const adicionarParticipante = (event: React.FormEvent<HTMLFormElement>) => {
    if (nome) {
      adicionarNaLista(nome);

      event.preventDefault();
      setNome("");
      inputRef.current?.focus();
    }
  };

  const disableButton = () => {
    return nome === "";
  };

  return (
    <form onSubmit={adicionarParticipante}>
      <div className="grupo-input-btn">
        <input
          ref={inputRef}
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Insira os nomes dos participantes"
        />
        <button disabled={!nome}>Adicionar</button>
      </div>
      {mensagemDeErro && (
        <p className="alerta erro" role="alert">
          {mensagemDeErro}
        </p>
      )}
    </form>
  );
};
