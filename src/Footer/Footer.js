import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer" >
                <div className="premium">
                    <span className="footer_content">TESTAR PREMIUM DE GRAÇA</span>
                    <span className="footer_content-sub">Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito</span>
                </div>
                <button className="footer_button">Inscreva-se Grátis</button>

            </div>
        </footer>
    );
};

export default Footer;
