import React from "react"
import { useListaDeParticipantes } from "../hooks/useListaDeParticipantes"
import { useNavigate } from "react-router-dom"
export default function Rodape() {

    const participantes = useListaDeParticipantes()

    const navegarPara = useNavigate()

    function iniciar() {
        navegarPara('/sorteio')
    }
    return (
        <footer>
            <button disabled={participantes.length < 3} onClick={iniciar}>Iniciar brincadeira</button>
        </footer>
    )
}