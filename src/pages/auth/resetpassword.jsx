import React from 'react'
import ResetPasswordComponent from '../../components/authComponents/resetpassword'
import Navbar from '../../components/landingComponents/NavBar'
import Footer from '../../components/landingComponents/Footer'
import ReactGA from 'react-ga'
import Helmet from 'react-helmet'

function Resetpassword() {

  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })

  return (
    <section>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NRTV - Reset Password</title>
      </Helmet>

      <Navbar />
      <ResetPasswordComponent />
      <Footer />
    </section>
  )
}

export default Resetpassword