import React from 'react'
import NavBar from '../components/landingComponents/NavBar'
import NewsByCategory from '../components/landingComponents/NewsByCategory'
import Footer from '../components/landingComponents/Footer'
import axios from 'axios'
import { useParams } from "react-router-dom"
import parse from 'html-react-parser';
import { Loading, Grid } from "@nextui-org/react";
import ReactGA from 'react-ga';
import { Helmet } from "react-helmet";
import TopRectangleAd from '../components/landingComponents/topRectangleAd'

function News() {

    React.useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    })

    // const [newsLoading, setNewsLoading] = React.useState(true)

    // const timeOut = setTimeout(navigateFunction, 2000)

    // function navigateFunction() {
    //     setNewsLoading(false)
    // }

    const theParam = useParams()

    const articleId = theParam.articleId

    const [article, setArticle] = React.useState([])

    // Make a request and get news article
    React.useEffect(() => {
        axios.get(`https://hammerhead-app-4pz5b.ondigitalocean.app/news/article/${articleId}`)
            .then(function (response) {

                // handle success
                setArticle(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    });

    return (
        <div>
            <NavBar />
            {
                article.map((article) =>
                    <section class="py-2 bg-black sm:py-2 lg:py-2">
                        <Helmet>
                            <meta charSet="utf-8" />
                            <title>NRTV - {article.newsTitle}</title>
                            <link rel="canonical" href="http://mysite.com/example" />
                        </Helmet>

                        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                            <div class="mt-12 sm:mt-16 lg:grid lg:grid-cols-12 lg:gap-x-16 xl:gap-x-24">
                                <aside class="lg:col-span-4 lg:order-last lg:self-start lg:sticky lg:top-8">
                                    <div class="overflow-hidden bg-black border border-white">
                                        <div class="px-4 py-5 sm:p-6">
                                            <h4 class="text-xs font-bold tracking-widest text-gray-400 uppercase">Sponsored Ads</h4>

                                            <ul class="mt-8 space-y-5">
                                                <li>
                                                    <a href="#" title="" class="flex text-base font-bold text-gray-500 hover:underline">Advertise Here On This Space</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <TopRectangleAd />
                                </aside>
                                
                                <article
                                    class="mt-12 prose lg:mt-0 lg:prose-lg lg:col-span-8 prose-blockquote:lg:text-xl prose-blockquote:lg:leading-9 prose-blockquote:not-italic prose-blockquote:border-none prose-blockquote:text-lg prose-blockquote:leading-8 prose-blockquote:p-0 prose-blockquote:lg:p-0 prose-blockquote:font-medium prose-blockquote:text-gray-900"
                                >
                                    <img class="w-full my-5 newsAricleImage" src={article.newsImageUrl} alt="" />
                                    <TopRectangleAd />
                                    <div class="max-w-2xl">
                                        <h1 class="text-4xl font-bold text-white sm:text-5xl">{article.newsTitle}</h1>
                                        <p class="mt-6 text-base font-bold font-medium text-white">by {article.writtenBy}</p>
                                        <p class="text-base font-bold font-medium text-white mb-10">{article.datePublished}</p>
                                    </div>

                                    <p class="text-md text-white">
                                        {parse(`${article.newsBody}`)}
                                    </p>
                                </article>
                            </div>
                        </div>
                    </section>
                )
            }

            <Footer />
        </div>
    )
}

export default News