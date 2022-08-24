import { erroState } from "./../atom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { listaDeParticipantesState } from "../atom";

export const useAdicionarParticipante = () => {
    const setLista = useSetRecoilState(listaDeParticipantesState);
    const lista = useRecoilValue(listaDeParticipantesState);
    const setError = useSetRecoilState(erroState);

    return (nome: string) => {
        if (lista.includes(nome)) {
            setError("Nomes duplicados não são permitidos!");
            setTimeout(() => {
                setError("")
            }, 5000);
            return;
        }
        return setLista((listaAtual) => [...listaAtual, nome]);
    };
};
