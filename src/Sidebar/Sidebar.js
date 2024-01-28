import React from "react";
import './Sidebar.css';
import logoSpotify from '../assets/icons/logo-spotify.png'; 

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <nav className="sidebar_navigation">
          <div className="logo">
            <a href="">
              <img src={logoSpotify} alt="Logo do Spotify" />
            </a>
          </div>
          <div>
            <ul>
              <li>
                <a href="">
                  <span className="fa fa-home"></span>
                  <span>Início</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="fa fa-search"></span>
                  <span>Buscar</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="storage">
        <nav className="storage_content">
          <div className="storage_links">
            <button className="storage_button">
              <i className="fa fas fa-book"></i>
              <span style={{ marginLeft: "5px" }}>Sua Biblioteca</span>
            </button>
            <button className="storage_button">
              <span className="fas fa-plus"></span>
            </button>
          </div>

          <section className="section-playlist">
            <div className="section-playlist__content">
              <span className="text title">Criar Playlist</span>
              <span className="text subtitle">É fácil, vamos te ajudar.</span>
              <button className="playlist_create">Criar Playlist</button>
            </div>
          </section>

          <div className="cookies">
            <a href="">Cookies</a>
          </div>

          <div className="language_exib">
            <button className="languages_button">
              <span className="fa fa-globe"></span>
              <span> Português do Brasil</span>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;