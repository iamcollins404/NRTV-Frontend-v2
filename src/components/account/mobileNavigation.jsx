import React from 'react'
import { useNavigate } from "react-router-dom";

function MobileNavigation() {
    const navigate = useNavigate();
    return (
        <div>
            <div class="w-full h-screen">
                <section id="bottom-navigation" class="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-black border-t border-indigo-500 shadow">
                    <div id="tabs" class="flex justify-between py-2">

                        <div className="items-center ml-10">
                            <a href="#" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1" onClick={() => { navigate("/account/watch/live") }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-white items-center w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                                </svg>

                                <span class="tab tab-explore block text-xs text-white mt-2">Home</span>
                            </a>
                        </div>


                        <div className="items-center mr-2">
                            <a href="#" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1" onClick={() => { navigate("/account/watch/live") }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-white items-center w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                                </svg>

                                <span class="tab tab-explore block text-xs text-white mt-2">Watch Shows</span>
                            </a>
                        </div>

                        <div className="items-center">
                            <a href="#" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1" onClick={() => { navigate("/account/watch/live") }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-white items-center w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                                </svg>

                                <span class="tab tab-explore block text-xs text-white mt-2">News</span>
                            </a>
                        </div>

                        <div className="items-center mr-10">
                            <a href="#" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1" onClick={() => { navigate("/account/watch/live") }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-white items-center w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                                </svg>

                                <span class="tab tab-explore block text-xs text-white mt-2">About Us</span>
                            </a>

                        </div>

                    </div>
                </section>
            </div>

        </div>
    )
}

export default MobileNavigation