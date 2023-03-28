import React from 'react'

function loadingButton() {
    return (
        <div>
            <div>
                <button disabled className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-black transition-all duration-200 bg-gray-300 border 
                  border-transparent rounded-md focus:outline-none hover:bg-gray-300 focus:bg-gray-300">
                    Processing. Wait A Sec
                  </button>
            </div>
        </div>
    )
}

export default loadingButton