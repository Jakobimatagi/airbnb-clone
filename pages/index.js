import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'

export default function Home(props) {
  return (
    <div className="">
      <Head>
        <title>Kobi Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      {/* Main */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* Pull data from a server - API endpoints */}
        </section>
      </main>
    </div>
  )
}


export async function getStaticProps() {
  const exportData = await fetch('https://links.papareact.com/pyp').then(
    res => res.json()
    );
  return {
    props: {
      exportData
    }
  }
}