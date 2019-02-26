import axios from 'axios';
import { Modal } from 'antd'
import Utils from './../utils/utils'
// import {fetch} from "whatwg-fetch"
export default class Axios {

    static requestList(_this, url, params, isMock) {
        var data = {
            params: params,
            isMock
        }
        this.ajax({
            url,
            data
        }).then((data) => {
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
        });
    }



    static ajax(options) {
        let loading;
        if (options.data && options.data.isShowLoading !== false) {
            loading = document.getElementById('ajaxLoading');
            loading.style.display = 'block';
        }
        let baseApi = '';
        if (options.isMock) {
            baseApi = 'https://www.easy-mock.com/mock/5c62af35fe257b0e6ddb1e1b/elk_moni';
        } else {
            baseApi = 'https://www.easy-mock.com/mock/5c62af35fe257b0e6ddb1e1b/elk_moni';
        }
        //https://www.easy-mock.com/mock/5c62af35fe257b0e6ddb1e1b/elk_moni/table/list#!method=get
        return new Promise((resolve, reject) => {
            axios({
                url: options.url,
                method: 'get',
                baseURL: baseApi,
                timeout: 50000,
                params: (options.data && options.data.params) || ''
            }).then((response) => {
                if (options.data && options.data.isShowLoading !== false) {
                    loading = document.getElementById('ajaxLoading');
                    loading.style.display = 'none';
                }
                if (response.status === 200) {
                    let res = response.data;
                    if (res.code === 0) {
                        resolve(res);
                    } else {
                        Modal.info({
                            title: "提示",
                            content: res.msg
                        })
                    }
                } else {
                    reject(response.data);
                }
            })
        });
    }
    // static ajax(options) {
    //     let loading;
    //     if (options.data && options.data.isShowLoading !== false) {
    //         loading = document.getElementById('ajaxLoading');
    //         loading.style.display = 'block';
    //     }
    //     return new Promise(resolve => {
    //         fetch(options.url,{
    //             timeout: 50000,
    //             params: (options.data && options.data.params) || ''
    //         })
    //         .then(res => res.json())
    //         .then((response) => {
    //                 resolve(response.data);
    //             if (options.data && options.data.isShowLoading !== false) {
    //                 loading = document.getElementById('ajaxLoading');
    //                 loading.style.display = 'none';
    //             }                     
    //         }).catch(error => console.log('error is', error));
    //     })
    // }
}