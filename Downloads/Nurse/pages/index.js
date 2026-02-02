import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nurse At Home</title>
        <meta name="description" content="Nurse At Home Services" />
        <link rel="icon" href="/img/nurse-care.avif" />
      </Head>
      {/* Main content from index.html will be migrated here */}
      <div id="main-content">
        {/* ...existing content from public/index.html... */}
      </div>
    </>
  );
}
