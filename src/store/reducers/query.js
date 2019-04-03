const defaultState = {
	inputBoxData: [],
	dataList: [],
	flag : false
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case "MALL_LOCAST_FULFILLED":
			let mallDemo = JSON.parse(JSON.stringify(state));
			mallDemo.inputBoxData = action.payload;
			return mallDemo;
		case "EASYMOCK_DATA_FULFILLED":
			let dataLists = JSON.parse(JSON.stringify(state));
			dataLists.dataList = action.payload;
			return dataLists;
		case 'SWITCH_LOGIN':
			return {
				...state,
				flag: action.flag
			}

		default:
			break;
	}
	return state;
}