import './header.sass'
import { FaSearch } from "react-icons/fa";
import { LiaSeedlingSolid } from "react-icons/lia";

export default function Header() {
    return (
        <div className="conteudo-header">
            <button className="btn user">
                <h2>C</h2>
            </button>
            <div className="pesquisa">
                <div className="input-container">
                    <FaSearch className="search-icon" />
                    <input type="text" className="input-pesquisa" placeholder='Buscar sessão' />

                </div>
            </div>
            <button className="btn card-3">
                <LiaSeedlingSolid fontSize={30} />
                <div className="quantidade">
                    3
                </div>
            </button>

        </div>
    )
}