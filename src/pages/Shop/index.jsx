import styles from "./Shop.module.css";

import { SiXiaomi, SiSamsung, SiApple } from "react-icons/si";

import principal from "/assets/images/celulares-oferta.png";
import imagemApple from "/assets/images/apple.jpg";
import imagemSamsung from "/assets/images/samsung.jpg";
import imagemXiaomi from "/assets/images/xiaomi.jpg";

import TipoCelular from "../../components/TipoCelular";
import Banner from "../../components/Banner";

function Shop() {

    const mostrar = [
        {
            marca: "apple",
            icone: <SiApple />,
            imagem: imagemApple
        },
        {
            marca: "samsung",
            icone: <SiSamsung />,
            imagem: imagemSamsung
        },
        {
            marca: "xiaomi",
            icone: <SiXiaomi />,
            imagem: imagemXiaomi
        },
    ];

    return (
        <main>
            <header className={styles.cabecalho}>
                <Banner
                    txtPrincipal={"BLACK FRIDAY"}
                    txtSecundario={"MILHARES DE OFERTAS ESPERANDO POR VOCÊ!"}
                />
                <div className={styles.imagemBox}>
                    <img
                        className={styles.imagem}
                        src={principal}
                        alt="2 celulares brilhando"
                    />
                </div>
            </header>

            <section className={styles.celularesTipo}>
                <h3 className={styles.titulo}>
                    Não perca! Smartphones incríveis a preços imperdíveis. Compre já, estoques limitados
                </h3>
                {
                    mostrar.map((obj) => {
                        return (
                            <TipoCelular
                                marca={obj.marca}
                                icone={obj.icone}
                                imagem={obj.imagem}
                                key={obj.marca}
                            />
                        )
                    })
                }
            </section>
        </main>
    )
}

export default Shop