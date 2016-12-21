/**
 * Created by GZXS on 2016/7/19.
 */
//贫困洞察辅助文件

//贫困洞察详情tab字段
XS.Main.Pkjc.detailKV = {
    city:{
        title:["基本信息","土地信息","经济情况","人口统计","重点工作","专项扶贫","帮扶信息"],
        tabs:[
            {
                name:["市","市ID","国土面积","重点县(市、区旗)数","乡(镇、办事处)数","贫困乡(镇、办事处)数","行政村数",
                    "贫困村数","年末总户数","贫困户数","年末总人口","贫困人口","贫困发生率"],
                value:["regionname","regionid","CountArea","CouseNum","TownNum","PoorTownNum","VillNum","PoorVillNum","HouseNum",
                    "PoorHouseNum","PeopleNum","PoorPeopleNum","PoorRate"],
                unit:["",""," km²"," 个"," 个"," 个"," 个"," 个"," 万户"," 万户"," 万人"," 万人"," %"]
            },
            {
                name:["耕地面积","a.基本农田面积","b.有效灌溉面积","林地面积","a.退耕还林面积",
                    "b.林果面积","牧草地面积","a.退耕还草面积","荒漠化面积","a.石漠化面积","水域面积","森林覆盖率"],
                value:["CBS_CULLAND_AREA","CBS_BASIC_FARMLAND","CBS_IRRIGATE_AREA","CBS_FOREST_AREA","CBS_REFOREST_AREA",
                    "CBS_ORCHARD_AREA","CBS_PASTURE_AREA","CBS_REGRASS_AREA","CBS_DESERT_AREA","CBS_ROCKY_AREA","CBS_WATER_AREA",
                    "CBS_FOREST_RATE"],
                unit:[" 公顷"," 公顷"," 公顷"," 公顷"," 公顷"," 公顷"," 公顷"," 公顷"," 公顷"," 公顷"," 公顷"," %"]
            },
            {
                name:["地方生产总值GDP","a.第一产业","b.第二产业","c.第三产业","公财预算收入","公财预算支出","公财扶贫预算支出",
                    "人均纯收入","人均纯收入增长率","地方生产总值增长率"],
                value:["CBS_GDP","CBS_FIRST_INDUSTRY","CBS_SECOND_INDUSTRY","CBS_THIRD_INDUSTRY","CBS_LOCAL_REVENUE",
                    "CBS_LOCAL_EXPEND","CBS_LOCAL_POVERTY_EXPEND","CBS_FARMERS_PERNET","CBS_PERNET_RATE","CBS_GDP_RATE"],
                unit:[" 万元"," 万元"," 万元"," 万元"," 万元"," 万元"," 万元"," 万元","%","%"]
            },
            {
                name:["年末总户数","年末总人口","贫困户数","贫困人口","乡村户数","乡村人口","低保户数","低保人口","五保户数",
                        "五保人口","少数民族人口","妇女人口","参加城乡居民基本养老保险人数"],
                value:["C6","C7","C9","C10","C6A","C7A","C6B","C7C","C6C","C7D","C7B","C7E","C8"],
                unit:[" 户"," 人"," 户"," 人"," 户"," 人"," 户"," 人"," 户"," 人"," 人"," 人"," 人"]
            },
            {
                name:["县级公共图书馆数","有卫生院乡镇数","有综合文化站乡镇数","通(沥青/水泥)公路行政村数",
                    "通客运车行政村数","通电行政村数","有农民合作组织行政村数","开展乡村旅游贫困村数",
                    "有卫生室行政村数","通广播电视自然村数","通宽带网络行政村数","通广播电视行政村数",
                    "有文化/图书室行政村数","饮用自来水户数","危房户数","已实现安全饮水人数",
                    "参加新型农村合作医疗人数","城镇居民基本医疗保险人数","已解决安全饮水农村学校数","农民合作组织数"],
                value:["C79","C65","C81","C30","C31","C39","C46","C57","C66","C84","C86","C83","C82","C36","C43",
                    "C33","C69","C71","C34","C45"],
                unit:[" 个"," 个"," 个"," 个"," 个"," 个"," 个"," 个"," 个"," 个"," 个"," 个"," 个"," 户"," 户"," 人"," 人"," 人"," 个",
                    " 个"]
            },
            {
                name:[/*"驻村工作队","驻村干部",*/"雨露计划培训人数","雨露计划投入资金","劳动力转移培训人数",
                    "适用技能培训人数","村致富培训人数","小额信贷覆盖贫困村","小额信贷贷款户","小额信贷发放总额",
                    "易地搬迁规划户","易地搬迁规划人数","易地搬迁完成户","易地搬迁完成人数","易地搬迁投入资金"],
                value:[/*"CHS_TEAM_NUM","CHS_LEADER_NUM",*/"CAS_RAIN_POP","CAS_RAIN_INVEST","CAS_TRANS_TRAINNUM","CAS_SKILL_TRAINNUM",
                    "CAS_LEADER_TRAINNUM","CAS_MICROC_VILNUM","CAS_MICROC_HHNUM","CAS_MICROC_AMOUNT","CAS_RESETTLE_HHNUM",
                    "CAS_RESETTLE_POP","CAS_RESETTLE_COMHH","CAS_RESETTLE_COMPOP","CAS_RESETTLE_FUNDS"],
                unit:[/*"个","个",*/" 人"," 万元"," 人"," 人"," 人"," 人"," 户"," 万元"," 户"," 人"," 户"," 人"," 万元"]
            },
            {
                name:["交通部门资金","a.中央资金","b.省级资金","c.市县资金","水利部门资金","a.中央资金","b.省级资金",
                    "c.市县资金","能源部门资金","a.中央资金","b.省级资金","c.市县资金","住建部门资金","a.中央资金",
                    "b.省级资金","c.市县资金","农、林业部门资金","a.中央资金","b.省级资金","c.市县资金","教育部门资金",
                    "a.中央资金","b.省级资金","c.市县资金","卫计部门资金","a.中央资金","b.省级资金","c.市县资金",
                    "文化部门资金","a.中央资金","b.省级资金","c.市县资金"],
                value:["C32","C32A","C32B","C32C","C38","C38A","C38B","C38C","C42","C42A","C42B","C42C","C44",
                    "C44A","C44B","C44C","C53","C53A","C53B","C53C","C64","C64A","C64B","C64C","C78","C78A",
                    "C78B","C78C","C85","C85A","C85B","C85C"],
                unit:[" 万元"," 万元"," 万元"," 万元"," 万元"," 万元"," 万元"," 万元"," 万元"," 万元"," 万元"," 万元"," 万元",
                    " 万元"," 万元"," 万元"," 万元"," 万元"," 万元"," 万元"," 万元"," 万元"," 万元"," 万元"," 万元"," 万元",
                    " 万元"," 万元"," 万元"," 万元"," 万元"," 万元"]
            }
        ]
    },
    county:{
        title:["基本信息","土地信息","经济情况","人口统计","重点工作","专项扶贫","帮扶信息"],
        tabs:[
            {
                name:["县区名称","县ID","国土总面积","贫困类型","乡(镇、办事处)数","贫困乡(镇、办事处)数","行政村数","贫困村数",
                    "年末总户数","贫困户数","年末总人口","贫困人口","贫困发生率"],
                value:["CBI_NAME","CBI_ID","CBI_AREA","CBI_type","CBI_TOWNS_NUM","CBI_PoorTOWNS_NUM","CBI_VILLAGE_NUM",
                    "CBI_PoorVILLAGE_NUM","cps_hhnum","cps_poor_hhnum","cps_pop","cps_poor_pop","cps_Poverty_rate"],
                unit:["",""," km²",""," 个"," 个"," 个"," 个"," 户"," 户"," 人"," 人"," %"]
            },
            {
                name:["耕地面积","a.基本农田面积","b.有效灌溉面积","林地面积","a.退耕还林面积","a.林果面积","牧草地面积","a.退耕还草面积","荒漠化面积",
                    "a.石漠化面积","水域面积","森林覆盖率"],
                value:["CBS_CULLAND_AREA","CBS_BASIC_FARMLAND","CBS_IRRIGATE_AREA","CBS_FOREST_AREA",
                    "CBS_REFOREST_AREA","CBS_ORCHARD_AREA","CBS_PASTURE_AREA","CBS_REGRASS_AREA","CBS_DESERT_AREA",
                    "CBS_ROCKY_AREA","CBS_WATER_AREA","CBS_FOREST_RATE"],
                unit:[" 公顷"," 公顷"," 公顷"," 公顷"," 公顷"," 公顷"," 公顷"," 公顷"," 公顷"," 公顷"," 公顷"," %"]
            },
            {
                name:["地方生产总值GDP","第一产业","第二产业","第三产业","地方公财预算收入","地方公财预算支出","地方公财扶贫预算支出",
                    "农村居民人均纯收入","农村居民人均纯收入增长率","地方生产总值增长率"],
                value:["CBS_GDP","CBS_FIRST_INDUSTRY","CBS_SECOND_INDUSTRY","CBS_THIRD_INDUSTRY",
                    "CBS_LOCAL_REVENUE","CBS_LOCAL_EXPEND","CBS_LOCAL_POVERTY_EXPEND","CBS_FARMERS_PERNET","CBS_PERNET_RATE","CBS_GDP_RATE"],
                unit:[" 万元"," 万元"," 万元"," 万元"," 万元"," 万元"," 万元"," 元"," %"," %",]
            },
            {
                /*name:["年末总户数","贫困户","乡村户数","低保户数","五保户数","年末总人口","贫困人口","乡村人口","少数民族人口",
                    "低保户人口","五保人口","妇女人口","参加城乡居民基本养老保险人口"],
                value:["C6","C9","C6A","C6B","C6C","C7","C10","C7A","C7B","C7C","C7D","C7E","C8"],
                unit:["户","户","户","户","户","人","人","人","人","人","人","人","人"]*/
                name:["年末总户数","年末总人口","贫困户数","贫困人口","乡村户数","乡村人口","低保户数","低保人口","五保户数",
                    "五保人口","少数民族人口","妇女人口","参加城乡居民基本养老保险人数"],
                value:["C6","C7","C9","C10","C6A","C7A","C6B","C7C","C6C","C7D","C7B","C7E","C8"],
                unit:[" 户"," 人"," 户"," 人"," 户"," 人"," 户"," 人"," 户"," 人"," 人"," 人"," 人"]
            },
            {
                name:["县级公共图书馆数","有卫生院乡镇数","有综合文化站乡镇数","通(沥青/水泥)公路行政村数","通客运车行政村数","通电行政村数",
                    "有农民合作组织行政村数","开展乡村旅游贫困村数","有卫生室行政村数","通广播电视自然村数","通广播电视行政村数",
                    "通宽带网络行政村数","有文化/图书室行政村数","已解决安全饮水农村学校数","农民合作组织数",
                    "饮用自来水户数","危房户数","参加新型农村合作医疗人数","参加城镇居民基本医疗保险人数","已实现安全饮水人数"],
                value:["C79","C65","C81","C30","C31","C39","C46","C57","C66","C84","C83","C86","C82","C34","C45","C36","C43","C69","C71","C33"],
                unit:[" 个"," 个"," 个"," 个"," 个"," 个"," 个"," 个"," 个"," 个"," 个"," 个"," 个"," 个"," 个"," 户"," 户"," 人"," 人"," 人"]
                /*name:["通(沥青/水泥)公路行政村数","通客运车行政村数","已实现安全饮水人数","已解决安全饮水农村学校数","饮用自来水户数",
                 "通电行政村数","危房户数","农民合作组织数","有农民合作组织行政村数","开展乡村旅游贫困村数","有卫生院乡镇数",
                 "有卫生室行政村数","参加新型农村合作医疗人数","城镇居民基本医疗保险人数","县级公共图书馆数","通广播电视自然村数",
                 "通广播电视行政村数","通宽带网络行政村数","有文化/图书室行政村数","有综合文化站乡镇数"],
                 value:["C30","C31","C33","C34","C36","C39","C43","C45","C46","C57","C65","C66","C69","C71","C79","C84","C83","C86","C82","C81"],
                 unit:["个","个","人","个","户","个","户","个","个","个","个","个","人","个","个","个","个","个","个","个"]*/
            },
            {
                name:[/*"驻村工作队","驻村干部",*/"雨露计划培训人数","雨露计划投入资金","劳动力转移培训人数","适用技能培训人数",
                    "村致富培训人数","小额信贷覆盖贫困村","小额信贷贷款户","小额信贷发放总额","易地搬迁规划户","易地搬迁规划人数",
                    "易地搬迁完成户","易地搬迁完成人数","易地搬迁投入资金"],
                value:[/*"CHS_TEAM_NUM","CHS_LEADER_NUM",*/"CAS_RAIN_POP","CAS_RAIN_INVEST","CAS_TRANS_TRAINNUM",
                    "CAS_SKILL_TRAINNUM","CAS_LEADER_TRAINNUM","CAS_MICROC_VILNUM","CAS_MICROC_HHNUM","CAS_MICROC_AMOUNT",
                    "CAS_RESETTLE_HHNUM","CAS_RESETTLE_POP","CAS_RESETTLE_COMHH","CAS_RESETTLE_COMPOP","CAS_RESETTLE_FUNDS"],
                unit:[/*" 个"," 个",*/" 人"," 万元"," 人"," 人"," 人"," 个"," 户"," 万元"," 户"," 人"," 户"," 人"," 万元"]
            },
            {
                name:["交通部门资金"," a.中央资金"," b.省级资金"," c.市县资金",
                    "水利部门资金"," a.中央资金"," b.省级资金"," c.市县资金",
                    "能源部门资金"," a.中央资金"," b.省级资"," c.市县资金",
                    "住建部门资金"," a.中央资金"," b.省级资金"," c.市县资金",
                    "农、林业部门资金","a.中央资金"," b.省级资金"," c.市县资金",
                    "教育部门资金"," a.中央资金"," b.省级资金"," c.市县资金",
                    "卫计部门资金"," a.中央资金"," b.省级资金"," c.市县资金",
                    "文化部门资金"," a.中央资金"," b.省级资金"," c.市县资金"],
                value:["C32","C32A","C32B","C32C",
                    "C38","C38A","C38B","C38C","C42","C42A","C42B","C42C","C44","C44A","C44B","C44C","C53","C53A",
                    "C53B","C53C","C64","C64A","C64B","C64C","C78","C78A","C78B","C78C","C85","C85A","C85B","C85C"],
                unit:[" 万元"," 万元"," 万元"," 万元"," 万元"," 万元"," 万元"," 万元"," 万元"," 万元"," 万元"," 万元"," 万元"," 万元",
                    " 万元"," 万元"," 万元"," 万元"," 万元"," 万元"," 万元"," 万元"," 万元"," 万元"," 万元"," 万元"," 万元"," 万元",
                    " 万元"," 万元"," 万元"," 万元"]
            }
        ]
    },
    town:{
        title:["基 本 信 息","基 本 统 计","公 共 服 务","生 产 生 活","经济情况"],
        tabs:[
            {
                name:["乡(镇、办事处)名称","乡(镇、办事处)ID","经度","纬度","平均海拔","耕地面积",
                    "行政村数","贫困村数","年末总户数","贫困户数","年末总人口","贫困人口","贫困类型","贫困发生率"],
                value:["TOWB_NAME","TOWB_ID","TOWB_LONGITUDE","TOWB_LATITUDE","TOWB_MEAN","Totolarea",
                    "Totolvillnum","TOWB_VillNum","TOWB_HouseNum","TOWB_PoorHouseNum","TOWB_PeopleNum",
                    "TOWB_PoorPeopleNum","tpl_TownType","tpl_PoorRate"],
                unit:["","","",""," m"," 亩"," 个"," 个"," 户"," 户"," 人"," 人"," 类"," %"]
            },
            {
                name:["无房户","危房改造户","需易地搬迁户","劳动力人数","省内务工人数","省外务工人数","外出务工人数",
                    "少数民族人数","未安全饮水人数","享受农村低保人数","需易地搬迁人数","参加新农合人数",
                    "参加居民养老人数"],
                value:["TBS_NOHOME_HHNUM","TBS_RECONSTRU_HHNUM","TBS_MOVE_HHNUM","TBS_LABOR_NUM","TBS_IN_LABOR",
                    "TBS_OUT_LABOR","TBS_LTRAINED_OUTER","TBS_MINORITY_NUM","TBS_NOWATER_POP","TBS_GUARANTEE_POP","TBS_MOVE_POP",
                    "TBS_MEDICAL_POP","TBS_ENDOW_POP"],
                unit:[" 户"," 户"," 户"," 人"," 人"," 人"," 人"," 人"," 人"," 人"," 人"," 人"," 人"," 人"]
            },
            {
                name:["图书室","党员活动室","健身器材室","文化/体育广场","公共卫生厕所","卫生室","垃圾堆放点","镇办公电话"],
                value:["TPS_LIBRARY_NUM","TPS_PARTY_ROOM","TPS_FITNESSEQUIPMENT","TPS_CULTURESPORTSQUARE_NUM","TPS_PUBLICTOILET_NUM",
                    "TPS_CLINIC_NUM","TPS_HOUSEWASTE_NUM","TPS_CONTRACT_PHONE"],
                unit:[" 个"," 个"," 个"," 个"," 个"," 个"," 个",""]
            },
            {
                name:["通(水泥/沥青)公路里程","通(水泥/沥青)公路自然村","驻村工作队","通广播电视户","有农业大棚户",
                    "有宽带网络户","有畜牧大棚户","有固定/移动电话户","经营农家乐户","有卫生厕所户",
                    "危房农户","有水冲式厕所户","有煤炭清洁能源户","无房户",
                    "有农用机动车户","饮用入户管道水户"],
                value:["TPL_HARDEN_MILE","TPL_HAVEGIGHROADNATURALV_NUM","TPL_TEAM_NUM","TPL_TELE_HHNUM","TPL_GREEN_HHNUM",
                    "TPL_BAND_HHNUM","TPL_ANI_HHNUM","TPL_PHONE_HHNUM","TPL_AG_HHNUM","TPL_TOILET_HHNUM",
                    "TPL_DANBUILDINGMAIN_FAMILY","TPL_WATERTOILET_HHNUM","TPL_ENERGY_HHNUM","TPL_NOHOUSE_HHNUM",
                    "TPL_FVEHICLE_HHNUM","TPL_TAPWATER_HHNUM"],
                unit:[" 公里"," 个"," 个"," 户"," 户"," 户"," 户"," 户"," 户"," 户"," 户"," 户"," 户"," 户"," 户"," 户"]
            },
            {
                name:["主导产业类型","主导产业产值","村级集体经济收入","农民年人均纯收入","年人均粮食产量",
                    "经济作物面积","经济林面积"],
                value:["LEADINDUSTTYPE","LEADINDUSTVALUE","VILCOLECONOMY","PERCAPITAL","PERGRAIN","PERGRAIN","ECOFOREST"],
                unit:[""," 万元"," 万元"," 元"," kg"," 亩"," 亩"]
            }
        ]
    },
    village:{
        title:["基 本 信 息","基 本 统 计","人 口 信 息","公 共 服 务"],
        tabs:[
            {
                name:["村名称","村ID","村负责人","村办公电话","经度","纬度","耕地面积","贫困类型",
                    "年末总户数","年末总人口","贫困人口"],
                value:["VILLNAME","VID","VILLLEADER","TEL","LONGITUDE","LATITUDE","B5","POORTYPE","B2A"
                    ,"B3A","B3B"],
                unit:["","","","","",""," 亩",""," 户"," 人"," 人"]
            },
            {
                name:["耕地面积","a.有效灌溉面积","林地面积","a.退耕还林面积","b.林果面积","牧草林地面积","水域面积","畜牧存栏数"
                    ,"农民年人均纯收入","村级集体经济收入","参加新型农村合作社医疗人数","参加城乡居民养老保险人数","获得医疗救助人数"],
                value:["B5","B5A","B6","B6A","B6B","B7","B8","B9","B10","B11","B12","B13","B14"],
                unit:[" 亩"," 亩"," 亩"," 亩"," 亩"," 亩"," 亩"," 头"," 元"," 元"," 人"," 人"," 人"]
            },{
                name:[
                    "年末总户数","年末总人口","国家标准贫困户数","国家标准贫困人口","低保户数","低保人口",
                    "五保户数","五保人口","少数民族人口","妇女人口","残疾人口","劳动力人口","外出务工人口"],
                value:["B2", "B3","B2A","B3A","B2B","B3B","B2C","B3C","B3D","B3E","B3F","B4","B4A"],
                unit:[" 户"," 人"," 户"," 人"," 户"," 人"," 户"," 人"," 人"," 人"," 人"," 人"," 人"]
            },
            {
                name:["卫生室","公共厕所","生产生活垃圾堆放点","文化(图书)室","执行(助理)医师","行政村信息员",
                    "通广播电视户数","通宽带户数","通宽带村小学个数","能用手机上网户数"],
                value:["B32","B34","B35","B36","B33","B42","B37","B38","B41","B39"],
                unit:[" 个"," 个"," 个"," 个"," 人"," 人"," 户"," 户"," 个"," 户"]
            }
        ]
    }
};
var xs_pkdc_colorArr  = ["#96FF20","#35FFDF","#1FA7FF","#0A54FF","#1917FF","#6625FF",
    "#CA34FF","#FF3A92","#FF2A39","#FF7023","#FFC52C","#FFFD45","#FFA0A0","#AEB1FF"];
var xs_pkdc_itemFundGridField = [["serialNo","序号"],["PROJECID","项目编号"],["AUTISTATE","申请状态"],["PROJECTNAME","项目名称"],
    ["FONDYEAR","年度"],["FOUNDNUM","资金文号"],["REACHCOUNTYFOUNDS","到帐资金"],["FOUNDDETAIL","资金细节"],
    ["REPLYID","批复文号"],["PROJECTHEAD","项目负责人"],["FOUNDSIZECONTENT","资金规模内容"],["HELPHOUSE","覆盖户数"],
    ["HELPPEOPLE","覆盖人数"],["FINAFOUND","最终资金"],["CREATTIME","创建时间"]];
