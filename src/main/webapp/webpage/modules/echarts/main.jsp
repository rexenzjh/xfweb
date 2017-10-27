<%--
  Created by IntelliJ IDEA.
  User: jinhui1
  Date: 2017/8/18
  Time: 10:49
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="/webpage/include/taglib.jsp"%>

<html>
<head>
    <title>预警监控</title>
    <%@include file="/webpage/include/treeview.jsp" %>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
    <meta name="decorator" content="default"/>
    <meta http-equiv="X-UA-Compatible" content="IE=9,IE=10" />
    <meta http-equiv="Expires" content="0"><meta http-equiv="Cache-Control" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-store">
    <script src="${ctxStatic}/echarts3/echart.js"></script>
    <script src="${ctxStatic}/echarts3/changchun.js"></script>
    <script src="${ctxStatic}/scrollbar/js/jquery.mCustomScrollbar.concat.min.js"></script>
    <!-- scroll -->
    <link rel="stylesheet" type="text/css" href="${ctxStatic}/echarts3/Scrollbar/css/jquery.mCustomScrollbar.css">

    <link rel="stylesheet" type="text/css" href="${ctxStatic}/echarts3/style.css"/>
    <link rel="stylesheet" type="text/css" href="${ctxStatic}/echarts3/zTreeStyle.css">
</head>
<body>
<div class="m-bg-bottom"></div><!-- 背景底部亮色  -->

<div class="m-content-box">
    <div class="row">
        <div class="col-sm-3">

            <div class="m-opacity-box">
                <div class="m-opacity-box-header">
                    <div class="m-obh-left">设备在线情况</div>
                </div>
                <div  style="height:600px !important;">
                    <!--树形结构-->
                    <div class="zTreeDemoBackground left ">
                        <ul id="treeDemo" class="ztree m-scroll"></ul>
                    </div><!--树形结构-->
                </div>
            </div><!-- 湿地分类统计  -->

        </div>
        <div class="col-sm-6">
            <div class="m-opacity-box-nobg" id="main" style="height:640px;">

            </div>
        </div>
        <div class="col-sm-3">
            <div class="m-opacity-box ">
                <div class="m-opacity-box-header">
                    <div class="m-obh-left">告警统计</div>

                </div>
                <div class="m-opacity-box-body" id="wild-animal-width">
                    <div id="wild-animal" style="height:155px;width: 295px;padding-left: 10px;">
                        <img src="${ctxStatic}/echarts3/1.png" style="width: inherit;height: inherit;"/>
                    </div>
                </div>

            </div><!-- 林业分类  -->
            <div class="m-opacity-box">
                <div class="m-opacity-box-header">
                    <div class="m-obh-left">设备数量</div>
                </div>
                <div class="m-opacity-box-body" id="forest-classification-width1">
                    <div id="forest-classification1" style="height:235px;"></div>
                </div>

            </div><!-- 林业分类  -->
            <div class="m-opacity-box ">
                <div class="m-opacity-box-header">
                    <div class="m-obh-left"><a href="${ctx}/login_index">远程监控</a></div>

                </div>
                <div class="m-opacity-box-body" id="wild-animal-width">
                    <div id="wild-animal" style="height:155px;"></div>
                </div>

            </div><!-- 林业分类  -->
        </div>
    </div>
</div><!-- 身体  -->


<!-- tab -->
<script type="text/javascript">

    function setTab(name,cursel,n){
        for(i=1;i<=n;i++){
            var menu=document.getElementById(name+i);
            var con=document.getElementById("con_"+name+"_"+i);
            menu.className=i==cursel?"hover":"";
            con.style.display=i==cursel?"block":"none";
        }
    }
</script>

