import Image from "next/image";
import { Inter } from "next/font/google";
import Porta1 from "../../components/Porta1";
import PortaModel from "../../model/porta";
import {useState} from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const [p1, setP1] = useState(new PortaModel(3))




  return (
      <div style={{display:"flex"}}>
        <Porta1 value={p1} onChange={novaPorta => setP1(novaPorta)} />

      </div>


  );
}
