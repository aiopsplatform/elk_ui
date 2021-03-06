import { fetch } from "whatwg-fetch"
import { Modal } from 'antd'
import Utils from './../utils/utils'
export default class Fetch {

    static requers = (_this, urls, datas) => {
        _this.setState({
            loading: true
        })
        let url = urls
        fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datas)
        })
            .then((res) => {
                if (res.status !== 200) {
                    Modal.info({
                        title: res.status,
                        content: res.status
                    })
                    return
                } else {
                    return res.json()
                }
            })
            .then((data) => {
                _this.setState({
                    dataList: JSON.parse(JSON.stringify(data)),
                    loading: false,
                    flag: true
                })
            }).catch(error => {
                console.log('error is', error)
                _this.setState({
                    loading: false
                })
            });
    }
    static requersTable = (_this, urls) => {
        _this.setState({
            loading: true
        })
        let url = urls
            fetch(url)
                .then((res) => {
                    if (res.status !== 200) {
                        Modal.info({
                            title: res.status,
                            content: res.status
                        })
                        return
                    } else {
                        return res.json()
                    }
                })
                .then((data) => {
                    if (data && data.result) {
                        let list = data.result.item_list.map((item, index) => {
                            item.key = index;
                            return item;
                        });
                        _this.setState({
                            list,
                            pagination: Utils.pagination(data, (current) => {
                                _this.params.page = current;
                                _this.requestList();
                            })
                        })
                    }
                })
                .catch(error => {
                    console.log('error is', error)
                    _this.setState({
                        loading: false
                    })
                });
        
    }
    // static requersTable = (_this, urls, datas) => {
    //     _this.setState({
    //         loading: true
    //     })
        
    //     let url = urls
    //     if (datas === '') {
    //         fetch(url)
    //             .then((res) => {
    //                 if (res.status !== 200) {
    //                     Modal.info({
    //                         title: res.status,
    //                         content: res.status
    //                     })
    //                     return
    //                 } else {
    //                     return res.json()
    //                 }
    //             })
    //             .then((data) => {
    //                 if (data && data.result) {
    //                     let list = data.result.item_list.map((item, index) => {
    //                         item.key = index;
    //                         return item;
    //                     });
    //                     _this.setState({
    //                         list,
    //                         pagination: Utils.pagination(data, (current) => {
    //                             _this.params.page = current;
    //                             _this.requestList();
    //                         })
    //                     })
    //                 }
    //             })
    //             .catch(error => {
    //                 console.log('error is', error)
    //                 _this.setState({
    //                     loading: false
    //                 })
    //             });

    //     } else if (datas) {
    //         fetch(url, {
    //             method: 'post',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(datas)
    //         })
    //             .then((res) => {
    //                 if (res.status !== 200) {
    //                     Modal.info({
    //                         title: res.status,
    //                         content: res.status
    //                     })
    //                     return
    //                 } else {
    //                     return res.json()
    //                 }
    //             })
    //             .then((data) => {
    //                 if (data && data.result) {
    //                     let list = data.result.item_list.map((item, index) => {
    //                         item.key = index;
    //                         return item;
    //                     });
    //                     _this.setState({
    //                         list,
    //                         pagination: Utils.pagination(data, (current) => {
    //                             _this.params.page = current;
    //                             _this.requestList();
    //                         })
    //                     })
    //                 }
    //             })
    //             .catch(error => {
    //                 console.log('error is', error)
    //                 _this.setState({
    //                     loading: false
    //                 })
    //             });
    //     }
    // }
}