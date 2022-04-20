import '../styles/globals.css'

/*
  _app.js は特殊な意味を持ち、全てのコンポーネント、ページで読み込まれる。
  そのため、コンポーネント単位ではなく、グローバルなCSSを適用したいのなら、この_app.jsで行う
*/
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
