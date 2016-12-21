/**
 * Created by GZXS on 2016/7/18.
 */
//分段专题图辅助信息
XS.Main.Tjfx.range_styleGroups = [
    {
        start: 0,
        end: 0.5,
        style:{
            color: '#00FF00'
        }
    },
    {
        start: 0.5,
        end: 5,
        style:{
            color: '#1bff83'
        }
    },
    {
        start: 5,
        end: 8,
        style:{
            color: '#3ff3ff'
        }
    },
    {
        start: 8,
        end: 10,
        style:{
            color: '#238aff'
        }
    },
    {
        start: 10,
        end: 12,
        style:{
            color: '#932eff'
        }
    },
    {
        start: 12,
        end: 14,
        style:{
            color: '#bdff3b'
        }
    },
    {
        start: 14,
        end: 16,
        style:{
            color: '#ffee2f'
        }
    },
    {
        start: 16,
        end: 18,
        style:{
            color: '#ffb24a'
        }
    },
    {
        start: 18,
        end: 20,
        style:{
            color: '#ff4341'
        }
    },
    {
        start: 20,
        end: 100,
        style:{
            color: '#FF0000'
        }
    }
];

XS.Main.Tjfx.range_styleGroups_color = [
    '#00FF00',
    '#1bff83',
    '#3ff3ff',
    '#238aff',
    '#932eff',
    '#bdff3b',
    '#ffee2f',
    '#ffb24a',
    '#ff4341',
    '#FF0000'
];
XS.Main.Tjfx.rangeTp_styleGroups_color = [
    '#00FF00',
    '#1bff83',
    '#bdff3b',
    '#ffb24a',
    '#FF0000'
];

//----------------贫困发生率---------------------
XS.Main.Tjfx.pkfsx_styleGroups_citySE = [
    {start: 0, end: 0.5},
    {start: 0.5, end: 5},
    {start: 5, end: 8},
    {start: 8, end: 10},
    {start: 10, end: 12},
    {start: 12, end: 14},
    {start: 14, end: 16},
    {start: 16, end: 18},
    {start: 18, end: 20},
    {start: 20, end: 100}
];

XS.Main.Tjfx.pkfsx_styleGroups_countyTownSE = [
    {start: 0, end: 0.5},
    {start: 0.5, end: 5},
    {start: 5, end: 10},
    {start: 10, end: 15},
    {start: 15, end: 20},
    {start: 20, end: 25},
    {start: 25, end: 30},
    {start: 30, end: 35},
    {start: 35, end: 40},
    {start: 40, end: 100}
];

XS.Main.Tjfx.rangeTp_styleGroups = {
    city: [
        {start: 0, end: 10000},
        {start: 10000, end: 14000},
        {start: 14000, end: 18000},
        {start: 18000, end: 22000},
        {start: 22000, end: 220000}],
    county:[
        {start: 0, end: 100},
        {start: 100, end: 250},
        {start: 250, end: 500},
        {start: 500, end: 700},
        {start: 700, end: 220000}],
    town:[
        {start: 0, end: 5},
        {start: 5, end: 15},
        {start: 15, end: 25},
        {start: 25, end: 40},
        {start: 40, end: 220000}]
};
XS.Main.Tjfx.rangeWf_styleGroups = {
    city: [
        {start: 0, end: 2000},
        {start: 2000, end: 3000},
        {start: 3000, end: 5000},
        {start: 5000, end: 15000},
        {start: 15000, end: 220000}],
    county:[
        {start: 0, end: 100},
        {start: 100, end: 250},
        {start: 250, end: 500},
        {start: 500, end: 700},
        {start: 700, end: 220000}],
    town:[
        {start: 0, end: 5},
        {start: 5, end: 15},
        {start: 15, end: 25},
        {start: 25, end: 40},
        {start: 40, end: 220000}]
};
XS.Main.Tjfx.rangeFpbq_styleGroups = {
    city: [
        {start: 0, end: 200},
        {start: 200, end: 500},
        {start: 500, end: 1000},
        {start: 1000, end: 1500},
        {start: 1500, end: 220000}],
    county:[
        {start: 0, end: 50},
        {start: 50, end: 100},
        {start: 100, end: 300},
        {start: 300, end: 500},
        {start: 500, end: 220000}],
    town:[
        {start: 0, end: 5},
        {start: 5, end: 10},
        {start: 10, end: 20},
        {start: 20, end: 50},
        {start: 50, end: 220000}]
};
XS.Main.Tjfx.pkfsx_legendItemHeaders = {
    city: [
        '0% - 0.5%',
        '0.5% - 5%',
        '5% - 8%',
        '8% - 10%',
        '10% - 12%',
        '12% - 14%',
        '14% - 16%',
        '16% - 18%',
        '18% - 20%',
        '20% - 100%'
    ],
    countytown: [
        '0% - 0.5%',
        '0.5% - 5%',
        '5% - 10%',
        '10% - 15%',
        '15% - 20%',
        '20% - 25%',
        '25% - 30%',
        '30% - 35%',
        '35% - 40%',
        '40% - 100%'
    ]
};

