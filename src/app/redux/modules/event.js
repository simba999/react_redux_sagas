const Filter = 'FILTER';

const initState = {
	filter: '',
};

export default function (state = initState, action) {

	switch (action.type) {
		case Filter:
			return {
				...state,
				filterTable: action.filterTable
			};
		default:
			return state;
	}
}

export function filterTable (filter) {
	console.log("filterTable");
	 return {
        type: Filter,
        filter
    };
}