import {fetch} from "whatwg-fetch"

export default class Fetch {

    static requers = (datas , urls) => {
        let url = urls
        this.setState({
            loading : true
        })
        fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datas)
        })
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    barData: JSON.parse(JSON.stringify(data)),
                    loading : false
                })
            }).catch(error => console.log('error is', error));
    }
}