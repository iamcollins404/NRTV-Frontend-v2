import React from 'react'
import NavBar from '../components/landingComponents/NavBar'
import ContactContent from '../components/landingComponents/ContactContent'
import Footer from '../components/landingComponents/Footer'
import ReactGA from 'react-ga'
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

function Contact() {

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
        <title>NRTV - Contact Us</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <NavBar />

      <ContactContent />

      <Footer />
    </section>
  )
}

export default Contact