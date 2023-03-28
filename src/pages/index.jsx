import React from 'react'
import NavBar from '../components/landingComponents/NavBar'
import CallToAction from '../components/landingComponents/CallToAction'
import DownloadMobileApp from '../components/landingComponents/DownloadMobileApp'
import Footer from '../components/landingComponents/Footer'
import TrendingNews from '../components/landingComponents/TrendingNews'
import WatchTVCategories from '../components/landingComponents/WatchTVCategories'
import ReactGA from 'react-ga';
import {Helmet} from "react-helmet";
import TopRectangleAd from '../components/landingComponents/topRectangleAd'

function Index() {

  React.useEffect(()=>{
    ReactGA.pageview(window.location.pathname + window.location.search);
  })

  return (
    <section>
       <Helmet>
                <meta charSet="utf-8" />
                <title>NRTV - Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

      <NavBar />

      <CallToAction />

      {/* watch tv categories */}
      <WatchTVCategories />

      <TopRectangleAd />

      {/* trending news higlights */}
      <TrendingNews />

      <DownloadMobileApp />
      <Footer />
    </section>
  )
}

export default Index