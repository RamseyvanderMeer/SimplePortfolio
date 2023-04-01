import Head from 'next/head';
import home from '../styles/Home.module.scss';
import Background from './components/background.js';
import Menu from './components/menu.js';

export default function Home() {
  return (
    <div className={home.conainer}>
      <Head>
        <title>Ramsey van der Meer</title>
      </Head>
      <div className={home.back}>
        <Menu />
        <Background />
      </div>
    </div>
  );
}
