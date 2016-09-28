/**
 * Created by GZXS on 2016/6/27.
 */
var xs_utfGridChart = null; //utf grid 图表
var xs_isShowUtfGridTip = true; //是否显示utfgrid 提示

var xs_clickMapType = -1; //记录点击地图待处理事件 refer to XS.Main.clickMapType
var xs_superZoneCode = -1; //当前行政区域的上级Code ID，主要用于对下一级行政区域的查询 //xs_currentZoneCode
var xs_currentZoneCode = -1; //当前行政区域Code
var xs_currentZoneName = ""; //当前行政区域名
var xs_currentZoneFuture = null; //保存当前被选中的行政Future
var xs_clickMapFutureId = -1; //保存当前被选中的行政FutureID
var xs_currentZoneLevel = -1; //记录当前行政等级
var xs_isMapClickTypeNone = false; //判断单击地图是否是的类型为None

//行政区域点中样式
var xs_stateZoneStyle = {
    strokeColor: "#00bbee",
    strokeWidth: 1,
    fillColor: "#ffffff",
    fillOpacity: "0.1"
};

var xs_cityID = "5224"; //市ID
XS.Main.CacheZoneInfos = { //缓存行政区域信息
    city:[],
    county:[],
    town:{countyId:"", data:[]},
    village:{townId:"", data:[]}
};

//行政区域级别
XS.Main.ZoneLevel = {
    city:0, //市
    county:1, //县
    town:2, //乡
    village:3, //村
    poor:4, //户
    other:5 //其他
};

//聚散点类型集合
XS.Main.ClusterPointerStyle = {
    poor_info_obj:0,//贫困户  点击点时得到的是户的详细信息
    poor_info_id:1, //贫困户类型 点击点时得到的是户的ID
    pkdc_tasker:2 //贫困洞察 任务监控人
};

//单击地图处理事件类型
XS.Main.clickMapType = {
    none:-1, //放大地图
    pkdc:0, //贫困洞穴
    tjfx_range:1, //统计分析--分段专题图
    tjfx_graph: 2,//统计分析--图表专题图
    poor_povertyrelocation:3 //扶贫搬迁
};

$(function(){
    //右击-菜单
    $('#xs_rightMeun').menu('appendItem', {
        text: '贫困洞察',
        iconCls: 'icon-search',
        onclick: function(){
            XS.Main.RightClickMenuHandler('pkdc');
        }
    });
    $('#xs_rightMeun').menu('appendItem', {
        separator: true
    });
    $('#xs_rightMeun').menu('appendItem', {
        text: '责任监控',
        iconCls: 'icon-man',
        onclick: function(){
            XS.Main.RightClickMenuHandler('zrjk');
        }
    });
    $('#xs_rightMeun').menu('appendItem', {
        separator: true
    });
    $('#xs_rightMeun').menu('appendItem', {
        text: '任务监控',
        iconCls: 'icon-man',
        onclick: function(){
            XS.Main.RightClickMenuHandler('rwjk');
        }
    });
    $('#xs_rightMeun').menu('appendItem', {
        separator: true
    });
    $('#xs_rightMeun').menu('appendItem', {
        text: '工具栏',
        iconCls: 'icon-man',
        onclick: function(){
            XS.Main.RightClickMenuHandler('toolbar');
        }
    });
    $('#xs_rightMeun').menu('appendItem', {
        separator: true
    });
    $('#xs_rightMeun').menu('appendItem', {
        text: '清空地图',
        onclick: function(){
            XS.Main.depClearMap();
        }
    });
    $('#xs_rightMeun').menu('appendItem', {
        separator: true
    });
    $('#xs_rightMeun').menu('appendItem', {
        text: '退出',
        onclick: function(){
            XS.Main.RightClickMenuHandler('exit');
        }
    });

    //utfGrid echart dom
    var utfGridTag = "<div id='xs_utfGridC' style='width: 220px; height: 220px; border-radius: 1px; border: 1px solid rgba(128, 128, 128, 0.39); position:absolute;z-index: 10;opacity: 0.8; display: none;'>" +
        "</div>";
    $("#xs_mainC").append(utfGridTag);
    xs_utfGridChart = echarts.init(document.getElementById('xs_utfGridC'));
    xs_utfGridChart.setOption(xs_utfGridOption);
});

var xs_rbbtn_isfullscreen = false; //是否是全屏
//初始化数据
XS.Main.init = function(){
    //左边工具栏
    $("#xs_leftToolPanel").panel(
        {
            href: 'main_leftToolContent.html',
            title:'<i style="font-size: 16px;font-weight: bold;" class="fa fa-list-ul" aria-hidden="true"> 工具栏</i>',
            /*iconCls:'icon-man',*/
            tools:[{
               /* iconCls:'icon-back',
                handler:XS.Main.hideLeftToolBar*/
            }]
        }
    );
    $("#xs_leftToolBarC").hover(
        function () {
            xs_isToolHover = true;
        },
        function () {
            xs_isToolHover = false;
        }
    );
    $("#xs_tjfx_leftMenuC").hover(
        function () {
            xs_isToolHover = true;
        },
        function () {
            xs_isToolHover = false;
        }
    );
    //xs_tjfx_leftMenuC
    //右击-菜单
    $("#xs_Map").bind('contextmenu',function(e){
        e.preventDefault();
        $('#xs_rightMeun').menu('show', {
            left: e.pageX,
            top: e.pageY
        });
    });
    //右顶 计时器

    //右下--工具按钮
    $('#xs_rb_btn_screen').tooltip({
        position: 'left',
        content: '<span style="color:#3f3f3f">全屏模式</span>',
        onShow: function(){
            $(this).tooltip('tip').css({
                backgroundColor: '#fff',
                opacity:0.8,
                borderColor: '#efefef'
            });
        }
    });
    $('#xs_rb_btn_screen').click(function()
    {
        XS.Main.fulScreenSwitch(xs_rbbtn_isfullscreen,true);
    });
    //右下-工具栏
    $('#xs_rb_btn_tools').tooltip({
        position: 'left',
        content: '<span style="color:#3f3f3f">功能列表</span>',
        onShow: function(){
            $(this).tooltip('tip').css({
                backgroundColor: '#fff',
                opacity:0.8,
                borderColor: '#efefef'
            });
        }
    });
    $('#xs_rb_btn_tools').click(function()
    {
        XS.Main.showLeftToolBar();
    });
}
var xs_isShowing = false;
var xs_isToolHover = false;

