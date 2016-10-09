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
var xs_ztree_isInitedData = false;

/**
 * 加载行政区域树
 * @param superRegId
 * @param superLevel
 */
XS.Main.Ztree.load = function(regId, ulevel)
{
    switch (ulevel) {
        case XS.Main.ZoneLevel.city:
        case XS.Main.ZoneLevel.county:
            XS.Main.Ztree.loadCounty(regId, ulevel);
            break;
        case XS.Main.ZoneLevel.town:
            XS.Main.Ztree.loadTown(regId, ulevel);
            break;
        case XS.Main.ZoneLevel.village:
            XS.Main.Ztree.loadVillage(regId, ulevel);
            break;
    }
}

XS.Main.Ztree.loadCounty = function (regId, ulevel)
{
    var sql = "";
    var layerName = "County_Code";
    switch (ulevel) {
        case XS.Main.ZoneLevel.city:
            sql = "SMID>0";
            break;
        case XS.Main.ZoneLevel.county:
            XS.Main.Ztree.zoneFeatuers.county = xs_user_Features;
            XS.Main.Ztree.loadTown(regId, ulevel);
            return;
    }
    XS.MapQueryUtil.queryBySql(XS.Constants.dataSourceName, layerName, sql, xs_MapInstance.bLayerUrl,function(queryEventArgs)
    {
        var i, feature, result = queryEventArgs.result;
        if (result && result.recordsets&&result.recordsets[0].features.length>0)
        {
            for (i = 0; i < result.recordsets[0].features.length; i++)
            {
                feature = result.recordsets[0].features[i];
                XS.Main.Ztree.zoneFeatuers.county.push(feature);
            }
            XS.Main.Ztree.loadTown(regId, ulevel);
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
            sql = "SMID>0";
            break;
        case XS.Main.ZoneLevel.county:
            sql = "县级代码="+regId;
            break;
        case XS.Main.ZoneLevel.town:
            XS.Main.Ztree.zoneFeatuers.town = xs_user_Features;
            XS.Main.Ztree.loadVillage(regId, ulevel);
            return;
    }
    XS.MapQueryUtil.queryBySql(XS.Constants.dataSourceName, layerName, sql, xs_MapInstance.bLayerUrl,function(queryEventArgs)
    {
        var i, feature, result = queryEventArgs.result;
        if (result && result.recordsets&&result.recordsets[0].features.length>0)
        {
            for (i = 0; i < result.recordsets[0].features.length; i++)
            {
                feature = result.recordsets[0].features[i];
                XS.Main.Ztree.zoneFeatuers.town.push(feature);
            }
            XS.Main.Ztree.loadVillage(regId, ulevel);
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
            XS.Main.Ztree.handleZoneData(regId, ulevel); //一次请求所有村的数据太多
            return;
        case XS.Main.ZoneLevel.county:
            sql = "country_id="+regId;
            break;
        case XS.Main.ZoneLevel.town:
            sql = "Town_id="+regId;
            break;
        case XS.Main.ZoneLevel.village:
            XS.Main.Ztree.zoneFeatuers.village = xs_user_Features;
            //处理数据
            XS.Main.Ztree.handleZoneData(regId, ulevel);
            return;
    }
    XS.MapQueryUtil.queryBySql(XS.Constants.dataSourceName, layerName, sql, xs_MapInstance.bLayerUrl,function(queryEventArgs)
    {
        var i, feature, result = queryEventArgs.result;
        if (result && result.recordsets&&result.recordsets[0].features.length>0)
        {
            for (i = 0; i < result.recordsets[0].features.length; i++)
            {
                feature = result.recordsets[0].features[i];
                XS.Main.Ztree.zoneFeatuers.village.push(feature);
            }
            //处理数据
            XS.Main.Ztree.handleZoneData(regId, ulevel);
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

XS.Main.Ztree.handleZoneData = function(regId, ulevel){
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
            for(var i=1;i<=XS.Main.Ztree.zoneFeatuers.county.length;i++)
            {
                var countyId = XS.Main.Ztree.zoneFeatuers.county[i-1].data.AdminCode;
                var countyObj = {
                    "id":parseInt(cityObj.id+''+i),
                    "state":"closed",
                     xs_nlevel:1,
                    xs_feature:XS.Main.Ztree.zoneFeatuers.county[i-1],
                    xs_id:countyId,
                    "text":XS.Main.Ztree.zoneFeatuers.county[i-1].data.Name,
                    "children":[]
                }
                /*for(var j=1;j<=XS.Main.Ztree.zoneFeatuers.town.length;j++)
                {
                    //county_id
                    if(XS.Main.Ztree.zoneFeatuers.town[j-1].data.县级代码 != countyId){
                        continue;
                    }
                    var townId = XS.Main.Ztree.zoneFeatuers.town[j-1].data.乡镇代码;
                    var townObj = {
                        "id":parseInt(countyObj.id+''+j),
                        "state":"closed",
                        "text":XS.Main.Ztree.zoneFeatuers.town[j-1].data.乡镇名称,
                        "children":[]
                    }
                    for(var k=1;k<=XS.Main.Ztree.zoneFeatuers.village.length;k++)
                    {
                        //Town_id
                        if(XS.Main.Ztree.zoneFeatuers.village[k-1].data.Town_id != townId){
                            continue;
                        }
                        var villObj = {
                            "id":parseInt(townObj.id+''+k),
                            "state":"closed",
                            "text":XS.Main.Ztree.zoneFeatuers.village[k-1].data.vd_name,
                            "children":[]
                        }
                        townObj.children.push(villObj);
                    }
                    countyObj.children.push(townObj);

                } */
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
                /*for(var j=1;j<=XS.Main.Ztree.zoneFeatuers.village.length;j++)
                {
                    //Town_id
                    if(XS.Main.Ztree.zoneFeatuers.village[j-1].data.Town_id != townId){
                        continue;
                    }
                    var villObj = {
                        "id":parseInt(townObj.id+''+j),
                        "state":"closed",
                        "text":XS.Main.Ztree.zoneFeatuers.village[j-1].data.vd_name,
                        "children":[]
                    }
                    townObj.children.push(villObj);
                }*/
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
    /*if(!document.getElementById("xs_main_ztreeC")) {
        var winTag =
            "<div id='xs_main_ztreeC' style='width: 300px; height: 500px;padding: 5px;'>" +
                '<ul id="xs_main_ztree" ></ul>'+
            "</div>";
        $("#xs_MapContainer").append(winTag);
    }*/
    /*$('#xs_main_ztreeC').window({
        modal:false,
        title:"网格列表",
        iconCls:'icon-man',
        collapsible: false,
        minimizable: false,
        maximizable: false,
        resizable:false,
        closable: true,
        width:250,
        height:500,
        left:0,
        tools:[],
        onClose:function(){
        }
    }).window('open');*/
    $('#xs_main_ztree').tree({
        data:data,
        lines:true,
        animate:false,
        onBeforeExpand:function(node)
        {
            if(node.children&&node.children.length==0)
            {
                //取下一级数据 县、镇
                if(node.xs_nlevel>0&&node.xs_nlevel<3)
                {
                    var data = [];
                    if(node.xs_nlevel==1)
                    { //县
                        for(var i=1;i<=XS.Main.Ztree.zoneFeatuers.town.length;i++)
                        {
                            var townId = XS.Main.Ztree.zoneFeatuers.town[i-1].data.乡镇代码;
                            if(XS.Main.Ztree.zoneFeatuers.town[i-1].data.县级代码 != node.xs_id){
                                continue;
                            }
                            var townObj = {
                                "id":parseInt(node.id+''+i),
                                "state":"closed",
                                xs_nlevel:2,
                                xs_id:townId,
                                xs_feature:XS.Main.Ztree.zoneFeatuers.town[i-1],
                                "text":XS.Main.Ztree.zoneFeatuers.town[i-1].data.乡镇名称,
                                "children":[]
                            }
                            data.push(townObj);
                        }
                    }else
                    { //镇
                        if(xs_user_regionLevel == XS.Main.ZoneLevel.city) //请求数据
                        {
                            XS.CommonUtil.showLoader();
                            var sql = "Town_id="+node.xs_id;
                            var layerName = "Village_Code";
                            XS.MapQueryUtil.queryBySql(XS.Constants.dataSourceName, layerName, sql, xs_MapInstance.bLayerUrl,function(queryEventArgs)
                            {
                                var i, feature, result = queryEventArgs.result;
                                if (result && result.recordsets&&result.recordsets[0].features.length>0)
                                {
                                    for (i = 0; i < result.recordsets[0].features.length; i++)
                                    {
                                        feature = result.recordsets[0].features[i];
                                        var villObj = {
                                            "id":parseInt(node.id+''+(i+1)),
                                            xs_feature:feature,
                                            "text":feature.data.vd_name
                                        }
                                        data.push(villObj);
                                    }
                                    //处理数据
                                    //getChildren
                                    XS.CommonUtil.hideLoader();
                                    console.log(data);
                                   if(node.children&&node.children.length==0)
                                   {
                                       $('#xs_main_ztree').tree('append', {
                                           parent: node.target,
                                           data: data
                                       });
                                    }
                                    $('#xs_main_ztree').tree('collapse', node.target).tree('expand', node.target).tree('expandTo', node.target);
                                    return;
                                }else{
                                    XS.CommonUtil.hideLoader();
                                    XS.CommonUtil.showMsgDialog("","加载数据失败！");
                                }
                            }, function(e){
                                XS.CommonUtil.hideLoader();
                                XS.CommonUtil.showMsgDialog("","加载数据失败！");
                            });
                            return;
                        }else
                        {
                            for(var i=1;i<=XS.Main.Ztree.zoneFeatuers.village.length;i++)
                            {
                                //Town_id
                                if(XS.Main.Ztree.zoneFeatuers.village[i-1].data.Town_id != node.xs_id){
                                    continue;
                                }
                                var villObj = {
                                    "id":parseInt(node.id+''+i),
                                    "text":XS.Main.Ztree.zoneFeatuers.village[i-1].data.vd_name
                                }
                                data.push(villObj);
                            }
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
        onClick:function(node){
            //alert(node.text);  // alert node text property when clicked
        }
    });
    xs_ztree_isInitedData = true;
   // XS.CommonUtil.hideLoader();
}