/**
 * Created by GZXS on 2016/6/27.
 */
    XS.Searchbox = {};
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
            '<button id="xs_searchbox_button" onclick="XS.Searchbox.searchbox();" title="搜索">搜索</button>' +
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
        $("#xs_searchbox_clear").tooltip("destroy").css({cursor:'default',background:'#fff'});
    }
};
/**
 * 清除输入框的内容和搜索结果
 */
XS.Searchbox.clearCon = function(){
    $("#xs_searchbox_content").val("");
    $("#xs_searchbox_clear").tooltip("destroy").css({cursor:'default',background:'#fff'});
    $("#xs_searchbox_resultC").animate({height:0},{duration: 500 ,complete:function(){
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
    console.log(XS.Main.Ztree.zoneFeatuers.county);
    $("#xs_searchbox_content").select();
    var search_type = $("#xs_searchbox_type").val();
    var searchbox_content = $("#xs_searchbox_content").val();
    if(XS.StrUtil.isEmpty(searchbox_content)){
        XS.CommonUtil.showMsgDialog("","请输入需要搜索的内容");
        $("#xs_searchbox_resultC").css({display:"none"});
        return;
    }
    switch (search_type){
        case '区县':
        {

            break;
        }
        case '乡镇':
        {

            break;
        }
        case '行政村':
        {

            break;
        }
        case '姓名':
        {

            break;
        }
        case '身份证号':
        {

            break;
        }
        case '电话':
        {

            break;
        }
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
            $("#xs_searchbox_resultC").animate({height:xs_searchbox_resultCH},{duration: 500 });
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
                            $("#xs_searchbox_resultC").animate({height:0},{duration: 500,complete:function(){
                                $("#xs_searchbox_resultC").empty();
                            }});
                            XS.CommonUtil.showMsgDialog("","未找到相关数据");
                        }
                    });
                }
            });
        }else{
            $("#xs_searchbox_resultC").animate({height:0},{duration: 500 ,complete:function(){
                $("#xs_searchbox_resultC").empty();
            }})
            XS.CommonUtil.showMsgDialog("","未找到相关数据");
        }
    });
};
