import { useRef, useState } from "react"
import { useAdicionarParticipante } from "../hooks/useAdicionarParticipante"
import { useMensagemDeErro } from "../hooks/useMensagemDeErro"

export default function Formuilario() {

    const [nome, setNome] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const adicionar = useAdicionarParticipante()
    const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        adicionar(nome)
        setNome('')
        inputRef.current?.focus()
    }
    const mensagemDeErro = useMensagemDeErro()
    return (
        <form onSubmit={adicionarParticipante}>
            <input
                ref={inputRef}
                type="text"
                value={nome}
                onChange={evento => setNome(evento.target.value)}
                placeholder="Insira os nomes dos participantes" />
            <button disabled={!nome}>Adicionar</button>
            {mensagemDeErro && <p role='alert'>{mensagemDeErro}</p>}
        </form>
    )
}