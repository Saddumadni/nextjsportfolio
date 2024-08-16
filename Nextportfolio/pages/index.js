import Head from 'next/head';

const Home = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>My Portfolio</title>
                <meta name="description" content="Welcome to my personal portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <h2>Welcome to My Portfolio</h2>
                <p>This is a brief introduction about myself.</p>
            </main>
            <Footer />
        </div>
    );
};