import React from 'react'
import ProductDetailsModal from "../modals/productDetailsModal"
import { Modal } from "@nextui-org/react"
import VideoDetailsModal from '../modals/videoDetailsModal'
import { Link } from 'react-router-dom'

function Videocard() {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);

    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };
    return (
        <section>
            <div className="group" onClick={handler}>
                <div className="relative overflow-hidden transition-all duration-300 bg-white border border-gray-100 rounded-lg group hover:shadow-xl">
                    <div className="overflow-hidden aspect-w-4 aspect-h-3">
                        <img className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/sidebar-popular-posts/1/thumbnail-1.png" alt="" />
                    </div>
                    <div className="px-3 py-4 sm:px-4 sm:py-5">
                        <p className="text-xs font-bold text-gray-400 sm:text-sm">Content Category</p>
                        <h3 className="mt-3 text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                            <a href="#" title="">
                                The Content Title Here
                                <span className="absolute inset-0" aria-hidden="true"></span>
                            </a>
                        </h3>
                        <div className="mt-2">
                            <div className="flex items-center mt-4 space-x-2">
                                <p className="text-sm font-medium text-gray-900">
                                    <a href="#" title="" className="">
                                        1h 15m
                                    </a>
                                </p>
                                <span className="text-sm font-medium text-gray-900">
                                    •
                                </span>  
                                <p className="text-sm font-medium text-gray-900">
                                    April 09, 2022
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
                width="70vh"
            >
                <VideoDetailsModal />
            </Modal>
        </section>
    )
}

export default Videocard