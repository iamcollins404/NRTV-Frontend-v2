import React from 'react'
import NavBar from '../components/landingComponents/NavBar'
import NewsByCategory from '../components/landingComponents/NewsByCategory'
import Footer from '../components/landingComponents/Footer'
import NewsHeader from '../components/landingComponents/NewsHeader'
import ReactGA from 'react-ga';
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

function News() {

  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })

  const { pathname } = useLocation(); 

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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