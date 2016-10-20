/**
 * Created by GZXS on 2016/6/27.
 */
    XS.Searchbox = {};
var xs_searchbox_countyFields = [["CITY","所属市"],["C11","国土面积"],["POVERT","贫困发生率(%)"],["C2","镇(乡)数"],["C4","行政村数"],
    ["C4A","贫困村数"],["C6","总户数"],["C9","贫困户数"],["C7","总人口"],["C10","贫困人口"],["C1","贫困类型"]];
var xs_searchbox_townFields = [["ECOCROP","耕地面积(亩)"],["GROUPNUM","自然村"],["TOTALHH","总户数"],["INPOORHOUSE","贫困户"],
    ["TOTALPOP","总人口"],["POORPOP","贫困人口"],["POVERTYRATE","贫困发生率(%)"]];
var xs_searchbox_villFields = [["TOWN","所属(乡)镇"],["POVERT","贫困发生率(%)"],["POORTYPE","贫困类型"],["B5","耕地面积(亩)"],
    ["B2","总户数"],["B2A","贫困户"],["B3","总人口"],["B3A","贫困人口"]];
var xs_searchbox_poorH = [["HHNAME","户主"],["PTYPE","农户属性"],["AGE","年龄"],["CARDID","身份证"],["POP","家庭人数"],
    ["PHONE","联系方式"],["A27","住房面积"],["A33","年收入"],["A28","危房"],["A36","各类补贴"],["ISARMYFAMILY","军烈属"],
    ["MAIN_REASON","致贫原因"],["COUNTY","大方县"],["TOWN","乡镇"],["VILL","村"],["VGROUP","组"]];
var xs_searchbox_replaceFields = [["ALTITUDE","Altitude"],["CARDID","CerNto"],["LATITUDE","Latitude"],["LONGITUDE","Longitude"],["MEMO","Memo"],
    ["HGID","hguid"],["PB_HHID","hid"],["HHNAME","name"],["POP","num"]];

var xs_search_cashData = [];
var xs_searchbox_action = "";
var xs_searchbox_type = "";
var xs_searchbox_content = "";
var xs_searchbox_isSearch = false;
var xs_searchbox_level = -1;
var xs_searchbox_delay = false;
var xs_searchbox_resultBaseInfH = 0;

