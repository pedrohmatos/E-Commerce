import styles from "./Padrao.module.css";

import { Outlet } from "react-router-dom"

import Cabecalho from "../../components/Cabecalho"
import Footer from "../../components/Footer"

import { CarrinhoProvider } from "../../contexts/CarrinhoContext";

function Padrao() {

    return (
        <main className={styles.padrao}>
            <CarrinhoProvider>
                <Cabecalho />
                <Outlet />
            </CarrinhoProvider>
            <Footer />
        </main>
    )
}

export default Padrao