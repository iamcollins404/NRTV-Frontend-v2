import React from 'react'
import NavBar from '../components/landingComponents/NavBar'
import AboutHeader from '../components/landingComponents/AboutHeader'
import AboutContent from '../components/landingComponents/AboutContent'
import Footer from '../components/landingComponents/Footer'
import ReactGA from 'react-ga'
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import RequestForm from "../components/landingComponents/RequestAssets"

function About() {

  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })

  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <section className='bg-black'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NRTV - Request Assets</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <NavBar />

      <RequestForm />

    </section>
  )
}

export default About