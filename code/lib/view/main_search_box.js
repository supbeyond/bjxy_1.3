/**
 * Created by GZXS on 2016/6/27.
 */
    XS.Searchbox = {};
var xs_searchbox_countyFields = [["C11","国土面积"],["C2","镇(乡)数"],["C4","行政村数"],["C4A","贫困村数"],
    ["C6","总户数"],["C9","贫困户数"],["C7","总人口"],["C10","贫困人口"],["C1","贫困类型"]];
var xs_searchbox_townFields = [["ECOCROP","耕地面积(亩)"],["GROUPNUM","自然村"],["TOTALHH","总户数"],["INPOORHOUSE","贫困户"],
    ["TOTALPOP","总人口"],["POORPOP","贫困人口"],["POVERTYRATE","贫困发生率"]];
var xs_searchbox_villFields = [["POORTYPE","贫困类型"],["B5","耕地面积(亩)"],["B2","总户数"],["B2A","贫困户"],
    ["B3","总人口"],["B3A","贫困人口"]];

var xs_search_columns = [];

var xs_search_cashData = [];
var xs_searchbox_action = "";
var xs_searchbox_type = "";
var xs_searchbox_content = "";

XS.Searchbox.init = function(){
    var xs_search_box = '<div id="xs_searchbox" class="easyui-panel">' +
        '<div id="xs_searchbox_C">' +
            '<select id="xs_searchbox_type">' +
            '<option value="区县">区县</option>' +
            '<option value="乡镇">乡镇</option>' +
            '<option value="行政村">行政村</option>' +
            '<option value="姓名">姓名</option>' +
            '<option value="身份证号">身份证号</option>' +
            '<option value="电话">电话</option>' +
            '</select>' +
            '<input id="xs_searchbox_content" autocomplete="off" placeholder="&nbsp;请输入对应类型的搜索内容" onkeyup="XS.Searchbox.getConKey();" onkeyup="XS.Searchbox.getConKey();">' +
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
        $("#xs_searchbox_clear").css({cursor:'pointer',background: 'url("../img/searchbox.png") no-repeat 0 -114px #fff'});
        $('#xs_searchbox_clear').tooltip({
            position: 'bottom',
            content:'清除'
        });
    }else{
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
    $("#xs_searchbox_content").val("");
    $("#xs_searchbox_clear").tooltip("destroy").css({cursor:'default',background:'#fff'});
    $("#xs_searchbox_resultC").animate({height:0},{duration: 1000 ,complete:function(){
        $("#xs_searchbox_resultC").empty();
    }})
}
/**
 * 搜索按钮点击函数
 */