XS.Main.Tjfx.rangeTp_legendItemHeaders = {
    city: [
        '10000以下',
        '10000 - 14000',
        '14000 - 18000',
        '18000 - 22000',
        '22000以上'
    ],
    county: [
        '100以下',
        '100 - 250',
        '250 - 500',
        '500 - 700',
        '700以上'
    ],
    town:[
        '5以下',
        '5 - 15',
        '15 - 25',
        '25 - 40',
        '40以上'
    ]
};
XS.Main.Tjfx.rangeWf_legendItemHeaders = {
    city: [
        '2000以下',
        '2000 - 3000',
        '3000 - 5000',
        '5000 - 15000',
        '15000以上'
    ],
    county: [
        '100以下',
        '100 - 250',
        '250 - 500',
        '500 - 700',
        '700以上'
    ],
    town:[
        '5以下',
        '5 - 15',
        '15 - 25',
        '25 - 40',
        '40以上'
    ]
};
XS.Main.Tjfx.rangeFpbq_legendItemHeaders = {
    city: [
        '200以下',
        '200 - 500',
        '500 - 1000',
        '1000 - 1500',
        '1500以上'
    ],
    county: [
        '50以下',
        '50 - 100',
        '100 - 300',
        '300 - 500',
        '500以上'
    ],
    town:[
        '5以下',
        '5 - 10',
        '10 - 20',
        '20 - 50',
        '50以上'
    ]
};


//----------------脱贫率---------------------


//创建分段专题 分段样式
XS.Main.Tjfx.range_createRangeStyleGroups = function(type, level){
    var style_se = [];
    var style_color = [];
    switch (type)
    {
        case XS.Main.Tjfx.type.range_pkfsx:
        {
            style_color = XS.Main.Tjfx.range_styleGroups_color;
            if(level == XS.Main.ZoneLevel.city){
                style_se = XS.Main.Tjfx.pkfsx_styleGroups_citySE;
            }else{
                style_se = XS.Main.Tjfx.pkfsx_styleGroups_countyTownSE;
            }
            break;
        }
        case XS.Main.Tjfx.type.range_tpx:
        {
            var length = XS.Main.Tjfx.rangeTp_styleGroups_color.length;
            for(var i=0; i<length; i++){
                style_color.push(XS.Main.Tjfx.rangeTp_styleGroups_color[length-i-1]);
            }
            switch (level){
                case XS.Main.ZoneLevel.city:
                    style_se = XS.Main.Tjfx.rangeTp_styleGroups.city;
                    break;
                case XS.Main.ZoneLevel.county:
                    style_se = XS.Main.Tjfx.rangeTp_styleGroups.county;
                    break;
                case XS.Main.ZoneLevel.town:
                    style_se = XS.Main.Tjfx.rangeTp_styleGroups.town;
                    break;
            }
            break;
        }
        case XS.Main.Tjfx.type.range_wfx:
            style_color = XS.Main.Tjfx.rangeTp_styleGroups_color;
            switch (level){
                case XS.Main.ZoneLevel.city:
                    style_se = XS.Main.Tjfx.rangeWf_styleGroups.city;
                    break;
                case XS.Main.ZoneLevel.county:
                    style_se = XS.Main.Tjfx.rangeWf_styleGroups.city;
                    break;
                case XS.Main.ZoneLevel.town:
                    style_se = XS.Main.Tjfx.rangeWf_styleGroups.city;
                    break;
            }
            break;
        case XS.Main.Tjfx.type.range_fpbqx:
        {

            var length = XS.Main.Tjfx.rangeTp_styleGroups_color.length;
            for(var i=0; i<length; i++){
                style_color.push(XS.Main.Tjfx.rangeTp_styleGroups_color[length-i-1]);
            }
            switch (level){
                case XS.Main.ZoneLevel.city:
                    style_se = XS.Main.Tjfx.rangeFpbq_styleGroups.city;
                    break;
                case XS.Main.ZoneLevel.county:
                    style_se = XS.Main.Tjfx.rangeFpbq_styleGroups.county;
                    break;
                case XS.Main.ZoneLevel.town:
                    style_se = XS.Main.Tjfx.rangeFpbq_styleGroups.town;
                    break;
            }
            break;
        }
    }

    var styleGroups = [];
    /*for(var i in XS.Main.Tjfx.range_styleGroups){
        var obj = XS.Main.Tjfx.range_styleGroups[i];
        obj.start = style_se[i].start;
        obj.end = style_se[i].end;
        obj.style.color = style_color[i];
        styleGroups.push(obj);
    }*/
    for(var i in style_se){
        var obj = XS.Main.Tjfx.range_styleGroups[i];
        obj.start = style_se[i].start;
        obj.end = style_se[i].end;
        obj.style.color = style_color[i];
        styleGroups.push(obj);
    }
    return styleGroups;
}

