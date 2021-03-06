/**
 * Created by GZXS on 2016/10/8.
 * 行政区域处理
 */

XS.Main.Ztree = {};

XS.Main.Ztree.zoneFeatuers = {
    county:[],
    town:[],
    village:[]
};
var xs_ztree_isInitedData = false; //是否正在初始化数据
var xs_ztree_isCountyFinish = false;
var xs_ztree_isTownFinish = false;
var xs_ztree_isVillFinish = false;

/**
 * 加载行政区域树
 * @param superRegId
 * @param superLevel
 */
XS.Main.Ztree.load = function(regId, ulevel)
{
    XS.CommonUtil.showLoader();
    switch (ulevel) {
        case XS.Main.ZoneLevel.city:
            XS.Main.Ztree.handleZoneData(regId, ulevel);
            break;
        case XS.Main.ZoneLevel.county:
            XS.Main.Ztree.loadCounty(regId, ulevel);
            XS.Main.Ztree.loadTown(regId, ulevel);
            XS.Main.Ztree.loadVillage(regId, ulevel);
            break;
        case XS.Main.ZoneLevel.town:
            xs_ztree_isCountyFinish = true;
            XS.Main.Ztree.loadTown(regId, ulevel);
            XS.Main.Ztree.loadVillage(regId, ulevel);
            break;
        case XS.Main.ZoneLevel.village:
            xs_ztree_isCountyFinish = true;
            xs_ztree_isTownFinish = true;
            XS.Main.Ztree.loadVillage(regId, ulevel);
            break;
    }
}

XS.Main.Ztree.loadCounty = function (regId, ulevel)
{
    //缓存管理员数据
    var sql = "";
    var layerName = "County_Code";
    switch (ulevel) {
        case XS.Main.ZoneLevel.city:
            sql = "SMID>0";
            break;
        case XS.Main.ZoneLevel.county:
            XS.Main.Ztree.zoneFeatuers.county = xs_user_Features;
            xs_ztree_isCountyFinish = true;
            XS.Main.Ztree.handleZoneData(regId, ulevel);
            //XS.Main.Ztree.loadTown(regId, ulevel);
            return;
    }
    XS.MapQueryUtil.queryBySql(XS.Constants.dataSourceName, layerName, sql, XS.Constants.map_query,function(queryEventArgs)
    {
        var i, feature, result = queryEventArgs.result;
        if (result && result.recordsets&&result.recordsets[0]&&result.recordsets[0].features.length>0)
        {
            for (i = 0; i < result.recordsets[0].features.length; i++)
            {
                feature = result.recordsets[0].features[i];
                XS.Main.Ztree.zoneFeatuers.county.push(feature);
            }
            xs_ztree_isCountyFinish = true;
            XS.Main.Ztree.handleZoneData(regId, ulevel);
            //XS.Main.Ztree.loadTown(regId, ulevel);
        }else{
            XS.CommonUtil.hideLoader();
            XS.CommonUtil.showMsgDialog("","加载数据失败！");
            XS.Login.logout();
        }
    }, function(e){
        XS.CommonUtil.hideLoader();
        XS.CommonUtil.showMsgDialog("","加载数据失败！");
        XS.Login.logout();
    });
}
XS.Main.Ztree.loadTown = function (regId, ulevel)
{
    var sql = "";
    var layerName = "Twon_Code";
    switch (ulevel) {
        case XS.Main.ZoneLevel.city:
            return
            sql = "SMID>0";
            break;
        case XS.Main.ZoneLevel.county:
            sql = "县级代码="+regId;
            break;
        case XS.Main.ZoneLevel.town:
            XS.Main.Ztree.zoneFeatuers.town = xs_user_Features;
            xs_ztree_isTownFinish = true;
            XS.Main.Ztree.handleZoneData(regId, ulevel);
            //XS.Main.Ztree.loadVillage(regId, ulevel);
            return;
    }
    XS.MapQueryUtil.queryBySql(XS.Constants.dataSourceName, layerName, sql, XS.Constants.map_query,function(queryEventArgs)
    {
        var i, feature, result = queryEventArgs.result;
        if (result && result.recordsets&&result.recordsets[0]&&result.recordsets[0].features.length>0)
        {
            for (i = 0; i < result.recordsets[0].features.length; i++)
            {
                feature = result.recordsets[0].features[i];
                XS.Main.Ztree.zoneFeatuers.town.push(feature);
            }
            xs_ztree_isTownFinish = true;
            XS.Main.Ztree.handleZoneData(regId, ulevel);
            //XS.Main.Ztree.loadVillage(regId, ulevel);
        }else{
            XS.CommonUtil.hideLoader();
            XS.CommonUtil.showMsgDialog("","加载数据失败！");
            XS.Login.logout();
        }
    }, function(e){
        XS.CommonUtil.hideLoader();
        XS.CommonUtil.showMsgDialog("","加载数据失败！");
        XS.Login.logout();
    });
}
XS.Main.Ztree.loadVillage = function (regId, ulevel)
{
    var sql = "";
    var layerName = "Village_Code";
    switch (ulevel) {
        case XS.Main.ZoneLevel.city:
            //sql = "SMID>0";
            //XS.Main.Ztree.handleZoneData(regId, ulevel); //一次请求所有村的数据太多
            return;
        case XS.Main.ZoneLevel.county:
            sql = "country_id="+regId;
            break;
        case XS.Main.ZoneLevel.town:
            sql = "Town_id="+regId;
            break;
        case XS.Main.ZoneLevel.village:
            XS.Main.Ztree.zoneFeatuers.village = xs_user_Features;
            xs_ztree_isVillFinish = true;
            //处理数据
            XS.Main.Ztree.handleZoneData(regId, ulevel);
            return;
    }
    XS.MapQueryUtil.queryBySql(XS.Constants.dataSourceName, layerName, sql, XS.Constants.map_query,function(queryEventArgs)
    {
        var i, feature, result = queryEventArgs.result;
        if (result && result.recordsets&&result.recordsets[0]&&result.recordsets[0].features.length>0)
        {
            for (i = 0; i < result.recordsets[0].features.length; i++)
            {
                feature = result.recordsets[0].features[i];
                XS.Main.Ztree.zoneFeatuers.village.push(feature);
            }
            //处理数据
            if(ulevel != XS.Main.ZoneLevel.city){
                xs_ztree_isVillFinish = true;
                XS.Main.Ztree.handleZoneData(regId, ulevel);
            }
        }else{
            XS.CommonUtil.hideLoader();
            XS.CommonUtil.showMsgDialog("","加载数据失败！");
            XS.Login.logout();
        }
        //XS.Searchbox.init();
    }, function(e){
        XS.CommonUtil.hideLoader();
        XS.CommonUtil.showMsgDialog("","加载数据失败！");
        XS.Login.logout();
    });
}

