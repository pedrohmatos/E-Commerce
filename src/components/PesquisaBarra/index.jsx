import styles from "./PesquisaBarra.module.css";

import { IoSearchSharp } from "react-icons/io5";

function PesquisaBarra({ sobre, pesquisando, valorPesquisa }) {

    const handleChange = (e) => {
        pesquisando(e.target.value);
    };

    return (
        <form className={styles.inputBox} autoComplete="off">
            <label
                className={styles.label}
                htmlFor="pesquisa"
            >
                <IoSearchSharp />
            </label>
            <input
                value={valorPesquisa}
                onChange={handleChange}
                className={styles.input}
                type="text"
                id="pesquisa"
                placeholder={sobre}
                maxLength={35}
            />
        </form>
    )
}

export default PesquisaBarra