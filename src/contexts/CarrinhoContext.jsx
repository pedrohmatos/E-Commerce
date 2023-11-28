import { createContext, useState } from "react";

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const colocar = (produtoPassado) => {
        const { modelo, preco, quantidade, imagem } = produtoPassado;

        setCartList((prev) => {

            const verificaRepetido = prev.some((produto) => {
                return produto.modelo === modelo;
            });

            if (verificaRepetido) {
                const contagem = prev.map((produto) => {
                    return produto.modelo === modelo ? { ...produto, modelo: modelo, preco: preco, imagem: imagem, quantidade: produto.quantidade + 1 } : produto;
                });

                return contagem;
            } else {
                return [...prev, { modelo: modelo, preco: preco, imagem: imagem, quantidade: quantidade }];
            }
        });
    };

    const tirar = (modelo) => {
        setCartList((prev) => {
            return prev.filter(obj => obj.modelo !== modelo);
        });
    };


    return (
        <CarrinhoContext.Provider value={{ cartList, colocar, tirar }}>
            {children}
        </CarrinhoContext.Provider>
    )
};
