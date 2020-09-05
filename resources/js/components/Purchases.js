import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PurchasesService from '../services/PurchasesService';
import { isEmpty } from 'lodash';

function Purchases(props) {
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        PurchasesService._index(props.project?.id)
            .then((response) => {
                setPurchases(response);
            })
    }, []);

    const toggleDetails = (id) => {
        $('#purchase_details_'+id).slideToggle(400);
    }

	return (
		<div className="mb-20">
			<h1 className="text-2xl font-semibold text-gray-900 py-6">
				Purchases
			</h1>
            <div className="bg-white rounded-lg">
                <ul>
                    {!isEmpty(purchases) && purchases.map((purchase) => {
                        return (
                            <li key={purchase.id} className="border-b-2 border-gray-200">
                                <button onClick={() => toggleDetails(purchase.id)} className="w-full hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out hover:no-underline">
                                    <div className="px-4 py-3 sm:px-6">
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
                                        <div className="sm:flex sm:justify-between">
                                            <div className="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                                                <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-gray-400">Purchased:</span>&nbsp;{purchase.purchased}
                                            </div>
                                            <div className="mt-2 flex items-center text-sm leading-5 text-gray-700 sm:mt-0">
                                                Details&nbsp;
                                                <FontAwesomeIcon 
                                                    id={"purchase_details_chevron_"+purchase.id}
                                                    icon="chevron-down"
                                                    size="sm"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </button>

                                <div className="px-4 py-3" id={"purchase_details_"+purchase.id} style={{ display: 'none' }}>
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                                        Purchase Details
                                    </h3>
                                    <div className="pt-3">
                                        <dl>
                                            <div className="sm:grid sm:grid-cols-3 sm:gap-4">
                                                <dt className="text-sm leading-5 font-medium text-gray-500">
                                                    Price Total
                                                </dt>
                                                <dd className="text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                                    ${purchase.price_total}
                                                </dd>
                                            </div>
                                            <div className="mt-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-2">
                                                <dt className="text-sm leading-5 font-medium text-gray-500">
                                                    Price
                                                </dt>
                                                <dd className="text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                                    ${purchase.price}
                                                </dd>
                                            </div>
                                            <div className="mt-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-2">
                                                <dt className="text-sm leading-5 font-medium text-gray-500">
                                                    Tax
                                                </dt>
                                                <dd className="text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                                    ${purchase.tax}
                                                </dd>
                                            </div>
                                            <div className="mt-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-2">
                                                <dt className="text-sm leading-5 font-medium text-gray-500">
                                                    Shipping
                                                </dt>
                                                <dd className="text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                                    ${purchase.shipping}
                                                </dd>
                                            </div>
                                            <div className="mt-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-2">
                                                <dt className="text-sm leading-5 font-medium text-gray-500">
                                                    Description
                                                </dt>
                                                <dd className="text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {purchase.description}<br/>
                                                    <a href={purchase.link_url} className="text-sm leading-5 font-medium text-indigo-600 truncate">
                                                        Amazon link
                                                    </a>
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            </li>
                        )})}
                </ul>
            </div>
		</div>
	);
}

export default Purchases;
