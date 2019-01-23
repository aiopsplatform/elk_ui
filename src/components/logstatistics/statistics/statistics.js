import React, { Component, Fragment } from 'react'
import QueryIdxs from "./inputs/queryidxs"
import QueryKPIs from "./inputs/querykpis"
import Fields from "./inputs/fields"
import Buttons from "./inputs/buttons"
import StartButton from "./inputs/startbutton"
import RightShow from "./inputs/righthow"
import { connect } from 'react-redux'
import "../../../css/statistics.css"

class Statistics extends Component {
    render() {
        return (
            <Fragment>
                <div className="statistics_title"></div>
                <div className="statistics_box">
                    <div className="left">
                        <QueryIdxs />
                        <QueryKPIs />
                        <Fields />
                        <Buttons />
                        <StartButton />
                    </div>
                    <div className="right">
                        <RightShow />
                    </div>
                </div>
            </Fragment>
        )
    }


}

const mapStateToProps = (state) => ({

})
const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);