import React from 'react'
import { useParams } from "react-router-dom"
import ReactPlayer from 'react-player/lazy'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import ReactGA from 'react-ga'

function Videoplayer() {

  React.useEffect(()=>{
    ReactGA.pageview(window.location.pathname + window.location.search);
  })

  const theParam = useParams()

  const videoId = theParam.videoId

  const videoUrl = "https://www.youtube.com/watch?v=0lJKucu6HJc"

  const [show, setShowDetails] = React.useState([])

  const [videoStillLoading, setvideoStillLoading] = React.useState(true)

  // Make a request and get all products
  React.useEffect(() => {
    axios.get(`https://hammerhead-app-4pz5b.ondigitalocean.app/watch/show/${videoId}`)
      .then(function (response) {

        // handle success
        setShowDetails(response.data);
        setvideoStillLoading(false)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  });

  if (videoStillLoading) {
    return (
      <div className='videoLoading'>
        <img src="https://media.tenor.com/zecVkmevzcIAAAAC/please-wait.gif" alt="" srcset="" />
      </div>
    )
  } else {
    return (
      <div>


        {show.map((content) =>
          <div>
            <Helmet>
              <meta charSet="utf-8" />
              <title>NRTV - Watch {content.contentTitle}</title>
            </Helmet>

            <ReactPlayer controls playing="true" width='100%' height="100vh" url={content.contentWatchUrl} />
          </div>
        )}
      </div>
    )
  }
}

export default Videoplayer