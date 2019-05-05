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
// {
//     "pairs": [
//         { "sPoint": null, "sid": 1, "tPoint": null, "tid": 2, "transaction": "" },
//         { "sPoint": null, "sid": 2, "tPoint": null, "tid": 3, "transaction": "" },
//         { "sPoint": null, "sid": 2, "tPoint": null, "tid": 4, "transaction": "" }
//     ],
//         "pointList": [
//             {
//                 "id": 1, "name": "user", "object": {
//                     "createTime": 0, "description": "user", "hostIp": "", "name": "user", "type": 0
//                 },
//                 "parent": null, "subPoints": [], "transaction": "", "x": 1, "y": 1
//             },
//             {
//                 "id": 2, "name": "ins001", "object": {
//                     "createTime": 1555988948709, "description": "tomcat", "hostIp": "192.168.145.128", "name": "ins001", "type": 1
//                 },
//                 "parent": null, "subPoints": [], "transaction": "", "x": 2, "y": 1
//             },
//             {
//                 "id": 3, "name": "ins003", "object": {
//                     "createTime": 1555988948909, "description": "tomcat", "hostIp": "192.168.145.128", "name": "ins003", "type": 1
//                 },
//                 "parent": null, "subPoints": [], "transaction": "", "x": 3, "y": 1
//             },
//             {
//                 "id": 4, "name": "ins002", "object": {
//                     "createTime": 1555988948809, "description": "tomcat", "hostIp": "192.168.145.128", "name": "ins002", "type": 1
//                 },
//                 "parent": null, "subPoints": [], "transaction": "", "x": 3, "y": 2
//             }]
// }
