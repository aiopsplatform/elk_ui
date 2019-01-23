const defaultState = {
	mallNavList: []
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case "MALL_NAV_FULFILLED":
			let mallNav = JSON.parse(JSON.stringify(state));
			mallNav.mallNavList = Object.values(action.payload);
			return mallNav;
		default:
			break;
	}
	return state;
}