//滑出左工具菜单
XS.Main.showLeftToolBar = function(){
    if(!xs_isShowing){
        xs_isShowing = true;
        $("#xs_leftToolBarC").stop(true, false).animate({"left": 0}, 200, function(msg){
          //  xs_isShowing = false;
          //  xs_isClosed = false;
        });
    }
}

//隐藏左边工具菜单
XS.Main.hideLeftToolBar = function(){
    if(!xs_isToolHover&&xs_isShowing){
        $("#xs_leftToolBarC").stop(true, false).animate({"left": -302}, 150, function(nsg){
           // xs_isClosed = true;
            xs_isShowing = false;
            xs_isShowUtfGridTip = true;
            $("#xs_tjfx_leftMenuC").menu("hide");
            $("#xs_tjfx_leftMenu").panel('close');
        });
    }
}

//右击-菜单点击事件
XS.Main.RightClickMenuHandler = function(name){
    XS.CommonUtil.closeDialog("xs_main_fmenu_dialog");
    if(name == 'exit'){
        XS.Login.logout();
    }
    else if(name == 'toolbar'){
        XS.Main.showLeftToolBar();
    }
    else if(name== 'pkdc'){
        XS.Main.Pkjc.pkdc();
    }
    else if(name == 'zrjk'){
        if(xs_currentZoneFuture != null){
            XS.Main.Pkjc.clickDutyChain(xs_currentZoneLevel, xs_currentZoneCode);
        }else{
            XS.CommonUtil.showMsgDialog("","请先选中区域");
        }
    }
    else if(name == 'rwjk'){
        if(xs_currentZoneFuture != null){
            XS.Main.Pkjc.clickTaskMonitor(xs_currentZoneLevel, xs_currentZoneCode);
        }else{
            XS.CommonUtil.showMsgDialog("","请先选中区域");
        }
    }
}

//县、镇、村属性矢量瓦片鼠标移动事件处理
var xs_utfGridOption = {
    tooltip: {
        show: false
    },
    title : {
        x: "center",
        text: "",
        textStyle: {
            color: "#ff0000",
            fontSize: 15
        }
    },
    backgroundColor: "#fff",
    xAxis :{
            type : 'category',
            data: ['贫困人数','贫困户数'],
            axisLine: {
                interval: 0
            },
            axisLabel: {
                textStyle: {
                    color: "#ff0000"
                }
            }
        },
    yAxis : [
        {
            type : 'value',
            axisLabel: {
                textStyle: {
                    color: "#ff0000"
                }
            }
        }
    ],
    grid: {
        left: 60,
        top: 50,
        bottom: 30,
        right: 10
    },
    series : [
        {
            color: "#ff0000",
            name: "贫困程度",
            type:"bar",
            data: [],
            barWidth: 30
        }
    ]
};

//属性矢量瓦片图层鼠标移动事件处理
XS.Main.utfGridLayerMoveCallback = function (infoLookup, loc, pixel)
{
    if(!xs_isShowUtfGridTip){
        return;
    }
    $("#xs_utfGridC").css("display","none");
    if (infoLookup) {
        var info;
        for (var idx in infoLookup)
        {
            info = infoLookup[idx];
            if (info && info.data)
            {
                var scale = 1/xs_MapInstance.getMapObj().getScale();
                if(scale>300000)
                {
                    //县County_Code.Name
                    if(info.data.vc_hh_num)
                    {
                        //level, pbno, parentId, id
                        if(xs_user_regionLevel<=XS.Main.ZoneLevel.county){
                            XS.Main.utfGridLayerMoveCallbackCTV(0,xs_cityID,xs_cityID,info.data.AdminCode,pixel.x, pixel.y);
                        }
                        break;
                    }
                }else if(scale<=300000&&scale>80000)
                {
                    if(info.data.乡镇代码)
                    {
                        if(xs_user_regionLevel<=XS.Main.ZoneLevel.town)
                        {
                            switch (xs_user_regionLevel){
                                case XS.Main.ZoneLevel.city:
                                    XS.Main.utfGridLayerMoveCallbackCTV(1,info.data.县级代码,info.data.县级代码,info.data.乡镇代码,pixel.x, pixel.y);
                                    break;
                                case XS.Main.ZoneLevel.county:
                                    if(xs_user_regionId == info.data.县级代码){
                                        XS.Main.utfGridLayerMoveCallbackCTV(1,info.data.县级代码,info.data.县级代码,info.data.乡镇代码,pixel.x, pixel.y);
                                    }
                                    break;
                                case XS.Main.ZoneLevel.town:
                                    if(xs_user_regionId == info.data.乡镇代码){
                                        XS.Main.utfGridLayerMoveCallbackCTV(1,info.data.县级代码,info.data.县级代码,info.data.乡镇代码,pixel.x, pixel.y);
                                    }
                                    break;
                                case XS.Main.ZoneLevel.village:
                                    break;
                            }
                        }
                        break;
                    }
                }else
                {
                    if(info.data.Town_id)
                    {
                        //村Village_Code.vd_name
                        if(xs_user_regionLevel<=XS.Main.ZoneLevel.village)
                        {
                            switch (xs_user_regionLevel) {
                                case XS.Main.ZoneLevel.city:
                                    XS.Main.utfGridLayerMoveCallbackCTV(2, info.data.Town_id, info.data.Town_id, info.data.OldID, pixel.x, pixel.y);
                                    break;
                                case XS.Main.ZoneLevel.county:
                                    if (xs_user_regionId == info.data.country_id) {
                                        XS.Main.utfGridLayerMoveCallbackCTV(2, info.data.Town_id, info.data.Town_id, info.data.OldID, pixel.x, pixel.y);
                                    }
                                    break;
                                case XS.Main.ZoneLevel.town:
                                    if (xs_user_regionId == info.data.Town_id) {
                                        XS.Main.utfGridLayerMoveCallbackCTV(2, info.data.Town_id, info.data.Town_id, info.data.OldID, pixel.x, pixel.y);
                                    }
                                    break;
                                case XS.Main.ZoneLevel.village:
                                    if (xs_user_regionId == info.data.OldID) {
                                        for(var i=0;i<xs_user_Features.length;i++){
                                            var vd_id = xs_user_Features[i].data.vd_id;
                                            if(vd_id == info.data.vd_id){
                                                XS.LogUtil.log("regionid="+xs_user_regionId);
                                                XS.Main.utfGridLayerMoveCallbackCTV(2, info.data.Town_id, info.data.Town_id, info.data.OldID, pixel.x, pixel.y);
                                            }
                                        }
                                    }
                                    break;
                            }
                            break;
                        }
                    }
                }
            }
        }
    }
};

