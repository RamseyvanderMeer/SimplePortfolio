import Head from 'next/head';
import home from '../styles/Home.module.scss';
import Background from './components/Background.js';
import Menu from './components/Menu.js';

export default function Home() {
  return (
    <div className={home.conainer}>
      <Head>
        <title>Ramsey van der Meer</title>
        <meta
          name="Ramsey van der Meer's portfolio website"
          content="Check out my portfolio website for my latest projects and photos!"
        />
      </Head>
      <div className={home.back}>
        <Menu />
        <Background />
      </div>
    </div>
  )
}
