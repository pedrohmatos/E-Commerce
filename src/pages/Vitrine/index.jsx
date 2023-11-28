import styles from "./Vitrine.module.css";

import { useNavigate, useParams } from "react-router-dom"

import dados from "../../data/celulares.json";
import DadosVitrine from "../../components/DadosVitrine";
import sound from "/assets/audio/coin-sound.mp3";

import { ImTruck } from "react-icons/im";
import { HiMiniShieldCheck } from "react-icons/hi2";
import { TbArrowBackUp } from "react-icons/tb";

import Botao from "../../components/Botao";

import { CarrinhoContext } from "../../contexts/CarrinhoContext";
import { useContext } from "react";

function Vitrine() {
    const params = useParams();
    const navigate = useNavigate();
    const { colocar } = useContext(CarrinhoContext);

    const celular = dados.find(obj => obj.modelo === params.modelo);

    const voltar = () => {
        navigate(-1);
    };

    const audio = new Audio(sound);

    const adicionar = () => {
        audio.play();
        colocar({...celular, quantidade: 1});
    };

    return (
        <main className={styles.vitrine}>
            <div>
                <div>
                    <Botao efeito={voltar}>
                        <TbArrowBackUp className={styles.setaVoltar} />
                    </Botao>
                    <h1 className={styles.modelo}>
                        {celular.modelo}
                    </h1>
                </div>
                <div className={styles.central}>
                    <div className={styles.imagemBox}>
                        <img
                            className={styles.imagem}
                            src={celular.imagem}
                            alt={`imagem de um celular: ${celular.modelo}`}
                        />
                    </div>
                    <div className={styles.dados}>
                        <DadosVitrine>
                            Câmera: {celular.camera_principal}
                        </DadosVitrine>
                        <DadosVitrine>
                            Armazenamento: {celular.armazenamento_interno}
                        </DadosVitrine>
                        <DadosVitrine>
                            Ram: {celular.memoria_ram}
                        </DadosVitrine>
                        <DadosVitrine>
                            Tela: {celular.tela}
                        </DadosVitrine>
                        <DadosVitrine>
                            Lançamento: {celular.ano_lancamento}
                        </DadosVitrine>
                    </div>
                    <div className={styles.pagamento}>
                        <div >
                            <h2>R$ {celular.preco}</h2>
                            <small>12 x R$ {(celular.preco / 12).toFixed(2).replace(".", ",")} sem juros</small>
                            <p>
                                <strong className={styles.desconto}>10% OFF</strong> no PIX ou à vista
                            </p>
                        </div>
                        <article className={styles.entrega}>
                            <div>
                                <p>
                                    <ImTruck /> Receba em seu endereço
                                </p>
                            </div>
                            <p>
                                <HiMiniShieldCheck /> 90 dias de garantia
                            </p>
                            <div>
                                <Botao efeito={adicionar}>
                                    Adicionar ao Carrinho
                                </Botao>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Vitrine