import React from 'react'
import ForgotPasswordComponent from '../../components/authComponents/forgotpassword'
import Navbar from '../../components/landingComponents/NavBar'
import Footer from '../../components/landingComponents/Footer'
import ReactGA from 'react-ga'
import Helmet from 'react-helmet'

function ForgotPassword() {

  React.useEffect(()=>{
    ReactGA.pageview(window.location.pathname + window.location.search);
  })

  return (
    <section>
          <Helmet>
        <meta charSet="utf-8" />
        <title>NRTV - Forgot Password</title>
      </Helmet>

      <Navbar/>
      <ForgotPasswordComponent/>
      <Footer/>
    </section>
  )
}

export default ForgotPassword