var xs_poor_legendbegoreH = 0;
var xs_poor_isLegendClickSingle = true;
//创建图例
XS.Main.Tjfx.range_createRangeLegendTag = function(type, level,tuliName){
    if(document.getElementById("xs_tjfx_range_Legend")){
        $("#xs_tjfx_range_Legend").remove();
    }

    xs_poor_legendbegoreH = 0;
    xs_poor_isLegendClickSingle = true;

    var tag = '<div id="xs_tjfx_range_Legend">'+
            '<div class="legendTitle">'+
                    '<span>图例</span>'+
                    '<a href="javascript:void(0)" id="xs_poor_legendCollap" onclick="XS.Main.Tjfx.legendCollapse();"></a>' +
                    '<a href="javascript:void(0)" id="xs_poor_legendClose" onclick="XS.Main.Tjfx.legendClose();"></a>' +
            '</div>'+
            '<div style="background: #bbbbFF;">' +
                '<span style="position: relative;right: 45px;">' + tuliName + '</span>' +
                '<span style="position: relative;left: 17px;">图标</span>' +
            '</div>' +
            '<div class="legendContent">';
    switch (type)
    {
        case XS.Main.Tjfx.type.range_pkfsx:
        {
            tag += '<table id="xs_poor_legendTab" border1="0" cellspacing1="0" cellpadding1="0">';
               // '<tr><td class="legendItemHeader">贫困发生率</td><td class="legendItemValue">颜色</td></tr>';

            if(level == XS.Main.ZoneLevel.city){
                for(var i in XS.Main.Tjfx.pkfsx_legendItemHeaders.city){
                    tag += '<tr>';
                    tag += '<td class="legendItemHeader">'+XS.Main.Tjfx.pkfsx_legendItemHeaders.city[i]+'</td>';
                    tag += "<td class='legendItemValue' style='background: "+XS.Main.Tjfx.range_styleGroups_color[i]+"'"+"></td>";
                    tag += '</tr>';
                }
            }else{
                for(var i in XS.Main.Tjfx.pkfsx_legendItemHeaders.countytown){
                    tag += '<tr>';
                    tag += '<td class="legendItemHeader">'+XS.Main.Tjfx.pkfsx_legendItemHeaders.countytown[i]+'</td>';
                    tag += "<td class='legendItemValue' style='background: "+XS.Main.Tjfx.range_styleGroups_color[i]+"'"+"></td>";
                    tag += '</tr>';
                }
            }
            break;
        }
        case XS.Main.Tjfx.type.range_tpx:
        {
            tag += '<table id="xs_poor_legendTab" border1="0" cellspacing1="0" cellpadding1="0">';
                //'<tr><td class="legendItemHeader">脱贫率</td><td class="legendItemValue">颜色</td></tr>';

            var len = XS.Main.Tjfx.rangeTp_styleGroups_color.length;
            var headers = [];
            switch (level){
                case XS.Main.ZoneLevel.city:
                    headers = XS.Main.Tjfx.rangeTp_legendItemHeaders.city;
                    break;
                case XS.Main.ZoneLevel.county:
                    headers = XS.Main.Tjfx.rangeTp_legendItemHeaders.county;
                    break;
                case XS.Main.ZoneLevel.town:
                    headers = XS.Main.Tjfx.rangeTp_legendItemHeaders.town;
                    break;
            }
            for(var i in headers){
                tag += '<tr>';
                tag += '<td class="legendItemHeader">'+headers[i]+'</td>';
                tag += "<td class='legendItemValue' style='background: "+XS.Main.Tjfx.rangeTp_styleGroups_color[len-1-i]+"'"+"></td>";
                tag += '</tr>';
            }
            break;
        }
        case XS.Main.Tjfx.type.range_wfx:
        {
            //XS.Main.Tjfx.pkfsx_legendItemHeaders.countytown[9] = '40% - 10000%';
            tag += '<table id="xs_poor_legendTab" border1="0" cellspacing1="0" cellpadding1="0">';
                //'<tr><td class="legendItemHeader">危房率</td><td class="legendItemValue">颜色</td></tr>';

            var len = XS.Main.Tjfx.rangeTp_styleGroups_color.length;
            var headers = [];
            switch (level){
                case XS.Main.ZoneLevel.city:
                    headers = XS.Main.Tjfx.rangeWf_legendItemHeaders.city;
                    break;
                case XS.Main.ZoneLevel.county:
                    headers = XS.Main.Tjfx.rangeWf_legendItemHeaders.county;
                    break;
                case XS.Main.ZoneLevel.town:
                    headers = XS.Main.Tjfx.rangeWf_legendItemHeaders.town;
                    break;
            }
            for(var i in headers){
                tag += '<tr>';
                tag += '<td class="legendItemHeader">'+headers[i]+'</td>';
                tag += "<td class='legendItemValue' style='background: "+XS.Main.Tjfx.rangeTp_styleGroups_color[i]+"'"+"></td>";
                tag += '</tr>';
            }
            break;
        }
        case XS.Main.Tjfx.type.range_fpbqx:
        {
            //XS.Main.Tjfx.pkfsx_legendItemHeaders.countytown[9] = '40% - 10000%';
            tag += '<table id="xs_poor_legendTab" border1="0" cellspacing1="0" cellpadding1="0">';
                //'<tr><td class="legendItemHeader">扶贫搬迁率</td><td class="legendItemValue">颜色</td></tr>';

            var len = XS.Main.Tjfx.rangeTp_styleGroups_color.length;
            var headers = [];
            switch (level){
                case XS.Main.ZoneLevel.city:
                    headers = XS.Main.Tjfx.rangeFpbq_legendItemHeaders.city;
                    break;
                case XS.Main.ZoneLevel.county:
                    headers = XS.Main.Tjfx.rangeFpbq_legendItemHeaders.county;
                    break;
                case XS.Main.ZoneLevel.town:
                    headers = XS.Main.Tjfx.rangeFpbq_legendItemHeaders.town;
                    break;
            }
            for(var i in headers){
                tag += '<tr>';
                tag += '<td class="legendItemHeader">'+headers[i]+'</td>';
                tag += "<td class='legendItemValue' style='background: "+XS.Main.Tjfx.rangeTp_styleGroups_color[len-i-1]+"'"+"></td>";
                tag += '</tr>';
            }
            break;
        }
        case XS.Main.Tjfx.type.pie:
        {
            tag += '<table id="xs_poor_legendTab" border1="0" cellspacing1="0" cellpadding1="0">';
                //'<tr><td class="legendItemHeader">土地信息</td><td class="legendItemValue">颜色</td></tr>';

            for(var i in XS.Main.Tjfx.Graph.axisXLabels[0]){
                tag += '<tr>';
                tag += '<td class="legendItemHeader">'+XS.Main.Tjfx.Graph.axisXLabels[0][i]+'</td>';
                tag += "<td class='legendItemValue' style='background: "+XS.Main.Tjfx.range_styleGroups_color[i]+"'"+"></td>";
                tag += '</tr>';
            }
            break;
        }
        case XS.Main.Tjfx.type.bar.social:
        {
            tag += '<table id="xs_poor_legendTab" border1="0" cellspacing1="0" cellpadding1="0">';
                //'<tr><td class="legendItemHeader">社会保障</td><td class="legendItemValue">颜色</td></tr>';

            for(var i in XS.Main.Tjfx.Graph.axisXLabels[1]){
                tag += '<tr>';
                tag += '<td class="legendItemHeader">'+XS.Main.Tjfx.Graph.axisXLabels[1][i]+'</td>';
                tag += '<td class="legendItemValue" style="background: -WebKit-linear-gradient( top,'
                    + XS.Main.Tjfx.Graph.barGradient[i][0] + ',' + XS.Main.Tjfx.Graph.barGradient[i][1] + ');"></td>';
                tag += '</tr>';
            }
            break;
        }
        case XS.Main.Tjfx.type.bar.fourOf45:
        {
            tag += '<table id="xs_poor_legendTab" border1="0" cellspacing1="0" cellpadding1="0">';
                //'<tr><td class="legendItemHeader">四有五覆盖(四有)</td><td class="legendItemValue">颜色</td></tr>';

            for(var i in XS.Main.Tjfx.Graph.axisXLabels[2]){
                tag += '<tr>';
                tag += '<td class="legendItemHeader">'+XS.Main.Tjfx.Graph.axisXLabels[2][i]+'</td>';
                tag += '<td class="legendItemValue" style="background: -WebKit-linear-gradient( top,'
                    + XS.Main.Tjfx.Graph.barGradient[i][0] + ',' + XS.Main.Tjfx.Graph.barGradient[i][1] + ');"></td>';
                tag += '</tr>';
            }
            break;
        }
        case XS.Main.Tjfx.type.bar.fiveOf45:
        {
            tag += '<table id="xs_poor_legendTab" border1="0" cellspacing1="0" cellpadding1="0">';
                //'<tr><td class="legendItemHeader">四有五覆盖(五覆盖)</td><td class="legendItemValue">颜色</td></tr>';

            for(var i in XS.Main.Tjfx.Graph.axisXLabels[3]){
                tag += '<tr>';
                tag += '<td class="legendItemHeader">'+XS.Main.Tjfx.Graph.axisXLabels[3][i]+'</td>';
                tag += '<td class="legendItemValue" style="background: -WebKit-linear-gradient( top,'
                    + XS.Main.Tjfx.Graph.barGradient[i][0] + ',' + XS.Main.Tjfx.Graph.barGradient[i][1] + ');"></td>';
                tag += '</tr>';
            }
            break;
        }
        case XS.Main.Tjfx.type.bar.fiveOf54:
        {
            tag += '<table id="xs_poor_legendTab" border1="0" cellspacing1="0" cellpadding1="0">';
                //'<tr><td class="legendItemHeader">五通四有(五通)</td><td class="legendItemValue">颜色</td></tr>';

            for(var i in XS.Main.Tjfx.Graph.axisXLabels[4]){
                tag += '<tr>';
                tag += '<td class="legendItemHeader">'+XS.Main.Tjfx.Graph.axisXLabels[4][i]+'</td>';
                tag += '<td class="legendItemValue" style="background: -WebKit-linear-gradient( top,'
                    + XS.Main.Tjfx.Graph.barGradient[i][0] + ',' + XS.Main.Tjfx.Graph.barGradient[i][1] + ');"></td>';
                tag += '</tr>';
            }
            break;
        }
        case XS.Main.Tjfx.type.bar.fourOf54:
        {
            tag += '<table id="xs_poor_legendTab" border1="0" cellspacing1="0" cellpadding1="0">';
                //'<tr><td class="legendItemHeader">五通四有(四有)</td><td class="legendItemValue">颜色</td></tr>';

            for(var i in XS.Main.Tjfx.Graph.axisXLabels[2]){
                tag += '<tr>';
                tag += '<td class="legendItemHeader">'+XS.Main.Tjfx.Graph.axisXLabels[5][i]+'</td>';
                tag += '<td class="legendItemValue" style="background: -WebKit-linear-gradient( top,'
                    + XS.Main.Tjfx.Graph.barGradient[i][0] + ',' + XS.Main.Tjfx.Graph.barGradient[i][1] + ');"></td>';
                tag += '</tr>';
            }
            break;
        }
        case XS.Main.Tjfx.type.poorType:
        {
            tag += '<table id="xs_poor_legendTab" border="0" cellspacing="0" cellpadding="0">';//<tr style="background: #1E9088">';
            if(level == XS.Main.ZoneLevel.county)
            {
                //tag += '<td class="legendItemHeader">贫困类型</td><td class="poorLegendItemValue">图标</td></tr>';
                for(var i in XS.Main.poorZonePicArr.town){
                    tag += '<tr>';
                    tag += '<td class="legendItemHeader">'+XS.Main.poorZonePicArr.town[i].name+'</td>';
                    tag += '<td class="legendItemValue" style1="background:url("'+XS.Main.poorZonePicArr.town[i].value+'") no-repeat 100px 0 #fff;>' +
                        '<img style="width:25px;heigth:25px;" src="'+XS.Main.poorZonePicArr.town[i].value+'" alt=""/>' +
                        '</td>';
                    tag += '</tr>';
                }
            }else if(level == XS.Main.ZoneLevel.town)
            {
                //tag += '<td class="legendItemHeader">贫困类型</td><td class="poorLegendItemValue">图标</td></tr>';
                for(var i in XS.Main.poorZonePicArr.vill){
                    tag += '<tr>';
                    tag += '<td class="legendItemHeader">'+XS.Main.poorZonePicArr.vill[i].name+'</td>';
                    tag += '<td class="legendItemValue" style1="background:url("'+XS.Main.poorZonePicArr.vill[i].value+'") no-repeat 100px 0 #fff;>' +
                        '<img style="width:25px;heigth:25px;" src="'+XS.Main.poorZonePicArr.vill[i].value+'" alt=""/>' +
                        '</td>';
                    tag += '</tr>';
                }
            }else if(level == XS.Main.ZoneLevel.village)
            {
                //tag += '<td class="legendItemHeader">贫困原因</td><td class="poorLegendItemValue">图标</td></tr>';
                for(var i in XS.Main.poorZonePicArr.poor){
                    var isHaveEqual = false;
                    for(var j in xs_clickPoorLegendArr){
                        if(XS.Main.poorZonePicArr.poor[i].name == xs_clickPoorLegendArr[j].name){
                            tag += '<tr class="poorLegendItemRow" style="background: #ddd;">';
                            isHaveEqual = true;
                            break;
                        }
                    }
                    if(!isHaveEqual){
                        tag += '<tr class="poorLegendItemRow"">';
                    }
                    tag += '<td class="legendItemHeader">'+XS.Main.poorZonePicArr.poor[i].name+'</td>';
                    tag += '<td class="legendItemValue" style1="background:url("'+XS.Main.poorZonePicArr.poor[i].value+'") no-repeat 100px 0 #fff;>' +
                        '<img style="width:18px;heigth:18px;" src="'+XS.Main.poorZonePicArr.poor[i].value+'" alt=""/>' +
                        '</td>';
                    tag += '</tr>';
                }
            }
        }
    }
    tag += '</table></div></div>';

    $("#xs_mainC").append(tag);
    XS.Main.addDivHover2HiddenUTFGridTip("xs_tjfx_range_Legend");
    for(var i in $(".poorLegendItemRow")){
        XS.Main.Poor.legendRowHover($(".poorLegendItemRow").eq(i),"#ccc");
    }
    $(".poorLegendItemRow").click(XS.Main.Poor.legendClick);
    return tag;
}


