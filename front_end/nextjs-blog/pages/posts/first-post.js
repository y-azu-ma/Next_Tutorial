import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script'; // Facebook ソーシャルプラグインを追加してみる
import styles from '../../styles/Home.module.css';
import Layout from '/components/layout';
{/*
  解説サイトだと、from '../../components/layout' だったけど、現VerのNextはルートパスに対応している模様
  なので、from '/components/layout' でいけてるようだ
*/}

export default function FirstPost () {
  return (
    <>
      <Layout>
        <Head>
          <title>postのindexページ</title>
        </Head>
        <div>
          <p className={styles.title}>this is first post</p>

          {/* Third Party JavaScriptを使う場合、以下の様にstrategyで'lazyOnload'を指定する
              参考：https://dev.classmethod.jp/articles/introduction-to-nextjs/#toc-5 */}
          <script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() => 
              console.log(`script loaded correctly, window.FB has been populated`)
            }
          />

          <h4 className={styles.title}>
            <Link href="/">
              <a>Back to Home</a>
            </Link>
          </h4>
        </div>
      </Layout>
    </>
  );
};
