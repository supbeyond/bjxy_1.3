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
            var length = XS.Main.Tjfx.range_styleGroups_color.length;
            for(var i=0; i<length; i++){
                style_color.push(XS.Main.Tjfx.range_styleGroups_color[length-i-1]);
            }
            style_se = XS.Main.Tjfx.pkfsx_styleGroups_countyTownSE;
            break;
        }
        case XS.Main.Tjfx.type.range_wfx:
        {
            style_color = XS.Main.Tjfx.range_styleGroups_color;
            style_se = XS.Main.Tjfx.pkfsx_styleGroups_countyTownSE;
            //style_se[9].end = 10000;
            break;
        }
    }

    var styleGroups = [];
    for(var i in XS.Main.Tjfx.range_styleGroups){
        var obj = XS.Main.Tjfx.range_styleGroups[i];
        obj.start = style_se[i].start;
        obj.end = style_se[i].end;
        obj.style.color = style_color[i];
        styleGroups.push(obj);
    }
    return styleGroups;
}

//创建分段专题 图例
XS.Main.Tjfx.range_createRangeLegendTag = function(type, level){
    var tag = '<div id="xs_tjfx_range_Legend">'+
            '<div class="legendTitle">'+
            '<span>图例</span>'+
            '</div>'+
            '<div class="legendContent">'+
            '<table>'+
            '<tr>';
    switch (type)
    {
        case XS.Main.Tjfx.type.range_pkfsx:
        {
            tag += '<td class="legendItemHeader">贫困发生率</td><td class="legendItemValue">颜色</td></tr>';

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
            tag += '<td class="legendItemHeader">脱贫率</td><td class="legendItemValue">颜色</td></tr>';

            var len = XS.Main.Tjfx.range_styleGroups_color.length;
            for(var i in XS.Main.Tjfx.pkfsx_legendItemHeaders.countytown){
                tag += '<tr>';
                tag += '<td class="legendItemHeader">'+XS.Main.Tjfx.pkfsx_legendItemHeaders.countytown[i]+'</td>';
                tag += "<td class='legendItemValue' style='background: "+XS.Main.Tjfx.range_styleGroups_color[len-1-i]+"'"+"></td>";
                tag += '</tr>';
            }
            break;
        }
        case XS.Main.Tjfx.type.range_wfx:
        {
            //XS.Main.Tjfx.pkfsx_legendItemHeaders.countytown[9] = '40% - 10000%';
            tag += '<td class="legendItemHeader">危房率</td><td class="legendItemValue">颜色</td></tr>';

            var len = XS.Main.Tjfx.range_styleGroups_color.length;
            for(var i in XS.Main.Tjfx.pkfsx_legendItemHeaders.countytown){
                tag += '<tr>';
                tag += '<td class="legendItemHeader">'+XS.Main.Tjfx.pkfsx_legendItemHeaders.countytown[i]+'</td>';
                tag += "<td class='legendItemValue' style='background: "+XS.Main.Tjfx.range_styleGroups_color[i]+"'"+"></td>";
                tag += '</tr>';
            }
            break;
        }
    }
    tag += '</table></div></div>';

    return tag;
}
