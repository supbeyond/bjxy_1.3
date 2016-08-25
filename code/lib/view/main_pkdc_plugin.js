/**
 * Created by GZXS on 2016/7/19.
 */
//贫困洞察辅助文件

//贫困洞察详情tab字段
XS.Main.Pkjc.detailKV = {
    city:{
        title:["土地信息","经济收入","人口统计","人口统计2","重点工作","专项扶贫","帮扶信息"],
        tabs:[
            {
                name:["耕地面积","基本农田面积","有效灌溉面积","林地面积","退耕还林面积","林果面积",
                    "牧草地面积","水域面积","荒漠化面积","石漠化面积","退耕还草面积","森林覆盖率(%)"],
                value:["CBS_CULLAND_AREA","CBS_BASIC_FARMLAND","CBS_IRRIGATE_AREA","CBS_FOREST_AREA",
                    "CBS_REFOREST_AREA","CBS_ORCHARD_AREA","CBS_PASTURE_AREA","CBS_WATER_AREA","CBS_DESERT_AREA",
                    "CBS_ROCKY_AREA","CBS_REGRASS_AREA","CBS_FOREST_RATE"]
            },
            {
                name:["GDP","第一产业","第二产业","第三产业","公财预算收入","公财预算支出","公财扶贫预算支出",
                    "教育部门资金投入","二级公路里程","高速公路里程","人均纯收入","人均纯收入增长率(%)","地方生产总值增长率(%)"],
                value:["CBS_GDP","CBS_FIRST_INDUSTRY","CBS_SECOND_INDUSTRY","CBS_THIRD_INDUSTRY",
                    "CBS_LOCAL_REVENUE","CBS_LOCAL_EXPEND","CBS_LOCAL_POVERTY_EXPEND","CBS_EDU_INVEST","CBS_TWOWAY_MILE"
                    ,"CBS_HIGHWAY_MILE","CBS_FARMERS_PERNET","CBS_PERNET_RATE","CBS_GDP_RATE"]
            },
            {
                name:["乡镇个数","行政村数","贫困村数","年末总人口","年末总户数","贫困人口","贫困户",
                    "贫困发生率(%)","脱贫村","脱贫户","脱贫人口","少数民族","无房户","危房户","危房改造户"],
                value:["CPS_TOWNSNUM","CPS_VILLNUM","CPS_POORVILL_NUM","CPS_YEAR_POP","CPS_YEAR_HHNUM","CPS_POOR_POP",
                "CPS_POOR_HHNUM","CPS_POVERTY_RATE","CPS_OUTPOV_VILLNUM","CPS_OUTPOV_HHNUM","CPS_OUTPOV_POP","VC_MINORITY_NUM",
                "CPS_NOROOM_HHNUM","CPS_DANGROOM_HHNUM","CPS_RECONSTRU_HHNUM"]
            },
            {
                name:["参加新农合人数","参加居民养老人数","享受农村低保人数","劳动力","参加培训人数","省内务工人数",
                    "省外务工人数","参培务工人数","参合贫困户","需异地搬迁户","需异地搬迁人数","未安全饮用水人数"],
                value:["CPS_MEDICAL_POP","CPS_OLDINSURE_POP","CPS_LOWGARAN_POP","CPS_LABOR_NUM","CPS_LTRAINED_NUM",
                    "CPS_IN_LABOR","CPS_OUT_LABOR","CPS_LTRAINED_LABOR","CPS_JOINORG_HHNUM","CPS_MOVE_HHNUM","CPS_MOVE_POP",
                    "CPS_NOWATER_POP"]
            },
            {
                name:["高等公路里程","实现安全饮水人数","通电行政村","农民合作组织数","有农合组织村","开展旅游村",
                    "有卫生院乡镇","通广播电视行政村","通宽带行政村"],
                value:["CFI_HIGHERROAD_MILE","CFI_SAFEWATER_POP","CFI_AC_VILNUM","CFI_FARMER_ORGNUM",
                    "CFI_ORG_VILNUM","CFI_TOURISM_VILNUM","CFI_HOSPL_TOWNSNUM","CFI_TELE_VILNUM","CFI_BAND_VILNUM"]
            },
            {
                name:["雨露计划培训人数","雨露计划投入资金","劳动力转移培训人数","适用技能培训人数","村致富培训人数","小额信贷覆盖贫困村",
                    "小额信贷贷款户","小额信贷发放总额","易地搬迁规划户","易地搬迁规划人数","易地搬迁完成户","易地搬迁完成人数","易地搬迁投入资金"],
                value:["CAS_RAIN_POP","CAS_RAIN_INVEST","CAS_TRANS_TRAINNUM","CAS_SKILL_TRAINNUM",
                    "CAS_LEADER_TRAINNUM","CAS_MICROC_VILNUM","CAS_MICROC_HHNUM","CAS_MICROC_AMOUNT","CAS_RESETTLE_HHNUM","CAS_RESETTLE_POP"
                    ,"CAS_RESETTLE_COMHH","CAS_RESETTLE_COMPOP","CAS_RESETTLE_FUNDS"]
            },
            {
                name:["驻村工作队","驻村干部","脱贫村","脱贫户","脱贫人口","到县扶贫资金","中央财政投入","财政贴息资金",
                    "以工代赈资金","少数民族发展资金","省级财政扶贫资金","市县财政扶贫资金","行业扶贫资金","社会帮扶资金"],
                value:["CHS_TEAM_NUM","CHS_LEADER_NUM","CHS_OUTPOVER_VILNUM","CHS_OUTPOVER_HHNUM",
                    "CHS_OUTPOVER_POP","CHS_TOTAL_AMOUNT","CHS_CENTRAL_INVEST","CHS_INTEREST_FUNDS","CHS_WORK_FUNDS","CHS_MINORITY_FUNDS"
                    ,"CHS_PROV_FUNDS","CHS_CITY_FUNDS","CHS_PROFESSION_FUNDS","CHS_SOCIAL_FUNDS"]
            }
        ]
    },
    county:{
        title:["基本信息","土地信息","经济收入","人口统计","人口统计2","重点工作","专项扶贫","帮扶信息"],
        tabs:[
            {},
            {
                name:["耕地面积","基本农田面积","有效灌溉面积","林地面积","退耕还林面积","林果面积","牧草地面积","水域面积","荒漠化面积",
                    "石漠化面积","退耕还草面积","森林覆盖率(%)"],
                value:["CBS_CULLAND_AREA","CBS_BASIC_FARMLAND","CBS_IRRIGATE_AREA","CBS_FOREST_AREA",
                        "CBS_REFOREST_AREA","CBS_ORCHARD_AREA","CBS_PASTURE_AREA","CBS_WATER_AREA","CBS_DESERT_AREA",
                        "CBS_ROCKY_AREA","CBS_REGRASS_AREA","CBS_FOREST_RATE"]
            },
            {
                name:["GDP","第一产业","第二产业","第三产业","公财预算收入","公财预算支出","公财扶贫预算支出",
                    "教育部门资金投入","二级公路里程","高速公路里程","人均纯收入","人均纯收入增长率(%)","地方生产总值增长率(%)"],
                value:["CBS_GDP","CBS_FIRST_INDUSTRY","CBS_SECOND_INDUSTRY","CBS_THIRD_INDUSTRY",
                    "CBS_LOCAL_REVENUE","CBS_LOCAL_EXPEND","CBS_LOCAL_POVERTY_EXPEND","CBS_EDU_INVEST","CBS_TWOWAY_MILE",
                    "CBS_HIGHWAY_MILE","CBS_FARMERS_PERNET","CBS_PERNET_RATE","CBS_GDP_RATE"]
            },
            {
                name:["乡镇个数","行政村数","贫困村数","年末总人口","年末总户数","贫困人口","贫困户",
                    "贫困发生率(%)","脱贫村","脱贫户","脱贫人口","少数民族","无房户","危房户","危房改造户"],
                value:["CPS_TOWNSNUM","CPS_VILLNUM","CPS_POORVILL_NUM","CPS_YEAR_POP","CPS_YEAR_HHNUM","CPS_POOR_POP",
                    "CPS_POOR_HHNUM","CPS_POVERTY_RATE","CPS_OUTPOV_VILLNUM","CPS_OUTPOV_HHNUM","CPS_OUTPOV_POP","VC_MINORITY_NUM",
                    "CPS_NOROOM_HHNUM","CPS_DANGROOM_HHNUM","CPS_RECONSTRU_HHNUM"]
            },
            {
                name:["参加新农合人数","参加居民养老人数","享受农村低保人数","劳动力","参加培训人数","省内务工人数",
                    "省外务工人数","参培务工人数","参合贫困户","需异地搬迁户","需异地搬迁人数","未安全饮用水人数"],
                value:["CPS_MEDICAL_POP","CPS_OLDINSURE_POP","CPS_LOWGARAN_POP","CPS_LABOR_NUM","CPS_LTRAINED_NUM",
                    "CPS_IN_LABOR","CPS_OUT_LABOR","CPS_LTRAINED_LABOR","CPS_JOINORG_HHNUM","CPS_MOVE_HHNUM","CPS_MOVE_POP",
                    "CPS_NOWATER_POP"]
            },
            {
                name:["高等公路里程","实现安全饮水人数","通电行政村","农民合作组织数","有农合组织村","开展旅游村",
                    "有卫生院乡镇","通广播电视行政村","通宽带行政村"],
                value:["CFI_HIGHERROAD_MILE","CFI_SAFEWATER_POP","CFI_AC_VILNUM","CFI_FARMER_ORGNUM",
                    "CFI_ORG_VILNUM","CFI_TOURISM_VILNUM","CFI_HOSPL_TOWNSNUM","CFI_TELE_VILNUM","CFI_BAND_VILNUM"]
            },
            {
                name:["雨露计划培训人数","雨露计划投入资金","劳动力转移培训人数","适用技能培训人数","村致富培训人数","小额信贷覆盖贫困村",
                    "小额信贷贷款户","小额信贷发放总额","易地搬迁规划户","易地搬迁规划人数","易地搬迁完成户","易地搬迁完成人数","易地搬迁投入资金"],
                value:["CAS_RAIN_POP","CAS_RAIN_INVEST","CAS_TRANS_TRAINNUM","CAS_SKILL_TRAINNUM",
                    "CAS_LEADER_TRAINNUM","CAS_MICROC_VILNUM","CAS_MICROC_HHNUM","CAS_MICROC_AMOUNT","CAS_RESETTLE_HHNUM","CAS_RESETTLE_POP"
                    ,"CAS_RESETTLE_COMHH","CAS_RESETTLE_COMPOP","CAS_RESETTLE_FUNDS"]
            },
            {
                name:["驻村工作队","驻村干部","脱贫村","脱贫户","脱贫人口","到县扶贫资金","中央财政投入",
                    "财政贴息资金","以工代赈资金","少数民族发展资金","省级财政扶贫资金","市县财政扶贫资金","行业扶贫资金",
                    "社会帮扶资金","帮扶计划个数","帮扶计划总资金"],
                value:["CHS_TEAM_NUM","CHS_LEADER_NUM","CHS_OUTPOVER_VILNUM","CHS_OUTPOVER_HHNUM",
                    "CHS_OUTPOVER_POP","CHS_TOTAL_AMOUNT","CHS_CENTRAL_INVEST","CHS_INTEREST_FUNDS","CHS_WORK_FUNDS","CHS_MINORITY_FUNDS"
                    ,"CHS_PROV_FUNDS","CHS_CITY_FUNDS","CHS_PROFESSION_FUNDS","CHS_SOCIAL_FUNDS","CHS_PLAN_NUM","CHS_PLAN_FUNDS"]
            }
        ]
    },
    town:{
        title:["基 本 信 息","基 本 统 计","公 共 服 务","生 产 生 活"],
        tabs:[
            {
                name:["乡镇名称","乡镇ID","经度","纬度","海平面"],
                value:["TOWB_NAME","TOWB_ID","TOWB_LATITUDE","TOWB_LONGITUDE","TOWB_MEAN"]
            },
            {
                name:["行政村数","贫困村数","参加新农合人数","总人口数","年末总户数","参加居民养老人数","贫困人口数",
                    "贫困户数","贫困发生率(%)","少数民族人数","省内务工人数","省外务工人数","享受农村低保人数",
                    "劳动力人数","参加培训人数","参培外出务工人数","参合贫困户数","需异地搬迁户","需异地搬迁人数","无房户","未安全饮水人数",
                    "危房改造户"],
                value:["TBS_VILLAGE_NUM","TBS_POORVILL_NUM","TBS_MEDICAL_POP","TBS_TOTAL_POP","TBS_YEAR_HOUSEHOLDS",
                    "TBS_ENDOW_POP","TBS_TOTAL_POORERS","TBS_TOTAL_POORHH","TBS_RATE_POOR","TBS_MINORITY_NUM","TBS_IN_LABOR",
                    "TBS_OUTSIDEPROVINCE_POP","TBS_GUARANTEE_POP","TBS_LABOR_NUM","TBS_LTRAINED_NUM","TBS_LTRAINED_OUTER","TBS_JOINORG_HHNUM","TBS_MOVE_HHNUM","TBS_MOVE_POP",
                    "TBS_NOHOME_HHNUM","TBS_NOWATER_POP","TBS_RECONSTRU_HHNUM"]
            },
            {
                name:["图书室","党员活动室","健身器材","文化/体育广场","公共卫生厕所","卫生室个数","垃圾堆放点","镇办公电话"],
                value:["TPS_LIBRARY_NUM","TPS_PARTY_ROOM","TPS_FITNESSEQUIPMENT","TPS_CULTURESPORTSQUARE_NUM","TPS_PUBLICTOILET_NUM",
                    "TPS_CLINIC_NUM","TPS_HOUSEWASTE_NUM","TPS_CONTRACT_PHONE"]
            },
            {
                name:["硬化路里程","通沥青公路自然村","驻村工作队","农家乐自然村","通广播电视户","有农业大棚户","有宽带网络户",
                    "有畜牧大棚户","有固定/移动电话户","经营农家乐户","有卫生厕所户","危房农户数","有水冲式厕所户","有煤炭清洁能源户","无房户","有农用机动车户",
                    "饮用入户管道水户"],
                value:["TPL_HARDEN_MILE","TPL_PASSENGERTRAINNVILL_NUM","TPL_TEAM_NUM","TPL_AGRICOLANATURALVILLAGE_NUM",
                    "TPL_RADIOTELEVISION_FAMILY","TPL_FARMINGGREENHOUSE_FAMILY","TPL_BROADBAND_FAMILY","TPL_STOCKFARMINGGREENH_FAMILY",
                    "TPL_PHONE_FAMILY","TPL_AG_HHNUM","TPL_TOILET_HHNUM","TPL_DANBUILDINGMAIN_FAMILY","TPL_WATERTOILET_HHNUM","TPL_ENERGY_HHNUM",
                    "TPL_NOHOUSE_HHNUM","TPL_FVEHICLE_HHNUM","TPL_TAPWATER_HHNUM"]
            }
        ]
    },
    village:{
        title:["基 本 信 息","基 本 统 计","人 口 信 息","公 共 服 务"],
        tabs:[
            {
                name:["村名","村ID","经度","纬度","平均海拔"],
                value:["VBI_NAME","VBI__ID","VBI_LATITUDE","VBI_LONGITUDE","VBI_ALTITUDE"]
            },
            {
                name:["采集时间","村负责人","联系方式","贫困类别","自然村数","耕地面积","有效灌溉面积",
                    "林地面积","退耕还林面积","水域面积","农民年均纯收入","集体经济收入"],
                value:["VD_YEAR","VD_HEAD","VD_CONTACT","VD_PROPER","VD_GROUP_NUM","VD_EARTH","VD_IRRI","VD_FOREST",
                    "VD_RESORE_EARTH","VD_WATER_AREA","VD_AVENET_INCOME","VD_INCOME"]
            },
            {
                name:["采集时间","总户数","总人口数","贫困户数","贫困人口数","五保人数","低保人数","少数民族","妇女人数",
                    "残疾人数","劳动力人数","参加培训人数","异地搬迁扶贫户","未实现饮水安全户","危房改造户","在校大学生数","在校高中数"],
                value:["VC_YEAR","VC_HH_NUM","VC_TOTAL_PEOPLE","VC_POOR_NUM","VC_POOR_PEOPLE","VC_FIVE_PEOPLE","VC_LOWINC_PEOPLE",
                    "VC_MINORITY_NUM","VC_WOMEN_NUM","VC_DISABLED_NUM","VC_LABOR_NUM","VC_LTRAINED_NUM","VC_MOVE_HHNUM","VC_NOWATER_HHNUM",
                    "VC_RECONSTRU_HHNUM","VC_COLLEGE_STUDNUMBER","VC_SENIOR_STUDNUMBER"]
            },
            {
                name:["卫生室","公共厕所","执法医生","垃圾堆放点","文化室","广播电视户数","通宽带户数",
                    "通宽带小学个数","手机上网户数"],
                value:["Clinic_num","Toilet_num","Doctor_num","Garbage_num","Library_num","TV_Hnum",
                    "Wlan_Hnum","Wlan_Schoolnum","Wlan_PhoneHnum"]
            }
        ]
    }
};
var xs_pkdc_colorArr  = ["#96FF20","#35FFDF","#1FA7FF","#0A54FF","#1917FF","#6625FF",
    "#CA34FF","#FF3A92","#FF2A39","#FF7023","#FFC52C","#FFFD45","#FFA0A0","#AEB1FF"];
