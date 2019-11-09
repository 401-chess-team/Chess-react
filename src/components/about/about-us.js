import React from 'react';
import BlackKing from '../../assets/chess-icons/bk.png';
import WhitePawn from '../../assets/chess-icons/wp.png';
import BlackKnight from '../../assets/chess-icons/bkn.png';
import WhiteQueen from '../../assets/chess-icons/wq.png';
import Nav from '../banner/banner.js';
import './about-us.css';
import '../../App.css';

export default function about() {
  return (
    <>
      <div>
        <span id="banner-text">ULTIMATE CHESS TEAM</span>
      </div>
        <ul className="about">
          <li>
            <h1>Pratiibh</h1>
            <img src={BlackKnight} width="300" />
            <p className='linkedin'>https://www.linkedin.com/in/pratiibh/</p>
            <p>I'm a a Software Developer born and raised in Washington! Hobbies that I keep up with are computer building, aquarium/fishkeeping, and basketball!
            </p>
          </li>
          <li>
            <h1>Lee</h1>
            <img src={WhiteQueen} width="300" />
            <p className='linkedin'>https://www.linkedin.com/in/leeroy-king/</p>
            <p>
              They used to call me the codeDæmon, now they call me the white
              queen.
            </p>
            <p>
              Currently supporting AWS EC2 in the government isolated regions,
              motivated and passionate about improving engineers quality of
              life.
            </p>
            <p>
              Dreams about building tools/environments that lets engineers scale
              their efforts beyond their own teams
            </p>
          </li>
          <li>
            <h1>AJ</h1>
            <img src={BlackKing} width="300" />
            <p className='linkedin'>https://www.linkedin.com/in/alvian-joseph/</p>
            <p>After serving 6 years in the military as a Persian Farsi linguist and Intelligence analyst, I decided to apply those language learning and analytic skills to a career in coding. Incidentally, I enjoyed learning JavaScript so much I dropped everything and moved across the country to pursue my new goal.</p>
          </li>
          <li>
            <h1>Brandyn</h1>
            <img src={WhitePawn} width="300" />
            <p className='linkedin'>https://www.linkedin.com/in/brandynvay/</p>
            <p>Artist</p>
            <p>Culturally Adaptable</p>
            <p>Great at breakinga and then fixing things.</p>
          </li>
        </ul>
    </>
  );
}