XS.Main.Ztree.handleZoneData = function(regId, ulevel){
    if(ulevel != XS.Main.ZoneLevel.city){
        if(!xs_ztree_isCountyFinish || !xs_ztree_isTownFinish || !xs_ztree_isVillFinish){
            return;
        }
    }
    var data = [];
    switch (ulevel)
    {
        case XS.Main.ZoneLevel.city:
        {
            var cityObj = {
                "id":1,
                "state":"open",
                "text":"毕节市",
                 xs_nlevel:0,
                 xs_feature:null,
                 xs_id:xs_cityID,
                "children":[]
            }
            var treeNodeNum = 0;
            for(var countyId in xs_pkdc_countyNames)
            {
                treeNodeNum++;
                var countyObj = {
                    "id":parseInt(cityObj.id+''+treeNodeNum),
                    "state":"closed",
                     xs_nlevel:1,
                    xs_feature:null,
                    xs_id:countyId,
                    "text":xs_pkdc_countyNames[countyId],
                    "children":[]
                }
                cityObj.children.push(countyObj);
            }
            data.push(cityObj);
            break;
        }
        case XS.Main.ZoneLevel.county:
        {
            var countyObj = {
                "id":1,
                "state":"open",
                 xs_nlevel:1,
                xs_feature:XS.Main.Ztree.zoneFeatuers.county[0],
                 xs_id:XS.Main.Ztree.zoneFeatuers.county[0].data.AdminCode,
                "text":XS.Main.Ztree.zoneFeatuers.county[0].data.Name,
                "children":[]
            };
            for(var i=1;i<=XS.Main.Ztree.zoneFeatuers.town.length;i++)
            {
                var townId = XS.Main.Ztree.zoneFeatuers.town[i-1].data.乡镇代码;
                var townObj = {
                    "id":parseInt('1'+i),
                    "state":"closed",
                     xs_nlevel:2,
                    xs_id:townId,
                    xs_feature:XS.Main.Ztree.zoneFeatuers.town[i-1],
                    "text":XS.Main.Ztree.zoneFeatuers.town[i-1].data.乡镇名称,
                    "children":[]
                }
                countyObj.children.push(townObj);
            }
            data.push(countyObj);
            break;
        }
        case XS.Main.ZoneLevel.town:
        {

            var townObj = {
                "id":1,
                "state":"open",
                xs_nlevel:2,
                xs_feature:XS.Main.Ztree.zoneFeatuers.town[0],
                xs_id:XS.Main.Ztree.zoneFeatuers.town[0].data.乡镇代码,
                "text":XS.Main.Ztree.zoneFeatuers.town[0].data.乡镇名称,
                "children":[]
            };
            for(var i=1;i<=XS.Main.Ztree.zoneFeatuers.village.length;i++){
                var villObj = {
                    "id":parseInt('1'+i),
                    xs_nlevel:3,
                    xs_feature:XS.Main.Ztree.zoneFeatuers.village[i-1],
                    "text":XS.Main.Ztree.zoneFeatuers.village[i-1].data.vd_name
                }
                townObj.children.push(villObj);
            }
            data.push(townObj);
            break;
        }
        case XS.Main.ZoneLevel.village:
        {
            var villObj = {
                "id":1,
                xs_nlevel:3,
                xs_feature:XS.Main.Ztree.zoneFeatuers.village[0],
                "text":XS.Main.Ztree.zoneFeatuers.village[0].data.vd_name
            };
            data.push(villObj);
            break;
        }
    }
    $('#xs_main_ztree').tree({
        data:data,
        lines:true,
        animate:false,
        onBeforeExpand:function(node)
        {
            if (node.children && node.children.length == 0) {
                var data = [];
                if (xs_user_regionLevel == XS.Main.ZoneLevel.city) //请求数据
                {
                    if(node.xs_nlevel == 1)//县
                    {
                        XS.CommonUtil.showLoader();
                        var sql = "县级代码=" + node.xs_id;
                        var layerName = "Twon_Code";
                        XS.MapQueryUtil.queryBySql(XS.Constants.dataSourceName, layerName, sql, XS.Constants.map_query, function (queryEventArgs) {
                            var i, feature, result = queryEventArgs.result;
                            if (result && result.recordsets && result.recordsets[0].features.length > 0) {
                                for (i = 0; i < result.recordsets[0].features.length; i++) {
                                    feature = result.recordsets[0].features[i];
                                    var townObj = {
                                        "id": parseInt(node.id + '' + i),
                                        "state": "closed",
                                        xs_nlevel: 2,
                                        xs_id: feature.data.乡镇代码,
                                        xs_feature: feature,
                                        "text": feature.data.乡镇名称,
                                        "children": []
                                    }
                                    data.push(townObj);
                                }
                                //处理数据
                                //getChildren
                                XS.CommonUtil.hideLoader();
                                if (node.children && node.children.length == 0) {
                                    $('#xs_main_ztree').tree('append', {
                                        parent: node.target,
                                        data: data
                                    });
                                }

                                $('#xs_main_ztree').tree('collapse', node.target).tree('expand', node.target).tree('expandTo', node.target);
                            } else {
                                XS.CommonUtil.hideLoader();
                                XS.CommonUtil.showMsgDialog("", "加载数据失败！");
                            }
                        }, function (e) {
                            XS.CommonUtil.hideLoader();
                            XS.CommonUtil.showMsgDialog("", "加载数据失败！");
                        });
                    }else{
                        XS.CommonUtil.showLoader();
                        var sql = "Town_id=" + node.xs_id;
                        var layerName = "Village_Code";
                        XS.MapQueryUtil.queryBySql(XS.Constants.dataSourceName, layerName, sql, XS.Constants.map_query, function (queryEventArgs) {
                            var i, feature, result = queryEventArgs.result;
                            if (result && result.recordsets && result.recordsets[0].features.length > 0) {
                                for (i = 0; i < result.recordsets[0].features.length; i++) {
                                    feature = result.recordsets[0].features[i];
                                    var villObj = {
                                        "id": parseInt(node.id + '' + (i + 1)),
                                        xs_feature: feature,
                                        xs_nlevel: 3,
                                        "text": feature.data.vd_name
                                    }
                                    data.push(villObj);
                                }
                                //处理数据
                                //getChildren
                                XS.CommonUtil.hideLoader();
                                if (node.children && node.children.length == 0) {
                                    $('#xs_main_ztree').tree('append', {
                                        parent: node.target,
                                        data: data
                                    });
                                }
                                $('#xs_main_ztree').tree('collapse', node.target).tree('expand', node.target).tree('expandTo', node.target);
                            } else {
                                XS.CommonUtil.hideLoader();
                                XS.CommonUtil.showMsgDialog("", "加载数据失败！");
                            }
                        }, function (e) {
                            XS.CommonUtil.hideLoader();
                            XS.CommonUtil.showMsgDialog("", "加载数据失败！");
                        });
                    }
                }else{
                    if (node.xs_nlevel == 1) { //县
                        for (var i = 1; i <= XS.Main.Ztree.zoneFeatuers.town.length; i++) {
                            var townId = XS.Main.Ztree.zoneFeatuers.town[i - 1].data.乡镇代码;
                            if (XS.Main.Ztree.zoneFeatuers.town[i - 1].data.县级代码 != node.xs_id) {
                                continue;
                            }
                            var townObj = {
                                "id": parseInt(node.id + '' + i),
                                "state": "closed",
                                xs_nlevel: 2,
                                xs_id: townId,
                                xs_feature: XS.Main.Ztree.zoneFeatuers.town[i - 1],
                                "text": XS.Main.Ztree.zoneFeatuers.town[i - 1].data.乡镇名称,
                                "children": []
                            }
                            data.push(townObj);
                        }
                    } else { //镇
                        for (var i = 1; i <= XS.Main.Ztree.zoneFeatuers.village.length; i++) {
                            //Town_id
                            if (XS.Main.Ztree.zoneFeatuers.village[i - 1].data.Town_id != node.xs_id) {
                                continue;
                            }
                            var villObj = {
                                "id": parseInt(node.id + '' + i),
                                xs_feature: XS.Main.Ztree.zoneFeatuers.village[i - 1],
                                xs_nlevel: 3,
                                "text": XS.Main.Ztree.zoneFeatuers.village[i - 1].data.vd_name
                            }
                            data.push(villObj);
                        }
                    }
                    $('#xs_main_ztree').tree('append', {
                        parent: node.target,
                        data: data
                    });
                }
            }
            if(node){
                $('#xs_main_ztree').tree('collapseAll');
                $('#xs_main_ztree').tree('expandTo', node.target)//.tree('select', node.target);
            }
        },
        onClick:function(node)
        {
            if(node)
            {
                //xs_feature:XS.Main.Ztree.zoneFeatuers.village[0],

                XS.Main.Poor.clearRelocationLayer();
                XS.Main.clearMap();
                $("#xs_tjfx_range_Legend").css("display", "none");
                //XS.Main.showBottomToolBar();

                var feature = node.xs_feature;
                if(feature){
                    xs_currentZoneFuture = feature;
                    XS.Main.Ztree.positionMap(regId,ulevel,feature,node);
                }else{
                    if(node.xs_nlevel == 1){//市级权限的县
                        XS.CommonUtil.showLoader();
                        var sql = "AdminCode=" + node.xs_id;
                        var layerName = "County_Code";
                        XS.MapQueryUtil.queryBySql(XS.Constants.dataSourceName, layerName, sql, XS.Constants.map_query, function (queryEventArgs) {
                            XS.CommonUtil.hideLoader();
                            var i, result = queryEventArgs.result;
                            if (result && result.recordsets && result.recordsets[0].features.length > 0) {
                                node.xs_feature = result.recordsets[0].features[0];
                                XS.Main.Ztree.positionMap(regId,ulevel,node.xs_feature,node);
                                return;
                            } else {
                                XS.CommonUtil.hideLoader();
                                XS.CommonUtil.showMsgDialog("", "加载数据失败！");
                            }
                        }, function (e) {
                            XS.CommonUtil.hideLoader();
                            XS.CommonUtil.showMsgDialog("", "加载数据失败！");
                        });
                    }else{

                    }
                }
                xs_currentZoneName = node.text;
                xs_currentZoneCode = node.xs_id;
                if(document.getElementById('xs_dcs_receiver')){
                    $("#xs_dcs_receiver").textbox('setValue', xs_currentZoneName);
                }
                //xs_dcl_sender
                if(document.getElementById('xs_dcl_receiver')){
                    $("#xs_dcl_receiver").textbox('setValue', xs_currentZoneName);
                }
            }
        }
    });
    xs_ztree_isInitedData = true;
    XS.CommonUtil.hideLoader();
}

