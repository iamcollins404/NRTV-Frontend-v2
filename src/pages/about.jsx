import React from 'react'
import NavBar from '../components/landingComponents/NavBar'
import AboutHeader from '../components/landingComponents/AboutHeader'
import AboutContent from '../components/landingComponents/AboutContent'
import Footer from '../components/landingComponents/Footer'
import ReactGA from 'react-ga'
import { Helmet } from "react-helmet";

function About() {

  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })

  return (
    <section className='bg-black'> 
      <Helmet>
        <meta charSet="utf-8" />
        <title>NRTV - About Nrtv</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <NavBar />
      <AboutHeader />
      <AboutContent />
      <Footer />
    </section>
  )
}

export default About