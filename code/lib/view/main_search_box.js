/**
 * Created by GZXS on 2016/6/27.
 */
    XS.Searchbox = {};
var xs_searchbox_countyFields = [["CITY","所属市"],["POVERT","贫困发生率(%)"],["C11","国土面积"],["C2","镇(乡)数"],["C4","行政村数"],
    ["C4A","贫困村数"],["C6","总户数"],["C9","贫困户数"],["C7","总人口"],["C10","贫困人口"],["C1","贫困类型"]];
var xs_searchbox_townFields = [["ECOCROP","耕地面积(亩)"],["GROUPNUM","自然村"],["TOTALHH","总户数"],["INPOORHOUSE","贫困户"],
    ["TOTALPOP","总人口"],["POORPOP","贫困人口"],["POVERTYRATE","贫困发生率(%)"]];
var xs_searchbox_villFields = [["TOWN","所属(乡)镇"],["POVERT","贫困发生率(%)"],["POORTYPE","贫困类型"],["B5","耕地面积(亩)"],
    ["B2","总户数"],["B2A","贫困户"],["B3","总人口"],["B3A","贫困人口"]];

var xs_search_cashData = [];
var xs_searchbox_action = "";
var xs_searchbox_type = "";
var xs_searchbox_content = "";
var xs_searchbox_isSearch = false;

XS.Searchbox.init = function(){
    var xs_search_box = '<div id="xs_searchbox" class="easyui-panel">' +
        '<div id="xs_searchbox_C">' +
            XS.Searchbox.searchType() +
            '<input id="xs_searchbox_content" autocomplete="off" placeholder="&nbsp;类型搜索 空即搜索全部" onkeyup="XS.Searchbox.getConKey();" onkeyup="XS.Searchbox.getConKey();">' +
            '<div id="xs_searchbox_clear" class="easyui-panel" onclick="XS.Searchbox.clearCon();">' +
                '<div id="xs_searchbox_loadingC">' +
                    '<i id="xs_searchbox_loading" class="fa fa-circle-thin  fa-pulse fa-3x fa-fw xs_loading">' +
                    '</i>' +
                '</div>' +
            '</div>' +
            '<button id="xs_searchbox_button" onclick="XS.Searchbox.searchbox();" title="搜索"></button>' +
        '</div>' +
        '<div id="xs_searchbox_resultC"></div>' +
    '</div>';
    $("#xs_searchbox_boxC").empty().append(xs_search_box);


    $('#xs_searchbox_button').tooltip({
        position: 'bottom'
    });
    $("#xs_searchbox_content").keyup(function(e){
        if(e.keyCode == 13){
            XS.Searchbox.searchbox();
        }
    });
}
/**
 * 输入框是否为空监测
 */
XS.Searchbox.getConKey = function(){
    if(!XS.StrUtil.isEmpty($("#xs_searchbox_content").val())){
        if(xs_searchbox_isSearch && xs_searchbox_content != $("#xs_searchbox_content").val()){
            xs_searchbox_isSearch = false;
            $("#xs_searchbox_resultC").animate({height:0},{duration: 1000 ,complete:function(){
                $("#xs_searchbox_resultC").empty();
            }})
        }
        $("#xs_searchbox_clear").css({cursor:'pointer',background: 'url("../img/searchbox.png") no-repeat 0 -114px #fff'});
        $('#xs_searchbox_clear').tooltip({
            position: 'bottom',
            content:'清除'
        });
    }else{
        xs_searchbox_isSearch = false;
        $("#xs_searchbox_loadingC").css({display:"none"});
        $("#xs_searchbox_clear").tooltip("destroy").css({cursor:'default',background:'#fff'});
        $("#xs_searchbox_resultC").animate({height:0},{duration: 1000 ,complete:function(){
            $("#xs_searchbox_resultC").empty();
        }})
    }
};
/**
 * 清除输入框的内容和搜索结果
 */
