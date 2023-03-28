import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactGA from 'react-ga';

import PrivateRoutes from "../src/components/authComponents/PrivateRoutes"

// import Landing Pages
import Index from './pages/index'
import Shop from './pages/shop'
import About from './pages/about'
import Contact from './pages/contact'
import Watch from './pages/watchtv'
import News from './pages/news'
import NewsArticlePage from './pages/newsarticle'

// import not found page
import NotFoundPage from './pages/notFound'

// import user account aunthentication pages
import Login from './pages/auth/login'
import Signup from './pages/auth/signup'
import ForgotPassword from './pages/auth/forgotpassword'
import ResetPassword from './pages/auth/resetpassword'

// logged in account
import AccountBrowse from './pages/account'
import LiveTVBroadCast from './pages/account/live'
import MoviesandDrama from './pages/account/moviesanddrama'
import Documentaries from './pages/account/documentaries'
import Entertainment from './pages/account/entertainment'
import Sports from './pages/account/sports'
import Kids from './pages/account/kids'
import Reality from './pages/account/realityshows'
import NewsContent from './pages/account/news'
import AdminCorner from './pages/account/admincorner'
import AdminCornerAddNews from './pages/account/admincornerAddNews.'
import AnalyticsPage from './pages/account/analytics'
import { Analytics } from '@vercel/analytics/react';
import Videoplayer from './components/account/videoplayer'

ReactGA.initialize('G-7H1934RVJQ');

function App() {
  React.useEffect(()=>{
    ReactGA.pageview(window.location.pathname + window.location.search);
  })
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:articleId" element={<NewsArticlePage />} />

          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* auth routes */}
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/forgotpassword" element={<ForgotPassword />} />
          <Route path="/auth/resetpassword/:userId" element={<ResetPassword />} />

          {/* private protected routes */}
          <Route element={<PrivateRoutes />}>
            {/* account pages */}
            <Route path="/account" element={<AccountBrowse />} />
            <Route path="/account/watch/:videoId" element={<Videoplayer />} />
            <Route path="/account/watch/live" element={<LiveTVBroadCast />} />
            <Route path="/account/watch/moviesanddrama" element={<MoviesandDrama />} />
            <Route path="/account/watch/entertainment" element={<Entertainment />} />
            <Route path="/account/watch/documentaries" element={<Documentaries />} />
            <Route path="/account/watch/sports" element={<Sports />} />
            <Route path="/account/watch/kids" element={<Kids />} />
            <Route path="/account/watch/realityshows" element={<Reality />} />
            <Route path="/account/watch/news" element={<NewsContent />} />
            <Route path="/account/admincorner" element={<AdminCorner />} />
            <Route path="/account/admincorner/addnews" element={<AdminCornerAddNews />} />
            <Route path="/account/admin-analytics" element={<AnalyticsPage />} />
          </Route>

          {/* not found page */}
          <Route path='*' element={< NotFoundPage />} />
        </Routes>

        <Analytics />
      </BrowserRouter>

    </div>
  );
}

export default App;