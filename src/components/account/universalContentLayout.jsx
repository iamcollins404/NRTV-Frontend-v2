import React from 'react'
import Videocard from '../videoscontent/videocard'
import LiveTvFetch from './liveTvFetch'
import BrowseTvComponent from './browseTvComponent'
import { useParams } from "react-router-dom"
import axios from 'axios'

import ProductDetailsModal from "../modals/productDetailsModal"
import { Modal } from "@nextui-org/react"
import VideoDetailsModal from '../modals/videoDetailsModal'
import { Helmet } from 'react-helmet'
import ReactGA from 'react-ga'

function UniversalContentLayout(props) {
  
  React.useEffect(()=>{
    ReactGA.pageview(window.location.pathname + window.location.search);
  })

  const page = props.page

  const [shows, setShows] = React.useState([])
  const [showCloseBtn, setShowCloseBtn] = React.useState(false)

  const [contentId, setContentId] = React.useState([])

  const timeOut = setTimeout(shwBtnTimeOut, 2000)

  function shwBtnTimeOut() {
    setShowCloseBtn(true)
  }

  // Make a request and get all shows 
  React.useEffect(() => {
    axios.get('https://hammerhead-app-4pz5b.ondigitalocean.app/watch/')
      .then(function (response) {
        // handle success
        setShows(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  });

  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  if (page === "Browse") {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>NRTV - Browse</title>
        </Helmet>

        <div className="text-center sm:flex sm:items-end sm:space-x-16 sm:text-left">
          <p className="text-2xl font-bold text-gray-900">
            {page}
          </p>
        </div>
        <BrowseTvComponent />
      </div>
    )

  } else if (page === "Live TV And Shows") {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>NRTV - Live TV And Shows</title>
        </Helmet>

        <LiveTvFetch />
      </div>
    )

  } else {
    return (
      <div className='scrollSideba'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>NRTV - Watch {page}</title>
        </Helmet>

        <div className="text-center sm:flex sm:items-end sm:space-x-16 sm:text-left">
          <p className="text-2xl font-bold text-gray-900">
            {page}
          </p>
        </div>

        <section className="bg-gray-50">
          <div className="max-w-7xl">
            <div className="grid grid-cols-1 gap-6 px-8 mt-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:px-0">
              {shows.filter(show => show.contentCategory === page).map((shows) =>
                <section>
                  <div className="group" onClick={() => { setContentId(shows._id) }}>
                    <div onClick={handler} className="contentCard relative overflow-hidden transition-all duration-300 bg-white border border-gray-100 rounded-lg group hover:shadow-xl">
                      <div className="overflow-hidden aspect-w-4 aspect-h-3">
                        <img className="imageForContentCard object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110" src={shows.contentCoverImageUrl} alt="" />
                      </div>
                      <div className="px-3 py-4 sm:px-4 sm:py-5">
                        <p className="text-xs font-bold text-gray-400 sm:text-sm">{page}</p>
                        <h3 className="mt-3 text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                          <a title="">
                            {shows.contentTitle}
                            <span className="absolute inset-0" aria-hidden="true"></span>
                          </a>
                        </h3>
                        <div className="mt-2">
                          <div className="flex items-center mt-4 space-x-2">
                            <p className="text-sm font-medium text-gray-900">
                              <a title="" className="">
                                {shows.contentDuration}
                              </a>
                            </p>
                            <span className="text-sm font-medium text-gray-900">
                              •
                            </span>
                            <p className="text-sm font-medium text-gray-900">
                              {shows.dateUploaded}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* content details fetch modal component */}
                  <Modal
                    aria-labelledby="modal-title"
                    open={visible}
                    onClose={closeHandler}
                    width="80vh"
                    height="60vh"
                  >
                    <VideoDetailsModal contentId={contentId} />

                    <div className="closeButton">
                      {showCloseBtn &&
                        <button
                          onClick={closeHandler}
                          type="button"
                          className="my-5 items-center justify-center w-full px-12 py-3 text-base font-bold leading-7 text-center text-white transition-all
                            duration-200 bg-gray-900 border border-transparent rounded-md inlin-flex sm:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 
                            focus:ring-gray-900 hover:bg-gray-700"
                        >
                          Close
                        </button>
                      }
                    </div>
                  </Modal>
                </section>
              )}
            </div>
          </div>
        </section>
      </div>
    )
  }

}

export default UniversalContentLayout