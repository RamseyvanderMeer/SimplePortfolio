import React, { useState } from 'react'
import Image from 'next/image'
import menu from '../styles/Menu.module.scss'
import Home from './Home.js'
import Contact from './Contact.js'
import Gallery from './Gallery'
import Projects from './Projects'
import About from './About'
import hamburger from '../images/menu.svg'

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
    <div className={menu.abs}><About /></div>,
    <div className={menu.abs}><Gallery /></div>,
    <div className={menu.abs}><Projects /></div>,
    <Contact />,
  ]);

  return (
    <div>
      <div>
        {currentIdx != 0 ? (
          <button className={menu.menu} onClick={() => setCurrent(0)}>
            <Image src={hamburger} alt="hamburger" width={50} height={50} />
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
  )
};

export default Menu;
