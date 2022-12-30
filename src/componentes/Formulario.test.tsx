import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Formuilario from "./Formulario";
import { RecoilRoot } from "recoil";

describe('Descrevendo o comportamento do formulário', () => {
    test('Quando o input está vazio, novos participantes não podem ser adicionados', () => {
        render(
            <RecoilRoot>
                <Formuilario />
            </RecoilRoot>
        )
        // encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        // encontrar o botão
        const botao = screen.getByRole('button')
        // garantir que o input esteja no documento
        expect(input).toBeInTheDocument()
        // garantir que o botão esteja desailitado
        expect(botao).toBeDisabled()
    })

    test('Adicionar um participante caso exista um nome preenchido', () => {
        render(
            <RecoilRoot>
                <Formuilario />
            </RecoilRoot>
        )
        // encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        // encontrar o botão
        const botao = screen.getByRole('button')
        // inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'Raphael Pizzo'
            }
        })
        // clicar no botçai de submeter
        fireEvent.click(botao)
        // garantir que o input esteja com o foco ativo
        expect(input).toHaveFocus()
        // garantir que o input não tenha um valor
        expect(input).toHaveValue("")
    })

    test('Nomes duplicados não podem ser adicionas na lista', () => {
        render(
            <RecoilRoot>
                <Formuilario />
            </RecoilRoot>
        )
        // encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        // encontrar o botão
        const botao = screen.getByRole('button')
        // inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'Raphael Pizzo'
            }
        })
        // clicar no botçai de submeter
        fireEvent.click(botao)
        expect(input).toHaveFocus()
        // garantir que o input não tenha um valor
        expect(input).toHaveValue("")

        fireEvent.change(input, {
            target: {
                value: 'Raphael Pizzo'
            }
        })
        fireEvent.click(botao)

        const mensagemDeErro = screen.getByRole('alert')
        expect(mensagemDeErro.textContent).toBe('Nomes duplicados não são permitidos!')
    })

    test('A mensagem de erro deve sumir após os timers', () => {
        jest.useFakeTimers()
        render(
            <RecoilRoot>
                <Formuilario />
            </RecoilRoot>
        )
        // encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        // encontrar o botão
        const botao = screen.getByRole('button')
        // inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'Raphael Pizzo'
            }
        })
        // clicar no botçai de submeter
        fireEvent.click(botao)
        expect(input).toHaveFocus()
        // garantir que o input não tenha um valor
        expect(input).toHaveValue("")

        fireEvent.change(input, {
            target: {
                value: 'Raphael Pizzo'
            }
        })
        fireEvent.click(botao)

        let mensagemDeErro = screen.queryByRole('alert')
        expect(mensagemDeErro).toBeInTheDocument()
        // esperar N segundos
        act(() => {
            jest.runAllTimers()
        });

        mensagemDeErro = screen.queryByRole('alert')
        expect(mensagemDeErro).toBeNull()
    })
})