var xs_pkdc_itemFundGridField = [["serialNo","序号"],["PROJECID","项目编号"],["PROJECTNAME","项目名称"],
    ["FONDYEAR","年度"],["FOUNDNUM","资金号"],["FINAFOUND","到帐资金"],["ENDMONTH","到账月份"],
    ["FOUNDDETAIL","资金细节"],["AUTISTATE","备案状态"],["AFTERID","备案编号"],["COUNTY","帮扶地区"],
    ["CREATTIME","立项时间"],["CREATUSERID","立项人或单位"],["HELPHOUSE","帮扶户数"],["HELPPEOPLE","帮扶人数"],
    ["REACHCOUNTYFOUNDS","到县资金"],["REPLYID","接受编号"],["SPECNAME","投入项目"],["PROJECTHEAD","负责人"]];
XS.Main.Pkjc.DetailPieOpt= {
    title:{
        left:'center',
        textStyle:{
            fontWeight:'normal'
        }
    },
    legend: {
        top:30,
        itemGap:0,
        itemHeight:10,
        data: []
    },
    tooltip: {
        show: true,
        trigger: 'item',
        formatter: '{b}: {c}'
    },
    series : [
        {
            name: '详情',
            type: 'pie',
            radius: '55%',
            center: ['50%', '70%'],
            label: {
                normal: {
                    show: false
                }
            },
            data:[]
        }
    ]
};

XS.Main.Pkjc.scatterOption = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#cdd0d5'
    }]),
    title: {
        text: ''
    },
    legend: {
        right: 0,
        itemGap:0,
        height:250,
        orient:'vertical',
        data: []
    },
    grid:{
        bottom: 30,
        left:30,
        right:160
    },
    xAxis: {
        splitLine: {
            lineStyle: {
                type: 'dotted'
            }
        }
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                type: 'dotted'
            }
        }
    },
    series: []
};
var xs_pkdc_analyMax = 0;
var xs_pkdc_btnCliDatagridObj = null;
var xs_pkdc_addrName = "";
//详情点击函数
XS.Main.Pkjc.clickDetail = function(){
    var jsonObj = null;
    var data = null;
    if(xs_currentZoneLevel == XS.Main.ZoneLevel.city)
    {
        xs_pkdc_addrName = "毕节市";
        var content = XS.Main.Pkjc.tabsContent(XS.Main.Pkjc.detailKV.city.title,"xs_pkdc_detailTabs","top",false);
        XS.CommonUtil.openDialog("xs_pkdc_detailDialog", xs_pkdc_addrName + "详情", "icon-save", content, false, false, false, 900,"auto",null,80);
        $("#xs_pkdc_detailTabs").tabs({tabWidth:121,tabHeight:35});
        XS.Main.Pkjc.detailWindowTabs(0);

        data = {cbsId:xs_pkdc_currentStateCode};
        XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, "QueryCityBasicStatByFId", data, function(json) {
            $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
            XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.city.tabs[0].name, XS.Main.Pkjc.detailKV.city.tabs[0].value,5,40);
            //土地信息的pie显示
            XS.Main.Pkjc.tabsContentPie("国有土地分布图",[0,1,2,3,4,5,6,7,8,9,10],"xs_pkdc_tabsContentPie",[],"");
        });
        $("#xs_pkdc_detailTabs").tabs({
            onSelect:function(title,index){
                var action = "";
                switch(index){
                    case 0 ://土地信息
                        action = "QueryCityBasicStatByFId";
                        break;
                    case 1 ://经济收入
                        action = "QueryCityBasicStatByFId";
                        break;
                    case 2 ://人口统计
                        action = "QueryCityPopStatByFid";
                        break;
                    case 3 ://人口统计2
                        action = "QueryCountyPeopleCount";
                        break;
                    case 4 ://重点工作
                        action = "QueryCityFocusInfoByFId";
                        break;
                    case 5 ://专项扶
                        action = "QueryCityAllevStatByFId";
                        break;
                    case 6 ://扶贫信息
                        action = "QueryCityHelpStatByFId";
                        break;
                }
                XS.Main.Pkjc.detailWindowTabs(index);
                data = {cbsId:xs_pkdc_currentStateCode,pd_id:xs_pkdc_currentStateCode,casDate:xs_pkdc_currentStateCode,pid:xs_pkdc_currentStateCode};
                $("#xs_pkdc_pkBaseData_loading").css({"visibility":"visible"});
                XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, action, data, function(json) {
                    $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
                    XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.city.tabs[index].name, XS.Main.Pkjc.detailKV.city.tabs [index].value,5,40);
                    switch(index) {
                        case 0 ://土地信息
                            //土地信息的pie显示
                            XS.Main.Pkjc.tabsContentPie("国有土地分布图",[0,1,2,3,4,5,6,7,8,9,10],"xs_pkdc_tabsContentPie",[],"");
                            break;
                        case 1 ://经济收入
                            //经济收入的三大产业pie显示
                            XS.Main.Pkjc.tabsContentPie("国民生产总值分布情况",[1,2,3],"xs_pkdc_tabsContentPie",[],"");
                            break;
                        case 2 ://村、户、人口的贫困Pie显示
                            $("#xs_pkdc_tabsContentBtn").css("display","block");
                            $("#xs_pkdc_tabsContentBtn1").linkbutton({text:"村及人口贫困分布"});
                            $("#xs_pkdc_tabsContentBtn2").linkbutton({text:"户贫困分布"});

                            XS.Main.Pkjc.tabsContentPie("村贫困分布情况",[2,8],"xs_pkdc_tabsContPieDiv1",[1,2],"非贫困村");
                            XS.Main.Pkjc.tabsContentPie("人口贫困分布情况",[5,10],"xs_pkdc_tabsContPieDiv2",[3,5],"非贫困人口");
                            $("#xs_pkdc_tabsContentBtn1").click(function(){
                                XS.Main.Pkjc.tabsContentPie("村贫困分布情况",[2,8],"xs_pkdc_tabsContPieDiv1",[1,2],"非贫困村");
                                XS.Main.Pkjc.tabsContentPie("人口贫困分布情况",[5,10],"xs_pkdc_tabsContPieDiv2",[3,5],"非贫困人口");
                            });
                            $("#xs_pkdc_tabsContentBtn2").click(function(){
                                XS.Main.Pkjc.tabsContentPie("户贫困分布情况",[6,9],"xs_pkdc_tabsContPieDiv2",[4,6],"非贫困户");
                                XS.Main.Pkjc.tabsContentPie("危房户分布情况",[12,13,14],"xs_pkdc_tabsContPieDiv2",[],"");
                            });
                            break;
                        case 3 ://人口统计2
                            $("#xs_pkdc_tabsContentBtn").css("display","block");
                            $("#xs_pkdc_tabsContentBtn1").linkbutton({text:"参培及参合"});
                            $("#xs_pkdc_tabsContentBtn2").linkbutton({text:"务工及资助"});

                            XS.Main.Pkjc.tabsContentPie("贫困人口参加培训情况",[4,7],"xs_pkdc_tabsContPieDiv1",[],"");
                            XS.Main.Pkjc.tabsContentPie("贫困人口参加新农合情况",[0,8],"xs_pkdc_tabsContPieDiv2",[],"");
                            $("#xs_pkdc_tabsContentBtn1").click(function(){
                                XS.Main.Pkjc.tabsContentPie("贫困人口参加培训情况",[4,7],"xs_pkdc_tabsContPieDiv1",[],"");
                                XS.Main.Pkjc.tabsContentPie("贫困人口参加新农合情况",[0,8],"xs_pkdc_tabsContPieDiv2",[],"");
                            });
                            $("#xs_pkdc_tabsContentBtn2").click(function(){
                                XS.Main.Pkjc.tabsContentPie("贫困人口务工情况",[5,6],"xs_pkdc_tabsContPieDiv1",[],"");
                                XS.Main.Pkjc.tabsContentPie("享受资助情况",[1,2],"xs_pkdc_tabsContPieDiv2",[],"");
                            });
                            break;
                        case 4 ://重点工作
                            XS.Main.Pkjc.dynScatterSeries("扶贫措施",[2,4,5,7,8],"xs_pkdc_tabsContentPie",40);
                            break;
                        case 5 ://专项扶
                            XS.Main.Pkjc.tabsContentPie("各项培训情况",[0,2,3,4],"xs_pkdc_tabsContentPie",[],"");
                            break;
                        case 6 ://扶贫信息
                            XS.Main.Pkjc.tabsContentPie("各项扶贫资金投入情况",[6,7,8,9,10,11,12,13],"xs_pkdc_tabsContentPie",[],"");
                            break;
                    }
                });
            }
        });
    }else if(xs_currentZoneLevel == XS.Main.ZoneLevel.county)
    {
        var content = XS.Main.Pkjc.tabsContent(XS.Main.Pkjc.detailKV.county.title,"xs_pkdc_detailTabs","top",false);
        XS.CommonUtil.openDialog("xs_pkdc_detailDialog", "详情", "icon-save", content, false, false, false, 900,"auto",null,80);
        $("#xs_pkdc_detailTabs").tabs({tabWidth:106,tabHeight:35});
        XS.Main.Pkjc.detailWindowTabs(0);

        var json = XS.Main.CacheZoneInfos.county;
        for(var i=0;i<json.length;i++) {
            if (json[i].CBI_ID == xs_pkdc_currentStateCode) {
                xs_pkdc_addrName = json[i].CBI_NAME;
                $("#xs_pkdc_detailDialog").dialog("setTitle",xs_pkdc_addrName + "-详情");
                jsonObj = [
                    {"name": "县区名称:", "value": json[i].CBI_NAME},
                    {"name": "县ID:", "value": json[i].CBI_ID},
                    {"name": "乡镇数:", "value": json[i].CBI_TOWNS_NUM},
                    {"name": "行政村数:", "value": json[i].CBI_VILLAGE_NUM},
                    {"name": "面积:", "value": json[i].CBI_AREA},
                    {
                        "name": "特色产业:",
                        "value": XS.StrUtil.isEmpty(json[i].CBI_MAIN_INDUSTRY) ? "" : json[i].CBI_MAIN_INDUSTRY
                    }
                ];
                $("#xs_pkdc_tabsContent").empty().append(XS.Main.Poor.createTable(jsonObj, 2, 50, "color:#00bbee", ""));
                $("#xs_pkdc_tabsContentPie").css({display:'none'});
                $(".datagrid-wrap").css("width", "auto");
                break;
            }
        }
        $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
        $("#xs_pkdc_detailTabs").tabs({
            onSelect:function(title,index){
                var action = "";
                XS.Main.Pkjc.detailWindowTabs(index);
                switch(index){
                    case 0 ://基本信息
                        $("#xs_pkdc_tabsContent").empty().append(XS.Main.Poor.createTable(jsonObj, 2, 50,"color:#00bbee",""));
                        $("#xs_pkdc_tabsContentPie").css({display:'none'});
                        $(".datagrid-wrap").css("width","auto");
                        break;
                    case 1 ://土地信息
                        action = "QueryCountyBasicStatByFId";
                        break;
                    case 2 ://经济收入
                        action = "QueryCountyBasicStatByFId";
                        break;
                    case 3 ://人口统计
                        action = "QueryCountyPopStatByFid";
                        break;
                    case 4 ://人口统计2
                        action = "QueryCountyPeopleCount";
                        break;
                    case 5 ://重点工作
                        action = "QueryCountyFocusInfoByFId";
                        break;
                    case 6 ://专项扶贫
                        action = "QueryCountyAllevStatByFId";
                        break;
                    case 7 ://扶贫信息
                        action = "QueryCountyHelpStatByFId";
                        break;
                }
                if(index==0){
                    return;
                }
                data = {cbsId:xs_pkdc_currentStateCode, pd_id:xs_pkdc_currentStateCode, casDate:xs_pkdc_currentStateCode,pid:xs_pkdc_currentStateCode};
                $("#xs_pkdc_pkBaseData_loading").css({"visibility":"visible"});
                XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, action, data, function(json) {
                    $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
                    XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.county.tabs[index].name, XS.Main.Pkjc.detailKV.county.tabs[index].value,5,40);
                    switch(index) {
                        case 1 ://土地信息
                            //土地信息的pie显示
                            XS.Main.Pkjc.tabsContentPie("国有土地分布图",[0,1,2,3,4,5,6,7,8,9,10],"xs_pkdc_tabsContentPie",[],"");
                            break;
                        case 2 ://经济收入
                            //经济收入的三大产业pie显示
                            XS.Main.Pkjc.tabsContentPie("国民生产总值分布情况",[1,2,3],"xs_pkdc_tabsContentPie",[],"");
                            break;
                        case 3 ://村、户、人口的贫困Pie显示
                            $("#xs_pkdc_tabsContentBtn").css("display","block");
                            $("#xs_pkdc_tabsContentBtn1").linkbutton({text:"村及人口贫困分布"});
                            $("#xs_pkdc_tabsContentBtn2").linkbutton({text:"户贫困分布"});

                            XS.Main.Pkjc.tabsContentPie("村贫困分布情况",[2,8],"xs_pkdc_tabsContPieDiv1",[1,2],"非贫困村");
                            XS.Main.Pkjc.tabsContentPie("人口贫困分布情况",[5,10],"xs_pkdc_tabsContPieDiv2",[3,5],"非贫困人口");
                            $("#xs_pkdc_tabsContentBtn1").click(function(){
                                XS.Main.Pkjc.tabsContentPie("村贫困分布情况",[2,8],"xs_pkdc_tabsContPieDiv1",[1,2],"非贫困村");
                                XS.Main.Pkjc.tabsContentPie("人口贫困分布情况",[5,10],"xs_pkdc_tabsContPieDiv2",[3,5],"非贫困人口");
                            });
                            $("#xs_pkdc_tabsContentBtn2").click(function(){
                                XS.Main.Pkjc.tabsContentPie("户贫困分布情况",[6,9],"xs_pkdc_tabsContPieDiv1",[4,6],"非贫困户");
                                XS.Main.Pkjc.tabsContentPie("危房户分布情况",[12,13,14],"xs_pkdc_tabsContPieDiv2",[],"");
                            });
                            break;
                        case 4 ://人口统计2
                            $("#xs_pkdc_tabsContentBtn").css("display","block");
                            $("#xs_pkdc_tabsContentBtn1").linkbutton({text:"参培及参合"});
                            $("#xs_pkdc_tabsContentBtn2").linkbutton({text:"务工及资助"});

                            XS.Main.Pkjc.tabsContentPie("贫困人口参加培训情况",[4,7],"xs_pkdc_tabsContPieDiv1",[],"");
                            XS.Main.Pkjc.tabsContentPie("贫困人口参加新农合情况",[0,8],"xs_pkdc_tabsContPieDiv2",[],"");
                            $("#xs_pkdc_tabsContentBtn1").click(function(){
                                XS.Main.Pkjc.tabsContentPie("贫困人口参加培训情况",[4,7],"xs_pkdc_tabsContPieDiv1",[],"");
                                XS.Main.Pkjc.tabsContentPie("贫困人口参加新农合情况",[0,8],"xs_pkdc_tabsContPieDiv2",[],"");
                            });
                            $("#xs_pkdc_tabsContentBtn2").click(function(){
                                XS.Main.Pkjc.tabsContentPie("贫困人口务工情况",[5,6],"xs_pkdc_tabsContPieDiv1",[],"");
                                XS.Main.Pkjc.tabsContentPie("享受资助情况",[1,2],"xs_pkdc_tabsContPieDiv2",[],"");
                            });
                            break;
                        case 5 ://重点工作
                            XS.Main.Pkjc.dynScatterSeries("扶贫措施",[2,4,5,7,8],"xs_pkdc_tabsContentPie",5);
                            break;
                        case 6 ://专项扶
                            XS.Main.Pkjc.tabsContentPie("各项培训情况",[0,2,3,4],"xs_pkdc_tabsContentPie",[],"");
                            break;
                        case 7 ://扶贫信息
                            XS.Main.Pkjc.tabsContentPie("各项扶贫资金投入情况",[6,7,8,9,10,11,12,13],"xs_pkdc_tabsContentPie",[],"");
                            break;
                    }
                });
            }
        });
    }else if(xs_currentZoneLevel == XS.Main.ZoneLevel.town)
    {
        var content = XS.Main.Pkjc.tabsContent(XS.Main.Pkjc.detailKV.town.title,"xs_pkdc_detailTabs","top",false);
        XS.CommonUtil.openDialog("xs_pkdc_detailDialog", "详情", "icon-save", content, false, false, false, 900,"auto",null,80);
        $("#xs_pkdc_detailTabs").tabs({tabWidth:215,tabHeight:35});
        XS.Main.Pkjc.detailWindowTabs(0);

        data = {pd_id:xs_pkdc_currentStateCode};
        XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, "QueryTownsBaseInfoById", data, function(json) {
            $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
            XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.town.tabs[0].name, XS.Main.Pkjc.detailKV.town.tabs[0].value,2,50);
            xs_pkdc_addrName = xs_pkdc_btnCliDatagridObj[0].value;
            $("#xs_pkdc_detailDialog").dialog("setTitle",xs_pkdc_addrName + "-详情");
        });
        $("#xs_pkdc_detailTabs").tabs({
            onSelect: function (title, index) {
                var action = "";
                switch (index) {
                    case 0 ://基本信息
                        action = "QueryTownsBaseInfoById";
                        break;
                    case 1 ://基本统计
                        action = "QueryTownsBasicStatById";
                        break;
                    case 2 ://公共服务
                        action = "QueryTownsPubStatByTid";
                        break;
                    case 3 ://生产生活
                        action = "QueryTownsProLivByTid";
                        break;
                }
                XS.Main.Pkjc.detailWindowTabs(index);
                data = {pd_id:xs_pkdc_currentStateCode, tid:xs_pkdc_currentStateCode};
                $("#xs_pkdc_pkBaseData_loading").css({"visibility":"visible"});
                XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, action, data, function(json) {
                    $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
                    switch (index) {
                        case 0 :
                            XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.town.tabs[index].name, XS.Main.Pkjc.detailKV.town.tabs[index].value,2,50);
                            break;
                        case 1 ://基本统计
                            XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.town.tabs[index].name, XS.Main.Pkjc.detailKV.town.tabs[index].value,5,30);
                            $("#xs_pkdc_tabsContentBtn").css("display","block");
                            $("#xs_pkdc_tabsContentBtn1").linkbutton({text:"村、户及人口情况"});
                            $("#xs_pkdc_tabsContentBtn2").linkbutton({text:"资助、务工及少数民族"});

                            XS.Main.Pkjc.tabsContentPie("贫困村分布情况",[1],"xs_pkdc_tabsContPieDiv1",[0,1],"非贫困村");
                            XS.Main.Pkjc.tabsContentPie("贫困户分布情况",[7],"xs_pkdc_tabsContPieDiv2",[4,7],"非贫困户");
                            XS.Main.Pkjc.tabsContentPie("贫困人口分布情况",[6],"xs_pkdc_tabsContPieDiv3",[3,6],"非贫困村");
                            $("#xs_pkdc_tabsContentBtn1").click(function(){
                                XS.Main.Pkjc.tabsContentPie("贫困村分布情况",[1],"xs_pkdc_tabsContPieDiv1",[0,1],"非贫困村");
                                XS.Main.Pkjc.tabsContentPie("贫困户分布情况",[7],"xs_pkdc_tabsContPieDiv2",[4,7],"非贫困户");
                                XS.Main.Pkjc.tabsContentPie("贫困人口分布情况",[6],"xs_pkdc_tabsContPieDiv3",[3,6],"非贫困村");
                            });
                            $("#xs_pkdc_tabsContentBtn2").click(function(){
                                XS.Main.Pkjc.tabsContentPie("资助情况",[5,12],"xs_pkdc_tabsContPieDiv1",[],"");
                                XS.Main.Pkjc.tabsContentPie("少数民族分布情况",[9],"xs_pkdc_tabsContPieDiv2",[3,9],"非少数民族");
                                XS.Main.Pkjc.tabsContentPie("务工情况",[10,11],"xs_pkdc_tabsContPieDiv3",[],"");
                            });
                            break;
                        case 2 ://公共服务
                            XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.town.tabs[index].name, XS.Main.Pkjc.detailKV.town.tabs[index].value,5,40);
                            XS.Main.Pkjc.tabsContentPie("公共设施分布情况",[0,1,2,3,4,5,6],"xs_pkdc_tabsContentPie",[],"");
                            break;
                        case 3 ://生产生活
                            XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.town.tabs[index].name, XS.Main.Pkjc.detailKV.town.tabs[index].value,5,30);
                            XS.Main.Pkjc.dynScatterSeries("扶贫措施",[4,5,6,7,8,9,10,11,12,13,14,15,16],"xs_pkdc_tabsContentPie",100);
                            break;
                    }
                });
            }
        });
    }else if(xs_currentZoneLevel == XS.Main.ZoneLevel.village)
    {
        var content = XS.Main.Pkjc.tabsContent(XS.Main.Pkjc.detailKV.village.title,"xs_pkdc_detailTabs","top",false);
        XS.CommonUtil.openDialog("xs_pkdc_detailDialog", "详情", "icon-save", content, false, false, false, 900,"auto",null,80);
        $("#xs_pkdc_detailTabs").tabs({tabWidth:215,tabHeight:35});
        XS.Main.Pkjc.detailWindowTabs(0);

        data = {pd_id:xs_pkdc_currentStateCode};
        XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, "QueryVillBaseById", data, function(json) {
            $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
            XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.village.tabs[0].name, XS.Main.Pkjc.detailKV.village.tabs[0].value,2,50);
            xs_pkdc_addrName = xs_pkdc_btnCliDatagridObj[0].value;
            $("#xs_pkdc_detailDialog").dialog("setTitle",xs_pkdc_addrName + "-详情");
        });
        $("#xs_pkdc_detailTabs").tabs({
            onSelect: function (title, index) {
                var action = "";
                switch (index) {
                    case 0 ://基本信息
                        action = "QueryVillBaseById";
                        break;
                    case 1://基本统计
                        action = "QueryVillDynamicById";
                        break;
                    case 2://人口信息
                        action = "QueryVillCountById";
                        break;
                    case 3://公共服务
                        action = "QueryPoorPublicVill";
                        break;
                }
                XS.Main.Pkjc.detailWindowTabs(index);
                data = {pd_id:xs_pkdc_currentStateCode,pid:xs_pkdc_currentStateCode};
                $("#xs_pkdc_pkBaseData_loading").css({"visibility":"visible"});
                XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, action, data, function(json) {
                    $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
                    switch (index) {
                        case 0 ://基本信息
                            XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.village.tabs[index].name, XS.Main.Pkjc.detailKV.village.tabs[index].value,2,50);
                            break;
                        case 1://基本统计
                            XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.village.tabs[index].name, XS.Main.Pkjc.detailKV.village.tabs[index].value,5,40);
                            XS.Main.Pkjc.tabsContentPie("国有土地分布图",[5,6,7,8,9],"xs_pkdc_tabsContentPie",[],"");
                            break;
                        case 2://人口信息
                            XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.village.tabs[index].name, XS.Main.Pkjc.detailKV.village.tabs[index].value,5,30);
                            $("#xs_pkdc_tabsContentBtn").css("display","block");
                            $("#xs_pkdc_tabsContentBtn1").linkbutton({text:"户、人口及资助情况"});
                            $("#xs_pkdc_tabsContentBtn2").linkbutton({text:"健康、劳动力及参培"});

                            XS.Main.Pkjc.tabsContentPie("贫困户分布情况",[3],"xs_pkdc_tabsContPieDiv1",[1,3],"非贫困户");
                            XS.Main.Pkjc.tabsContentPie("贫困人口分布情况",[4],"xs_pkdc_tabsContPieDiv2",[2,4],"非贫困人口");
                            XS.Main.Pkjc.tabsContentPie("资助情况",[5,6],"xs_pkdc_tabsContPieDiv3",[],"");
                            $("#xs_pkdc_tabsContentBtn1").click(function(){
                                XS.Main.Pkjc.tabsContentPie("贫困户分布情况",[3],"xs_pkdc_tabsContPieDiv1",[1,3],"非贫困户");
                                XS.Main.Pkjc.tabsContentPie("贫困人口分布情况",[4],"xs_pkdc_tabsContPieDiv2",[2,4],"非贫困人口");
                                XS.Main.Pkjc.tabsContentPie("资助情况",[5,6],"xs_pkdc_tabsContPieDiv3",[],"");
                            });
                            $("#xs_pkdc_tabsContentBtn2").click(function(){
                                XS.Main.Pkjc.tabsContentPie("健康状况",[9],"xs_pkdc_tabsContPieDiv1",[2,9],"非残疾人");
                                XS.Main.Pkjc.tabsContentPie("劳动力情况",[10],"xs_pkdc_tabsContPieDiv2",[2,10],"非贫困人口");
                                XS.Main.Pkjc.tabsContentPie("参培情况",[11],"xs_pkdc_tabsContPieDiv3",[2,11],"未参加培训人数");
                            });
                            break;
                        case 3://公共服务
                            XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.village.tabs[index].name, XS.Main.Pkjc.detailKV.village.tabs[index].value,5,40);
                            XS.Main.Pkjc.tabsContentPie("公共设施情况",[0,1,2,3,4],"xs_pkdc_tabsContentPie",[],"");
                            break;
                    }
                });
            }
        });
    }
}
// 数据分析点击函数
XS.Main.Pkjc.clickAnalysis = function(){
    var xs_pkdc_analyIndex = 0;
    if(xs_currentZoneLevel == XS.Main.ZoneLevel.city)
    {
        xs_pkdc_addrName = "毕节市";
        var tabTile = ["饮水分析","异地搬迁","培训分析","社会保障","危房情况","脱贫分析","致贫原因","文化程度"];
        var content = '<div style="padding: 2px;box-sizing: border-box;height: 100%;">' +
                XS.Main.Pkjc.tabsContent(tabTile,"xs_pkdc_AnalysTabs","left",true) +
            '</div>';
        $("#xs_pkdc_AnalysTabs").css({overflow:"hidden"});
        XS.CommonUtil.openDialog("xs_pkdc_detailDialog", xs_pkdc_addrName + "-贫困数据分析", "icon-save", content, false, true, false, "900","480",null,80);

        selectTab = $("#xs_pkdc_AnalysTabs").tabs("getTab",0);
        selectTab.empty().append('<div id="xs_pkdc_AnalysTabsChart" style="width:100%;height: 100%;box-sizing: border-box"></div>');

        var data = {pd_id:xs_pkdc_currentStateCode};
        XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, "QueryUnSafeWaterBycount", data, function(json) {
            $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
            if(json && json.length>0 && xs_pkdc_analyIndex == 0){
                var xAxis = ['','category',[],true];
                var series = [['未安全饮水人数','bar',0,[],null],['未安全饮水率','line',1,[],false]];
                XS.Main.Pkjc.ananlyValueOfJson(json,[xAxis[2],series[0][3],series[1][3]],['REGION_Name','UnwaterNum','UnwaterRate'],'',[]);
                XS.Main.Pkjc.ciAnalyOpt([5,'饮水分析'],['axis',['line',""]],[40,['未安全饮水人数','未安全饮水率']],[120,40,80,40],xAxis,
                    [['人数','value'],['(%)','value']],[],[],series,"xs_pkdc_AnalysTabsChart");
            }
        });
        $("#xs_pkdc_AnalysTabs").tabs({
            onSelect:function(title,index){
                xs_pkdc_analyIndex = index;
                var action = "";
                switch(index){
                    case 0 ://饮水分析
                        action = "QueryUnSafeWaterBycount";
                        break;
                    case 1 ://异地搬迁
                        action = "QueryMovePoorBycount";
                        break;
                    case 2 ://培训分析
                        action = "QueryTrainCountBycounty";
                        break;
                    case 3 ://社会保障
                        action = "QuerySocityProtectBycounty";
                        break;
                    case 4 ://危房情况
                        action = "QueryDangerHouseBycount";
                        break;
                    case 5 ://脱贫分析
                        action = "QueryOutPoorBycount";
                        break;
                    case 6 ://致贫原因
                        action = "QueryGroupbyReasonById";
                        break;
                    case 7 ://文化程度
                        action = "QueryGroupbyeduById";
                        break;
                }
                $("#xs_pkdc_AnalysTabsChart").remove();
                selectTab = $("#xs_pkdc_AnalysTabs").tabs("getTab",index);
                selectTab.empty().append('<div id="xs_pkdc_AnalysTabsChart" style="width:100%;height: 100%;box-sizing: border-box"></div>');
                data = {pd_id:xs_pkdc_currentStateCode,pid:xs_pkdc_currentStateCode};
                $("#xs_pkdc_pkBaseData_loading").css({"visibility":"visible"});
                XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, action, data, function(json) {
                    $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
                    if (json && json.length > 0 && xs_pkdc_analyIndex == index){
                        switch (index){
                            case 0 ://饮水分析
                                var xAxis = ['','category',[],true];
                                var series = [['未安全饮水人数','bar',0,[],null],['未安全饮水率','line',1,[],false]];
                                XS.Main.Pkjc.ananlyValueOfJson(json,[xAxis[2],series[0][3],series[1][3]],['REGION_Name','UnwaterNum','UnwaterRate'],'',[]);
                                XS.Main.Pkjc.ciAnalyOpt([5,'饮水分析'],['axis',['line']],[40,['未安全饮水人数','未安全饮水率']],[120,40,80,40],xAxis,
                                    [['人数','value'],['(%)','value']],[],[],series,"xs_pkdc_AnalysTabsChart");
                                break;
                            case 1 ://异地搬迁
                                $("#xs_pkdc_AnalysTabsChart").append('<div id="xs_pkdc_AnalysTabsChart1" style="width:100%;height: 500px;box-sizing: border-box"></div>');
                                $("#xs_pkdc_AnalysTabsChart").append('<div id="xs_pkdc_AnalysTabsChart2" style="width:100%;height: 400px;box-sizing: border-box"></div>');
                                var radar = ['60%',["50%","55%"],[[],[]]];
                                var radarSeries = [['异地搬迁户数 vs 异地搬迁人数','radar',[['异地搬迁户数',[]],['异地搬迁人数',[]]]]];

                                var xAxis = ['','category',[],true];
                                var lineSeries = [['异地搬迁率','line',0,[],false]];
                                XS.Main.Pkjc.ananlyValueOfJson(json,[radar[2][0],radarSeries[0][2][0][1],radarSeries[0][2][1][1],xAxis[2],lineSeries[0][3]],
                                    ['REGION_Name','MoveHnum','MovePnum','REGION_Name','MoveRate'],'MovePnum',radar[2]);
                                XS.Main.Pkjc.ciAnalyOpt([5,'异地搬迁'],['',[]],[40,["异地搬迁户数","异地搬迁人数"]],[],[],[],radar,[],radarSeries,"xs_pkdc_AnalysTabsChart1");
                                XS.Main.Pkjc.ciAnalyOpt([],['axis',['line']],[0,["异地搬迁率"]],[40,40,40,30],xAxis,[['(%)','value']],[],[],lineSeries,"xs_pkdc_AnalysTabsChart2");
                                break;
                            case 2 ://培训分析
                                $("#xs_pkdc_AnalysTabsChart").append('<div id="xs_pkdc_AnalysTabsChart1" style="width:100%;height: 500px;box-sizing: border-box"></div>');
                                $("#xs_pkdc_AnalysTabsChart").append('<div id="xs_pkdc_AnalysTabsChart2" style="width:100%;height: 400px;box-sizing: border-box"></div>');
                                var legend = [40,['省内务工人数','省外务工人数','劳动力人数','参加培训人数']];
                                var yAxis = [['','category',[]]];
                                var series = [['省内务工人数','bar',0,[],'总量',"insideRight"],['省外务工人数','bar',0,[],'总量',"insideRight"],
                                    ['劳动力人数','bar',0,[],'总量',"insideRight"],['参加培训人数','bar',0,[],'总量',"insideRight"]];
                                var lineXAxis = ['','category',[],true];
                                var lineSeries = [['培训率','line',0,[],false],['省外务工率','line',0,[],false],['省内务工率','line',0,[],false]];
                                XS.Main.Pkjc.ananlyValueOfJson(json,[yAxis[0][2],series[0][3],series[1][3],series[2][3],series[3][3],lineXAxis[2],lineSeries[0][3],lineSeries[1][3],lineSeries[2][3]],
                                    ['REGION_Name','InWorkNum','OutWorkNum','LaborNum','TrainNum','REGION_Name','TrainRate','OutWorkRate','InWorkRate'],'',[]);
                                XS.Main.Pkjc.ciAnalyOpt([5,'培训分析'],['axis',['shadow']],legend,[90,40,80,20],['','value'],yAxis,[],[],series,"xs_pkdc_AnalysTabsChart1");
                                XS.Main.Pkjc.ciAnalyOpt([],['axis',['line']],[30,['培训率',"省外务工率","省内务工率"]],[60,40,40,30],lineXAxis,[['(%)','value']],[],[],lineSeries,"xs_pkdc_AnalysTabsChart2");
                                break;
                            case 3 ://社会保障
                                var legend = [40,['合作医疗','养老保险','低保','合作医疗率','养老保险率','低保率']];
                                var xAxis = ['','category',[],true];
                                var series = [];
                                for(var i=0;i<6;i++){
                                    if(i<3){series.push([legend[1][i],'bar',0,[],null]);}
                                    else{series.push([legend[1][i],'line',1,[],false]);}
                                }
                                XS.Main.Pkjc.ananlyValueOfJson(json,[xAxis[2],series[0][3],series[1][3],series[2][3],series[3][3],series[4][3],series[5][3]],
                                    ['REGION_Name','CoMedicalNum','EndowNum','LowNum','CoMedicalRate','EndowRate','LowRate'],'',[]);
                                XS.Main.Pkjc.ciAnalyOpt([5,'社会保障'],['axis',['line']],legend,[120,40,80,40],xAxis,[['人数','value'],['(%)','value']],[],[],series,"xs_pkdc_AnalysTabsChart");
                                break;
                            case 4 ://危房情况
                                var legend = [40,[]];
                                var series = [['危房户数','pie',[[],[]],[20, 90],['30%', '60%'],'radius'],['危房发生率','pie',[[],[]],[20, 90],['70%', '60%'],'area']];
                                XS.Main.Pkjc.ananlyValueOfJson(json,[legend[1],series[0][2][0],series[0][2][1],series[1][2][0],series[1][2][1]],
                                    ['REGION_Name','REGION_Name','DangerHnum','REGION_Name','DangerHRate'],'',[]);
                                XS.Main.Pkjc.ciAnalyOpt([5,'危房情况'],['',[]],legend,[120,40,80,40],[],[],[],[],series,"xs_pkdc_AnalysTabsChart");
                                break;
                            case 5 ://脱贫分析
                                var legend = [40,["脱贫率","脱贫人数"]];
                                var xAxis = ['','category',[],true];
                                var series = [['脱贫户数','pie',[[],[]],[0, 60],['80%', '45%'],false],['脱贫人数','bar',0,[],null],['脱贫率','line',1,[],false]];
                                XS.Main.Pkjc.ananlyValueOfJson(json,[legend[1],xAxis[2],series[0][2][0],series[0][2][1],series[1][3],series[2][3]],
                                    ['REGION_Name','REGION_Name','REGION_Name','OutPoorHNum','OutPoorPNum','OutPoorRate'],'',[]);
                                XS.Main.Pkjc.ciAnalyOpt([5,'脱贫分析'],['',[]],legend,[120,40,80,40],xAxis,[['人数','value'],['(%)','value']],[],[],series,"xs_pkdc_AnalysTabsChart");
                                break;
                            case 6 ://致贫原因
                                var radar = ['60%',["50%","55%"],[[],[]]];
                                var series = [['','radar',[['人数',[]]]]];
                                XS.Main.Pkjc.ananlyValueOfJson(json,[radar[2][0],series[0][2][0][1]],['REASON','NUM'],'NUM',radar[2]);
                                XS.Main.Pkjc.ciAnalyOpt([5,'致贫原因'],['',[]],[],[],[],[],radar,[],series,"xs_pkdc_AnalysTabsChart");
                                break;
                            case 7 ://文化程度
                                var xAxis = ['','category',[],true];
                                var series = [['文化程度','bar',0,[],true,true,'top']];
                                XS.Main.Pkjc.ananlyValueOfJson(json,[xAxis[2],series[0][3]],['EDU','NUM'],'',[]);
                                XS.Main.Pkjc.ciAnalyOpt([5,'文化程度'],['item',['']],[],[100,60,80,40],xAxis,[['人数','value']],[],[],series,"xs_pkdc_AnalysTabsChart");
                                break;
                        }
                    }
                });
            }
        });
    }else if(xs_currentZoneLevel == XS.Main.ZoneLevel.county)
    {
        var tabTile = ["文化程度", "致贫原因", "帮扶措施", "五通四有", "四有五覆盖"];
        var content = '<div style="padding: 2px;box-sizing: border-box;height: 100%;">' +
            XS.Main.Pkjc.tabsContent(tabTile, "xs_pkdc_AnalysTabs", "left", true) +
            '</div>'
        for(var i=0;i<XS.Main.CacheZoneInfos.county.length;i++){
            if(XS.Main.CacheZoneInfos.county[i].CBI_ID == xs_pkdc_currentStateCode){
                xs_pkdc_addrName = XS.Main.CacheZoneInfos.county[i].CBI_NAME;
                XS.CommonUtil.openDialog("xs_pkdc_detailDialog", xs_pkdc_addrName + "-贫困数据分析", "icon-save", content, false, true, false, "1100", "600", null, 40);
            }
        }

        var selectTab = $("#xs_pkdc_AnalysTabs").tabs("getTab", 0);
        selectTab.empty().append('<div id="xs_pkdc_AnalysTabsChart" style="width:100%;height: 100%;box-sizing: border-box;"></div>');
        //文化程度
        var data = {pid: xs_pkdc_currentStateCode};
        XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, "QueryGroupbyeduById", data, function (json) {
            $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
            if (json && json.length > 0 && xs_pkdc_analyIndex == 0) {
                var yAxis = [['','category',[]]];
                var series = [['','bar',0,[],true,true,'right']];//[[name,type,barGap,data,stack,showLabel,position]]
                XS.Main.Pkjc.ananlyValueOfJson(json,[yAxis[0][2],series[0][3]],['EDU','NUM'],'',[]);
                XS.Main.Pkjc.ciAnalyOpt([10,'文化程度'],['axis',['shadow']],[],[100,60,80,60],['人数','value'],yAxis,[],[],series,"xs_pkdc_AnalysTabsChart");
            }
        });
        $("#xs_pkdc_AnalysTabs").tabs({
            onSelect: function (title, index) {
                xs_pkdc_analyIndex = index;
                var action = "";
                switch(index){
                    case 0 ://文化程度
                        action = "QueryGroupbyeduById";
                        break;
                    case 1 ://致贫原因
                        action = "QueryGroupbyReasonById";
                        break;
                    case 2 ://帮扶措施
                        action = "QueryCountyPopStatByTid";
                        break;
                    case 3 ://五通四有
                        action = "QueryVillFiveFourByCountByAreaId";
                        break;
                    case 4 ://四有五覆盖
                        action = "QueryFourFiveByAreaId";
                        break;
                }
                $("#xs_pkdc_AnalysTabsChart").remove();
                selectTab = $("#xs_pkdc_AnalysTabs").tabs("getTab", index);
                selectTab.empty().append('<div id="xs_pkdc_AnalysTabsChart" style="width:100%;height: 100%;box-sizing: border-box"></div>');

                data = {cid:xs_pkdc_currentStateCode,pd_id:xs_pkdc_currentStateCode,pid:xs_pkdc_currentStateCode};
                $("#xs_pkdc_pkBaseData_loading").css({"visibility":"visible"});
                XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, action, data, function(json) {
                    $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
                    if (json && json.length > 0 && xs_pkdc_analyIndex == index) {
                        switch (index) {
                            case 0 ://文化程度
                                var yAxis = [['','category',[]]];
                                var series = [['文化程度','bar',0,[],true,true,'right']];
                                XS.Main.Pkjc.ananlyValueOfJson(json,[yAxis[0][2],series[0][3]],['EDU','NUM'],'',[]);
                                XS.Main.Pkjc.ciAnalyOpt([5,'文化程度'],['axis',['shadow']],[],[100,60,80,60],['人数','value'],yAxis,[],[],series,"xs_pkdc_AnalysTabsChart");
                                break;
                            case 1 ://致贫原因
                                var radar = ['60%',["50%","55%"],[[],[]]];
                                var series = [['','radar',[['人数',[]]]]];
                                XS.Main.Pkjc.ananlyValueOfJson(json,[radar[2][0],series[0][2][0][1]],['REASON','NUM'],'NUM',radar[2]);
                                XS.Main.Pkjc.ciAnalyOpt([5,'致贫原因(人)'],['',[]],[],[],[],[],radar,[],series,"xs_pkdc_AnalysTabsChart",['rgba(0,0,255,1)']);
                                break;
                            case 2 ://帮扶措施
                                var legend = [40,["低保人数","参加培训人数","异地扶贫搬迁户","异地扶贫搬迁人数","危房改造户"]];
                                var xAxis = ['','category',legend[1],true];
                                var series = [['帮扶措施','bar',0,[],null],['帮扶措施','pie',[legend[1],[]],[0, 60],['80%', '45%'],false]];
                                XS.Main.Pkjc.ananlyValueOfJson(json,[series[0][3],series[0][3],series[0][3],series[0][3],series[0][3],
                                        series[1][2][1],series[1][2][1],series[1][2][1],series[1][2][1],series[1][2][1],series[1][2][1]],
                                    ['cps_lowgaran_pop','cps_outpov_pop','cps_move_hhnum','cps_move_pop','cps_reconstru_hhnum',
                                        'cps_lowgaran_pop','cps_outpov_pop','cps_move_hhnum','cps_move_pop','cps_reconstru_hhnum'],'',[]);
                                XS.Main.Pkjc.ciAnalyOpt([5,'帮扶措施'],['',[]],legend,[120,40,80,40],xAxis,[['人数','value']],[],[],series,"xs_pkdc_AnalysTabsChart");
                                break;
                            case 3 ://五通四有
                                var field = ["BeautifulNum","BusStateNum","CultureNum","EconomyNum","HRoadHardNum","HealthRoomNum","PowerNum","RoadHardNum","TelNum","WlanNum","ZRoadHardNum"];
                                var xAxis = ['','category',["美丽乡村","通客运","文化场所","村集体经济","通户公路","村卫生室","通生产用电","村沥青路","通电话","通宽带","通组公路"],false];
                                var legend = [40,[],[]];
                                XS.Main.Pkjc.ananlyValueOfJson(json,[legend[1]],['REGION_Name'],'',[]);
                                //[[name,type,yAxisIndex,[[],[]],smooth]]
                                var series = [];
                                for(var i=0;i<json.length;i++){
                                    legend[2].push('rect');
                                    series.push([legend[1][i],'line',0,[],false,true]);
                                    for(var j=0;j<field.length;j++){
                                        series[i][3].push(json[i][field[j]]);
                                    }
                                }
                                XS.Main.Pkjc.ciAnalyOpt([5,'五通四有'],['axis',['line']],legend,[150,40,60,40],xAxis,[['','value']],[],[],series,"xs_pkdc_AnalysTabsChart",[]);
                                break;
                            case 4 ://四有五覆盖
                                var field = ["WaterSafeNum","ElectricSafeNum","HouseSafeNum","EnroadHardNum","YardHardNum","CoMedicNum","InsureNum","WorkSkillNum","EduHelpNum","IndustyNum"];
                                var xAxis = ['','category',["安全饮水","安全用电","安全住房","入户路硬化","院坝硬化","合作医保","养老保险","就业技能培训","教育资助","有增收产业"],false];
                                var legend = [40,[],[]];
                                XS.Main.Pkjc.ananlyValueOfJson(json,[legend[1]],['REGION_Name'],'',[]);
                                var series = [];
                                for(var i=0;i<json.length;i++){
                                    legend[2].push('rect');
                                    series.push([legend[1][i],'line',0,[],false,true]);
                                    for(var j=0;j<field.length;j++){
                                        series[i][3].push(json[i][field[j]]);
                                    }
                                }
                                XS.Main.Pkjc.ciAnalyOpt([5,'四有五覆盖'],['axis',['line']],legend,[150,40,80,40],xAxis,[['','value']],[],[],series,"xs_pkdc_AnalysTabsChart",[]);
                                break;
                        }
                    }
                });
            }
        });
    }else if(xs_currentZoneLevel == XS.Main.ZoneLevel.town)
    {
        var tabTile = ["文化程度", "致贫原因", "帮扶措施", "五通四有", "四有五覆盖"];
        var content = '<div style="padding: 2px;box-sizing: border-box;height: 100%;">' +
            XS.Main.Pkjc.tabsContent(tabTile, "xs_pkdc_AnalysTabs", "left", true) +
            '</div>';
        XS.CommonUtil.openDialog("xs_pkdc_detailDialog", "数据分析", "icon-save", content, false, true, false, "1100", "600", null, 40);
        data = {pd_id:xs_pkdc_currentStateCode};
        XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, "QueryTownsBaseInfoById", data, function(json) {
            xs_pkdc_addrName = json.TOWB_NAME;
            $("#xs_pkdc_detailDialog").dialog("setTitle",xs_pkdc_addrName + "-数据分析");
        });

        var selectTab = $("#xs_pkdc_AnalysTabs").tabs("getTab", 0);
        selectTab.empty().append('<div id="xs_pkdc_AnalysTabsChart" style="width:100%;height: 100%;box-sizing: border-box;"></div>');
        //文化程度
        var data = {pid:xs_pkdc_currentStateCode};
        XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, "QueryGroupbyeduById", data, function(json) {
            $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
            if (json && json.length > 0 && xs_pkdc_analyIndex == 0) {
                var legend = [40,[]];
                var color = ['rgba(218,235,117,0.8)','rgba(214,161,244,0.8)','rgba(197,168,115,0.8)','rgba(184,255,193,0.8)','rgba(255,246,144,0.8)',
                    'rgba(209,184,255,0.8)','rgba(255,224,200,0.8)'];
                var series = [['','pie',[[],[]],[0, '50%'],["50%","55%"],'area',['multiple',false,false,2,false]]];
                XS.Main.Pkjc.ananlyValueOfJson(json,[legend[1],series[0][2][0],series[0][2][1]],['EDU','EDU','NUM'],'NUM',[]);
                var polar = [["60%",["50%","55%"]],['value',false,false,false,false,false],['value',false,false,true,true,false,xs_pkdc_analyMax/1000]];
                XS.Main.Pkjc.ciAnalyOpt([5,'文化程度'],['',[]],legend,[],[],[],[],polar,series,"xs_pkdc_AnalysTabsChart",color);
            }
        });
        $("#xs_pkdc_AnalysTabs").tabs({
            onSelect: function (title, index) {
                xs_pkdc_analyIndex = index;
                var action = "";
                switch(index){
                    case 0 ://文化程度
                        action = "QueryGroupbyeduById";
                        break;
                    case 1 ://致贫原因
                        action = "QueryGroupbyReasonById";
                        break;
                    case 2 ://帮扶措施
                        action = "QueryCountyPopStatByTid";
                        break;
                    case 3 ://五通四有
                        action = "QueryVillFiveFourByCountByAreaId";
                        break;
                    case 4 ://四有五覆盖
                        action = "QueryFourFiveByAreaId";
                        break;
                }
                $("#xs_pkdc_AnalysTabsChart").remove();
                selectTab = $("#xs_pkdc_AnalysTabs").tabs("getTab", index);
                selectTab.empty().append('<div id="xs_pkdc_AnalysTabsChart" style="width:100%;height: 100%;box-sizing: border-box"></div>');

                data = {pd_id:xs_pkdc_currentStateCode,pid:xs_pkdc_currentStateCode,cid:xs_pkdc_currentStateCode};
                $("#xs_pkdc_pkBaseData_loading").css({"visibility":"visible"});
                XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, action, data, function(json) {
                    $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
                    if (json && json.length > 0 && xs_pkdc_analyIndex == index) {
                        switch (index) {
                            case 0 ://文化程度
                                var legend = [40,[]];
                                var color = ['rgba(218,235,117,0.8)','rgba(214,161,244,0.8)','rgba(197,168,115,0.8)','rgba(184,255,193,0.8)','rgba(255,246,144,0.8)',
                                    'rgba(209,184,255,0.8)','rgba(255,224,200,0.8)'];
                                var series = [['','pie',[[],[]],[0, '50%'],["50%","55%"],'area',['multiple',false,false,2,false]]];
                                XS.Main.Pkjc.ananlyValueOfJson(json,[legend[1],series[0][2][0],series[0][2][1]],['EDU','EDU','NUM'],'NUM',[]);
                                var polar = [["60%",["50%","55%"]],['value',false,false,false,false,false],['value',false,false,true,true,false,xs_pkdc_analyMax/1000]];
                                XS.Main.Pkjc.ciAnalyOpt([5,'文化程度'],['',[]],legend,[],[],[],[],polar,series,"xs_pkdc_AnalysTabsChart",color);
                                break;
                            case 1 ://致贫原因
                                var radar = ['60%',["50%","55%"],[[],[]]];
                                var series = [['','radar',[['致贫原因',[]]]]];
                                XS.Main.Pkjc.ananlyValueOfJson(json,[radar[2][0],series[0][2][0][1]],['REASON','NUM'],'NUM',radar[2]);
                                XS.Main.Pkjc.ciAnalyOpt([5,'致贫原因'],['item',['']],[],[],[],[],radar,[],series,"xs_pkdc_AnalysTabsChart",['rgba(0,0,255,1)']);
                                break;
                            case 2 ://帮扶措施
                                /*var legend = [40,["低保人数","参加培训人数","异地扶贫搬迁户","异地扶贫搬迁人数","危房改造户"]];
                                var xAxis = ['','category',legend[1],true];
                                var series = [['帮扶措施','bar',0,[],null]];
                                XS.Main.Pkjc.ananlyValueOfJson(json,[series[0][3],series[0][3],series[0][3],series[0][3],series[0][3]],
                                    ['cps_lowgaran_pop','cps_outpov_pop','cps_move_hhnum','cps_move_pop','cps_reconstru_hhnum'],'',[]);
                                XS.Main.Pkjc.ciAnalyOpt([5,'帮扶措施'],['',[]],legend,[120,40,80,40],xAxis,[['人数','value']],[],[],series,"xs_pkdc_AnalysTabsChart");
                                break;*/
                            case 3 ://五通四有
                                var field = ["BeautifulNum","BusStateNum","CultureNum","EconomyNum","HRoadHardNum","HealthRoomNum","PowerNum","RoadHardNum","TelNum","WlanNum","ZRoadHardNum"];
                                var xAxis = ['','category',["美丽乡村","通客运","文化场所","村集体经济","通户公路","村卫生室","通生产用电","村沥青路","通电话","通宽带","通组公路"],false,45];
                                var legend = [80,[],[]];
                                XS.Main.Pkjc.ananlyValueOfJson(json,[legend[1]],['REGION_Name'],'',[]);
                                //[[name,type,yAxisIndex,[[],[]],smooth,stack]]
                                var series = [];
                                for(var i=0;i<json.length;i++){
                                    legend[2].push('rect');
                                    series.push([legend[1][i],'line',0,[],true,false]);
                                    for(var j=0;j<field.length;j++){
                                        series[i][3].push(json[i][field[j]]);
                                    }
                                }
                                XS.Main.Pkjc.ciAnalyOpt([20,'五通四有'],['item',['']],legend,[300,80,60,40],xAxis,[['','value']],[],[],series,"xs_pkdc_AnalysTabsChart",[]);
                                break;
                            case 4 ://四有五覆盖
                                var field = ["CoMedicNum","EduHelpNum","ElectricSafeNum","HouseSafeNum","IndustyNum","InsureNum","WaterSafeNum","WorkSkillNum","YardHardNum","EnroadHardNum"];
                                var xAxis = ['','category',["新合作医疗","教育帮扶","用电安全","住房安全","有产业支持","参加保险","饮水安全","劳动技能","院坝硬化","入户路硬化"],false];
                                var legend = [60,[],[]];
                                XS.Main.Pkjc.ananlyValueOfJson(json,[legend[1]],['REGION_Name'],'',[]);
                                var series = [];
                                for(var i=0;i<json.length;i++){
                                    legend[2].push('rect');
                                    series.push([legend[1][i],'line',0,[],true,true]);
                                    for(var j=0;j<field.length;j++){
                                        series[i][3].push(json[i][field[j]]);
                                    }
                                }
                                XS.Main.Pkjc.ciAnalyOpt([5,'四有五覆盖'],['axis',['line']],legend,[250,80,80,80],xAxis,[['','value']],[],[],series,"xs_pkdc_AnalysTabsChart",[]);
                                break;
                        }
                    }
                });
            }
        });
    }else if(xs_currentZoneLevel == XS.Main.ZoneLevel.village)
    {
        var tabTile = ["文化程度", "致贫原因", "帮扶措施", "五通四有", "四有五覆盖","脱贫进展"];
        var content = '<div style="padding: 2px;box-sizing: border-box;height: 100%;">' +
            XS.Main.Pkjc.tabsContent(tabTile, "xs_pkdc_AnalysTabs", "left", true) +
            '</div>';
        XS.CommonUtil.openDialog("xs_pkdc_detailDialog", "数据分析", "icon-save", content, false, true, false, "1100", "600", null, 40);
        data = {pd_id:xs_pkdc_currentStateCode};
        XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, "QueryVillBaseById", data, function(json) {
            xs_pkdc_addrName = json.VBI_NAME;
            $("#xs_pkdc_detailDialog").dialog("setTitle",xs_pkdc_addrName + "-贫困数据分析");
        });

        var selectTab = $("#xs_pkdc_AnalysTabs").tabs("getTab", 0);
        selectTab.empty().append('<div id="xs_pkdc_AnalysTabsChart" style="width:100%;height: 100%;box-sizing: border-box;"></div>');
        //文化程度
        var data = {pid:xs_pkdc_currentStateCode};
        XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, "QueryGroupbyeduById", data, function(json) {
            $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
            if (json && json.length > 0 && xs_pkdc_analyIndex == 0) {
                var xAxis = ['','category',[],false];
                var series = [['','line',0,[],true]];
                XS.Main.Pkjc.ananlyValueOfJson(json,[xAxis[2],series[0][3]],['EDU','NUM'],'',[]);
                XS.Main.Pkjc.ciAnalyOpt([5,'文化程度'],['',[]],[],[200,100,80,40],xAxis,[['','value']],[],[],series,"xs_pkdc_AnalysTabsChart",["rgb(52,161,45)"]);
            }
        });
        $("#xs_pkdc_AnalysTabs").tabs({
            onSelect: function (title, index) {
                xs_pkdc_analyIndex = index;
                var action = "";
                switch(index){
                    case 0 ://文化程度
                        action = "QueryGroupbyeduById";
                        break;
                    case 1 ://致贫原因
                        action = "QueryGroupbyReasonById";
                        break;
                    case 2 ://帮扶措施
                        action = "QueryCountyPopStatByTid";
                        break;
                    case 3 ://五通四有
                        action = "QueryVillFiveFourByCountByAreaId";
                        break;
                    case 4 ://四有五覆盖
                        action = "QueryFourFiveByAreaId";
                        break;
                    case 5 ://脱贫进展
                        action = "";
                        break;
                }
                $("#xs_pkdc_AnalysTabsChart").remove();
                selectTab = $("#xs_pkdc_AnalysTabs").tabs("getTab", index);
                selectTab.empty().append('<div id="xs_pkdc_AnalysTabsChart" style="width:100%;height: 100%;box-sizing: border-box"></div>');

                data = {pd_id:xs_pkdc_currentStateCode,pid:xs_pkdc_currentStateCode,cid:xs_pkdc_currentStateCode};
                $("#xs_pkdc_pkBaseData_loading").css({"visibility":"visible"});
                XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, action, data, function(json) {
                    $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
                    if (json && json.length > 0 && xs_pkdc_analyIndex == index) {
                        switch (index) {
                            case 0 ://文化程度
                                var xAxis = ['','category',[],false];
                                var series = [['','line',0,[],true]];
                                XS.Main.Pkjc.ananlyValueOfJson(json,[xAxis[2],series[0][3]],['EDU','NUM'],'',[]);
                                XS.Main.Pkjc.ciAnalyOpt([5,'文化程度'],['',[]],[],[120,40,80,40],xAxis,[['','value']],[],[],series,"xs_pkdc_AnalysTabsChart",[]);
                                break;
                            case 1 ://致贫原因
                                var radar = ['60%',["50%","55%"],[[],[]]];
                                var series = [['致贫原因','radar',[['',[]]]]];
                                var jsonObj = [];
                                for(var i=0;i<json.length;i++){
                                    if(json[i].REASON != '因残' && json[i].REASON != '缺资金'){
                                        jsonObj.push(json[i]);
                                    }
                                }

                                XS.Main.Pkjc.ananlyValueOfJson(jsonObj,[radar[2][0],series[0][2][0][1]],['REASON','NUM'],'NUM',radar[2]);
                                XS.Main.Pkjc.ciAnalyOpt([5,'致贫原因'],['',[]],[],[],[],[],radar,[],series,"xs_pkdc_AnalysTabsChart",['rgba(0,0,255,1)']);
                                break;
                            case 2 ://帮扶措施
                                /*var legend = [40,["低保人数","参加培训人数","异地扶贫搬迁户","异地扶贫搬迁人数","危房改造户"]];
                                var xAxis = ['','category',legend[1],true];
                                var series = [['帮扶措施','bar',0,[],null]];
                                XS.Main.Pkjc.ananlyValueOfJson(json,[series[0][3],series[0][3],series[0][3],series[0][3],series[0][3]],
                                    ['cps_lowgaran_pop','cps_outpov_pop','cps_move_hhnum','cps_move_pop','cps_reconstru_hhnum'],'',[]);
                                XS.Main.Pkjc.ciAnalyOpt([5,'帮扶措施'],['',[]],legend,[120,40,80,40],xAxis,[['人数','value']],[],[],series,"xs_pkdc_AnalysTabsChart");*/
                                break;
                            case 3 ://五通四有
                               /* var field = ["BeautifulNum","BusStateNum","CultureNum","EconomyNum","HRoadHardNum","HealthRoomNum","PowerNum","RoadHardNum","TelNum","WlanNum","ZRoadHardNum"];
                                var xAxis = ['','category',["美丽乡村","通客运","文化场所","村集体经济","通户公路","村卫生室","通生产用电","村沥青路","通电话","通宽带","通组公路"],false,45];
                                var legend = [40,[],[]];
                                XS.Main.Pkjc.ananlyValueOfJson(json,[legend[1]],['REGION_Name'],'',[]);
                                //[[name,type,yAxisIndex,[[],[]],smooth,stack]]
                                var series = [];
                                for(var i=0;i<json.length;i++){
                                    legend[2].push('rect');
                                    series.push([legend[1][i],'line',0,[],true,false]);
                                    for(var j=0;j<field.length;j++){
                                        series[i][3].push(json[i][field[j]]);
                                    }
                                }
                                XS.Main.Pkjc.ciAnalyOpt([5,'五通四有'],['axis',['line']],legend,[200,80,60,40],xAxis,[['','value']],[],[],series,"xs_pkdc_AnalysTabsChart",[]);*/
                                break;
                            case 4 ://四有五覆盖
                               /* var field = ["CoMedicNum","EduHelpNum","ElectricSafeNum","HouseSafeNum","IndustyNum","InsureNum","WaterSafeNum","WorkSkillNum","YardHardNum","EnroadHardNum"];
                                var xAxis = ['','category',["新合作医疗","教育帮扶","用电安全","住房安全","有产业支持","参加保险","饮水安全","劳动技能","院坝硬化","入户路硬化"]];
                                var legend = [60,[],[]];
                                XS.Main.Pkjc.ananlyValueOfJson(json,[legend[1]],['REGION_Name'],'',[]);
                                var series = [];
                                for(var i=0;i<json.length;i++){
                                    legend[2].push('rect');
                                    series.push([legend[1][i],'line',0,[],true]);
                                    for(var j=0;j<field.length;j++){
                                        series[i][3].push(json[i][field[j]]);
                                    }
                                }
                                XS.Main.Pkjc.ciAnalyOpt([5,'四有五覆盖'],['axis','line'],legend,[250,80,80,40],xAxis,[['','value']],[],[],series,"xs_pkdc_AnalysTabsChart",[]);*/
                                break;
                            case 5 ://脱贫进展

                                break;
                        }
                    }
                });
            }
        });
    }
}
//项目资金点击函数
XS.Main.Pkjc.clickItemFund = function(){
    var content = '<div style="height: 100%;padding:12px;box-sizing: border-box;">' +
            '<div id="xs_pkdc_itemFundDgridDom" style="height: 100%;">' +
                '<i id="xs_pkdc_itemFound_loading" style="position: absolute;top: 50%; left: 50%;margin-left: -25px;margin-top: -25px;visibility: visible;" class="fa fa-spinner fa-pulse fa-3x fa-fw xs_loading">' +
                '</i>' +
            '</div>' +
        '</div>';
    XS.CommonUtil.openDialog("xs_pkdc_detailDialog", xs_pkdc_addrName + "-项目资金", "icon-save", content, false, true, false, "1200","610",null,40);

    $("#xs_pkdc_itemFound_loading").css({"visibility":"visible"});
    if(xs_currentZoneLevel == XS.Main.ZoneLevel.city || xs_currentZoneLevel == XS.Main.ZoneLevel.county || xs_currentZoneLevel == XS.Main.ZoneLevel.town)
    {
        var data = {regionid:xs_pkdc_currentStateCode};
        XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, "QueryProjecFundByRegionid", data, function(json) {
            $("#xs_pkdc_itemFound_loading").css({"visibility":"hidden"});
            if(json && json.length > 0){
                xs_pkdc_addrName = json[0].COUNTY;
                $("#xs_pkdc_detailDialog").dialog("setTitle",xs_pkdc_addrName + "-项目资金");
                $('#xs_pkdc_itemFundDgridDom').datagrid({
                    data: XS.Main.Pkjc.itemFundPageData(json,1,10),
                    pagination: true,
                    pageSize: 10,
                    striped: true,
                    singleSelect: true,
                    rownumbers: false,
                    rowStyler: function(rowIndex,rowData){
                        return 'height:49px';
                    },
                    columns: XS.Main.Pkjc.itemFundGridColumns(xs_pkdc_itemFundGridField,'5%',[[0,'3%'],[2,'7%'],[3,'4%'],[4,'7%'],[11,'8%'],[16,'7%'],[17,'6%']]),
                });
                var pager = $("#xs_pkdc_itemFundDgridDom").datagrid("getPager");
                pager.pagination({
                    total:json.length,
                    showPageList: false,
                    onSelectPage:function (pageNumber, pageSize) {
                        $("#xs_pkdc_itemFundDgridDom").datagrid("loadData", XS.Main.Pkjc.itemFundPageData(json,pageNumber,pageSize));
                        pager.pagination('refresh', {
                            showPageList: false,
                            total:json.length,
                            pageNumber:pageNumber
                        });
                    }
                });
            }else{
                $('#xs_pkdc_itemFundDgridDom').append('<div style="position: absolute;color:#ff0000;font-size: 40px;left: 44%;top: 48%;">暂无相关数据</div>');
            }
        });
    }else if(xs_currentZoneLevel == XS.Main.ZoneLevel.village)
    {
        var data = {vid:xs_pkdc_currentStateCode};
        XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, "QueryVillFiveFourById", data, function(json) {
            $("#xs_pkdc_itemFound_loading").css({"visibility": "hidden"});
            console.log(json);
            if (json && json.length > 0) {
                xs_pkdc_addrName = json[0].VNAME;
                $("#xs_pkdc_detailDialog").dialog("setTitle",xs_pkdc_addrName + "-脱贫管理");
                xs_pkdc_addrName = json[0].VNAME;
                $("#xs_pkdc_detailDialog").dialog("setTitle",xs_pkdc_addrName + "-脱贫管理");
                var contentHtml =
                    '<div align="center" class="xs_poor_45_vill">'+
                    '<div class="xs_poor_45_villTitle">五通(' + xs_pkdc_addrName + ')</div>'+
                        //通村沥青路
                    '<div class="xs_poor_45_villC" style1="margin-left: 100px;">' +
                    '<div class="xs_poor_45_villF">通村沥青路</div>';
                    contentHtml += '<img class="xs_poor_45_villImg" src="../img/poor/通村沥青.jpg">' +
                        '<div class="xs_poor_45_villTip"><span style="display: inline-block;">通村沥青路:'+ json[0].ISROADHARD +'</span></div>';
                contentHtml
                    += '</div>'+
                    '<div class="xs_poor_45_villC">' +
                    '<div class="xs_poor_45_villF">通客运</div>';
                    contentHtml += '<img class="xs_poor_45_villImg" src="../img/poor/灰度通客运.jpg">' +
                        '<div class="xs_poor_45_villTip">' +
                            '<span style="display: inline-block;">是否通客运:' + json[0].ISBUSSTATE + '</span>' +
                            '<span style="display: inline-block;">是否通客运:' + json[0].UNSTATENUM + '</span>' +
                        '</div>';
                contentHtml
                    += '</div>'+
                    '<div class="xs_poor_45_villC">' +
                    '<div class="xs_poor_45_villF">通宽带及电话</div>';
                    contentHtml += '<img class="xs_poor_45_villImg" src="../img/poor/灰度通宽带.jpg">' +
                        '<div class="xs_poor_45_villTip">' +
                            '<span style="display: inline-block;">通宽带:' + json[0].ISWLAN + '</span>' +
                            '<span style="display: inline-block;">需建设基站:' + json[0].UNTELSTATENUM + '</span>' +
                            '<span style="display: inline-block;">需光缆建设:' + json[0].UNTELMETER + '</span>' +
                            '<span style="display: inline-block;">通电话:' + json[0].ISTELE + '</span>' +
                        '</div>';
                contentHtml
                    += '</div>'+
                    '<div class="xs_poor_45_villC">' +
                    '<div class="xs_poor_45_villF">通生产用电</div>';
                    contentHtml += '<img class="xs_poor_45_villImg" src="../img/poor/通生产用电.jpg">' +
                        '<div class="xs_poor_45_villTip"><span style="display: inline-block;">通生产用电:' + json[0].ISPELECTRY + '</span></div>';
                contentHtml
                    += '</div>'+
                    '<div class="xs_poor_45_villC">' +
                    '<div class="xs_poor_45_villF">通组公路及连户路硬化</div>';
                    contentHtml += '<img class="xs_poor_45_villImg" src="../img/poor/通组公路.jpg">' +
                        '<div class="xs_poor_45_villTip">' +
                        '<span style="display: inline-block;">通组公路是否硬化:' + json[0].ISZROADHARD + '</span>' +
                        '<span style="display: inline-block;">连户路是否硬化:' + json[0].ISHROADHARD + '</span>' +
                        '</div>';
                contentHtml
                    += '</div>'+
                    '<div class="xs_poor_45_villTitle" style="margin-top: 30px;">四有</div>'+
                    '<div class="xs_poor_45_villC">' +
                    '<div class="xs_poor_45_villF">美丽乡村创建</div>';
                    contentHtml += '<img class="xs_poor_45_villImg" src="../img/poor/灰度美丽乡村.jpg">' +
                        '<div class="xs_poor_45_villTip">' +
                        '<span style="display: inline-block;">有美丽乡村建设点:' + json[0].ISBEAUTIFULVILLAGE + '</span>' +
                        '<span style="display: inline-block;">建示范点个数:' + json[0].UNBEAUTIFULVILLAGENUM + '</span>' +
                        '</div>';
                contentHtml
                    += '</div>'+
                    '<div class="xs_poor_45_villC">' +
                    '<div class="xs_poor_45_villF">村卫生室和执业医生</div>';
                    contentHtml += '<img class="xs_poor_45_villImg" src="../img/poor/村卫生室.jpg">' +
                        '<div class="xs_poor_45_villTip">' +
                            '<span style="display: inline-block;">有村卫生室及执业医生:' + json[0].ISVILLAGEHEALTHROOM + '</span>' +
                            '<span style="display: inline-block;">医生配备人数:' + json[0].UNVILLAGEHEALTHROOMNUM + '</span>' +
                        '</div>';
                    contentHtml
                        += '</div>'+
                        '<div class="xs_poor_45_villC">' +
                        '<div class="xs_poor_45_villF">村文化场所和信息员</div>';
                        contentHtml += '<img class="xs_poor_45_villImg" src="../img/poor/灰度村文化.jpg">' +
                            '<div class="xs_poor_45_villTip">' +
                                '<span style="display: inline-block;">有村文化场所和文化信息员:' + json[0].ISENTERTAINMENTROOM + '</span>' +
                                '<span style="display: inline-block;">建设个数:' + json[0].UNENTERTAINMENTROOMNUM + '</span>' +
                                '<span style="display: inline-block;">信息员配备人数:' + json[0].INFORMATIONPERSONNUM + '</span>' +
                            '</div>';
                    contentHtml
                        += '</div>'+
                        '<div class="xs_poor_45_villC">' +
                        '<div class="xs_poor_45_villF">村集体经济</div>';
                        contentHtml += '<img class="xs_poor_45_villImg" src="../img/poor/灰度村集体经济.jpg">' +
                            '<div class="xs_poor_45_villTip">' +
                            '<span style="display: inline-block;">有高于3万元村集体经济:' + json[0].ISVILLAGEECONOMY + '</span>' +
                            '<span style="display: inline-block;">组建村级经济组织个数:' + json[0].VILLAGEENTERPRISENUM + '</span>' +
                            '<span style="display: inline-block;">需建设内容:' + json[0].UNVILLAGEECONOMY + '</span>' +
                            '</div>';
                contentHtml
                    += '</div>'+
                    '</div>';
                contentHtml +=
                    '<script>' +
                    '$(".xs_poor_45_villC").mouseenter(function(){' +
                    '$(this).find(".xs_poor_45_villTip").show("fast");' +
                    '});' +
                    ' $(".xs_poor_45_villC").mouseleave(function(){' +
                    '$(this).find(".xs_poor_45_villTip").hide("fast");' +
                    '});' +
                    '</script>';
                $("#xs_pkdc_itemFundDgridDom").append(contentHtml);
            }else{
                $('#xs_pkdc_itemFundDgridDom').append('<div style="position: absolute;color:#ff0000;font-size: 40px;left: 44%;top: 48%;">暂无相关图片</div>');
            }
        });
    }

}

/**
 * 获取项目资金的分页数据
 * @param json
 * @param pageNumber
 * @param pageSize
 * @returns {Array}
 */
XS.Main.Pkjc.itemFundPageData = function(json,pageNumber,pageSize){
    var data = [];
    for(var i=(pageNumber-1)*pageSize;i<pageNumber*pageSize && i<json.length;i++){
        json[i].serialNo = i + 1;
        data.push(json[i]);
    }
    return data;
}
/**
 * 根据字段数组生成具有一定列宽的网格列columns
 * @param fieldAndTitle 字段数组
 * @param defaultWidth 默认列宽，在rowAndWidth缺省的情况下可缺省
 * @param rowAndWidth 需要单独设置的列宽数组，数组元素是一系列拥有两个元素的数组，分别表示某一列及其该列的宽
 * @returns {*[]}
 */
XS.Main.Pkjc.itemFundGridColumns = function(fieldAndTitle,defaultWidth,rowAndWidth){
    var columns = [[]];
    for (var i = 0; i < fieldAndTitle.length; i++) {
        for (var j = 0;rowAndWidth && j < rowAndWidth.length; j++) {
            if (i == rowAndWidth[j][0]) {
                columns[0].push({field: fieldAndTitle[i][0],title: fieldAndTitle[i][1],width: rowAndWidth[j][1]});
                break;
            }
        }
        if(columns[0][i]){
            continue;
        }
        if (defaultWidth) {
            columns[0].push({field: fieldAndTitle[i][0], title: fieldAndTitle[i][1], width: defaultWidth});
        } else {
            columns[0].push({field: fieldAndTitle[i][0], title: fieldAndTitle[i][1]});
        }
    }
    return columns;
}
/**
 * 显示详细点击窗口中的属性网格
 * @param json 从服务器端请求回来的对象或数组
 * @param nameArr 属性网格的name值数组
 * @param valueArr 属性网格的value值数组
 */
XS.Main.Pkjc.dataTable = function(json,nameArr,valueArr,columnNum,rowH){
    var jsonData = null;
    if(json && json.length>0){
        jsonData = json[0];
    }else if(json){
        jsonData = json;
    }
    xs_pkdc_btnCliDatagridObj = [];
    for(var i=0;i<nameArr.length;i++){
        xs_pkdc_btnCliDatagridObj.push({});
        xs_pkdc_btnCliDatagridObj[i].name = nameArr[i];
        xs_pkdc_btnCliDatagridObj[i].value = jsonData[valueArr[i]];
    }

     $("#xs_pkdc_tabsContent").empty().append(XS.Main.Poor.createTable(xs_pkdc_btnCliDatagridObj, columnNum, rowH,"color:#00bbee",""));
     $(".datagrid-wrap").css("width","auto");
     var pieDomHeight = 396 - Math.ceil(xs_pkdc_btnCliDatagridObj.length/columnNum)*rowH;
     $("#xs_pkdc_tabsContentPie").css({height: pieDomHeight});

}
/**
 * 生成tabs标签页及标签选项卡
 * @param titleAttr 选项卡的集合
 * @param tabsId tabs的id
 * @param position
 * @param isFit
 * @returns {string}
 */
 XS.Main.Pkjc.tabsContent = function(titleAttr,tabsId,position,isFit){
    var content = '<div id="'+ tabsId + '" class="easyui-tabs" data-options="tabPosition:\'' + position + '\',fit:' + isFit + '">' +
        '<i id="xs_pkdc_pkBaseData_loading" style="position: absolute;top: 50%; left: 50%;margin-left: -25px;margin-top: -25px;visibility: visible;" class="fa fa-spinner fa-pulse fa-3x fa-fw xs_loading">' +
        '</i>';
    for(var i=0;i<titleAttr.length;i++){
        content += '<div title="' + titleAttr[i] +'"></div>';
    }
    content += '</div>';
    return content;
}
/**
 * 标签页中的pie显示
 * @param titleName title对象内的text值
 * @param indexArr 各分区对象在xs_pkdc_btnCliDatagridObj数组对象中下标集合
 * @param domId 容器id
 * @param otherIndexArr 不存在于xs_pkdc_btnCliDatagridObj数组对象中却可以通过其中的某两个对象value的差值而得到的下标集合
 * @param otherObjName 不存在于xs_pkdc_btnCliDatagridObj数组对象中的对象name
 */
XS.Main.Pkjc.tabsContentPie = function(titleName,indexArr,domId,otherIndexArr,otherObjName){
    XS.Main.Pkjc.DetailPieOpt.series[0].data = [];
    XS.Main.Pkjc.DetailPieOpt.legend.data = [];
    XS.Main.Pkjc.DetailPieOpt.title.text = titleName;

    if(otherIndexArr.length == 2){
        XS.Main.Pkjc.DetailPieOpt.series[0].data.push({});
        XS.Main.Pkjc.DetailPieOpt.legend.data.push(otherObjName);
        XS.Main.Pkjc.DetailPieOpt.series[0].data[0].name = otherObjName;
        XS.Main.Pkjc.DetailPieOpt.series[0].data[0].value = xs_pkdc_btnCliDatagridObj[otherIndexArr[0]].value - xs_pkdc_btnCliDatagridObj[otherIndexArr[1]].value;
        }

    for (var i = 0; i < indexArr.length; i++) {
        XS.Main.Pkjc.DetailPieOpt.series[0].data.push(xs_pkdc_btnCliDatagridObj[indexArr[i]]);
        XS.Main.Pkjc.DetailPieOpt.legend.data.push(xs_pkdc_btnCliDatagridObj[indexArr[i]].name);
    }
    echarts.init(document.getElementById(domId)).setOption(XS.Main.Pkjc.DetailPieOpt);
}
/**
 * 显示tabs中的scatter
 * @param title title对象中的text值
 * @param indexArr 各散点值在s_pkdc_btnCliDatagridOb内的下标集合
 * @param domId 容器id
 * @param reduceMultiple 各散点值缩小的倍数
 */
XS.Main.Pkjc.dynScatterSeries = function(title,indexArr,domId,reduceMultiple){
    XS.Main.Pkjc.scatterOption.title.text = title;
    XS.Main.Pkjc.scatterOption.legend.data = [];
    XS.Main.Pkjc.scatterOption.series = [];
    for(var i=0;i<indexArr.length;i++){
        XS.Main.Pkjc.scatterOption.legend.data.push(xs_pkdc_btnCliDatagridObj[indexArr[i]].name);
        var xs_pkdc_scatterSeries = {
            name: '',
            data: [],
            type: 'scatter',
            symbolSize: function (data) {
                return data[2] / data[4];
            },
            label: {
                emphasis: {
                    show: true,
                    formatter: function (param) {
                        return param.data[3] + ":" + param.data[2];
                    },
                    position: 'top'
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(120, 36, 50, 0.2)',
                    shadowOffsetY: 5,
                    color: ''
                }
            }
        };
        xs_pkdc_scatterSeries.name = xs_pkdc_btnCliDatagridObj[indexArr[i]].name;
        xs_pkdc_scatterSeries.itemStyle.normal.color = xs_pkdc_colorArr[i];
        xs_pkdc_scatterSeries.data = [[(Math.random())*100,(Math.random())*100,xs_pkdc_btnCliDatagridObj[indexArr[i]].value,xs_pkdc_btnCliDatagridObj[indexArr[i]].name,reduceMultiple]];
        XS.Main.Pkjc.scatterOption.series.push(xs_pkdc_scatterSeries);
    }
    echarts.init(document.getElementById(domId)).setOption(XS.Main.Pkjc.scatterOption);
}
/**
 * 根据选中的标签卡动态加载content
 * @param index 选中标签卡的编号
 */
XS.Main.Pkjc.detailWindowTabs = function(index){
    $("#xs_pkdc_tabsContentDom").remove();
    var selectTab = $("#xs_pkdc_detailTabs").tabs("getTab",index);
    selectTab.append('<div id="xs_pkdc_tabsContentDom" style="height: 402px;paddign:0px;border:1px solid #FFF;"></div>');

    $("#xs_pkdc_tabsContentDom").append('<div id="xs_pkdc_tabsContent" style="margin: 0px;"></div>');
    $("#xs_pkdc_tabsContentDom").append('<div id="xs_pkdc_tabsContentPie" style="margin:0px;"></div>');
    $("#xs_pkdc_tabsContentPie").append('<div id="xs_pkdc_tabsContentBtn" style="display: none;height:10%;" align="right"></div>');
    $("#xs_pkdc_tabsContentPie").append('<div id="xs_pkdc_tabsContPieDiv1" style="width:33%;height:88%;display: inline-block;"></div>');
    $("#xs_pkdc_tabsContentPie").append('<div id="xs_pkdc_tabsContPieDiv2" style="width:33%;height:88%;display: inline-block;"></div>');
    $("#xs_pkdc_tabsContentPie").append('<div id="xs_pkdc_tabsContPieDiv3" style="width:33%;height:88%;display: inline-block;"></div>');

    $("#xs_pkdc_tabsContentBtn").append('<a id="xs_pkdc_tabsContentBtn1" href="javascript:void(0);" style="background: #ffffff;margin-right: 10px;"></a>');
    $("#xs_pkdc_tabsContentBtn").append('<a id="xs_pkdc_tabsContentBtn2" href="javascript:void(0);" style="background: #ffffff;margin-right: 10px;"></a>');
    $("#xs_pkdc_tabsContentBtn1,#xs_pkdc_tabsContentBtn2").linkbutton();
}
/**
 * @param title
 * @param tooltip
 * @param legend
 * @param grid
 * @param xAxis
 * @param yAxis
 * @param radar
 * @param polar
 * @param series
 * @param initChart
 * @param color
 */
XS.Main.Pkjc.ciAnalyOpt= function(title,tooltip,legend,grid,xAxis,yAxis,radar,polar,series,initChart,color){
    var option = {};
    if(color && color.length>0){
        option.color = color;
    }
    option.title = {top:title[0],text:title[1],left:'center',textStyle:{fontWeight:'normal'}};
    option.tooltip = {trigger: tooltip[0],axisPointer : {type : tooltip[1][0],lineStyle:{color:tooltip[1][1]}}};//[trigger,[type,color]]
    if(legend.length == 2){
        option.legend = {top:legend[0],data:legend[1]};
    }else if(legend.length == 3){
        option.legend = {top:legend[0],data:[]};
        for(var i=0;i<legend[1].length;i++){
            option.legend.data.push({name:legend[1][i],icon:legend[2][i]});
        }
    }
    if(grid.length>0){
        option.grid = {top: grid[0],bottom: grid[1],left:grid[2],right:grid[3]};
    }
    if(xAxis.length > 0 && xAxis[1] == 'category'){//[name,type,data,boundaryGap,rotate]
        option.xAxis = [{name : xAxis[0],type : 'category',data : xAxis[2],boundaryGap:xAxis[3],splitLine: {lineStyle: {type: 'dotted'}},axisLabel:{rotate:xAxis[4],interval:0,}}];
    }else if(xAxis.length > 0 && xAxis[1] == 'value'){
        option.xAxis = [{name : xAxis[0],type : 'value',splitLine: {lineStyle: {type: 'dotted'}}}];
    }
    option.yAxis = [];
    for(var i=0;i<yAxis.length;i++){
    if(yAxis[i][1] == 'category'){
        option.yAxis.push({name : yAxis[i][0],type : 'category',data : yAxis[i][2],splitLine: {lineStyle: {type: 'dotted'}}});
    }else if(yAxis[i][1] == 'value'){
        option.yAxis.push({name :  yAxis[i][0],type : 'value',splitLine: {lineStyle: {type: 'dotted'}}});
    }
    }
    if(radar.length > 0){
        option.radar = {radius:radar[0],center:radar[1],splitArea:{areaStyle:{color:['rgba(250,250,250,0.3)']}},name:{textStyle:{show:true,color:"#000"}},indicator: []};
        for(var i=0;i<radar[2][0].length;i++){
            option.radar.indicator.push({name:radar[2][0][i],max:radar[2][1][i]});
        }
    }
    if(polar.length > 0){
        option.polar = {radius:polar[0][0],center:polar[0][1]};
        option.angleAxis = {type: polar[1][0],axisLine:{show:polar[1][1]},axisTick:{show:polar[1][2]},axisLabel:{show:polar[1][3]},splitLine:{show:polar[1][4]},splitArea:{show:polar[1][5]}};
        option.radiusAxis = {type: polar[2][0],axisLine:{show:polar[2][1]},axisTick:{show:polar[2][2]},axisLabel:{show:polar[2][3]},splitLine:{show:polar[2][4]},splitArea:{show:polar[2][5]},
            max:Math.ceil(polar[2][6]),min:0};
    }
    option.series = [];
    for(var i=0;i<series.length;i++){
        if(series[i][1] == 'bar'){//[[name,type,barGap,data,stack,showLabel,position]]
            option.series.push({name:series[i][0],type:'bar',barGap: series[i][2] ,data:series[i][3],stack:series[i][4],label: {normal: {show: series[i][5],position: series[i][6]}}});
        }else if(series[i][1] == 'line'){//[[name,type,yAxisIndex,data,smooth,stack]]
            option.series.push({name:series[i][0],type:'line',yAxisIndex: series[i][2],data:series[i][3],smooth:series[i][4],stack:series[i][5]});
            if(color){
                option.series[i].areaStyle = {normal:{}};
            }
        }else if(series[i][1] == 'radar'){
            option.series.push({name:series[i][0],type:'radar',data:[]});
            for(var j=0;j<series[i][2].length;j++){
                option.series[i].data.push({name:series[i][2][j][0],value:series[i][2][j][1]});
                if(color){
                    option.series[i].data[j].areaStyle = {normal:{}};
                    option.series[i].data[j].itemStyle = {normal:{}};
                }
            }
        }else if(series[i][1] == 'pie'){
            if(series[i][6]){
                option.series.push({name:series[i][0],type:'pie',data:[],radius:series[i][3],center:series[i][4],roseType:series[i][5],selectedMode:series[i][6][0],
                    hoverAnimation:series[i][6][1],legendHoverLink:series[i][6][2],selectedOffset:series[i][6][3],label:{normal:{show:series[i][6][4]}},labelLine:{normal:{show:series[i][6][5]}}});
            }else{//[name,type,[[],[]],radius,center,roseType]
                option.series.push({name:series[i][0],type:'pie',data:[],radius:series[i][3],center:series[i][4],roseType:series[i][5]});
            }

            for(var j=0;j<series[i][2][1].length;j++){
                option.series[i].data.push({name:series[i][2][0][j],value:series[i][2][1][j]});
                if(series[i][6]){option.series[i].data[j].selected = true;}
            }
        }
    }
    var xs_pkdc_AnalysTabsCInit =  echarts.init(document.getElementById(initChart));
    xs_pkdc_AnalysTabsCInit.setOption(option);
}
/**
 * 向目标数组中压入相应字段的值
 * @param json
 * @param target 目标
 * @param field
 * @param maxField
 * @param radarIndicator
 */
XS.Main.Pkjc.ananlyValueOfJson = function(json,target,field,maxField,radarIndicator){
    xs_pkdc_analyMax = 0;
    for(var i=0;i<json.length;i++){
        if(maxField){
            xs_pkdc_analyMax = xs_pkdc_analyMax<json[i][maxField] ? json[i][maxField] : xs_pkdc_analyMax;
        }
        for(var j=0;j<target.length;j++){
            target[j].push(json[i][field[j]]);
        }
    }
    if(radarIndicator.length>0){
        for(var i=0;i<radarIndicator[0].length;i++){
            radarIndicator[1].push(xs_pkdc_analyMax);
        }
    }
}