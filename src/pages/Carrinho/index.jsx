import styles from "./Carrinho.module.css";
import CardCarrinho from "./CardCarrinho"
import Botao from "../../components/Botao";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CarrinhoContext } from "../../contexts/CarrinhoContext"
import { TbArrowBackUp } from "react-icons/tb";
import { useContext } from "react"
import { useNavigate } from "react-router-dom";

function Carrinho() {

    const { cartList, tirar } = useContext(CarrinhoContext);

    const navigate = useNavigate();

    const voltar = () => {
        navigate(-1);
    };

    const total = cartList.reduce((ac, obj) => {
        ac += obj.preco;
        if (cartList.length < 1) {
            return cartList.legth;
        } else {
            return ac
        }
    }, 0);

    return (
        <main className={styles.carrinho}>
            <Botao efeito={voltar}>
                <TbArrowBackUp />
            </Botao>
            <h1 className={styles.corpoDaPagina}>
                CARRINHO <AiOutlineShoppingCart className={styles.icone} />
            </h1>
            {
                cartList.length > 0 &&
                <h2 className={styles.total}>
                    Total R$: {total}
                </h2>
            }
            {
                cartList.length === 0 ? <p className={styles.vazio}>Vazio...</p> :
                    cartList.map((obj) => {
                        return <CardCarrinho excluir={tirar} key={obj.modelo} {...obj} />
                    })
            }
        </main>
    )
}

export default Carrinho