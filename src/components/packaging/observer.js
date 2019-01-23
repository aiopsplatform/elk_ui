const eventList = {

}

const $on = function (eventName, cb) {
    //判断当前事件名称是否存在
    if (!eventList[eventName]) {
        eventList[eventName] = []
    }
    eventList[eventName].push(cb)
}


const $emit = function (eventName, params) {
    //判断当前事件名称是否存在
    if (eventList[eventName]) {
        eventList[eventName].map((cb) => {
            cb(params);
        })
    } else {
        return;
    }
}

export default {
    $on,
    $emit
}