//CTV --County Town Village
/**
 *
 * @param level level:0--county ; 1--town; 2--village
 * @param pbno  父级区域ID
 * @param parentId 父级区域ID
 * @param id 区域ID
 * @param x
 * @param y
 */
XS.Main.utfGridLayerMoveCallbackCTV = function(level, pbno, parentId, id, x, y){ //
    var dataArr = [];
    var action = "";

    var cId = "";
    var cName = "";
    var cHu = "";
    var cPop = "";

    var isEquParentId = true; //equal

    switch(level){
        case 0:
            dataArr = XS.Main.CacheZoneInfos.county;
            if(dataArr.length<1){
                isEquParentId = false;
            }
            action = "QueryCountyBaseInfoByareaId";

            cId = "CBI_ID";
            cName = "CBI_NAME";
            cHu = "cps_poor_hhnum";
            cPop = "cps_poor_pop";
            break;
        case 1:
            if(XS.Main.CacheZoneInfos.town.countyId!=parentId){
                XS.Main.CacheZoneInfos.town.data = [];
                isEquParentId = false;
            }
            XS.Main.CacheZoneInfos.town.countyId = parentId;
            dataArr = XS.Main.CacheZoneInfos.town.data;
            action = "QueryTownsBaseInfoByareaId";

            cId = "TOWB_ID";
            cName = "TOWB_NAME";
            cHu = "TOWB_HouseNum";
            cPop = "TOWB_PeopleNum";
            break;
        case 2:
            if(XS.Main.CacheZoneInfos.village.townId!=parentId){
                XS.Main.CacheZoneInfos.village.data = [];
                isEquParentId = false;
            }
            XS.Main.CacheZoneInfos.village.townId=parentId
            dataArr = XS.Main.CacheZoneInfos.village.data;
            action = "QueryVillBaseByareaId";

            cId = "VBI__ID";
            cName = "VBI_NAME";
            cHu = "VBI_HouseNum";
            cPop = "VBI_PeopleNum";
            break;
    }
    if(!isEquParentId)
    {
        var data = {'pbno': pbno};
        XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, action, data, function(json){
            if(json && json.length>0)
            {
                switch(level)
                {
                    case 0:
                        XS.Main.CacheZoneInfos.county = json;
                        break;
                    case 1:
                        XS.Main.CacheZoneInfos.town.data = json;
                        break;
                    case 2:
                        XS.Main.CacheZoneInfos.village.data = json;
                        break;
                }
                for(var i=0; i<json.length; i++)
                {
                    var obj = json[i];
                    var rate = 0;
                    if(level == 0){
                        rate = obj["cps_Poverty_rate"];
                    }else if(level==1){
                        rate = obj["tpl_PoorRate"];
                    }else if(level==2){
                        rate = obj["VillPoorRate"];
                    }
                    if(obj[cId] == id)
                    {
                        switch (xs_user_regionLevel){
                            case XS.Main.ZoneLevel.city:
                                XS.Main.utfGridLayerMoveCallbackUpdataData(level, x, y, obj[cName], obj[cHu], obj[cPop]);
                                //仪表盘显示
                                if(!xs_pkdc_isGaugeClose){
                                    XS.Main.Pkjc.showGaugeData(obj[cPop],rate,obj[cHu]);
                                }
                                break;
                            case XS.Main.ZoneLevel.county:
                                if(level==0){ //显示县
                                    if(xs_user_regionId == id){
                                        XS.Main.utfGridLayerMoveCallbackUpdataData(level, x, y, obj[cName], obj[cHu], obj[cPop]);
                                        //仪表盘显示
                                        if(!xs_pkdc_isGaugeClose){
                                            XS.Main.Pkjc.showGaugeData(obj[cPop],rate,obj[cHu]);
                                        }
                                    }
                                }else{
                                    XS.Main.utfGridLayerMoveCallbackUpdataData(level, x, y, obj[cName], obj[cHu], obj[cPop]);
                                    //仪表盘显示
                                    if(!xs_pkdc_isGaugeClose){
                                        XS.Main.Pkjc.showGaugeData(obj[cPop],rate,obj[cHu]);
                                    }
                                }
                                break;
                            case XS.Main.ZoneLevel.town:
                                if(level==1){ //显示乡
                                    if(xs_user_regionId == id){
                                        XS.Main.utfGridLayerMoveCallbackUpdataData(level, x, y, obj[cName], obj[cHu], obj[cPop]);
                                        //仪表盘显示
                                        if(!xs_pkdc_isGaugeClose){
                                            XS.Main.Pkjc.showGaugeData(obj[cPop],rate,obj[cHu]);
                                        }
                                    }
                                }else if(level==2){ //村
                                    XS.Main.utfGridLayerMoveCallbackUpdataData(level, x, y, obj[cName], obj[cHu], obj[cPop]);
                                    //仪表盘显示
                                    if(!xs_pkdc_isGaugeClose){
                                        XS.Main.Pkjc.showGaugeData(obj[cPop],rate,obj[cHu]);
                                    }
                                }
                                break;
                            case XS.Main.ZoneLevel.village:
                                if(level==2){ //显示村
                                    if(xs_user_regionId == id){
                                        XS.Main.utfGridLayerMoveCallbackUpdataData(level, x, y, obj[cName], obj[cHu], obj[cPop]);
                                        //仪表盘显示
                                        if(!xs_pkdc_isGaugeClose){
                                            XS.Main.Pkjc.showGaugeData(obj[cPop],rate,obj[cHu]);
                                        }
                                    }
                                }
                                break;
                        }
                        break;
                    }
                }
            }else{
                $("#xs_utfGridC").css("display","none");
            }
        });
    }else
    {
        $("#xs_utfGridC").css("display","none");
        for(var i=0; i<dataArr.length; i++)
        {
            var obj = dataArr[i];
            var rate = 0;
            if(level == 0){
                rate = obj["cps_Poverty_rate"];
            }else if(level==1){
                rate = obj["tpl_PoorRate"];
            }else if(level==2){
                rate = obj["VillPoorRate"];
            }
            if(obj[cId] == id)
            {
                switch (xs_user_regionLevel){
                    case XS.Main.ZoneLevel.city:
                        XS.Main.utfGridLayerMoveCallbackUpdataData(level, x, y, obj[cName], obj[cHu], obj[cPop]);
                        //仪表盘显示
                        if(!xs_pkdc_isGaugeClose){
                            XS.Main.Pkjc.showGaugeData(obj[cPop],rate,obj[cHu]);
                        }
                        break;
                    case XS.Main.ZoneLevel.county:
                        if(level==0){ //显示县
                            if(xs_user_regionId == id){
                                XS.Main.utfGridLayerMoveCallbackUpdataData(level, x, y, obj[cName], obj[cHu], obj[cPop]);
                                //仪表盘显示
                                if(!xs_pkdc_isGaugeClose){
                                    XS.Main.Pkjc.showGaugeData(obj[cPop],rate,obj[cHu]);
                                }
                            }
                        }else{
                            XS.Main.utfGridLayerMoveCallbackUpdataData(level, x, y, obj[cName], obj[cHu], obj[cPop]);
                            //仪表盘显示
                            if(!xs_pkdc_isGaugeClose){
                                XS.Main.Pkjc.showGaugeData(obj[cPop],rate,obj[cHu]);
                            }
                        }
                        break;
                    case XS.Main.ZoneLevel.town:
                        if(level==1){ //显示乡
                            if(xs_user_regionId == id){
                                XS.Main.utfGridLayerMoveCallbackUpdataData(level, x, y, obj[cName], obj[cHu], obj[cPop]);
                                //仪表盘显示
                                if(!xs_pkdc_isGaugeClose){
                                    XS.Main.Pkjc.showGaugeData(obj[cPop],rate,obj[cHu]);
                                }
                            }
                        }else if(level==2){ //村
                            XS.Main.utfGridLayerMoveCallbackUpdataData(level, x, y, obj[cName], obj[cHu], obj[cPop]);
                            //仪表盘显示
                            if(!xs_pkdc_isGaugeClose){
                                XS.Main.Pkjc.showGaugeData(obj[cPop],rate,obj[cHu]);
                            }
                        }
                        break;
                    case XS.Main.ZoneLevel.village:
                        if(level==2){ //显示村
                            if(xs_user_regionId == id){
                                XS.Main.utfGridLayerMoveCallbackUpdataData(level, x, y, obj[cName], obj[cHu], obj[cPop]);
                                //仪表盘显示
                                if(!xs_pkdc_isGaugeClose){
                                    XS.Main.Pkjc.showGaugeData(obj[cPop],rate,obj[cHu]);
                                }
                            }
                        }
                        break;
                }
                /*XS.Main.utfGridLayerMoveCallbackUpdataData(level, x, y, obj[cName], obj[cHu], obj[cPop]);
                //仪表盘显示
                if(!xs_pkdc_isGaugeClose){
                    XS.Main.Pkjc.showGaugeData(obj[cPop],rate,obj[cHu]);
                }*/
                break;
            }
        }
    }
}

