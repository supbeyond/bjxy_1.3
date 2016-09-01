/**
 * Created by GZXS on 2016/6/24.
 */
$(function(){
    //用户登陆验证
    xs_Username = sessionStorage.getItem("username");
    xs_Password = sessionStorage.getItem("password");
    xs_user_regionId = sessionStorage.getItem("regionid");

    if(XS.StrUtil.isEmpty(xs_Username)||XS.StrUtil.isEmpty(xs_Password)){
        window.location.href = window.location.toString().substring(0,window.location.toString().lastIndexOf("/")+1) +"index.html";
        return;
    }
    //市id 4位 5224
    //县id 6位
    //乡镇id 9位
    //村id 11位
    switch (xs_user_regionId.length){
        case 4:
            xs_user_regionLevel = XS.Main.ZoneLevel.city;
            break;
        case 6:
            xs_user_regionLevel = XS.Main.ZoneLevel.county;
            break;
        case 9:
            xs_user_regionLevel = XS.Main.ZoneLevel.town;
            break;
        case 11:
        case 12:
            xs_user_regionLevel = XS.Main.ZoneLevel.village;
            break;
    }
    XS.Main.load();
});
//**************************************************
var xs_Username="";
var xs_Password="";
var xs_user_regionId = ""; //用户所属区域id
var xs_user_regionLevel = -1; //用户所属区域级别
var xs_user_Features = []; //缓存用户所属区域Features

var xs_MapInstance;

var xs_utfGridCountyLayer;
var xs_utfGridTownLayer;
var xs_utfGridVillageLayer;

var xs_utfGridController; //属性矢量瓦片控制器
var xs_clusterControl; //聚散图层控制器

var xs_vectorLayer; //矢量图层
var xs_zone_vectorLayer; //矢量图层 专绘制被选中区域矢量图
var xs_author_vectorLayer; //处理用户权限控制
var xs_clusterLayer; //聚散图层

var xs_animatorVectorLayer = null; //矢量动画图层
var xs_markerLayer = null; //marker图层

var xs_labelLayer = null; //标签图层

var xs_tasker_animatorVectorLayer = null; //处理区域任务监督人的动画图层
var xs_tasker_labelLayer = null; //处理区域任务监督人的标签图层动画图层

