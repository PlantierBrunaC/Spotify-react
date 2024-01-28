import React from "react";
import './Main.css';


import Array_cards from '../Main/Array_cards'; 

// ... (importe outras imagens conforme necessário)

const Main = () => {
    return (
        <main>
            <div className="main-container">
               

                <div className="main__content">
                    <div className="main__greatting" id="result-playlists">
                        <h1 className="greatting__text" id="greeting">Boa tarde</h1>
                        <h2 className="greatting__subtext">Navegar por todas as seções</h2>
                    </div>

                    <div className="cards__container">
                        <div className="cards__list">


                            <section className="cards__conteiner__list">

                            <Array_cards />


                            </section>


                            
                        </div>
                    </div>

                    <div id="result-artist" className="hidden">
                        <div className="grid-container">
                            <div className="artist-card" id="">
                                <div className="card-img">
                                    <img id="artist-img" className="artist-img" alt="" />
                                    <div className="play">
                                        <span className="fa fa-solid fa-play"></span>
                                    </div>
                                </div>
                                <div className="card-text">
                                    <a title="Foo Fighters" className="vst" href=""></a>
                                    <span className="artist-name" id="artist-name"></span>
                                    <span className="artist-categorie">Artista</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;
