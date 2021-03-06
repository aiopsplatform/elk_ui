import React, { Component } from 'react';
import * as d3 from "d3";
class XXX extends Component {
    componentDidMount() {
        this.drawChart();
    }
    drawChart() {
        const data = [12, 5, 6, 6, 9, 10];

        const svg = d3.select("#roots")
            .append("svg")
            .attr("width", 700)
            .attr("height", 300)
            .style("margin-left", 100)
            .on('click', () => {
                console.log('click', d3.event.target.tagName);
              })

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => 300 - 10 * d)
            .attr("width", 65)
            .attr("height", (d, i) => d * 10)
            .attr("fill", "green")
            .on('click', () => {
                alert('xxxx')
              })

        svg.selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .text((d) => d)
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => 300 - (10 * d) - 3)
    }
    render() {
        return (
            <div id="roots" >

            </div>
        );
    }
}

export default XXX;