import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Turnpike Electric</title>
        <link rel="icon" href="/favicon.ico"/>
        <link href="https://fonts.googleapis.com/css2?family=Raleway&family=Secular+One&display=swap" rel="stylesheet"></link>
      </Head>

      <img className="lightning" src="lightning.jpg"></img>
      
      <main className="main">
        <div className="header">
          <p className="title" id="title">Turnpike Electric</p>
          <div className="divider" id="divider"></div>
          <p className="bottomText">This page is currently under development</p>
        </div>
      </main>
    </div>
  )
}