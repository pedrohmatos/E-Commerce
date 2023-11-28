import styles from "./Celulares.module.css";

import ProdutoCard from "../../components/ProdutoCard";
import PesquisaBarra from "../../components/PesquisaBarra";

import celularesJson from "../../data/celulares.json";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Celulares() {
    celularesJson.sort((a, b) => {
        return parseInt(a.preco) - parseInt(b.preco);
    });

    const navigate = useNavigate();
    const { marca } = useParams();
    const [pesquisa, setPesquisa] = useState("");
    const [listaCel, setListaCel] = useState(celularesJson);
    const [filtragem, setFiltragem] = useState(celularesJson);

    const listaDeMarcas = celularesJson.map(obj => obj.marca);
    const verificacao = listaDeMarcas.some(el => el === marca)

    useEffect(() => {
        if (verificacao) {
            const filtroPorMarca = listaCel.filter(obj => obj.marca === marca);

            setListaCel(filtroPorMarca);
            setFiltragem(filtroPorMarca);

            window.scrollTo(
                { top: 0, behavior: "smooth" }
            );
        } else if (marca === "todos") {
            setListaCel(prev => prev);
        } else {
            return navigate("/*");
        }
    }, []);

    useEffect(() => {
        const filtroPorPesquisa = filtragem.filter(obj => obj.modelo.toLowerCase().includes(pesquisa.toLowerCase()));
        setListaCel(filtroPorPesquisa);

    }, [pesquisa, filtragem]);

    const handlePesquisa = (digitado) => {
        setPesquisa(digitado);
    };

    return (
        <main>
            <div className={styles.pesquisa}>
                <PesquisaBarra
                    sobre={"Modelo do celular..."}
                    pesquisando={handlePesquisa}
                    valorPesquisa={pesquisa}
                />
            </div>
            <section className={styles.secao01}>
                {
                    listaCel.length === 0 ?
                        <p className={styles.naoEncontrado}>
                            <strong>MODELO NÃO ENCONTRADO</strong>
                            <br /> tente novamente
                        </p>
                        : listaCel.map(obj => <ProdutoCard celular={obj} key={obj.modelo} />)
                }
            </section>

        </main>
    )
}

export default Celulares