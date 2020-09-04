import React, { useEffect, useState } from 'react';

function Purchases(props) {
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        setPurchases(props.purchases);
    }, []);

	return (
		<div>
			<h1 className="text-2xl font-semibold text-gray-900 py-6">
				Purchases
			</h1>
            <div className="bg-white overflow-hidden rounded-lg">
                <ul>
                    {purchases.map((purchase) => {
                        return (
                            <li>
                                <a href="#" className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out hover:no-underline">
                                    <div className="px-4 py-4 sm:px-6">
                                        <div className="flex items-center justify-between">
                                            <div className="text-sm leading-5 font-medium text-indigo-600 truncate">
                                                {purchase.name}
                                            </div>
                                            <div className="ml-2 flex-shrink-0 flex">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    {purchase.status}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mt-2 sm:flex sm:justify-between">
                                            <div className="sm:flex">
                                                <div className="mr-6 flex items-center text-sm leading-5 text-gray-500">
                                                    {purchase.description}
                                                </div>
                                            </div>
                                            <div className="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                                                <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                </svg>
                                                <span>
                                                    Closing on
                                                    <time dateTime="2020-01-07">January 7, 2020</time>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        )})}
                </ul>
            </div>
		</div>
	);
}

export default Purchases;
