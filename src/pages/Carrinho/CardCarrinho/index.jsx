import styles from "./CardCarrinho.module.css";

import { IoCloseCircleSharp } from "react-icons/io5";

function CardCarrinho({ excluir, modelo, preco, quantidade, imagem }) {

    const handleClick= () => {
        excluir(modelo);
    };

    return (
        <article className={styles.card}>
            <div className={styles.esquerda}>
                <div>{quantidade} x</div>
                <img
                    className={styles.imagem}
                    src={imagem}
                    alt={`pequena imagem do celular modelo: ${modelo}`}
                />
            </div>
            <div className={styles.direita}>
                <p className={styles.modelo}>{modelo}</p>
                <p>R$: <strong className={styles.preco}>{preco}</strong></p>
            </div>
            <button
                onClick={handleClick}
                className={styles.icone}
            >
                <IoCloseCircleSharp />
            </button>
        </article>
    )
}

export default CardCarrinho