/*XS.Searchbox.searchbox = function(){
    console.log(XS.Main.Ztree.zoneFeatuers.county);
    $("#xs_searchbox_content").select();
    var search_type = $("#xs_searchbox_type").val();
    var searchbox_content = $("#xs_searchbox_content").val();
    if(XS.StrUtil.isEmpty(searchbox_content)){
        XS.CommonUtil.showMsgDialog("","请输入需要搜索的内容");
        $("#xs_searchbox_resultC").css({display:"none"});
        return;
    }
    $("#xs_searchbox_clear").tooltip("destroy").css({cursor:'default',background:'#fff'});
    $("#xs_searchbox_loadingC").css({display:"block"});
    var data = {type:search_type,value:searchbox_content,pageNum:1,pageSize:10};
    XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, "QueryHouseByValueAndType", data, function(json){
        $("#xs_searchbox_loadingC").css({display:"none"});
        if(json && json.length>0){
            xs_pkdc_cacheDataArr = json;
            console.log(json);
            var xs_searchbox_resultCH = (json.length + 2) * 26;
            console.log(xs_searchbox_resultCH);
            $("#xs_searchbox_resultC").empty().append('<div id="xs_searchbox_result"></div>');
            $("#xs_searchbox_resultC").animate({height:xs_searchbox_resultCH},{duration: 1000 });
            $("#xs_searchbox_clear").css({cursor:'pointer',background: 'url("../img/searchbox.png") no-repeat -5px -38px #fff'});
            $('#xs_searchbox_clear').tooltip({
                position: 'bottom',
                content:'清除'
            });
            $('#xs_searchbox_result').datagrid({
                data: json,
                pagination: true,
                striped: true,
                onSelect:XS.Main.Pkjc.onSelectedRowHandler,
                singleSelect: true,
                pageNumber: 1,
                rownumbers: true,
                columns: [[
                    {field: 'name', title: '户主姓名'},
                    {field: 'CertNo', title: '身份证号'},
                    {field: 'hid', title: '户编号'}
                ]]
            });
            var pager = $("#xs_searchbox_result").datagrid("getPager");
            pager.pagination({
                total:json[0].TotolSum,
                displayMsg:"共" + json[0].TotolSum + "记录",
                showRefresh:false,
                showPageList: false,
                onSelectPage:function (pageNumber, pageSize) {

                    $("#xs_searchbox_clear").tooltip("destroy").css({cursor:'default',background:'#fff'});
                    $("#xs_searchbox_loadingC").css({display:"block"});
                    data = {type:search_type,value:searchbox_content,pageNum:pageNumber,pageSize:pageSize};
                    //http://61.159.185.196:7060/Service2.svc/QueryHousePeoByHidOfPage?pbno=52242810102&pageNo=1
                    XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, "QueryHouseByValueAndType", data, function(json){
                        $("#xs_searchbox_loadingC").css({display:"none"});
                        if(json && json.length>0){
                            $("#xs_searchbox_clear").css({cursor:'pointer',background: 'url("../img/searchbox.png") no-repeat -5px -38px #fff'});
                            $('#xs_searchbox_clear').tooltip({
                                position: 'bottom',
                                content:'清除'
                            });
                            xs_pkdc_cacheDataArr = json;
                            $("#xs_searchbox_result").datagrid("loadData", json);
                            pager.pagination('refresh', {
                                total:json[0].TotolSum,
                                displayMsg:"共" + json[0].TotolSum + "记录",
                                showRefresh:false,
                                showPageList: false,
                                pageNumber:pageNumber
                            });
                        }else{
                            $("#xs_searchbox_resultC").animate({height:0},{duration: 1000,complete:function(){
                                $("#xs_searchbox_resultC").empty();
                            }});
                            XS.CommonUtil.showMsgDialog("","未找到相关数据");
                        }
                    });
                }
            });
        }else{
            $("#xs_searchbox_resultC").animate({height:0},{duration: 1000 ,complete:function(){
                $("#xs_searchbox_resultC").empty();
            }})
            XS.CommonUtil.showMsgDialog("","未找到相关数据");
        }
    });
};*/
XS.Searchbox.searchbox = function(){
    $("#xs_xs_searchbox_content").select();
    console.log(XS.Main.Ztree.zoneFeatuers);
    xs_searchbox_type = $("#xs_searchbox_type").val();
    xs_searchbox_content = $("#xs_searchbox_content").val();
    if(XS.StrUtil.isEmpty(xs_searchbox_content)){
        XS.CommonUtil.showMsgDialog("","请输入需要搜索的内容");
        $("#xs_searchbox_resultC").css({display:"none"});
        return;
    }
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
            console.log(json);
            $("#xs_searchbox_clear").css({cursor:'pointer',background: 'url("../img/searchbox.png") no-repeat -5px -38px #fff'});
            $('#xs_searchbox_clear').tooltip({
                position: 'bottom',
                content:'清除'
            });

            switch (xs_searchbox_type){
                case '区县':
                {
                    XS.Searchbox.regionBaseInfo(json,"COUNTY",xs_searchbox_countyFields);
                    break;
                }
                case '乡镇':
                {
                    XS.Searchbox.regionBaseInfo(json,"REGISTOR",xs_searchbox_townFields);
                    break;
                }
                case '行政村':
                {
                    XS.Searchbox.regionBaseInfo(json,"VILL",xs_searchbox_villFields);
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
XS.Searchbox.baseInfo = function(xs_searchbox_type,xs_searchbox_content,cashData,regionIdField,regionName,action,fields){
    //XS.Main.Poor.createTable(xs_pkdc_btnCliDatagridObj, columnNum, rowH,"color:#00bbee","")
    var searchbox_regionId = -1;
    for(var i in cashData){
        if(xs_searchbox_content == cashData[i].data[regionName]){
            searchbox_regionId = cashData[i].data[regionIdField];
        }
    }
    $("#xs_searchbox_clear").tooltip("destroy").css({cursor:'default',background:'#fff'});
    $("#xs_searchbox_loadingC").css({display:"block"});
    var data = {pid:searchbox_regionId};
    XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, action, data, function(json){
        $("#xs_searchbox_loadingC").css({display:"none"});
        if(json && json.length>0){
            //xs_pkdc_cacheDataArr = json;
            console.log(json);
            var xs_searchbox_jsonObj = [];
            for(var i in fields){
                xs_searchbox_jsonObj.push({name:fields[i][1],value:!XS.StrUtil.isEmpty(json[0][fields[i][0]]) ? json[0][fields[i][0]] : "未录入"});
            }
            console.log(xs_searchbox_jsonObj);
            $("#xs_searchbox_resultC").css({height:'0px'}).empty().append(XS.Main.Poor.createTable(xs_searchbox_jsonObj, 2, 30,"color:#00bbee",""));

            $("#xs_searchbox_resultC").animate({height: $("#xs_searchbox_resultC :first-child").outerHeight()},{duration: 2000});
            $("#xs_searchbox_clear").css({cursor:'pointer',background: 'url("../img/searchbox.png") no-repeat -5px -38px #fff'});
            $('#xs_searchbox_clear').tooltip({
                position: 'bottom',
                content:'清除'
            });
            //XS.Main.Pkjc.onSelectedRowHandler(0,json[0]);
        }else{
            $("#xs_searchbox_resultC").animate({height:0},{duration: 1000 ,complete:function(){
                $("#xs_searchbox_resultC").empty();
            }});
            XS.CommonUtil.showMsgDialog("","未找到相关数据");
        }
    },function(){
        $("#xs_searchbox_resultC").animate({height:0},{duration: 1000,complete:function(){
            $("#xs_searchbox_resultC").empty();
        }});
        $("#xs_searchbox_loadingC").css({display:"none"});
    });
}
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
XS.Searchbox.regionBaseInfo = function(json,regionName,fields){
    //$("#xs_searchbox_resultC").animate({height:350},{duration: 1000 });*/
    $("#xs_searchbox_resultC").empty().append('<div id="xs_searchbox_resultBaseInf" style1="width: 100%;height: 350px;background: #ffffdf;border: 1px solid green;"></div>');
    var xs_searchbox_resultBaseInfH = 15;
    for(var i in json) {
        var baseInfData = [];
        for(var j in fields){
            baseInfData.push({name:fields[j][1],value:json[i][fields[j][0]]});
        }
        var xs_searchbox_baseInf = '<div id="xs_searchbox_baseInfPanel" style1="width: 90%;height: auto;position: relative;top: 15px;left: 5%;margin-bottom: 15px;border-radius:5px 5px 5px 5px;border: 1px solid green;">' +
            '<div style="width: 100%;height: 30px;line-height: 30px;background: #E0ECFF;">&nbsp;' + json[i][regionName] + '基本信息</div>' +
            '<div style="width: 90%;position: relative;top1: 2px;left: 5%;>' +
            XS.Main.Poor.createTable(baseInfData, 2, 30,"color:#00bbee","")
            '</div>' +
            '</div>';
        $("#xs_searchbox_resultBaseInf").append(xs_searchbox_baseInf);
        xs_searchbox_resultBaseInfH += $("#xs_searchbox_baseInfPanel").outerHeight() + 15;
    }

    if(xs_searchbox_resultBaseInfH < 350 ){
        $("#xs_searchbox_resultBaseInf").height(xs_searchbox_resultBaseInfH);
        $("#xs_searchbox_resultC").animate({height:xs_searchbox_resultBaseInfH},{duration: 1000 });
    }else{
        $("#xs_searchbox_resultBaseInf").height(350);
        $("#xs_searchbox_resultC").animate({height:350},{duration: 1000 });
    }
}