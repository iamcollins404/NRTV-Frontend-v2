import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// import messages
import ErrorMessage from '../../components/authComponents/messages/errormessage'
import SuccessMessage from '../../components/authComponents/messages/successmessage'

const MyForm = () => {
    const [error, setError] = React.useState("")
    const [successMessage, setSuccessMessage] = React.useState("")
    const [proccessing, setProccessing] = React.useState(false)

    const [availableAssets, setAvailableAssets] = useState([]);

    const [requesterEmployeeId, setRequesterEmployeeId] = useState('');
    const [requesterName, setRequesterName] = useState('');
    const [requestedForLocation, setRequestedForLocation] = useState('');
    const [requestDescription, setRequestDescription] = useState('');
    const [requestJustification, setRequestJustification] = useState('');
    const [assetsRequested, setAssetsRequested] = useState([]);

    useEffect(() => {
        const fetchAssets = async () => {
            try {
                const response = await fetch('https://forallassets-dnjfa.ondigitalocean.app/assets/all');
                if (response.ok) {
                    const data = await response.json();
                    setAvailableAssets(data);
                } else {
                    throw new Error('Failed to fetch assets');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchAssets();
    }, []);

    const handleAssetChange = (e) => {
        const assetId = e.target.value;
        const asset = availableAssets.find((asset) => asset.assetId === assetId);

        if (e.target.checked) {
            setAssetsRequested([...assetsRequested, asset]);
        } else {
            const updatedAssets = assetsRequested.filter((asset) => asset.assetId !== assetId);
            setAssetsRequested(updatedAssets);
        }
    };
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestData = {
            requesterEmployeeId,
            requesterName,
            requestedForLocation,
            requestDescription,
            requestJustification,
            assetsRequested,
        };

        try {
            setProccessing(true)
            const response = await fetch('https://forallassets-dnjfa.ondigitalocean.app/assetsrequests/addnew', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            if (response.ok) {
                setProccessing(false)
                setError("")
                setSuccessMessage("Successfully added request. Please wait a second ....")
                console.log('Request submitted successfully');

                setRequestedForLocation('')
                setRequestDescription('')
                setRequestJustification('')
                setAssetsRequested([])

                const timeOut = setTimeout(navigateFunction, 1000)

                function navigateFunction() {
                    navigate("/portal/assets/requests");
                }

            } else {
                // throw new Error('Failed to submit request');
                setProccessing(false)
                setSuccessMessage("")
                setError('Failed to submit request')
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="mt-8 py-5 requestFormBackground px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <form className="px-8 requestForm" onSubmit={handleSubmit}>
                <div className="messagesDiv my-3">
                    {
                        error && <ErrorMessage message={error} />
                    }

                    {
                        successMessage && <SuccessMessage message={successMessage} />
                    }
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-white" htmlFor="requesterEmployeeId">
                        Requester Employee ID
                    </label>

                    <input
                        type="text"
                        id="requesterEmployeeId"
                        name="requesterEmployeeId"
                        value={requesterEmployeeId}
                        onChange={(e) => setRequesterEmployeeId(e.target.value)}
                        className="w-full px-4 py-2 border border-white rounded focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-white" htmlFor="requesterName">
                        Requester Name
                    </label>
                    <input
                        type="text"
                        id="requesterName"
                        name="requesterName"
                        value={requesterName}
                        onChange={(e) => setRequesterName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-white" htmlFor="requestedForLocation">
                        Requested For Location
                    </label>
                    <input
                        type="text"
                        id="requestedForLocation"
                        name="requestedForLocation"
                        value={requestedForLocation}
                        onChange={(e) => setRequestedForLocation(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-white" htmlFor="requestDescription">
                        Request Description
                    </label>
                    <textarea
                        id="requestDescription"
                        name="requestDescription"
                        value={requestDescription}
                        onChange={(e) => setRequestDescription(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-white" htmlFor="requestJustification">
                        Request Justification
                    </label>
                    <textarea
                        id="requestJustification"
                        name="requestJustification"
                        value={requestJustification}
                        onChange={(e) => setRequestJustification(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                <div className="py-5 requestFormBackground">
                    <div className="mb-4 requestedAssets">
                        <h3 className="mb-2">Choose the assets from the available options below:</h3>
                        <div className="inline-flex">
                            {availableAssets.map((asset) => (
                                <label key={asset.assetId} className="inline-flex items-center mr-4">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox"
                                        value={asset.assetId}
                                        onChange={handleAssetChange}
                                    />
                                    <span className="ml-2 text-white">{asset.asssetName}</span>
                                </label>
                            ))}
                        </div>
                        <div>
                            <h4 className="font-bold font-underline mb-1 mt-2 text-white">Assets To Be Requested:</h4>
                            <ul>
                                {assetsRequested.map((asset) => (
                                    <li key={asset._id}>
                                        <h5 className="text-white">
                                            {asset.asssetName}
                                        </h5>
                                        <h5 className="text-white">
                                            (ID: {asset.assetId})
                                        </h5>

                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {
                        proccessing && <button className='w-full px-8 py-4 mt-5 w-full text-white bg-gray-100 hover:bg-gray-200 
                  ring-offset-2 focus:ring rounded-lg'>
                            Adding Request. Please Wait ...
                        </button>

                        ||

                        <button type="submit" className="flex items-center justify-center w-full px-8 py-4 mt-5 text-base font-bold 
                  text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl focus:outline-none 
                  focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-gray-600">Add Request </button>
                    }
                </div>
            </form>
        </div>
    );
};

const App = () => {
    return (
        <div className="App">
            {/* <h1>Request Form</h1> */}
            <MyForm />
        </div>
    );
};

export default App;
