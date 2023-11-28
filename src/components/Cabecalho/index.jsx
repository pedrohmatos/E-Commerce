import styles from "./Cabecalho.module.css"

import { AiFillFire, AiOutlineShoppingCart } from "react-icons/ai";

import MenuLink from "./MenuLink";

import { Link } from "react-router-dom";

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <figure className={styles.logoMarca}>
                <div className={styles.logo}>
                    <AiFillFire />
                </div>
                <figcaption className={styles.marca}>
                    E-COMMERCE
                </figcaption>
            </figure>
            <nav className={styles.menu}>
                <MenuLink destino={"/"}>
                    Inicial
                </MenuLink>
                <MenuLink destino={"/celulares/todos"}>
                    Todos
                </MenuLink>
                <Link to={"/carrinho"} className={styles.carrinho}>
                    <AiOutlineShoppingCart />
                </Link>
            </nav>
        </header>
    )
}

export default Cabecalho