XS.Main = {};
XS.Main.load = function(){
    XS.CommonUtil.loadProgressCircleTag($(document.body), "xs_load_container");
    XS.CommonUtil.showLoader();
    //鼠标移动监听
    $(document).mousemove(function(e){
        //console.log("X: " + e.pageX + ", Y: " + e.pageY);
        if(e.pageX<1&& e.pageY>$(window).height()/2.0-400&&e.pageY<$(window).height()/2.0+400){
            XS.Main.showLeftToolBar();
        }
    });

    if(!document.createElement('canvas').getContext) {
        alert('您的浏览器不支持 canvas，请升级');
        return;
    }

    xs_MapInstance = new XS.MapInstance();
    xs_MapInstance.bLayerUrl = XS.Constants.map_host+ XS.Constants.map_rest + XS.Constants.maps + XS.Constants.map_name;
    xs_MapInstance.init();

    //--------------layer--------------------------
    xs_utfGridCountyLayer = new SuperMap.Layer.UTFGrid("utfgridcounty",xs_MapInstance.bLayerUrl,
        {
            layerName: "County_Code@"+XS.Constants.dataSourceName,
            utfTileSize: 256,
            pixcell: 8,
            isUseCache: true
        },{
            utfgridResolution: 8
        }
    );
    xs_utfGridTownLayer = new SuperMap.Layer.UTFGrid("utfgridtown",xs_MapInstance.bLayerUrl,
        {
            layerName: "Twon_Code@"+XS.Constants.dataSourceName,
            utfTileSize: 256,
            pixcell: 8,
            isUseCache: true
        },{
            utfgridResolution: 8
        }
    );
    xs_utfGridVillageLayer = new SuperMap.Layer.UTFGrid("utfgridvillage",xs_MapInstance.bLayerUrl,
        {
            layerName: "Village_Code@"+XS.Constants.dataSourceName,
            utfTileSize: 256,
            pixcell: 8,
            isUseCache: true
        },{
            utfgridResolution: 8
        }
    );

    xs_vectorLayer = new SuperMap.Layer.Vector("vectorLayer");
    xs_zone_vectorLayer = new SuperMap.Layer.Vector("zone_vectorLayer");
    xs_author_vectorLayer = new SuperMap.Layer.Vector("author_vectorLayer");
    //聚散点图层
    xs_clusterLayer = new SuperMap.Layer.ClusterLayer("cluster");

    /*xs_markerLayer = new SuperMap.Layer.Maker("marker");*/
    xs_tasker_animatorVectorLayer = new SuperMap.Layer.AnimatorVector("tasker_animator", {rendererType:"TadpolePoint"},{
            //设置速度为每帧播放0.05小时的数据
            speed:50,
            //开始时间为0晨
            startTime:0,
            //结束时间设置为最后运行结束的汽车结束时间
            endTime:0
        });
    var strategy = new SuperMap.Strategy.GeoText();
    strategy.style = {
        fontColor:"#00bbee",
        fontSize:"8px",
        fill: false,
        fillColor: "#000000",
        fillOpacity: 1,
        stroke: false,
        strokeColor:"#ff0000"
    };
    xs_tasker_labelLayer = new SuperMap.Layer.Vector("tasker_label",{strategies: [strategy]});

    ///-------------controller---------------------
    xs_utfGridController = new SuperMap.Control.UTFGrid({
        layers: [xs_utfGridCountyLayer,xs_utfGridTownLayer,xs_utfGridVillageLayer],
        callback: XS.Main.utfGridLayerMoveCallback,
        handlerMode: "move"
    });
    xs_utfGridController.autoActivate = true;
    xs_MapInstance.getMapObj().addControl(xs_utfGridController);

    //矢量图层
   /* xs_vectorFeatureControl = new SuperMap.Control.SelectFeature([vectorLayer, gridVectorLayerCity, gridVectorLayerCounty, gridVectorLayerVillage,clusterLayer], {
        onSelect: vectorFeatureGridControlCallback, onUnselect: function(){}, selectStyle: selectAreaStyle,"id": "gridVectorControl"
        callbacks: selectVectorControlCallback,
        "id": "gridVectorControl"
    });*/

    //聚散点控制器
    xs_clusterControl = new SuperMap.Control.SelectCluster(xs_clusterLayer, {
        callbacks: XS.Main.clusterControlCallback,
        "id": "selectCluster"
    });
    xs_MapInstance.getMapObj().addControl(xs_clusterControl);
    xs_clusterControl.activate();

    //初始化图层
    //地图加载完毕
    xs_MapInstance.getBLayer().events.on({
        "layerInitialized": function () {

           // XS.Main.addVectorPoint2ClusterLayer({}, XS.Main.ClusterPointerStyle.poor);
            //行政边界
            if(xs_user_regionId != xs_cityID)
            {
                var layerName = "";
                var sql = "";
                switch (xs_user_regionLevel){
                    case XS.Main.ZoneLevel.county:
                        layerName = "County_Code";
                        sql = "AdminCode=";
                        break;
                    case XS.Main.ZoneLevel.town:
                        sql = "乡镇代码=";
                        layerName = "Twon_Code";
                        break;
                    case XS.Main.ZoneLevel.village:
                        sql = "OldID=";
                        layerName = "Village_Code";
                        break;
                }
                if(XS.StrUtil.isEmpty(layerName)){
                    XS.CommonUtil.showMsgDialog("","您的权限不够");
                    XS.Index.logout();
                    return;
                }
                //dataSourceName, dataSetName, attributeFilter, mapUrl, processCompleted, processFailed
                XS.MapQueryUtil.queryBySql(XS.Constants.dataSourceName, layerName, sql+xs_user_regionId, xs_MapInstance.bLayerUrl, function(queryEventArgs){
                    var i, feature, result = queryEventArgs.result;
                    if (result && result.recordsets&&result.recordsets[0].features.length>0)
                    {
                        for (i = 0; i < result.recordsets[0].features.length; i++)
                        {
                            feature = result.recordsets[0].features[i];
                            var id = feature.data.AdminCode || feature.data.乡镇代码 || feature.data.OldID;
                            if(xs_user_regionId == id){
                                feature.style =  {
                                    strokeColor: "#00bbee",
                                    strokeWidth: 2,
                                    fill: false
                                };
                                xs_user_Features.push(feature);
                            }
                        }
                        if(xs_user_Features.length<1){
                            XS.CommonUtil.hideLoader();
                            XS.CommonUtil.showMsgDialog("","您所管辖的区域在地图不存在，请联系管理员！");
                            XS.Index.logout();
                            return;
                        }
                        XS.Main.addLayers();

                        xs_author_vectorLayer.setVisibility(true);
                        xs_author_vectorLayer.addFeatures(xs_user_Features);
                        xs_MapInstance.getMapObj().zoomToExtent(xs_user_Features[0].geometry.getBounds(),false);
                        //查询信息
                        XS.CommonUtil.hideLoader();
                    }else{
                        XS.CommonUtil.hideLoader();
                        XS.CommonUtil.showMsgDialog("","您所管辖的区域在地图不存在，请联系管理员！");
                        XS.Index.logout();
                    }
                },function(e){
                    XS.CommonUtil.hideLoader();
                    XS.CommonUtil.showMsgDialog("","地图服务异常");
                    XS.Index.logout();
                });
            }
            else{
                XS.Main.addLayers();
                var tout = setTimeout(function(){
                    XS.CommonUtil.hideLoader();
                    clearTimeout(tout);
                }, 2000);
            }
        }
    });
    XS.Main.init();
}

XS.Main.addLayers = function(){
    xs_MapInstance.getMapObj().maxExtent = new SuperMap.Bounds(103.56 , 26.33, 106.76 , 27.81);
    xs_MapInstance.getMapObj().addLayers([
        xs_MapInstance.getBLayer(),
        xs_utfGridCountyLayer,
        xs_utfGridTownLayer,
        xs_utfGridVillageLayer,
        xs_author_vectorLayer,
        xs_zone_vectorLayer,
        xs_tasker_animatorVectorLayer,
        xs_tasker_labelLayer,
        xs_vectorLayer,
        xs_clusterLayer,
    ]);
    xs_tasker_animatorVectorLayer.setVisibility(false);
    xs_tasker_labelLayer.setVisibility(false);
    xs_author_vectorLayer.setVisibility(false);

    xs_MapInstance.getMapObj().setCenter(xs_MapInstance.getMapCenterPoint(), 1);
    xs_MapInstance.getMapObj().events.on({ "click": XS.Main.clickMapCallback});
    xs_MapInstance.getMapObj().events.on({ "zoomend": XS.Main.zoomedMapCallback});
}