XS.Main.Pkjc.DetailPieOpt= {
    legend: {
        top:30,
        itemGap:5,
        itemHeight:10,
        data: []
    },
    tooltip: {
        show: true,
        trigger: 'item',
        //formatter: '{b}: {c}({d}%)'
        formatter: function(params){
            /*for(var i=0;i<xs_pkdc_btnCliDatagridObj.length;i++){
                if(xs_pkdc_btnCliDatagridObj[i].nameNotUnit == params.name){
                    return xs_pkdc_btnCliDatagridObj[i].name + ": " + "<br/>" + params.value + " (" + params.percent + "%)";
                }
            }*/
            var returnValue = "";
            if(params) {
                if (params.constructor == Object) {
                    params = [params];
                }
                for(var i=0;i<params.length;i++){
                    returnValue += '<div style="width: 10px;height: 10px;display: inline-block;border-radius: 50%;background: ' + params[i].color + ';"></div>';
                    for(var j=0;j<xs_tipAnalyUnit.length;j++){
                        if(xs_tipAnalyUnit[j].name == params[0].seriesName){
                            var tipValueNum = params[i].value.toString().split(".").length>1 ? params[i].value.toString().split(".")[1].length : 0;
                            returnValue += params[i].name + ':<br/> ' + (tipValueNum>2 ? (params[i].value-0).toFixed(2) : params[i].value) +xs_tipAnalyUnit[j].value[i];
                            if(params[i].percent && xs_tipAnalyUnit[j].value[i] != "%"){
                                returnValue += "&nbsp("+ params[i].percent.toFixed(2) +"%)";
                            }
                            break;
                        }
                    }
                }
            }
            return returnValue;
        }
    },
    series : [
        {
            name: '详情',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            /*label: {
                normal: {
                    show: false,
                    position:'0utside'
                }
            },*/
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
        top:30,
        right1: 0,
        itemGap: 0,
        height: 250,
        orient1: 'vertical',
        data: []
    },
    grid: {
        top:110,
        bottom: 30,
        left: 30,
        right: 30
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

var xs_pkdc_cashDetailData = {
    city:{baseInfo:"",earthInfo:"",income:"",peopleStatistic:"",majorWork:"",helpPoor:"",helpInfo:""},
    county:{baseInfo:"",earthInfo:"",income:"",peopleStatistic:"",majorWork:"",helpPoor:"",helpInfo:""},
    town:{baseInfo:"",baseStatistic:"",publicService:"",productLife:"",income:""},
    vill:{baseInfo:"",baseStatistic:"",popInfo:"",publicService:""}
};
var xs_pkdc_cashAnalyData = {
    city:{drinkWater:"",move:"",trainAnaly:"",socialProtect:"",dangerHouse:"",outPoor:"",poorReason:"",cultureDegree:""},
    county:{cultureDegree:"",poorReason:"",helpMeasure:"",fiveFour:"",fourFive:""},
    town:{cultureDegree:"",poorReason:"",helpMeasure:"",fiveFour:"",fourFive:""},
    vill:{cultureDegree:"",poorReason:"",helpMeasure:"",fiveFour:""}//,fourFive:"",outPooreVolve:""}
};

var xs_pkdc_analyMax = 0;
var xs_pkdc_btnCliDatagridObj = null;//存储不带单位的详情数据
var xs_pkdc_itemFoundJson = null;
var xs_pkdc_AnalysTabsCInit = null;
var xs_pkdc_AnalysTabsChartArr = [];
var xs_pkdc_detailTabsIndex = -1;
var xs_pkdc_detailPieMinW = 0;
var xs_pkdc_detailPieMinH = 0;
var xs_pkdc_detailDomH = 0;

//详情点击函数
XS.Main.Pkjc.clickDetail = function(level,currentName,currentId,isPkdc,cashTownVillBInfoObj){
    XS.Main.Pkjc.closeInfoDialog();
    XS.Main.Poor.clearRelocationLayer();
    xs_pkdc_AnalysTabsChartArr = [];
    xs_pkdc_detailTabsIndex = 0;
    xs_pkdc_AnalysTabsCInit = null;
    xs_pkdc_detailDomH = 524;
    var xs_pkdc_detailIndex = 0;
    XS.Main.Pkjc.minInfoWinDialog();
    var jsonObj = null;
    var data = null;
    if(level == XS.Main.ZoneLevel.city)
    {
        //(titleAttr,tabsId,position,isFit,headerWidth,plain,width,height)
        var content = XS.Main.Pkjc.tabsContent(XS.Main.Pkjc.detailKV.city.title,"xs_pkdc_detailTabs","top");
        XS.CommonUtil.openDialog("xs_main_detail", currentName + "-详情", "icon-man", content, false, true, false, 600,600,0,null,function(){
            $("#xs_main_detail").dialog("destroy");
            if(isPkdc){
                $("#xs_pkdc_msgWin").window("open");
            }
    },XS.Main.Pkjc.detailMaxCall,null,XS.Main.Pkjc.detailMinCall);
    XS.Main.addDivHover2HiddenUTFGridTip("xs_main_detail");

        $("#xs_pkdc_detailTabs").tabs({/*tabWidth:80,*/tabHeight:35});
        XS.Main.Pkjc.detailWindowTabs(0);
        if(xs_pkdc_cashDetailData.city.baseInfo){
            XS.Main.Pkjc.cityDetailShow(xs_pkdc_cashDetailData.city.baseInfo,0);
        }else{
            data = {pid:currentId};
            $("#xs_pkdc_pkBaseData_loading").css({"visibility":"visible"});
            XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, "QueryCityBaseView", data, function(json) {
                $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
                if(xs_pkdc_detailIndex != 0)return;
                if(json && json.length>0) {
                    xs_cityArea = json[0].CountArea;
                    xs_pkdc_cashDetailData.city.baseInfo = json[0];
                    XS.Main.Pkjc.cityDetailShow(json[0],0);
                }else{
                    var xs_pkdc_tabsContentDomH = $('#xs_pkdc_tabsContentDom').height() + 'px';
                    $('#xs_pkdc_tabsContentDom').empty().css({height:xs_pkdc_tabsContentDomH,lineHeight:xs_pkdc_tabsContentDomH,textAlign:"center",fontSize:"50px",color:"red"}).html("暂无相关数据");
                }
            });
        }
        $("#xs_pkdc_detailTabs").tabs({
            onSelect:function(title,index){
                xs_pkdc_AnalysTabsChartArr = [];
                var action = "";
                XS.Main.Pkjc.detailWindowTabs(index);
                xs_pkdc_detailIndex = index;
                $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
                switch(index){
                    case 0 ://基本信息
                        if(xs_pkdc_cashDetailData.city.baseInfo){
                        XS.Main.Pkjc.cityDetailShow(xs_pkdc_cashDetailData.city.baseInfo,index);
                        }else{
                            action = "QueryCityBaseView";
                        }
                        break;
                    case 1 ://土地信息
                        if(xs_pkdc_cashDetailData.city.earthInfo){
                            XS.Main.Pkjc.cityDetailShow(xs_pkdc_cashDetailData.city.earthInfo,index);
                        }else{
                            action = "QueryCityBasicStatByFId";
                        }
                        break;
                    case 2 ://经济情况
                        if(xs_pkdc_cashDetailData.city.income){
                            XS.Main.Pkjc.cityDetailShow(xs_pkdc_cashDetailData.city.income,index);
                        }else{
                            action = "QueryCityBasicStatByFId";
                        }
                        break;
                    case 3 ://人口统计
                        if(xs_pkdc_cashDetailData.city.peopleStatistic){
                            XS.Main.Pkjc.cityDetailShow(xs_pkdc_cashDetailData.city.peopleStatistic,index);
                        }else{
                            action = "QueryCityPeoCount";
                        }
                        break;
                    case 4 ://重点工作
                        if(xs_pkdc_cashDetailData.city.majorWork){
                            XS.Main.Pkjc.cityDetailShow(xs_pkdc_cashDetailData.city.majorWork,index);
                        }else{
                            action = "QueryCityFocusTen";
                        }
                        break;
                    case 5 ://专项扶
                        if(xs_pkdc_cashDetailData.city.helpPoor){
                            XS.Main.Pkjc.cityDetailShow(xs_pkdc_cashDetailData.city.helpPoor,index);
                        }else{
                            action = "QueryCityAllevStatByFId";
                        }
                        break;
                    case 6 ://扶贫信息
                        if(xs_pkdc_cashDetailData.city.helpInfo){
                            XS.Main.Pkjc.cityDetailShow(xs_pkdc_cashDetailData.city.helpInfo,index);
                        }else{
                            action = "QueryCityFoundInput";
                        }
                        break;
                }
                if(action){
                    //if(xs_pkdc_cashDetailData.city.baseInfo)
                    data = {cbsId:currentId,pd_id:currentId,casDate:currentId,pid:currentId};
                    $("#xs_pkdc_pkBaseData_loading").css({"visibility":"visible"});
                    XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, action, data, function(json) {
                        $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
                        if(xs_pkdc_detailIndex != index)return;
                        if(json) {
                            switch (index){
                                case 0://基本信息
                                    xs_cityArea = json[0].CountArea;
                                    xs_pkdc_cashDetailData.city.baseInfo = json;
                                    break;
                                case 1://土地信息
                                    xs_pkdc_cashDetailData.city.earthInfo = json;
                                    break;
                                case 2://经济收入
                                    xs_pkdc_cashDetailData.city.income = json;
                                    break;
                                case 3 ://人口统计
                                    xs_pkdc_cashDetailData.city.peopleStatistic = json;
                                    break;
                                case 4 ://重点工作
                                    xs_pkdc_cashDetailData.city.majorWork = json;
                                    break;
                                case 5 ://专项扶
                                    xs_pkdc_cashDetailData.city.helpPoor = json;
                                    break;
                                case 6 ://扶贫信息
                                    xs_pkdc_cashDetailData.city.helpInfo = json;
                                    break;
                            }
                            XS.Main.Pkjc.cityDetailShow(json,index);
                        }else{
                            var xs_pkdc_tabsContentDomH = $('#xs_pkdc_tabsContentDom').height() + 'px';
                            $('#xs_pkdc_tabsContentDom').empty().css({height:xs_pkdc_tabsContentDomH,lineHeight:xs_pkdc_tabsContentDomH,textAlign:"center",fontSize:"50px",color:"red"}).html("暂无相关数据");
                        }
                    });
                }
            }
        });
    }else if(level == XS.Main.ZoneLevel.county)
    {
        xs_pkdc_cashDetailData.county = {baseInfo:"",earthInfo:"",income:"",peopleStatistic:"",majorWork:"",helpPoor:"",helpInfo:""};
        var content = XS.Main.Pkjc.tabsContent(XS.Main.Pkjc.detailKV.county.title,"xs_pkdc_detailTabs","top",false);
        XS.CommonUtil.openDialog("xs_main_detail", currentName + "-详情", "icon-man", content, false, true, false, 600,600,0,null,function(){
            $("#xs_main_detail").dialog("destroy");
            if(isPkdc){
                $("#xs_pkdc_msgWin").window("open");
            }
        },XS.Main.Pkjc.detailMaxCall,null,XS.Main.Pkjc.detailMinCall);
        XS.Main.addDivHover2HiddenUTFGridTip("xs_main_detail");

        $("#xs_pkdc_detailTabs").tabs({/*tabWidth:106,*/tabHeight:35});
        XS.Main.Pkjc.detailWindowTabs(0);

        if(xs_pkdc_cashDetailData.county.baseInfo){
            XS.Main.Pkjc.countyDetailShow(xs_pkdc_cashDetailData.county.baseInfo,0);
        }else{
            data = {pd_id:currentId};
            $("#xs_pkdc_pkBaseData_loading").css({"visibility":"visible"});
            XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, "QueryCountyBaseInfoById", data, function(json) {
                $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
                if(xs_pkdc_detailIndex != 0)return;
                if(json) {
                    xs_pkdc_cashDetailData.county.baseInfo = json;
                    XS.Main.Pkjc.countyDetailShow(json,0);
                }else{
                    var xs_pkdc_tabsContentDomH = $('#xs_pkdc_tabsContentDom').height() + 'px';
                    $('#xs_pkdc_tabsContentDom').empty().css({height:xs_pkdc_tabsContentDomH,lineHeight:xs_pkdc_tabsContentDomH,textAlign:"center",fontSize:"50px",color:"red"}).html("暂无相关数据");
                }
            });
        }

        $("#xs_pkdc_detailTabs").tabs({
            onSelect:function(title,index){
                var action = "";
                XS.Main.Pkjc.detailWindowTabs(index);
                xs_pkdc_detailIndex = index;
                $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
                switch(index){
                    case 0 ://基本信息
                        if(xs_pkdc_cashDetailData.county.baseInfo){
                            XS.Main.Pkjc.countyDetailShow(xs_pkdc_cashDetailData.county.baseInfo,index);
                        }else{
                            action = "QueryCountyBaseInfoById";//QueryCountyBaseInfoByareaId
                        }
                        break;
                    case 1 ://土地信息
                        if(xs_pkdc_cashDetailData.county.earthInfo){
                            XS.Main.Pkjc.countyDetailShow(xs_pkdc_cashDetailData.county.earthInfo,index);
                        }else{
                            action = "QueryCountyBasicStatByFId";
                        }
                        break;
                    case 2 ://经济情况
                        if(xs_pkdc_cashDetailData.county.income){
                            XS.Main.Pkjc.countyDetailShow(xs_pkdc_cashDetailData.county.income,index);
                        }else{
                            action = "QueryCountyBasicStatByFId";
                        }
                        break;
                    case 3 ://人口统计
                        if(xs_pkdc_cashDetailData.county.peopleStatistic){
                            XS.Main.Pkjc.countyDetailShow(xs_pkdc_cashDetailData.county.peopleStatistic,index);
                        }else{
                            action = "QueryCountyPeoCount";
                        }
                        break;
                    case 4 ://重点工作
                        if(xs_pkdc_cashDetailData.county.majorWork){
                            XS.Main.Pkjc.countyDetailShow(xs_pkdc_cashDetailData.county.majorWork,index);
                        }else{
                            action = "QueryCountyFocusTen";
                        }
                        break;
                    case 5 ://专项扶贫
                        if(xs_pkdc_cashDetailData.county.helpPoor){
                            XS.Main.Pkjc.countyDetailShow(xs_pkdc_cashDetailData.county.helpPoor,index);
                        }else{
                            action = "QueryCountyAllevStatByFId";
                        }
                        break;
                    case 6 ://扶贫信息
                        if(xs_pkdc_cashDetailData.county.helpInfo){
                            XS.Main.Pkjc.countyDetailShow(xs_pkdc_cashDetailData.county.helpInfo,index);
                        }else{
                            action = "QueryCountyFoundInput";
                        }
                        break;
                }
                if(action){
                    data = {cbsId:currentId, pd_id:currentId, casDate:currentId,pid:currentId,pbno:currentId};
                    $("#xs_pkdc_pkBaseData_loading").css({"visibility":"visible"});
                    XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, action, data, function(json) {
                        $("#xs_pkdc_pkBaseData_loading").css({"visibility": "hidden"});
                        if(xs_pkdc_detailIndex != index)return;
                        if(json && (index==4|| json.length > 0)) {
                            switch (index){
                                case 0://基本信息
                                    xs_pkdc_cashDetailData.county.baseInfo = json;
                                    break;
                                case 1://土地信息
                                    xs_pkdc_cashDetailData.county.earthInfo = json;
                                    break;
                                case 2://经济收入
                                    xs_pkdc_cashDetailData.county.income = json;
                                    break;
                                case 3 ://人口统计
                                    xs_pkdc_cashDetailData.county.peopleStatistic = json;
                                    break;
                                case 4 ://重点工作
                                    xs_pkdc_cashDetailData.county.majorWork = json;
                                    break;
                                case 5 ://专项扶贫
                                    xs_pkdc_cashDetailData.county.helpPoor = json;
                                    break;
                                case 6 ://扶贫信息
                                    xs_pkdc_cashDetailData.county.helpInfo = json;
                                    break;
                            }
                            XS.Main.Pkjc.countyDetailShow(json,index);
                        }else{
                            var xs_pkdc_tabsContentDomH = $('#xs_pkdc_tabsContentDom').height() + 'px';
                            $('#xs_pkdc_tabsContentDom').empty().css({height:xs_pkdc_tabsContentDomH,lineHeight:xs_pkdc_tabsContentDomH,textAlign:"center",fontSize:"50px",color:"red"}).html("暂无相关数据");
                        }
                    });
                }
            }
        });
    }else if(level == XS.Main.ZoneLevel.town)
    {
        xs_pkdc_cashDetailData.town = {baseInfo:"",baseStatistic:"",publicService:"",productLife:"",income:""};
        if(cashTownVillBInfoObj){
            xs_pkdc_cashDetailData.town.baseInfo = cashTownVillBInfoObj;
        }
        var content = XS.Main.Pkjc.tabsContent(XS.Main.Pkjc.detailKV.town.title,"xs_pkdc_detailTabs","top",false);
        XS.CommonUtil.openDialog("xs_main_detail", currentName + "-详情", "icon-man", content, false, true, false, 600,600,0,null,function(){
            $("#xs_main_detail").dialog("destroy");
            if(isPkdc){
                $("#xs_pkdc_msgWin").window("open");
            }
        },XS.Main.Pkjc.detailMaxCall,null,XS.Main.Pkjc.detailMinCall);
        XS.Main.addDivHover2HiddenUTFGridTip("xs_main_detail");

        $("#xs_pkdc_detailTabs").tabs({/*tabWidth:215,*/tabHeight:35});
        XS.Main.Pkjc.detailWindowTabs(0);

        if(xs_pkdc_cashDetailData.town.baseInfo){
            XS.Main.Pkjc.townDetailShow(xs_pkdc_cashDetailData.town.baseInfo,0);
        }else{
            data = {pd_id:currentId};
            $("#xs_pkdc_pkBaseData_loading").css({"visibility":"visible"});
            XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, "QueryTownsBaseInfoById", data, function(json) {
                $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
                if(xs_pkdc_detailIndex != 0)return;
                if(json) {
                    xs_pkdc_cashDetailData.town.baseInfo = json;
                    XS.Main.Pkjc.townDetailShow(json,0);
                }else{
                    var xs_pkdc_tabsContentDomH = $('#xs_pkdc_tabsContentDom').height() + 'px';
                    $('#xs_pkdc_tabsContentDom').empty().css({height:xs_pkdc_tabsContentDomH,lineHeight:xs_pkdc_tabsContentDomH,textAlign:"center",fontSize:"50px",color:"red"}).html("暂无相关数据");
                }
            });
        }
        $("#xs_pkdc_detailTabs").tabs({
            onSelect: function (title, index) {
                var action = "";
                XS.Main.Pkjc.detailWindowTabs(index);
                xs_pkdc_detailIndex = index;
                $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
                switch (index) {
                    case 0 ://基本信息
                        if(xs_pkdc_cashDetailData.town.baseInfo){
                            XS.Main.Pkjc.townDetailShow(xs_pkdc_cashDetailData.town.baseInfo,index);
                        }else{
                            action = "QueryTownsBaseInfoById";
                        }
                        break;
                    case 1 ://基本统计
                        if(xs_pkdc_cashDetailData.town.baseStatistic){
                            XS.Main.Pkjc.townDetailShow(xs_pkdc_cashDetailData.town.baseStatistic,index);
                        }else{
                            action = "QueryTownsBasicStatById";
                        }
                        break;
                    case 2 ://公共服务
                        if(xs_pkdc_cashDetailData.town.publicService){
                            XS.Main.Pkjc.townDetailShow(xs_pkdc_cashDetailData.town.publicService,index);
                        }else{
                            action = "QueryTownsPubStatByTid";
                        }
                        break;
                    case 3 ://生产生活
                        if(xs_pkdc_cashDetailData.town.productLife){
                            XS.Main.Pkjc.townDetailShow(xs_pkdc_cashDetailData.town.productLife,index);
                        }else{
                            action = "QueryTownsProLivByTid";
                        }
                        break;
                    case 4 ://经济情况
                        if(xs_pkdc_cashDetailData.town.income){
                            XS.Main.Pkjc.townDetailShow(xs_pkdc_cashDetailData.town.income,index);
                        }else{
                            action = "QueryTownsBaseInfoByTid";
                        }
                        break;
                }
                if(action){
                    data = {pd_id:currentId, tid:currentId};
                    $("#xs_pkdc_pkBaseData_loading").css({"visibility":"visible"});
                    XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, action, data, function(json) {
                        $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
                        if(xs_pkdc_detailIndex != index)return;
                        if(json && (index==0 || json.length > 0)) {
                            if(xs_pkdc_detailIndex != index)return;
                            switch (index) {
                                case 0 ://基本信息
                                    xs_pkdc_cashDetailData.town.baseInfo = json;
                                    break;
                                case 1 ://基本统计
                                    xs_pkdc_cashDetailData.town.baseStatistic = json;
                                    break;
                                case 2 ://公共服务
                                    xs_pkdc_cashDetailData.town.publicService = json;
                                    break;
                                case 3 ://生产生活
                                    xs_pkdc_cashDetailData.town.productLife = json;
                                    break;
                                case 4 ://生产生活
                                    xs_pkdc_cashDetailData.town.income = json;
                                    break;
                            }
                            XS.Main.Pkjc.townDetailShow(json,index);
                        }else{
                            var xs_pkdc_tabsContentDomH = $('#xs_pkdc_tabsContentDom').height() + 'px';
                            $('#xs_pkdc_tabsContentDom').empty().css({height:xs_pkdc_tabsContentDomH,lineHeight:xs_pkdc_tabsContentDomH,textAlign:"center",fontSize:"50px",color:"red"}).html("暂无相关数据");
                        }
                    });
                }
            }
        });
    }else if(level == XS.Main.ZoneLevel.village)
    {
        xs_pkdc_cashDetailData.vill = {baseInfo:"",baseStatistic:"",popInfo:"",publicService:""};
        if(cashTownVillBInfoObj){
            xs_pkdc_cashDetailData.vill.baseInfo = cashTownVillBInfoObj;
        }
        var content = XS.Main.Pkjc.tabsContent(XS.Main.Pkjc.detailKV.village.title,"xs_pkdc_detailTabs","top",false);
        XS.CommonUtil.openDialog("xs_main_detail", currentName + "-详情", "icon-man", content, false, true, false, 600,600,0,null,function(){
            $("#xs_main_detail").dialog("destroy");
            if(isPkdc){
                $("#xs_pkdc_msgWin").window("open");
            }
        },XS.Main.Pkjc.detailMaxCall,null,XS.Main.Pkjc.detailMinCall);
        XS.Main.addDivHover2HiddenUTFGridTip("xs_main_detail");

        $("#xs_pkdc_detailTabs").tabs({/*tabWidth:215,*/tabHeight:35});
        XS.Main.Pkjc.detailWindowTabs(0);
        if(xs_pkdc_cashDetailData.vill.baseInfo){
            XS.Main.Pkjc.villDetailShow(xs_pkdc_cashDetailData.vill.baseInfo,0);
        }else{
            data = {pid:currentId};
            $("#xs_pkdc_pkBaseData_loading").css({"visibility":"visible"});
            XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, "QueryVillBaseInfoByPId", data, function(json) {
                $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
                if(xs_pkdc_detailIndex != 0)return;
                if(json && json.length>0) {
                    xs_pkdc_cashDetailData.vill.baseInfo = json;
                    XS.Main.Pkjc.villDetailShow(xs_pkdc_cashDetailData.vill.baseInfo,0);
                }else{
                    var xs_pkdc_tabsContentDomH = $('#xs_pkdc_tabsContentDom').height() + 'px';
                    $('#xs_pkdc_tabsContentDom').empty().css({height:xs_pkdc_tabsContentDomH,lineHeight:xs_pkdc_tabsContentDomH,textAlign:"center",fontSize:"50px",color:"red"}).html("暂无相关数据");
                }
            });
        }
        $("#xs_pkdc_detailTabs").tabs({
            onSelect: function (title, index) {
                var action = "";
                XS.Main.Pkjc.detailWindowTabs(index);
                xs_pkdc_detailIndex = index;
                $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
                switch (index) {
                    case 0 ://基本信息
                        if(xs_pkdc_cashDetailData.vill.baseInfo){
                            XS.Main.Pkjc.villDetailShow(xs_pkdc_cashDetailData.vill.baseInfo,index);
                        }else{
                            action = "QueryVillBaseInfoByPId";
                        }
                        break;
                    case 1://基本统计
                        if(xs_pkdc_cashDetailData.vill.baseStatistic){
                            XS.Main.Pkjc.villDetailShow(xs_pkdc_cashDetailData.vill.baseStatistic,index);
                        }else{
                            action = "QueryVillBaseInfoByPId";
                        }
                        break;
                    case 2://人口信息
                        if(xs_pkdc_cashDetailData.vill.popInfo){
                            XS.Main.Pkjc.villDetailShow(xs_pkdc_cashDetailData.vill.popInfo,index);
                        }else{
                            action = "QueryVillBaseInfoByPId";
                        }
                        break;
                    case 3://公共服务
                        if(xs_pkdc_cashDetailData.vill.publicService){
                            XS.Main.Pkjc.villDetailShow(xs_pkdc_cashDetailData.vill.publicService,index);
                        }else{
                            action = "QueryVillDinamicInfoByPId";
                        }
                        break;
                }
                if(action){
                    data = {pd_id:currentId,pid:currentId};
                    $("#xs_pkdc_pkBaseData_loading").css({"visibility":"visible"});
                    XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, action, data, function(json) {
                        $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
                        if(xs_pkdc_detailIndex != index)return;
                        if(json && (index==0 || json.length > 0)) {
                            switch (index) {
                                case 0 ://基本信息
                                    xs_pkdc_cashDetailData.vill.baseInfo = json;
                                    XS.Main.Pkjc.villDetailShow(json,index);
                                    break;
                                case 1://基本统计
                                    data = {pid:currentId};
                                    $("#xs_pkdc_pkBaseData_loading").css({"visibility":"visible"});
                                    XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, "QueryVillDinamicInfoByPId", data, function(jsonData) {
                                        $("#xs_pkdc_pkBaseData_loading").css({"visibility": "hidden"});
                                        if(jsonData && jsonData.length>0){
                                            var villFiled = XS.Main.Pkjc.detailKV.village.tabs[1].value;
                                            for(var i=8;i<villFiled.length;i++){
                                                json[0][villFiled[i]] = jsonData[0][villFiled[i]];
                                            }
                                            xs_pkdc_cashDetailData.vill.baseStatistic = json;
                                            XS.Main.Pkjc.villDetailShow(json,index);
                                        }else{
                                            var xs_pkdc_tabsContentDomH = $('#xs_pkdc_tabsContentDom').height() + 'px';
                                            $('#xs_pkdc_tabsContentDom').empty().css({height:xs_pkdc_tabsContentDomH,lineHeight:xs_pkdc_tabsContentDomH,textAlign:"center",fontSize:"50px",color:"red"}).html("暂无相关数据");
                                        }
                                    },function(){
                                        $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
                                        XS.CommonUtil.showMsgDialog("","请求失败");
                                    });
                                    break;
                                case 2://人口信息
                                    xs_pkdc_cashDetailData.vill.popInfo = json;
                                    XS.Main.Pkjc.villDetailShow(json,index);
                                    break;
                                case 3://公共服务
                                    xs_pkdc_cashDetailData.vill.publicService = json;
                                    XS.Main.Pkjc.villDetailShow(json,index);
                                    break;
                            }
                        }else{
                            var xs_pkdc_tabsContentDomH = $('#xs_pkdc_tabsContentDom').height() + 'px';
                            $('#xs_pkdc_tabsContentDom').empty().css({height:xs_pkdc_tabsContentDomH,lineHeight:xs_pkdc_tabsContentDomH,textAlign:"center",fontSize:"50px",color:"red"}).html("暂无相关数据");
                        }
                    },function(){
                        $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
                        XS.CommonUtil.showMsgDialog("","请求失败");
                    });
                }
            }
        });
    }
}
// 数据分析点击函数
XS.Main.Pkjc.clickAnalysis = function(level,currentCode,currentName,ispkdc){
    XS.Main.Pkjc.closeInfoDialog();
    XS.Main.Poor.clearRelocationLayer();
    if(!xs_isClickMapFinish){
        XS.CommonUtil.showMsgDialog("","数据加载未完成，请耐心等待");
        return;
    }
    XS.Main.hiddenLayers();
    XS.Main.Poor.clearRelocationLayer();
    XS.Main.clearMap();
    XS.Main.Pkjc.closeInfoDialog();
    xs_pkdc_AnalysTabsCInit = null;
    xs_pkdc_isAnalysMax = false;
    xs_pkdc_AnalysTabsChartArr = [];
    XS.Main.Pkjc.minInfoWinDialog();
    var xs_pkdc_analyIndex = 0;
    if(level == XS.Main.ZoneLevel.city)//(titleAttr,tabsId,position,isFit,plain,width,height,headerWidth,tabHeight)
    {
        var tabTile = ["饮水分析","易地搬迁","培训分析","社会保障","危房情况","脱贫分析","致贫原因","文化程度"];
        var content = '<div id="xs_pkdc_AnalysTabsC" style="padding: 2px 2px 2px 0px;box-sizing: border-box;height: 100%;">' +
                XS.Main.Pkjc.tabsContent(tabTile,"xs_pkdc_AnalysTabs","left",true,true,585,560,90,40) +
            '</div>';
        $("#xs_pkdc_AnalysTabs").css({boxSizing: "border-box"});
        XS.CommonUtil.openDialog("xs_main_detail", currentName + "-贫困数据分析", "icon-man", content, false, true, false, 700,600,0,null,function(){
            $("#xs_main_detail").dialog("destroy");
            if(ispkdc){
                $("#xs_pkdc_msgWin").window("open");
            }
        },XS.Main.Pkjc.ItemFoundMaxCall,null,XS.Main.Pkjc.ItemFoundMinCall);
        XS.Main.addDivHover2HiddenUTFGridTip("xs_main_detail");

       selectTab = $("#xs_pkdc_AnalysTabs").tabs("getTab",0);
        selectTab.empty().append('<div id="xs_pkdc_AnalysTabsChartC" style="width:100%;height: 100%;overflow-x: hidden;overflow-y1: hidden;box-sizing: border-box;border1: 1px solid green;;">' +
                '<div id="xs_pkdc_AnalysTabsChart" style="width:610px;height: 100%;overflow-x1: hidden;overflow-y1: hidden;box-sizing: border-box;border1: 1px solid green;"></div>' +
            '</div>');

        if(xs_pkdc_cashAnalyData.city.drinkWater){
            XS.Main.Pkjc.cityAnalyShow (xs_pkdc_cashAnalyData.city.drinkWater,0);
        }else{
            var data = {pd_id:currentCode};
            $("#xs_pkdc_pkBaseData_loading").css({"visibility":"visible"});
            XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, "QueryUnSafeWaterBycount", data, function(json) {
                $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
                if(xs_pkdc_analyIndex != 0)return;
                if(json && json.length>0){
                    xs_pkdc_cashAnalyData.city.drinkWater = json;
                    XS.Main.Pkjc.cityAnalyShow (xs_pkdc_cashAnalyData.city.drinkWater,0);
                }else{
                    var xs_pkdc_AnalysTabsChartH = $('#xs_pkdc_AnalysTabsChart').height() + 'px';
                    $('#xs_pkdc_AnalysTabsChart').empty().css({height:xs_pkdc_AnalysTabsChartH,lineHeight:xs_pkdc_AnalysTabsChartH,textAlign:"center",fontSize:"50px",color:"red"}).html("暂无相关数据");
                }
            });
        }
        $("#xs_pkdc_AnalysTabs").tabs({
            onSelect:function(title,index){
                xs_pkdc_AnalysTabsCInit = null;
                xs_pkdc_AnalysTabsChartArr = [];
                xs_pkdc_analyIndex = index;
                var action = "";
                $("#xs_pkdc_AnalysTabsChartC").remove();
                selectTab = $("#xs_pkdc_AnalysTabs").tabs("getTab",index);

                selectTab.empty().append('<div id="xs_pkdc_AnalysTabsChartC" style="width:100%;height: 100%;overflow-x: hidden;overflow-y1: hidden;box-sizing: border-box;">' +
                    '<div id="xs_pkdc_AnalysTabsChart" style="width:610px;height: 100%;overflow-x1: hidden;overflow-y1: hidden;box-sizing: border-box;border1: 1px solid green;"></div>' +
                    '</div>');
                if(xs_pkdc_isAnalysMax){
                    $("#xs_pkdc_AnalysTabsChart").css({width:"100%"});
                }
                $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
                switch(index){
                    case 0 ://饮水分析
                        if(xs_pkdc_cashAnalyData.city.drinkWater){
                            XS.Main.Pkjc.cityAnalyShow (xs_pkdc_cashAnalyData.city.drinkWater,index);
                        }else{
                            action = "QueryUnSafeWaterBycount";
                        }
                        break;
                    case 1 ://易地搬迁
                        if(xs_pkdc_cashAnalyData.city.move){
                            XS.Main.Pkjc.cityAnalyShow(xs_pkdc_cashAnalyData.city.move,index);
                        }else{
                            action = "QueryMovePoorBycount";
                        }
                        break;
                    case 2 ://培训分析
                        if(xs_pkdc_cashAnalyData.city.trainAnaly){
                            XS.Main.Pkjc.cityAnalyShow(xs_pkdc_cashAnalyData.city.trainAnaly,index);
                        }else{
                            action = "QueryTrainCountBycounty";
                        }
                        break;
                    case 3 ://社会保障
                        if(xs_pkdc_cashAnalyData.city.socialProtect){
                            XS.Main.Pkjc.cityAnalyShow(xs_pkdc_cashAnalyData.city.socialProtect,index);
                        }else{
                            action = "QuerySocityProtectBycounty";
                        }
                        break;
                    case 4 ://危房情况
                        if(xs_pkdc_cashAnalyData.city.dangerHouse){
                            XS.Main.Pkjc.cityAnalyShow(xs_pkdc_cashAnalyData.city.dangerHouse,index);
                        }else{
                            action = "QueryDangerHouseBycount";
                        }
                        break;
                    case 5 ://脱贫分析
                        if(xs_pkdc_cashAnalyData.city.outPoor){
                            XS.Main.Pkjc.cityAnalyShow(xs_pkdc_cashAnalyData.city.outPoor,index);
                        }else{
                            action = "QueryOutPoorBycount";
                        }
                        break;
                    case 6 ://致贫原因
                        if(xs_pkdc_cashAnalyData.city.poorReason){
                            XS.Main.Pkjc.cityAnalyShow(xs_pkdc_cashAnalyData.city.poorReason,index);
                        }else{
                            action = "QueryGroupbyReasonById";
                        }
                        break;
                    case 7 ://文化程度
                        if(xs_pkdc_cashAnalyData.city.cultureDegree){
                            XS.Main.Pkjc.cityAnalyShow(xs_pkdc_cashAnalyData.city.cultureDegree,index);
                        }else{
                            action = "QueryGroupbyeduById";
                        }
                        break;
                }
                if(action){
                    data = {pd_id:currentCode,pid:currentCode};
                    $("#xs_pkdc_pkBaseData_loading").css({"visibility":"visible"});
                    XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, action, data, function(json) {
                        $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
                        if(xs_pkdc_analyIndex != index)return;
                        if (json && json.length > 0){
                            switch(index){
                                case 0 ://饮水分析
                                    xs_pkdc_cashAnalyData.city.drinkWater = json;
                                    break;
                                case 1 ://易地搬迁
                                    xs_pkdc_cashAnalyData.city.move = json;
                                    break;
                                case 2 ://培训分析
                                    xs_pkdc_cashAnalyData.city.trainAnaly = json;
                                    break;
                                case 3 ://社会保障
                                    xs_pkdc_cashAnalyData.city.socialProtect = json;
                                    break;
                                case 4 ://危房情况
                                    xs_pkdc_cashAnalyData.city.dangerHouse = json;
                                    break;
                                case 5 ://脱贫分析
                                    xs_pkdc_cashAnalyData.city.outPoor = json;
                                    break;
                                case 6 ://致贫原因
                                    xs_pkdc_cashAnalyData.city.poorReason = json;
                                    break;
                                case 7 ://文化程度
                                    xs_pkdc_cashAnalyData.city.cultureDegree = json;
                                    break;
                            }
                            XS.Main.Pkjc.cityAnalyShow(json,index);
                        }else{
                            var xs_pkdc_AnalysTabsChartH = $('#xs_pkdc_AnalysTabsChart').height() + 'px';
                            $('#xs_pkdc_AnalysTabsChart').empty().css({height:xs_pkdc_AnalysTabsChartH,lineHeight:xs_pkdc_AnalysTabsChartH,textAlign:"center",fontSize:"50px",color:"red"}).html("暂无相关数据");
                        }
                    });
                }
            }
        });
    }else if(level == XS.Main.ZoneLevel.county)
    {
        xs_pkdc_cashAnalyData.county = {cultureDegree:"",poorReason:"",helpMeasure:"",fiveFour:"",fourFive:""};
        xs_pkdc_AnalysTabsCInit = null;
        xs_pkdc_AnalysTabsChartArr = [];
        var tabTile = ["文化程度", "致贫原因", "帮扶措施", "五通(五四)", "四有(五四)", "四有(四五)", "五覆盖(四五)"];
        var content = '<div style="padding: 2px 2px 2px 0px;box-sizing: border-box;height: 100%;">' +
                XS.Main.Pkjc.tabsContent(tabTile,"xs_pkdc_AnalysTabs","left",true,true,800,545,90,40) +
            '</div>';
        $("#xs_pkdc_AnalysTabs").css({boxSizing: "border-box"});
        XS.CommonUtil.openDialog("xs_main_detail", currentName + "-贫困数据分析", "icon-man", content, false, true, false, 700,600,0,null,function(){
            $("#xs_main_detail").dialog("destroy");
            if(ispkdc){
                $("#xs_pkdc_msgWin").window("open");
            }
        },XS.Main.Pkjc.ItemFoundMaxCall,null,XS.Main.Pkjc.ItemFoundMinCall);
        XS.Main.addDivHover2HiddenUTFGridTip("xs_main_detail");

        var selectTab = $("#xs_pkdc_AnalysTabs").tabs("getTab", 0);
        selectTab.empty().append('<div id="xs_pkdc_AnalysTabsChartC" style="width:100%;height: 100%;overflow-x: hidden;overflow-y1: hidden;box-sizing: border-box;border1: 1px solid green;;">' +
            '<div id="xs_pkdc_AnalysTabsChart" style="width:610px;height: 100%;overflow-x1: hidden;overflow-y1: hidden;box-sizing: border-box;border1: 1px solid green;"></div>' +
            '</div>');
        //文化程度
        if(xs_pkdc_cashAnalyData.county.cultureDegree){
            XS.Main.Pkjc.countyAnalyShow(xs_pkdc_cashAnalyData.county.cultureDegree,0);
        }else{
            var data = {pid: currentCode};
            $("#xs_pkdc_pkBaseData_loading").css({"visibility":"visible"});
            XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, "QueryGroupbyeduById", data, function (json) {
                $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
                if(xs_pkdc_analyIndex != 0)return;
                if (json && json.length > 0) {
                    xs_pkdc_cashAnalyData.county.cultureDegree = json;
                    XS.Main.Pkjc.countyAnalyShow(xs_pkdc_cashAnalyData.county.cultureDegree,0);
                }else{
                    var xs_pkdc_AnalysTabsChartH = $('#xs_pkdc_AnalysTabsChart').height() + 'px';
                    $('#xs_pkdc_AnalysTabsChart').empty().css({height:xs_pkdc_AnalysTabsChartH,lineHeight:xs_pkdc_AnalysTabsChartH,textAlign:"center",fontSize:"50px",color:"red"}).html("暂无相关数据");
                }
            });
        }
        $("#xs_pkdc_AnalysTabs").tabs({
            onSelect: function (title, index) {
                xs_pkdc_AnalysTabsCInit = null;
                xs_pkdc_AnalysTabsChartArr = [];
                xs_pkdc_analyIndex = index;
                var action = "";
                $("#xs_pkdc_AnalysTabsChartC").remove();
                selectTab = $("#xs_pkdc_AnalysTabs").tabs("getTab", index);
                selectTab.empty().append('<div id="xs_pkdc_AnalysTabsChartC" style="width:100%;height: 100%;overflow-x: hidden;overflow-y1: hidden;box-sizing: border-box;border1: 1px solid green;;">' +
                    '<div id="xs_pkdc_AnalysTabsChart" style="width:610px;height: 100%;overflow-x1: hidden;overflow-y1: hidden;box-sizing: border-box;border1: 1px solid green;"></div>' +
                    '</div>');
                if(xs_pkdc_isAnalysMax){
                    $("#xs_pkdc_AnalysTabsChart").css({width:"100%"});
                }
                $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
                switch(index){
                    case 0 ://文化程度
                        if(xs_pkdc_cashAnalyData.county.cultureDegree){
                            XS.Main.Pkjc.countyAnalyShow(xs_pkdc_cashAnalyData.county.cultureDegree,index);
                        }else{
                            action = "QueryGroupbyReasonById";
                        }
                        break;
                    case 1 ://致贫原因
                        if(xs_pkdc_cashAnalyData.county.poorReason){
                            XS.Main.Pkjc.countyAnalyShow(xs_pkdc_cashAnalyData.county.poorReason,index);
                        }else{
                            action = "QueryGroupbyReasonById";
                        }
                        break;
                    case 2 ://帮扶措施
                        if(xs_pkdc_cashAnalyData.county.helpMeasure){
                            XS.Main.Pkjc.countyAnalyShow(xs_pkdc_cashAnalyData.county.helpMeasure,index);
                        }else{
                            action = "QueryCountyPopStatByTid";
                        }
                        break;
                    case 3 ://五通(五四)
                        if(xs_pkdc_cashAnalyData.county.fiveFour){
                            XS.Main.Pkjc.countyAnalyShow(xs_pkdc_cashAnalyData.county.fiveFour,index);
                        }else{
                            action = "QueryVillFiveFourByCountByAreaId";
                        }
                        break;
                    case 4 ://四有(五四)
                        if(xs_pkdc_cashAnalyData.county.fiveFour){
                            XS.Main.Pkjc.countyAnalyShow(xs_pkdc_cashAnalyData.county.fiveFour,index);
                        }else{
                            action = "QueryVillFiveFourByCountByAreaId";
                        }
                        break;
                    case 5 ://四有(四五)
                        if(xs_pkdc_cashAnalyData.county.fourFive){
                            XS.Main.Pkjc.countyAnalyShow(xs_pkdc_cashAnalyData.county.fourFive,index);
                        }else{
                            action = "QueryFourFiveByAreaId";
                        }
                        break;
                    case 6 ://五覆盖(四五)
                        if(xs_pkdc_cashAnalyData.county.fourFive){
                            XS.Main.Pkjc.countyAnalyShow(xs_pkdc_cashAnalyData.county.fourFive,index);
                        }else{
                            action = "QueryFourFiveByAreaId";
                        }
                        break;
                }
                if(action){
                    data = {cid:currentCode,pd_id:currentCode,pid:currentCode};
                    $("#xs_pkdc_pkBaseData_loading").css({"visibility":"visible"});
                    XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, action, data, function(json) {
                        $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
                        if(xs_pkdc_analyIndex != index)return;
                        if (json && json.length > 0) {
                            switch(index){
                                case 0 ://文化程度
                                    xs_pkdc_cashAnalyData.county.cultureDegree = json;
                                    break;
                                case 1 ://致贫原因
                                    xs_pkdc_cashAnalyData.county.poorReason = json;
                                    break;
                                case 2 ://帮扶措施
                                    xs_pkdc_cashAnalyData.county.helpMeasure = json;
                                    break;
                                case 3 ://五通(五四)
                                case 4 ://四有(五四)
                                    xs_pkdc_cashAnalyData.county.fiveFour = json;
                                    break;
                                case 5 ://四有(四五)
                                case 6 ://五覆盖(四五)
                                    xs_pkdc_cashAnalyData.county.fourFive = json;
                                    break;
                            }
                            XS.Main.Pkjc.countyAnalyShow(json,index);
                        }else{
                            var xs_pkdc_AnalysTabsChartH = $('#xs_pkdc_AnalysTabsChart').height() + 'px';
                            $('#xs_pkdc_AnalysTabsChart').empty().css({height:xs_pkdc_AnalysTabsChartH,lineHeight:xs_pkdc_AnalysTabsChartH,textAlign:"center",fontSize:"50px",color:"red"}).html("暂无相关数据");
                        }
                    });
                }
            }
        });
    }else if(level == XS.Main.ZoneLevel.town)
    {
        xs_pkdc_cashAnalyData.town = {cultureDegree:"",poorReason:"",helpMeasure:"",fiveFour:"",fourFive:""};
        xs_pkdc_AnalysTabsCInit = null;
        xs_pkdc_AnalysTabsChartArr = [];
        var tabTile = ["文化程度", "致贫原因", "帮扶措施", "五通(五四)", "四有(五四)", "四有(四五)", "五覆盖(四五)"];
        var content = '<div style="padding:  2px 2px 2px 0px;box-sizing: border-box;height: 100%;">' +
            XS.Main.Pkjc.tabsContent(tabTile,"xs_pkdc_AnalysTabs","left",true,true,800,545,90,40) +
            '</div>';
        XS.CommonUtil.openDialog("xs_main_detail", currentName + "-贫困数据分析", "icon-man", content, false, true, false, 700,600,0,null,function(){
            $("#xs_main_detail").dialog("destroy");
            if(ispkdc){
                $("#xs_pkdc_msgWin").window("open");
            }
        },XS.Main.Pkjc.ItemFoundMaxCall,null,XS.Main.Pkjc.ItemFoundMinCall);
        XS.Main.addDivHover2HiddenUTFGridTip("xs_main_detail");

        var selectTab = $("#xs_pkdc_AnalysTabs").tabs("getTab", 0);
        selectTab.empty().append('<div id="xs_pkdc_AnalysTabsChartC" style="width:100%;height: 100%;overflow-x: hidden;overflow-y1: hidden;box-sizing: border-box;border1: 1px solid green;;">' +
            '<div id="xs_pkdc_AnalysTabsChart" style="width:610px;height: 100%;overflow-x1: hidden;overflow-y1: hidden;box-sizing: border-box;border1: 1px solid green;"></div>' +
            '</div>');
        //文化程度
        if(xs_pkdc_cashAnalyData.town.cultureDegree){
            XS.Main.Pkjc.townAnalyShow(xs_pkdc_cashAnalyData.town.cultureDegree,0);
        }else{
            var data = {pid:currentCode};
            $("#xs_pkdc_pkBaseData_loading").css({"visibility":"visible"});
            XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, "QueryGroupbyeduById", data, function(json) {
                $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
                if(xs_pkdc_analyIndex != 0)return;
                if (json && json.length > 0) {
                    xs_pkdc_cashAnalyData.town.cultureDegree = json;
                    XS.Main.Pkjc.townAnalyShow(xs_pkdc_cashAnalyData.town.cultureDegree,0);
                }else{
                    var xs_pkdc_AnalysTabsChartH = $('#xs_pkdc_AnalysTabsChart').height() + 'px';
                    $('#xs_pkdc_AnalysTabsChart').empty().css({height:xs_pkdc_AnalysTabsChartH,lineHeight:xs_pkdc_AnalysTabsChartH,textAlign:"center",fontSize:"50px",color:"red"}).html("暂无相关数据");
                }
            });
        }
        $("#xs_pkdc_AnalysTabs").tabs({
            onSelect: function (title, index) {
                xs_pkdc_AnalysTabsCInit = null;
                xs_pkdc_AnalysTabsChartArr = [];
                xs_pkdc_analyIndex = index;
                var action = "";
                $("#xs_pkdc_AnalysTabsChartC").remove();
                selectTab = $("#xs_pkdc_AnalysTabs").tabs("getTab", index);
                selectTab.empty().append('<div id="xs_pkdc_AnalysTabsChartC" style="width:100%;height: 100%;overflow-x: hidden;overflow-y1: hidden;box-sizing: border-box;border1: 1px solid green;;">' +
                    '<div id="xs_pkdc_AnalysTabsChart" style="width:610px;height: 100%;overflow-x1: hidden;overflow-y1: hidden;box-sizing: border-box;border1: 1px solid green;"></div>' +
                    '</div>');
                if(xs_pkdc_isAnalysMax){
                    $("#xs_pkdc_AnalysTabsChart").css({width:"100%"});
                }
                $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
                switch(index){
                    case 0 ://文化程度
                        if(xs_pkdc_cashAnalyData.town.cultureDegree){
                            XS.Main.Pkjc.townAnalyShow(xs_pkdc_cashAnalyData.town.cultureDegree,index);
                        }else{
                            action = "QueryGroupbyeduById";
                        }
                        break;
                    case 1 ://致贫原因
                        if(xs_pkdc_cashAnalyData.town.poorReason){
                            XS.Main.Pkjc.townAnalyShow(xs_pkdc_cashAnalyData.town.poorReason,index);
                        }else{
                            action = "QueryGroupbyReasonById";
                        }
                        break;
                    case 2 ://帮扶措施
                        if(xs_pkdc_cashAnalyData.town.helpMeasure){
                            XS.Main.Pkjc.townAnalyShow(xs_pkdc_cashAnalyData.town.helpMeasure,index);
                        }else{
                            action = "QueryTownsBasicStatByTid";
                        }
                        break;
                    case 3 ://五通(五四)
                        if(xs_pkdc_cashAnalyData.town.fiveFour){
                            XS.Main.Pkjc.townAnalyShow(xs_pkdc_cashAnalyData.town.fiveFour,index);
                        }else{
                            action = "QueryVillFiveFourByCountByAreaId";
                        }
                        break;
                    case 4 ://四有(五四)
                        if(xs_pkdc_cashAnalyData.town.fiveFour){
                            XS.Main.Pkjc.townAnalyShow(xs_pkdc_cashAnalyData.town.fiveFour,index);
                        }else{
                            action = "QueryVillFiveFourByCountByAreaId";
                        }
                        break;
                    case 5 ://四有(四五)
                        if(xs_pkdc_cashAnalyData.town.fourFive){
                            XS.Main.Pkjc.townAnalyShow(xs_pkdc_cashAnalyData.town.fourFive,index);
                        }else{
                            action = "QueryFourFiveByAreaId";
                        }
                        break;
                    case 6 ://五覆盖(四五)
                        if(xs_pkdc_cashAnalyData.town.fourFive){
                            XS.Main.Pkjc.townAnalyShow(xs_pkdc_cashAnalyData.town.fourFive,index);
                        }else{
                            action = "QueryFourFiveByAreaId";
                        }
                        break;
                }
                if(action){
                    data = {pd_id:currentCode,pid:currentCode,cid:currentCode};
                    $("#xs_pkdc_pkBaseData_loading").css({"visibility":"visible"});
                    XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, action, data, function(json) {
                        $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
                        if(xs_pkdc_analyIndex != index)return;
                        if (json && json.length > 0) {
                            switch(index){
                                case 0 ://文化程度
                                    xs_pkdc_cashAnalyData.town.cultureDegree = json;
                                    break;
                                case 1 ://致贫原因
                                    xs_pkdc_cashAnalyData.town.poorReason = json;
                                    break;
                                case 2 ://帮扶措施
                                    xs_pkdc_cashAnalyData.town.helpMeasure = json;
                                    break;
                                case 3 ://五通(五四)
                                case 4 ://四有(五四)
                                    xs_pkdc_cashAnalyData.town.fiveFour = json;
                                    break;
                                case 5 ://四有(四五)
                                case 6 ://五覆盖(四五)
                                    xs_pkdc_cashAnalyData.town.fourFive = json;
                                    break;
                            }
                            XS.Main.Pkjc.townAnalyShow(json,index);
                        }else{
                            var xs_pkdc_AnalysTabsChartH = $('#xs_pkdc_AnalysTabsChart').height() + 'px';
                            $('#xs_pkdc_AnalysTabsChart').empty().css({height:xs_pkdc_AnalysTabsChartH,lineHeight:xs_pkdc_AnalysTabsChartH,textAlign:"center",fontSize:"50px",color:"red"}).html("暂无相关数据");
                        }
                    });
                }
            }
        });
    }else if(level == XS.Main.ZoneLevel.village)
    {
        xs_pkdc_cashAnalyData.vill = {cultureDegree:"",poorReason:"",helpMeasure:"",fiveFour:""}//,fourFive:"",outPooreVolve:""};
        xs_pkdc_AnalysTabsCInit = null;
        xs_pkdc_AnalysTabsChartArr = [];
        var tabTile = ["文化程度", "致贫原因", "帮扶措施", "五通四有"]//, "四有五覆盖","脱贫进展"];
        var content = '<div style="padding: 2px 2px 2px 0px;box-sizing: border-box;height: 100%;">' +
            XS.Main.Pkjc.tabsContent(tabTile,"xs_pkdc_AnalysTabs","left",true,true,800,545,90,40) +
            '</div>';
        XS.CommonUtil.openDialog("xs_main_detail", currentName + "-贫困数据分析", "icon-man", content, false, true, false, 700,600,0,null,function(){
            $("#xs_main_detail").dialog("destroy");
            if(ispkdc){
                $("#xs_pkdc_msgWin").window("open");
            }
        },XS.Main.Pkjc.ItemFoundMaxCall,null,XS.Main.Pkjc.ItemFoundMinCall);
        XS.Main.addDivHover2HiddenUTFGridTip("xs_main_detail");

        var selectTab = $("#xs_pkdc_AnalysTabs").tabs("getTab", 0);
        selectTab.empty().append('<div id="xs_pkdc_AnalysTabsChartC" style="width:100%;height: 100%;overflow-x: hidden;overflow-y1: hidden;box-sizing: border-box;border1: 1px solid green;;">' +
            '<div id="xs_pkdc_AnalysTabsChart" style="width:610px;height: 100%;overflow-x1: hidden;overflow-y1: hidden;box-sizing: border-box;border1: 1px solid green;"></div>' +
            '</div>');
        //文化程度
        if(xs_pkdc_cashAnalyData.vill.cultureDegree){
            XS.Main.Pkjc.villAnalyShow(xs_pkdc_cashAnalyData.vill.cultureDegree,0);
        }else{
            var data = {pid:currentCode};
            $("#xs_pkdc_pkBaseData_loading").css({"visibility":"visible"});
            XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, "QueryGroupbyeduById", data, function(json) {
                $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
                if(xs_pkdc_analyIndex != 0)return;
                if (json && json.length > 0) {
                    xs_pkdc_cashAnalyData.vill.cultureDegree = json;
                    XS.Main.Pkjc.villAnalyShow(xs_pkdc_cashAnalyData.vill.cultureDegree,0);
                }else{
                    var xs_pkdc_AnalysTabsChartH = $('#xs_pkdc_AnalysTabsChart').height() + 'px';
                    $('#xs_pkdc_AnalysTabsChart').empty().css({height:xs_pkdc_AnalysTabsChartH,lineHeight:xs_pkdc_AnalysTabsChartH,textAlign:"center",fontSize:"50px",color:"red"}).html("暂无相关数据");
                }
            });
        }
        $("#xs_pkdc_AnalysTabs").tabs({
            onSelect: function (title, index) {
                xs_pkdc_AnalysTabsCInit = null;
                xs_pkdc_AnalysTabsChartArr = [];
                xs_pkdc_analyIndex = index;
                var action = "";
                $("#xs_pkdc_AnalysTabsChartC").remove();
                selectTab = $("#xs_pkdc_AnalysTabs").tabs("getTab", index);
                selectTab.empty().append('<div id="xs_pkdc_AnalysTabsChartC" style="width:100%;height: 100%;overflow-x: hidden;overflow-y1: hidden;box-sizing: border-box;border1: 1px solid green;;">' +
                    '<div id="xs_pkdc_AnalysTabsChart" style="width:610px;height: 100%;overflow-x1: hidden;overflow-y1: hidden;box-sizing: border-box;border1: 1px solid green;"></div>' +
                    '</div>');
                if(xs_pkdc_isAnalysMax){
                    $("#xs_pkdc_AnalysTabsChart").css({width:"100%"});
                }
                $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
                switch(index){
                    case 0 ://文化程度
                        if(xs_pkdc_cashAnalyData.vill.cultureDegree){
                            XS.Main.Pkjc.villAnalyShow(xs_pkdc_cashAnalyData.vill.cultureDegree,index);
                        }else{
                            action = "QueryGroupbyeduById";
                        }
                        break;
                    case 1 ://致贫原因
                        if(xs_pkdc_cashAnalyData.vill.poorReason){
                            XS.Main.Pkjc.villAnalyShow(xs_pkdc_cashAnalyData.vill.poorReason,index);
                        }else{
                            action = "QueryGroupbyReasonById";
                        }
                        break;
                    case 2 ://帮扶措施
                        if(xs_pkdc_cashAnalyData.vill.helpMeasure){
                            XS.Main.Pkjc.villAnalyShow(xs_pkdc_cashAnalyData.vill.helpMeasure,index);
                        }else{
                            action = "QueryVillCountByTid";
                        }
                        break;
                    case 3 ://五通四有
                        if(xs_pkdc_cashAnalyData.vill.fiveFour){
                            XS.Main.Pkjc.villAnalyShow(xs_pkdc_cashAnalyData.vill.fiveFour,index);
                        }else{
                            action = "QueryVillFiveFourById";
                        }
                        break;
                    /*case 4 ://四有五覆盖
                        if(xs_pkdc_cashAnalyData.vill.fourFive){
                            XS.Main.Pkjc.villAnalyShow(xs_pkdc_cashAnalyData.vill.fourFive,index);
                        }else{
                            action = "QueryFourFiveByAreaId";
                        }
                        break;
                    case 5 ://脱贫进展
                        if(xs_pkdc_cashAnalyData.vill.outPooreVolve){
                            XS.Main.Pkjc.villAnalyShow(xs_pkdc_cashAnalyData.vill.outPooreVolve,index);
                        }else{
                            action = "QueryFourFiveByAreaId";
                        }
                        break;*/
                }
                if(action){
                    data = {pd_id:currentCode,pid:currentCode,cid:currentCode,vid:currentCode};
                    $("#xs_pkdc_pkBaseData_loading").css({"visibility":"visible"});
                    XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, action, data, function(json) {
                        $("#xs_pkdc_pkBaseData_loading").css({"visibility":"hidden"});
                        if(xs_pkdc_analyIndex != index)return;
                        if (json && json.length > 0) {
                            switch(index){
                                case 0 ://文化程度
                                    xs_pkdc_cashAnalyData.vill.cultureDegree =json;
                                    break;
                                case 1 ://致贫原因
                                    xs_pkdc_cashAnalyData.vill.poorReason =json;
                                    break;
                                case 2 ://帮扶措施
                                    xs_pkdc_cashAnalyData.vill.helpMeasure =json;
                                    break;
                                case 3 ://五通四有
                                    xs_pkdc_cashAnalyData.vill.fiveFour =json;
                                    break;
                                 /*case 4 ://四有五覆盖
                                    xs_pkdc_cashAnalyData.vill.fourFive =json;
                                    break;
                                case 5 ://脱贫进展
                                    xs_pkdc_cashAnalyData.vill.outPooreVolve =json;
                                    break;*/
                            }
                            XS.Main.Pkjc.villAnalyShow(json,index);
                        }else{
                            var xs_pkdc_AnalysTabsChartH = $('#xs_pkdc_AnalysTabsChart').height() + 'px';
                            $('#xs_pkdc_AnalysTabsChart').empty().css({height:xs_pkdc_AnalysTabsChartH,lineHeight:xs_pkdc_AnalysTabsChartH,textAlign:"center",fontSize:"50px",color:"red"}).html("暂无相关数据");
                        }
                    });
                }
            }
        });
    }
}
//项目资金点击函数
var xs_pkdc_itemFundDgridJson = [];
XS.Main.Pkjc.clickItemFund = function(currentCode,currentName){
    XS.CommonUtil.showLoader();
    XS.Main.Tjfx.removeLayer();
    XS.Main.Pkjc.closeInfoDialog();
    XS.Main.Poor.clearRelocationLayer();
    xs_pkdc_itemFundDgridJson = [];
    XS.Main.Pkjc.minInfoWinDialog();
    var content = '<label class="xs_chart2tag"></label><script id="echarts_all" src="../base/echart2/dist/echarts-all.js"></script>' +
        '<div style="width:100%;height: 100%;padding:5px 5px 5px 0px;box-sizing: border-box;">' +
            '<div id="xs_pkdc_itemFund1" style="width:100%;height:100%;box-sizing: border-box;">' +
                "<div id='xs_pkdc_itemFundC' style='position: relative; width:41%; height:100%; display: inline-block;overflow-y: auto;border-right: 1px solid #ddd;box-sizing: border-box;'>" +
                    "<div  id='xs_pkdc_itemFundDgridDomC' style='width:900px; height:100%;overflow-x: hidden;overflow-y: hidden;'>" +
                        /*'<i id="xs_pkdc_itemFound_loading" style="font-size: 50px;position: absolute;top: 50%; left: 50%;margin-left: -25px;margin-top: -25px;visibility: hidden;" class="fa fa-spinner fa-pulse fa-3x fa-fw xs_loading">' +
                        '</i>' +*/
                        "<div id='xs_pkdc_itemFundDgridDom'>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                "<div style='position: relative;width: 59%; height:100%; display: inline-block;overflow-y: auto;box-sizing: border-box;border: 1px solid #ddd;border-left:0;'>" +
                    "<div id='xs_pkdc_itemFundRowDataTreeC' style='width:400px; height:100%;border1: 1px solid green;'>" +
                        '<i id="xs_pkdc_itemFound_rowLoading" style="font-size: 50px;position: absolute;top: 50%; left: 50%;margin-left: -25px;margin-top: -25px;visibility: hidden;" class="fa fa-spinner fa-pulse fa-3x fa-fw xs_loading">' +
                        '</i>' +
                        '<div id="xs_pkdc_itemFundRowDataTree" style="height: 100%;width:100%; ">' +
                        '</div>' +
                    '</div>' +
                "</div>" +
            '</div>' +
        '</div>';
    XS.CommonUtil.openDialog("xs_main_detail", currentName + "-帮扶措施", "icon-man", content, false, true, false, 700,600,0,null,function()
    {
        $("#xs_echartjs").empty().append('<script src="../base/echart/echarts.js"></script>');
        $("#xs_main_detail").dialog("destroy");
        /*$("#xs_pkdc_msgWin").window("open");*/
    },function()
    {
        $("#xs_pkdc_itemFundRowDataTreeC").css("width","100%");
        xs_pkdc_itemFoundChart.resize();

        var pager = $("#xs_pkdc_itemFundDgridDom").datagrid("getPager");
        var pageOption = pager.pagination("options");
        $('#xs_pkdc_itemFundDgridDom').datagrid(XS.Main.Pkjc.ItemFoundGridOpt(pageOption.pageNumber,10));
        pager = $("#xs_pkdc_itemFundDgridDom").datagrid("getPager");
        pager.pagination(XS.Main.Pkjc.ItemFoundPageOpt(pageOption.pageNumber));
    },null,function()
    {
        $("#xs_pkdc_itemFundRowDataTreeC").css("width","400px");
        xs_pkdc_itemFoundChart.resize();

        var pager = $("#xs_pkdc_itemFundDgridDom").datagrid("getPager");
        var pageOption = pager.pagination("options");
        $('#xs_pkdc_itemFundDgridDom').datagrid(XS.Main.Pkjc.ItemFoundGridOpt(pageOption.pageNumber,10));
        pager = $("#xs_pkdc_itemFundDgridDom").datagrid("getPager");
        pager.pagination(XS.Main.Pkjc.ItemFoundPageOpt(pageOption.pageNumber));
    });

    XS.Main.addDivHover2HiddenUTFGridTip("xs_main_detail");

    $("#xs_pkdc_itemFound_loading").css({"visibility":"visible"});
    var data = {regionid:currentCode};
    XS.CommonUtil.ajaxHttpReq(XS.Constants.web_host, "QueryProjecFundByRegionid", data, function(json) {
        $("#xs_pkdc_itemFound_loading").css({"visibility":"hidden"});
        if(json && json.length > 0){
            xs_pkdc_itemFoundJson = json;
            for(var i=0;i<json.length;i++){
                json[i].REACHCOUNTYFOUNDS = json[i].REACHCOUNTYFOUNDS>=0 ? json[i].REACHCOUNTYFOUNDS + "万元" : "";
                json[i].HELPHOUSE = json[i].HELPHOUSE>=0 ? json[i].HELPHOUSE + "户" : "";
                json[i].HELPPEOPLE = json[i].HELPPEOPLE>=0 ? json[i].HELPPEOPLE + "人" : "";
                json[i].FINAFOUND = json[i].FINAFOUND>=0 ? json[i].FINAFOUND + "万元" : "";
            }
            xs_pkdc_itemFundDgridJson = json;
            $('#xs_pkdc_itemFundDgridDom').datagrid(XS.Main.Pkjc.ItemFoundGridOpt(1,10));
            var pager = $("#xs_pkdc_itemFundDgridDom").datagrid("getPager");
            pager.pagination(XS.Main.Pkjc.ItemFoundPageOpt(1));
            //$("#xs_pkdc_itemFundDgridDomC .datagrid-body").first().css("overflow","hidden");
            XS.Main.Pkjc.selectItemFoundRowData(0,json[0],currentCode);
        }else{
            var xs_pkdc_itemFund1H = $('#xs_pkdc_itemFund1').height() + 'px';
            var xs_pkdc_itemFundFair = '<div style="color:#ff0000;font-size: 40px;text-align:center;line-height: ' + xs_pkdc_itemFund1H  + ';">暂无相关数据</div>';
            $('#xs_pkdc_itemFund1').empty().append(xs_pkdc_itemFundFair);
            $("#xs_pkdc_itemFound_rowLoading").css({"visibility":"hidden"});
        }
    });

    XS.CommonUtil.hideLoader();
}

