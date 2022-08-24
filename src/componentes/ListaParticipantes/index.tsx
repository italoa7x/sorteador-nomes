import React from "react";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";

export const ListaParticipantes = () => {
  const participantes: string[] = useListaDeParticipantes();

  return (
    <ul>
      {participantes.map((value) => (
        <li key={value}>{value}</li>
      ))}
    </ul>
  );
};
