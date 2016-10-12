/**
 * Created by GZXS on 2016/6/27.
 */
    XS.Searchbox = {};
XS.Searchbox.init = function(){
    var xs_search_box = '<div id="xs_searchbox" class="easyui-panel"  style="background: transparent;border: 0px;">' +
        '<div>' +
        '<select id="xs_searchbox_type" style="width: 80px;height: 30px;display: inline-block;border1: 1px solid red;">' +
        '<option value="区县">区县</option>' +
        '<option value="乡镇">乡镇</option>' +
        '<option value="行政村">行政村</option>' +
        '<option value="姓名">姓名</option>' +
        '<option value="身份证号">身份证号</option>' +
        '<option value="电话">电话</option>' +
        '</select>' +
        '<input id="xs_searchbox_content" type="text" name="word" autocomplete="off" maxlength="256" style="width: 208px;height: 24px;display: inline-block;">' +
        '<button id="xs_searchbox-button" data-title1="搜索" data-tooltip1="1" onclick="XS.Searchbox.searchbox();" style="width: 45px;height: 30px;display: inline-block;">搜索</button>' +
        '</div>' +
            //'<div style="height: 2px;"></div>' +
        '<div id="xs_searchbox_resultC" style="width: 337px;height1: 308px;margin-top: 1px;position: relative;left1: 1px;top1:1px;border1: 1px solid green;display: none;">' +
        '<div id="xs_searchbox_result" style1="width: 212px;height1: 200px;"></div>' +
        '</div>' +
        '</div>';
    $("#xs_searchbox_boxC").empty().append(xs_search_box);

    $("#xs_searchbox_content").keyup(function(e){
        if(e.keyCode == 13){
            XS.Searchbox.searchbox();
        }
    });
}

XS.Searchbox.searchbox = function(){
    var search_type = $("#xs_searchbox_type").val();
    var searchbox_content = $("#xs_searchbox_content").val();
    if(XS.StrUtil.isEmpty(searchbox_content)){
        XS.CommonUtil.showMsgDialog("","请输入需要搜索的内容");
        $("#xs_searchbox_resultC").css({display:"none"});
        return;
    }
    var data = {type:search_type,value:searchbox_content,pageNum:1,pageSize:10};
    XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, "QueryHouseByValueAndType", data, function(json){
        if(json && json.length>0){
            xs_pkdc_cacheDataArr = json;
            console.log(json);
            $("#xs_searchbox_resultC").css({display:"block"});
            $('#xs_searchbox_result').datagrid({
                data: json,
                pagination: true,
                //fit:true,
                //pagePosition:"bottom",
                //pageSize: 10,
                //pageList: [20],
                striped: true,
                onSelect:XS.Main.Pkjc.onSelectedRowHandler,
                singleSelect: true,
                //loadingMessage:"Loading",
                pageNumber: 1,
                //loadMsg:"努力加载中...",
                rownumbers: true,
                columns: [[
                    {field: 'name', title: '户主姓名'},
                    {field: 'CertNo', title: '身份证号'},
                    {field: 'hid', title: '户编号'}
                ]]
            });
            var pager = $("#xs_searchbox_result").datagrid("getPager");
            pager.pagination({
                total:json.length,
                displayMsg:"共" + json.length + "记录",
                showRefresh:false,
                showPageList: false,
                onSelectPage:function (pageNumber, pageSize) {

                    data = {type:search_type,value:searchbox_content,pageNum:pageNumber,pageSize:pageSize};
                    //http://61.159.185.196:7060/Service2.svc/QueryHousePeoByHidOfPage?pbno=52242810102&pageNo=1
                    XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, "QueryHouseByValueAndType", data, function(json){
                        if(json && json.length>0){
                            xs_pkdc_cacheDataArr = json;
                            $("#xs_searchbox_result").datagrid("loadData", json);
                            pager.pagination('refresh', {
                                total:json.length,
                                displayMsg:"共" + json.length + "记录",
                                showRefresh:false,
                                showPageList: false,
                                pageNumber:pageNumber
                            });
                        }else{
                            $("#xs_searchbox_resultC").css({display:"none"});
                            XS.CommonUtil.showMsgDialog("","未找到相关数据");
                        }
                    });
                }
            });
        }else{
            $("#xs_searchbox_resultC").css({display:"none"});
            XS.CommonUtil.showMsgDialog("","未找到相关数据");
        }
    });
};