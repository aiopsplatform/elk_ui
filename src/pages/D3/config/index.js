const nodeData = [
    { id: 1, name: '中国' },
    { id: 2, name: '北京' },
    { id: 3, name: '北京' },
];

const relData = [
    { id: 1, source: 1, target: 2, tag: '省份' },
    { id: 2, source: 1, target: 3, tag: '省份' },
];


   
export {
    nodeData,
    relData
}