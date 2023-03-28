import React from 'react'
import SignupComponent from '../../components/authComponents/signup'
import Navbar from '../../components/landingComponents/NavBar'
import Footer from '../../components/landingComponents/Footer'
import ReactGA from 'react-ga'
import Helmet from 'react-helmet'

function Signup() {

  React.useEffect(()=>{
    ReactGA.pageview(window.location.pathname + window.location.search);
  })

  return (
    <section>
        <Helmet>
        <meta charSet="utf-8" />
        <title>NRTV - Signup</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <Navbar/>
      <SignupComponent/>
      <Footer/>
    </section>
  )
}

export default Signup