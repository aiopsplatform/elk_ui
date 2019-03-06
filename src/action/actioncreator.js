import { fetch } from 'whatwg-fetch'


export const getData_locast = () => ({
    type: "MALL_LOCAST",
    payload: new Promise(resolve => {
        let url = "/index/getElkLogType"
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                resolve(data)
            })
    })
})

export const getData_normalBar = () => ({
    type: "EASYMOCK_DATA",
    payload: new Promise(resolve => {
        let url = "/data/normalBar"
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                resolve(data)
            })
    })
})