//更新数据
XS.Main.utfGridLayerMoveCallbackUpdataData = function(level, x, y, name, poorHus, poorPups){
    /*if(x>20 && x < ($(window).width()-252) && y>20 && y < ($(window).height()-252)) {
        switch (level){
            case 0: //county
                break;
            case 1: //town
                break;
            case 2: //village
                break;
        }
        $("#xs_utfGridC").css("display", "block");
        xs_utfGridChart.setOption({
            title: {
                text: name
            },
            tooltip: {
                show: false
            },
            series: [
                {
                    color: "#ff0000",
                    name: "贫困程度",
                    type: "bar",
                    data: [poorPups,poorHus]
                }
            ]
        });
        xs_utfGridChart.getDom().style.left = (x + 30) + "px";
        xs_utfGridChart.getDom().style.top = (y + 30) + "px";
        xs_utfGridChart.resize();
    }else{
        $("#xs_utfGridC").css("display","none");
    }*/

        $("#xs_utfGridC").css("display", "block");
        xs_utfGridChart.setOption({
            title: {
                text: name
            },
            tooltip: {
                show: false
            },
            series: [
                {
                    color: "#ff0000",
                    name: "贫困程度",
                    type: "bar",
                    data: [poorPups,poorHus]
                }
            ]
        });
        //xs_utfGridChart.getDom().style.left = (x + 30) + "px";
        //xs_utfGridChart.getDom().style.top = (y + 30) + "px";
        //xs_utfGridChart.resize();

    if (x > 20 && x < ($(window).width() - 250) && y > 20 && y < ($(window).height() - 250))
    {
        xs_utfGridChart.getDom().style.left = (x + 20) + "px";
        xs_utfGridChart.getDom().style.top = (y + 20) + "px";
        xs_utfGridChart.resize();
    }else if(x >= ($(window).width() - 250) && y >= ($(window).height() - 250)){
        xs_utfGridChart.getDom().style.left = (x - 250 + 10) + "px";
        xs_utfGridChart.getDom().style.top = (y - 250 + 10) + "px";
        xs_utfGridChart.resize();
    }else if(x >= ($(window).width() - 250)){
        xs_utfGridChart.getDom().style.left = (x - 250 + 10) + "px";
        xs_utfGridChart.getDom().style.top = (y + 20) + "px";
        xs_utfGridChart.resize();
    }else if(y >= ($(window).height() - 250)){
        xs_utfGridChart.getDom().style.left = (x + 20) + "px";
        xs_utfGridChart.getDom().style.top = (y - 250 + 10) + "px";
        xs_utfGridChart.resize();
    }
}

