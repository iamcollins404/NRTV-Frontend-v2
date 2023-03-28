import React from 'react'
import axios from 'axios'
import Successmessage from '../authComponents/messages/successmessage'
import LoadingButton from '../authComponents/messages/loadingButton'

function AddNewProduct() {
  const [productName, setproductName] = React.useState()
  const [productImageUrl, setproductImageUrl] = React.useState()
  const [productCategory, setproductCategory] = React.useState()
  const [productDescription, setproductDescription] = React.useState()
  const [productPrice, setproductPrice] = React.useState()
  const [productQuantity, setproductQuantity] = React.useState()
  const dateAdded = "dateAdded"

  const [successMessage, setSuccessMessage] = React.useState()
  const [error, seterror] = React.useState()
  const [processing, setProcessing] = React.useState()
  const [done, setDone] = React.useState(false)

  const uploadFile = (files) => {
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
        setproductImageUrl(data.url)
        console.log(data.url)
      })
  }

  const formSubmit = (e) => {
    e.preventDefault();
    setProcessing(true)
    axios.post("http://localhost:5000/shop/addnewproduct",
      {
        productName,
        dateAdded,
        productImageUrl,
        productCategory,
        productDescription,
        productPrice,
        productQuantity
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

  if (done) {
    return (
      <div className="text-center">
        <h2 className='mb-5'>
          PRODUCT SUCCESSFULLY ADDED YOU CAN CLOSE THE MODAL NOW.
        </h2>
      </div>
    )
  } else {
    return (
      <form onSubmit={formSubmit}>
        <div className="py-8 bg-white">
          <div className="mb-5 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-xl mx-auto">
              <div className="text-center">
                <h2 className='text-bold mb-5'>
                  ADD SHOP PRODUCTS
                </h2>
              </div>
              <div>
                <label htmlFor="" className="block text-sm font-bold text-gray-900">Product Name</label>
                <div className="mt-2">
                  <input type="text" name="" id="" placeholder="" value={productName}
                    onChange={(e) => setproductName(e.target.value)} className="block w-full px-4 py-3 placeholder-gray-500 
                  border-gray-300 border rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-5 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-xl mx-auto">
              <div>
                <label htmlFor="" className="mb-4 block text-sm font-bold text-gray-900">Product Image URL</label>
                <div className="relative sm:mt-0 sm:flex-1">
                  <input type="file" onChange={(e) => uploadFile(e.target.files)} className="block w-full px-4 border py-3 placeholder-gray-500
                   border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-5 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-xl mx-auto">
              <div>
                <label htmlFor="" className="block text-sm font-bold text-gray-900">Please Choose Product Category</label>
                <div className="relative mt-2">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>

                  <select className="block w-full py-3 pl-12 pr-10 border-gray-300 border 
                  rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                    value={productCategory} onChange={(e) => setproductCategory(e.target.value)}>
                    <option>Choose product category</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Stationery">Stationery</option>
                    <option value="Kitchen Appliances">Kitchen Appliances</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-5 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-xl mx-auto">
              <div>
                <label htmlFor="" className="block text-sm font-bold text-gray-900">Product Description</label>
                <div className="relative mt-2">
                  <div className="absolute top-0 left-0 flex items-center pt-4 pl-4 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                  <textarea name="" id="" placeholder="Write product description" value={productDescription}
                    rows="3" className="border block w-full py-3 pl-12 pr-4 placeholder-gray-500 border-gray-300 rounded-lg 
                  resize-y focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                    onChange={(e) => setproductDescription(e.target.value)}></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-5 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-xl mx-auto">
              <div>
                <label htmlFor="" className="block text-sm font-bold text-gray-900">Product Price</label>
                <div className="relative flex mt-2">
                  <input type="number" name="" id="" placeholder="$ 0.00"
                    value={productPrice} onChange={(e) => setproductPrice(e.target.value)} className="border flex-1 block w-full min-w-0 py-3 pl-4 pr-16 
                  placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-900 rounded-r-lg pointer-events-none sm:text-sm">USD</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-5 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-xl mx-auto">
              <div>
                <label htmlFor="" className="block text-sm font-bold text-gray-900">Product Quantity</label>
                <div className="mt-2">
                  <input type="text" name="" id="" placeholder="" value={productQuantity} onChange={(e) => setproductQuantity(e.target.value)} className="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 border rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                </div>
              </div>
            </div>
          </div>

          {/* submit button */}
          <div className="mb-5 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-xl mx-auto">
              <div className='my-4'>
                {
                  successMessage && <Successmessage message={successMessage} />
                }
              </div>

              <div>
                {
                  !processing && <div>
                    <button
                      type="submit"
                      class="inline-flex items-center justify-center px-6 py-3 text-sm  w-full
                font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
                    >
                      <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                      </svg>
                      ADD PRODUCT
                    </button>
                  </div>

                  || <LoadingButton />
                }
              </div>
            </div>
          </div>


        </div>
      </form>
    )
  }

}

export default AddNewProduct