XS.Searchbox.clearCon = function(){
    xs_searchbox_isSearch = false;
    $("#xs_searchbox_content").val("");
    $("#xs_searchbox_clear").tooltip("destroy").css({cursor:'default',background:'#fff'});
    $("#xs_searchbox_resultC").animate({height:0},{duration: 1000 ,complete:function(){
        $("#xs_searchbox_resultC").empty();
    }})
}
/**
 * 搜索按钮点击函数
 */
XS.Searchbox.searchbox = function(){
    XS.Main.Poor.clearRelocationLayer();
    XS.Main.clearMap();
    $("#xs_xs_searchbox_content").select();
    xs_searchbox_type = $("#xs_searchbox_type").val();
    xs_searchbox_content = $("#xs_searchbox_content").val();
    $("#xs_searchbox_clear").tooltip("destroy").css({cursor:'default',background:'#fff'});
    $("#xs_searchbox_loadingC").css({display:"block"});
    var data = {};
    switch (xs_searchbox_type){
        case '区县':
        {
            xs_searchbox_action = "QueryTempCountyBaseInfoByCname";
            data = {Cname:xs_searchbox_content};
            break;
        }
        case '乡镇':
        {
            xs_searchbox_action = "QueryTempTownInfoByTname";
            data = {tname:xs_searchbox_content};
            break;
        }
        case '行政村':
        {
            xs_searchbox_action = "QueryTempVillInfoByvName";
            data = {vname:xs_searchbox_content};
            break;
        }
        case '姓名':
        case '身份证号':
        case '电话':
        {
            xs_searchbox_action = "QueryHouseByValueAndType";
            data = {type:xs_searchbox_type,value:xs_searchbox_content,pageNum:1,pageSize:10,regionid:xs_user_regionId};
            break;
        }
    }
    XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, xs_searchbox_action, data,function(json){
        $("#xs_searchbox_loadingC").css({display:"none"});
        if(json && json.length>0){
            xs_search_cashData = json;
            xs_searchbox_isSearch = true;
            console.log(json);
            $("#xs_searchbox_clear").css({cursor:'pointer',background: 'url("../img/searchbox.png") no-repeat -5px -38px #fff'});
            $('#xs_searchbox_clear').tooltip({
                position: 'bottom',
                content:'清除'
            });

            switch (xs_searchbox_type){
                case '区县':
                {
                    XS.Searchbox.regionBaseInfo(json,"CTID","COUNTY",xs_searchbox_countyFields);
                    break;
                }
                case '乡镇':
                {
                    XS.Searchbox.regionBaseInfo(json,"TID","REGISTOR",xs_searchbox_townFields);
                    break;
                }
                case '行政村':
                {
                    XS.Searchbox.regionBaseInfo(json,"VID","VILL",xs_searchbox_villFields);
                    break;
                }
                case '姓名':
                case '身份证号':
                case '电话':
                {
                    XS.Searchbox.poorH(json);
                    break;
                }
            }
        }else{
            $("#xs_searchbox_resultC").animate({height:0},{duration: 1000 ,complete:function(){
                $("#xs_searchbox_resultC").empty();
            }});
            XS.Searchbox.getConKey();
            XS.CommonUtil.showMsgDialog("","未找到相关数据");
        }
    },function(){
            $("#xs_searchbox_resultC").animate({height:0},{duration: 1000,complete:function(){
                $("#xs_searchbox_resultC").empty();
            }});
            $("#xs_searchbox_loadingC").css({display:"none"});
            XS.Searchbox.getConKey();
            XS.CommonUtil.showMsgDialog("","请求失败");
    });
};
/**
 * 姓名、身份证、电话搜索结果只有一条数据直接点位到地图
 */
