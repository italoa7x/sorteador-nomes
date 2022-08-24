import React from "react";
import Card from "../../componentes/Card";
import { Formulario } from "../../componentes/Formulario";
import { ListaParticipantes } from "../../componentes/ListaParticipantes";
import { Rodape } from "../../componentes/Rodape";
import "./styles.css";
export const Configuracao = () => {
  return (
    <Card>
      <section>
        <h2 className="title">Vamos começar!</h2>
        <Formulario />
        <ListaParticipantes />
        <Rodape />
      </section>
    </Card>
  );
};
