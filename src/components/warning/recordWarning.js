import React, { Component } from 'react'
import Tactic from "./record/tactics"
import Types from "./record/types"
import Objects from "./record/object"
import StartTime from "./record/startTime"
import EndTime from "./record/endTime"
import Buttons from "./record/buttons"
import Paginations from "./record/pagination"
import ShowTable from "./record/showTable"
import "../../css/warning.css"
class RecordWarning extends Component {
    render() {
        return (
            <div className="record_big_box">
                <div className='record_small_box'>
                    <div className="record_header">
                        <Tactic />
                        <Types />
                        <Objects />
                        <StartTime />
                        <EndTime />
                        <Buttons />
                    </div>
                    <div className="record_pagination">
                        <Paginations />
                    </div>
                </div>
                <ShowTable />
            </div>

        )
    }
}

export default RecordWarning;