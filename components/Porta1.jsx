import styles from "@/styles/Porta1.module.css"


export default function Porta1(props) {
    return (
        <div className={styles.area}>
            <div className={styles.estrutura}>
                <div className={styles.porta}>
                    <div className={styles.numero}>3</div>
                </div>
            </div>

            <div className={styles.chao}></div>
        </div>
    )
}