import React from 'react'
import LoginComponent from '../../components/authComponents/login'
import Navbar from '../../components/landingComponents/NavBar'
import Footer from '../../components/landingComponents/Footer'
import ReactGA from 'react-ga'
import Helmet from 'react-helmet'

function Login() {

  React.useEffect(()=>{
    ReactGA.pageview(window.location.pathname + window.location.search);
  })

  return (
    <section>
        <Helmet>
        <meta charSet="utf-8" />
        <title>NRTV - Login</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <Navbar />
      <LoginComponent />
      <Footer />
    </section>
  )
}

export default Login