import React from 'react'

function errormessage(props) {
    const message = props.message
  return (
    <div>
        <div class="max-w-2xl mx-auto my-6">
            <div class="border border-yellow-300 rounded-lg bg-yellow-50 text-center">
                <div class="p-3">
                    <div class="flex items-start justify-between">
                        <svg style={{ color: 'red' }} class="flex-shrink-0 w-5 h-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div class="ml-3">
                            <p style={{ color: 'red' }} class="text-sm font-bold text-yellow-900">{message}</p>
                        </div>

                        <div class="pl-3 ml-auto">
                            <button type="button" class="inline-flex bg-yellow-50 rounded-lg -m1.5 p-1.5 text-yellow-500 hover:bg-yellow-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-50 focus:ring-yellow-500">
                                {/* <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg> */}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default errormessage