//添加矢量点到聚散图层
XS.Main.addVectorPoint2ClusterLayer = function(objArr, type){
    //XS.Main.clearMap();
    //XS.Main.Poor.clearRelocationLayer();
    xs_isShowUtfGridTip = false;
    xs_clusterLayer.destroyCluster();
    xs_clusterControl.activate();
    if(!(objArr&&objArr.length>0)){
        return;
    }
    if(type == XS.Main.ClusterPointerStyle.poor_info_obj||type == XS.Main.ClusterPointerStyle.poor_info_id)
    {
        var features = [];
        for(var i=0; i<objArr.length; i++)
        {
            var obj = objArr[i];
           // var pixel = xs_MapInstance.getMapObj().getPixelFromLonLat(xs_MapInstance.getMapCenterPoint());

            var feature = new SuperMap.Feature.Vector();
           /* var latlon = XS.LatLonTUtil.transform(obj.LATITUDE, obj.LONGITUDE);
            if(latlon != null){
                feature.geometry = new SuperMap.Geometry.Point(latlon.lon, latlon.lat);
            }else{
                feature.geometry = new SuperMap.Geometry.Point(obj.LONGITUDE, obj.LATITUDE);
            }*/
            feature.geometry = new SuperMap.Geometry.Point(obj.LONGITUDE, obj.LATITUDE);

            //105.16 , 27.07
            var style = {
                pointRadius: 6,
                graphic:true,
                /*externalGraphic:"../base/map/theme/images/cluster4.png",*/
                externalGraphic:"../img/icon/xs_poor_flag.png",
                graphicWidth:20,
                graphicHeight:20
            };
            feature.style = style;
           // feature.data = XS.Main.ClusterPointerStyle.poor;
            feature.info = obj;
            //标注点类型
            feature.info.xt_ctype = type;
            features.push(feature);
        }
        xs_clusterLayer.addFeatures(features);
    }else if(type == XS.Main.ClusterPointerStyle.pkdc_tasker){ //任务人监控
        xs_clusterLayer.addFeatures(objArr);
    }
}

//选择聚散点处理
XS.Main.clusterControlCallback =
{
    over:function(f){
        if (!f.isCluster)
        { //当点击聚散点的时候不弹出信息窗口
            var name = "";
            switch (f.info.xt_ctype){
                case XS.Main.ClusterPointerStyle.poor_info_obj:
                    name = f.info.HHNAME;
                    break;
                case XS.Main.ClusterPointerStyle.poor_info_id:
                    name = f.info.name;
                    break;
                case XS.Main.ClusterPointerStyle.pkdc_tasker:
                    //["2016", "3", "22", "12", "11", "08"]
                    var arr = [];
                    try{
                        arr = (f.info.GTIME).match(/\d+/g);
                    }catch (e){};
                    if(arr.length>0){
                        name = arr[1] + "-" + arr[2] + " " + arr[3] + ":" + arr[4] + ":" + arr[5];
                    }
                    break;
            }
            var x=parseFloat(f.geometry.x);
            var y = parseFloat(f.geometry.y);
            var xy=xs_MapInstance.getMapObj().getPixelFromLonLat(new SuperMap.LonLat(x,y));
            x = xy.x;
            y = xy.y;

            if (x > 20 && x < ($(window).width() - 80) && y > 20 && y < ($(window).height() - 80) && !XS.StrUtil.isEmpty(name))
            {
                if ($("#xs_clusterTipC").length < 1)
                {
                    var tag ="<div id='xs_clusterTipC' style='width: auto; height: auto; border-radius: 1px;position:absolute;z-index: 13;opacity: 0.9; display: none;background: #00bbee;'></div>";
                    $("#xs_mainC").append(tag);
                }
                $("#xs_clusterTipC").empty();

                var contentTag =
                    '<div style="font-size: 15px;font-weight: bold;padding: 5px;text-align: center;color: #ffffff;">'+name+'</div>';
                $("#xs_clusterTipC").append(contentTag);
                $("#xs_clusterTipC").css({
                    left: x+ 20,
                    top: y + 17,
                    display: 'block'
                });
            }else{
                $("#xs_clusterTipC").css({display: 'none'});
            }
        }
    },
    out:function(f){
        $("#xs_clusterTipC").css({display: 'none'});
    },
    click: function (f) { //点击兴趣点弹出信息窗口
        $("#xs_clusterTipC").css({display: 'none'});
        if (!f.isCluster) { //当点击聚散点的时候不弹出信息窗口
            switch (f.info.xt_ctype){
                case XS.Main.ClusterPointerStyle.poor_info_obj:
                    XS.Main.Poor.clickClusterCallback(f.info);
                    break;
                case XS.Main.ClusterPointerStyle.poor_info_id:
                    XS.Main.Poor.clickClusterCallback(f.info);
                    break;
                case XS.Main.ClusterPointerStyle.pkdc_tasker:
                    XS.Main.Pkjc.clickClusterCallback(f);
                    break;
            }
        }
    },
    clickout: function () { //点击空白处关闭信息窗口
        $("#xs_clusterTipC").css({display: 'none'});
    }
};