/**
 * 获取项目资金的分页数据
 * @param json
 * @param pageNumber
 * @param pageSize
 * @returns {Array}
 */
XS.Main.Pkjc.itemFundPageData = function(pageNumber,pageSize){
    var data = [];
    for(var i=(pageNumber-1)*pageSize;i<pageNumber*pageSize && i<xs_pkdc_itemFundDgridJson.length;i++){
        xs_pkdc_itemFundDgridJson[i].serialNo = i + 1;
        data.push(xs_pkdc_itemFundDgridJson[i]);
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
XS.Main.Pkjc.dataTable = function(json,nameArr,valueArr,unitArr,colls,rowH,mergeColls){
    var jsonData = null;
    if(json && json.length>0){
        jsonData = json[0];
    }else if(json && json != []){
        jsonData = json;
    }
    xs_pkdc_btnCliDatagridObj = [];
    for(var i=0;i<nameArr.length;i++){
        xs_pkdc_btnCliDatagridObj.push({});
        xs_pkdc_btnCliDatagridObj[i].name = nameArr[i];
        if(isNaN(jsonData[valueArr[i]])){
            xs_pkdc_btnCliDatagridObj[i].value = jsonData[valueArr[i]] ? jsonData[valueArr[i]] : "";
        }else{
            if(unitArr && unitArr[i]){
                if(nameArr[i] == "经度" || nameArr[i] == "纬度" || nameArr[i] == "贫困发生率" || nameArr[i] == "人均纯收入增长率" || nameArr[i] == "地方生产总值增长率" || nameArr[i] == "森林覆盖率"){
                    xs_pkdc_btnCliDatagridObj[i].valueNotUnit = (jsonData[valueArr[i]]-0)>=0 ? (jsonData[valueArr[i]]-0).toFixed(2) : "";
                    xs_pkdc_btnCliDatagridObj[i].value = (jsonData[valueArr[i]]-0)>=0 ? (jsonData[valueArr[i]] - 0).toFixed(2) + unitArr[i] : "";
                }else{
                    xs_pkdc_btnCliDatagridObj[i].valueNotUnit = (jsonData[valueArr[i]]-0)>=0 ? (jsonData[valueArr[i]]-0) : "";
                    xs_pkdc_btnCliDatagridObj[i].value = (jsonData[valueArr[i]]-0)>=0 ? (jsonData[valueArr[i]] - 0) + unitArr[i] : "";
                }
            }else{
                if(nameArr[i] == "经度" || nameArr[i] == "纬度" || nameArr[i] == "贫困发生率"){
                    xs_pkdc_btnCliDatagridObj[i].valueNotUnit = (jsonData[valueArr[i]]-0)>=0 ? (jsonData[valueArr[i]]-0).toFixed(2) : "";
                    xs_pkdc_btnCliDatagridObj[i].value = (jsonData[valueArr[i]]-0)>=0 ? (jsonData[valueArr[i]] - 0).toFixed(2) : "";
                }else{
                    xs_pkdc_btnCliDatagridObj[i].valueNotUnit = (jsonData[valueArr[i]]-0)>=0 ? (jsonData[valueArr[i]]-0) : "";
                    xs_pkdc_btnCliDatagridObj[i].value = (jsonData[valueArr[i]]-0)>=0 ? (jsonData[valueArr[i]]-0) : "";
                }
            }
        }
    }
    $("#xs_pkdc_tabsContent").empty().append(XS.Searchbox.createTable(xs_pkdc_btnCliDatagridObj,colls, rowH, mergeColls,"","color:#00bbee"));
    //$("#xs_pkdc_tabsContent").empty().append(XS.Main.Poor.createTable(xs_pkdc_btnCliDatagridObj, columnNum, rowH,"","color:#00bbee"));
    $(".datagrid-wrap").css("width","auto");

    var tabsContentDomH = $("#xs_pkdc_tabsContentDom").outerHeight();


    var pieDomHeight = tabsContentDomH - $("#xs_pkdc_tabsContent").outerHeight();
    $("#xs_pkdc_tabsContentPie").css({height: pieDomHeight});
}//(objArr,colls, rowH,mergeColls,nameCollStyle,valueCollStyle,addRowIdArr)

/**
 * 生成tabs标签页及标签选项卡
 * @param titleAttr 选项卡的集合
 * @param tabsId tabs的id
 * @param position
 * @param isFit
 * @returns {string}
 */
 XS.Main.Pkjc.tabsContent = function(titleAttr,tabsId,position,isFit,plain,width,height,headerWidth,tabHeight){
    var content = '<div id="'+ tabsId + '" class="easyui-tabs" data-options="tabPosition:\'' + position + '\',fit:' + isFit + ',headerWidth:' + headerWidth + ',tabHeight:' + tabHeight + ',plain:' + plain + ',width:' + width + ',height:' + height + '">' +
        '<i id="xs_pkdc_pkBaseData_loading" style="position: absolute;top: 50%; left: 50%;margin-left: -25px;margin-top: -25px;visibility: hidden;" class="fa fa-spinner fa-pulse fa-3x fa-fw xs_loading">' +
        '</i>';
    for(var i=0;i<titleAttr.length;i++){
        content += '<div style="width:10px;" title="' + titleAttr[i] +'"></div>';
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
XS.Main.Pkjc.tabsContentPie = function(titleName,indexArr,domId,otherIndexArr,otherObjName,radius){
    XS.Main.Pkjc.DetailPieOpt.series[0].data = [];
    XS.Main.Pkjc.DetailPieOpt.series[0].name = titleName[0];
    if(radius){
        XS.Main.Pkjc.DetailPieOpt.series[0].radius = radius;
    }else{
        XS.Main.Pkjc.DetailPieOpt.series[0].radius = "55%";
    }
    XS.Main.Pkjc.DetailPieOpt.legend.data = [];
    XS.Main.Pkjc.DetailPieOpt.title = {text:titleName[0],left:titleName[1],top:titleName[2]};
    var pieSum = 0;

    if(otherIndexArr.length == 2){
        XS.Main.Pkjc.DetailPieOpt.series[0].data.push({});
        XS.Main.Pkjc.DetailPieOpt.legend.data.push(otherObjName);
        XS.Main.Pkjc.DetailPieOpt.series[0].data[0].name = otherObjName;
        var totalValue = xs_pkdc_btnCliDatagridObj[otherIndexArr[0]].valueNotUnit;
        var targetValue = xs_pkdc_btnCliDatagridObj[otherIndexArr[1]].valueNotUnit;
        XS.Main.Pkjc.DetailPieOpt.series[0].data[0].value = (totalValue - targetValue)>0 ? (totalValue - targetValue) : 0;
        pieSum += XS.Main.Pkjc.DetailPieOpt.series[0].data[0].value;
    }

    for (var i = 0; i < indexArr.length; i++) {
        var seriesData = {name:xs_pkdc_btnCliDatagridObj[indexArr[i]].name,value:xs_pkdc_btnCliDatagridObj[indexArr[i]].valueNotUnit};
        XS.Main.Pkjc.DetailPieOpt.series[0].data.push(seriesData);
        pieSum += xs_pkdc_btnCliDatagridObj[indexArr[i]].valueNotUnit;
        XS.Main.Pkjc.DetailPieOpt.legend.data.push(xs_pkdc_btnCliDatagridObj[indexArr[i]].name);
    }
    XS.Main.Pkjc.DetailPieOpt.series[0].data = XS.Main.Pkjc.pieLabelPos(XS.Main.Pkjc.DetailPieOpt.series[0].data,pieSum);
    xs_pkdc_AnalysTabsCInit = echarts.init(document.getElementById(domId));
    xs_pkdc_AnalysTabsChartArr.push(xs_pkdc_AnalysTabsCInit);
    xs_pkdc_AnalysTabsCInit.setOption(XS.Main.Pkjc.DetailPieOpt);
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
    xs_pkdc_AnalysTabsCInit = echarts.init(document.getElementById(domId));
    xs_pkdc_AnalysTabsChartArr.push(xs_pkdc_AnalysTabsCInit);
    xs_pkdc_AnalysTabsCInit.setOption(XS.Main.Pkjc.scatterOption);
}
/**
 * 根据选中的标签卡动态加载content
 * @param index 选中标签卡的编号
 */
XS.Main.Pkjc.detailWindowTabs = function(index){
    xs_pkdc_detailTabsIndex = index;
    $("#xs_pkdc_tabsContentDom").remove();
    var selectTab = $("#xs_pkdc_detailTabs").tabs("getTab",index);//#FFF
    selectTab.append('<div id="xs_pkdc_tabsContentDom" style="width1:100% ;height:'+ xs_pkdc_detailDomH +'px;overflow: hidden;paddign:0px;border1:1px solid green;"></div>');

    $("#xs_pkdc_tabsContentDom").append('<div id="xs_pkdc_tabsContent" style="margin: 0px;overflow-y: auto;"></div>');
    $("#xs_pkdc_tabsContentDom").append('<div id="xs_pkdc_tabsContentPie" style="margin:0px;border1:1px solid green;"></div>');
    $("#xs_pkdc_tabsContentPie").append('<div id="xs_pkdc_tabsContentBtn" style="display: none;height:10%;" align="right"></div>');
    $("#xs_pkdc_tabsContentPie").append('<div id="xs_pkdc_tabsContPieDiv1" style="width:50%;height:100%;display: inline-block;"></div>');
    $("#xs_pkdc_tabsContentPie").append('<div id="xs_pkdc_tabsContPieDiv2" style="width:50%;height:100%;display: inline-block;"></div>');
    //$("#xs_pkdc_tabsContentPie").append('<div id="xs_pkdc_tabsContPieDiv3" style="width:33%;height:88%;display: inline-block;"></div>');
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
    if(tooltip[2]){
        option.tooltip.formatter =  tooltip[2];
    }
    if(legend.length == 2){//[top,data]
        option.legend = {top:legend[0],data:legend[1]};
    }else if(legend.length == 3){//[top,[name,icon]]
        option.legend = {top:legend[0],data:[]};
        for(var i=0;i<legend[1].length;i++){
            option.legend.data.push({name:legend[1][i],icon:legend[2][i]});
        }
    }
    if(grid.length>0){
        option.grid = {top: grid[0],bottom: grid[1],left:grid[2],right:grid[3]};
    }
    if(xAxis && xAxis.length > 0 && xAxis[1] == 'category'){//[name,type,data,boundaryGap,rotate]
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
        if(series[i][1] == 'bar'){//[[name,type,barGap,data,stack,[showLabel,position,formatter]]]
            option.series.push({name:series[i][0],type:'bar',barGap: series[i][2] ,data:series[i][3],stack:series[i][4],label: {normal: {show: series[i][5][0],position: series[i][5][1],formatter:series[i][5][2]}}});
        }else if(series[i][1] == 'line'){//[[name,type,yAxisIndex,data,smooth,stack,[showLabel,position,formatter]]]
            option.series.push({name:series[i][0],type:'line',yAxisIndex: series[i][2],data:series[i][3],smooth:series[i][4],stack:series[i][5],label: {normal: {show: series[i][6][0],position: series[i][6][1],formatter:series[i][6][2]}}});
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
            if(series[i][6]){//[name,type,data,redius,center,roseType,[selectedMode,hoverAnimation,legendHoverLink,selectedOffset,labelshow,labelLineshow]]
                option.series.push({name:series[i][0],type:'pie',data:[],radius:series[i][3],center:series[i][4],roseType:series[i][5],selectedMode:series[i][6][0],
                    hoverAnimation:series[i][6][1],legendHoverLink:series[i][6][2],selectedOffset:series[i][6][3],label:{normal:{show:series[i][6][4]}},labelLine:{normal:{show:series[i][6][5]}}});
            }else{//[name,type,[[],[]],radius,center,roseType]
                option.series.push({name:series[i][0],type:'pie',data:[],radius:series[i][3],center:series[i][4],roseType:series[i][5]});
            }
            var pieSum = 0;
            for(var j=0;j<series[i][2][1].length;j++){
                pieSum += parseFloat(series[i][2][1][j]);
                option.series[i].data.push({name:series[i][2][0][j],value:series[i][2][1][j]});
                if(series[i][6]){option.series[i].data[j].selected = true;}
            }
            if(series[i][6] && !series[i][6][4]){
            }else{
                option.series[i].data = XS.Main.Pkjc.pieLabelPos(option.series[i].data,pieSum);
            }
        }
    }
    xs_pkdc_AnalysTabsCInit =  echarts.init(document.getElementById(initChart));
    xs_pkdc_AnalysTabsChartArr.push(xs_pkdc_AnalysTabsCInit);
    xs_pkdc_AnalysTabsCInit.setOption(option);
}
var xs_tipAnalyUnit = [];
//类目为下一级
XS.Main.Pkjc.tipAnalyFarmatterNex = function(params){
    var returnValue = "";
    if(params) {
        if (params.constructor == Object) {
            params = [params];
        }

        if(params.length>25){
            returnValue += '<div style="border1: 1px solid green;position: absolute;width:100%;">'+ params[0].name;
            returnValue += '</div><div style="border1: 1px solid red;">';
            returnValue += '<div style="border1: 1px solid green;display: inline-block;">';
        }else{
            returnValue += params[0].name;
        }
        var isSecondDiv = false;
        for(var i=0;i<params.length;i++){
            if(params.length>25 && i>params.length/2.0 && !isSecondDiv){
                returnValue += '</div><div style="width: 5px;border1: 1px solid green;display: inline-block;vertical-align: top;">';
                returnValue += '</div><div style="border1: 1px solid green;display: inline-block;vertical-align: top;">';
                isSecondDiv = true;
            }
            returnValue += '<br/><div style="width: 10px;height: 10px;display: inline-block;border-radius: 50%;background: ' + params[i].color + ';"></div>';
            for(var j=0;j<xs_tipAnalyUnit.length;j++){
                if(xs_tipAnalyUnit[j].name == params[0].seriesName){
                    var tipValueNum = params[i].value.toString().split(".").length>1 ? params[i].value.toString().split(".")[1].length : 0;
                    returnValue += params[i].seriesName + ': ' + (tipValueNum>2 ? (params[i].value-0).toFixed(2) : params[i].value) + xs_tipAnalyUnit[j].value[i];
                    if(params[i].percent && xs_tipAnalyUnit[j].value[i] != "%"){
                        returnValue += "("+ params[i].percent.toFixed(2) +"%)";
                    }
                    break;
                }
            }
        }
        if(params.length>25){
            returnValue += '</div></div>';
        }
    }
    return returnValue;
}
//类目为当前级
XS.Main.Pkjc.tipAnalyFarmatterCur = function(params){
    var returnValue = "";
    if(params) {
        if (params.constructor == Object) {
            params = [params];
        }
        returnValue += params[0].seriesName;
        for(var i=0;i<params.length;i++){
            returnValue += '<br/><div style="width: 10px;height: 10px;display: inline-block;border-radius: 50%;background: ' + params[i].color + ';"></div>';
            for(var j=0;j<xs_tipAnalyUnit.length;j++){
                if(xs_tipAnalyUnit[j].name == params[0].seriesName){
                    var tipValueNum = params[i].value.toString().split(".").length>1 ? params[i].value.toString().split(".")[1].length : 0;
                    returnValue += params[i].name + ': ' + (tipValueNum>2 ? (params[i].value-0).toFixed(2) : params[i].value) + xs_tipAnalyUnit[j].value[i];
                    if(params[i].percent && xs_tipAnalyUnit[j].value[i] != "%"){
                        returnValue += "("+ params[i].percent.toFixed(2) +"%)";
                    }
                    break;
                }
            }
        }
    }
    return returnValue;
}
//饼图的标签位置设置
XS.Main.Pkjc.pieLabelPos = function(data,sum){
    for(var i=0;i<data.length;i++){
        var pieLabel = {
            normal:{
                show:true
            }
        };
        var pieLabelLine = {
            normal:{
                show:true
            }
        };
        var pieRatio = (data[i].value/sum*100).toFixed(2);
        if(Math.ceil(pieRatio)>20){
            pieLabel.normal.position = "inner";
            pieLabelLine.normal.show = false;
        }else if(Math.ceil(pieRatio) == 0){
            pieLabel.normal.show = false;
            pieLabelLine.normal.show = false;
        }else{
            pieLabel.normal.position = "outside";
        }
        data[i].label = pieLabel;
        data[i].labelLine = pieLabelLine;
    }
    return data;
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
            if(!json[i]){
                continue;
            }
            if(!isNaN(json[i][field[j]])){
                var isPoint = json[i][field[j]].toString().indexOf(".");
                if(isPoint == -1){
                    target[j].push(json[i][field[j]]);
                }else{
                    target[j].push(json[i][field[j]].toFixed(2));
                }
            }else{
                target[j].push(json[i][field[j]]);
            }
        }
    }
    if(radarIndicator.length>0){
        for(var i=0;i<radarIndicator[0].length;i++){
            radarIndicator[1].push(xs_pkdc_analyMax);
        }
    }
}
/**
 *
 * @param json
 * @param AnalysTabsChart
 */
XS.Main.Pkjc.viAnaly54 = function(json,AnalysTabsChart){
    var contentHtml =
        '<div align="center" class="xs_poor_45_vill">'+
        '<div class="xs_poor_45_villTitle">五通</div>'+
            //通村沥青路
        '<div class="xs_poor_45_villC" style1="margin-left: 100px;">' +
        '<div class="xs_poor_45_villF">通村沥青路</div>';
    contentHtml += '<img class="xs_poor_45_villImg" src="../img/poor/通村沥青.jpg">' +
        '<div class="xs_poor_45_villTip"><span style="display: inline-block;">通村沥青路:'+ json[0].ISROADHARD +'</span></div>';
    contentHtml
        += '</div>'+
        '<div class="xs_poor_45_villC">' +
        '<div class="xs_poor_45_villF">通客运</div>';
    contentHtml += '<img class="xs_poor_45_villImg" src="../img/poor/通客运.jpg">' +
        '<div class="xs_poor_45_villTip">' +
        '<span style="display: inline-block;">是否通客运:' + json[0].ISBUSSTATE + '</span>' +
        //'<span style="display: inline-block;">是否通客运:' + json[0].UNSTATENUM + '</span>' +
        '</div>';
    contentHtml
        += '</div>'+
        '<div class="xs_poor_45_villC">' +
        '<div class="xs_poor_45_villF" style="font-size: 15px;">通宽带及电话</div>';
    contentHtml += '<img class="xs_poor_45_villImg" src="../img/poor/通宽带.jpg">' +
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
        '<div class="xs_poor_45_villF" style="font-size: 10px;">通组公路及连户路硬化</div>';
    contentHtml += '<img class="xs_poor_45_villImg" src="../img/poor/通组公路.jpg">' +
        '<div class="xs_poor_45_villTip">' +
        '<span style="display: inline-block;">通组公路是否硬化:' + json[0].ISZROADHARD + '</span>' +
        '<span style="display: inline-block;">连户路是否硬化:' + json[0].ISHROADHARD + '</span>' +
        '</div>';
    contentHtml
        += '</div>'+
        '<div class="xs_poor_45_villTitle" style="margin-top: 30px;">四有</div>'+
        '<div class="xs_poor_45_villC">' +
        '<div class="xs_poor_45_villF" style="font-size: 15px;">美丽乡村创建</div>';
    contentHtml += '<img class="xs_poor_45_villImg" src="../img/poor/美丽乡村.jpg">' +
        '<div class="xs_poor_45_villTip">' +
        '<span style="display: inline-block;">有美丽乡村建设点:' + json[0].ISBEAUTIFULVILLAGE + '</span>' +
        '<span style="display: inline-block;">建示范点个数:' + json[0].UNBEAUTIFULVILLAGENUM + '</span>' +
        '</div>';
    contentHtml
        += '</div>'+
        '<div class="xs_poor_45_villC">' +
        '<div class="xs_poor_45_villF" style="font-size: 10px;">村卫生室和执业医生</div>';
    contentHtml += '<img class="xs_poor_45_villImg" src="../img/poor/村卫生室.jpg">' +
        '<div class="xs_poor_45_villTip">' +
        '<span style="display: inline-block;">有村卫生室及执业医生:' + json[0].ISVILLAGEHEALTHROOM + '</span>' +
        '<span style="display: inline-block;">医生配备人数:' + json[0].UNVILLAGEHEALTHROOMNUM + '</span>' +
        '</div>';
    contentHtml
        += '</div>'+
        '<div class="xs_poor_45_villC">' +
        '<div class="xs_poor_45_villF" style="font-size: 10px;">村文化场所和信息员</div>';
    contentHtml += '<img class="xs_poor_45_villImg" src="../img/poor/村文化.jpg">' +
        '<div class="xs_poor_45_villTip">' +
        '<span style="display: inline-block;">有村文化场所和文化信息员:' + json[0].ISENTERTAINMENTROOM + '</span>' +
        '<span style="display: inline-block;">建设个数:' + json[0].UNENTERTAINMENTROOMNUM + '</span>' +
        '<span style="display: inline-block;">信息员配备人数:' + json[0].INFORMATIONPERSONNUM + '</span>' +
        '</div>';
    contentHtml
        += '</div>'+
        '<div class="xs_poor_45_villC">' +
        '<div class="xs_poor_45_villF">村集体经济</div>';
    contentHtml += '<img class="xs_poor_45_villImg" src="../img/poor/村集体经济.jpg">' +
        '<div class="xs_poor_45_villTip">' +
        '<span style="display: inline-block;">有高于3万元村集体经济:' + json[0].ISVILLAGEECONOMY + '</span>' +
        '<span style="display: inline-block;">组建村级经济组织个数:' + json[0].VILLAGEENTERPRISENUM + '</span>' +
        '<span style="display: inline-block;">需建设内容:' + json[0].UNVILLAGEECONOMY + '</span>' +
        '</div>';
    contentHtml
        += '</div>'+
        '</div>';
    /*contentHtml +=
        '<script>' +
        '$(".xs_poor_45_villC").mouseenter(function(){' +
        '$(this).find(".xs_poor_45_villTip").show("fast");' +
        '});' +
        ' $(".xs_poor_45_villC").mouseleave(function(){' +
        '$(this).find(".xs_poor_45_villTip").hide("fast");' +
        '});' +
        '</script>';*/
    $("#" + AnalysTabsChart).append(contentHtml);
}
/**
 * 创建项目资金的option对象
 * @param json
 * @param pageNumber
 * @param pageSize
 * @returns {{data: Array, pagination: boolean, pageSize: number, fit: boolean, striped: boolean, singleSelect: boolean, rownumbers: boolean, onClickRow: *, rowStyler: Function, columns: *[]}}
 * @constructor
 */
XS.Main.Pkjc.ItemFoundGridOpt = function(pageNumber,pageSize){
    var opt =
    {
        data: XS.Main.Pkjc.itemFundPageData(pageNumber,pageSize),
        pagination: true,
        pageSize: 10,
        fit: true,
        striped: true,
        singleSelect: true,
        rownumbers: false,
        onClickRow:XS.Main.Pkjc.selectItemFoundRowData,
        rowStyler: function(rowIndex,rowData){
            var xs_pkdc_itemFundDomHeight = $("#xs_pkdc_itemFundC").css("height");
            var xs_pkdc_itemFundDomHeight = parseInt(xs_pkdc_itemFundDomHeight);
            return 'height:' + (Math.floor(xs_pkdc_itemFundDomHeight/10)-8) + "px";
        },
        columns: XS.Main.Pkjc.itemFundGridColumns(xs_pkdc_itemFundGridField,'7%',[[0,'4%'],[4,'4%'],[9,'8%'],[10,'9%']])
    };
    return opt;
}
/**
 * 创建项目资金分页option对象
 * @param pageNumber
 * @param pageSize
 * @returns {{total: Number, showPageList: boolean, onSelectPage: Function}}
 * @constructor
 */
XS.Main.Pkjc.ItemFoundPageOpt = function(pageNum){
    var pager = $("#xs_pkdc_itemFundDgridDom").datagrid("getPager");
    var opt =
    {
        total:xs_pkdc_itemFundDgridJson.length,
        showPageList: false,
        pageNumber:pageNum,
        onSelectPage:function (pageNumber, pageSize) {
            $("#xs_pkdc_itemFundDgridDom").datagrid("loadData", XS.Main.Pkjc.itemFundPageData(pageNumber,pageSize));
            pager.pagination('refresh', {
                showPageList: false,
                total:xs_pkdc_itemFundDgridJson.length,
                pageNumber:pageNumber
            });
        }
    };
    return opt;
}
/**
 * 详情的窗口最大化回调函数
 */
XS.Main.Pkjc.detailMaxCall = function(){
    var selectTab = $("#xs_pkdc_detailTabs").tabs("getTab",xs_pkdc_detailTabsIndex);
    xs_pkdc_detailPieMinW = $("#xs_pkdc_detailTabs").width();
    xs_pkdc_detailPieMinH = $("#xs_pkdc_detailTabs").height();
    $("#xs_pkdc_detailTabs").tabs({
        fit:true
    });
    $("#xs_pkdc_detailTabs").tabs("resize");
    $("#xs_pkdc_tabsContentDom").css({width:selectTab.width(),height:selectTab.height()});
    xs_pkdc_detailDomH = selectTab.height();
    var pieDomHeight = xs_pkdc_detailDomH - $("#xs_pkdc_tabsContent").height();
    $("#xs_pkdc_tabsContentPie").css({height: pieDomHeight});
    if(xs_pkdc_AnalysTabsChartArr.length > 0){
        for(var i in xs_pkdc_AnalysTabsChartArr){
            xs_pkdc_AnalysTabsChartArr[i].resize();
        }
    }
}
/**
 * 详情的窗口最小化回调函数
 */
XS.Main.Pkjc.detailMinCall = function(){
    $("#xs_pkdc_tabsContentDom").css({width:"100%",height:"524px"});
    var selectTab = $("#xs_pkdc_detailTabs").tabs("getTab",xs_pkdc_detailTabsIndex);
    $("#xs_pkdc_detailTabs").tabs({
        fit:false,
        height:xs_pkdc_detailPieMinH
    });
    $("#xs_pkdc_detailTabs").tabs("resize");
    xs_pkdc_detailDomH = 524;
    var pieDomHeight = xs_pkdc_detailDomH - $("#xs_pkdc_tabsContent").height();
    $("#xs_pkdc_tabsContentPie").css({height: pieDomHeight});
    if(xs_pkdc_AnalysTabsChartArr.length > 0){
        for(var i in xs_pkdc_AnalysTabsChartArr){
            xs_pkdc_AnalysTabsChartArr[i].resize();
        }
    }
}
var xs_pkdc_isAnalysMax = false;
/**
 * 项目资金的窗口最大化回调函数
 * @constructor
 */
XS.Main.Pkjc.ItemFoundMaxCall = function(){
    xs_pkdc_isAnalysMax = true;
    $("#xs_pkdc_AnalysTabs").tabs({
        headerWidth:100
    });
    $("#xs_pkdc_AnalysTabs").tabs("resize");
    $("#xs_pkdc_AnalysTabsChart").css({width:"100%"});
    if(xs_pkdc_AnalysTabsChartArr.length == 1){
        xs_pkdc_AnalysTabsChartArr[0].resize();
    }else if(xs_pkdc_AnalysTabsChartArr.length == 2){
        xs_pkdc_AnalysTabsChartArr[0].resize();
        xs_pkdc_AnalysTabsChartArr[1].resize();
    }
}
/**
 * 项目资金的窗口最小化回调函数
 * @constructor
 */
XS.Main.Pkjc.ItemFoundMinCall = function(){

    xs_pkdc_isAnalysMax = false;
    $("#xs_pkdc_AnalysTabs").tabs({
        headerWidth:90
    });
    $("#xs_pkdc_AnalysTabs").tabs("resize");
    $("#xs_pkdc_AnalysTabsChart").css({width:"610px"});
    if(xs_pkdc_AnalysTabsChartArr.length == 1){
        xs_pkdc_AnalysTabsChartArr[0].resize();
    }else if(xs_pkdc_AnalysTabsChartArr.length == 2){
        xs_pkdc_AnalysTabsChartArr[0].resize();
        xs_pkdc_AnalysTabsChartArr[1].resize();
    }
}
XS.Main.setDetailChildColor = function(className,indexArr,color,alreadyNum){
    if(!alreadyNum){
        alreadyNum = 0;
    }
    var tableTd = $("." + className);
    for(var i=0;i<tableTd.length;i++){
        for(var j in indexArr){
            var changeColorIndex = indexArr[j];
            if(i-alreadyNum == changeColorIndex){
                var changeDom = tableTd[i];
                changeDom.style.color = color;
            }
        }
    }
}
//详情市级内容展示
var xs_cityArea = 26853;//毕节市总面积(平方千米)
XS.Main.Pkjc.cityDetailShow = function(json,index){
    xs_pkdc_btnCliDatagridObj = [];
    if(index == 0)
    {
        XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.city.tabs[index].name, XS.Main.Pkjc.detailKV.city.tabs[index].value,
            XS.Main.Pkjc.detailKV.city.tabs[index].unit,2,50,[[12,2]]);
        return;
    }else if(index == 1)
    {
        var alreadyNum =  $(".datagrid-cell").length;
        XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.city.tabs[index].name, XS.Main.Pkjc.detailKV.city.tabs[index].value,
            XS.Main.Pkjc.detailKV.city.tabs[index].unit,2,35,[[0,2],[3,2],[6,2],[7,2],[8,2],[9,2],[10,2],[11,2]]);
            XS.Main.setDetailChildColor("datagrid-cell",[2,3,4,5,8,9,10,11,14,15,18,19],"#00c400",alreadyNum);
    }else if(index == 2)
    {
        var alreadyNum =  $(".datagrid-cell").length;
        XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.city.tabs[index].name, XS.Main.Pkjc.detailKV.city.tabs[index].value,
            XS.Main.Pkjc.detailKV.city.tabs[index].unit,3,50,[[0,3]]);
        XS.Main.setDetailChildColor("datagrid-cell",[2,3,4,5,6,7],"#00c400",alreadyNum);
    }else if(index == 3)
    {
        XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.city.tabs[index].name, XS.Main.Pkjc.detailKV.city.tabs[index].value,
            XS.Main.Pkjc.detailKV.city.tabs[index].unit,2,35,[[12,2]]);
    }else if(index == 5)
    {
        XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.city.tabs[index].name, XS.Main.Pkjc.detailKV.city.tabs[index].value,
            XS.Main.Pkjc.detailKV.city.tabs[index].unit,2,35,[[12,2]]);
    }else if(index == 6)
    {
        var alreadyNum =  $(".datagrid-cell").length;
        XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.city.tabs[index].name, XS.Main.Pkjc.detailKV.city.tabs[index].value,
            XS.Main.Pkjc.detailKV.city.tabs[index].unit,3,35,[[0,3],[4,3],[8,3],[12,3],[16,3],[20,3],[24,3],[28,3]]);
        XS.Main.setDetailChildColor("datagrid-cell",
            [2,3,4,5,6,7, 10,11,12,13,14,15, 18,19,20,21,22,23, 26,27,28,29,30,31, 34,35,36,37,38,39, 42,43,44,45,46,47,
                50,51,52,53,54,55, 58,59,60,61,62,63],"#00c400",alreadyNum);
    }else
    {
        XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.city.tabs[index].name, XS.Main.Pkjc.detailKV.city.tabs[index].value,
            XS.Main.Pkjc.detailKV.city.tabs[index].unit,2,35,[]);
    }
    switch (index) {
        case 1 ://土地信息
            $("#xs_pkdc_tabsContent").css({height:"40%",borderBottom:"1px solid #ddd"});
            $("#xs_pkdc_tabsContentPie").css({height:"60%"});
            //土地信息的pie显示
            var sumIndex = [0, 3, 6, 8, 10];
            var sum = 0;
            for(var i=0;i<sumIndex.length;i++){
                sum += xs_pkdc_btnCliDatagridObj[sumIndex[i]].valueNotUnit;
            }
            var addValue = (xs_cityArea*100 - sum)>0 ? (xs_cityArea*100 - sum) : 0;
            xs_pkdc_btnCliDatagridObj.push({name:"其他",valueNotUnit:addValue,value:addValue + "公顷"});
            xs_tipAnalyUnit = [{name:"国有土地分布",value:["公顷"]}];
            XS.Main.Pkjc.tabsContentPie(["国有土地分布","center"], [0, 3, 6, 8, 10,12], "xs_pkdc_tabsContentPie", [], "");
            break;
        case 2 ://经济情况
            //经济收入的三大产业pie显示
            xs_pkdc_btnCliDatagridObj[1].name="第一产业";
            xs_pkdc_btnCliDatagridObj[2].name="第二产业";
            xs_pkdc_btnCliDatagridObj[3].name="第三产业";
            xs_tipAnalyUnit = [{name:"国民生产总值分布",value:["万元"]}];
            XS.Main.Pkjc.tabsContentPie(["国民生产总值分布","center"], [1, 2, 3], "xs_pkdc_tabsContentPie", [], "");
            break;
        case 3 ://村、户、人口的贫困Pie显示
            $("#xs_pkdc_tabsContentBtn").css("display", "block");
            $("#xs_pkdc_tabsContentBtn1").linkbutton({text: "户及人口贫困分布"});
            $("#xs_pkdc_tabsContentBtn2").linkbutton({text: "农村及少数民族人口分布"});
            /*xs_pkdc_btnCliDatagridObj.push({name:"非贫困户数(户)",nameNotUnit:"非贫困户数",value:xs_pkdc_btnCliDatagridObj[0].value - xs_pkdc_btnCliDatagridObj[1].value});
            xs_pkdc_btnCliDatagridObj.push({name:"非贫困人口(户)",nameNotUnit:"非贫困人口",value:xs_pkdc_btnCliDatagridObj[5].value - xs_pkdc_btnCliDatagridObj[6].value});
            xs_pkdc_btnCliDatagridObj.push({name:"非贫困户数(户)",nameNotUnit:"城镇口",value:xs_pkdc_btnCliDatagridObj[5].value - xs_pkdc_btnCliDatagridObj[7].value});
            xs_pkdc_btnCliDatagridObj.push({name:"非贫困户数(户)",nameNotUnit:"汉族人口",value:xs_pkdc_btnCliDatagridObj[5].value - xs_pkdc_btnCliDatagridObj[8].value});*/
            xs_tipAnalyUnit = [{name:"贫困户分布",value:["户"]},{name:"贫困人口分布",value:["人"]}];
            XS.Main.Pkjc.tabsContentPie(["贫困户分布","center"], [2], "xs_pkdc_tabsContPieDiv1", [0,2], "非贫困户数");
            XS.Main.Pkjc.tabsContentPie(["贫困人口分布","center"], [3], "xs_pkdc_tabsContPieDiv2", [1,3], "非贫困人口");
            $("#xs_pkdc_tabsContentBtn1").click(function () {
                xs_tipAnalyUnit = [{name:"贫困户分布",value:["户"]},{name:"贫困人口分布",value:["人"]}];
                XS.Main.Pkjc.tabsContentPie(["贫困户分布","center"], [2], "xs_pkdc_tabsContPieDiv1", [0,2], "非贫困户数");
                XS.Main.Pkjc.tabsContentPie(["贫困人口分布","center"], [3], "xs_pkdc_tabsContPieDiv2", [1,3], "非贫困人口");
            });
            $("#xs_pkdc_tabsContentBtn2").click(function () {
                xs_tipAnalyUnit = [{name:"农村人口分布",value:["人"]},{name:"少数民族人口分布",value:["人"]}];
                XS.Main.Pkjc.tabsContentPie(["农村人口分布","center"], [5], "xs_pkdc_tabsContPieDiv1", [1,5], "城镇人口");
                XS.Main.Pkjc.tabsContentPie(["少数民族人口分布","center"], [10], "xs_pkdc_tabsContPieDiv2", [1,10], "汉族人口");
            });
            break;
        case 4 ://重点工作
            $("#xs_pkdc_tabsContent").css({height:"40%",borderBottom:"1px solid #ddd"});
            $("#xs_pkdc_tabsContentPie").css({height:"60%"});
            var xAxis = ['','category',["通公路村","通客运村","通电村","有农合村","旅游村","有卫生室村","通广播村","通宽带村","有图书室村"],true];
            var series = [['重点工作','bar',0,[],null,[true,"top","{c}个"]]];//[[name,type,barGap,data,stack,showLabel,position]]
            for(var i=3;i<=12;i++){
                if(i == 9)continue;
                series[0][3].push(xs_pkdc_btnCliDatagridObj[i].valueNotUnit);
            }
            xs_tipAnalyUnit = [{name:"重点工作",value:["个"]}];
            XS.Main.Pkjc.ciAnalyOpt([],['axis',['shadow'],XS.Main.Pkjc.tipAnalyFarmatterCur],[],[40,40,30,20],xAxis,[['村数(个)','value']],[],[],series,"xs_pkdc_tabsContentPie");
            //XS.Main.Pkjc.dynScatterSeries(["扶贫措施","center",10], [2, 4, 5, 7, 8], "xs_pkdc_tabsContentPie", 40);
            break;
        case 5 ://专项扶贫
            $("#xs_pkdc_tabsContent").css({height:"40%",borderBottom:"1px solid #ddd"});
            $("#xs_pkdc_tabsContentPie").css({height:"60%"});
            xs_tipAnalyUnit = [{name:"各项培训情况",value:["人"]}];
            XS.Main.Pkjc.tabsContentPie(["各项培训情况","center"], [0, 2, 3, 4], "xs_pkdc_tabsContentPie", [], "","70%");
            break;
        case 6 ://扶贫信息
            $("#xs_pkdc_tabsContent").css({height:"40%",borderBottom:"1px solid #ddd"});
            $("#xs_pkdc_tabsContentPie").css({height:"60%"});
            var xAxis = ['','category',["交通部门","水利部门","能源部门","住建部门","农、林业部门","教育部门","卫计部门","文化部门"],true];
            var series = [['中央资金','bar',0,[],"资金",[false]],['省级资金','bar',0,[],"资金",[false]],['市县资金','bar',0,[],"资金",[false]]];
            var legend = [10,['中央资金',"省级资金","市县资金"]];
            for(var i=0;i<xs_pkdc_btnCliDatagridObj.length;i++){
                if(i%4 == 1){
                    series[0][3].push(xs_pkdc_btnCliDatagridObj[i].valueNotUnit);
                }else if(i%4 == 2){
                    series[1][3].push(xs_pkdc_btnCliDatagridObj[i].valueNotUnit);
                }else if(i%4 == 3){
                    series[2][3].push(xs_pkdc_btnCliDatagridObj[i].valueNotUnit);
                }
            }
            xs_tipAnalyUnit = [{name:"中央资金",value:["万元","万元","万元"]}];
            XS.Main.Pkjc.ciAnalyOpt([],['axis',['shadow'],XS.Main.Pkjc.tipAnalyFarmatterNex],legend,[60,40,70,20],xAxis,[['资金(万元)','value']],[],[],series,"xs_pkdc_tabsContentPie");
//XS.Main.Pkjc.tabsContentPie(["各项扶贫资金投入情况","center",10], [6, 7, 8, 9, 10, 11, 12, 13], "xs_pkdc_tabsContentPie", [], "");
            break;
    }
}
//详情县级内容展示
var xs_countyArea = 0;//公顷
XS.Main.Pkjc.countyDetailShow = function(json,index){
    if(index == 0)
    {
        //(json,nameArr,valueArr,unitArr,colls,rowH,mergeColls)
        XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.county.tabs[index].name, XS.Main.Pkjc.detailKV.county.tabs[index].value,
            XS.Main.Pkjc.detailKV.county.tabs[index].unit,2,50,[[12,2]]);
        /*XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.county.tabs[index].name, XS.Main.Pkjc.detailKV.county.tabs[index].value,
            XS.Main.Pkjc.detailKV.county.tabs[index].unit);
        XS.Main.Pkjc.addData2Table(xs_pkdc_btnCliDatagridObj,2, 50,[],"","color:#00bbee");*/
        return;
    }else if(index == 1)
    {
        var alreadyNum =  $(".datagrid-cell").length;
        XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.county.tabs[index].name, XS.Main.Pkjc.detailKV.county.tabs[index].value,
            XS.Main.Pkjc.detailKV.county.tabs[index].unit,2,35,[[0,2],[3,2],[6,2],[7,2],[8,2],[9,2],[10,2],[11,2]]);
        XS.Main.setDetailChildColor("datagrid-cell",[2,3,4,5,8,9,10,11,14,15,18,19],"#00c400",alreadyNum);
    }else if(index == 2)
    {
        var alreadyNum =  $(".datagrid-cell").length;
        XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.city.tabs[index].name, XS.Main.Pkjc.detailKV.city.tabs[index].value,
            XS.Main.Pkjc.detailKV.city.tabs[index].unit,3,50,[[0,3]]);
        XS.Main.setDetailChildColor("datagrid-cell",[2,3,4,5,6,7],"#00c400",alreadyNum);
    }else if(index == 3)
    {
        XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.county.tabs[index].name, XS.Main.Pkjc.detailKV.county.tabs[index].value,
            XS.Main.Pkjc.detailKV.county.tabs[index].unit,2,35,[[12,2]]);
    }else if(index == 5)
    {
        XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.county.tabs[index].name, XS.Main.Pkjc.detailKV.county.tabs[index].value,
            XS.Main.Pkjc.detailKV.county.tabs[index].unit,2,35,[[14,2]]);
    }else if(index == 6)
    {
        var alreadyNum =  $(".datagrid-cell").length;
        XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.county.tabs[index].name, XS.Main.Pkjc.detailKV.county.tabs[index].value,
            XS.Main.Pkjc.detailKV.county.tabs[index].unit,3,35,[[0,3],[4,3],[8,3],[12,3],[16,3],[20,3],[24,3],[28,3]]);
        XS.Main.setDetailChildColor("datagrid-cell",
            [2,3,4,5,6,7, 10,11,12,13,14,15, 18,19,20,21,22,23, 26,27,28,29,30,31, 34,35,36,37,38,39, 42,43,44,45,46,47,
                50,51,52,53,54,55, 58,59,60,61,62,63],"#00c400",alreadyNum);
        //XS.Searchbox.createTable(objArr,colls, rowH,mergeColls,nameCollStyle,valueCollStyle,addRowIdArr);

    }else
    {
        XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.county.tabs[index].name, XS.Main.Pkjc.detailKV.county.tabs[index].value,
            XS.Main.Pkjc.detailKV.county.tabs[index].unit,2,35,[]);
    }
    /*XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.county.tabs[index].name, XS.Main.Pkjc.detailKV.county.tabs[index].value,
        XS.Main.Pkjc.detailKV.county.tabs[index].unit);
    XS.Main.Pkjc.addData2Table(xs_pkdc_btnCliDatagridObj, 2, 35,[],"","color:#00bbee");*/

    switch (index) {
        case 1 ://土地信息
            //土地信息的pie显示
            $("#xs_pkdc_tabsContent").css({height:"40%",borderBottom:"1px solid #ddd"});
            $("#xs_pkdc_tabsContentPie").css({height:"60%"});
            var sumIndex = [0, 3, 6, 8, 10];
            var sum = 0;
            for(var i=0;i<sumIndex.length;i++){
                sum += xs_pkdc_btnCliDatagridObj[sumIndex[i]].valueNotUnit;
            }
            var addValue = (json[0].CBS_xzqymj*100 - sum)>=0 ? (json[0].CBS_xzqymj*100 - sum) : 0;
            xs_pkdc_btnCliDatagridObj.push({name:"其他",valueNotUnit:addValue,value:addValue + "公顷"});
            xs_tipAnalyUnit = [{name:"国有土地分布",value:["公顷"]}];
            XS.Main.Pkjc.tabsContentPie(["国有土地分布","center"], [0, 3, 6, 8, 10,12], "xs_pkdc_tabsContentPie", [], "");
            break;
        case 2 ://经济情况
            //经济收入的三大产业pie显示
            xs_pkdc_btnCliDatagridObj[1].name="第一产业";
            xs_pkdc_btnCliDatagridObj[2].name="第二产业";
            xs_pkdc_btnCliDatagridObj[3].name="第三产业";
            xs_tipAnalyUnit = [{name:"国民生产总值分布",value:["万元"]}];
            XS.Main.Pkjc.tabsContentPie(["国民生产总值分布","center"], [1, 2, 3], "xs_pkdc_tabsContentPie", [], "");
            break;
        case 3 ://人口统计
            $("#xs_pkdc_tabsContentBtn").css("display", "block");
            $("#xs_pkdc_tabsContentBtn1").linkbutton({text: "户及人口贫困分布"});
            $("#xs_pkdc_tabsContentBtn2").linkbutton({text: "农村及少数民族人口分布"});

            xs_tipAnalyUnit = [{name:"贫困户分布",value:["户"]},{name:"贫困人口分布",value:["人"]}];
            XS.Main.Pkjc.tabsContentPie(["贫困户分布","center"], [2], "xs_pkdc_tabsContPieDiv1", [0,2], "非贫困户数");
            XS.Main.Pkjc.tabsContentPie(["贫困人口分布","center"], [3], "xs_pkdc_tabsContPieDiv2", [1,3], "非贫困人口");
            $("#xs_pkdc_tabsContentBtn1").click(function () {
                xxs_tipAnalyUnit = [{name:"贫困户分布",value:["户"]},{name:"贫困人口分布",value:["人"]}];
                XS.Main.Pkjc.tabsContentPie(["贫困户分布","center"], [2], "xs_pkdc_tabsContPieDiv1", [0,2], "非贫困户数");
                XS.Main.Pkjc.tabsContentPie(["贫困人口分布","center"], [3], "xs_pkdc_tabsContPieDiv2", [1,3], "非贫困人口");
            });
            $("#xs_pkdc_tabsContentBtn2").click(function () {
                xs_tipAnalyUnit = [{name:"农村人口分布",value:["人"]},{name:"少数民族人口分布",value:["人"]}];
                XS.Main.Pkjc.tabsContentPie(["农村人口分布","center"], [5], "xs_pkdc_tabsContPieDiv1", [1,5], "城镇人口");
                XS.Main.Pkjc.tabsContentPie(["少数民族人口分布","center"], [10], "xs_pkdc_tabsContPieDiv2", [1,10], "汉族人口");
            });
            break;
        case 4 ://重点工作
            $("#xs_pkdc_tabsContent").css({height:"40%",borderBottom:"1px solid #ddd"});
            $("#xs_pkdc_tabsContentPie").css({height:"60%"});
            var xAxis = ['','category',["通公路村","通客运村","通电村","有农合村","旅游村","有卫生室村","通广播村","通宽带村","有图书室村"],true];
            var series = [['重点工作','bar',0,[],null,[true,'top',"{c}个"]]];//[[name,type,barGap,data,stack,showLabel,position]]
            for(var i=3;i<=12;i++){
                if(i == 9)continue;
                series[0][3].push(xs_pkdc_btnCliDatagridObj[i].valueNotUnit);
            }

            xs_tipAnalyUnit = [{name:"重点工作",value:["个"]}];
            XS.Main.Pkjc.ciAnalyOpt([],['axis',['shadow'],XS.Main.Pkjc.tipAnalyFarmatterCur],[],[40,40,30,20],xAxis,[['村数(个)','value']],[],[],series,"xs_pkdc_tabsContentPie");

            //XS.Main.Pkjc.dynScatterSeries("扶贫措施", [2, 4, 5, 7, 8], "xs_pkdc_tabsContentPie", 5);
            break;
        case 5 ://专项扶贫
            $("#xs_pkdc_tabsContent").css({height:"40%",borderBottom:"1px solid #ddd"});
            $("#xs_pkdc_tabsContentPie").css({height:"60%"});
            /*$("#xs_pkdc_tabsContent").css({height:"40%",borderBottom:"1px solid #ddd"});
            $("#xs_pkdc_tabsContentPie").css({height:"60%"});
            var xAxis = ['','category',["雨露计划培训人数","劳动力转移培训人数","适用技能培训人数","村致富培训人数"],true];
            var series = [['','bar',0,[],null,true,'top']];//[[name,type,barGap,data,stack,showLabel,position]]
            XS.Main.Pkjc.ananlyValueOfJson(json,
                [series[0][3],series[0][3],series[0][3],series[0][3]],["CAS_RAIN_POP","CAS_TRANS_TRAINNUM","CAS_SKILL_TRAINNUM","CAS_LEADER_TRAINNUM"],'',[]);
            XS.Main.Pkjc.ciAnalyOpt([],['axis',['shadow']],[],[50,40,50,20],xAxis,[['人数(人)','value']],[],[],series,"xs_pkdc_tabsContentPie");*/
            xs_tipAnalyUnit = [{name:"各项培训情况",value:["人"]}];
            XS.Main.Pkjc.tabsContentPie(["各项培训情况","center"], [2, 4, 5, 6], "xs_pkdc_tabsContentPie", [], "","70%");
            break;
        case 6 ://专项资金
            $("#xs_pkdc_tabsContent").css({height:"40%",borderBottom:"1px solid #ddd"});
            $("#xs_pkdc_tabsContentPie").css({height:"60%"});
            var xAxis = ['','category',["交通部门","水利部门","能源部门","住建部门","农、林业部门","教育部门","卫计部门","文化部门"],true];
            var series = [['中央资金','bar',0,[],"资金",[false]],['省级资金','bar',0,[],"资金",[false]],['市县资金','bar',0,[],"资金",[false]]];
            var legend = [10,['中央资金',"省级资金","市县资金"]];
            for(var i=0;i<xs_pkdc_btnCliDatagridObj.length;i++){
                if(i%4 == 1){
                    series[0][3].push(xs_pkdc_btnCliDatagridObj[i].valueNotUnit);
                }else if(i%4 == 2){
                    series[1][3].push(xs_pkdc_btnCliDatagridObj[i].valueNotUnit);
                }else if(i%4 == 3){
                    series[2][3].push(xs_pkdc_btnCliDatagridObj[i].valueNotUnit);
                }
            }
            xs_tipAnalyUnit = [{name:"中央资金",value:["万元","万元","万元"]}];
            XS.Main.Pkjc.ciAnalyOpt([],['axis',['shadow'],XS.Main.Pkjc.tipAnalyFarmatterNex],legend,[60,40,70,20],xAxis,[['资金(万元)','value']],[],[],series,"xs_pkdc_tabsContentPie");

            //XS.Main.Pkjc.tabsContentPie(["各项扶贫资金投入情况","center",10], [6, 7, 8, 9, 10, 11, 12, 13], "xs_pkdc_tabsContentPie", [], "");
            break;
    }
}
//详情镇级内容展示
XS.Main.Pkjc.townDetailShow = function(json,index){
    switch (index) {
        case 0 :
            XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.town.tabs[index].name, XS.Main.Pkjc.detailKV.town.tabs[index].value,
                XS.Main.Pkjc.detailKV.town.tabs[index].unit,2, 50,[]);
            break;
        case 1 ://基本统计
            XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.town.tabs[index].name, XS.Main.Pkjc.detailKV.town.tabs[index].value,
            XS.Main.Pkjc.detailKV.town.tabs[index].unit,3, 35,[[12,3]]);
            var xAxis = ['','category',["劳动力"/*,"省内务工","省外务工"*/,"外出务工","少数民族","未安全饮水","农村低保",
                "需易地搬迁","新农合","居民养老"],true];
            //[name,type,data,redius,center,roseType,[selectedMode,hoverAnimation,legendHoverLink,selectedOffset,labelshow,labelLineshow]]
            var series = [['人数统计','bar',0,[],false,[true,'top',"{c}人"]]];
            for(var i=3;i<xs_pkdc_btnCliDatagridObj.length;i++){
                if(i == 4 || i == 5)continue;
                series[0][3].push(xs_pkdc_btnCliDatagridObj[i].valueNotUnit);
            }
            xs_tipAnalyUnit = [{name:"人数统计",value:["人"]}];
            XS.Main.Pkjc.ciAnalyOpt([5,'人数统计'],['item',[""],XS.Main.Pkjc.tipAnalyFarmatterCur],[],[60,40,50,20],xAxis,[['人数(人)','value']],[],[],series,"xs_pkdc_tabsContentPie");
            break;
        case 2 ://公共服务
            XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.town.tabs[index].name, XS.Main.Pkjc.detailKV.town.tabs[index].value,
                XS.Main.Pkjc.detailKV.town.tabs[index].unit,3, 40,[[7,2]]);
            var xAxis = ['','category',[],true];
            var series = [['公共设施','bar',0,[],null,[true,'top',"{c}个"]]];//[[name,type,barGap,data,stack,showLabel,position]]
            for(var i=0;i<xs_pkdc_btnCliDatagridObj.length - 1;i++){
                xAxis[2].push(xs_pkdc_btnCliDatagridObj[i].name);
                series[0][3].push(xs_pkdc_btnCliDatagridObj[i].valueNotUnit);
            }
            xs_tipAnalyUnit = [{name:"公共设施",value:["个"]}];
            XS.Main.Pkjc.ciAnalyOpt([],['axis',['shadow'],XS.Main.Pkjc.tipAnalyFarmatterCur],[],[40,40,30,20],xAxis,[['个数(个)','value']],[],[],series,"xs_pkdc_tabsContentPie");
            break;
        case 3 ://生产生活
            XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.town.tabs[index].name, XS.Main.Pkjc.detailKV.town.tabs[index].value,
                XS.Main.Pkjc.detailKV.town.tabs[index].unit, 3, 35,[[15,3]]);
            var yAxis = [['','category',[],true]];
            var series = [['生产生活','bar',0,[],null,[true,'right',"{c}户"]]];//[[name,type,barGap,data,stack,showLabel,position]]
            for(var i=3;i<xs_pkdc_btnCliDatagridObj.length;i++){
                yAxis[0][2].push(xs_pkdc_btnCliDatagridObj[i].name);
                series[0][3].push(xs_pkdc_btnCliDatagridObj[i].valueNotUnit);
            }
            xs_tipAnalyUnit = [{name:"生产生活",value:["户"]}];
            XS.Main.Pkjc.ciAnalyOpt([],['axis',['shadow'],XS.Main.Pkjc.tipAnalyFarmatterCur],[],[5,30,110,60],['户数(户)','value'],yAxis,[],[],series,"xs_pkdc_tabsContentPie");
            break;
        case 4 ://经济情况
            XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.town.tabs[index].name, XS.Main.Pkjc.detailKV.town.tabs[index].value,
                XS.Main.Pkjc.detailKV.town.tabs[index].unit, 3, 50,[[6,3]]);
            var xAxis1 = ['','category',[],true];
            var xAxis2 = ['','category',[],true];
            var series1 = [['主要经济收入','bar',0,[],null,[true,'top',"{c}万元"]]];//[[name,type,barGap,data,stack,showLabel,position]]
            var series2 = [['种植面积','bar',0,[],null,[true,'top',"{c}亩"]]];//[[name,type,barGap,data,stack,showLabel,position]]
            for(var i=0;i<xs_pkdc_btnCliDatagridObj.length;i++){
                if(i == 1 || i == 2){
                    xAxis1[2].push(xs_pkdc_btnCliDatagridObj[i].name);
                    series1[0][3].push(xs_pkdc_btnCliDatagridObj[i].valueNotUnit);
                }else if(i == 5 || i == 6){
                    xAxis2[2].push(xs_pkdc_btnCliDatagridObj[i].name);
                    series2[0][3].push(xs_pkdc_btnCliDatagridObj[i].valueNotUnit);
                }
            }
            xs_tipAnalyUnit = [{name:"主要经济收入",value:["万元"]},{name:"种植面积",value:["亩"]}];
            XS.Main.Pkjc.ciAnalyOpt([],['axis',['shadow'],XS.Main.Pkjc.tipAnalyFarmatterCur],[],[80,40,40,40],xAxis1,[['经济收入(万元)','value']],[],[],series1,"xs_pkdc_tabsContPieDiv1");
            XS.Main.Pkjc.ciAnalyOpt([],['axis',['shadow'],XS.Main.Pkjc.tipAnalyFarmatterCur],[],[80,40,40,40],xAxis2,[['面积(亩)','value']],[],[],series2,"xs_pkdc_tabsContPieDiv2");
            break;
    }
}
//详情村级内容展示
XS.Main.Pkjc.villDetailShow = function(json,index){
    switch (index) {
        case 0 ://基本信息
            XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.village.tabs[index].name, XS.Main.Pkjc.detailKV.village.tabs[index].value,
                XS.Main.Pkjc.detailKV.village.tabs[index].unit,2, 50,[[10,2]]);
            break;
        case 1://基本统计
            var alreadyNum =  $(".datagrid-cell").length;
            XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.village.tabs[index].name, XS.Main.Pkjc.detailKV.village.tabs[index].value,
                XS.Main.Pkjc.detailKV.village.tabs[index].unit,2,35,[[0,2],[1,2],[2,2]]);
            XS.Main.setDetailChildColor("datagrid-cell",[2,3,6,7,8,9],"#00c400",alreadyNum);

            $("#xs_pkdc_tabsContent").css({height:"40%",borderBottom:"1px solid #ddd"});
            $("#xs_pkdc_tabsContentPie").css({height:"60%"});
            var series = [['国土面积分布','bar',0,[],null,[true,'top',"{c}亩"]]];//[[name,type,barGap,data,stack,showLabel,position]]
            var xAxis = ['','category',[],true];
            var targetData = [0,2,5,6];
            for(var i=0;i<targetData.length;i++){
                series[0][3].push(xs_pkdc_btnCliDatagridObj[targetData[i]].valueNotUnit);
                xAxis[2].push(xs_pkdc_btnCliDatagridObj[targetData[i]].name);
            }
            xs_tipAnalyUnit = [{name:"国土面积分布",value:["亩"]}];
            XS.Main.Pkjc.ciAnalyOpt([],['axis',['shadow'],XS.Main.Pkjc.tipAnalyFarmatterCur],[],[40,40,30,20],xAxis,[['面积(亩)','value']],[],[],series,"xs_pkdc_tabsContentPie");
            //XS.Main.Pkjc.tabsContentPie(["国有土地分布图","center",10], [5, 6, 7, 8, 9], "xs_pkdc_tabsContentPie", [], "");
            break;
        case 2://人口信息
            XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.village.tabs[index].name, XS.Main.Pkjc.detailKV.village.tabs[index].value,
                XS.Main.Pkjc.detailKV.village.tabs[index].unit,2, 30,[[12,2]]);

            var series = [['人口统计','bar',0,[],null,[true,'top',"{c}人"]]];//[[name,type,barGap,data,stack,showLabel,position]]
            for(var i=3;i<xs_pkdc_btnCliDatagridObj.length;i++){
                if(i == 4 || i == 6)continue;
                series[0][3].push(xs_pkdc_btnCliDatagridObj[i].valueNotUnit);
            }
            var xAxis = ['','category',["国家标准贫困","低保","五保户","少数民族","妇女","残疾","劳动力","外出务工"],true];
            xs_tipAnalyUnit = [{name:"人口统计",value:["人"]}];
            XS.Main.Pkjc.ciAnalyOpt([10,"人口统计"],['axis',['shadow'],XS.Main.Pkjc.tipAnalyFarmatterCur],[],[60,40,60,40],xAxis,[['人数(人)','value']],[],[],series,"xs_pkdc_tabsContentPie");

            /*$("#xs_pkdc_tabsContentBtn").css("display", "block");
            $("#xs_pkdc_tabsContentBtn1").linkbutton({text: "户、人口及资助情况"});
            $("#xs_pkdc_tabsContentBtn2").linkbutton({text: "健康、劳动力及参培"});

            XS.Main.Pkjc.tabsContentPie(["贫困户分布情况","center",10], [3], "xs_pkdc_tabsContPieDiv1", [1, 3], "非贫困户");
            XS.Main.Pkjc.tabsContentPie(["贫困人口分布情况","center",10], [4], "xs_pkdc_tabsContPieDiv2", [2, 4], "非贫困人口");
            XS.Main.Pkjc.tabsContentPie(["资助情况","center",10], [5, 6], "xs_pkdc_tabsContPieDiv3", [], "");
            $("#xs_pkdc_tabsContentBtn1").click(function () {
                XS.Main.Pkjc.tabsContentPie(["贫困户分布情况","center",10], [3], "xs_pkdc_tabsContPieDiv1", [1, 3], "非贫困户");
                XS.Main.Pkjc.tabsContentPie(["贫困人口分布情况","center",10], [4], "xs_pkdc_tabsContPieDiv2", [2, 4], "非贫困人口");
                XS.Main.Pkjc.tabsContentPie(["资助情况","center",10], [5, 6], "xs_pkdc_tabsContPieDiv3", [], "");
            });
            $("#xs_pkdc_tabsContentBtn2").click(function () {
                XS.Main.Pkjc.tabsContentPie(["健康状况","center",10], [9], "xs_pkdc_tabsContPieDiv1", [2, 9], "非残疾人");
                XS.Main.Pkjc.tabsContentPie(["劳动力情况","center",10], [10], "xs_pkdc_tabsContPieDiv2", [2, 10], "非贫困人口");
                XS.Main.Pkjc.tabsContentPie(["参培情况","center",10], [11], "xs_pkdc_tabsContPieDiv3", [2, 11], "未参加培训人数");
            });*/
            break;
        case 3://公共服务
            XS.Main.Pkjc.dataTable(json, XS.Main.Pkjc.detailKV.village.tabs[index].name, XS.Main.Pkjc.detailKV.village.tabs[index].value,
                XS.Main.Pkjc.detailKV.village.tabs[index].unit,3, 50,[[9,3]]);
            var xAxis = ['','category',[],true];
            var series = [['公共设施','bar',50,[],null,[true,'top',"{c}人"]]];//[[name,type,barGap,data,stack,showLabel,position]]
            for(var i=0;i<=3;i++){
                xAxis[2].push(xs_pkdc_btnCliDatagridObj[i].name);
                series[0][3].push(xs_pkdc_btnCliDatagridObj[i].valueNotUnit);
            }
            xs_tipAnalyUnit = [{name:"公共设施",value:["人"]}];
            XS.Main.Pkjc.ciAnalyOpt([],['axis',['shadow'],XS.Main.Pkjc.tipAnalyFarmatterCur],[],[60,40,60,40],xAxis,[['个数(个)','value']],[],[],series,"xs_pkdc_tabsContentPie");
            //XS.Main.Pkjc.tabsContentPie(["公共设施情况","center",10], [0, 1, 2, 3, 4], "xs_pkdc_tabsContentPie", [], "");
            break;
    }
}
//数据分析市级内容展示
XS.Main.Pkjc.cityAnalyShow = function(json,index){
    switch (index){
        case 0 ://饮水分析
            var xAxis = ['','category',[],true];
            var series = [['未安全饮水人数','bar',0,[],null,[true,"top","{c}人"]],['未安全饮水率','line',1,[],false,null,[true,"top","{c}%"]]];
            XS.Main.Pkjc.ananlyValueOfJson(json,[xAxis[2],series[0][3],series[1][3]],['REGION_Name','UnwaterNum','UnwaterRate'],'',[]);
            xs_tipAnalyUnit = [{name:"未安全饮水人数",value:['人','%']}];
            XS.Main.Pkjc.ciAnalyOpt([5,'饮水分析'],['axis',['line'],XS.Main.Pkjc.tipAnalyFarmatterNex],
                [40,['未安全饮水人数','未安全饮水率']],
                [120,40,80,70],xAxis,[['未安全饮水人数(人)','value'],['未安全饮水率(%)','value']],[],[],series,"xs_pkdc_AnalysTabsChart");

            break;
        case 1 ://易地搬迁
            /*$("#xs_pkdc_AnalysTabsChart").append('<div id="xs_pkdc_AnalysTabsChart1" style="width:100%;height: 500px;box-sizing: border-box"></div>');
            $("#xs_pkdc_AnalysTabsChart").append('<div id="xs_pkdc_AnalysTabsChart2" style="width:100%;height: 400px;box-sizing: border-box"></div>');
            var radar = ['60%',["50%","55%"],[[],[]]];
            var radarSeries = [['易地搬迁户数 vs 易地搬迁人数','radar',[['易地搬迁户数',[]],['易地搬迁人数',[]]]]];

            var xAxis = ['','category',[],true];
            var lineSeries = [['易地搬迁率','line',0,[],false]];
            XS.Main.Pkjc.ananlyValueOfJson(json,[radar[2][0],radarSeries[0][2][0][1],radarSeries[0][2][1][1],xAxis[2],lineSeries[0][3]],
                ['REGION_Name','MoveHnum','MovePnum','REGION_Name','MoveRate'],'MovePnum',radar[2]);
            XS.Main.Pkjc.ciAnalyOpt([5,'易地搬迁'],['',[]],[40,["易地搬迁户数","易地搬迁人数"]],[],[],[],radar,[],radarSeries,"xs_pkdc_AnalysTabsChart1");
            XS.Main.Pkjc.ciAnalyOpt([0,"易地搬迁率"],['item',['']],[],[40,40,40,30],xAxis,[['(%)','value']],[],[],lineSeries,"xs_pkdc_AnalysTabsChart2");*/

            var yAxis = [['','category',[],true]];
            var series = [["易地搬迁户数",'bar',0,[],null,[true,"right","{c}户"]],["易地搬迁人数",'bar',0,[],null,[true,"right","{c}人"]]]//,["易地搬迁率",'line',1,[],false,false,[true,"top","{c}%"]]];

            XS.Main.Pkjc.ananlyValueOfJson(json,[yAxis[0][2],series[0][3],series[1][3]/*,series[2][3]*/],['REGION_Name','MoveHnum','MovePnum'/*,'MoveRate'*/],'',[]);
            //(title,tooltip,legend,grid,xAxis,yAxis,radar,polar,series,initChart,color)
            xs_tipAnalyUnit = [{name:"易地搬迁户数",value:['户','人']}];
            XS.Main.Pkjc.ciAnalyOpt([5,'易地搬迁'],['axis',['line'],XS.Main.Pkjc.tipAnalyFarmatterNex],
                [40,["易地搬迁户数","易地搬迁人数"]],[80,40,60,80],
                ['','value'],yAxis,[],[],series,"xs_pkdc_AnalysTabsChart");
            break;
        case 2 ://培训分析
            $("#xs_pkdc_AnalysTabsChart").append('<div id="xs_pkdc_AnalysTabsChart1" style="width:100%;height: 500px;box-sizing: border-box"></div>');
            $("#xs_pkdc_AnalysTabsChart").append('<div id="xs_pkdc_AnalysTabsChart2" style="width:100%;height: 400px;box-sizing: border-box"></div>');
            var legend = [40,['省内务工人数','省外务工人数','劳动力人数','参加培训人数']];
            var yAxis = [['','category',[]]];
            var series = [['省内务工人数','bar',0,[],'总量',[true,"inside","{c}人"]],['省外务工人数','bar',0,[],'总量',[true,"inside","{c}人"]],
                ['劳动力人数','bar',0,[],'总量',[true,"inside","{c}人"]],['参加培训人数','bar',0,[],'总量',[true,"inside","{c}人"]]];
            var lineXAxis = ['','category',[],true];
            var lineSeries = [['培训率','line',0,[],false,null,[true,"top","{c}%"]],['省外务工率','line',0,[],false,null,[true,"top","{c}%"]],['省内务工率','line',0,[],false,null,[true,"top","{c}%"]]];
            XS.Main.Pkjc.ananlyValueOfJson(json,[yAxis[0][2],series[0][3],series[1][3],series[2][3],series[3][3],lineXAxis[2],lineSeries[0][3],lineSeries[1][3],lineSeries[2][3]],
                ['REGION_Name','InWorkNum','OutWorkNum','LaborNum','TrainNum','REGION_Name','TrainRate','OutWorkRate','InWorkRate'],'',[]);
            xs_tipAnalyUnit = [{name:"省内务工人数",value:['人','人','人','人']},{name:"培训率",value:['%','%','%']}];
            XS.Main.Pkjc.ciAnalyOpt([5,'培训分析'],['axis',['shadow'],XS.Main.Pkjc.tipAnalyFarmatterNex],legend,[90,40,80,100],['人数(人)','value'],yAxis,[],[],series,"xs_pkdc_AnalysTabsChart1");
            XS.Main.Pkjc.ciAnalyOpt([],['axis',['line'],XS.Main.Pkjc.tipAnalyFarmatterNex],[30,['培训率',"省外务工率","省内务工率"]],[60,40,40,40],lineXAxis,[['(%)','value']],[],[],lineSeries,"xs_pkdc_AnalysTabsChart2");
            break;
        case 3 ://社会保障
            var legend = [40,['合作医疗','养老保险','低保','合作医疗率','养老保险率','低保率']];
            var xAxis = ['','category',[],true];
            var series = [];
            for(var i=0;i<6;i++){
                if(i<3){series.push([legend[1][i],'bar',0,[],null,[true,"top","{c}人"]]);}
                else{series.push([legend[1][i],'line',1,[],false,null,[true,"top","{c}%"]]);}
            }
            XS.Main.Pkjc.ananlyValueOfJson(json,[xAxis[2],series[0][3],series[1][3],series[2][3],series[3][3],series[4][3],series[5][3]],
                ['REGION_Name','CoMedicalNum','EndowNum','LowNum','CoMedicalRate','EndowRate','LowRate'],'',[]);
            xs_tipAnalyUnit = [{name:"合作医疗",value:['人','人','人','%','%','%']}];
            XS.Main.Pkjc.ciAnalyOpt([5,'社会保障'],['axis',['line'],XS.Main.Pkjc.tipAnalyFarmatterNex],legend,[120,40,80,60],xAxis,[['人数(人)','value'],['(%)','value']],[],[],series,"xs_pkdc_AnalysTabsChart");
            break;
        case 4 ://危房情况
            var legend = [40,[]];
            //var series = [['危房户数','pie',[[],[]],[20, 90],['30%', '60%'],'radius'],['危房发生率','pie',[[],[]],[20, 90],['70%', '60%'],'area']];
            /*var series = [['危房户数','pie',[[],[]],[10, 60],['30%', '60%'],'radius',[false,true,true,0,true,true]],
                ['危房发生率','pie',[[],[]],[10, 60],['80%', '60%'],'radius',[false,true,true,0,true,true]]];
            XS.Main.Pkjc.ananlyValueOfJson(json,[legend[1],series[0][2][0],series[0][2][1],series[1][2][0],series[1][2][1]],
                ['REGION_Name','REGION_Name','DangerHnum','REGION_Name','DangerHRate'],'',[]);
            XS.Main.Pkjc.ciAnalyOpt([5,'危房情况'],['',[]],legend,[120,40,80,40],[],[],[],[],series,"xs_pkdc_AnalysTabsChart");*/

            var legend = [40,["危房户数","危房发生率"]];
            var xAxis = ['','category',[],true];
            var series = [['危房户数','bar',0,[],null,[true,"top","{c}户"]],["危房发生率",'line',1,[],false,null,[true,"top","{c}%"]]];
            XS.Main.Pkjc.ananlyValueOfJson(json,[xAxis[2],series[0][3],series[1][3]],['REGION_Name','DangerHnum','DangerHRate'],'',[]);
            xs_tipAnalyUnit = [{name:"危房户数",value:['户','%']}];
            XS.Main.Pkjc.ciAnalyOpt([5,'脱贫分析'],['axis',['line'],XS.Main.Pkjc.tipAnalyFarmatterNex],legend,[120,40,70,60],xAxis,[['户数(户)','value'],['危房发生率(%)','value']],[],[],series,"xs_pkdc_AnalysTabsChart");
            break;
        case 5 ://脱贫分析
            var legend = [40,["脱贫率","脱贫人数"]];
            var xAxis = ['','category',[],true];
            var series = [['脱贫户数','pie',[[],[]],[0, 60],['70%', '35%'],false],['脱贫人数','bar',0,[],null,[true,"top","{c}人"]],['脱贫率','line',1,[],false,null,[true,"top","{c}%"]]];
            XS.Main.Pkjc.ananlyValueOfJson(json,[legend[1],xAxis[2],series[0][2][0],series[0][2][1],series[1][3],series[2][3]],
                ['REGION_Name','REGION_Name','REGION_Name','OutPoorHNum','OutPoorPNum','OutPoorRate'],'',[]);
            xs_tipAnalyUnit = [{name:"脱贫户数",value:['户']},{name:"脱贫人数",value:['人']},{name:"脱贫率",value:['%']}];
            XS.Main.Pkjc.ciAnalyOpt([5,'脱贫分析'],['item',[''],XS.Main.Pkjc.tipAnalyFarmatterNex],legend,[120,40,70,50],xAxis,[['人数(人)','value'],['脱贫率(%)','value']],[],[],series,"xs_pkdc_AnalysTabsChart");
            break;
        case 6 ://致贫原因
            /*var radar = ['60%',["50%","55%"],[[],[]]];
            var series = [['','radar',[['人数',[]]]]];
            XS.Main.Pkjc.ananlyValueOfJson(json,[radar[2][0],series[0][2][0][1]],['REASON','NUM'],'NUM',radar[2]);
            XS.Main.Pkjc.ciAnalyOpt([5,'致贫原因'],['',[]],[],[],[],[],radar,[],series,"xs_pkdc_AnalysTabsChart");*/

            var yAxis = [['','category',[]]];
            var series = [['致贫原因','bar',0,[],false,[true,"right","{c}人"]]];
            XS.Main.Pkjc.ananlyValueOfJson(json,[yAxis[0][2],series[0][3]],['REASON','NUM'],'',[]);

            for(var i=0;i<yAxis[0][2].length-1;i++){
                for(var j=0;j<yAxis[0][2].length-1 - i;j++){
                    var changePostion = "";
                    if(yAxis[0][2][j].length < yAxis[0][2][j+1].length){
                        changePostion = yAxis[0][2][j+1];
                        yAxis[0][2][j+1] = yAxis[0][2][j];
                        yAxis[0][2][j] = changePostion;

                        changePostion = series[0][3][j+1];
                        series[0][3][j+1] = series[0][3][j];
                        series[0][3][j] = changePostion;
                    }
                }
            }
            xs_tipAnalyUnit = [{name:"致贫原因",value:['人']}];
            XS.Main.Pkjc.ciAnalyOpt([5,'致贫原因'],['axis',['shadow'],XS.Main.Pkjc.tipAnalyFarmatterCur],['致贫原因'],[40,40,110,80],['人数(人)','value'],yAxis,[],[],series,"xs_pkdc_AnalysTabsChart");
            break;
        case 7 ://文化程度
            var xAxis = ['','category',[],true];
            var series = [['文化程度','bar',0,[],true,[true,"top","{c}人"]]];
            XS.Main.Pkjc.ananlyValueOfJson(json,[xAxis[2],series[0][3]],['EDU','NUM'],'',[]);
            xs_tipAnalyUnit = [{name:"文化程度",value:['人']}];
            XS.Main.Pkjc.ciAnalyOpt([10,'文化程度'],['axis',['shadow'],XS.Main.Pkjc.tipAnalyFarmatterCur],['文化程度'],[80,60,80,40],xAxis,[['人数(人)','value']],[],[],series,"xs_pkdc_AnalysTabsChart");
            break;
    }
}
//数据分析县级内容展示
XS.Main.Pkjc.countyAnalyShow = function(json,index){
    switch (index) {
        case 0 ://文化程度var yAxis = [['','category',[]]];
            var xAxis = ['','category',[],true];
            var series = [['文化程度','bar',0,[],true,[true,'top',"{c}人"]]];//[[name,type,barGap,data,stack,showLabel,position]]
            XS.Main.Pkjc.ananlyValueOfJson(json,[xAxis[2],series[0][3]],['EDU','NUM'],'',[]);
            xs_tipAnalyUnit = [{name:'文化程度',value:['人']}];
            XS.Main.Pkjc.ciAnalyOpt([10,'文化程度'],['axis',['shadow'],XS.Main.Pkjc.tipAnalyFarmatterCur],[],[60,40,80,40],xAxis,[['人数(人)','value']],[],[],series,"xs_pkdc_AnalysTabsChart");
            break;
        case 1 ://致贫原因
             /*var radar = ['60%',["50%","55%"],[[],[]]];
             var series = [['','radar',[['人数',[]]]]];
             XS.Main.Pkjc.ananlyValueOfJson(json,[radar[2][0],series[0][2][0][1]],['REASON','NUM'],'NUM',radar[2]);
             XS.Main.Pkjc.ciAnalyOpt([5,'致贫原因(人)'],['',[]],[],[],[],[],radar,[],series,"xs_pkdc_AnalysTabsChart",['rgba(0,0,255,1)']);
            */
            var yAxis = [['','category',[]]];
            var series = [['致贫原因','bar',0,[],false,[true,'right',"{c}人"]]];
            XS.Main.Pkjc.ananlyValueOfJson(json,[yAxis[0][2],series[0][3]],['REASON','NUM'],'',[]);

            for(var i=0;i<yAxis[0][2].length-1;i++){
                for(var j=0;j<yAxis[0][2].length-1 - i;j++){
                    var changePostion = "";
                    if(yAxis[0][2][j].length < yAxis[0][2][j+1].length){
                        changePostion = yAxis[0][2][j+1];
                        yAxis[0][2][j+1] = yAxis[0][2][j];
                        yAxis[0][2][j] = changePostion;

                        changePostion = series[0][3][j+1];
                        series[0][3][j+1] = series[0][3][j];
                        series[0][3][j] = changePostion;
                    }
                }
            }
            xs_tipAnalyUnit = [{name:'致贫原因',value:['人']}];
            XS.Main.Pkjc.ciAnalyOpt([5,'致贫原因'],['axis',['shadow'],XS.Main.Pkjc.tipAnalyFarmatterCur],['致贫原因'],[40,40,120,60],['人数(人)','value'],yAxis,[],[],series,"xs_pkdc_AnalysTabsChart");
            break;
        case 2 ://帮扶措施
            var legend = [40,["帮扶措施","危房改造户","易地扶贫搬迁户"]];
            var xAxis = ['','category',["低保人数","参加培训人数","少数民族人数","易地扶贫搬迁人数","脱贫人数"],true];//['危房发生率','pie',[[],[]],[0, 60],['70%', '35%'],false]
            var series = [['帮扶人措施','bar',0,[],false,[true,'top',"{c}人"]],['帮扶户措施','pie',[["危房改造户","易地扶贫搬迁户"],[]],[0, 70],['75%', '35%'],false]];
            XS.Main.Pkjc.ananlyValueOfJson(json,[series[0][3],series[0][3],series[0][3],series[0][3],series[0][3],
                    series[1][2][1],series[1][2][1]],
                ['cps_lowgaran_pop','cps_ltrained_num','cps_minority_num','cps_move_pop','cps_outpov_pop',
                    'cps_reconstru_hhnum','cps_move_hhnum'],'',[]);
            xs_tipAnalyUnit = [{name:'帮扶人措施',value:['人']},{name:'帮扶户措施',value:['户']}];
            XS.Main.Pkjc.ciAnalyOpt([5,'帮扶措施'],['item',[''],XS.Main.Pkjc.tipAnalyFarmatterCur],legend,[120,40,80,40],xAxis,[['人数(人)','value']],[],[],series,"xs_pkdc_AnalysTabsChart");
            break;
        case 3 ://五通(五四)
            var field = ["RoadHardNum","BusStateNum","WlanNum","HRoadHardNum","PowerNum"];
            var xAxis = ['','category',["通(沥青/水泥)公路行政村","通客运行政村","通宽带行政村","通户公路行政村","通生产用电行政村"],false];
            var legend = [40,[],[]];
            XS.Main.Pkjc.ananlyValueOfJson(json,[legend[1]],['REGION_Name'],'',[]);
            //[[name,type,yAxisIndex,[[],[]],smooth]]
            var series = [];
            xs_tipAnalyUnit = [{name:legend[1][0],value:[]}];
            var jaonIsNullNum = 0;
            for(var i=0;i<json.length;i++){
                if(!json[i]){
                    jaonIsNullNum++;
                    continue;
                }
                xs_tipAnalyUnit[0].value.push('个');
                legend[2].push('rect');
                series.push([legend[1][i-jaonIsNullNum],'line',0,[],false,true,[false]]);
                for(var j=0;j<field.length;j++){
                    series[i-jaonIsNullNum][3].push(json[i][field[j]]);
                }
            }
            XS.Main.Pkjc.ciAnalyOpt([5,'五通(五通四有)'],['axis',['line'],XS.Main.Pkjc.tipAnalyFarmatterNex],legend,[230,40,50,70],xAxis,[['行政村(个)','value']],[],[],series,"xs_pkdc_AnalysTabsChart",[]);
            break;
        case 4 ://四有(五四)
            var field = ["BeautifulNum","CultureNum","EconomyNum","HealthRoomNum"];
            var xAxis = ['','category',["美丽乡村","有文化场所行政村","有集体经济行政村","有卫生室行政村"],false];
            var legend = [40,[],[]];
            XS.Main.Pkjc.ananlyValueOfJson(json,[legend[1]],['REGION_Name'],'',[]);
            //[[name,type,yAxisIndex,[[],[]],smooth]]
            var series = [];
            xs_tipAnalyUnit = [{name:legend[1][0],value:[]}];
            var jaonIsNullNum = 0;
            for(var i=0;i<json.length;i++){
                if(!json[i]){
                    jaonIsNullNum++;
                    continue;
                }
                xs_tipAnalyUnit[0].value.push('个');
                legend[2].push('rect');
                series.push([legend[1][i-jaonIsNullNum],'line',0,[],false,true,[false]]);
                for(var j=0;j<field.length;j++){
                    series[i-jaonIsNullNum][3].push(json[i][field[j]]);
                }
            }
            XS.Main.Pkjc.ciAnalyOpt([5,'四有(五通四有)'],['axis',['line'],XS.Main.Pkjc.tipAnalyFarmatterNex],legend,[230,40,50,70],xAxis,[['行政村(个)','value']],[],[],series,"xs_pkdc_AnalysTabsChart",[]);
            break;
        case 5 ://四有(四五)
            var field = ["WaterSafeNum","ElectricSafeNum","HouseSafeNum","YardHardNum"];
            var xAxis = ['','category',["安全饮水户数","安全用电户数","安全住房户数","院坝硬化户数"],false];
            var legend = [40,[],[]];
            XS.Main.Pkjc.ananlyValueOfJson(json,[legend[1]],['REGION_Name'],'',[]);
            var series = [];
            xs_tipAnalyUnit = [{name:legend[1][0],value:[]}];
            var jaonIsNullNum = 0;
            for(var i=0;i<json.length;i++){
                if(!json[i]){
                    jaonIsNullNum++;
                    continue;
                }
                xs_tipAnalyUnit[0].value.push('户');
                legend[2].push('rect');
                series.push([legend[1][i-jaonIsNullNum],'line',0,[],false,true,[false]]);
                for(var j=0;j<field.length;j++){
                    series[i-jaonIsNullNum][3].push(json[i][field[j]]);
                }
            }
            XS.Main.Pkjc.ciAnalyOpt([5,'四有(四有五覆盖)'],['axis',['line'],XS.Main.Pkjc.tipAnalyFarmatterNex],legend,[230,40,70,60],xAxis,[['户数(户)','value']],[],[],series,"xs_pkdc_AnalysTabsChart",[]);
            break;
        case 6 ://五覆盖(四五)
            var field = ["CoMedicNum","InsureNum","WorkSkillNum","EduHelpNum","IndustyNum"];
            var xAxis = ['','category',["参加合作医保人数","参加养老保险人数","参加就业培训人数","教育资助人数","增收产业人数"],false];
            var legend = [40,[],[]];
            XS.Main.Pkjc.ananlyValueOfJson(json,[legend[1]],['REGION_Name'],'',[]);
            var series = [];
            xs_tipAnalyUnit = [{name:legend[1][0],value:[]}];
            var jaonIsNullNum = 0;
            for(var i=0;i<json.length;i++){
                if(!json[i]){
                    jaonIsNullNum++;
                    continue;
                }
                xs_tipAnalyUnit[0].value.push('人');
                legend[2].push('rect');
                series.push([legend[1][i-jaonIsNullNum],'line',0,[],false,true,[false]]);
                for(var j=0;j<field.length;j++){
                    series[i-jaonIsNullNum][3].push(json[i][field[j]]);
                }
            }
                XS.Main.Pkjc.ciAnalyOpt([5,'五覆盖(四有五覆盖)'],['axis',['line'],XS.Main.Pkjc.tipAnalyFarmatterNex],legend,[230,40,70,60],xAxis,[['人数(人)','value']],[],[],series,"xs_pkdc_AnalysTabsChart",[]);
            break;
    }
}
//数据分析镇级内容展示
XS.Main.Pkjc.townAnalyShow = function(json,index){
    switch (index) {
        case 0 ://文化程度
            /*var legend = [40,[]];
            var color = ['rgba(218,235,117,0.8)','rgba(214,161,244,0.8)','rgba(197,168,115,0.8)','rgba(184,255,193,0.8)','rgba(255,246,144,0.8)',
                'rgba(209,184,255,0.8)','rgba(255,224,200,0.8)'];
            var series = [['文化程度','pie',[[],[]],[0, '50%'],["50%","55%"],'area',['multiple',false,false,2,false]]];
            XS.Main.Pkjc.ananlyValueOfJson(json,[legend[1],series[0][2][0],series[0][2][1]],['EDU','EDU','NUM'],'NUM',[]);
            var polar = [["60%",["50%","55%"]],['value',false,false,false,false,false],['value',false,false,true,true,false,xs_pkdc_analyMax/1000]];
            XS.Main.Pkjc.ciAnalyOpt([5,'文化程度'],['',[],'{a}<br/>{b}: {c}({d}%)'],legend,[],[],[],[],polar,series,"xs_pkdc_AnalysTabsChart",color);*/
            var xAxis = ['','category',[],true];
            var series = [['文化程度','bar',0,[],true,[true,'top',"{c}人"]]];//[[name,type,barGap,data,stack,showLabel,position]]
            XS.Main.Pkjc.ananlyValueOfJson(json,[xAxis[2],series[0][3]],['EDU','NUM'],'',[]);
            xs_tipAnalyUnit = [{name:'文化程度',value:['人']}];
            XS.Main.Pkjc.ciAnalyOpt([10,'文化程度'],['axis',['shadow'],XS.Main.Pkjc.tipAnalyFarmatterCur],[],[60,40,80,40],xAxis,[['人数(人)','value']],[],[],series,"xs_pkdc_AnalysTabsChart");
            break;
        case 1 ://致贫原因
            /*var radar = ['60%',["50%","55%"],[[],[]]];
            var series = [['','radar',[['致贫原因',[]]]]];
            XS.Main.Pkjc.ananlyValueOfJson(json,[radar[2][0],series[0][2][0][1]],['REASON','NUM'],'NUM',radar[2]);
            XS.Main.Pkjc.ciAnalyOpt([5,'致贫原因'],['item',['']],[],[],[],[],radar,[],series,"xs_pkdc_AnalysTabsChart",['rgba(0,0,255,1)']);*/

            var yAxis = [['','category',[]]];
            var series = [['致贫原因','bar',0,[],false,[true,'right',"{c}人"]]];
            XS.Main.Pkjc.ananlyValueOfJson(json,[yAxis[0][2],series[0][3]],['REASON','NUM'],'',[]);

            for(var i=0;i<yAxis[0][2].length-1;i++){
                for(var j=0;j<yAxis[0][2].length-1 - i;j++){
                    var changePostion = "";
                    if(yAxis[0][2][j].length < yAxis[0][2][j+1].length){
                        changePostion = yAxis[0][2][j+1];
                        yAxis[0][2][j+1] = yAxis[0][2][j];
                        yAxis[0][2][j] = changePostion;

                        changePostion = series[0][3][j+1];
                        series[0][3][j+1] = series[0][3][j];
                        series[0][3][j] = changePostion;
                    }
                }
            }
            xs_tipAnalyUnit = [{name:'致贫原因',value:['人']}];
            XS.Main.Pkjc.ciAnalyOpt([5,'致贫原因'],['axis',['shadow'],XS.Main.Pkjc.tipAnalyFarmatterCur],['致贫原因'],[40,40,120,60],['人数(人)','value'],yAxis,[],[],series,"xs_pkdc_AnalysTabsChart");
            break;
        case 2 ://帮扶措施
            /*var legend = [40,["低保人数","参加培训人数","易地扶贫搬迁户","易地扶贫搬迁人数","危房改造户"]];
            var xAxis = ['','category',legend[1],true];
            var series = [['帮扶措施','bar',0,[],false,[true,'top',"{c}人"]]];
            XS.Main.Pkjc.ananlyValueOfJson(json,[series[0][3],series[0][3],series[0][3],series[0][3],series[0][3]],
                ['cps_lowgaran_pop','cps_outpov_pop','cps_move_hhnum','cps_move_pop','cps_reconstru_hhnum'],'',[]);
            xs_tipAnalyUnit = [{name:'帮扶措施',value:['人']}];
            XS.Main.Pkjc.ciAnalyOpt([15,'帮扶措施'],['',[]],legend,[110,40,80,40],xAxis,[['人数','value']],[],[],series,"xs_pkdc_AnalysTabsChart");*/
            var legend = [40,["帮扶措施","危房改造户","易地扶贫搬迁户"]];
            var xAxis = ['','category',["低保人数","参加培训人数","少数民族人数","易地扶贫搬迁人数","脱贫人数"],true];//['危房发生率','pie',[[],[]],[0, 60],['70%', '35%'],false]
            var series = [['帮扶人措施','bar',0,[],false,[true,'top',"{c}人"]],['帮扶户措施','pie',[["危房改造户","易地扶贫搬迁户"],[]],[0, 70],['75%', '35%'],false]];
            XS.Main.Pkjc.ananlyValueOfJson(json,[series[0][3],series[0][3],series[0][3],series[0][3],series[0][3],
                    series[1][2][1],series[1][2][1]],
                ['cps_lowgaran_pop','cps_ltrained_num','cps_minority_num','cps_move_pop','cps_outpov_pop',
                    'cps_reconstru_hhnum','cps_move_hhnum'],'',[]);
            xs_tipAnalyUnit = [{name:'帮扶人措施',value:['人']},{name:'帮扶户措施',value:['户']}];
            XS.Main.Pkjc.ciAnalyOpt([5,'帮扶措施'],['item',[''],XS.Main.Pkjc.tipAnalyFarmatterCur],legend,[120,40,80,40],xAxis,[['人数(人)','value']],[],[],series,"xs_pkdc_AnalysTabsChart");
            break;
        case 3 ://五通(五四)
            var field = ["RoadHardNum","BusStateNum","WlanNum","HRoadHardNum","PowerNum"];
            var xAxis = ['','category',["通(沥青/水泥)路行政村","通客运行政村","通宽带行政村","通户公路行政村","通生产用电行政村"],false];
            var legend = [80,[],[]];
            XS.Main.Pkjc.ananlyValueOfJson(json,[legend[1]],['REGION_Name'],'',[]);
            //[[name,type,yAxisIndex,[[],[]],smooth,stack]]
            var series = [];
            xs_tipAnalyUnit = [{name:legend[1][0],value:[]}];
            var jaonIsNullNum = 0;
            for(var i=0;i<json.length;i++){
                if(!json[i]){
                    jaonIsNullNum++;
                    continue;
                }
                xs_tipAnalyUnit[0].value.push('个');
                legend[2].push('rect');
                series.push([legend[1][i-jaonIsNullNum],'line',0,[],true,true,[false]]);
                for(var j=0;j<field.length;j++){
                    series[i-jaonIsNullNum][3].push(json[i][field[j]]);
                }
            }
            XS.Main.Pkjc.ciAnalyOpt([20,'五通(五通四有)'],['axis',['line'],XS.Main.Pkjc.tipAnalyFarmatterNex],legend,[200,40,40,70],xAxis,[['行政村(个)','value']],[],[],series,"xs_pkdc_AnalysTabsChart",[]);
            break;
        case 4 ://四有(五四)
            var field = ["BeautifulNum","CultureNum","EconomyNum","HealthRoomNum",];
            var xAxis = ['','category',["美丽乡村","有文化场所行政村","有集体经济行政村","有卫生室行政村"],false];
            var legend = [80,[],[]];
            XS.Main.Pkjc.ananlyValueOfJson(json,[legend[1]],['REGION_Name'],'',[]);
            //[[name,type,yAxisIndex,[[],[]],smooth,stack]]
            var series = [];
            xs_tipAnalyUnit = [{name:legend[1][0],value:[]}];
            var jaonIsNullNum = 0;
            for(var i=0;i<json.length;i++){
                if(!json[i]){
                    jaonIsNullNum++;
                    continue;
                }
                xs_tipAnalyUnit[0].value.push('个');
                legend[2].push('rect');
                series.push([legend[1][i-jaonIsNullNum],'line',0,[],true,true,[false]]);
                for(var j=0;j<field.length;j++){
                    series[i-jaonIsNullNum][3].push(json[i][field[j]]);
                }
            }
            XS.Main.Pkjc.ciAnalyOpt([20,'四有(五通四有)'],['axis',['line'],XS.Main.Pkjc.tipAnalyFarmatterNex],legend,[200,40,40,70],xAxis,[['行政村(个)','value']],[],[],series,"xs_pkdc_AnalysTabsChart",[]);
            break;
        case 5 ://四有(四五)
            var field = ["WaterSafeNum","ElectricSafeNum","HouseSafeNum","YardHardNum"];
            var xAxis = ['','category',["安全饮水户","安全用电户","安全住房户","院坝硬化户"],false];
            var legend = [60,[],[]];
            XS.Main.Pkjc.ananlyValueOfJson(json,[legend[1]],['REGION_Name'],'',[]);
            var series = [];
            xs_tipAnalyUnit = [{name:legend[1][0],value:[]}];
            var jaonIsNullNum = 0;
            for(var i=0;i<json.length;i++){
                if(!json[i]){
                    jaonIsNullNum++;
                    continue;
                }
                xs_tipAnalyUnit[0].value.push('户');
                legend[2].push('rect');
                series.push([legend[1][i-jaonIsNullNum],'line',0,[],true,true,[false]]);
                for(var j=0;j<field.length;j++){
                    series[i-jaonIsNullNum][3].push(json[i][field[j]]);
                }
            }
            XS.Main.Pkjc.ciAnalyOpt([5,'四有(四有五覆盖)'],['axis',['line'],XS.Main.Pkjc.tipAnalyFarmatterNex],legend,[200,40,40,50],xAxis,[['户数(户)','value']],[],[],series,"xs_pkdc_AnalysTabsChart",[]);
            break;
        case 6 ://五覆盖(四五)
            var field = ["CoMedicNum","InsureNum","WorkSkillNum","EduHelpNum","IndustyNum"];
            var xAxis = ['','category',["参加合作医保人数","参加养老保险人数","参加就业培训人数","教育资助人数","增收产业人数"],false];
            var legend = [60,[],[]];
            XS.Main.Pkjc.ananlyValueOfJson(json,[legend[1]],['REGION_Name'],'',[]);
            var series = [];
            xs_tipAnalyUnit = [{name:legend[1][0],value:[]}];
            var jaonIsNullNum = 0;
            for(var i=0;i<json.length;i++){
                if(!json[i]){
                    jaonIsNullNum++;
                    continue;
                }
                xs_tipAnalyUnit[0].value.push('人');
                legend[2].push('rect');
                series.push([legend[1][i-jaonIsNullNum],'line',0,[],true,true,[false]]);
                for(var j=0;j<field.length;j++){
                    series[i-jaonIsNullNum][3].push(json[i][field[j]]);
                }
            }
            XS.Main.Pkjc.ciAnalyOpt([5,'五覆盖(四有五覆盖)'],['axis',['line'],XS.Main.Pkjc.tipAnalyFarmatterNex],legend,[200,40,40,60],xAxis,[['人数(人)','value']],[],[],series,"xs_pkdc_AnalysTabsChart",[]);
            break;
    }
}
//数据分析村级内容展示
XS.Main.Pkjc.villAnalyShow = function(json,index){
    switch (index) {
        case 0 ://文化程度
            var xAxis = ['','category',[],false];
            var series = [['文化程度','line',0,[],true,null,[true,"top","{c}人"]]];
            XS.Main.Pkjc.ananlyValueOfJson(json,[xAxis[2],series[0][3]],['EDU','NUM'],'',[]);
            xs_tipAnalyUnit = [{name:'文化程度',value:['人']}];
            XS.Main.Pkjc.ciAnalyOpt([5,'文化程度'],['axis',["line"],XS.Main.Pkjc.tipAnalyFarmatterCur],[],[80,60,60,60],xAxis,[['人数(人)','value']],[],[],series,"xs_pkdc_AnalysTabsChart",[]);
            break;
        case 1 ://致贫原因
            /*var radar = ['60%',["50%","55%"],[[],[]]];
            var series = [['致贫原因','radar',[['',[]]]]];
            var jsonObj = [];
            for(var i=0;i<json.length;i++){
                if(json[i].REASON != '因残' && json[i].REASON != '缺资金'){
                    jsonObj.push(json[i]);
                }
            }

            XS.Main.Pkjc.ananlyValueOfJson(jsonObj,[radar[2][0],series[0][2][0][1]],['REASON','NUM'],'NUM',radar[2]);
            XS.Main.Pkjc.ciAnalyOpt([5,'致贫原因'],['',[]],[],[],[],[],radar,[],series,"xs_pkdc_AnalysTabsChart",['rgba(0,0,255,1)']);*/

            var yAxis = [['','category',[]]];
            var series = [['致贫原因','bar',0,[],false,[true,"top","{c}人"]]];
            XS.Main.Pkjc.ananlyValueOfJson(json,[yAxis[0][2],series[0][3]],['REASON','NUM'],'',[]);

            for(var i=0;i<yAxis[0][2].length-1;i++){
                for(var j=0;j<yAxis[0][2].length-1 - i;j++){
                    var changePostion = "";
                    if(yAxis[0][2][j].length < yAxis[0][2][j+1].length){
                        changePostion = yAxis[0][2][j+1];
                        yAxis[0][2][j+1] = yAxis[0][2][j];
                        yAxis[0][2][j] = changePostion;

                        changePostion = series[0][3][j+1];
                        series[0][3][j+1] = series[0][3][j];
                        series[0][3][j] = changePostion;
                    }
                }
            }
            xs_tipAnalyUnit = [{name:'致贫原因',value:['人']}];
            XS.Main.Pkjc.ciAnalyOpt([5,'致贫原因'],['axis',['shadow'],XS.Main.Pkjc.tipAnalyFarmatterCur],['致贫原因'],[40,40,120,60],['人数(人)','value'],yAxis,[],[],series,"xs_pkdc_AnalysTabsChart");
            break;
            case 2 ://帮扶措施
            var legend = [40,["帮扶措施","危房改造户","易地扶贫搬迁户"]];
            var xAxis = ['','category',["低保人数","参加培训人数","少数民族人数","易地扶贫搬迁人数","脱贫人数"],true];//['危房发生率','pie',[[],[]],[0, 60],['70%', '35%'],false]
            var series = [['帮扶人措施','bar',0,[],false,[true,'top',"{c}人"]],['帮扶户措施','pie',[["危房改造户","易地扶贫搬迁户"],[]],[0, 60],['70%', '35%'],false]];
            XS.Main.Pkjc.ananlyValueOfJson(json,[series[0][3],series[0][3],series[0][3],series[0][3],series[0][3],
                    series[1][2][1],series[1][2][1]],
                ['cps_lowgaran_pop','cps_ltrained_num','cps_minority_num','cps_move_pop','cps_outpov_pop',
                    'cps_reconstru_hhnum','cps_move_hhnum'],'',[]);
            xs_tipAnalyUnit = [{name:'帮扶人措施',value:['人']},{name:'帮扶户措施',value:['户']}];
            XS.Main.Pkjc.ciAnalyOpt([5,'帮扶措施'],['item',[''],XS.Main.Pkjc.tipAnalyFarmatterCur],legend,[120,40,80,40],xAxis,[['人数(人)','value']],[],[],series,"xs_pkdc_AnalysTabsChart");
            break;
        case 3 ://五通四有
            XS.Main.Pkjc.viAnaly54(json,"xs_pkdc_AnalysTabsChart");
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
        /*case 4 ://脱贫进展

            break;*/
    }
}