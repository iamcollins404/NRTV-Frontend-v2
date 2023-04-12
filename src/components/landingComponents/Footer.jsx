import React from 'react'
import NrtvLogo from '../../assets/images/nrtvLogo.png'

function Footer() {
    return (
        <div>
            <footer className="pt-12 pb-8 bg-black lg:pt-20 xl:pt-24 sm:pt-16">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-12 xl:gap-x-16 gap-x-8">
                        <div className="col-span-2 md:col-span-4 lg:col-span-2">
                            <a href="#" title="" className="flex">
                                <img className="w-auto h-9" src={NrtvLogo} alt="" />
                            </a>
                            <p className="mt-6 text-base font-normal text-white">NRTV Zimbabwe. World class content beyond your imagination.</p>
                        </div>

                        <div>
                            <h6 className="text-xs font-semibold tracking-widest text-gray-600 uppercase">Platform</h6>

                            <ul className="mt-8 space-y-5">
                                <li>
                                    <a href="#" title="" className="flex text-base font-normal transition-all transform text-white hover:text-white duruation hover:translate-x-1">Livestream </a>
                                </li>

                                <li>
                                    <a href="#" title="" className="flex text-base font-normal transition-all transform text-white hover:text-white duruation hover:translate-x-1"> News </a>
                                </li>

                                <li>
                                    <a href="#" title="" className="flex text-base font-normal transition-all transform text-white hover:text-white duruation hover:translate-x-1">Shop </a>
                                </li>

                                <li>
                                    <a href="#" title="" className="flex text-base font-normal transition-all transform text-white hover:text-white duruation hover:translate-x-1"> Request Content </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h6 className="text-xs font-semibold tracking-widest text-gray-600 uppercase">Resources</h6>

                            <ul className="mt-8 space-y-5">
                                <li>
                                    <a href="#" title="" className="flex text-base font-normal transition-all transform text-white hover:text-white duruation hover:translate-x-1"> About </a>
                                </li>

                                <li>
                                    <a href="#" title="" className="flex text-base font-normal transition-all transform text-white hover:text-white duruation hover:translate-x-1"> Features </a>
                                </li>

                                <li>
                                    <a href="#" title="" className="flex text-base font-normal transition-all transform text-white hover:text-white duruation hover:translate-x-1"> Pricing & Plans </a>
                                </li>

                                <li>
                                    <a href="#" title="" className="flex text-base font-normal transition-all transform text-white hover:text-white duruation hover:translate-x-1"> Contact </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h6 className="text-xs font-semibold tracking-widest text-gray-600 uppercase">More</h6>

                            <ul className="mt-8 space-y-5">
                                <li>
                                    <a href="#" title="" className="flex text-base font-normal transition-all transform text-white hover:text-white duruation hover:translate-x-1"> About Us </a>
                                </li>

                                <li>
                                    <a href="#" title="" className="flex text-base font-normal transition-all transform text-white hover:text-white duruation hover:translate-x-1"> Contact Us </a>
                                </li>

                                <li>
                                    <a href="#" title="" className="flex text-base font-normal transition-all transform text-white hover:text-white duruation hover:translate-x-1"> Contribute </a>
                                </li>

                                <li>
                                    <a href="#" title="" className="flex text-base font-normal transition-all transform text-white hover:text-white duruation hover:translate-x-1">Support </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h6 className="text-xs font-semibold tracking-widest text-gray-600 uppercase">More</h6>

                            <ul className="mt-8 space-y-5">
                                <li>
                                    <a href="#" title="" className="flex text-base font-normal transition-all transform text-white hover:text-white duruation hover:translate-x-1"> Guides </a>
                                </li>

                                <li>
                                    <a href="#" title="" className="flex text-base font-normal transition-all transform text-white hover:text-white duruation hover:translate-x-1"> Terms & Conditions </a>
                                </li>

                                <li>
                                    <a href="#" title="" className="flex text-base font-normal transition-all transform text-white hover:text-white duruation hover:translate-x-1"> Privacy Policy </a>
                                </li>

                                <li>
                                    <a href="#" title="" className="flex text-base font-normal transition-all transform text-white hover:text-white duruation hover:translate-x-1"> Live Stream </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <hr className="mt-12 border-gray-900 lg:mt-20 xl:mt-24 sm:mt-16" />

                    <p className="mt-8 text-sm font-normal text-center text-white">© 2023, All Rights Reserved by NRTV</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer