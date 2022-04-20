import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
};

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{ siteTitle }</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>She is the best!</p>
        <p>
          (This is a sample website - you'll be building a site like this on {' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <Link href="/posts/first-post">
          <a>first-postへ</a>
        </Link>
      </section>

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title}) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>

      <div>
        <p>画像を読み込んでみる</p>
        {/* public フォルダにある画像は、public以下のパスを指定する */}
        {/* ただし、webpackによる画像のキャッシングがこれでは効かないのでコメントアウト */}
        {/*
        <img src='/vercel.svg' alt='vercel logo' className='logo' />
        <img src='/img/funny_music_note.svg' alt='music note' className='logo' />
        */}
        {/* ということで、webpackによるキャッシュを効かせたいのなら、Imageタグを使う */}
        <Image
          src='/vercel.svg'
          width={283}
          height={64}
          alt='vercel logo'
          className='logo'
        />
        <Image
          src='/images/funny_music_note.svg'
          width={400}
          height={120}
          alt='music note'
          className='logo'
        />
      </div>

    </Layout>
  );
}