XS.Searchbox.init = function(){
    var xs_search_box = '<div id="xs_searchbox" class="easyui-panel">' +
        '<div id="xs_searchbox_C">' +
            XS.Searchbox.searchType() +
            '<input id="xs_searchbox_content" autocomplete="off" placeholder="&nbsp;行政区、贫困户信息查询" onkeydown1="XS.Searchbox.getConKey();">' +
            '<div id="xs_searchbox_clear" class="easyui-panel" onclick="XS.Searchbox.clearCon();">' +
                '<div id="xs_searchbox_loadingC">' +
                    '<i id="xs_searchbox_loading" class="fa <!--fa-circle-thin--> fa-spinner fa-pulse fa-3x fa-fw xs_loading">' +
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
        }else{
            XS.Searchbox.getConKey();
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
    $("#xs_searchbox_content").focus();
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
            xs_searchbox_level = XS.Main.ZoneLevel.county;
            xs_searchbox_action = "QueryTempCountyBaseInfoByCname";
            data = {Cname:xs_searchbox_content};
            break;
        }
        case '乡镇':
        {
            xs_searchbox_level = XS.Main.ZoneLevel.town;
            xs_searchbox_action = "QueryTempTownInfoByTname";
            data = {tname:xs_searchbox_content};
            break;
        }
        case '行政村':
        {
            xs_searchbox_level = XS.Main.ZoneLevel.village;
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
        //$("#xs_searchbox_loadingC").css({display:"none"});
        if(json && json.length>0){
            $("#xs_searchbox_content").select();
            xs_search_cashData = json;
            xs_searchbox_isSearch = true;
            $("#xs_searchbox_resultC").empty().append('<div id="xs_searchbox_resultBaseInf"></div>');
            xs_searchbox_resultBaseInfH = 15;
            switch (xs_searchbox_type){
                case '区县':
                {
                    XS.Searchbox.regionBaseInfo(0,json,"CTID","COUNTY",xs_searchbox_countyFields);
                    break;
                }
                case '乡镇':
                {
                    XS.Searchbox.regionBaseInfo(0,json,"TID","REGISTOR",xs_searchbox_townFields);
                    break;
                }
                case '行政村':
                {
                    XS.Searchbox.regionBaseInfo(0,json,"VID","VILL",xs_searchbox_villFields);
                    break;
                }
                case '姓名':
                case '身份证号':
                case '电话':
                {
                    XS.Searchbox.regionBaseInfo(0,json,"","",xs_searchbox_poorH);
                    //$("#xs_searchbox_resultC").append('<div id="xs_searchbox_pager" style="width: 100%;height: 40px"></div>');

                    var totalPageNum = json[0].TotolSum;
                    $("#xs_searchbox_pager").pagination({
                        total:totalPageNum,
                        displayMsg:"共" + totalPageNum + "记录",
                        showRefresh:false,
                        showPageList: false,
                        onSelectPage:function (pageNumber, pageSize) {

                            $("#xs_searchbox_clear").tooltip("destroy").css({cursor:'default',background:'#fff'});
                            $("#xs_searchbox_loadingC").css({display:"block"});
                            var data = {type:xs_searchbox_type,value:xs_searchbox_content,pageNum:pageNumber,pageSize:pageSize,regionid:xs_user_regionId};
                            //http://61.159.185.196:7060/Service2.svc/QueryHousePeoByHidOfPage?pbno=52242810102&pageNo=1
                            XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, "QueryHouseByValueAndType", data, function(nexJson){
                                $("#xs_searchbox_loadingC").css({display:"none"});
                                if(json && json.length>0){
                                    $("#xs_searchbox_content").select();
                                    $("#xs_searchbox_clear").css({cursor:'pointer',background: 'url("../img/searchbox.png") no-repeat -5px -38px #fff'});
                                    $('#xs_searchbox_clear').tooltip({
                                        position: 'bottom',
                                        content:'清除'
                                    });
                                    xs_search_cashData = nexJson;
                                    XS.Searchbox.regionBaseInfo(nexJson,"","",xs_searchbox_poorH);
                                    $("#xs_searchbox_pager").pagination('refresh', {
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
                    break;
                }
            }
        }else{
            $("#xs_searchbox_loadingC").css({display:"none"});
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
}
/**
 * 搜索结果的基本信息
 * @param json
 * @param regionId
 * @param regionName
 * @param fields
 */
XS.Searchbox.regionBaseInfo = function(i,json,regionId,regionName,fields){
    //$("#xs_searchbox_resultC").animate({height:350},{duration: 1000 });

    if(!XS.StrUtil.isEmpty(regionId) && !XS.StrUtil.isEmpty(regionName)){
        switch (xs_user_regionLevel){
            case XS.Main.ZoneLevel.city:
            {
                break;
            }
            case XS.Main.ZoneLevel.county:
            {
                if(json[i][regionId].toString().slice(0,6) != xs_user_regionId){
                    if(i<json.length-1){
                        XS.Searchbox.regionBaseInfo(i+1,json,regionId,regionName,fields);
                    }
                    return;
                }
                break;
            }
            case XS.Main.ZoneLevel.town:
            {
                if(json[i][regionId].toString().slice(0,9) != xs_user_regionId){
                    if(i<json.length-1){
                        XS.Searchbox.regionBaseInfo(i+1,json,regionId,regionName,fields);
                    }
                    return;
                }
                break;
            }
        }
    }
    var baseInfData = [];
    var regionIdV = 0;
    var regionNameV = "";
    for(var j in fields){
        if(fields[j][0] == "POVERT"){
            if(xs_searchbox_type == "区县"){
                baseInfData.push({name:fields[j][1],value:(json[i].C7/json[i].C10).toFixed(2)});
            }else{
                baseInfData.push({name:fields[j][1],value:(json[i].B3/json[i].B3A).toFixed(2)});
            }
        }else{
            if(XS.StrUtil.isEmpty(regionId) && XS.StrUtil.isEmpty(regionName) && j>11){
                regionNameV = "贫困户";
                var address = "";
                for(var k=12;k<fields.length;k++){
                    address += json[i][fields[k][0]];
                }
                baseInfData.push({name:"家庭地址",value:address});
                break;
            }else{
                if(fields[j][0] == "AGE"){
                    var poorHBirthYear = json[i].CARDID.slice(6,10);
                    var currentYear = new Date().getFullYear();
                    baseInfData.push({name:fields[j][1],value:currentYear-poorHBirthYear});
                }else{
                    baseInfData.push({name:fields[j][1],value:json[i][fields[j][0]]});
                }
            }
        }
    }
    var xs_searchbox_baseInf = '';
    if(!XS.StrUtil.isEmpty(regionId) && !XS.StrUtil.isEmpty(regionName)){
        regionIdV = json[i][regionId];
        regionNameV = json[i][regionName];
        xs_searchbox_baseInf += '<div class="xs_searchbox_baseInfPanelC" regionId="' + regionIdV + '" regionName="' + regionNameV + '">';
    }else{
        for(var j in xs_searchbox_replaceFields){
            xs_search_cashData[i][xs_searchbox_replaceFields[j][1]] = xs_search_cashData[i][xs_searchbox_replaceFields[j][0]];
        }
        xs_searchbox_baseInf += '<div class="xs_searchbox_baseInfPanelC" regionId="' + i + '">';
    }
    xs_searchbox_baseInf += '<div class="xs_searchbox_baseInfPanel">' +
                '<div style="width: 100%;height: 30px;line-height: 30px;background: #02BBEE;">&nbsp;' + regionNameV + '基本信息</div>' +
                '<div style="width: 92%;position: relative;top1: 2px;left: 4%;>';
    if(!XS.StrUtil.isEmpty(regionId) && !XS.StrUtil.isEmpty(regionName)){
        xs_searchbox_baseInf += XS.Searchbox.createTable(baseInfData,2,30,[[10,2]],"","color:#00bbee","乡镇",regionId,regionName,["xs_searchbox_tool"]);
    }else{
        xs_searchbox_baseInf += XS.Main.Poor.createTable(baseInfData, 2, 30,"","color:#00bbee");
    }
    xs_searchbox_baseInf += '</div></div></div>';
    $("#xs_searchbox_resultBaseInf").append(xs_searchbox_baseInf);
    xs_searchbox_resultBaseInfH += $(".xs_searchbox_baseInfPanel").outerHeight() + 15;
    XS.Searchbox.tool(i,json,regionIdV,regionNameV,regionId,regionName,fields);
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
    var objectId = -1;
    var regionName = "";
    if($(".xs_searchbox_baseInfPanelC").length == 1){
        objectId = $(".xs_searchbox_baseInfPanelC").attr("regionId");
        regionName = $(".xs_searchbox_baseInfPanelC").attr("regionName");
    }else{
        objectId = $(this).attr("regionId");
        regionName = $(this).attr("regionName");
    }
    if(!regionName){
        xs_pkdc_cacheDataArr = xs_search_cashData;
        XS.Main.Pkjc.onSelectedRowHandler(objectId, xs_search_cashData[objectId]);
        return;
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
            sql = "县级代码="+objectId.slice(0,6);
            layerName = "Twon_Code";
            regionIdStr = "乡镇代码";
            break;
        }
        case "行政村":
        {
            sql = "Town_id="+objectId.slice(0,9);
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
                if(data[regionIdStr] == objectId){
                    feature = result.recordsets[0].features[i];
                }
            }
            xs_MapInstance.getMapObj().zoomToExtent(feature.geometry.getBounds(),false);
            xs_currentZoneFuture = feature;
            feature.style = xs_stateZoneStyle;
            xs_zone_vectorLayer.removeAllFeatures();
            xs_zone_vectorLayer.addFeatures(feature);
            xs_currentZoneName = regionName;
            xs_clickMapFutureId  = objectId;
            xs_currentZoneCode =  objectId;
            xs_pkdc_isFirstShowInfoWin = true;
            switch (xs_searchbox_type){
                case "区县":
                    xs_superZoneCode = Math.floor(objectId/100);
                    xs_currentZoneLevel = XS.Main.ZoneLevel.county;
                    break;
                case "乡镇":
                    xs_superZoneCode = Math.floor(objectId/1000);
                    xs_currentZoneLevel = XS.Main.ZoneLevel.town;
                    break;
                case "行政村":
                    xs_superZoneCode = objectId.slice(0,9);
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
XS.Searchbox.createTable = function (objArr,colls, rowH,mergeColls,nameCollStyle,valueCollStyle,nextName,regionId,regionName,addRowIdArr) {
    var content =
        '<div class="datagrid-wrap panel-body panel-body-noheader" style="width: 100%; height: auto; margin-top: 5px;">'+
        '<div class="datagrid-body">'+
        '<table class="datagrid-btable" cellspacing="0" cellpadding="0" border="0" width="100%">'+
        '<tbody>';
    var rowNum = 0;
    var preRowNum = -1;
    var alreadyColls = 0;
    for(var i=0;i<objArr.length;i++){
        if(alreadyColls==colls){
            alreadyColls = 0;
            rowNum++;
            content += '</tr>';
        }
        var rcls = rowNum%2 == 0?"datagrid-row":"datagrid-row datagrid-row-alt";
        if(rowNum - preRowNum == 1){
            content += '<tr  style="height: '+rowH+'px;" class="'+rcls+'">';
        }
        preRowNum = rowNum;
        var isColspan = false;
        for(var j in mergeColls){
            if(mergeColls[j][0] == i && alreadyColls+mergeColls[j][1]<=colls && mergeColls[j][1]>1){
                isColspan = true;
                alreadyColls += mergeColls[j][1];
                content += '<td  colspan="'+ mergeColls[j][1] +'"><div class="datagrid-cell" style="'+nameCollStyle+'">'+objArr[i].name+'</div></td>';
                content += '<td colspan= "'+ mergeColls[j][1] +'"><div  class="datagrid-cell" style="'+valueCollStyle+'">'+objArr[i].value+'</div></td>';
                break;
            }
        }
        if(isColspan)continue;
            content += '<td><div class="datagrid-cell" style="'+nameCollStyle+'">'+objArr[i].name+'</div></td>';
            content += '<td><div  class="datagrid-cell" style="'+valueCollStyle+'">'+objArr[i].value+'</div></td>';
            alreadyColls++;
        if(i==objArr.length-1){
            content += '</tr>';
        }
    }
    for(var i in addRowIdArr){
        rowNum++;
        var rcls = rowNum%2==0?"datagrid-row":"datagrid-row datagrid-row-alt";
        content += '<tr class="'+ addRowIdArr[i] +'" style="height: '+rowH+'px;" class="'+rcls+'"></tr>';
    }
    content +=
        '</tbody>'+
        '</table>'+
        '</div>'+
        '</div>';
    return content;
}
XS.Searchbox.requestSelect = function(parent,obj,regionIdV,regionNameV){
    var requestSelect = '<select><option value=-1>--请选择--</option>';
    var action = "";
    var nextField = [];
    switch (xs_searchbox_type){
        case "区县":
        {
            action = "QueryTownsBaseInfoByareaId";
            nextField = ["TOWB_ID","TOWB_NAME"];
        }
        case "乡镇":
        {
            if(!action){
                action = "QueryVillBaseByareaId";
                nextField = ["VBI__ID","VBI_NAME"];
            }
            var dataN = {pbno: regionIdV};
            XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, action, dataN, function(json){
                if(json && json.length>0){
                    parent.empty();
                    for(var i in json){
                        requestSelect += '<option value="'+ json[i][nextField[0]] +'">' + json[i][nextField[1]] + '</option>';
                    }
                    requestSelect += '</select>';
                        parent.append(requestSelect);
                }
            });
            break;
        }
    }
}
XS.Searchbox.tool = function(i,json,regionIdV,regionNameV,regionId,regionName,fields){
    var xs_searchbox_tool = "";
    var nextRegion = "";
    switch (xs_searchbox_type){
        case "区县":
        {
            nextRegion = "乡镇";
        }
        case "乡镇":
            {
                if(!nextRegion){
                    nextRegion = "行政村";
                }
                xs_searchbox_tool += '<td colspan="2" align="center">' +
                        '<button class="xs_searchbox_detail" style="cursor: pointer;" regionId="'+regionIdV+'" regionName="'+ regionNameV+'">详情</button>' +
                    '</td>';
                xs_searchbox_tool += '<td><div class="datagrid-cell">'+nextRegion+'</div></td>' +
                    '<td align="center"><select class="xs_searchbox_nextSeleect" regionId="'+regionIdV+'" regionName="'+ regionNameV+'">';
                xs_searchbox_tool += '<option value=-1>--请选择--</option>';
                xs_searchbox_tool += '</select></td>';
                $(".xs_searchbox_tool:last").append(xs_searchbox_tool);
                break;
            }
        case "行政村":
            {
                xs_searchbox_tool += '<td colspan="2" align="center">' +
                        '<button class="xs_searchbox_detail" style="cursor: pointer;" regionId="'+regionIdV+'" regionName="'+ regionNameV+'">详情</button>' +
                    '</td>'+
                    '<td colspan="2" align="center">' +
                        '<button style="cursor: pointer;">贫困户</button>' +
                    '</td>';
                $(".xs_searchbox_tool:last").append(xs_searchbox_tool);
                break;
            }
    }
    if(i<json.length-1){
        XS.Searchbox.regionBaseInfo(i+1,json,regionId,regionName,fields);
    }else{
        XS.Searchbox.BaseInfPanel(regionId,regionName);
        $("#xs_searchbox_loadingC").css({display:"none"});
        $("#xs_searchbox_clear").css({cursor:'pointer',background: 'url("../img/searchbox.png") no-repeat -5px -38px #fff'});
        $('#xs_searchbox_clear').tooltip({
            position: 'bottom',
            content:'清除'
        });
    }
}
XS.Searchbox.BaseInfPanel = function(regionId,regionName){
    if($(".xs_searchbox_baseInfPanelC").length == 0){
        $("#xs_searchbox_resultC").animate({height:0},{duration: 1000 ,complete:function(){
            $("#xs_searchbox_resultC").empty();
        }});
        XS.Searchbox.getConKey();
        XS.CommonUtil.showMsgDialog("","未找到相关数据");
        return;
    }
    if(XS.StrUtil.isEmpty(regionId) && XS.StrUtil.isEmpty(regionName) && $("#xs_searchbox_pager").length == 0){
        $("#xs_searchbox_resultC").append('<div id="xs_searchbox_pager" style1="width: 100%;height: 40px"></div>');
    }
    $("#xs_searchbox_resultBaseInf").css({display:'block'})
    if(xs_searchbox_resultBaseInfH < 320 ){
        $("#xs_searchbox_resultBaseInf").height(xs_searchbox_resultBaseInfH);
        $("#xs_searchbox_resultC").animate({height:xs_searchbox_resultBaseInfH + 30},{duration: 1000 });
    }else{
        $("#xs_searchbox_resultBaseInf,#xs_searchbox_resultC").css({display:'block'});
        $("#xs_searchbox_resultBaseInf").height(320);
        $("#xs_searchbox_resultC").animate({height:350},{duration: 1000 });
    }
    $(".xs_searchbox_detail").click(function(){
        var detailRegionId = $(this).attr("regionId");
        var detailRegionName = $(this).attr("regionName");
        XS.Main.Pkjc.clickDetail(xs_searchbox_level,detailRegionName,detailRegionId);
    });
    $(".xs_searchbox_nextSeleect").click(function(){
        var parent = $(this).parent();
        parent.empty();
        var nextRegionId = $(this).attr("regionId");
        var nextRegionName = $(this).attr("regionName");
        XS.Searchbox.requestSelect(parent,$(this),nextRegionId,nextRegionName);
    });
    /*$(".xs_searchbox_baseInfPanelC").click(XS.Searchbox.baseInfoClick);
     if($(".xs_searchbox_baseInfPanelC").length == 1){
     XS.Searchbox.baseInfoClick();
     }*/
}