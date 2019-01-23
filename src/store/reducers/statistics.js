const defaultState = {
    curNum: ""
}

export default (state = defaultState, action) => {
    // console.log(action)
    switch (action.type) {
        case "GET_MYNUM":
            let myNum = JSON.parse(JSON.stringify(state));
            myNum.curNum = action.num;
            return myNum;
        default:
            break;
    }
    return state;
}