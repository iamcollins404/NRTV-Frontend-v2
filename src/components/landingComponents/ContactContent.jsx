import React from 'react'
import ContactUs from '../../assets/images/contactus.png'

function ContactContent() {
    return (
        <div>
            <section>
                <div className="relative overflow-hidden bg-black">
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <section className="relative lg:pt-20 lg:pb-36">
                            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                                <div className="grid grid-cols-1 gap-y-8 lg:items-center lg:grid-cols-2 sm:gap-y-20 xl:grid-cols-5">
                                    <div className="text-center xl:col-span-2 lg:text-left md:px-16 lg:px-0">
                                        <h1 className="mt-5 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:leading-tight xl:text-6xl">Contact us anytime from anywhere.</h1>
                                        <p className="mt-5 text-lg font-medium text-white lg:mt-8">We are available 24/7 to attend to you needs. We appreciate your reviews and feedback. Our customer care support agents are readily available to serve you.</p>
                                    </div>

                                    <div className="xl:col-span-3">
                                        <img className="w-full mx-auto scale-110" src={ContactUs} alt="" />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 mt-8 lg:grid-cols-2 lg:mt-12 gap-y-12 sm:gap-y-16 lg:gap-x-16 xl:gap-x-24">
                        <div className="pl-6 sm:pl-8">
                            <div className="relative h-full">
                                <div
                                    className="absolute bottom-0 left-0 w-24 h-24 -mb-6 -ml-6 bg-blue-100 sm:-mb-8 sm:-ml-8 sm:h-48 sm:w-48 2xl:-ml-10 2xl:-mb-10 rounded-2xl">
                                </div>

                                <img className="relative object-cover w-full h-full rounded-2xl"
                                    src="https://images.unsplash.com/photo-1573165706511-3ffde6ef1fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt="" />
                            </div>
                        </div>

                        <div>
                            <p className="text-base font-normal leading-7 text-white lg:text-lg lg:leading-8">
                                As Nrtv our team members are available 24/7 to provide you with the best responses to meet your needs.
                                Feel free to contact us at anytime if you have any queries or questions.
                            </p>

                            <div className="grid grid-cols-1 mt-12 sm:grid-cols-2 gap-y-8 sm:gap-12 xl:gap-x-16 sm:mt-16 lg:mt-20">
                                <div className="flex items-start">
                                    <svg className="w-6 h-6 text-blue-600 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-white">
                                            Office Hours
                                        </h3>
                                        <p className="mt-4 text-sm font-normal text-gray-600">
                                            Monday-Friday
                                            8:00 am to 5:00 pm
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <svg className="w-6 h-6 text-blue-600 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-white">
                                            Our Address
                                        </h3>
                                        <p className="mt-4 text-sm font-normal text-gray-600">
                                            29 Argyll Drive, Newlands, Harare Zimbabwe
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <svg className="w-6 h-6 text-blue-600 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-white">
                                            Office 2
                                        </h3>
                                        <p className="mt-4 text-sm font-normal text-gray-600">
                                            Newlands Harare Zimbabwe
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <svg className="w-6 h-6 text-blue-600 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-white">
                                            Get In Touch
                                        </h3>
                                        <p className="mt-4 text-sm font-normal text-gray-600">
                                            0242 721316/317
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 overflow-hidden bg-black sm:py-16 lg:py-20 xl:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid max-w-6xl grid-cols-1 mx-auto gap-y-12 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24">
                        <div className="relative flex flex-col justify-between max-w-lg lg:py-12 lg:max-w-none">
                            <div className="flex-1">
                                <p className="text-sm font-normal tracking-widest uppercase">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500"> We have your queries in mind? </span>
                                </p>
                            </div>

                            <div className="mt-6 lg:mt-auto">
                                <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">We are available to attend to your needs.</h2>
                                <p className="mt-4 text-base font-normal text-gray-400 lg:max-w-xs sm:text-lg sm:mt-6">Your queries and recommendations are welcome.</p>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center">


                            <div className="relative overflow-hidden  rounded-xl">
                                <div className="p-6 sm:py-8 sm:px-9">
                                    <p className="text-xl font-normal text-white">Feel free to reach us when you have any query, questions and recommendations..</p>

                                    <form action="#" method="POST" className="mt-8 space-y-4">
                                        <div>
                                            <label for="" className="sr-only"> Full name </label>
                                            <div>
                                                <input type="text" name="" id="" placeholder="First & Last name" className="block w-full px-5 py-4 text-base text-white placeholder-gray-500  rounded-md focus:border-white focus:ring-1 focus:ring-white" />
                                            </div>
                                        </div>

                                        <div>
                                            <label for="" className="sr-only"> Email address </label>
                                            <div>
                                                <input type="email" name="" id="" placeholder="Email address" className="block w-full px-5 py-4 text-base text-white placeholder-gray-500  rounded-md focus:border-white focus:ring-1 focus:ring-white" />
                                            </div>
                                        </div>

                                        <div>
                                            <label for="" className="sr-only"> Phone number </label>
                                            <div>
                                                <input type="tel" name="" id="" placeholder="Phone number" className="block w-full px-5 py-4 text-base text-white placeholder-gray-500  rounded-md focus:border-white focus:ring-1 focus:ring-white" />
                                            </div>
                                        </div>

                                        <div>
                                            <label for="" className="sr-only"> Message </label>
                                            <div>
                                                <textarea name="" id="" placeholder="Write your message" rows="4" className="block w-full px-5 py-4 text-base text-white placeholder-gray-500  rounded-md resize-y focus:border-white focus:ring-1 focus:ring-white"></textarea>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="relative inline-flex mt-2 group">
                                                <div className="absolute transition-all duration-200 rounded-md -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                                                <button type="button" className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white  border border-transparent rounded-md" role="button">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactContent