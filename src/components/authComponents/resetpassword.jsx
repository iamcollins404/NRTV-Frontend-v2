import React from 'react'
import { Link } from "react-router-dom";
import AuthBackground from '../../assets/images/authBackground.webp'
import OTPInput, { ResendOTP } from "otp-input-react";

function ResetPassword() {
  const [OTP, setOTP] = React.useState("");

  return (
    <section className="relative py-10 sm:py-16 lg:py-24">
      <div className="absolute inset-0">
        <img className="authbackgroundImage object-cover w-full h-full" src={AuthBackground} alt="" />
      </div>

      <div className="relative max-w-lg px-4 mx-auto sm:px-0">
        <div className="overflow-hidden  bg-gray-200 rounded-md shadow-md">
          <div className="px-4 py-6 sm:px-8 sm:py-7">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Reset New Password</h2>
            </div>

            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">

                <div>
                <label for="" className="text-base font-medium text-gray-900">Enter OTP Code Send to Your Phone Number </label>
                <div className="mt-2 5">
                <OTPInput className="OtpForms sm:px-10 px-10" value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false} />
                  <ResendOTP onResendClick={() => console.log("Resend clicked")} />
                </div>
                </div>

                <div>
                  <label for="" className="text-base font-medium text-gray-900">Phone Number </label>
                  <div className="mt-2.5">
                    <input type="email" name="" id="" placeholder="Enter phone number to get started" className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                  </div>
                </div>

                <div>
                  <label for="" className="text-base font-medium text-gray-900">New Password </label>
                  <div className="mt-2.5">
                    <input type="password" name="" id="" placeholder="Enter your password" className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                  </div>
                </div>

                <div>
                  <label for="" className="text-base font-medium text-gray-900">Confirm New Password </label>
                  <div className="mt-2.5">
                    <input type="password" name="" id="" placeholder="Re - Enter your new password" className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                  </div>
                </div>

                <div>
                  <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">Set New Password</button>
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

export default ResetPassword