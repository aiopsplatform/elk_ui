import React, { Component } from 'react';
import * as d3 from 'd3';
import "./index.less"
class D3topo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            endx: '',
            endy: ''
        }

    }

    componentDidMount() {
        this.print();
    }



    print() {
        let that = this;
        var width = 1100,
            height = 700;
        var cluster = d3.layout.tree()
            .size([width, height - 200]);

        var diagonal = d3.svg.diagonal()
            .projection(function (d) {
                return [d.x, d.y];
            });
        // var drag = d3.behavior.drag()
        //     .on('drag', function (d) {
        //         d.dx += d3.event.dx;
        //         d.dy += d3.event.dy;
        //         d3.select(this).attr("transform", "translate(" + d.dx + "," + d.dy + ")");
        //     })
        //     .on('dragend', function (d) {
        //         console.log(d.dx, d.dy)
        //         that.setState({
        //             endx: d.dx,
        //             endy: d.dy
        //         },()=>{
        //             console.log(that.state.endx)
        //         })
        //     })
    
        var svg = d3.select("#box").append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("transform", "translate(" + 20 + "," + 50 + ")");
        //设置偏移量的函数



        //箭头
        var marker =
            svg.append("marker")
                .attr("id", "resolved")
                .attr("markerUnits", "strokeWidth")//设置为strokeWidth箭头会随着线的粗细发生变化
                .attr("markerUnits", "userSpaceOnUse")
                .attr("viewBox", "0 -5 10 10")//坐标系的区域
                .attr("refX", 10)//箭头坐标
                .attr("refY", -1)
                .attr("markerWidth", 12)//标识的大小
                .attr("markerHeight", 12)
                .attr("orient", "auto")//绘制方向，可设定为：auto（自动确认方向）和 角度值
                .attr("stroke-width", 2)//箭头宽度
                .append("path")
                .attr("d", "M0,-5L10,0L0,5")//箭头的路径
                .attr('fill', '#000000');//箭头颜色

        var root = {
            "name": "中国",
            "number": "2000",
            "children":
                [
                    {
                        "name": "浙江",
                        "number": "100",
                        "children":
                            [
                                {
                                    "name": "杭州",
                                    "number": "100"
                                },
                                {
                                    "name": "宁波",
                                    "number": "200"
                                }
                            ]
                    },
                    {
                        "name": "广西",
                        "number": "500",
                        "children":
                            [
                                {
                                    "name": "桂林",
                                    "number": "100"
                                },
                                {
                                    "name": "南宁",
                                    "number": "200"
                                }
                            ]
                    },
                    {
                        "name": "黑龙江",
                        "number": "500",
                        "children":
                            [
                                {
                                    "name": "哈尔滨",
                                    "number": "100"
                                }
                            ]
                    },
                    {
                        "name": "新疆",
                        "number": "500",
                        "children":
                            [
                                {
                                    "name": "乌鲁木齐",
                                    "number": "100"
                                }
                            ]
                    }]
        }

        var nodes = cluster.nodes(root).reverse();
        console.log(that.state.endx)
        nodes.forEach(function (d) {
            d.y = d.depth * 200;
        });


        var links = cluster.links(nodes);

        var linkEnter = svg.selectAll("path.link")
            .data(links)
        console.log(linkEnter)

        linkEnter.enter().append("path")//在指定元素之前插入一个元素
            .attr("class", "link")
            .attr("d", diagonal)
            .attr("stroke", "white")
            .attr("marker-end", "url(#resolved)")//根据箭头标记的id号标记箭头
            .style("fill", "white")
            .style("fill-opacity", 1)
            // 首先为每条节点连线添加标识id
            .attr("id", function (d, i) {
                return "mypath" + i;
            });

        //为连线添加文字
        linkEnter.enter().append('text')
            .attr('x', 100)
            .attr('y', 80)
            .style('fill', 'green')
            .style('font-size', '15px')
            .style('font-weight', 'bold')
            .append('textPath')
            .attr({//引用路径
                'xlink:href': function (d, i) {
                    return "#mypath" + i;
                }
            })
            .text(function (d, i) {
                debugger
                return d.target.number
            });


        var node = svg.selectAll(".node")
            .data(nodes)
            .enter()
            .append("g")
            .attr("class", "node")
            .each(function (d) {
                d.dx = d.x - 50
                d.dy = d.y
            })
            .attr("transform", function (d) {
                return "translate(" + (d.x + -50) + "," + (d.y) + ")";
            })
            .on('click', function (e) {
                console.log(e.name)
            })
            .on('dblclick', function (e) {
                alert(e.name)
            })
            // .call(drag)

        node.append("rect")
            .attr("width", 100)
            .attr("height", 40)
            .attr("x", 0)
            .attr("y", 0)
            .attr("style", "fill:#2990ca;")
            .attr("rx", 3)

        node.append("text")
            .attr("dx", function (d) {
                return 30;
            })
            .attr("dy", 25)
            .style("text-anchor", function (d) {
                return "middle";
            })
            .style("fill", "#fff")
            .text(function (d) { return d.name; });

        node.append("text")
            .attr("dx", function (d) {
                return 70;
            })
            .attr("dy", 25)
            .style("text-anchor", function (d) {
                return "middle";
            })
            .style("fill", "#fff")
            .text(function (d) { return d.number; });

    }




    render() {

        return (
            <div id="box" >

            </div>

        );
    }
}

export default D3topo;