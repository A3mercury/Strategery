import React, { useEffect, useState } from 'react';
import UnitsService from '../services/UnitsService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { isEmpty } from 'lodash';

function Units(props) {
    const [units, setUnits] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        UnitsService._index(props.project?.id)
            .then((response) => {
                setUnits(response);
                setLoading(false);
            })
    }, []);

    return (
        <div className="mb-20">
            <h1 className="text-2xl font-semibold text-gray-900 py-6">
                Units
            </h1>

            {loading && <p>Loading...</p>}

            <div className="bg-white rounded-lg">
                <ul>
                    {!isEmpty(units) && units.map((unit) => {
                        return (
                            <li key={unit.id} className="border-b-2 border-gray-200">
                                <button onClick={() => toggleDetails(unit.id)} className="w-full hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out hover:no-underline">
                                    <div className="px-4 py-3 sm:px-6">
                                        <div className="flex items-center justify-between">
                                            <div className="text-sm leading-5 font-medium text-indigo-600 truncate">
                                                {unit.name}
                                                &nbsp;-&nbsp;
                                                <span className="text-indigo-400">{unit.type}</span>
                                                &nbsp;-&nbsp;
                                                <span className="text-indigo-400">{unit.subtype}</span>
                                            </div>
                                            <div className="ml-2 flex-shrink-0 flex">
                                                {/* <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-gray-800">
                                                    {unit.type}
                                                </span>
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    {unit.subtype}
                                                </span> */}
                                            </div>
                                        </div>
                                        <div className="w-full sm:grid sm:grid-cols-4 sm:gap-4">
                                            <div className="mt-2 text-left text-sm leading-5 text-gray-500 sm:mt-0">
                                                {unit.quantity_in_stock}/{unit.quantity}&nbsp;<span className="text-gray-400">in stock</span>
                                            </div>

                                            <div className="mt-2">Test</div>
                                            <div className="mt-2 text-right text-sm leading-5 text-gray-700 sm:mt-0 sm:col-span-2">
                                                Details&nbsp;
                                                <FontAwesomeIcon
                                                    id={"purchase_details_chevron_" + unit.id}
                                                    icon="chevron-down"
                                                    size="sm"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </button>

                                {/* <div className="px-4 py-3" id={"purchase_details_" + unit.id} style={{ display: 'none' }}>
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                                        Unit Details
                                    </h3>
                                    <div className="pt-3">
                                        <dl>
                                            <div className="sm:grid sm:grid-cols-3 sm:gap-4">
                                                <dt className="text-sm leading-5 font-medium text-gray-500">
                                                    Price Total
                                                </dt>
                                                <dd className="text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                                    ${unit.price_total}
                                                </dd>
                                            </div>
                                            <div className="mt-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-2">
                                                <dt className="text-sm leading-5 font-medium text-gray-500">
                                                    Price
                                                </dt>
                                                <dd className="text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                                    ${unit.price}
                                                </dd>
                                            </div>
                                            <div className="mt-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-2">
                                                <dt className="text-sm leading-5 font-medium text-gray-500">
                                                    Tax
                                                </dt>
                                                <dd className="text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                                    ${unit.tax}
                                                </dd>
                                            </div>
                                            <div className="mt-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-2">
                                                <dt className="text-sm leading-5 font-medium text-gray-500">
                                                    Shipping
                                                </dt>
                                                <dd className="text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                                    ${unit.shipping}
                                                </dd>
                                            </div>
                                            <div className="mt-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-2">
                                                <dt className="text-sm leading-5 font-medium text-gray-500">
                                                    Description
                                                </dt>
                                                <dd className="text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {unit.description}<br />
                                                    <a href={unit.link_url} className="text-sm leading-5 font-medium text-indigo-600 truncate">
                                                        Amazon link
                                                    </a>
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div> */}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Units;
