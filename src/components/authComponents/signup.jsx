import React from 'react'
import { Link } from "react-router-dom"
import AuthBackground from '../../assets/images/authBackground.webp'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import Errormessage from './messages/errormessage'
import Successmessage from './messages/successmessage'
import LoadingButton from './messages/loadingButton'

function Signup() {
  const navigate = useNavigate()

  const [error, seterror] = React.useState("")
  const [successMessage, setSuccessMessage] = React.useState("");
  const [processing, setProcessing] = React.useState(false);

  const [phoneNumber, setPhoneNumber] = React.useState("")
  const [fullname, setFullname] = React.useState("")
  const [rawPassword, setrawPassword] = React.useState("")
  const avatarUrl = "avatarUrl"

  const formSubmit = (e) => {
    setProcessing(true)
    e.preventDefault();
    axios.post("https://hammerhead-app-4pz5b.ondigitalocean.app/auth/signup",
      {
        phoneNumber,
        fullname,
        rawPassword,
        avatarUrl
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    )
      .then(function (response) {
        seterror("")
        setSuccessMessage("Congradulations your account has been successfully created. Please wait we are logging you in now!")

        const timeOut = setTimeout(navigateFunction, 2000)

        function navigateFunction() {
          navigate("/account");
        }
      })
      .catch(function (error) {
        setProcessing(false)
        seterror(error.response.data.message);
      });
  };

  return (
    <section className="relative py-10 bg-gray-900 sm:py-16 lg:py-24">
      <div className="absolute inset-0">
        <img className="authbackgroundImage object-cover w-full h-full" src={AuthBackground} alt="" />
      </div>
      <div className="absolute inset-0 bg-gray-900/20"></div>

      <div className="relative max-w-lg px-4 mx-auto sm:px-0">
        <div className="overflow-hidden bg-white rounded-md shadow-md">
          <div className="px-4 py-6 sm:px-8 sm:py-7">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Create an Account</h2>

              <p className="mt-2 text-base text-gray-600">Already joined?
                <Link to="/auth/login">
                  <p className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700">Sign in now</p>
                </Link>
              </p>
              <div className="errorDiv mt-4">
                {
                  error && <Errormessage message={error} />
                }

                {
                  successMessage && <Successmessage message={successMessage} />
                }
              </div>
            </div>

            <form method="POST" onSubmit={formSubmit} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label for="" className="text-base font-medium text-gray-900">Phone Number</label>
                  <div className="mt-2.5">
                    <input type="text" name="" id="" placeholder="Enter phone number to get started"
                      value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 
                    bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                  </div>
                </div>

                <div>
                  <label for="" className="text-base font-medium text-gray-900">Full Name</label>
                  <div className="mt-2.5">
                    <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder="Full Name starting with First Name"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200
                     bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 
                     caret-blue-600" />
                  </div>
                </div>

                <div>
                  <label for="" className="text-base font-medium text-gray-900">Password</label>
                  <div className="mt-2.5">
                    <input type="password" value={rawPassword}
                      onChange={(e) => setrawPassword(e.target.value)} placeholder="Enter your password" className="block w-full p-4 
                    text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md 
                    focus:outline-none focus:border-blue-600 caret-blue-600" />
                  </div>
                </div>

                {/* <div>
                  <label for="" className="text-base font-medium text-gray-900"> Confirm Password </label>
                  <div className="mt-2.5">
                    <input type="password" name="" id="" placeholder="Re - Enter your password" className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                  </div>
                </div> */}



                {
                  !processing &&
                  <div>
                    <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base 
                  font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent 
                  rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">Sign up</button>
                  </div>
                  || <LoadingButton />
                }


                <div>
                  <button type="button" className=" relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md
                              hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                  >
                    <div className="absolute inset-y-0 left-0 p-4">
                      <svg className="w-auto h-5 mr-4" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M3.01572 11.2916C2.93722 11.2916 1.29047 11.2921 0.530973 11.2914C0.139973 11.2911 0.000473347 11.1506 0.000473347 10.7571C-2.66523e-05 9.7464 -0.000276652 8.73565 0.000473347 7.7249C0.000723347 7.3364 0.148223 7.18815 0.534223 7.1879C1.29372 7.1874 2.93147 7.18765 3.01572 7.18765C3.01572 7.1184 3.01547 5.65915 3.01572 4.98715C3.01622 3.99365 3.19347 3.04265 3.69822 2.1719C4.21497 1.28065 4.96697 0.670154 5.93072 0.317154C6.54797 0.0909041 7.18872 0.000654262 7.84372 0.000154262C8.66322 -0.000345738 9.48272 0.000404254 10.3025 0.00190425C10.6547 0.00240425 10.811 0.158154 10.8117 0.512904C10.8132 1.46365 10.8132 2.4144 10.8117 3.3649C10.8112 3.7234 10.6615 3.8674 10.3012 3.8714C9.62947 3.87865 8.95722 3.87415 8.28622 3.90115C7.60847 3.90115 7.25197 4.23215 7.25197 4.93365C7.23572 5.67565 7.24522 6.4184 7.24522 7.1874C7.30872 7.1874 9.23747 7.18715 10.139 7.1874C10.5485 7.1874 10.6885 7.32815 10.6885 7.7399C10.6885 8.74515 10.6882 9.75065 10.6875 10.7559C10.6872 11.1616 10.5557 11.2911 10.1437 11.2914C9.24222 11.2919 7.32097 11.2916 7.23697 11.2916V19.4279C7.23697 19.8616 7.10047 19.9999 6.67247 19.9999C5.62897 19.9999 4.58522 20.0001 3.54172 19.9999C3.16347 19.9999 3.01597 19.8529 3.01597 19.4746C3.01572 16.8249 3.01572 11.3846 3.01572 11.2916Z"
                          fill="#3D6AD6"
                        />
                      </svg>

                    </div>

                    Sign up with Facebook
                  </button>
                </div>

                <div>
                  <button type="button" className=" relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md
                              hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                  >
                    <div className="absolute inset-y-0 left-0 p-4">
                      <img className="w-5 h-5 mr-2" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/sign-in/1/google-logo.svg" alt="" />
                    </div>
                    Sign up with Google
                  </button>
                </div>

              </div>
            </form>

            <p className="max-w-xs mx-auto mt-5 text-sm text-center text-gray-600">
              This site is protected by reCAPTCHA and the Google <a href="#" title="" className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700">Privacy Policy</a> &
              <a href="#" title="" className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup