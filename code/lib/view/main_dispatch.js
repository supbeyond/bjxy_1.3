/**
 * 调度指挥
 * Created by GZXS on 2016/10/12.
 */
XS.Main.Dispatchcmmd = {};

XS.Main.Dispatchcmmd.tasker = {
    level:
        [
            {name:"特急", icon:"../img/tasker/xs_priority_1.png"},
            {name:"紧急", icon:"../img/tasker/xs_priority_2.png"},
            {name:"一般", icon:"../img/tasker/xs_priority_3.png"},
            {name:"不急", icon:"../img/tasker/xs_priority_4.png"}
        ],
    progress:
        [
            {name:"开始", icon:"../img/tasker/xs_progress_0.png"},
            {name:"1/8", icon:"../img/tasker/xs_progress_1.png"},
            {name:"1/4", icon:"../img/tasker/xs_progress_2.png"},
            {name:"3/8", icon:"../img/tasker/xs_progress_3.png"},
            {name:"1/2", icon:"../img/tasker/xs_progress_4.png"},
            {name:"5/8", icon:"../img/tasker/xs_progress_5.png"},
            {name:"3/4", icon:"../img/tasker/xs_progress_6.png"},
            {name:"7/8", icon:"../img/tasker/xs_progress_7.png"},
            {name:"完成", icon:"../img/tasker/xs_progress_8.png"}
        ]
};

/**
 * 调度指挥
 */
XS.Main.Dispatchcmmd.dispatchCommd = function(){
    XS.Main.Dispatchcmmd.dispatchCommd_send("毕节市", null);
}

/**
 * 调度指挥发送指令
 * @param receiver
 * @param receiverID
 */
XS.Main.Dispatchcmmd.dispatchCommd_send = function(receiver, receiverID){
    var content = '<div id="xs_dc_tab" class="easyui-tabs" style="width:400px; height: 500px;">'+
        '<i id="xs_dc_loading" style="position: absolute;top: 50%; left: 50%;margin-left: -25px;margin-top: 60px;z-index:5; visibility: visible;" class="fa fa-spinner fa-pulse fa-3x fa-fw xs_loading"></i>'+
        '</div>';

    XS.CommonUtil.openDialog("xs_main_detail", "调度指挥", "icon-man", content, false, false, false,null, null,0);
    $('#xs_dc_tab').tabs('add',{
        title:'发送任务',
        content:"<div id='xs_dc_tab_sender' style='padding: 5px; height: 100%; box-sizing: border-box;'></div>"
    });
    $('#xs_dc_tab').tabs('add',{
        title:'任务清单',
        content:"<div id='xs_dc_tab_list' style='padding: 5px; height: 100%; box-sizing: border-box;'></div>"
    });

    var tag_sender =
        '<table cellpadding="4" bordercolor="#DBDBDB" border="1" style="border-collapse: collapse;width: 100%; height: 100%;font-size: 13px;">' +
            '<tr>' +
                '<td>接收者</td>' +
                '<td colspan="3"><input id="xs_dcs_receiver" style="width: 80%; height: 25px;" class="easyui-textbox" type="text" data-options="multiline:true" value=""/></td>' +
            '</tr>'+
            '<tr>' +
                '<td>名称</td>' +
                '<td colspan="3"><input id="xs_dcs_name" style="width: 80%;height: 50px;" class="easyui-textbox" type="text" data-options="multiline:true"/></td>' +
            '</tr>'+
            '<tr>' +
                '<td>类型</td>' +
                '<td colspan="3"><input id="xs_dcs_type" style="width: 80%;height: 50px;" class="easyui-textbox" type="text" data-options="multiline:true"/></td>' +
            '</tr>'+
            '<tr>' +
                '<td>开始时间</td>' +
                '<td ><input id="xs_dcs_ds" style="width: 120px;height: 25px;" class="easyui-datebox" data-options="formatter:XS.CommonUtil.dateFormatter,parser:XS.CommonUtil.dateParser"/></td>' +
                '<td>结束时间</td>' +
                '<td ><input id="xs_dcs_dd" style="width: 120px;height: 25px;" class="easyui-datebox" data-options="formatter:XS.CommonUtil.dateFormatter,parser:XS.CommonUtil.dateParser"/></td>' +
            '</tr>'+
            '<tr>' +
                '<td>内容</td>' +
                '<td colspan="3"><input id="xs_dcs_content" style="height:200px;width: 100%;" class="easyui-textbox" name="message" data-options="multiline:true"/></td>' +
            '</tr>'+
            '<tr>' +
                '<td>紧急度</td>' +
                '<td>' +
                    '<select id="xs_dcs_level" style="height: 25px;width: 120px;" class="easyui-combobox">' +
                        '<option value="1">特急</option>' +
                        '<option value="2">紧急</option>' +
                        '<option value="3">一般</option>' +
                        '<option value="4">不急</option>' +
                    '</select>'+
                '</td>' +
                '<td colspan="2" style="text-align: center;"><a id="xs_dcs_submit" class="easyui-linkbutton"><span style="width:100px; height: 40px; text-align: center;line-height: 40px;font-size: 25px;font-weight: bold; display: inline-block;">发送</span></a></td>' +
        '</tr>'+
        '</table>';
    $("#xs_dc_tab_sender").append(tag_sender);
    $("#xs_dcs_ds").datebox();
    $("#xs_dcs_dd").datebox();

    $("#xs_dcs_receiver").textbox({
        'disabled':true
    });
    $("#xs_dcs_name").textbox();
    $("#xs_dcs_type").textbox();
    $("#xs_dcs_content").textbox();
    $("#xs_dcs_level").combobox({
        'panelHeight':85
    });
    $("#xs_dcs_submit").linkbutton();
    $("#xs_dcs_receiver").textbox('setValue', xs_currentZoneName);
    //-----------------------------------------------
    var tag_list =
        '<table cellpadding="2" bordercolor="#DBDBDB" border="1" style="border-collapse: collapse;width: 100%; height: auto;font-size: 13px;">' +
        '<tr>' +
        '<td>接收者</td>' +
        '<td colspan="2"><input id="xs_dcl_receiver" style="width: 80%; height: 25px;" class="easyui-textbox" type="text" data-options="multiline:true" value=""/></td>' +
        '<td style="text-align: center;"><a id="xs_dcl_submit" class="easyui-linkbutton"><span style="width:50px; height: 25px; text-align: center;line-height: 25px;font-size: 15px;font-weight: bold; display: inline-block;">查询</span></a></td>'+
        '</tr>'+
        '<tr>' +
        '<td>名称</td>' +
        '<td><input id="xs_dcl_name" style="width: 130px;height: 30px;" class="easyui-textbox" type="text" data-options="multiline:true"/></td>' +
        '<td>类型</td>' +
        '<td><input id="xs_dcl_type" style="width: 130px;height: 30px;" class="easyui-textbox" type="text" data-options="multiline:true"/></td>' +
        '</tr>'+
        '<tr>' +
        '<td>开始时间</td>' +
        '<td ><input id="xs_dcl_ds" style="width: 120px;height: 25px;" class="easyui-datebox" data-options="formatter:XS.CommonUtil.dateFormatter,parser:XS.CommonUtil.dateParser"/></td>' +
        '<td>结束时间</td>' +
        '<td ><input id="xs_dcl_dd" style="width: 120px;height: 25px;" class="easyui-datebox" data-options="formatter:XS.CommonUtil.dateFormatter,parser:XS.CommonUtil.dateParser"/></td>' +
        '</tr>'+
        '<tr>' +
        '<td>发送时间</td>' +
        '<td ><input id="xs_dcl_dsender" style="width: 120px;height: 25px;" class="easyui-datebox" data-options="formatter:XS.CommonUtil.dateFormatter,parser:XS.CommonUtil.dateParser"/></td>' +
        '<td>完成时间</td>' +
        '<td ><input id="xs_dcl_dfinish" style="width: 120px;height: 25px;" class="easyui-datebox" data-options="formatter:XS.CommonUtil.dateFormatter,parser:XS.CommonUtil.dateParser"/></td>' +
        '</tr>'+
        '<tr>' +
        '<td>紧急度</td>' +
        '<td>' +
        '<select id="xs_dcl_level" style="height: 25px;width: 120px;" class="easyui-combobox">' +
        '<option value="-1">--选择--</option>' +
        '<option value="1">特急</option>' +
        '<option value="2">紧急</option>' +
        '<option value="3">一般</option>' +
        '<option value="4">不急</option>' +
        '</select>'+
        '</td>' +
        '<td>完成度</td>' +
        '<td>'+
        '<select id="xs_dcl_progress" style="height: 25px;width: 120px;" class="easyui-combobox">' +
        '<option value="-3">--选择--</option>' +
        '<option value="-2">未开始</option>' +
        '<option value="-1">暂停</option>' +
        '<option value="0">开始</option>' +
        '<option value="1">1/8</option>' +
        '<option value="2">1/4</option>' +
        '<option value="3">3/8</option>' +
        '<option value="4">1/2</option>' +
        '<option value="5">5/8</option>' +
        '<option value="6">3/4</option>' +
        '<option value="7">7/8</option>' +
        '<option value="8">完成</option>' +
        '</select>'+
        '</td>' +
        '</tr>'+
        '</table>';
    $("#xs_dc_tab_list").append(tag_list);
    $("#xs_dcl_dsender").datebox();
    $("#xs_dcl_dfinish").datebox();
    $("#xs_dcl_ds").datebox();
    $("#xs_dcl_dd").datebox();

    $("#xs_dcl_receiver").textbox({
        'disabled':true
    });
    $("#xs_dcl_name").textbox();
    $("#xs_dcl_type").textbox();
    $("#xs_dcl_level").combobox({
        'panelHeight':105
    });
    $("#xs_dcl_progress").combobox();
    $("#xs_dcl_submit").linkbutton();
    $("#xs_dcl_receiver").textbox('setValue', xs_currentZoneName);

    $('#xs_dc_tab').tabs("select",0);
}