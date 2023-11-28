import { Link } from "react-router-dom";
import styles from "./TipoCelular.module.css";

function TipoCelular({ marca, icone, imagem }) {

    return (
        <Link
            className={styles.tipoCelular}
            to={`/celulares/${marca}`}
        >
            <div className={styles.textoBox}>
                <p>
                    {marca} {icone}
                </p>
            </div>
            <div
                style={{backgroundImage: `url(${imagem})`}}
                className={styles.imagem}
            ></div>
        </Link>
    )
}

export default TipoCelular