import React from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import parse from 'html-react-parser';
import { Helmet } from 'react-helmet';
import TopRectangleAd from './topRectangleAd';
import { useLocation } from "react-router-dom";

function NewsByCategory() {
    const { pathname } = useLocation(); 

    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    const [newsLoading, setNewsLoading] = React.useState(false)
    const [FinishWaitingForNews, setFinishWaitingForNews] = React.useState(false)

    const timeOut = setTimeout(navigateFunction, 2500)

    function navigateFunction() {
        setFinishWaitingForNews(true)
    }

    // set response data
    const [news, setNews] = React.useState([]);

    const [newsCategoryFilter, setnewsCategoryFilter] = React.useState("All")
    console.log(newsCategoryFilter)

    const newsCategories = ["News", "Crime and Courts", "Sports", "Business and Finance", "Regional", "International", "Agriculture", "Politics", "Entertainment", "Health"]
    const correctedNewsCategories = ["All", "News", "Crime and Courts", "Sports", "Business and Finance", "Regional", "International", "Agriculture", "Politics", "Entertainment", "Health"]

    // set response data
    const [latestnews, setLatestNews] = React.useState([])

    const newsLength = news.length
    const SlicedNews = news.slice(newsLength - 3, newsLength)
    const OneSlicedNews = news.slice(newsLength - 1, newsLength)

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

    if (newsCategoryFilter === "All") {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>NRTV - News Articles </title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>

                <div>
                    <section className="bg-black">
                        <section className="py-2 bg-black sm:py-2 lg:py-2">
                            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                                <div className="newsfilterTab">
                                    <header className="hidden lg:flex bg-black lg:border-b lg:border-gray-200">
                                        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                                            <div className="flex justify-between h-16">

                                                <div className="flex ml-6 mr-auto xl:ml-0">

                                                    <nav className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-12">

                                                        {correctedNewsCategories.map((newsCategory) =>
                                                            <Link to="/news" onClick={() => { setnewsCategoryFilter(newsCategory) }}>
                                                                <a title="" className="correctedNewsCategories text-sm font-medium text-white transition-all duration-200 font-pj hover:text-opacity-50  focus:ring-gray-900 focus:ring-offset-2">
                                                                    {newsCategory}
                                                                </a>
                                                            </Link>

                                                        )}

                                                    </nav>
                                                </div>

                                            </div>
                                        </div>
                                    </header>

                                </div>

                               

                                <section className="bg-black mt-8">
                                {FinishWaitingForNews && 
                                 <div>
                                 <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-7 lg:gap-x-12">
                                     <div className="lg:col-span-4 rounded-xl">
                                         {OneSlicedNews.map((news) =>
                                             <Link to={news._id}>
                                                 <section className="bg-black mb-7">
                                                     <div className="max-w-7xl">
                                                         <div className="slicedNews latestNewsDiv relative overflow-hidden rounded-xl">
                                                             <div className="absolute inset-0">
                                                                 <img className=" object-cover w-full h-full" src={news.newsImageUrl} alt="" />
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
                                                                 <p className="newsBody mt-4 text-base font-normal leading-7 text-white">
                                                                     {parse(`${news.newsBody}`)}
                                                                 </p>
                                                                 <div className="mt-12">

                                                                     <a title=""
                                                                         className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
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
                                             Latest Featured News
                                         </p>

                                         <TopRectangleAd />

                                         <div className="mt-6 space-y-5">
                                             {SlicedNews.map((latestnews) =>
                                                 <Link to={latestnews._id}>
                                                     <div
                                                         className="mb-4 relative overflow-hidden transition-all duration-200 bg-black border border-white rounded-lg hover:shadow-lg hover:bg-black hover:-translate-y-1">
                                                         <div className="p-4">
                                                             <div className="flex items-start lg:items-center">
                                                                 <img className="object-cover w-20 h-20 rounded-lg shrink-0"
                                                                     src={latestnews.newsImageUrl} alt="" />
                                                                 <div className="ml-5">
                                                                     <p className="text-sm font-medium text-white">
                                                                         {latestnews.datePublished}
                                                                     </p>
                                                                     <p className="text-lg leading-7 font-bold text-white mt-2.5">
                                                                         <a title="">
                                                                             {latestnews.newsTitle}
                                                                             <span className="absolute inset-0" aria-hidden="true"></span>
                                                                         </a>
                                                                     </p>
                                                                 </div>
                                                             </div>
                                                         </div>
                                                     </div>

                                                 </Link>

                                             )}
                                         </div>
                                     </div>
                                 </div>
                             </div>
                                }
                                   
                                </section>

                                   {FinishWaitingForNews && 
                                    <section class="py-2 bg-black sm:py-2 lg:py-2">
                                    <div>
                                        <div>
                                            <div class="lg:grid lg:grid-cols-12 bg-black lg:gap-x-16 xl:gap-x-24">
                                                <aside class="mt-10 lg:col-span-3 lg:order-last lg:self-start lg:sticky lg:top-8">
                                                    <div class="overflow-hidden bg-black border border-white">
                                                        <div class="px-4 py-5 sm:p-6">
                                                            <h4 class="text-xs font-bold tracking-widest text-white uppercase">Sponsored Ads</h4>

                                                            <ul class="mt-8 space-y-5">
                                                                <li>
                                                                    <a href="#" title="" class="flex text-base font-bold text-white hover:underline">Advertise Here On This Space</a>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                    </div>

                                                    <TopRectangleAd />
                                                </aside>



                                                <div class="lg:col-span-9 bg-black">
                                                    {newsCategories.map((category) =>
                                                        <div className="mapandfilterJoined">
                                                            <div class="sm:flex sm:items-center mt-6 sm:justify-between sm:space-x-8">
                                                                <h2 class="text-lg font-bold text-white"> {category} Articles</h2>

                                                                <div class="mt-6 sm:mt-0 sm:shrink-0">

                                                                    <Link to="/news" onClick={() => { setnewsCategoryFilter(category) }}>
                                                                        <a title="" class="inline-flex items-center text-base font-medium text-white group">
                                                                            View all articles
                                                                            <svg class="w-5 h-5 ml-2 transition-all duration-200 transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                                            </svg>
                                                                        </a>
                                                                    </Link>


                                                                </div>
                                                            </div>

                                                            <div class="grid grid-cols-1 lg:grid-cols-3  md:grid-cols-3 gap-x-6 md:max-w-none">
                                                                {news.filter(news => news.newsCategory === category ).sort().reverse().map((news) =>
                                                                    <Link to={news._id}>
                                                                        <div className="newsCard flex flex-col overflow-hidden transition-all duration-200 transform bg-black 
                                               border border-white shadow group rounded-xl hover:shadow-lg hover:-translate-y-1">
                                                                            <a href="#" title="" className="flex shrink-0 aspect-w-4 aspect-h-3">
                                                                                <img className="newsCardImage object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                                                                                    src={`${news.newsImageUrl}`} alt="" />
                                                                            </a>
                                                                            <div className="flex-1 px-4 py-5 sm:p-6">
                                                                                <a href="#" title="" className="">
                                                                                    <p className="text-lg font-bold text-white">
                                                                                        {news.newsTitle}
                                                                                    </p>
                                                                                    <p className="newsBody mt-3 text-sm font-normal leading-6 text-white line-clamp-3">
                                                                                        {parse(`${news.newsBody}`)}
                                                                                    </p>
                                                                                </a>
                                                                            </div>
                                                                            <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
                                                                                <div className="flex items-center justify-between">
                                                                                    <div className="flex items-center space-x-2">
                                                                                        <p className="text-sm font-medium text-white">
                                                                                            {news.datePublished}
                                                                                        </p>
                                                                                    </div>

                                                                                    <a href="#" title="" className="" role="button">
                                                                                        <svg className="w-5 h-5 text-white transition-all duration-200 group-hover:text-white"
                                                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                                                                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                                            <line x1="17" y1="7" x2="7" y2="17"></line>
                                                                                            <polyline points="8 7 17 7 17 16"></polyline>
                                                                                        </svg>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                )}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </section>
                                   }
                              
                            </div>
                        </section>
                    </section>
                </div>
            </div>

        )
    } else {
        return (
            <div>
                <section className="bg-black">
                    <section className="py-2 bg-black sm:py-2 lg:py-2">
                        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                            <div className="newsfilterTab">
                                <header className="hidden lg:flex bg-black lg:border-b lg:border-gray-200">
                                    <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                                        <div className="flex justify-between h-16">

                                            <div className="flex ml-6 mr-auto xl:ml-0">

                                                <nav className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-12">

                                                    {correctedNewsCategories.map((newsCategory) =>
                                                        <Link to="/news" onClick={() => { setnewsCategoryFilter(newsCategory) }}>
                                                            <a title="" className="correctedNewsCategories text-sm font-medium text-white transition-all duration-200 font-pj hover:text-opacity-50  focus:ring-gray-900 focus:ring-offset-2">
                                                                {newsCategory}
                                                            </a>
                                                        </Link>

                                                    )}

                                                </nav>
                                            </div>

                                        </div>
                                    </div>
                                </header>

                                <p className="text-xl font-bold text-white mt-4">
                                    Displaying {newsCategoryFilter} News Articles ( {newsCategoryFilter.length + 2} )
                                </p>

                            </div>


                            <section className="bg-black mt-8">
                                <div>
                                    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-7 lg:gap-x-12">
                                        <div className="lg:col-span-4 rounded-xl">
                                            {OneSlicedNews.map((news) =>
                                                <Link to={news._id}>
                                                    <section className="bg-black mb-7">
                                                        <div className="max-w-7xl">
                                                            <div className="latestNewsDiv relative overflow-hidden rounded-xl">
                                                                <div className="absolute inset-0">
                                                                    <img className=" object-cover w-full h-full" src={news.newsImageUrl} alt="" />
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
                                                                    <p className="newsBody mt-4 text-base font-normal leading-7 text-white">
                                                                        {parse(`${news.newsBody}`)}
                                                                    </p>
                                                                    <div className="mt-12">

                                                                        <a title=""
                                                                            className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
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
                                                Latest Featured News
                                            </p>

                                            <TopRectangleAd />

                                            <div className="mt-6 space-y-5">
                                                {SlicedNews.map((latestnews) =>
                                                    <Link to={latestnews._id}>
                                                        <div
                                                            className="mb-4 relative overflow-hidden transition-all duration-200 bg-black border border-white rounded-lg hover:shadow-lg hover:bg-black hover:-translate-y-1">
                                                            <div className="p-4">
                                                                <div className="flex items-start lg:items-center">
                                                                    <img className="object-cover w-20 h-20 rounded-lg shrink-0"
                                                                        src={latestnews.newsImageUrl} alt="" />
                                                                    <div className="ml-5">
                                                                        <p className="text-sm font-medium text-white">
                                                                            {latestnews.datePublished}
                                                                        </p>
                                                                        <p className="text-lg leading-7 font-bold text-white mt-2.5">
                                                                            <a title="">
                                                                                {latestnews.newsTitle}
                                                                                <span className="absolute inset-0" aria-hidden="true"></span>
                                                                            </a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </Link>

                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section class="py-2 bg-black sm:py-2 lg:py-2">
                                <p className="text-xl font-bold text-white">
                                    All {newsCategoryFilter} News Articles
                                </p>
                                <div>
                                    <div>
                                        <div class="lg:grid lg:grid-cols-12 bg-black lg:gap-x-16 xl:gap-x-24">
                                            <div class="lg:col-span-12 bg-black">
                                                <div class="grid grid-cols-1 lg:grid-cols-4 sm:mt-7 md:grid-cols-3 gap-x-6 md:max-w-none">
                                                    {news.filter(news => news.newsCategory === newsCategoryFilter).sort().reverse().map((news) =>
                                                        <Link to={news._id}>
                                                            <div className="newsCard flex flex-col overflow-hidden transition-all duration-200 transform bg-black 
                                                                    border border-white shadow group rounded-xl hover:shadow-lg hover:-translate-y-1">
                                                                <a href="#" title="" className="flex shrink-0 aspect-w-4 aspect-h-3">
                                                                    <img className="newsCardImage object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                                                                        src={`${news.newsImageUrl}`} alt="" />
                                                                </a>
                                                                <div className="flex-1 px-4 py-5 sm:p-6">
                                                                    <a href="#" title="" className="">
                                                                        <p className="text-lg font-bold text-white">
                                                                            {news.newsTitle}
                                                                        </p>
                                                                        <p className="newsBody mt-3 text-sm font-normal leading-6 text-white line-clamp-3">
                                                                            {parse(`${news.newsBody}`)}
                                                                        </p>
                                                                    </a>
                                                                </div>
                                                                <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
                                                                    <div className="flex items-center justify-between">
                                                                        <div className="flex items-center space-x-2">
                                                                            <p className="text-sm font-medium text-white">
                                                                                {news.datePublished}
                                                                            </p>
                                                                        </div>

                                                                        <a href="#" title="" className="" role="button">
                                                                            <svg className="w-5 h-5 text-white transition-all duration-200 group-hover:text-white"
                                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                                <line x1="17" y1="7" x2="7" y2="17"></line>
                                                                                <polyline points="8 7 17 7 17 16"></polyline>
                                                                            </svg>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>
                    </section>
                </section>
            </div>
        )
    }
}



export default NewsByCategory