<script type="text/javascript">
    var setting = {
        view:{
            showIcon:true,
            showLine:false,
            addHoverDom: addHoverDom,
            removeHoverDom: removeHoverDom,
        }
    };

    function addHoverDom(treeId, treeNode) {
        var aObj = $("#" + treeNode.tId + "_a");
        if ($("#diyBtn_"+treeNode.id).length>0) return;
        var editStr = ""
            + "<input type='button' id='diyBtn_" + treeNode.id
            + "' title='title'   value='进入'></input>";
        aObj.append(editStr);
        var btn = $("#diyBtn_"+treeNode.id);
        if (btn) btn.bind("click", function(){alert("diy Button for " + treeNode.name);});
    };
    function removeHoverDom(treeId, treeNode) {
        $("#diyBtn_"+treeNode.id).unbind().remove();
        $("#diyBtn_space_" +treeNode.id).unbind().remove();
    };

    var zNodes =[

                { name:"朝阳区(异常)", open:true,icon:"${ctxStatic}/echarts3/5.png",
                    children: [
                        { name:"建筑物1(在线)",icon:"${ctxStatic}/echarts3/5.png",
                            children: [
                                { name:"设备1(在线)"},
                                { name:"设备1(在线)"},
                                { name:"设备1(在线)"},
                                { name:"设备1(在线)"}
                            ]
                        },
                        { name:"建筑物1(离线)",
                            children: [
                                { name:"设备1(在线)"},
                                { name:"设备1(在线)"},
                                { name:"设备1(在线)"},
                                { name:"设备1(在线)"}
                            ]
                        }
                    ]},
                { name:"绿园区(正常)", open:true,
                    children: [
                        { name:"设备1(在线)"},
                        { name:"设备1(在线)"},
                        { name:"设备1(在线)"},
                        { name:"设备1(在线)"}
                    ]},
                { name:"南关区", open:true,
                    children: [
                        { name:"设备1(在线)"},
                        { name:"设备1(在线)"}
                    ]},
                { name:"二道区", open:true,
                    children: [
                        { name:"设备1(在线)"},
                        { name:"设备1(在线)"},
                        { name:"设备1(在线)"}
                    ]},
                { name:"宽城区", open:true,
                    children: [
                        { name:"设备1(在线)"},
                        { name:"设备1"}
                    ]},
                { name:"双阳区", open:true,
                    children: [
                        { name:"设备1"},
                        { name:"设备1"}
                    ]},


    ];

    $(document).ready(function() {
        $(window).load(function(){
            $(".m-scroll").mCustomScrollbar({
                setHeight:600,
                theme:"dark-3"
            });
        });

        var treeObj = $.fn.zTree.init($("#treeDemo"), setting, zNodes);
        var nodes = treeObj.getSelectedNodes();
        for (var i=0; i< nodes.length; i++) {
            treeObj.expandNode(nodes[0], false, false, true);
        }
    });
</script>