//点击地图事件处理
XS.Main.clickMapCallback = function(mouseEvent){
   // var lonLat = mapInstance.getMapObj().getLonLatFromPixel(mouseEvent.xy);
    //lonLat.lon, lonLat.lat
    //xs_zone_vectorLayer.removeAllFeatures();
    xs_isMapClickTypeNone = false;
    if(xs_clickMapType != XS.Main.clickMapType.none){
        return;
    }
    xs_currentZoneFuture = null;
    var scale = 1/xs_MapInstance.getMapObj().getScale();
    var layerName = "";
    if(scale>300000){ //county
        layerName = "County_Code";
       // xs_currentZoneLevel = XS.Main.ZoneLevel.county;
    }else if(scale<=300000&& scale>80000) //town
    {
        layerName = "Twon_Code";
       // xs_currentZoneLevel = XS.Main.ZoneLevel.town;
    }else{ //village
        layerName = "Village_Code";
      //  xs_currentZoneLevel = XS.Main.ZoneLevel.village;
    }
    var lonLat = xs_MapInstance.getMapObj().getLonLatFromPixel(mouseEvent.xy);
    var point = new SuperMap.Geometry.Point(lonLat.lon, lonLat.lat);
    //geometry, dataSourceName, dataSetName, queryMode, mapUrl, processCompleted, processFailed
    XS.CommonUtil.showLoader();
    XS.MapQueryUtil.queryByGeometryParameters(point, XS.Constants.dataSourceName, layerName, SuperMap.REST.SpatialQueryMode.INTERSECT,xs_MapInstance.bLayerUrl, function(queryEventArgs){
        var i, feature, result = queryEventArgs.result;
        if (result && result.recordsets&&result.recordsets[0].features.length>0) {
            for (i = 0; i < result.recordsets[0].features.length; i++) {
                feature = result.recordsets[0].features[i];
                break;
            }

            if(feature==null){
                XS.CommonUtil.hideLoader();
                return;
            }

            var scale = 1/xs_MapInstance.getMapObj().getScale();
            var layerName = "";
            var level = -1;
            if(scale>300000){ //county
                layerName = "County_Code";
                level = XS.Main.ZoneLevel.county;
            }else if(scale<=300000&& scale>80000) //town
            {
                layerName = "Twon_Code";
                level = XS.Main.ZoneLevel.town;
            }else{ //village
                layerName = "Village_Code";
                level = XS.Main.ZoneLevel.village;
            }

            //加载数据到矢量图层中
            switch (level)
            {
                case XS.Main.ZoneLevel.county:
                {
                    switch (xs_user_regionLevel){
                        case XS.Main.ZoneLevel.county:
                            if(xs_user_regionId != feature.data.AdminCode){
                                XS.CommonUtil.showMsgDialog("", "您的权限不够");
                                XS.CommonUtil.hideLoader();
                                return;
                            }
                            break;
                        case XS.Main.ZoneLevel.town:
                        case XS.Main.ZoneLevel.village:
                            XS.CommonUtil.showMsgDialog("", "您的权限不够");
                            XS.CommonUtil.hideLoader();
                            return;
                    }

                    xs_clickMapFutureId = feature.data.AdminCode;
                    xs_currentZoneCode = feature.data.AdminCode;
                    xs_currentZoneName = feature.data.Name;
                    xs_superZoneCode = xs_cityID;
                    break;
                }
                case XS.Main.ZoneLevel.town:
                {
                    switch (xs_user_regionLevel){
                        case XS.Main.ZoneLevel.county:
                            if(xs_user_regionId != feature.data.县级代码){
                                XS.CommonUtil.showMsgDialog("", "您的权限不够");
                                XS.CommonUtil.hideLoader();
                                return;
                            }
                            break;
                        case XS.Main.ZoneLevel.town:
                            if(xs_user_regionId != feature.data.乡镇代码){
                                XS.CommonUtil.showMsgDialog("", "您的权限不够");
                                XS.CommonUtil.hideLoader();
                                return;
                            }
                            break;
                        case XS.Main.ZoneLevel.village:
                            XS.CommonUtil.showMsgDialog("", "您的权限不够");
                            XS.CommonUtil.hideLoader();
                            return;
                    }

                    xs_clickMapFutureId = feature.data.乡镇代码;
                    xs_currentZoneCode = feature.data.乡镇代码;
                    xs_currentZoneName = feature.data.乡镇名称;
                    xs_superZoneCode = feature.data.县级代码;
                    break;
                }
                case XS.Main.ZoneLevel.village:
                {
                    switch (xs_user_regionLevel){
                        case XS.Main.ZoneLevel.county:
                            if(xs_user_regionId != feature.data.country_id){
                                XS.CommonUtil.showMsgDialog("", "您的权限不够");
                                XS.CommonUtil.hideLoader();
                                return;
                            }
                            break;
                        case XS.Main.ZoneLevel.town:
                            if(xs_user_regionId != feature.data.Town_id){
                                XS.CommonUtil.showMsgDialog("", "您的权限不够");
                                XS.CommonUtil.hideLoader();
                                return;
                            }
                            break;
                        case XS.Main.ZoneLevel.village:
                            if(xs_user_regionId != feature.data.OldID){
                                XS.CommonUtil.showMsgDialog("", "您的权限不够");
                                XS.CommonUtil.hideLoader();
                                return;
                            }
                        break;
                    }

                    xs_clickMapFutureId = feature.data.OldID;
                    xs_currentZoneCode = feature.data.OldID;
                    xs_currentZoneName = feature.data.vd_name;
                    xs_superZoneCode = feature.data.Town_id;
                    break;
                }
            }
            xs_MapInstance.getMapObj().zoomToExtent(feature.geometry.getBounds(),false);
            xs_currentZoneFuture = feature;
            feature.style = xs_stateZoneStyle;
            xs_zone_vectorLayer.removeAllFeatures();
            xs_zone_vectorLayer.addFeatures(feature);
            xs_isMapClickTypeNone = true;
            xs_currentZoneLevel = level;
            //查询信息
            XS.CommonUtil.hideLoader();

            XS.Main.showFunMenu();
        }else{
            XS.CommonUtil.hideLoader();
        }
    },function(e){
        XS.CommonUtil.hideLoader();
    });
}

//缩放地图事件处理
XS.Main.zoomedMapCallback = function(e){
    if(e && e.object) {
        var scale = e.object.getScale();
        var moon = e.object.getZoom();

        XS.LogUtil.log("scale=" + 1/scale);
        XS.LogUtil.log("moon=" + moon);
    }
}

//地图移动完成事件回调
XS.Main.movedMapCallback = function(event){
    XS.Main.Poor.movedMapCallback(event);
}

