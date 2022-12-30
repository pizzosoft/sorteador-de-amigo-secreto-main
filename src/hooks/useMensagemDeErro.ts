import { useRecoilValue } from "recoil"
import { erroState } from "../state/atom"

export const useMensagemDeErro = () => {
    const mensagem = useRecoilValue(erroState)
    return mensagem
}