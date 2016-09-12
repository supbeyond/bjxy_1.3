
/**
 * Created by Administrator on 2016/9/8.
 */
XS.Main.Tjfx.graph = {};
//统计类型
XS.Main.Tjfx.graph.type = {
    graph_pie:0, //图表pie--土地信息
    graph_bar:1, //图表bar--社会保障
}

//缓存行政区域Featuers
XS.Main.Tjfx.graph.featuersArr = {
    county:{graphType:-1,data:[]}, //县
    town:[], //乡
    village:[] //村
};

//缓存行政区域信息:县级参考：XS.Main.CacheZoneInfos.county
XS.Main.Tjfx.graph.CacheZoneInfos = {
    county:{graphType:-1,data:[]},
    town:[],
    village:[]
};

var xs_pkdc_graph_type = -1;
var xs_tjfx_graph_themeLayer = null;
var xs_tjfx_graph_framedCloud = null;
/**
 * 统计专题图
 * @param type 统计类型
 */
XS.Main.detail_landInfo_graph = function(type){
    if(xs_currentZoneFuture != null){
        xs_tjfx_range_centerPoint = xs_currentZoneFuture.geometry.getBounds().getCenterLonLat();
        XS.Main.Tjfx.graph_theme(xs_currentZoneLevel-1, xs_superZoneCode, type);
    }else{
        xs_tjfx_range_centerPoint = xs_MapInstance.getMapCenterPoint();
        switch (xs_user_regionLevel){
            case XS.Main.ZoneLevel.city:
            case XS.Main.ZoneLevel.county:
                XS.Main.Tjfx.graph_theme(XS.Main.ZoneLevel.city, xs_cityID, type);
                break;
            case XS.Main.ZoneLevel.town:
                XS.Main.Tjfx.graph_theme(XS.Main.ZoneLevel.county, xs_user_Features[0].data.县级代码, type);
                break;
            case XS.Main.ZoneLevel.village:
                XS.Main.Tjfx.graph_theme(XS.Main.ZoneLevel.town,  xs_user_Features[0].data.Town_id, type);
                break;
        }
    }
}
/**
 *
 * @param parentLevel
 * @param parentCode
 * @param type
 */
