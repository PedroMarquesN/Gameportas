import styles from "@/styles/Porta1.module.css"
import PortaModel from "../model/porta";
import Presente from "./Presente";

interface PortaProps {
    value:PortaModel
    onChange: (novaPorta: PortaModel) => void
}
export default function Porta1(props: PortaProps) {
    const porta = props.value
    const selecionada = porta.metodoSelecionada && !porta.metodoAberta ? styles.selecionada : ''

    const alternarSelecao = e => props.onChange(porta.alternarSelecao())
    const abrir = e => {
        e.stopPropagation()
        props.onChange(porta.abrir())
    }


    function renderizarPorta() {
        return (

                <div className={styles.porta}>
                    <div className={styles.numero}>{porta.metodoNumero}</div>
                    <div className={styles.macaneta} onClick={abrir}></div>
                </div>

        )
    }

    return (
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={`${styles.estrutura} ${selecionada}`}>
                {porta.metodoFechado ? renderizarPorta() : porta.metodoTemPresente ? <Presente/> : false}
            </div>
            <div className={styles.chao}></div>
        </div>
    )
}