XS.Searchbox.jsonsingle = function(){
            console.log(xs_pkdc_cacheDataArr);
            var xs_searchbox_resultE = '<div style="width: 100%;height: 100%;line-height: 100%;text-align: center;background: #FFFFDF;border-radius:0 0 2px 2px;">' +
                '<div id="xs_searchbox_success"></div>' +
                '<span id="xs_searchbox_successLable">已定位到地图</span>' +
            '</div>';
            $("#xs_searchbox_resultC").empty().append(xs_searchbox_resultE);
            $("#xs_searchbox_resultC").animate({height:40},{duration: 1000,complete:function(){
                var timeout = window.setTimeout(function(){
                    $("#xs_searchbox_resultC").animate({height:0},{duration: 1000 ,complete:function(){
                        $("#xs_searchbox_resultC").empty();
                    }});
                },1000);
            }});
            XS.Main.Pkjc.onSelectedRowHandler(0,xs_pkdc_cacheDataArr[0]);
}
/**
 * 姓名、身份证、电话搜索结果
 * @param json
 */
XS.Searchbox.poorH = function(json){
    $("#xs_searchbox_resultC").empty().append('<div id="xs_searchbox_result"></div>');
    var xs_searchbox_resultCH = (json.length + 2) * 26;
    $("#xs_searchbox_resultC").animate({height:xs_searchbox_resultCH},{duration: 1000 });
    $('#xs_searchbox_result').datagrid({
        data: json,
        pagination: true,
        striped: true,
        onSelect:XS.Searchbox.selectRow,
        singleSelect: true,
        pageNumber: 1,
        rownumbers: true,
        columns:[[
            {field: 'name', title: '户主姓名',width:'20%'},
            {field: 'CertNo', title: '身份证号',width:'38%'},
            {field: 'hid', title: '户编号',width:'38%'}
        ]]
    });
    if(json.length == 1){
        XS.Searchbox.selectRow(0,json[0]);
    }
    var pager = $("#xs_searchbox_result").datagrid("getPager");
    var totalPageNum = Math.ceil(json[0].TotolSum/10);
    pager.pagination({
        total:totalPageNum,
        displayMsg:"共" + totalPageNum + "记录",
        showRefresh:false,
        showPageList: false,
        onSelectPage:function (pageNumber, pageSize) {

            $("#xs_searchbox_clear").tooltip("destroy").css({cursor:'default',background:'#fff'});
            $("#xs_searchbox_loadingC").css({display:"block"});
            var data = {type:xs_searchbox_type,value:xs_searchbox_content,pageNum:pageNumber,pageSize:pageSize,regionid:xs_user_regionId};
            //http://61.159.185.196:7060/Service2.svc/QueryHousePeoByHidOfPage?pbno=52242810102&pageNo=1
            XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, "QueryHouseByValueAndType", data, function(json){
                $("#xs_searchbox_loadingC").css({display:"none"});
                if(json && json.length>0){
                    $("#xs_searchbox_clear").css({cursor:'pointer',background: 'url("../img/searchbox.png") no-repeat -5px -38px #fff'});
                    $('#xs_searchbox_clear').tooltip({
                        position: 'bottom',
                        content:'清除'
                    });
                    xs_search_cashData = json;
                    $("#xs_searchbox_result").datagrid("loadData", json);
                    pager.pagination('refresh', {
                        total:totalPageNum,
                        displayMsg:"共" + totalPageNum + "记录",
                        showRefresh:false,
                        showPageList: false,
                        pageNumber:pageNumber
                    });
                }else{
                    $("#xs_searchbox_resultC").animate({height:0},{duration: 1000,complete:function(){
                        $("#xs_searchbox_resultC").empty();
                    }});
                    XS.Searchbox.getConKey();
                    XS.CommonUtil.showMsgDialog("","未找到相关数据");
                }
            },function(){
                $("#xs_searchbox_resultC").animate({height:0},{duration: 1000,complete:function(){
                    $("#xs_searchbox_resultC").empty();
                }});
                $("#xs_searchbox_loadingC").css({display:"none"});
                XS.Searchbox.getConKey();
                XS.CommonUtil.showMsgDialog("","请求失败");
            });
        }
    });
}
/**
 * 姓名、身份证、电话搜索的行数据点击
 * @param rowIndex
 * @param rowData
 */
