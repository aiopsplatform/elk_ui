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
import Buttons from "./queryInputs/buttons"
import Show from "./queryInputs/show"
import 'antd/dist/antd.css';
import "../../css/query.css"
import { getData_action } from "../../action/actioncreator"
class CondiQuery extends Component {

    render() {
        let { mallNavList } = this.props;
        return (
            <div className="big_box">
                <div className="small_query_box">
                    <Queryidx />
                    <Types mallNavList={mallNavList} />
                    <Rank mallNavList={mallNavList} />
                    <StartTime />
                    <EndTime />
                    <Serve />
                    <Project />
                    <HandSlider />
                    <Buttons />
                    <Show />
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.getData();
    }



    // onChanges = (date, dateString) => {
    //     console.log(date, dateString)
    // }

    // handleSizeChange = (e) => {
    //     this.setState({ size: e.target.value });
    // }

}

const mapStateToProps = (state) => ({
    mallNavList: state.conditionquery.mallNavList
})

const mapDispatchToProps = (dispatch) => ({
    getData() {
        dispatch(getData_action())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CondiQuery)