XS.Main.Ztree.positionMap = function(regId,ulevel,feature,node){
    XS.Main.clearVectorLayer();
    xs_poorLabelLayer.removeAllFeatures();
    xs_markerLayer.clearMarkers();
    xs_pkdc_isFirstShowInfoWin = true;
    xs_currentZoneLevel = node.xs_nlevel;
    xs_currentZoneName = node.text;
    xs_currentZoneCode = node.xs_id;
    var targetMarker = null;

    if(feature){
        feature.data.comefrome = true;
        xs_currentZoneFuture = feature;
        feature.style = xs_stateZoneStyle;
        xs_vectorLayer.addFeatures(feature);
        xs_MapInstance.getMapObj().zoomToExtent(feature.geometry.getBounds(),false);
    }

    switch (node.xs_nlevel){
        case 0://city
        {
            xs_currentZoneLevel = node.xs_nlevel;
            XS.Main.showBottomToolBar();
            xs_currentZoneCode = xs_cityID;
            if(document.getElementById('xs_dcs_receiver')){
                $("#xs_dcs_receiver").textbox('setValue', "毕节市");
            }
            //xs_dcl_sender
            if(document.getElementById('xs_dcl_receiver')){
                $("#xs_dcl_receiver").textbox('setValue', "毕节市");
            }
            xs_MapInstance.getMapObj().setCenter(xs_MapInstance.getMapCenterPoint(), 0);
            return;
        }
        case 1://county
        {
            xs_superZoneCode = Math.floor(node.xs_id/100);
            xs_clickMapFutureId  = node.xs_id;
            xs_currentZoneCode =  node.xs_id;
            break;
        }
        case 2://town
        {
            xs_superZoneCode = Math.floor(node.xs_id/1000);
            xs_clickMapFutureId  = node.xs_id;
            xs_currentZoneCode =  node.xs_id;
            targetMarker = XS.Searchbox.getMakerOfCache(xs_currentZoneLevel,xs_superZoneCode,xs_currentZoneCode);
            if(targetMarker){
                XS.Searchbox.cachePositionMarker(xs_currentZoneLevel,xs_currentZoneCode,targetMarker);
                xs_isClearMarkers = false;
                return;
            }
            feature.data.xs_position = true;
            XS.Main.readyAddRegionMarkersData([feature],xs_currentZoneLevel-1,xs_superZoneCode);
            break;
        }
        case 3://vill
        {
            xs_superZoneCode = feature.data.OldID.toString().slice(0,9);
            xs_clickMapFutureId  = feature.data.OldID;
            xs_currentZoneCode =  feature.data.OldID;
            targetMarker = XS.Searchbox.getMakerOfCache(xs_currentZoneLevel,xs_superZoneCode,xs_currentZoneCode);
            if(targetMarker){
                XS.Searchbox.cachePositionMarker(xs_currentZoneLevel,xs_currentZoneCode,targetMarker);
                xs_isClearMarkers = false;
                return;
            }
            feature.data.xs_position = true;
            XS.Main.readyAddRegionMarkersData([feature],xs_currentZoneLevel-1,xs_superZoneCode);
            break;
        }
    }
    if(document.getElementById('xs_dcs_receiver')){
        $("#xs_dcs_receiver").textbox('setValue', xs_currentZoneName);
    }
    //xs_dcl_sender
    if(document.getElementById('xs_dcl_receiver')){
        $("#xs_dcl_receiver").textbox('setValue', xs_currentZoneName);
    }
}