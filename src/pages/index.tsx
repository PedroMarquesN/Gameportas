import Image from "next/image";
import { Inter } from "next/font/google";
import Porta1 from "../../components/Porta1";
import PortaModel from "../../model/porta";
import {useState} from "react";
import {atualizarPortas, criarPortas} from "../../functions/portas";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

    const [portas, setPortas] = useState(criarPortas(5,2))

 function renderizarPortas() {
     return portas.map(porta =>{
            return  <Porta1 key={porta.metodoNumero} value={porta} onChange={novaPorta => setPortas(atualizarPortas(portas,novaPorta))} />
     })
 }



  return (
      <div style={{display:"flex"}}>
          {renderizarPortas()}

      </div>


  );
}
