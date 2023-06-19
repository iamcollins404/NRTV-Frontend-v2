import React from 'react';
import NavBar from '../components/landingComponents/NavBar'
import Footer from '../components/landingComponents/Footer'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NotFoundPage = () => {
  const { pathname } = useLocation(); 

    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

  return (
    <div>
      <NavBar />
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="max-w-lg p-8 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-4xl text-gray-200 font-bold mb-4">Page Not Found</h2>
          <p className="text-gray-300 mb-6">
            Oops! The page you are looking for could not be found. Please check the URL or return to the homepage.
          </p>

          <Link to="/">
            <a className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
              Return to Homepage
            </a>
          </Link>
        </div>
      </div>
      <Footer />
    </div>

  );
};

export default NotFoundPage;
