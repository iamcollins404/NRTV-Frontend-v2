import React from 'react'
import LiveTV from '../../assets/images/livestream.png'
import { Modal } from "@nextui-org/react"
import VideoDetailsModal from '../modals/videoDetailsModal'

function LiveTvFetch() {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);

    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };
    return (
        <section>
            <div className="my-8 text-center sm:flex sm:items-end sm:space-x-16 sm:text-left">
                <p className="text-2xl font-bold text-gray-900">
                    Live Tv
                </p>
            </div>
            <div class="grid grid-cols-1 text-center sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-6 sm:text-left">
                <div class="relative group" onClick={handler}>
                    <div class="overflow-hidden aspect-w-4 aspect-h-2 rounded-2xl">
                        <img class="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src={LiveTV} alt="" />
                    </div>

                    <h3 class="mt-2 text-lg font-bold text-gray-900">
                        <a title="">
                            Live Channel
                            <span class="absolute inset-0" aria-hidden="true"></span>
                        </a>
                    </h3>
                    <div className="flex items-center mt-2 space-x-2">
                        <p className="text-sm font-medium text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path className='filter-green' stroke-linecap="round" stroke-linejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </p>
                        <p className="text-sm font-medium text-gray-900">
                            Online
                        </p>
                    </div>
                </div>
            </div>

            {/* content details fetch modal component
            <Modal
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
                width="70vh"
            >
                <VideoDetailsModal />
            </Modal> */}
        </section>
    )
}

export default LiveTvFetch