import Head from 'next/head';

import Content from '../components/content';

export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>Niko - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content />
    </div>
  )
}