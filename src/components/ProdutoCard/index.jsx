import { Link, useLocation } from "react-router-dom";
import styles from "./ProdutoCard.module.css";


function ProdutoCard({ celular }) {

    const location = useLocation();

    return (
        <Link to={`${location.pathname}/${celular.modelo}`} className={styles.card}>
            <div className={styles.cima}>
                <img
                    className={styles.imagem}
                    src={celular.imagem}
                    alt={`imagem de um celular ${celular.modelo}`}
                />
                <h3 className={styles.modelo}>
                    {celular.modelo}
                </h3>
            </div>
            <div className={styles.baixo}>
                <small>A partir de</small>
                <strong className={styles.preco}>
                    R$ {celular.preco}
                </strong>
                <p className={styles.parcelas}>
                    12x de R$ {(celular.preco / 12).toFixed(2)} sem juros ou no pix 10% off R$ {(celular.preco * 0.9).toFixed(2)}
                </p>
            </div>
        </Link>
    )
}

export default ProdutoCard