//图例展开和收缩事件
XS.Main.Tjfx.legendCollapse = function(){
    if(xs_poor_isLegendClickSingle){
        xs_poor_isLegendClickSingle = false;
        xs_poor_legendbegoreH = $(".legendContent").outerHeight();
        $(".legendContent").animate({height:0},{duration: 300 });
        $("#xs_poor_legendCollap").css({background: 'url("../img/panel_tools.png") no-repeat -32px 0'});

        $("#xs_poor_legendCollap").hover(
            function(){
                $(this).css({background: 'url("../img/panel_tools.png") no-repeat -32px 0 #eee'});
            },function(){
                $(this).css({background: 'url("../img/panel_tools.png") no-repeat -32px 0'});
            }
        );
    }else{
        xs_poor_isLegendClickSingle = true;
        $(".legendContent").animate({height:xs_poor_legendbegoreH},{duration: 300 });
        $("#xs_poor_legendTab").css({width: "220px"});
        $("#xs_poor_legendCollap").css({background: 'url("../img/panel_tools.png") no-repeat -32px -16px'});

        $("#xs_poor_legendCollap").hover(
            function(){
                $(this).css({background: 'url("../img/panel_tools.png") no-repeat -32px -16px #eee'});
            },function(){
                $(this).css({background: 'url("../img/panel_tools.png") no-repeat -32px -16px'});
            }
        );
    }
}
//关闭图例事件
XS.Main.Tjfx.legendClose = function(){
    $("#xs_tjfx_range_Legend").remove();
}
//鼠标在贫困户图例中移动事件
XS.Main.Poor.legendRowHover = function(rowObjs,overColor,outColor){
    if(!outColor){
        var background = "#fff";
    }
        rowObjs.hover(
        function(){
            if(!outColor){
                background = $(this).css("background") ? $(this).css("background") : background;
            }
            $(this).css({background:overColor,cursor: "pointer"});
        },
        function(){
            if(!outColor){
                $(this).css({background:background,cursor: "pointer"});
            }else{
                $(this).css({background:outColor,cursor: "pointer"});
            }
        }
    );
}
