import React from 'react'

function Successmessage(props) {
    const message = props.message
  return (
    <div>
    <div class="bg-green-100 rounded-lg">
        <div class="p-3">
            <div class="flex items-center justify-between">
                <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <p class="ml-3 text-sm font-medium text-green-900">
                    {message}
                </p>

                <div class="pl-3 ml-auto">
                    <button type="button" class="inline-flex bg-green-100 rounded-lg -m1.5 p-1.5 text-green-500 hover:bg-green-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-100 focus:ring-green-500">
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Successmessage