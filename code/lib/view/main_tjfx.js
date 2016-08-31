/**
 * Created by GZXS on 2016/7/2.
 */
//统计分析
XS.Main.Tjfx={};

var xs_tjfx_themeLayer = null; //统计分析专题图
var xs_tjfx_type = -1; //当前统计类型

//统计类型
XS.Main.Tjfx.type = {
    range_pkfsx:0, //分段--贫困发生率
    range_tpx:1,   //分段--脱贫率
    range_wfx:2   //分段--危房率
}

//缓存行政区域Featuers
XS.Main.Tjfx.type_featuersArr = {
    county:[], //县
    town:[], //乡
    village:[] //村
};

//缓存行政区域信息:县级参考：XS.Main.CacheZoneInfos.county
XS.Main.Tjfx.CacheZoneInfos = {
    county:[],
    town:[],
    village:[]
};

//展示左边统计工具栏
XS.Main.Tjfx.showToolMenu = function(){
    XS.Main.hiddenDivTags();
    XS.Main.closeDialogs();
    XS.Main.hiddenLayers();
    if($("#xs_tjfx_toolmenuC").length<=0){
        XS.CommonUtil.openDialog("xs_tjfx_toomenuC", "统计分析", "icon-large-chart", "", false, false, false, 307, null, 112, 20, function(){
        });
        $("#xs_tjfx_toolmenuC").dialog("refresh", "main_tjfx_toolmenu.html");
    }else{
        $("#xs_tjfx_toolmenuC").dialog('open');
    }
}

//加载县、乡、村features
XS.Main.Tjfx.loadZoneFeatuers = function(level, sql, succeedCallback, failCallback){
    var layerName = "";
    switch (level) {
        case XS.Main.ZoneLevel.city:
            if(XS.Main.Tjfx.type_featuersArr.county.length>0){
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
        switch (level) {
            case XS.Main.ZoneLevel.county:
                XS.Main.Tjfx.type_featuersArr.town = [];
                break;
            case XS.Main.ZoneLevel.town:
                XS.Main.Tjfx.type_featuersArr.village = [];
                break;
        }
        var i, feature, result = queryEventArgs.result;
        if (result && result.recordsets&&result.recordsets[0].features.length>0) {
            for (i = 0; i < result.recordsets[0].features.length; i++) {
                feature = result.recordsets[0].features[i];
                switch (level) {
                    case XS.Main.ZoneLevel.city:
                        XS.Main.Tjfx.type_featuersArr.county.push(feature);
                        break;
                    case XS.Main.ZoneLevel.county:
                        XS.Main.Tjfx.type_featuersArr.town.push(feature);
                        break;
                    case XS.Main.ZoneLevel.town:
                        XS.Main.Tjfx.type_featuersArr.village.push(feature);
                        break;
                }
            }
            succeedCallback();
        }else{
            succeedCallback();
        }
    }, function(e){
        failCallback(e);
    });
}

//清除 图层
XS.Main.Tjfx.removeLayer = function(){
    $("#xs_tjfx_toolmenuC").dialog('close');
    if(xs_labelLayer != null){
        xs_MapInstance.getMapObj().removeLayer(xs_labelLayer);
        xs_labelLayer = null;
    }
    if(xs_tjfx_themeLayer != null){
        xs_MapInstance.getMapObj().removeLayer(xs_tjfx_themeLayer);
        xs_tjfx_themeLayer = null;
    }
}