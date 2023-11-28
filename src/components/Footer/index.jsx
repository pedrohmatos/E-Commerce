import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.texto}>
                Desenvolvido por <a href="https://www.linkedin.com/in/pedro-matos-dev/" target="_blank" rel="noopener noreferrer" className={styles.link}>Pedro Matos</a>
            </p>
        </footer>
    )
}

export default Footer