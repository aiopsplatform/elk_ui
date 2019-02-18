import { fetch } from 'whatwg-fetch'

// export const get_xxx = () =>({
//     type : "xx",
// })

// export const get_num = (num) =>({
//     type : "GET_MYNUM",
//     num : num
// })

export const getData_action = () => ({
    type: "MALL_NAV",
    payload: new Promise(resolve => {
        let url = "/movie/detail.api?locationId=290&movieId=125805"
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                resolve(data)
            })
    })
})

export const getData_locast = () => ({
    type: "MALL_LOCAST",
    payload: new Promise(resolve => {
        let url = "/tail/taillist"
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                resolve(data)
            })
    })
})



