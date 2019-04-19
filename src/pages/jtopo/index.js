import React, { Component } from 'react';
import JTopo from 'jtopo'
import img from './static/aa.png'
class Jtopo extends Component {
    componentDidMount() {
        this.ready()
    }

    ready() {
        const option = {
            canvas: this.refs.mycanvas, // required
            isScale: false,
            imageSrc: img,
            name: 'aa'
        }
        let stage = new JTopo.Stage(option)
        var scene = new JTopo.Scene(stage); // 创建一个场景对象

        let node1Option = {
            name: 'hello',
            text: 'test',
            color: 'red',
            tip: {
                text: '杨雄',
                type: 'Top',
            },
            x: 300,
            y: 200,
        }
        let node2Option = {
            name: 'hello2',
            text: 'test',
            color: 'red',
            tip: {
                text: '杨溢',
                type: 'Top'
            },
            x: 100,
            y: 200,
        }
        var node = new JTopo.Node(node1Option);    // 创建一个节点
        var node2 = new JTopo.Node(node2Option);
        stage.add(node); // 放入到场景中
        stage.add(node2)
        var link = new JTopo.FoldLink(node, node2, 'text');
        stage.add(link)
        let node3Option = {
            name: 'hello2',
            text: 'test',
            tip: {
                text: 'text',
                type: 'Top'
            },
            x: 400,
            y: 200
        }
        let node3 = new JTopo.HeartNode(node3Option);
        stage.add(node3)
        let link2 = new JTopo.ArrowsFoldLink(node, node3, 'link2')
        stage.add(link2)

    }
    render() {
        return (
            <div>
                <canvas ref="mycanvas" width="1000" height="400" ></canvas>
            </div>
        );
    }
}

export default Jtopo;


