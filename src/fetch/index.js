import { fetch } from "whatwg-fetch"
import { Modal } from 'antd'
export default class Fetch {

    static requers = (_this, urls , datas) => {
        let url = urls
        fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datas)
        })
            .then((res) =>{
                if(res.status !== 200){
                    Modal.info({
                        title :  res.status ,
                        content : res.status
                    })
                    return 
                }else{
                    _this.setState({
                        loading: true
                    })
                    return  res = res.json()
                }
            })
            .then((data) => {
                    _this.setState({
                        dataList: JSON.parse(JSON.stringify(data)),
                        loading: false
                    })
            }).catch(error => {
                console.log('error is' , error)
                _this.setState({
                    loading : false
                })
            });
    }
}