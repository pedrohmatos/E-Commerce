import styles from "./Banner.module.css";

function Banner({ txtPrincipal, txtSecundario }) {
    return (
        <div>
            <h1 className={styles.principal}>
                {txtPrincipal}
            </h1>
            <h2 className={styles.secundario}>
                {txtSecundario}
            </h2>
        </div>
    )
}

export default Banner