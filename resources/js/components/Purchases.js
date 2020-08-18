import React, { useEffect, useState } from 'react';

function Purchases() {
	return (
		<div className="container pb-6">
			<h1 className="text-2xl font-semibold text-gray-900 py-6">
				Your Purchases
			</h1>
			<div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
				<div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
				<table className="min-w-full">
					<thead>
					<tr>
						<th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
							Name
						</th>
						<th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
							Title
						</th>
						<th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
							Email
						</th>
						<th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
							Role
						</th>
						<th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
					</tr>
					</thead>
					<tbody>
					<tr className="bg-white">
						<td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
							Bernard Lane
						</td>
						<td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
							Director, Human Resources
						</td>
						<td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
							bernardlane@example.com
						</td>
						<td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
							Owner
						</td>
						<td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
						<a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
						</td>
					</tr>
					<tr className="bg-gray-50">
						<td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
						Bernard Lane
						</td>
						<td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
						Director, Human Resources
						</td>
						<td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
						bernardlane@example.com
						</td>
						<td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
						Owner
						</td>
						<td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
						<a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
						</td>
					</tr>
					<tr className="bg-white">
						<td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
						Bernard Lane
						</td>
						<td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
						Director, Human Resources
						</td>
						<td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
						bernardlane@example.com
						</td>
						<td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
						Owner
						</td>
						<td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
						<a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
						</td>
					</tr>
					<tr className="bg-gray-50">
						<td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
						Bernard Lane
						</td>
						<td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
						Director, Human Resources
						</td>
						<td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
						bernardlane@example.com
						</td>
						<td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
						Owner
						</td>
						<td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
						<a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
						</td>
					</tr>
					<tr className="bg-white">
						<td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
						Bernard Lane
						</td>
						<td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
						Director, Human Resources
						</td>
						<td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
						bernardlane@example.com
						</td>
						<td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
						Owner
						</td>
						<td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
						<a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
						</td>
					</tr>
					</tbody>
				</table>
				</div>
			</div>
		</div>
	);
}

export default Purchases;
