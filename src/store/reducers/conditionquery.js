const defaultState = {
	mallNavList: [],
	mallDemoList : []
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case "MALL_NAV_FULFILLED":
			let mallNav = JSON.parse(JSON.stringify(state));
			mallNav.mallNavList = Object.values(action.payload);
			return mallNav;
			case "MALL_LOCAST_FULFILLED":
			let mallDemo = JSON.parse(JSON.stringify(state));
			mallDemo.mallDemoList = action.payload;
			return mallDemo;
		default:
			break;
	}
	return state;
}