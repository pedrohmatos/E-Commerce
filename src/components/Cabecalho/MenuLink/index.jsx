import styles from "./MenuLink.module.css";
import { Link, useLocation } from "react-router-dom";

function MenuLink({ children, destino }) {
    const qualPagina = useLocation();

    return (
        <Link
            className={`
                ${styles.link}
                ${qualPagina.pathname === destino && styles.aberto}
            `}
            to={destino}
        >
            {children}
        </Link>
    )
}

export default MenuLink