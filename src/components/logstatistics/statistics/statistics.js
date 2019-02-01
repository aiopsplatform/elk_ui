import React, { Component, Fragment } from 'react'
import QueryIdxs from "./inputs/queryidxs"
import QueryKPIs from "./inputs/querykpis"
import Fields from "./inputs/fields"
import Bar from "./inputs/bar"
import Pie from "./inputs/pie"
import { connect } from 'react-redux'
import "../../../css/statistics.css"
import { Button, Icon } from 'antd';
import 'antd/dist/antd.css'
class Statistics extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            flag: false,
            num: '',
            disabled: true,
            disabledTwo : false
        }
    }
    render() {
        let {loading , flag , num , disabled , disabledTwo} = this.state;
        return (
            <Fragment>
                <div className="statistics_title"></div>
                <div className="statistics_box">
                    <div className="left">
                        <QueryIdxs />
                        <QueryKPIs />
                        <Fields />
                        <div className="statistics_input">
                            <span className="span_statis">图标类型 : </span>
                            <Button.Group>
                                <Button
                                    type="primary"
                                    onClick={this.handleSendPie.bind(this)}
                                    disabled = {disabledTwo}
                                >
                                    <Icon type="pie-chart" />
                                    <span>饼状图</span>
                                </Button>
                                <Button
                                    type="primary"
                                    onClick={this.handleSendBar.bind(this)}
                                    disabled = {disabledTwo}
                                >
                                    <Icon type="bar-chart" />
                                    <span>柱状图</span>
                                </Button>
                            </Button.Group>

                            <div style={{ marginTop: 30, marginLeft: 60 }}>
                                <Button
                                    type="primary"
                                    loading={loading}
                                    onClick={this.enterLoading.bind(this)}
                                    disabled={disabled}
                                    icon="caret-right"
                                >
                                    START
                                </Button>
                            </div>

                        </div>
                    </div>
                    <div className="right">
                        {num === 1 && flag ? <Pie /> : num === 2 && flag ? <Bar /> : ''}
                    </div>
                </div>
            </Fragment>
        )
    }
    handleSendPie() {
        this.setState({
            num: 1,
            disabled: false
        })

    }
    handleSendBar() {
        this.setState({
            num: 2,
            disabled: false
        })
    }

    enterLoading() {
        this.setState({ 
            loading: true, 
            flag: true , 
            disabled : true,
            disabledTwo : true 
        });
        setTimeout(() => {
            this.setState({ loading: false });
        }, 1000)

    }

}

const mapStateToProps = (state) => ({

})
const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);