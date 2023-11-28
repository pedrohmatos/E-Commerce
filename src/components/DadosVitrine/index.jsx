import styles from "./DadosVitrine.module.css";

function DadosVitrine({ children }) {
    return (
        <div className={styles.dadosVitrine}>
            <p>
                {children}
            </p>
        </div>
    )
}

export default DadosVitrine