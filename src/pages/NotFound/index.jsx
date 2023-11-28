import styles from "./NotFound.module.css";

import Banner from "../../components/Banner"
import Botao from "../../components/Botao";
import { useNavigate } from "react-router-dom";

function NotFound() {

    const navigate = useNavigate();

    const voltar = () => {
        navigate("/")
    };

    return (
        <div className={styles.fundo}>
            <Banner txtPrincipal={"404 NOT FOUND"} txtSecundario={"Página não encontrada"} />
            <Botao efeito={voltar}>
                VOLTAR
            </Botao>
        </div>
    )
}

export default NotFound