XS.Searchbox.selectRow = function(rowIndex, rowData){
    switch (xs_searchbox_type) {
        case '区县':
        case '乡镇':
        case '行政村':
        {
            //XS.Main.Pkjc.onSelectedRowHandler;
            break;
        }
        case '姓名':
        case '身份证号':
        case '电话':
        {
            xs_pkdc_cacheDataArr = xs_search_cashData;
            XS.Main.Pkjc.onSelectedRowHandler(rowIndex, rowData);
            break;
        }
    }
}
/**
 * 行政区域搜索结果的基本信息
 * @param json
 * @param regionId
 * @param regionName
 * @param fields
 */
XS.Searchbox.regionBaseInfo = function(json,regionId,regionName,fields){
    //$("#xs_searchbox_resultC").animate({height:350},{duration: 1000 });
    $("#xs_searchbox_resultC").empty().append('<div id="xs_searchbox_resultBaseInf"></div>');
    var xs_searchbox_resultBaseInfH = 15;
    for(var i in json) {
        switch (xs_user_regionLevel){
            case XS.Main.ZoneLevel.city:
            {
                break;
            }
            case XS.Main.ZoneLevel.county:
            {
                if(json[i][regionId].toString().slice(0,6) != xs_user_regionId){
                    continue;
                }
                break;
            }
            case XS.Main.ZoneLevel.town:
            {
                if(json[i].TOWNID != xs_user_regionId){
                    continue;
                }
                break;
            }
        }
        var baseInfData = [];
        for(var j in fields){
            if(fields[j][0] == "POVERT"){
                if(xs_searchbox_type == "区县"){
                    baseInfData.push({name:fields[j][1],value:(json[i].C7/json[i].C10).toFixed(2)});
                }else{
                    baseInfData.push({name:fields[j][1],value:(json[i].B3/json[i].B3A).toFixed(2)});
                }
            }else{
                baseInfData.push({name:fields[j][1],value:json[i][fields[j][0]]});
            }
        }
        var xs_searchbox_baseInf = '<div class="xs_searchbox_baseInfPanelC" regionId="'+ json[i][regionId] + '" regionName="'+ json[i][regionName] + '">' +
                '<div class="xs_searchbox_baseInfPanel">' +
                    '<div style="width: 100%;height: 30px;line-height: 30px;background: #E0ECFF;">&nbsp;' + json[i][regionName] + '基本信息</div>' +
                    '<div style="width: 90%;position: relative;top1: 2px;left: 5%;>' +
                        XS.Main.Poor.createTable(baseInfData, 2, 30,"color:#00bbee","")
                    '</div>' +
                '</div>' +
            '</div>';
        $("#xs_searchbox_resultBaseInf").append(xs_searchbox_baseInf);
        xs_searchbox_resultBaseInfH += $(".xs_searchbox_baseInfPanel").outerHeight() + 15;
    }
    if($(".xs_searchbox_baseInfPanelC").length == 0){
        $("#xs_searchbox_resultC").animate({height:0},{duration: 1000 ,complete:function(){
            $("#xs_searchbox_resultC").empty();
        }});
        XS.Searchbox.getConKey();
        XS.CommonUtil.showMsgDialog("","未找到相关数据");
        return;
    }
    if(xs_searchbox_resultBaseInfH < 350 ){
        $("#xs_searchbox_resultBaseInf").height(xs_searchbox_resultBaseInfH);
        $("#xs_searchbox_resultC").animate({height:xs_searchbox_resultBaseInfH},{duration: 1000 });
    }else{
        $("#xs_searchbox_resultBaseInf").height(350);
        $("#xs_searchbox_resultC").animate({height:350},{duration: 1000 });
    }
    $(".xs_searchbox_baseInfPanelC").click(XS.Searchbox.baseInfoClick);
    if($(".xs_searchbox_baseInfPanelC").length == 1){
        XS.Searchbox.baseInfoClick();
    }
}
/**
 * 搜索类型select
 * @returns {string}
 */
