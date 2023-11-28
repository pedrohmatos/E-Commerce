import styles from "./Botao.module.css";

function Botao({ children, efeito }) {

    const handleClick = () => {
        efeito();
    };

    return (
        <button
            onClick={handleClick}
            type="button"
            className={styles.botao}
        >
            {children}
        </button>
    )
}

export default Botao