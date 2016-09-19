/**
 * Created by GZXS on 2016/7/19.
 */

var xs_pkdc_itemFoundForceOpt = {
    title : {
        text: '',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: '{b} : {c}'
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
        data:[]
    },
    series : [
        {
            type:'force',
            name : "Force tree",
            ribbonType: false,
            categories : [],
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
            minRadius : 10,
            maxRadius : 20,
            coolDown: 0.995,
            steps: 1,
            nodes : [],
            links : []
        }
    ]
};

var xs_pkdc_itemFoundFNodes = [];
var xs_pkdc_itemFoundFLinks = [];
var xs_pkdc_itemFoundFMaxDepth = -1;
var xs_pkdc_itemFoundFJsonData = [[],[],[],[]];
var xs_pkdc_itemFoundFIndex = -1;
var xs_pkdc_itemFoundFRegion = xs_pkdc_currentStateCode;
/**
 * 双击项目资金的行数据展示该项目的层级关系
 * @param rowIndex 行编号
 * @param rowData 行数据
 */
 XS.Main.Pkjc.selectItemFoundRowData = function(rowIndex,rowData){
     //$('#xs_pkdc_detailDialog').dialog('close');
     var currentIdNum = xs_pkdc_currentStateCode.toString();
     var projectName = rowData.PROJECTNAME;
         var content = '<script id="echarts-all" src="../base/echart2/dist/echarts-all.js"></script>' +
             '<div style="height: 100%;padding:5px;box-sizing: border-box;">' +
            '<div id="xs_pkdc_itemFundRowDataTree" style="height: 100%;"></div></div>';
     XS.CommonUtil.openDialog("xs_pkdc_itemFundRowDataWin", projectName + "-项目资金", "icon-save", content, false, true, false, "900","480",null,70,function(){
         
         $('#xs_pkdc_itemFundRowDataWin').remove();
     });
    var data = {regionid: xs_pkdc_currentStateCode};
     XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, "QueryProjecFundByRegionidLike", data, function(json){
         if(json && json.length > 0){
             xs_pkdc_itemFoundFJsonData = [[],[],[],[]];
             for(var i=0;i<json.length;i++){
                 if(json[i].PROJECTNAME == projectName && json[i].REGIONID.toString().substr(0,currentIdNum.length) == currentIdNum && json[i].FONDYEAR == rowData.FONDYEAR){
                    if(json[i].COUNTY == '毕节市'){
                        xs_pkdc_itemFoundFJsonData[0].push(json[i]);
                    }else if(json[i].COUNTY && !json[i].TOWN){
                        xs_pkdc_itemFoundFJsonData[1].push(json[i]);
                    }else if(json[i].COUNTY && json[i].TOWN && !json[i].VILL){
                        xs_pkdc_itemFoundFJsonData[2].push(json[i]);
                    }else if(json[i].COUNTY && !json[i].TOWN && json[i].VILL){
                        xs_pkdc_itemFoundFJsonData[3].push(json[i]);
                    }
                 }
             }
             var legend = [];
             if(xs_pkdc_itemFoundFJsonData[0].length == 1){
                 xs_pkdc_itemFoundFIndex = 0;
                 xs_pkdc_itemFoundFMaxDepth = 3;
                 legend = ["市","县","镇","村"];
             }else if(xs_pkdc_itemFoundFJsonData[1].length == 1){
                 xs_pkdc_itemFoundFIndex = 1;
                 xs_pkdc_itemFoundFMaxDepth = 2;
                 legend = ["县","镇","村"];
             }else if(xs_pkdc_itemFoundFJsonData[2].length == 1){
                 //xs_pkdc_itemFoundFMaxDepth = 1;
                 xs_pkdc_itemFoundFIndex = 2;
                 xs_pkdc_itemFoundFMaxDepth = 1;
                 legend = ["镇","村"];
             }else if(xs_pkdc_itemFoundFJsonData[3].length == 1){
                 xs_pkdc_itemFoundFIndex = 3;
                 xs_pkdc_itemFoundFMaxDepth = 0;
                 legend = ["村"];
             }else{
                 XS.CommonUtil.showMsgDialog("","该项目存在多个根目录");
                 return;
             }
             XS.Main.Pkjc.itemFoundNodesCreate(xs_pkdc_itemFoundFIndex);
             xs_pkdc_itemFoundForceOpt.title.text = projectName + "资金流";
             xs_pkdc_itemFoundForceOpt.legend.data = [];
             xs_pkdc_itemFoundForceOpt.series[0].categories = [];

                    switch (xs_pkdc_itemFoundFMaxDepth){
                        case 0:
                            legend = [legend[0]];
                            break;
                        case 1:
                            legend = [legend[0],legend[1]];
                            break;
                        case 2:
                            legend = [legend[0],legend[1],legend[2]];
                            break;
                        case 3:
                            legend = legend;
                            break;
                    }
                     xs_pkdc_itemFoundForceOpt.legend.data = legend;
                     for(var i in legend){
                         xs_pkdc_itemFoundForceOpt.series[0].categories.push({name:legend[i]});
                     }
             for(var i=0;i<xs_pkdc_itemFoundFNodes.length-1;i++){
                 for(var j=i+1;j<xs_pkdc_itemFoundFNodes.length;j++){
                     var nameIndex = 1;
                     if(xs_pkdc_itemFoundFNodes[i].name == xs_pkdc_itemFoundFNodes[j].name){
                         xs_pkdc_itemFoundFNodes[j].name = xs_pkdc_itemFoundFNodes[j].name + nameIndex;
                         nameIndex++;
                     }
                     if(nameIndex>1){
                         xs_pkdc_itemFoundFNodes[i].name = xs_pkdc_itemFoundFNodes[i].name + 0;
                     }
                 }
             }
             xs_pkdc_itemFoundForceOpt.series[0].nodes = xs_pkdc_itemFoundFNodes;
             xs_pkdc_itemFoundForceOpt.series[0].links = xs_pkdc_itemFoundFLinks;

             var  echart = echarts.init(document.getElementById("xs_pkdc_itemFundRowDataTree"));
             echart.setOption(xs_pkdc_itemFoundForceOpt);
             echart.on("click",function(params,aa,bb){
                alert(1);
             });
         }
     });
 }
