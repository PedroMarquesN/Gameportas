import PortaModel from "../model/porta";

export function criarPortas(qtde:number, portaComPresente:number): PortaModel[] {
    return Array.from({length: qtde}, (_,i) => {
        const numero = i + 1
        const temPresente = numero === portaComPresente
        return new PortaModel(numero , temPresente)
    })
}


export  function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[] {
    return portas.map(portaAtual => {
        const igualAModificada = portaAtual.metodoNumero === portaModificada.metodoNumero
        if (igualAModificada){
            return portaModificada
        }else {
            return portaModificada.metodoAberta ? portaAtual : portaAtual.desmarcar()
        }
    })
}