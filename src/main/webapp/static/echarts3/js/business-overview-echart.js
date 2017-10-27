///////////////////////////////////////////////// echart 开始
// 路径配置
require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});
// 使用
require(
    [
        'echarts',
        'echarts/chart/bar' ,// 使用柱状图就加载bar模块，按需加载
        'echarts/chart/funnel' ,
        'echarts/chart/pie' 
    ],
    function (ec) {
        // 林业生态红线管控面积
        var myChart = ec.init(document.getElementById('redLine-control-area')); 
        $(window).resize(function() {
			$(myChart).each(function(index, chart) {
				var a = $("#redLine-control-area-width").width();
				chart.resize(a);
			});
		});
        var option ={
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		    	show:false,
		        orient : 'vertical',
		        x : 'left',
		        y : 'bottom',
		        data:['其他','保护区','风景','地质','河流','一类管控区','二类管控区'],
		        textStyle:{
		        	'color':'#b2d5de',
		        	fontSize:10,
					fontFamily:'Microsoft Yahei'
		        }
		    },
		    toolbox: {
		    },
		    calculable : false,
		    series : [
		        {
		        	name:'林业生态红线管控面积',
		            type:'pie',
		            selectedMode: 'single',
		            radius : [0, 70],
		            // for funnel
		            x: '20%',
		            width: '35%',
		            funnelAlign: 'right',
		            max: 1548,
		            itemStyle : {
		                normal : {
		                    label : {
		                        position : 'inner'
		                    },
		                    labelLine : {
		                        show : false
		                    }
		                }
		            },
		            data:[
		                {value:335, name:'其他',itemStyle: {normal: {color:'#88ff90'}}},
		                {value:679, name:'保护区',itemStyle: {normal: {color:'#ffe0a5'}}},
		                {value:335, name:'风景',itemStyle: {normal: {color:'#ffb9a4'}}},
		                {value:679, name:'地质',itemStyle: {normal: {color:'#ffdef7'}}},
		                {value:1548, name:'河流',itemStyle: {normal: {color:'#2b9a91'}}}
		            ]
		        },
		        {
		        	name:'林业生态红线管控面积',
		            type:'pie',
		            radius : [90, 120],
		            // for funnel
		            x: '20%',
		            width: '30%',
		            funnelAlign: 'left',
		            max: 1048,
		            itemStyle : {
		                normal : {
		                    label : {
		                        position : 'inner'
		                    },
		                    labelLine : {
		                        show : false
		                    }
		                }
		            },
		            data:[
		                {value:335, name:'一类管控区',itemStyle: {normal: {color:'#fcffa1'}}},
		                {value:110, name:'二类管控区',itemStyle: {normal: {color:'#ff7b61'}}}
		            ]
		        }
		    ]
		};
		var ecConfig = require('echarts/config');
		myChart.on(ecConfig.EVENT.PIE_SELECTED, function (param){
		    var selected = param.selected;
		    var serie;
		    var str = '当前选择： ';
		    for (var idx in selected) {
		        serie = option.series[idx];
		        for (var i = 0, l = serie.data.length; i < l; i++) {
		            if (selected[idx][i]) {
		                str += '【系列' + idx + '】' + serie.name + ' : ' + 
		                       '【数据' + i + '】' + serie.data[i].name + ' ';
		            }
		        }
		    }
		    document.getElementById('wrong-message').innerHTML = str;
		})
        // 为echarts对象加载数据 
        myChart.setOption(option); 
       
       
       
       // 森林覆盖率
        var myChart1 = ec.init(document.getElementById('forestCoverage-rate')); 
        $(window).resize(function() {
			$(myChart1).each(function(index, chart) {
				var a = $("#forestCoverage-rate-width").width();
				chart.resize(a);
			});
		});
        var option1 ={
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		    	show:false,
		        orient : 'vertical',
		        x : '5%',
		        data:['吉林省  43.9%','其他'],
		        textStyle:{
		        	'color':'#b2d5de',
		        	fontSize:10,
					fontFamily:'Microsoft Yahei'
		        }
		    },
		    toolbox: {
		    },
		    calculable : false,
		    series : [
		        {
		            name:'森林覆盖率',
		            type:'pie',
		            selectedMode: 'single',
		            radius : [0, 80],
		            center : ['35%', 150],
		            funnelAlign: 'right',
		            max: 1548,
		            data:[
		                {value:1000, name:'吉林省  43.9%',itemStyle: {normal: {color:'#5ae8ff'}}},
		                {value:1548, name:'其他',itemStyle: {normal: {color:'#007b8f',label : { show : false},labelLine : { show : false}}} , selected:true}
		            ]
		        }
		    ]
		};
        // 为echarts对象加载数据 
        myChart1.setOption(option1); 
        
        
        
        // 林地分类
        var myChart2 = ec.init(document.getElementById('forest-classification')); 
        $(window).resize(function() {
			$(myChart2).each(function(index, chart) {
				var a = $("#forest-classification-width").width();
				chart.resize(a);
			});
		});
        var option2 ={
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
		        data: ['乔木林地','宜林地','竹林地','无立木林地','一般灌木林地','林辅用地','未成林造林地','苗圃地','疏林地','特殊灌木林地']
		    },
		    series : [
		        {
		            name: '访问来源',
		            type: 'pie',
		            radius : '55%',
		            center: ['68%', '50%'],
		            data:[
		            	{value:50, name:'特殊灌木林地',itemStyle: {normal: {color:'#96ce52'}}},
		                {value:50, name:'疏林地',itemStyle: {normal: {color:'#f09898'}}},
		                {value:80, name:'苗圃地',itemStyle: {normal: {color:'#98ffed'}}},
		                {value:100, name:'未成林造林地',itemStyle: {normal: {color:'#c3ff93'}}},
		                {value:150, name:'林辅用地',itemStyle: {normal: {color:'#ffa676'}}},
		                {value:300, name:'一般灌木林地',itemStyle: {normal: {color:'#fad860'}}},
		                {value:400, name:'无立木林地',itemStyle: {normal: {color:'#fffcae'}}},
		                {value:500, name:'竹林地',itemStyle: {normal: {color:'#32aee2'}}},
		                {value:1100, name:'宜林地',itemStyle: {normal: {color:'#016f9d'}}},
		                {value:1200, name:'乔木林地',itemStyle: {normal: {color:'#8080e0'}}}
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
        myChart2.setOption(option2); 
        
        
        
        // 公益林事权等级统计
        var myChart3 = ec.init(document.getElementById('publicWelfare-forest')); 
        $(window).resize(function() {
			$(myChart3).each(function(index, chart) {
				var a = $("#publicWelfare-forest-width").width();
				chart.resize(a);
			});
		});
        var option3 ={
		    title : {
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c}%"
		    },
		    toolbox: {
		    },
		    legend: {
		    	show:false,
		        data : ['国家级公益林  1449400','地方公益林  2280911.9'],
		        
		    },
		    calculable : true,
		    series : [
		        {
		            name:'金字塔',
		            type:'funnel',
		            x : '10%',
		            y : '5%',
		            width: '42%',
		            height: '80%',
		            sort : 'ascending',
		            itemStyle: {
		                normal: {
		                	borderWidth: 0,
		                    label: {
		                    }
		                }
		            },
		            data:[
		                {value:60, name:'国家级公益林  1449400',itemStyle: {normal: {color:'#c0ffa1'}}},
		                {value:180, name:'地方公益林  2280911.9',itemStyle: {normal: {color:'#00b05b'}}}
		            ]
		        }
		    ]
		};
        // 为echarts对象加载数据 
        myChart3.setOption(option3); 
    }
);
///////////////////////////////////////////////// echart 结束