import React from 'react'
import { Modal, Text } from "@nextui-org/react";
import AddNewProduct from '../../components/adminforms/addNewProduct'
import AddNews from '../../components/adminforms/addNews'
import UploadContent from '../../components/adminforms/uploadContent'
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import { Helmet } from 'react-helmet';

// import components
import LoggedinAccountLayout from "../../components/account/loggedInLayout"

function AdminAddNew() {
    const navigate = useNavigate();
    const [productsVisible, setProductsVisible] = React.useState(false);
    const [newsVisible, setNewsVisible] = React.useState(false);
    const [contentVisible, setContentVisible] = React.useState(false);

    const productshandler = () => setProductsVisible(true);
    const contenthandler = () => setContentVisible(true);

    const closeHandler = () => {
        setProductsVisible(false);
        setNewsVisible(false);
        setContentVisible(false);
    };

    return (
        <LoggedinAccountLayout>
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>NRTV - Admin Corner</title>
                </Helmet>

                <div className="flex flex-col flex-1 overflow-x-hidden">
                    <main>
                        <div className="py-6">
                            <div className="px-4 mx-auto sm:px-6 md:px-8">
                                <div className="md:items-center md:flex">
                                    <p className="text-base font-bold text-gray-900">Hey Admin</p>
                                    <p className="mt-1 text-base font-medium text-gray-500 md:mt-0 md:ml-2">welcome to the admin corner</p>
                                </div>
                            </div>

                            <div className="px-4 mx-auto mt-8 sm:px-6 md:px-8">
                                <div className="space-y-5 sm:space-y-6">
                                    <div className="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                        <button
                                            type="button"
                                            onClick={productshandler}
                                            class="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
                                        >
                                            <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>
                                            Add New Product
                                        </button>
                                        {/* new product modal */}

                                        <Modal
                                            closeButton
                                            aria-labelledby="modal-title"
                                            open={productsVisible}
                                            onClose={closeHandler}
                                            width="80vh"
                                        >
                                            <Modal.Header>
                                                <Text id="modal-title" size={18}>

                                                </Text>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <AddNewProduct />
                                            </Modal.Body>
                                        </Modal>

                                        <button
                                            type="button"
                                            onClick={() => {
                                                navigate("/account/admincorner/addnews")
                                            }}
                                            class="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
                                        >
                                            <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                                            </svg>
                                            <Link to="/account/admincorner/addnews">
                                                Add News
                                            </Link>
                                        </button>



                                        {/* add news modal */}

                                        <Modal
                                            closeButton
                                            aria-labelledby="modal-title"
                                            open={newsVisible}
                                            onClose={closeHandler}
                                            width="80vh"
                                        >
                                            <Modal.Body>
                                                <AddNews />
                                            </Modal.Body>
                                        </Modal>

                                        <button
                                            type="button"
                                            onClick={contenthandler}
                                            class="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
                                        >
                                            <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                            </svg>
                                            Upload New Content
                                        </button>

                                        {/* add content modal */}

                                        <Modal
                                            closeButton
                                            aria-labelledby="modal-title"
                                            open={contentVisible}
                                            onClose={closeHandler}
                                            width="80vh"
                                        >
                                            <Modal.Body>
                                                <UploadContent />
                                            </Modal.Body>
                                        </Modal>
                                    </div>


                                    {/* <div className="lg:col-span-9">
                                        <div className="flex items-center justify-between">
                                            <p className="flex-1 text-base font-bold text-gray-900">Latest Orders</p>

                                            <div className="inline-flex items-center justify-end">
                                                <label for="sort" className="flex-shrink-0 text-sm font-medium text-gray-900"> Sort by: </label>
                                                <select id="sort" name="sort" className="block w-full py-2 pl-1 pr-10 text-base bg-transparent border-gray-300 border-none rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                                                    <option>Recent</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="flex flex-col mt-4">
                                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                                    <div className="overflow-hidden ring-1 ring-black ring-opacity-5 md:rounded-xl">
                                                        <table className="min-w-full bg-white lg:divide-y lg:divide-gray-200">
                                                            <thead className="hidden lg:table-header-group">
                                                                <tr>
                                                                    <th className="py-3.5 px-4 text-left sm:px-6 text-sm whitespace-nowrap font-medium text-gray-500">
                                                                        <div className="flex items-center">
                                                                            ID
                                                                            <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                                                            </svg>
                                                                        </div>
                                                                    </th>

                                                                    <th className="py-3.5 px-4 text-left sm:px-6 text-sm whitespace-nowrap font-medium text-gray-500">
                                                                        <div className="flex items-center">
                                                                            Product
                                                                            <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                                                            </svg>
                                                                        </div>
                                                                    </th>

                                                                    <th className="py-3.5 px-4 text-left sm:px-6 text-sm whitespace-nowrap font-medium text-gray-500">
                                                                        <div className="flex items-center">
                                                                            Customer Name
                                                                            <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                                                            </svg>
                                                                        </div>
                                                                    </th>

                                                                    <th className="py-3.5 px-4 text-left sm:px-6 text-sm whitespace-nowrap font-medium text-gray-500">
                                                                        <div className="flex items-center">
                                                                            Date
                                                                            <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                                                            </svg>
                                                                        </div>
                                                                    </th>

                                                                    <th className="py-3.5 px-4 text-left sm:px-6 text-sm whitespace-nowrap font-medium text-gray-500">
                                                                        <div className="flex items-center">
                                                                            Price
                                                                            <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                                                            </svg>
                                                                        </div>
                                                                    </th>

                                                                    <th className="py-3.5 px-4 text-left sm:px-6 text-sm whitespace-nowrap font-medium text-gray-500">
                                                                        <div className="flex items-center">
                                                                            Status
                                                                            <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                                                            </svg>
                                                                        </div>
                                                                    </th>

                                                                    <th className="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0">
                                                                        <span className="sr-only"> Actions </span>
                                                                    </th>
                                                                </tr>
                                                            </thead>

                                                            <tbody className="divide-y divide-gray-200">
                                                                <tr>
                                                                    <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">#29345</td>

                                                                    <td className="px-4 py-4 text-sm font-bold text-gray-900 sm:px-6 whitespace-nowrap">
                                                                        <div className="inline-flex items-center">
                                                                            <img className="flex-shrink-0 object-cover w-8 h-8 mr-3 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/3/clarity-landing-logo.png" alt="" />
                                                                            Nkulu Golf T - Shirt
                                                                        </div>
                                                                        <div className="space-y-1 lg:hidden pl-11">
                                                                            <p className="text-sm font-medium text-gray-500">#29345</p>
                                                                        </div>
                                                                    </td>

                                                                    <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">Collins Jimu</td>

                                                                    <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">23 January, 2022</td>

                                                                    <td className="hidden px-4 py-4 text-sm font-bold text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">$20.00</td>

                                                                    <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
                                                                        <div className="inline-flex items-center">
                                                                            <svg className="mr-1.5 h-2.5 w-2.5 text-green-500" fill="currentColor" viewBox="0 0 8 8">
                                                                                <circle cx="4" cy="4" r="3" />
                                                                            </svg>
                                                                            Complete
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </LoggedinAccountLayout>
    )
}

export default AdminAddNew