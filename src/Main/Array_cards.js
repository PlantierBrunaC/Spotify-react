import React from 'react';
import playlist1 from '../assets/playlist/1.jpeg';
import playlist2 from '../assets/playlist/2.png';
import playlist3 from '../assets/playlist/3.jpeg';
import playlist4 from '../assets/playlist/4.jpeg';
import playlist5 from '../assets/playlist/5.jpeg';
import playlist6 from '../assets/playlist/6.jpeg';
import playlist7 from '../assets/playlist/7.jpeg';
import playlist8 from '../assets/playlist/8.jpeg';
import playlist9 from '../assets/playlist/9.jpeg';
import playlist10 from '../assets/playlist/10.jpeg';
import playlist11 from '../assets/playlist/11.jpeg';
import playlist12 from '../assets/playlist/12.jpeg';
import playlist13 from '../assets/playlist/13.jpeg';
import playlist14 from '../assets/playlist/14.jpeg';
import playlist15 from '../assets/playlist/15.jpeg';
import './Array_cards.css';
// import './YourComponent.css';

const Array_cards = () => {
  const playlists = [
    { id: 1, text: 'Boas Festas', imageSrc: playlist1 , className: 'card1' },
    { id: 2, text: 'Feitos para você', imageSrc: playlist2, className: 'card2' },
    { id: 3, text: 'Lançamentos', imageSrc: playlist3, className: 'card3' },
    { id: 4, text: 'Creators', imageSrc: playlist4, className: 'card4' },
    { id: 5, text: 'Para treinar', imageSrc: playlist5, className: 'card5' },
    { id: 6, text: 'Podcasts', imageSrc: playlist6, className: 'card6' },
    { id: 7, text: 'Sertanejo', imageSrc: playlist7, className: 'card7' },
    { id: 8, text: 'Samba e pagode', imageSrc: playlist8, className: 'card8' },
    { id: 9, text: 'Funk', imageSrc: playlist9, className: 'card9' },
    { id: 10, text: 'MPB', imageSrc: playlist10, className: 'card10' },
    { id: 11, text: 'Rock', imageSrc: playlist11, className: 'card11' },
    { id: 12, text: 'Hip Hop', imageSrc: playlist12, className: 'card12' },
    { id: 13, text: 'Indie', imageSrc: playlist13, className: 'card13' },
    { id: 14, text: 'Relax', imageSrc: playlist14, className: 'card14' },
    { id: 15, text: 'Música Latina', imageSrc: playlist15, className: 'card15' }

];

  return (
    <section className="cards__conteiner__list">
      {playlists.map((playlist) => (
        <a key={playlist.id} href="" className="cards">
          <div className={`cards ${playlist.className}`}>
            <span className="card__text">{playlist.text}</span>
            <img className="img_playlist" src={playlist.imageSrc} alt="" />
          </div>
        </a>
      ))}
    </section>
  );
};

export default Array_cards;