XS.Main.Tjfx.graph_theme = function(parentLevel,parentCode,type){
    xs_isShowUtfGridTip = false;
    xs_currentZoneLevel = parentLevel;
    xs_tjfx_zoneLevel = parentLevel;
    xs_pkdc_graph_type =  type;

    XS.Main.hiddenDivTags();
    XS.Main.Tjfx.removeLayer();

    var graph = "";
    var themeFields = [];
    var chartsSetting = null;
    switch (type){
        case XS.Main.Tjfx.graph.type.graph_pie:
        {
            graph = "Pie";
            themeFields = ['C12', 'C14', 'C14A', 'C15', 'C19', 'C16', 'C17','C14B'];
            chartsSetting = {
                width: 100,
                height: 100,
                codomain: [0, 1100000],
                //sectorStyle: { fillOpacity: 0.9 },
                sectorStyleByFields: [{ fillColor: "#C8E49C" }, { fillColor: "#ED9678" }, { fillColor: "#E7DAC9" }, { fillColor: "#CB8E85" }, { fillColor: "#F3F39D" },
                    { fillColor: "#86B379" }, { fillColor: "#68A54A" }, { fillColor: "#408829" }],
                // 饼图扇形 hover 样式
                sectorHoverStyle: {
                    fillOpacity: 1 ,
                    fillColor: "#397B29",
                }
            };
            break;
        }
        case  XS.Main.Tjfx.graph.type.graph_bar:
        {
            graph = "Bar";
            themeFields = ["CoMedicalRate", "EndowRate", "LowRate"];
            chartsSetting = {
                // width，height，codomain 分别表示图表宽、高、数据值域；此三项参数为必设参数
                width: 150,
                height: 100,
                codomain: [0, 100], // 允许图表展示的值域范围，此范围外的数据将不制作图表
                dataViewBoxParameter:[22,15,5,5],
                barStyle: { fillOpacity: 0.7 }, // 柱状图中柱条的（表示字段值的图形）样式
                barHoverStyle: {fillOpacity: 1}, // 柱条 hover 样式
                xShapeBlank: [10, 10, 10], // 水平方向上的空白间距参数
                axisYTick: 4, // y 轴刻度数量
                axisYLabels: ["100", "75", "50", "25", "0"], // y 轴标签内容
                axisXLabels: ["参合率", "养老率", "低保率"], // x 轴标签内容
                backgroundStyle: {fillColor: "#CCE8CF"}, // 背景样式
                backgroundRadius: [5, 5, 5, 5], // 背景框圆角参数
                //阴影开关 默认是打开
                showShadow: true,
                //阴影样式
                barShadowStyle:{shadowBlur : 8, shadowOffsetX: 2 , shadowOffsetY : 2,shadowColor : "rgba(100,100,100,0.8)"},
                //按字段设置柱条样式[渐变开始颜色,渐变终止颜色] 与 themeLayer.themeFields 中的字段一一对应）
                barLinearGradient: [["#00FF00","#00CD00"],["#00CCFF","#5E87A2"],["#00FF66","#669985"]]
            };
            break;
        }
    }

    // 创建一个统计专题图图层
    xs_tjfx_graph_themeLayer = new SuperMap.Layer.Graph("ThemeLayer", graph);
    // 指定用于专题图制作的属性字段
    xs_tjfx_graph_themeLayer.themeFields = themeFields;
    // 配置图表参数
    xs_tjfx_graph_themeLayer.chartsSetting = chartsSetting;

    xs_tjfx_graph_themeLayer.setOpacity(0.9);
    xs_tjfx_graph_themeLayer.isOverLay = false;

    $("#xs_mainC").append(XS.Main.Tjfx.range_createRangeLegendTag(type,parentCode));

    // 注册专题图 mousemove, mouseout事件(注意：专题图图层对象自带 on 函数，没有 events 对象)
    xs_tjfx_graph_themeLayer.on("mousemove", XS.Main.Tjfx.graph.showInfoWin);
    xs_tjfx_graph_themeLayer.on("mouseout", XS.Main.Tjfx.graph.closeInfoWin);

    xs_tjfx_graph_themeLayer.setVisibility(false);
    xs_MapInstance.getMapObj().addLayer(xs_tjfx_graph_themeLayer);

    var data = {};
    switch (parentLevel)
    {
        case XS.Main.ZoneLevel.city:
        {
            xs_MapInstance.getMapObj().setCenter(xs_tjfx_range_centerPoint, 1);
            XS.CommonUtil.showLoader();
            //1.先获业务数据通过业务数据
            //2.获取空间数据
            //3.通过业务数据过滤空间数据

            if(type == XS.Main.Tjfx.graph.CacheZoneInfos.county.graphType && XS.Main.Tjfx.graph.CacheZoneInfos.county.data.length > 0){
                //2.获取空间数据
                if(XS.Main.Tjfx.graph.featuersArr.county.data.length > 0){
                    XS.Main.Tjfx.graph_addFeatures2Layer(XS.Main.Tjfx.graph.featuersArr.county.data,XS.Main.Tjfx.graph.CacheZoneInfos.county.data,0);
                    return;
                }
                XS.Main.Tjfx.graph_loadZoneFeatuers(parentLevel, "SMID>0", function()
                    {
                        if(XS.Main.Tjfx.graph.featuersArr.county.data.length>0)
                        {
                            XS.Main.Tjfx.graph_addFeatures2Layer(XS.Main.Tjfx.graph.featuersArr.county.data,XS.Main.Tjfx.graph.CacheZoneInfos.county.data,0);
                        }
                        XS.CommonUtil.hideLoader();
                    }, function(e)
                    {
                        XS.CommonUtil.hideLoader();
                    }
                );
            }else {
                var action = "";
                switch (type) {
                    case XS.Main.Tjfx.graph.type.graph_pie:
                        action = "QueryCounty_EarthInfo";
                        break;
                    case XS.Main.Tjfx.graph.type.graph_bar:
                        action = "QuerySocityProtectBycounty";
                        break;
                }

                data = {pid: parentCode,pd_id: parentCode};
                XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, action, data, function (json) {
                    if (json && json.length > 0) {
                        XS.Main.Tjfx.graph.CacheZoneInfos.county.data = json;
                        XS.Main.Tjfx.graph.CacheZoneInfos.county.graphType = type;

                        //2.获取空间数据
                        if (XS.Main.Tjfx.graph.featuersArr.county.data.length > 0) {
                            XS.Main.Tjfx.graph_addFeatures2Layer(XS.Main.Tjfx.graph.featuersArr.county.data, XS.Main.Tjfx.graph.CacheZoneInfos.county.data, 0);
                            return;
                        }
                        XS.Main.Tjfx.graph_loadZoneFeatuers(parentLevel, "SMID>0", function () {
                                if (XS.Main.Tjfx.graph.featuersArr.county.data.length > 0) {
                                    XS.Main.Tjfx.graph_addFeatures2Layer(XS.Main.Tjfx.graph.featuersArr.county.data,XS.Main.Tjfx.graph.CacheZoneInfos.county.data,0);
                                }
                            }, function (e) {
                                XS.CommonUtil.hideLoader();
                            }
                        );
                    } else {
                        XS.CommonUtil.hideLoader();
                        XS.CommonUtil.showMsgDialog("", "获取数据失败！");
                    }
                }, function (e) {
                    XS.CommonUtil.hideLoader();
                });
            }
            break;
        }
        case XS.Main.ZoneLevel.county:
        {
            xs_MapInstance.getMapObj().setCenter(xs_tjfx_range_centerPoint, 6);
            XS.CommonUtil.showLoader();

            //请求镇级数据
            var action = "";
            switch (type){
                case XS.Main.Tjfx.graph.type.graph_pie:
                    action = "QueryTowns_EarthInfo";
                    break;
                case XS.Main.Tjfx.graph.type.graph_bar:
                    action = "QuerySocityProtectByTown";
                    break;
            }
            data = {pid:parentCode,pd_id:parentCode};
            XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, action, data, function (json) {
                if (json && json.length > 0)
                {
                    XS.Main.Tjfx.graph.CacheZoneInfos.town = json;
                    XS.Main.Tjfx.graph_loadZoneFeatuers(parentLevel, "县级代码=="+parentCode, function()
                        {
                            if(XS.Main.Tjfx.graph.featuersArr.town.length>0)
                            {
                                XS.Main.Tjfx.graph_addFeatures2Layer(XS.Main.Tjfx.graph.featuersArr.town,XS.Main.Tjfx.graph.CacheZoneInfos.town,1);
                            }
                            XS.CommonUtil.hideLoader();
                        }, function(e)
                        {
                            XS.CommonUtil.hideLoader();
                        }
                    );
                }else{
                    XS.CommonUtil.hideLoader();
                    XS.CommonUtil.showMsgDialog("", "获取数据失败！");
                }
            },function(e){XS.CommonUtil.hideLoader();});
            break;
        }
        case XS.Main.ZoneLevel.town:
        {
            xs_MapInstance.getMapObj().setCenter(xs_tjfx_range_centerPoint, 8);
            XS.CommonUtil.showLoader();

            //请求村数据
            var action = "";
            switch (type){
                case XS.Main.Tjfx.graph.type.graph_pie:
                    action = "QueryVillEarthInfo";
                    break;
                case XS.Main.Tjfx.graph.type.graph_bar:
                    action = "QuerySocityProtectByTown";
                    break;
            }
            data = {pid:parentCode, pd_id:parentCode};
            XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, action, data, function (json) {
                if (json && json.length > 0) {
                    XS.Main.Tjfx.graph.CacheZoneInfos.town = json;
                    XS.Main.Tjfx.graph_loadZoneFeatuers(parentLevel, "Town_id=="+parentCode, function()
                        {
                            if(XS.Main.Tjfx.graph.featuersArr.village.length>0)
                            {
                                XS.Main.Tjfx.graph_addFeatures2Layer(XS.Main.Tjfx.graph.featuersArr.village,XS.Main.Tjfx.graph.CacheZoneInfos.village,2);
                            }
                            XS.CommonUtil.hideLoader();
                        }, function(e)
                        {
                            XS.CommonUtil.hideLoader();
                        }
                    );
                }else{
                    XS.CommonUtil.hideLoader();
                    XS.CommonUtil.showMsgDialog("", "获取数据失败！");
                }
            },function(e){XS.CommonUtil.hideLoader();});
            break;
        }
    }
}
//加载县、乡、村features
XS.Main.Tjfx.graph_loadZoneFeatuers = function(parentLevel, sql, succeedCallback, failCallback){
    var layerName = "";
    switch (parentLevel) {
        case XS.Main.ZoneLevel.city:
            if(XS.Main.Tjfx.graph.featuersArr.county.data.length>0){
                succeedCallback();
                return;
            }
            layerName = "County_Code";
            break;
        case XS.Main.ZoneLevel.county:
            layerName = "Twon_Code";
            break;
        case XS.Main.ZoneLevel.town:
            layerName = "Village_Code";
            break;
    }
    XS.MapQueryUtil.queryBySql(XS.Constants.dataSourceName, layerName, sql, xs_MapInstance.bLayerUrl,function(queryEventArgs)
    {
        switch (parentLevel) {
            case XS.Main.ZoneLevel.county:
                XS.Main.Tjfx.graph.featuersArr.town = [];
                break;
            case XS.Main.ZoneLevel.town:
                XS.Main.Tjfx.graph.featuersArr.village = [];
                break;
        }
        var i, feature, result = queryEventArgs.result;
        if (result && result.recordsets&&result.recordsets[0].features.length>0) {
            for (i = 0; i < result.recordsets[0].features.length; i++) {
                feature = result.recordsets[0].features[i];
                switch (parentLevel) {
                    case XS.Main.ZoneLevel.city:
                        XS.Main.Tjfx.graph.featuersArr.county.data.push(feature);
                        break;
                    case XS.Main.ZoneLevel.county:
                        XS.Main.Tjfx.graph.featuersArr.town.push(feature);
                        break;
                    case XS.Main.ZoneLevel.town:
                        XS.Main.Tjfx.graph.featuersArr.village.push(feature);
                        break;
                }
            }
            if(parentLevel == XS.Main.ZoneLevel.city){
                XS.Main.Tjfx.graph.featuersArr.county.graphType = xs_pkdc_graph_type;
            }
            succeedCallback();
        }else{
            succeedCallback();
        }
    }, function(e){
        failCallback(e);
    });
}
//添加Features到ThemeLayer
XS.Main.Tjfx.graph_addFeatures2Layer = function(featureArr, data, parentLevel){ // 0:city 1:county 2:town

    var oId = "";
    var fId = "";

    switch (parentLevel){
        case 0: //市
            fId = "AdminCode";
            break;
        case 1: //县
            fId = "乡镇代码";
            break;
        case 2: //镇
            fId = "OldID";
            break;
    }
    switch (xs_pkdc_graph_type)
    {
        case XS.Main.Tjfx.graph.type.graph_pie:
            oId = "regionid";
            break;
        case XS.Main.Tjfx.graph.type.graph_bar:
            oId = "REGION_ID";
            break;
    }

    var features = [];
    var feature = null;

    var xOff = (1 / xs_MapInstance.getMapObj().getScale()) * 0.00000001;
    var yOff = -(1 / xs_MapInstance.getMapObj().getScale()) * 0.00000005;

    for (var i in featureArr)
    {
        feature = featureArr[i];
        for(var j=0; j<data.length; j++)
        {
            var obj = data[j];
            if(obj[oId]==feature.data[fId])
            {
                var isNext = false;
                switch (parentLevel){
                    case 0: //市
                        if(xs_user_regionLevel == XS.Main.ZoneLevel.county &&  xs_user_regionId != feature.data[fId]){
                            isNext = true;
                        }
                        break;
                    case 1: //县
                        if(xs_user_regionLevel == XS.Main.ZoneLevel.town &&  xs_user_regionId != feature.data[fId]){
                            isNext = true;
                        }
                        break;
                    case 2: //镇;
                        if(xs_user_regionLevel == XS.Main.ZoneLevel.village &&  xs_user_regionId != feature.data[fId]){
                            isNext = true;
                        }
                        break;
                }
                if(isNext){
                    break;
                }

                switch (xs_pkdc_graph_type)
                {
                    case XS.Main.Tjfx.graph.type.graph_pie:
                    {
                        feature.attributes.C12 = obj.C12 != null ? obj.C12 : 0;
                        feature.attributes.C14 = obj.C14 != null ? obj.C14 : 0;
                        feature.attributes.C14A = obj.C14A != null ? obj.C14A : 0;
                        feature.attributes.C15 = obj.C15 != null ? obj.C15 : 0;
                        feature.attributes.C19 = obj.C19 != null ? obj.C19 : 0;
                        feature.attributes.C16 = obj.C16 != null ? obj.C16 : 0;
                        feature.attributes.C17 = obj.C17 != null ? obj.C17 : 0;
                        feature.attributes.C14B = obj.C14B != null ? obj.C14B : 0;
                        break;
                    }
                    case XS.Main.Tjfx.graph.type.graph_bar:
                    {
                        feature.attributes.CoMedicalRate = obj.CoMedicalRate;
                        feature.attributes.EndowRate = obj.EndowRate;
                        feature.attributes.LowRate = obj.LowRate;
                        break;
                    }
                }
                feature.data.xs_data = obj;
                features.push(feature);
            }
        }
    }
    xs_tjfx_graph_themeLayer.addFeatures(features);
    xs_tjfx_graph_themeLayer.setVisibility(true);
    XS.CommonUtil.hideLoader();
    console.log(xs_tjfx_graph_themeLayer);
}
/**
 * 专题图pie mousemove事件
 * @param e
 */
