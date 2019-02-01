import React, { Component } from 'react'
import { connect } from "react-redux"
import Queryidx from "./queryInputs/queryidx"
import Types from "./queryInputs/types"
import Rank from "./queryInputs/rank"
import Serve from "./queryInputs/serve"
import Project from "./queryInputs/project"
import StartTime from "./queryInputs/starttime"
import EndTime from "./queryInputs/endtime"
import HandSlider from "./queryInputs/handslider"
import Show from "./queryInputs/show"
import { Button, Icon } from 'antd';
import 'antd/dist/antd.css';
import "../../css/query.css"
import { getData_action ,getData_locast } from "../../action/actioncreator"
class CondiQuery extends Component {

    render() {
        let { mallNavList , mallDemoList} = this.props;
        return (
            <div className="big_box">
                <div className="small_query_box">
                    <Queryidx mallDemoList={mallDemoList} />
                    <Types mallNavList={mallNavList} />
                    <Rank mallNavList={mallNavList} />
                    <StartTime />
                    <EndTime />
                    <Serve />
                    <Project />
                    <HandSlider />
                    <div className="select_box buttons">
                        <Button.Group>
                            <Button type="primary">
                                <Icon type="search" />
                                <span>立即查询</span>
                            </Button>
                            <Button type="primary">
                                <Icon type="download" />
                                <span>立即下载</span>
                            </Button>
                        </Button.Group>
                    </div>
                    <Show />
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.getData();
        this.props.getList();
    }



    // onChanges = (date, dateString) => {
    //     console.log(date, dateString)
    // }

    // handleSizeChange = (e) => {
    //     this.setState({ size: e.target.value });
    // }

}

const mapStateToProps = (state) => ({
    mallNavList: state.conditionquery.mallNavList,
    mallDemoList : state.conditionquery.mallDemoList
})

const mapDispatchToProps = (dispatch) => ({
    getData() {
        dispatch(getData_action())
    },
    getList(){
        dispatch(getData_locast())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CondiQuery)