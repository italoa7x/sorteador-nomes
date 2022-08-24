import shuffle from "just-shuffle";

export const realizarSorteio = (participantes: string[]) => {
    const totalParticipantes = participantes.length;
    const resultado = new Map<string, string>();

    const embaralhado = shuffle(participantes);
    for (let i = 0; i < totalParticipantes; i++) {
        const indiceAmigo = i === totalParticipantes - 1 ? 0 : i + 1;

        resultado.set(embaralhado[i], embaralhado[indiceAmigo]);
    }

    return resultado;
};
