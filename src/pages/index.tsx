import Image from "next/image";
import { Inter } from "next/font/google";
import Porta1 from "../../components/Porta1";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <div style={{display:"flex"}}>
        <Porta1 selecionada />
        <Porta1 />
      </div>


  );
}
