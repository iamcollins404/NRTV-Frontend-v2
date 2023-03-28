import React from 'react'
import NavBar from '../components/landingComponents/NavBar'
import Footer from '../components/landingComponents/Footer'
import ShopHeader from '../components/landingComponents/ShopHeader'
import ShopProducts from '../components/landingComponents/ShopProducts'
import ReactGA from 'react-ga'
import Helmet from 'react-helmet'

function Shop() {

  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })

  return (
    <section>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NRTV - Shop Now</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <NavBar />
      <ShopHeader />
      <ShopProducts />
      <Footer />
    </section>
  )
}

export default Shop