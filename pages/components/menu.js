import React, { useState } from 'react'
import menu from '../styles/Menu.module.scss'
import Home from './home.js'
import Contact from './contact.js'

const Menu = function () {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState(null);

  const setCurrent = (index) => {
    if (index != currentIdx) {
      setPrevIdx(currentIdx);
      setCurrentIdx(index);
    }
  };

  const [data, setData] = useState([
    <Home setCurrent={setCurrent} />,
    <div className={menu.abs}>About</div>,
    <div className={menu.abs}>Photos</div>,
    <div className={menu.abs}>Projects</div>,
    <div className={menu.abs}><Contact /></div>,
  ]);

  return (
    <div>
      <div>
        {currentIdx != 0 ? (
          <button className={menu.menu} onClick={() => setCurrent(0)}>
            Menu
          </button>
        ) : null}
      </div>
      <div className={menu.scaleIn} key={currentIdx}>
        {data[currentIdx]}
      </div>
      <div className={menu.scaleOut} key={prevIdx}>
        {data[prevIdx]}
      </div>
    </div>
  );
};

export default Menu;
