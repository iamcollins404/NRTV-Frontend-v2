import React from 'react'
import NavBar from '../components/landingComponents/NavBar'
import NewsByCategory from '../components/landingComponents/NewsByCategory'
import Footer from '../components/landingComponents/Footer'
import NewsHeader from '../components/landingComponents/NewsHeader'
import ReactGA from 'react-ga';
import { Helmet } from "react-helmet";

function News() {

  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })

  return (
    <section>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NRTV - News</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <NavBar />
      <NewsHeader />
      <NewsByCategory />
      <Footer />
    </section>
  )
}

export default News