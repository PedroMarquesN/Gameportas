import Image from "next/image";
import { Inter } from "next/font/google";
import Porta1 from "../../components/Porta1";
import PortaModel from "../../model/porta";
import {useState} from "react";
import {atualizarPortas, criarPortas} from "../../functions/portas";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {




  return (
      <div>
        <h1>Início do Jogo</h1>
      </div>
  )
}