<script type="text/javascript">
    var myChart2classification = echarts.init(document.getElementById('forest-classification1'));
    $(window).resize(function() {
        $(myChart2classification).each(function(index, chart) {
            var a = $("#forest-classification-width1").width();
            chart.resize(a);
        });
    });
    var option2classification ={
        title : {
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 20,
            y : 'center',
            itemWidth: 6,
            itemHeight:10,
            textStyle: {
                color: '#b2d5de',
                fontSize : 10,
                fontFamily: 'Microsoft Yahei'
            },
            data: ['朝阳区','绿园区','南关区','双阳区','二道区','宽城区']
        },
        series : [
            {
                name: '设备数量',
                type: 'pie',
                radius : '73%',
                center: ['67%', '50%'],
                data:[
                    {value:50, name:'朝阳区'},
                    {value:50, name:'绿园区'},
                    {value:80, name:'南关区'},
                    {value:100, name:'双阳区'},
                    {value:150, name:'二道区'},
                    {value:300, name:'宽城区'}
                ],
                itemStyle: {
                    normal : {
                        label : {
                            show : false
                        },
                        labelLine : {
                            show : false
                        }
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    // 为echarts对象加载数据
    myChart2classification.setOption(option2classification);





    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));

    // 指定图表的配置项和数据
    var normalData = [
        {name: '劳动公园', value: 90,ext:1111},
        {name: '中山公园', value: 90},
        {name: '开封小学', value: 90},
        {name: '二道区政府', value: 70},
        {name: '长春市开发区国税局', value: 70},
        {name: '气象台', value: 60},
        {name: '国信农学院', value: 80},
        {name: '双阳区幸福小学', value: 70},
        {name: '佟家乡', value: 90},
        {name: '宽城区政府', value: 90},
        {name: '动植物园', value: 90},
    ];
    var nearData = [
        {name: '繁荣商场', value: 150},
        {name: '长春建筑学院体育场', value: 170},

    ];
    var warnData = [
        {name: '第一实验小学', value: 360},

    ];
    var geoCoordMap = {
        '劳动公园':[125.377601,43.88359],
        '开封小学':[125.383493,43.932846],
        '中山公园':[125.47203,43.979363],
        '二道区政府':[125.380331,43.87205],
        '长春市开发区国税局':[125.398729,43.858739],
        '繁荣商场':[125.307173,43.846049],
        '双阳区政府':[125.670664,43.531426],
        '双阳区幸福小学':[125.530097,43.694734],
        '长春建筑学院体育场':[125.647667,43.758942],
        '佟家乡':[125.802319,43.473881],
        '国信农学院':[125.564017,43.652794],
        '第一实验小学':[125.659453,43.518012],
        '气象台':[125.592331,43.64173],
        '宽城区政府':[125.333476,43.949516],
        '动植物园':[125.342099,43.873609]
    };
    var warn = [

        {name: '第一实验小学', value: 360}

    ];

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };

    option = {

        title: {
            text: '长春市火灾预防监测情况',
            subtext: '',
            sublink: 'http://www.baidu.com',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: function (obj) {
                var value = obj.value;
                return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                    + obj.seriesName
                    + '</div>'
                    +  '地址：双阳区人民大街8009号，第一实验小学'+ '<br>'
                    +  '设备：仓库拐角'+ '<br>'
                    +  '实际温度：'+value[2] + '<br>'
                    +  '预警阀值：300'+ '<br>';
            }
        },
        legend: {
            //orient: 'vertical',
            x:'center',
            data:['正常','临界','预警'],
            y: 'bottom',
            textStyle: {
                color: '#fff',
                fontSize: 16
            }
        },


        geo: {
            map: 'changchun',
            label: {
                emphasis: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 18,
                    }
                },
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#111',
                    color:'#fff'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
        series : [
            {
                name: '正常',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(normalData),
                symbolSize: function(val){
                    if (val[2]>-45 && val[2]<=50)
                        return 2;
                    if (val[2]>50 && val[2]<=100)
                        return 5;
                    if (val[2]>100 && val[2]<=180)
                        return 10;
                    if (val[2]>180 && val[2]<=380)
                        return 15;
                },
                label: {

                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false,
                        color: '#33FF33',

                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#33FF33',
                        show: true,
                    }
                }
            },
            {
                name: '临界',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(nearData),
                symbolSize: function(val){
                    if (val[2]>-45 && val[2]<=50)
                        return 2;
                    if (val[2]>50 && val[2]<=100)
                        return 5;
                    if (val[2]>100 && val[2]<=180)
                        return 10;
                    if (val[2]>180 && val[2]<=380)
                        return 15;
                },
                label: {

                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false,

                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#FFFF33',
                        show: true,
                    }
                }
            },
            {
                name: '预警',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(warnData),
                symbolSize: function(val){
                    if (val[2]>-45 && val[2]<=80)
                        return 5;
                    if (val[2]>80 && val[2]<=180)
                        return 15;
                    if (val[2]>180 && val[2]<=380)
                        return 15;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true,

                    }
                },
                itemStyle: {
                    normal: {
                        color: '#FF3333',
                        shadowBlur: 30,
                        borderWidth: 20,
                        shadowColor: '#fff',
                        show: false,

                    },

                },
                zlevel: 1
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
</script>
</body>
</html>
