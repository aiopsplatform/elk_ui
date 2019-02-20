import React, { Component } from 'react'
import { Card, Slider, Button, Icon } from 'antd'
import BaseForm from "./../../components/BaseForm"
import { connect } from "react-redux"
import "./index.less"
import { getData_locast } from "./../../action/actioncreator"
class TJQuery extends Component {

    state = {
        disabled: false,
        type: "arrows-alt",
    }

    componentDidMount() {
        this.props.getList();
        let { mallDemoList } = this.props;
        console.log(mallDemoList)
    }

    handleFilter = (params) => {
        this.params = params;
    }


    
    formList = [
        {
            type: 'SELECT',
            label: '索引',
            field: 'indexes',
            placeholder: '请选择索引',
            width: 200,
            list : this.props.mallDemoList
        },
        //     list: [
        //         { id: '0', name: '索引一' },
        //         { id: '1', name: '索引二' },
        //         { id: '2', name: '索引三' },
        //         { id: '3', name: '索引四' }]
        // },
        {
            type: 'SELECT',
            label: '类型',
            field: 'types',
            placeholder: '请选择类型',
            width: 200,
            list: [
                { id: '0', name: '类型一' },
                { id: '1', name: '类型二' },
                { id: '2', name: '类型三' },
                { id: '3', name: '类型四' }]
        },
        {
            type: 'SELECT',
            label: '级别',
            field: 'rank',
            placeholder: '请选择级别',
            width: 200,
            list: [
                { id: '0', name: '级别一' },
                { id: '1', name: '级别二' },
                { id: '2', name: '级别三' },
                { id: '3', name: '级别四' }]
        },
        {
            type: '时间查询',
            placeholder: '请选择时间'
        },
        {
            type: 'SELECT',
            label: '服务',
            field: 'serve',
            placeholder: '请选择服务',
            width: 200,
            list: [
                { id: '0', name: '服务一' },
                { id: '1', name: '服务二' },
                { id: '2', name: '服务三' },
                { id: '3', name: '服务四' }]
        },
        {
            type: 'SELECT',
            label: '实例',
            field: 'projects',
            placeholder: '请选择实例',
            width: 200,
            list: [
                { id: '0', name: '实例一' },
                { id: '1', name: '实例二' },
                { id: '2', name: '实例三' },
                { id: '3', name: '实例四' }]
        },
    ]

    handleDisabledChange = (disabled) => {
        this.setState({ disabled });
    }
    render() {
        // let { mallDemoList } = this.props;
        let { disabled, type } = this.state;
        return (
            <div className="tiquery_big_box">
                <Card className="tjquery_cards" >
                    <BaseForm formList={this.formList} filterSubmit={this.handleFilter} />
                    {/* <Slider defaultValue={30} disabled={disabled} style={{ marginBottom: 20 }} /> */}
                    {/* <Button type='primary' icon="download" style={{ marginLeft: 40 }} >立即下载</Button> */}
                </Card>
                <div className="cont_box" ref="cont_box">
                    <div className="cont_box_header">
                        <span className="data_show_txt">数据展示</span>
                        <span className="blow_up" onClick={this.handleBlowUp.bind(this)}><Icon type={type} /></span>
                    </div>
                    <div className="cont_box_body">

                    </div>
                </div>
            </div>
        )
    }
    handleBlowUp() {
        if (this.state.type === "arrows-alt") {
            this.setState({
                type: "shrink"
            })
            this.refs.cont_box.style = `
                                    position:absolute;
                                    top:0;
                                    left:0;
                                    bottom:0;
                                    width:100%;
                                    height:100%;
                                    z-inde:10;
                                `
        } else {
            this.setState({
                type: "arrows-alt"
            })
            this.refs.cont_box.style = `
                                    width: 98%;
                                    height: 60%;
                                `
        }
    }
}
const mapStateToProps = (state) => ({
    mallDemoList: state.conditionquery.mallDemoList
})

const mapDispatchToProps = (dispatch) => ({
    getList() {
        dispatch(getData_locast())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TJQuery)