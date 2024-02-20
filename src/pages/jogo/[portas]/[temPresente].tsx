import styles from "../../../styles/Jogo.module.css"
import {useEffect, useState} from "react";
import {atualizarPortas, criarPortas} from "../../../../functions/portas";
import Porta1 from "../../../../components/Porta1";
import Link from "next/link";
import {useRouter} from "next/router";

export default function jogo(){
    const [portas, setPortas] = useState([])
    const router = useRouter()

    useEffect(() => {
        const portas = +router?.query.portas
        const temPresente = +router?.query.temPresente
        setPortas(criarPortas(portas, temPresente))
    }, [router?.query])
    function renderizarPortas(): JSX.Element[] {
        return portas.map(porta =>{
            return  <Porta1 key={porta.metodoNumero} value={porta} onChange={novaPorta => setPortas(atualizarPortas(portas,novaPorta))} />
        })
    }

    return (
        <div id={styles.jogo} >
            <div className={styles.portas}>
                {renderizarPortas()}

            </div>
            <div className={styles.botoes}>
            <Link href="/public">
                <button> Reiniciar Jogo</button>
            </Link>
            </div>

        </div>
    )
}