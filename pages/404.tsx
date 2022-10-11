import Head from 'next/head';

import Layout from 'components/layout';

const NotFound = () => {
  return (
    <>
      <Head>
        <title> 404 Not found </title>
      </Head>
      <Layout>
        <h1>No existo</h1>
      </Layout>
    </>
  );
};

export default NotFound;
