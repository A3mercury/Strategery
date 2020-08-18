import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DatePicker(props) {
	let today = new Date();
	const [show, setShow] = useState(false);
	const [month, setMonth] = useState(today.getMonth());
	const [year, setYear] = useState(today.getFullYear());
	const [datepickerValue, setDate] = useState(new Date(year, month, today.getDate()).toDateString());

	function getDateValue(date) {
		const today = new Date();
		const d = new Date(year, month, date);

		return today.toDateString() === d.toDateString();
	}

	function getDateValue(date) {
		let selectedDate = new Date(year, month, date);
		setDate(selectedDate.toDateString());
		setShow(false);
	}

	function getNumberOfDays() {
		//
	}

	return (
		<div>
			<label className="block text-sm font-medium leading-5 text-gray-700">Test Label</label>
			<div className="mt-1 relative rounded-md shadow-sm">
				<input id="" readOnly className="form-input block w-full pr-10 sm:text-sm sm:leading-5" placeholder="mm/dd/yyyy" />
				<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
					<FontAwesomeIcon className="text-gray-500" icon="calendar-alt" />
				</div>
			</div>
		</div>
	);
}

export default DatePicker;


/*

Datepicker Requirements
- [ ] clickable input with calendar icon inside to the right
- [ ] input width expandable to the width of the container
- [ ] selecting input expands a calendar of current month
- [ ] calendar can go to last and next months
- [ ] 

*/