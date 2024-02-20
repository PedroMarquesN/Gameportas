import { Inter } from "next/font/google";
import Cartao from "../../components/Cartao";
import styles from "../styles/Form.module.css"
import Link from "next/link";
import EntradaNumerica from "../../components/EntradaNumerica";
import {useState} from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Form() {
    const [qtdePortas , setQtdePortas] = useState(3)
    const [presente , setPresente] = useState(1)




  return (
      <div className={styles.formulario}>
            <div>
                <Cartao bgcolor="#c0392c">
                    <h1>Montagem Game</h1>
                </Cartao>
                <Cartao>
                    <EntradaNumerica text="Quantidade Portas?" value={qtdePortas} onChange={novaQtde => setQtdePortas(novaQtde)}/>
                </Cartao>
            </div>
            <div>
                <Cartao>
                    <EntradaNumerica text="Porta com Presente?" value={presente} onChange={presente => setPresente(presente)}/>

                </Cartao>
                <Cartao bgcolor="#28a085">
                    <Link href={`/jogo/${qtdePortas}/${presente}`}>
                        <h2 className={styles.link}
                        >Iniciar</h2>
                    </Link>
                </Cartao>
            </div>
      </div>
  )
}
