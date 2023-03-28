import React from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import TopRectangleAd from './topRectangleAd';

function TrendingNews() {
    
    // set response data
    const [news, setNews] = React.useState([])

    // const SlicedNews = news.slice(4, 10)
    // const OneSlicedNews = news.slice(9, 11)

    const newsLength = news.length
    const SlicedNews = news.slice(newsLength - 5, newsLength)
    const OneSlicedNews = news.slice(newsLength - 2, newsLength)

    const newsCategories = ["Current Affairs", "International", "Business and Finance", "Sports", "Entertainment"]

    // Make a request and get all news
    React.useEffect(() => {
        axios.get('https://hammerhead-app-4pz5b.ondigitalocean.app/news/')
            .then(function (response) {

                // handle success
                setNews(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    });

    return (
        <section className="py-12 bg-black sm:py-16 lg:py-20">

            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="mb-12 flex items-center justify-center text-center md:justify-between sm:text-left">
                    <h2 className="text-2xl font-bold text-white sm:text-3xl">News Highlights</h2>

                    <div className="hidden md:block">
                        <a href="#" title="" className="inline-flex items-center p-1 -m-1 text-xs font-bold tracking-wide text-gray-400 uppercase transition-all duration-200 rounded hover:text-white focus:ring-2 focus:text-white focus:ring-gray-900 focus:ring-offset-2 focus:outline-none" role="button">
                            More News
                            <svg className="w-4 h-4 ml-1.5 -mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-7 lg:gap-x-12">
                    <div className="lg:col-span-4 rounded-xl">
                        {OneSlicedNews.map((news) =>
                            <Link to={"news/" + news._id}>
                                <section className="bg-black mb-7">
                                    <div className="max-w-7xl">
                                        <div className="relative overflow-hidden rounded-xl">
                                            <div className="absolute inset-0">
                                                <img className="object-cover w-full h-full" src={news.newsImageUrl} alt="" />
                                            </div>
                                            <div
                                                className="absolute inset-0 backdrop-blur-[1px] bg-gradient-to-r from-gray-900 via-gray-900/50 lg:via-gray-900/20 to-transparent">
                                            </div>

                                            <div className="relative p-8 sm:py-12 sm:px-16 sm:max-w-lg">
                                                <span className="px-3 py-2 text-xs font-bold tracking-widest text-white uppercase bg-black rounded">
                                                    Featured
                                                </span>

                                                <p className="mt-12 text-2xl font-bold text-white sm:text-3xl">
                                                    <a href="#" title="" className="">
                                                        {news.newsTitle}
                                                    </a>
                                                </p>
                                                <p className="mt-4 text-sm font-medium text-white">
                                                    {news.datePublished}
                                                </p>
                                                <p className="mt-4 text-base font-normal leading-7 text-white">
                                                    {/* {news.newsBody} */}
                                                </p>
                                                <div className="mt-12">
                                                    <a title=""
                                                        className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                                                        role="button">
                                                        Read full article
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </Link>

                        )}
                    </div>

                    <div className="lg:col-span-3">
                        <p className="text-xl font-bold text-white">
                            Recent Trending News
                        </p>

                        <TopRectangleAd />

                        <div className="mt-6 space-y-5">
                            {SlicedNews.map((news) =>
                                <Link to={"news/" + news._id}>
                                    <div
                                        className="mb-4 relative overflow-hidden transition-all duration-200 bg-black border border-white-200 rounded-lg hover:shadow-lg hover:bg-black hover:-translate-y-1">
                                        <div className="p-4">
                                            <div className="flex items-start lg:items-center">
                                                <img className="object-cover w-20 h-20 rounded-lg shrink-0"
                                                    src={news.newsImageUrl} alt="" />
                                                <div className="ml-5">
                                                    <p className="text-sm font-medium text-white">
                                                        {news.datePublished}
                                                    </p>
                                                    <p className="text-lg leading-7 font-bold text-white mt-2.5">
                                                        <a title="">
                                                            {news.newsTitle}
                                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Link>
                               

                            )} 

                             <TopRectangleAd />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrendingNews