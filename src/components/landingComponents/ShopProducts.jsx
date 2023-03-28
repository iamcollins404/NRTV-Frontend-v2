import React from 'react'
import { Modal } from "@nextui-org/react";
import axios from "axios"
import ProductDetailsModal from "../modals/productDetailsModal"

function ShopProducts() {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);

    const shopCategories = ["Clothing", "Accessories", "Electronics", "Stationery", "Self Care"]
    const [products, setProducts] = React.useState([])
    const [ clickedProductId, setclickedProductId ] = React.useState()

    const closeHandler = () => {
        setVisible(false);
    };

    // Make a request and get all products
    React.useEffect(() => {
        axios.get('https://hammerhead-app-4pz5b.ondigitalocean.app/shop/')
            .then(function (response) {

                // handle success
                setProducts(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    });

    return (
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <section>
                <header className="bg-white border-b border-gray-200">
                    <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex items-center -m-2 xl:hidden">
                                <button type="button" className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-lg hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>

                            <div className="flex ml-6 mr-auto xl:ml-0">

                                <div className="flex items-center flex-shrink-0">
                                    <h5 className="block w-auto h-8 lg:hidden">Nrtv Shop</h5>
                                </div>

                                <div className="hidden xl:flex xl:space-x-10">
                                    <a href="#" title="" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-indigo-600 transition-all duration-200 border-b-2 border-indigo-600"> All </a>
                                    {shopCategories.map((shopCategory) =>
                                        <a href="#" title="" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 transition-all duration-200 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-900">{shopCategory}</a>
                                    )}

                                </div>
                            </div>

                            <div className="flex items-center justify-end">
                                <div className="flex-1 hidden max-w-xs ml-auto lg:block">
                                    <label for="" className="sr-only"> Search </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </div>

                                        <input type="search" name="" id="" className="block w-full py-2 pl-10 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm" placeholder="Search here" />
                                    </div>
                                </div>

                                <div className="flex items-center space-x-6 sm:ml-5">
                                    <div className="relative">
                                        <button type="button" className="p-1 text-gray-700 transition-all duration-200 bg-white rounded-full hover:text-gray-900 focus:outline-none hover:bg-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>
                                        </button>
                                        <span className="inline-flex items-center px-1.5 absolute -top-px -right-1 py-0.5 rounded-full text-xs font-semibold bg-indigo-600 text-white">0</span>
                                    </div>

                                    <div className="relative">
                                        <button type="button" className="p-1 text-gray-700 transition-all duration-200 bg-white rounded-full hover:text-gray-900 focus:outline-none hover:bg-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                            </svg>

                                        </button>
                                        <span className="inline-flex items-center px-1.5 absolute -top-px -right-1 py-0.5 rounded-full text-xs font-semibold bg-indigo-600 text-white">0</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="py-12 sm:py-16 lg:py-10 bg-gray-50">
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        {shopCategories.map((shopCategory) =>
                            <div>
                                <div className="flex items-center justify-center lg:justify-between">
                                    <h2 className="my-10 text-2xl font-bold text-gray-900 sm:text-3xl">{shopCategory}</h2>

                                    <div className="hidden lg:flex">
                                        <a title="" className="inline-flex items-center justify-center p-1 -m-1 text-sm font-bold text-gray-600 transition-all duration-200 rounded-md focus:text-gray-900 focus:ring-gray-900 focus:ring-2 focus:ring-offset-2 focus:outline-none hover:text-gray-900">
                                            Check all items
                                            <svg className="w-5 h-5 ml-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>



                                <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:mt-10">

                                    {
                                        products.filter(product => product.productCategory === shopCategory).map((product) =>
                                            <div>

                                                <div className="productsCard relative overflow-hidden bg-white border border-gray-200 rounded-xl group" onClick={()=>{setclickedProductId( product._id )}}>
                                                    <div className="relative">
                                                        <div className="productCard" onClick={handler}>
                                                            <div className="aspect-w-1 aspect-h-1">
                                                                <img className="object-cover w-full h-full p-4 productCardImage" src={product.productImageUrl} alt="" />
                                                            </div>

                                                            <div className="px-6 py-4">
                                                                <p className="text-xs font-medium tracking-widest text-gray-500 uppercase">{product.productName}</p>
                                                                <h3 className="mt-2 text-sm font-medium text-gray-900">
                                                                    <a title="" className='newsBody'>
                                                                        {product.productDescription}
                                                                        <span className="absolute inset-0" aria-hidden="true"></span>
                                                                    </a>
                                                                </h3>
                                                                <div className="flex items-center mt-2.5">
                                                                    <div className="flex items-center space-x-px">
                                                                        <svg className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                            <path
                                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                            />
                                                                        </svg>
                                                                        <svg className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                            <path
                                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                            />
                                                                        </svg>
                                                                        <svg className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                            <path
                                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                            />
                                                                        </svg>
                                                                        <svg className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                            <path
                                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                            />
                                                                        </svg>
                                                                        <svg className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                            <path
                                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                            />
                                                                        </svg>
                                                                    </div>
                                                                    <p className="text-sm font-medium text-gray-500 ml-1.5">{product.productQuantity}left</p>
                                                                </div>
                                                                <p className="mt-5 text-sm font-bold text-gray-900">USD ${product.productPrice}</p>
                                                            </div>

                                                        </div>
                                                        <button type="button" className="flex items-center justify-center w-full px-4 py-2.5 text-sm font-bold text-white transition-all duration-200 bg-gray-900">
                                                            <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                                            </svg>
                                                            Add to cart
                                                        </button>
                                                    </div>
                                                    <div className="absolute inset-x-0 bottom-0 transition-all duration-200 translate-y-full group-hover:translate-y-0">
                                                        <button type="button" className="flex items-center justify-center w-full px-4 py-2.5 text-sm font-bold text-white transition-all duration-200 bg-gray-900">
                                                            <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                                            </svg>
                                                            Add to cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }


                                </div>

                            </div>

                        )
                        }


                        {/* product details fetch modal component */}
                        <Modal
                            closeButton
                            aria-labelledby="modal-title"
                            open={visible}
                            onClose={closeHandler}
                            width="auto"
                        >
                            <Modal.Body>
                                <ProductDetailsModal clickedProductId={clickedProductId} />
                            </Modal.Body>
                        </Modal>

                        <div className="mt-12 text-center lg:hidden">
                            <a href="#" title="" className="inline-flex items-center justify-center p-1 text-sm font-bold text-gray-600 transition-all duration-200 rounded-md focus:text-gray-900 focus:ring-gray-900 focus:ring-2 focus:ring-offset-2 focus:outline-none hover:text-gray-900">
                                Check all items
                                <svg className="w-5 h-5 ml-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>

            </section>
        </div>
    )
}

export default ShopProducts