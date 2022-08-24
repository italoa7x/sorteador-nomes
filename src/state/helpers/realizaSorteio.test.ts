import React from 'react'
import { realizarSorteio } from './realizarSorteio'
describe('dado um sorteio de amigo secreto', () => {

    test('cada participante não sorteie o proprio nome', () => {
        const participantes = [
            'Ana',
            'Catarina',
            'Juliana',
            'João',
            'Natalia'
        ]


        const sorteio = realizarSorteio(participantes)

        participantes.map((value: string) => {
            const amigoSecretos = sorteio.get(value)

            expect(amigoSecretos).not.toEqual(value)
        })
    })
})