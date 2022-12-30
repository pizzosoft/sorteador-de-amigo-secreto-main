import { atom } from "recoil";

export const listaParticipantesState = atom<String[]>({
    key: 'listaParticipantesState',
    default: []
})

export const erroState = atom<String>({
    key: 'erroState',
    default: ''
})