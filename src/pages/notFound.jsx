import React from 'react'
import ReactGA from 'react-ga'
import { Helmet } from "react-helmet";

function NotFound() {

  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NRTV - Not Found</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <h5 className='text-white'>
        notFound
      </h5>
    </div>
  )
}

export default NotFound