import React from 'react'
import { Modal, Text } from "@nextui-org/react";
import AddNewProduct from '../../components/adminforms/addNewProduct'
import AddNews from '../../components/adminforms/addNews'
import UploadContent from '../../components/adminforms/uploadContent'
import { Helmet } from 'react-helmet';

// import components
import LoggedinAccountLayout from "../../components/account/loggedInLayout"

function AdminAddNew() {
    const [productsVisible, setProductsVisible] = React.useState(false);
    const [newsVisible, setNewsVisible] = React.useState(false);
    const [contentVisible, setContentVisible] = React.useState(false);

    const productshandler = () => setProductsVisible(true);
    const newshandler = () => setNewsVisible(true);
    const contenthandler = () => setContentVisible(true);

    const closeHandler = () => {
        setProductsVisible(false);
        setNewsVisible(false);
        setContentVisible(false);
    };

    return (
        <div>
            <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
            <LoggedinAccountLayout>
                <div>

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>NRTV - Admin Analytics</title>
                </Helmet>

                    <div class="flex flex-col flex-1 overflow-x-hidden">
                        <main>
                            <div class="py-6">
                                <div class="px-4 mx-auto sm:px-6 md:px-8">
                                    <div class="md:items-center md:flex">
                                        <p class="text-base font-bold text-gray-900">Hey Admin -</p>
                                        <p class="mt-1 text-base font-medium text-gray-500 md:mt-0 md:ml-2">here's what's happening with your application.</p>
                                    </div>
                                </div>

                                <div class="px-4 mx-auto mt-8 sm:px-6 md:px-8">
                                    <div class="space-y-5 sm:space-y-6">
                                        <div class="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-1 lg:grid-cols-3">
                                            <div class="bg-white border border-gray-200 rounded-xl">
                                                <div class="px-5 py-4">
                                                    <p class="text-xs font-medium tracking-wider text-gray-500 uppercase">Today's Visits</p>
                                                    <div class="flex items-center justify-between mt-3">
                                                        <p class="text-xl font-bold text-gray-900">100</p>

                                                        <span class="inline-flex items-center text-sm font-semibold text-green-500">
                                                            + 36%
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="bg-white border border-gray-200 rounded-xl">
                                                <div class="px-5 py-4">
                                                    <p class="text-xs font-medium tracking-wider text-gray-500 uppercase">Monthly Visits</p>
                                                    <div class="flex items-center justify-between mt-3">
                                                        <p class="text-xl font-bold text-gray-900">1000</p>

                                                        <span class="inline-flex items-center text-sm font-semibold text-red-500">
                                                            - 14%
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="bg-white border border-gray-200 rounded-xl">
                                                <div class="px-5 py-4">
                                                    <p class="text-xs font-medium tracking-wider text-gray-500 uppercase">Total Page Views</p>
                                                    <div class="flex items-center justify-between mt-3">
                                                        <p class="text-xl font-bold text-gray-900">84,382</p>

                                                        <span class="inline-flex items-center text-sm font-semibold text-green-500">
                                                            + 36%
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-6">
                                            <div class="overflow-hidden bg-white border border-gray-200 rounded-xl lg:col-span-4">
                                                <div class="px-4 pt-5 sm:px-6">
                                                    <div class="flex flex-wrap items-center justify-between">
                                                        <p class="text-base font-bold text-gray-900 lg:order-1">Traffic Report</p>

                                                        <button
                                                            type="button"
                                                            class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm lg:order-2 2xl:order-3 md:order-last hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                                        >
                                                            <svg class="w-4 h-4 mr-1 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                            </svg>
                                                            Export to CSV
                                                        </button>

                                                        <nav class="flex items-center justify-center mt-4 space-x-1 2xl:order-2 lg:order-3 md:mt-0 lg:mt-4 sm:space-x-2 2xl:mt-0">
                                                            <a href="#" title="" class="px-2 py-2 text-xs font-bold text-gray-900 transition-all border border-gray-900 rounded-lg sm:px-4 hover:bg-gray-100 dration-200"> 12 Months </a>

                                                            <a href="#" title="" class="px-2 py-2 text-xs font-bold text-gray-500 transition-all border border-transparent rounded-lg sm:px-4 hover:bg-gray-100 dration-200"> 6 Months </a>

                                                            <a href="#" title="" class="px-2 py-2 text-xs font-bold text-gray-500 transition-all border border-transparent rounded-lg sm:px-4 hover:bg-gray-100 dration-200"> 30 Days </a>

                                                            <a href="#" title="" class="px-2 py-2 text-xs font-bold text-gray-500 transition-all border border-transparent rounded-lg sm:px-4 hover:bg-gray-100 dration-200"> 7 Days </a>
                                                        </nav>
                                                    </div>

                                                    <div id="chart4" class=""></div>
                                                </div>
                                            </div>

                                            <div class="overflow-hidden bg-white border border-gray-200 rounded-xl lg:col-span-2">
                                                <div class="px-4 py-5 sm:p-6">
                                                    <div class="sm:flex sm:items-center sm:justify-between">
                                                        <p class="text-base font-bold text-gray-900">Traffic Sources</p>

                                                        <div class="mt-4 sm:mt-0">
                                                            <div>
                                                                <label for="" class="sr-only"> Duration </label>
                                                                <select name="" id="" class="block w-full py-0 pl-0 pr-10 text-base border-none rounded-lg focus:outline-none focus:ring-0 sm:text-sm">
                                                                    <option>Last 7 days</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="mt-8 space-y-6">
                                                        <div>
                                                            <div class="flex items-center justify-between">
                                                                <p class="text-sm font-medium text-gray-900">Direct</p>
                                                                <p class="text-sm font-medium text-gray-900">1,43,382</p>
                                                            </div>
                                                            <div class="mt-2 bg-gray-200 h-1.5 rounded-full relative">
                                                                <div class="absolute inset-y-0 left-0 bg-indigo-600 rounded-full w-[60%]"></div>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <div class="flex items-center justify-between">
                                                                <p class="text-sm font-medium text-gray-900">Referral</p>
                                                                <p class="text-sm font-medium text-gray-900">87,974</p>
                                                            </div>
                                                            <div class="mt-2 bg-gray-200 h-1.5 rounded-full relative">
                                                                <div class="absolute inset-y-0 left-0 bg-indigo-600 rounded-full w-[50%]"></div>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <div class="flex items-center justify-between">
                                                                <p class="text-sm font-medium text-gray-900">Social Media</p>
                                                                <p class="text-sm font-medium text-gray-900">45,211</p>
                                                            </div>
                                                            <div class="mt-2 bg-gray-200 h-1.5 rounded-full relative">
                                                                <div class="absolute inset-y-0 left-0 bg-indigo-600 rounded-full w-[30%]"></div>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <div class="flex items-center justify-between">
                                                                <p class="text-sm font-medium text-gray-900">Twitter</p>
                                                                <p class="text-sm font-medium text-gray-900">21,893</p>
                                                            </div>
                                                            <div class="mt-2 bg-gray-200 h-1.5 rounded-full relative">
                                                                <div class="absolute inset-y-0 left-0 bg-indigo-600 rounded-full w-[15%]"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </LoggedinAccountLayout>

        </div>
    )
}

export default AdminAddNew