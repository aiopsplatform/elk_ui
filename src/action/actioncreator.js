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
                console.log(data)
                resolve(data)
            })
    })
})


