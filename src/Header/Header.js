import React from "react";
import './Header.css';
import smallRight from '../assets/icons/small-right.png';
import smallLeft from '../assets/icons/small-left.png';
import searchIcon from '../assets/icons/search.png';

const Header = () => {
    return (
        <nav className="header__navigation" style={{ marginLeft: '330px', maxWidth: '875px' }}>
            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt="" />
                </button>
                <button className="arrow-right">
                    <img src={smallRight} alt="" />
                </button>

                <div className="header__search">
                    <img src={searchIcon} alt="" />
                    <input type="text" id="search-input" maxLength="800" placeholder="Qual é a próxima música?" />
                </div>
            </div>
            <div className="header__login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    );
};

export default Header;
