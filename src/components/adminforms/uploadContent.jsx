import React from 'react'
import axios from 'axios'

function UploadContent() {
  const [contentTitle, setcontentTitle] = React.useState()
  const [contentCoverImageUrl, setcontentCoverImageUrl] = React.useState()
  const [contentCategory, setcontentCategory] = React.useState()
  const [contentDescription, setcontentDescription] = React.useState()
  const [contentWatchUrl, setcontentWatchUrl] = React.useState()
  const contentDuration = "contentDuration"
  const dateUploaded = "dateUploaded"

  const [successMessage, setSuccessMessage] = React.useState()
  const [error, seterror] = React.useState()
  const [processing, setProcessing] = React.useState()
  const [done, setDone] = React.useState(false)

  const uploadImage = (files) => {
    const formData = new FormData()
    formData.append("file", files[0])
    formData.append("upload_preset", "ml_default")
    formData.append("cloud_name", "dtfrcp8ro")

    fetch("https://api.cloudinary.com/v1_1/dtfrcp8ro/image/upload", {
      method: "post",
      body: formData
    })
      .then((res) => res.json())
      .then((data) => {
        setcontentCoverImageUrl(data.url)
        console.log(data.url)
      })
  }

  const formSubmit = (e) => {
    e.preventDefault();
    setProcessing(true)
    axios.post("http://localhost:5000/watch/addnewcontent/",
      {
        contentTitle,
        contentCoverImageUrl,
        contentCategory,
        contentDescription,
        contentDuration,
        dateUploaded,
        contentWatchUrl
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    )
      .then(function (response) {
        seterror("")
        setSuccessMessage("Successfully added news article. Redirecting you now!")

        const timeOut = setTimeout(navigateFunction, 1000)

        function navigateFunction() {
          setDone(true)
        }
      })
      .catch(function (error) {
        setProcessing(false)
        console.log(error)
      });
  };

  return (
    <form onSubmit={formSubmit}>
      <div className="py-8 bg-white">
        <div className="mb-5 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-xl mx-auto">
          <div className="text-center">
                <h2 className='text-bold mb-5'>
                  ADD NEW CONTENT
                </h2>
              </div>
            <div>
              <label htmlFor="" className="block text-sm font-bold text-gray-900">Content Title</label>
              <div className="mt-2">
                <input type="text" name="" id="" placeholder="" value={contentTitle} 
                onChange={(e) => setcontentTitle(e.target.value)} className="block w-full px-4 py-3 
                placeholder-gray-500 border-gray-300 border rounded-lg focus:ring-indigo-600 
                focus:border-indigo-600 sm:text-sm caret-indigo-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-xl mx-auto">
            <div>
              <label htmlFor="" className="mb-4 block text-sm font-bold text-gray-900">Content Cover ImageUrl</label>
              <div className="relative sm:mt-0 sm:flex-1">
                <input type="file" onChange={(e) => uploadImage(e.target.files)}
                className="block w-full px-4 border py-3 placeholder-gray-500 
                border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-xl mx-auto">
            <div>
              <label htmlFor="" className="block text-sm font-bold text-gray-900">Content Category</label>
              <div className="relative mt-2">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>

                <select className="block w-full py-3 pl-12 pr-10 border-gray-300 border rounded-lg 
                focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm" 
                value={contentCategory} onChange={(e) => setcontentCategory(e.target.value)}>
                  <option>Choose product category</option>
                  <option value="Live">Live</option>
                  <option value="News">News</option>
                  <option value="Sports">Sports</option>
                  <option value="Kids">Kids</option>
                  <option value="Movies and Drama">Movies and Drama</option>
                  <option value="Reality Shows">Reality Shows</option>
                  <option value="Documentaries">Documentaries</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-xl mx-auto">
            <div>
              <label htmlFor="" className="mb-4 block text-sm font-bold text-gray-900">Content Video Url</label>
              <div>
              <div className="mt-2">
                <input type="text" name="" id="" placeholder="" value={contentWatchUrl} 
                onChange={(e) => setcontentWatchUrl(e.target.value)} className="block w-full px-4 py-3 
                placeholder-gray-500 border-gray-300 border rounded-lg focus:ring-indigo-600 
                focus:border-indigo-600 sm:text-sm caret-indigo-600" />
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="mb-5 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-xl mx-auto">
            <div>
              <label htmlFor="" className="block text-sm font-bold text-gray-900">Content Description</label>
              <div className="relative mt-2">
                <div className="absolute top-0 left-0 flex items-center pt-4 pl-4 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <textarea name="" id="" placeholder="Write the description....." 
                value={contentDescription} rows="3" className="border block w-full py-3 pl-12 pr-4
                 placeholder-gray-500 border-gray-300 rounded-lg resize-y focus:ring-indigo-600 
                 focus:border-indigo-600 sm:text-sm caret-indigo-600" onChange={(e) => setcontentDescription(e.target.value)}></textarea>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-xl mx-auto">
            <div>
              <label htmlFor="" className="block text-sm font-bold text-gray-900">Content Duration</label>
              <div className="mt-2">
                <input type="text" name="" id="" placeholder="" value={contentDuration} className="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 border rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
              </div>
            </div>
          </div>
        </div>

        {/* submit button */}
        <div className="mb-5 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-xl mx-auto">
            <button
              type="submit"
              class="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
            >
              <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
              UPLOAD CONTENT
            </button>
          </div>
        </div>

      </div>
    </form>
  )
}

export default UploadContent