XS.Main.Tjfx.graph.showInfoWin = function(e){
    if(e.target && e.target.refDataID && e.target.dataInfo){
        XS.Main.Tjfx.graph.closeInfoWin(e);
         // 获取图形对应的数据 (feature)
        var fea = xs_tjfx_graph_themeLayer.getFeatureById(e.target.refDataID);
        if(fea == null){
            return;
        }
        var attributes = fea.attributes;
        var info = e.target.dataInfo;
        var sum = 0;
        var fields = ['C12', 'C14', 'C14A', 'C15', 'C19', 'C16', 'C17','C14B'];
        switch(xs_pkdc_graph_type){
            case XS.Main.Tjfx.graph.type.graph_pie:{
                for(var i in fields){
                    sum +=　parseInt(attributes[fields[i]]);
                }
                break;
            }
        }
        console.log(sum);
        var jsonObjArr = [];
        var title = "";

        jsonObjArr.push({name:'区域',value:attributes.Name});
        jsonObjArr.push({name:'区域ID',value:attributes.AdminCode});

        switch (xs_pkdc_graph_type){
            case XS.Main.Tjfx.graph.type.graph_pie:{
                title = "土地信息";
                switch (info.field){
                    case "C12":{
                        jsonObjArr.push({name:'土地类型',value:"耕地"});
                        jsonObjArr.push({name:'面积',value:attributes.C12});
                        jsonObjArr.push({name:'占比(%)',value:new Number((attributes.C12/sum)*100).toFixed(2)});
                        break;
                    }
                    case "C14":{
                        jsonObjArr.push({name:'土地类型',value:"退耕还林"});
                        jsonObjArr.push({name:'面积',value:attributes.C14});
                        jsonObjArr.push({name:'占比(%)',value:new Number((attributes.C14/sum)*100).toFixed(2)});
                        break;
                    }
                    case "C14A":{
                        jsonObjArr.push({name:'土地类型',value:"荒漠化"});
                        jsonObjArr.push({name:'面积',value:attributes.C14A});
                        jsonObjArr.push({name:'占比(%)',value:new Number((attributes.C14A/sum)*100).toFixed(2)});
                        break;
                    }
                    case "C15":{
                        jsonObjArr.push({name:'土地类型',value:"退耕还草"});
                        jsonObjArr.push({name:'面积',value:attributes.C15});
                        jsonObjArr.push({name:'占比(%)',value:new Number((attributes.C15/sum)*100).toFixed(2)});
                        break;
                    }
                    case "C19":{
                        jsonObjArr.push({name:'土地类型',value:"林地"});
                        jsonObjArr.push({name:'面积',value:attributes.C19});
                        jsonObjArr.push({name:'占比(%)',value:new Number((attributes.C19/sum)*100).toFixed(2)});
                        break;
                    }
                    case "C16":{
                        jsonObjArr.push({name:'土地类型',value:"林地"});
                        jsonObjArr.push({name:'面积',value:attributes.C16});
                        jsonObjArr.push({name:'占比(%)',value:new Number((attributes.C16/sum)*100).toFixed(2)});
                        break;
                    }
                    case "C17":{
                        jsonObjArr.push({name:'土地类型',value:"林地"});
                        jsonObjArr.push({name:'面积',value:attributes.C17});
                        jsonObjArr.push({name:'占比(%)',value:new Number((attributes.C17/sum)*100).toFixed(2)});
                        break;
                    }
                    case "C14B":{
                        jsonObjArr.push({name:'土地类型',value:"林地"});
                        jsonObjArr.push({name:'面积',value:attributes.C14B});
                        jsonObjArr.push({name:'占比(%)',value:new Number((attributes.C14B/sum)*100).toFixed(2)});
                        break;
                    }
                }
                break;
            }
            case XS.Main.Tjfx.graph.type.graph_bar:{
                title = "社会保障";
                switch (info.field){
                    case "CoMedicalRate":{
                        jsonObjArr.push({name:'参合率(%)',value:new Number(attributes.CoMedicalRate).toFixed(2)});
                        break;
                    }
                    case "EndowRate":{
                        jsonObjArr.push({name:'养老率(%)',value:new Number(attributes.EndowRate).toFixed(2)});
                        break;
                    }
                    case "CoMedicalRate":{
                        jsonObjArr.push({name:'低保率(%)',value:new Number(attributes.CoMedicalRate).toFixed(2)});
                        break;
                    }
                }
                break;
            }
        }
        // 弹窗内容
        var tag ="<div id='xs_tjfx_range_themeTipC' style='width: 200px; height: 200px; border-radius: 2px; border: 5px solid #00bbee;position1:absolute;z-index1: 12;opacity: 0.9; display1: none;background: #ffffff;'>" +
            '<div style="width: 100%; height: 10%; background: #00bbee;color: #ffffff;line-height: 100%;font-size: 15px;font-weight: bold;padding-left: 5px;overflow: hidden;">' + title + '</div>'+
            '<div style="border: 5px solid transparent; box-sizing: border-box; width: 100%; height: 90%;"><table border="1" style="width: 100%; height: 100%;border: 1px solid rgba(128, 128, 128, 0.16);border-collapse: collapse;font-size: 13px;">';
            for(var i=0; i<jsonObjArr.length; i++){
                tag +=  '<tr><td>'+jsonObjArr[i].name+'</td><td>'+jsonObjArr[i].value+'</td></tr>';
            }
        tag += '</div></table></div>';


        var pixel = new SuperMap.Pixel(e.event.x,e.event.y);
        var lonLat = xs_MapInstance.getMapObj().getLonLatFromPixel(pixel);
        /*xs_tjfx_graph_framedCloud = new SuperMap.Popup.FramedCloud(
            "infowin",
            lonLat,
            new SuperMap.Size(210, 210),
            tag
        );*/

        xs_tjfx_graph_framedCloud = new SuperMap.Popup.Anchored(
            "framedCloud",
             lonLat,
             new SuperMap.Size(210, 210),
             tag
         );

        xs_tjfx_graph_framedCloud.autoSize = false;
        xs_tjfx_graph_framedCloud.setOpacity(0.8);
        if(xs_tjfx_graph_framedCloud) xs_MapInstance.getMapObj().removePopup(xs_tjfx_graph_framedCloud);
        xs_MapInstance.getMapObj().addPopup(xs_tjfx_graph_framedCloud);
    }
}
/**
 * 专题图pie mouseout事件
 * @param e
 */