//隐藏所有Tip的Div标签
XS.Main.hiddenDivTags = function(){
    //utfGridLayer
    if($("#xs_utfGridC").length>0) $("#xs_utfGridC").css("display","none");
    //贫困洞察--仪表图
    XS.Main.Pkjc.closeGaugeData();
    //聚散点提示
    if($("#xs_clusterTipC").length>0) $("#xs_clusterTipC").css({display: 'none'});

    //统计分析--分段专题图Tip
    if($("#xs_tjfx_range_themeTipC").length>0) $("#xs_tjfx_tpx_themeTipC").css("display","none");
    if($("#xs_tjfx_range_Legend").length>0) $("#xs_tjfx_range_Legend").css("display", "none");
    if($("#xs_tjfx_graph_Legend").length>0) $("#xs_tjfx_graph_Legend").css("display", "block");
    //统计分析--图表专题图Tip
    if($("#xs_tjfx_graph_themeTipC").length>0) $("#xs_tjfx_graph_themeTipC").css("display","none");
    if($("#xs_tjfx_graph_Legend").length>0) $("#xs_tjfx_graph_Legend").css("display", "none");
    //XS.Main.Poor.clearRelocationLayer();

}

//关闭所有对方话框
XS.Main.closeDialogs = function(){
    //统计分析--左工具菜单
    if($("#xs_tjfx_toolmenuC").length>0) $("#xs_tjfx_toomenuC").dialog('close');
}

//隐藏所有相关图层
XS.Main.hiddenLayers = function(){
    XS.Main.Tjfx.removeLayer();
    xs_vectorLayer.removeAllFeatures();
    xs_isShowUtfGridTip = true;
   // xs_zone_vectorLayer.removeAllFeatures();
    if(xs_animatorVectorLayer != null){
        xs_MapInstance.getMapObj().removeLayer(xs_animatorVectorLayer);
        xs_animatorVectorLayer = null;
    }
    xs_clusterLayer.destroyCluster();
    xs_clusterControl.deactivate();

}

//清空地图
XS.Main.clearMap = function(){
    XS.Main.hiddenDivTags();
    XS.Main.closeDialogs();
    XS.Main.hiddenLayers();

    //清空vectorLayer
    //xs_clusterLayer.destroyCluster();
    //xs_clusterControl.deactivate();

    xs_zone_vectorLayer.removeAllFeatures();

    xs_isShowUtfGridTip = true;
    xs_pkdc_isGaugeClose = true;
    //xs_superZoneCode = -1;
    xs_clickMapType = XS.Main.clickMapType.none;
}

//深度清理地图
XS.Main.depClearMap = function() {
    XS.Main.clearMap();
    xs_currentZoneFuture = null;
    xs_vectorLayer.removeAllFeatures();

    clearInterval(xs_pkjc_IntervalId);
    xs_tasker_labelLayer.removeAllFeatures();
    xs_tasker_animatorVectorLayer.removeAllFeatures();

    XS.Main.Poor.clearRelocationLayer();
}

//意见反馈
XS.Main.showAdvanceFeedDialog = function(regionid){
    var htmlContent =
        '<div style="width: 100%; height: 100%; display: inline-block; box-sizing: border-box; padding: 5px;">' +
            '<input id="xs_main_ipt_advance" class="easyui-textbox easyui-resizable" data-options="multiline:true,prompt:\'请输入意见\'" style="width:100%;height:200px">'+
            '<a id="xs_main_btn_advance" href="javascript:0;" class="easyui-linkbutton" style="margin-top: 10px; margin-left: 340px;"><span style="width:120px; height: 40px; text-align: center;line-height: 40px;font-size: 25px;font-weight: bold; display: inline-block;">提交</span></a>'
        '</div>';
    XS.CommonUtil.openDialog("xs_main_detail_1", "意见反馈", "icon-man", htmlContent, false, false, true, 500, 300);    $("#xs_main_btn_advance").click(function(){
        var advance = $("#xs_main_ipt_advance").val();
        if(XS.StrUtil.isEmpty(advance)){
            XS.CommonUtil.showMsgDialog("", "意见内容不能为空");
            return;
        }
        var data = {sendid:sessionStorage.getItem("userid"),regionid:regionid,content:advance};
        XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, "AddTbOpinion", data, function (json)
        {
            XS.CommonUtil.hideLoader();
            if (json==true || json=="true") {
                XS.CommonUtil.showMsgDialog("","发送成功");
                XS.CommonUtil.closeDialog("xs_main_detail_1");
            }else{
                XS.CommonUtil.showMsgDialog("", "发送失败");
            }
        },function(e){
            XS.CommonUtil.showMsgDialog("", "网络异常，请重新发送");
            XS.CommonUtil.hideLoader();
        });
    });
}

//屏幕全屏切换
XS.Main.fulScreenSwitch = function(isfull, isReload){
    if(isfull)
    {
        //XS.CommonUtil.exitFullScreen();
        if(isReload){
            window.location.reload();
        }
        $("#xs_rb_btn_screen").tooltip({content: '<span style="color:#3f3f3f">全屏模式</span>'});
        $("#xs_rb_btn_screen").css({
            'color': '#9c9c9c'
        });
        $("#xs_rb_btn_screen").hover(
            function () {
                $(this).css({
                    'color': '#0e92ee'
                });
            },
            function () {
                $(this).css({
                    'color': '#9c9c9c'
                });
            }
        );
        xs_rbbtn_isfullscreen = false;
    }else
    {
        XS.CommonUtil.fullScreen();
        $("#xs_rb_btn_screen").tooltip({content: '<span style="color:#3f3f3f">退出全屏</span>'});
        $("#xs_rb_btn_screen").css({
            'color': '#0e92ee'
        });
        $("#xs_rb_btn_screen").hover(
            function () {
                $(this).css({
                    'color': '#9c9c9c'
                });
            },
            function () {
                $(this).css({
                    'color': '#0e92ee'
                });
            }
        );
        xs_rbbtn_isfullscreen = true;
    }
}

//脱贫时间处理
XS.Main.povertyTimer = function(){
    var edate = XS.DateUtil.strFormatToDate("yyyy-MM-dd HH:mm:ss", XS.Constants.poverty_date);
    var etime = edate.getTime();
    var ctime = new Date().getTime();

    var isnegative = false; //是否为负数
    var dtime = edate - ctime;
    if(dtime<0){
        isnegative = true;
    }
    var dtime = Math.abs(dtime);

    var dday = Math.floor(dtime/(24*3600*1000));
    dtime -= 24*3600*1000*dday;

    var dhour = Math.floor(dtime/(1*3600*1000));
    dtime -= 1*3600*1000*dhour;

    var dm = Math.floor(dtime/(1*60*1000));
    dtime -= 1*60*1000*dm;

    var ds = Math.floor(dtime/(1*1000));
    if(isnegative){
        dday = 0 - dday;
        dhour = 0 - dhour;
        dm = 0 - dm;
        ds = 0 - ds;
    }

    var content ='全市脱贫:'+
        '<span style="color:#00bbee">'+dday+"</span>天"+
        '<span style="color:#00bbee">'+dhour+"</span>时"+
        '<span style="color:#00bbee">'+dm+"</span>分"+
        '<span style="color:#00bbee">'+ds+"</span>秒";
    $("#xs_rt_btn_timer").empty().append(content);
}

