import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

function ProductDetailsModal(props) {
    const clickedProductId = props.clickedProductId

    const [productDetails, setProductDetails] = React.useState([])
    const numbers = [1, 2, 3, 4, 5];

    // Make a request and get all products
    React.useEffect(() => {
        axios.get(`https://hammerhead-app-4pz5b.ondigitalocean.app/shop/product/${clickedProductId}`)
            .then(function (response) {

                // handle success
                setProductDetails(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    });

    return (
        <div>
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                {productDetails.map((product) =>

                    <div className="relative bg-white sm:p-10 xl:p-14">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-10 xl:gap-x-20 productDetailsModal">
                            <div className="relative lg:col-span-5">
                                <img className="object-cover w-full h-full sm:rounded-md" src={product.productImageUrl} alt="" />

                                <div className="absolute -translate-x-1/2 left-1/2 bottom-6">
                                    <div className="flex items-center justify-center space-x-2">
                                        <div className="w-2.5 h-2.5 bg-white/40 rounded-full"></div>
                                        <div className="w-2.5 h-2.5 bg-white/40 rounded-full"></div>
                                        <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                                        <div className="w-2.5 h-2.5 bg-white/40 rounded-full"></div>
                                        <div className="w-2.5 h-2.5 bg-white/40 rounded-full"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="px-4 pb-8 lg:col-span-7 xl:pr-16">
                                <nav className="flex">
                                    <ol role="list" className="flex items-center space-x-1">
                                        <li>
                                            <div className="-m-1">
                                                <a href="#" className="p-1 text-sm font-medium text-gray-600 rounded-md focus:outline-none focus:ring-2 focus:text-gray-900 focus:ring-gray-900 hover:text-gray-700"> Home </a>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="flex items-center">
                                                <span className="flex-shrink-0 text-gray-300"> - </span>
                                                <div className="-m-1">
                                                    <a href="#" className="p-1 ml-1 text-sm font-medium text-gray-600 rounded-md focus:outline-none focus:ring-2 focus:text-gray-900 focus:ring-gray-900 hover:text-gray-700"> Products </a>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="flex items-center">
                                                <span className="flex-shrink-0 text-gray-300"> - </span>
                                                <div className="-m-1">
                                                    <a href="#" className="p-1 ml-1 text-sm font-medium text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:text-gray-900 focus:ring-gray-900 hover:text-gray-700" aria-current="page">{product.productCategory}</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ol>
                                </nav>

                                <h1 className="mt-8 text-3xl font-bold text-gray-900 sm:text-4xl">{product.productName}</h1>
                                <p className="mt-5 text-base font-normal leading-7 text-gray-700">
                                    {product.productDescription}
                                </p>

                                <div className="inline-grid grid-cols-2 gap-4 mt-10 sm:grid-cols-3 sm:gap-0">
                                    {/* <div className="rounded-lg bg-gray-50 sm:rounded-r-none">
                                        <div className="px-5 py-4">
                                            <p className="text-xs font-medium tracking-widest text-gray-500 uppercase">Color</p>
                                            <div className="relative mt-1">
                                                <select name="" id="" className="block w-full py-1 pl-0 pr-8 font-medium text-gray-900 bg-transparent border-none appearance-none">
                                                    <option value="">White</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-gray-50 sm:rounded-none">
                                        <div className="px-5 py-4">
                                            <p className="text-xs font-medium tracking-widest text-gray-500 uppercase">Size</p>
                                            <div className="relative mt-1">
                                                <select name="" id="" className="block w-full py-1 pl-0 pr-8 font-medium text-gray-900 bg-transparent border-none appearance-none">
                                                    <option value="">40</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div> */}

                                    <div className="col-span-2 sm:col-span-1 sm:rounded-r-lg sm:bg-gray-50 sm:flex sm:items-center sm:justify-center">
                                        <div className="py-2 sm:py-4">
                                            <p className="text-3xl font-bold text-gray-900">USD ${product.productPrice}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden mt-10 rounded bg-gray-50">
                                    <div className="px-5 py-4">
                                        <div className="flex items-center">
                                            <div className="pr-5">
                                                <p className="text-xs font-medium tracking-widest text-gray-500 uppercase">Color</p>
                                                <div className="relative mt-1">
                                                    <select name="" id="" className="py-1 pl-0 pr-8 bg-transparent appearance-none">
                                                        <option value="">White</option>
                                                    </select>
                                                    <div className="absolute inset-y-0 right-0 flex p-1.5">
                                                        <svg className="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="px-5 border-l border-r border-gray-200">
                                                <p className="text-xs font-medium tracking-widest text-gray-500 uppercase">Size</p>
                                                <div className="relative mt-1">
                                                    <select name="" id="" className="py-1 pl-0 pr-8 bg-transparent appearance-none">
                                                        <option value="">40</option>
                                                    </select>
                                                    <div className="absolute inset-y-0 right-0 flex p-1.5">
                                                        <svg className="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pl-5">
                                                <p className="text-3xl font-bold text-gray-900">USD ${product.productPrice}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5 sm:mt-8 sm:flex sm:items-center sm:space-x-5">
                                    <Link to="/watch">
                                        <button
                                            type="button"
                                            className="items-center justify-center w-full px-12 py-3 text-base font-bold leading-7 text-center text-white transition-all
                                         duration-200 bg-gray-900 border border-transparent rounded-md inlin-flex sm:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 
                                         focus:ring-gray-900 hover:bg-gray-700"
                                        >
                                            Add to cart
                                        </button>
                                    </Link>


                                    <button
                                        type="button"
                                        className="inline-flex items-center justify-center w-full px-4 py-3 mt-4 text-base font-bold leading-7 text-center text-gray-900 transition-all duration-200
                                        bg-transparent border border-gray-300 rounded-md sm:mt-0 sm:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:border-gray-900 
                                        hover:bg-gray-900 focus:border-gray-900 focus:bg-gray-900 focus:text-white hover:text-white"
                                    >
                                        <svg className="w-5 h-5 mr-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                        Add to wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                )}


            </div>
        </div>
    )
}

export default ProductDetailsModal