XS.Main.Tjfx.graph.closeInfoWin = function (e) {
    if(xs_tjfx_graph_framedCloud) {
        try {
            xs_MapInstance.getMapObj().removePopup(xs_tjfx_graph_framedCloud);
            xs_tjfx_graph_framedCloud = null;
        }
        catch(e) {
            alert(e.message);
        }
    }
}
/*
//创建分段专题 图例
XS.Main.Tjfx.range_createRangeLegendTag = function(type, parentLevel){
    var tag = '<div id="xs_tjfx_range_Legend">'+
        '<div class="legendTitle">'+
        '<span>图例</span>'+
        '</div>'+
        '<div class="legendContent">'+
        '<table>'+
        '<tr>';

    XS.Main.Tjfx.graph.socialProtect = ["参合率","养老率","低保率"];
    switch (type)
    {
        case XS.Main.Tjfx.graph.type.graph_pie:
        {
            tag += '<td class="legendItemHeader">土地信息</td><td class="legendItemValue">颜色</td></tr>';

            var landCategory = ["耕地","林地","退耕还林","牧草地","退耕还草","水域","荒漠化","林果"];
            var landCategoryStyle = ["#C8E49C","#ED9678","#E7DAC9","#CB8E85","#F3F39D","#86B379","#68A54A","#408829"];
            for(var i in landCategory){
                    tag += '<tr>';
                    tag += '<td class="legendItemHeader">'+landCategory[i]+'</td>';
                    tag += "<td class='legendItemValue' style='background: "+landCategoryStyle[i]+"'"+"></td>";
                    tag += '</tr>';
                }
            break;
        }
        case XS.Main.Tjfx.graph.type.graph_bar:
        {
            tag += '<td class="legendItemHeader">社会保障</td><td class="legendItemValue">颜色</td></tr>';

            var landCategory = ["参合率","养老率","低保率"];
            var landCategoryStyle = [["#00FF00","#00CD00"],["#00CCFF","#5E87A2"],["#00FF66","#669985"]];
            for(var i in landCategory){
                tag += '<tr>';
                tag += '<td class="legendItemHeader">'+landCategory[i]+'</td>';
                tag += "<td class='legendItemValue' style='background: linear-gradient(to top, red, orange, yellow, green, blue, indigo, violet)"+landCategory[i]+"'"+"></td>";
                tag += '</tr>';
            }
            break;
        }
    }
    tag += '</table></div></div>';

    return tag;
}
*/