//点击行政区域弹出功能窗口
XS.Main.showFunMenu = function(x, y){
   // var xy = XS.GeometryUtil.getPixelFromGeoXY(lon, lat, xs_MapInstance.getMapObj());
    if(!document.getElementById("xs_fmenu"))
    {
        var tjfxTag =
            '<div id="xs_fmenu" style="width:120px;">'+
                '<div>'+
                    '<span>贫困指标</span>'+
                    '<div>'+
                        '<div onclick="XS.Main.cRItem_Tjfx_Range(XS.Main.Tjfx.type.range_pkfsx);">贫困发生率</div>'+
                        '<div onclick="XS.Main.cRItem_Tjfx_Range(XS.Main.Tjfx.type.range_tpx);">脱贫率</div>'+
                        '<div onclick="XS.Main.cRItem_Tjfx_Range(XS.Main.Tjfx.type.range_wfx);">危房率</div>'+
                        '<div onclick="XS.Main.cRItem_Tjfx_Range(XS.Main.Tjfx.type.range_fpbqx);">扶贫搬迁率</div>'+
                    '</div>'+
                '</div>'+
                '<div class="menu-sep"></div>'+
                '<div>'+
                    '<span>四有五覆盖</span>'+
                    '<div>'+
                        '<div onclick="XS.Main.Tjfx.Graph.graph(XS.Main.Tjfx.Graph.Type.bar.fourOf45);">四有</div>'+
                        '<div onclick="XS.Main.Tjfx.Graph.graph(XS.Main.Tjfx.Graph.Type.bar.fiveOf45);">五覆盖</div>'+
                    '</div>'+
                '</div>'+
                '<div class="menu-sep"></div>'+
                '<div>'+
                    '<span>五通四有</span>'+
                    '<div>'+
                        '<div onclick="XS.Main.Tjfx.Graph.graph(XS.Main.Tjfx.Graph.Type.bar.fiveOf54);">五通</div>'+
                        '<div onclick="XS.Main.Tjfx.Graph.graph(XS.Main.Tjfx.Graph.Type.bar.fourOf54);">四有</div>'+
                    '</div>'+
                '</div>'+
                '<div class="menu-sep"></div>'+
                '<div onclick="XS.Main.Tjfx.Graph.graph(XS.Main.Tjfx.Graph.Type.pie);">土地信息</div>'+
                '<div onclick="XS.Main.Tjfx.Graph.graph(XS.Main.Tjfx.Graph.Type.bar.social);">社会保障</div>'+
            '</div>';
        $("#xs_mainC").append(tjfxTag);
    }
    var content =
        '<div style="background-color: #eee; box-sizing: border-box; padding:5px;">' +
        '<div style="box-sizing: border-box; margin-bottom: 5px;">' +
        "<a id='xs_f_pkdcBtn' href='javascript:void(0);' style='width: 80px;margin-right:5px;display: inline-block;'>贫困洞察</a>" +
        "<a id='xs_f_zrjcBtn' href='javascript:void(0);'  style='width: 80px;'>责任监控</a>" +
        '</div>'+
        '<div style="box-sizing: border-box;">' +
        "<a id='xs_f_rwjcBtn' href='javascript:void(0);'  style='width: 80px; margin-right:5px; display: inline-block;'>任务监控</a>" +
        "<a id='xs_f_tjfxBtn' href='javascript:void(0);'  class='easyui-menubutton' data-options='menu:\"#xs_fmenu\"' style='width: 80px;'>统计分析</a>"+
        "<div>";
    XS.CommonUtil.openDialog("xs_main_fmenu_dialog", "功能菜单", "", content, false, false, false,null, null,(window.innerWidth/2.0+50),(window.innerHeight/2.0+50));

    $('#xs_f_pkdcBtn').linkbutton({});
    $('#xs_f_zrjcBtn').linkbutton({});
    $('#xs_f_rwjcBtn').linkbutton({});

    $('#xs_f_pkdcBtn').click(function(){
        XS.Main.RightClickMenuHandler('pkdc');
    });
    $('#xs_f_zrjcBtn').click(function(){
        XS.Main.RightClickMenuHandler('zrjk');
    });
    $('#xs_f_rwjcBtn').click(function(){
        XS.Main.RightClickMenuHandler('rwjk');
    });
}


//************************处理点击鼠标右键选中菜单选项处理函数************************************
//分段专题图 贫困发生率 脱贫率
XS.Main.cRItem_Tjfx_Range = function(type){
    XS.CommonUtil.closeDialog("xs_main_fmenu_dialog");
    if(xs_currentZoneFuture != null){
        xs_tjfx_range_centerPoint = xs_currentZoneFuture.geometry.getBounds().getCenterLonLat();
        XS.Main.Tjfx.range(xs_currentZoneLevel-1, xs_superZoneCode, type);
    }else{
        switch (xs_user_regionLevel){
            case XS.Main.ZoneLevel.city:
            case XS.Main.ZoneLevel.county:
                XS.Main.Tjfx.range(XS.Main.ZoneLevel.city, xs_cityID, type);
                break;
            case XS.Main.ZoneLevel.town:
                XS.Main.Tjfx.range(XS.Main.ZoneLevel.county, xs_user_Features[0].data.县级代码, type);
                break;
            case XS.Main.ZoneLevel.village:
                XS.Main.Tjfx.range(XS.Main.ZoneLevel.town,  xs_user_Features[0].data.Town_id, type);
                break;
        }
    }
}
//************************处理点击鼠标右键选中菜单选项处理函数************************************
