import Head from 'next/head'

import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results';
import requests from '../utils/requests'
export default function Home({ result }) {
 
  return (
    <div >
      <Head>
        <title>Hulu</title>
      </Head>
      <Header />
      <Nav />
      <Results results={ result}/>
      
    </div>
  )
}


export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request =  await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`
  ).then(res=>res.json())
  const data= request.results
  return {
    props: {
      result:data,
    }
  }
}