XS.Searchbox.searchType = function(){
    var xs_searchbox_option = '<select id="xs_searchbox_type">';
    switch (xs_user_regionLevel){
        case XS.Main.ZoneLevel.city:
        {
            xs_searchbox_option += '<option value="区县">区县</option>' +
            '<option value="乡镇">乡镇</option>' +
            '<option value="行政村">行政村</option>';
            break;
        }
        case XS.Main.ZoneLevel.county:
        {
            xs_searchbox_option += '<option value="乡镇">乡镇</option>' +
                '<option value="行政村">行政村</option>';
            break;
        }
        case XS.Main.ZoneLevel.town:
        {
            xs_searchbox_option += '<option value="行政村">行政村</option>';
            break;
        }
    }
    xs_searchbox_option += '<option value="姓名">姓名</option>' +
        '<option value="身份证号">身份证号</option>' +
        '<option value="电话">电话</option>' +
        '</select>';
    return xs_searchbox_option;
}
/**
 * 搜索结果选项点击
 */
XS.Searchbox.baseInfoClick = function(){
    if($(".xs_searchbox_baseInfPanelC").length == 1){
        var regionId = $(".xs_searchbox_baseInfPanelC").attr("regionId");
        var regionName = $(".xs_searchbox_baseInfPanelC").attr("regionName");
    }else{
        var regionId = $(this).attr("regionId");
        var regionName = $(this).attr("regionName");
    }
    var layerName = "";
    var sql = "";
    var regionIdStr = ""
    switch (xs_searchbox_type){
        case "区县":
        {
            sql = "SMID>0";
            layerName = "County_Code";
            regionIdStr = "AdminCode";
            break;
        }
        case "乡镇":
        {
            sql = "县级代码="+regionId.slice(0,6);
            layerName = "Twon_Code";
            regionIdStr = "乡镇代码";
            break;
        }
        case "行政村":
        {
            sql = "Town_id="+regionId.slice(0,9);
            layerName = "Village_Code";
            regionIdStr = "OldID";
            break;
        }
    }
    XS.CommonUtil.showLoader();
    XS.MapQueryUtil.queryBySql(XS.Constants.dataSourceName, layerName, sql, xs_MapInstance.bLayerUrl,function(queryEventArgs)
    {
        XS.CommonUtil.hideLoader();
        var i, feature,features, result = queryEventArgs.result;
        if (result && result.recordsets&&result.recordsets[0].features.length>0)
        {
            features = result.recordsets[0].features;
            for (i = 0; i < features.length; i++)
            {
                var data = features[i].data;
                if(data[regionIdStr] == regionId){
                    feature = result.recordsets[0].features[i];
                }
            }
            xs_MapInstance.getMapObj().zoomToExtent(feature.geometry.getBounds(),false);
            xs_currentZoneFuture = feature;
            feature.style = xs_stateZoneStyle;
            xs_zone_vectorLayer.removeAllFeatures();
            xs_zone_vectorLayer.addFeatures(feature);
            xs_currentZoneName = regionName;
            xs_clickMapFutureId  = regionId;
            xs_currentZoneCode =  regionId;
            xs_pkdc_isFirstShowInfoWin = true;
            switch (xs_searchbox_type){
                case "区县":
                    xs_superZoneCode = Math.floor(regionId/100);
                    xs_currentZoneLevel = XS.Main.ZoneLevel.county;
                    break;
                case "乡镇":
                    xs_superZoneCode = Math.floor(regionId/1000);
                    xs_currentZoneLevel = XS.Main.ZoneLevel.town;
                    break;
                case "行政村":
                    xs_superZoneCode = regionId.slice(0,9);
                    xs_currentZoneLevel = XS.Main.ZoneLevel.village;
                    break;
            }
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