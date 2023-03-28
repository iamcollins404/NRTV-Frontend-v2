import React from 'react'
import ShoppingImage from '../../assets/images/shopping.png'

function ShopHeader() {
    return (
        <section>
            <div className="relative overflow-hidden bg-gray-100 ">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <section className="relative lg:pt-20 lg:pb-36">
                        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                            <div className="grid grid-cols-1 gap-y-8 lg:items-center lg:grid-cols-2 sm:gap-y-20 xl:grid-cols-5">
                                <div className="text-center xl:col-span-2 lg:text-left md:px-16 lg:px-0">
                                    <h1 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl lg:leading-tight xl:text-6xl">Shop our ✨ trusted brands</h1>
                                    <p className="mt-5 text-lg font-medium text-gray-900 lg:mt-8">We provide you with high quality branded products and delivery on your doorsteps.</p>

                                    <div className="mt-8 lg:mt-10">
                                        <a
                                            href="#"
                                            title=""
                                            className="inline-flex items-center justify-center px-8 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-gray-600"
                                            role="button"
                                        >
                                            Start Shopping
                                        </a>
                                    </div>
                                </div>

                                <div className="xl:col-span-3">
                                    <img className="w-full mx-auto scale-110" src={ShoppingImage} alt="" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default ShopHeader