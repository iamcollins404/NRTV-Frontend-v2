import React from 'react'
import { Button } from "@nextui-org/react"
import axios from 'axios'
import { Link } from 'react-router-dom'

function VideoDetailsModal(props) {
    const clickedShowId = props.contentId

    const [show, setShowDetails] = React.useState([])

    // Make a request and get all products
    React.useEffect(() => {
        axios.get(`https://hammerhead-app-4pz5b.ondigitalocean.app/watch/show/${clickedShowId}`)
            .then(function (response) {

                // handle success
                setShowDetails(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    });

    return (
        <div>
            {show.map((content) =>

                <section className="modalContentArea">
                    <div className="imageDiv">
                        <img className="contentModalImage object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110 group-hover:-rotate-3"
                            src={content.contentCoverImageUrl} alt="" />
                    </div>

                    {/* inner content div */}
                    <div className="innerDivContents mx-8">
                        {/* buttons */}

                        <div className="px-8 mb-3 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-3">
                            <Link to={`/account/watch/${content._id}`}>
                                <a title="" className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 
                                border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button"
                                >
                                    <svg className="w-5 h-5 mr-2" viewBox="0 0 18 18" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 
                                    12.5403 10.2398L8.18003 13.4261Z" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    Play Now
                                </a>
                            </Link>


                            <a title="" className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 
                            sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white 
                            hover:border-gray-900 focus:border-gray-900" role="button"
                            >
                                <svg className="w-5 h-5 mr-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                Watch Later
                            </a>
                        </div>

                        <hr />

                        {/* content title */}
                        <div className='mt-2'>
                            {content.contentTitle}
                        </div>

                        {/* content category */}
                        <div className="category">
                            {content.contentDuration} - {content.contentCategory}
                        </div>

                        {/* content description */}
                        <div className="my-5">
                            <p className='contentDescriptionText'>
                                {content.contentDescription}
                            </p>
                        </div>

                        <hr />
                    </div>
                </section>
            )}

        </div>
    )
}

export default VideoDetailsModal