/**
 * 创建节点
 * @param depth 力向导图的层级
 * @param i
 * @returns {{name: *, value: number, id: *, depth: *, category: *}}
 */
XS.Main.Pkjc.itemFoundNodeCreate = function (depth,i) {
    var name = "";
    switch (depth){
        case 0:
        case 1:
            name = xs_pkdc_itemFoundFJsonData[depth][i].COUNTY;
            break;
        case 2:
            name = xs_pkdc_itemFoundFJsonData[depth][i].TOWN;
            break;
        case 3:
            name = xs_pkdc_itemFoundFJsonData[depth][i].VILL;
    }
    xs_pkdc_itemFoundFRegion =xs_pkdc_itemFoundFJsonData[depth][i].REGIONID;
    var node = {
        name : name,
        value : xs_pkdc_itemFoundFJsonData[depth][i].FINAFOUND,
        // Custom properties
        id : xs_pkdc_itemFoundFNodes.length,
        depth : xs_pkdc_itemFoundFMaxDepth,
        category : xs_pkdc_itemFoundFMaxDepth
    }
    xs_pkdc_itemFoundFNodes.push(node);
    return node;
}
/**
 * 创建所有的节点
 * @param index
 * @param name
 */
XS.Main.Pkjc.itemFoundNodesCreate = function forceMockThreeData(depth) {
    xs_pkdc_itemFoundFLinks = [];
    xs_pkdc_itemFoundFNodes = [];
    xs_pkdc_itemFoundFRegion = xs_pkdc_currentStateCode;
    xs_pkdc_itemFoundFMaxDepth = 0;
    var rootNode = XS.Main.Pkjc.itemFoundNodeCreate(depth,0);
    XS.Main.Pkjc.itemFoundMock(rootNode, depth + 1);
}
/**
 *
 * @param parentNode
 * @param depth
 */
XS.Main.Pkjc.itemFoundMock = function (parentNode, depth) {
    var nChildren = 0;
    var currentDepthDigit = xs_pkdc_itemFoundFRegion.toString().length;
    for(var i in xs_pkdc_itemFoundFJsonData[depth]){
        if(xs_pkdc_itemFoundFJsonData[depth][i].REGIONID.substr(0,currentDepthDigit) == xs_pkdc_itemFoundFRegion){
            nChildren++;
        }
    }
    if(nChildren == 0){
        return;
    }
    if(depth - xs_pkdc_itemFoundFIndex > xs_pkdc_itemFoundFMaxDepth){
        xs_pkdc_itemFoundFMaxDepth = depth - xs_pkdc_itemFoundFIndex;
    }
    for (var i = 0; i < nChildren; i++) {
        var childNode = XS.Main.Pkjc.itemFoundNodeCreate(depth,i);
        xs_pkdc_itemFoundFLinks.push({
            source : parentNode.id,
            target : childNode.id,
            weight : 1
        });
        XS.Main.Pkjc.itemFoundMock(childNode, depth + 1);
    }
}