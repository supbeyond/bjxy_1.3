/**
 * Created by GZXS on 2016/7/6.
 */
//http://61.159.185.196:9876
//http://61.159.185.196:7060/Service2.svc
//市  admin  xxgcxyadmin
//县 毕节市 七星关区    用户名  15286555007 密码  123
//镇 毕节市 七星关区 市西    用户名  15286550532  密码  123
//村 毕节市 七星关区   市西 桂花     用户名  13238520088 密码  123


//树测试
function _force_est(){
    var content = '<script src="../base/echart2/dist/echarts-all.js"></script>' +
        '<div id="xs_tree_dialog" style="width: 100%; height: 100%;"></div>';
    XS.CommonUtil.openDialog("xs_test", "测试", "icon-man", content, false, false, true, 800, 500);

    var nodes = [];
    var links = [];
    var constMaxDepth = 2;
    var constMaxChildren = 7;
    var constMinChildren = 4;
    var constMaxRadius = 10;
    var constMinRadius = 2;
    function rangeRandom(min, max) {
        return Math.random() * (max - min) + min;
    }
    function createRandomNode(depth) {
        var node = {
            name : 'NODE_' + nodes.length,
            value : rangeRandom(constMinRadius, constMaxRadius),
            // Custom properties
            id : nodes.length,
            depth : depth,
            category : depth === constMaxDepth ? 0 : 1
        }
        nodes.push(node);
        return node;
    }
    function forceMockThreeData() {
        var depth = 0;
        var rootNode = {
            name : 'ROOT',
            value : rangeRandom(constMinRadius, constMaxRadius),
            // Custom properties
            id : 0,
            depth : 0,
            category : 2
        }
        nodes.push(rootNode);
        function mock(parentNode, depth) {
            var nChildren = Math.round(rangeRandom(constMinChildren, constMaxChildren));
            for (var i = 0; i < nChildren; i++) {
                var childNode = createRandomNode(depth);
                links.push({
                    source : parentNode.id,
                    target : childNode.id,
                    weight : 1
                });
                if (depth < constMaxDepth) {
                    mock(childNode, depth + 1);
                }
            }
        }
        mock(rootNode, 0);
    }
    forceMockThreeData();
    option = {
        title : {
            text: 'Force',
            subtext: 'Force-directed tree',
            x:'right',
            y:'bottom'
        },
        tooltip : {
            trigger: 'item',
            formatter: '{a} : {b}'
        },
        toolbox: {
            show : true,
            feature : {
                restore : {show: true},
                magicType: {show: true, type: ['force', 'chord']},
                saveAsImage : {show: true}
            }
        },
        legend: {
            x: 'left',
            data:['叶子节点','非叶子节点', '根节点']
        },
        series : [
            {
                type:'force',
                name : "Force tree",
                ribbonType: false,
                categories : [
                    {
                        name: '叶子节点'
                    },
                    {
                        name: '非叶子节点'
                    },
                    {
                        name: '根节点'
                    }
                ],
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        nodeStyle : {
                            brushType : 'both',
                            borderColor : 'rgba(255,215,0,0.6)',
                            borderWidth : 1
                        }
                    }
                },
                minRadius : constMinRadius,
                maxRadius : constMaxRadius,
                coolDown: 0.995,
                steps: 10,
                nodes : nodes,
                links : links,
                steps: 1
            }
        ]
    };
    var  echart = echarts.init(document.getElementById("xs_tree_dialog"));
    echart.setOption(option);
}