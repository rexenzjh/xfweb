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
        'echarts/chart/pie' ,
        'echarts/chart/line' 
    ],
    function (ec) {
        // 林业产业生产总值
        var myChart = ec.init(document.getElementById('forestry-GDP')); 
        $(window).resize(function() {
			$(myChart).each(function(index, chart) {
				var a = $("#forestry-GDP-width").width();
				chart.resize(a);
			});
		});

        var option = {
            tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    legend: {
		    	x:25,
		    	y:10,
		        data:['一产总值','二产总值','三产总值'],
		        itemWidth: 10,
		        itemHeight: 10,
		        textStyle:{
		        	'color':'#b2d5de',
		        	fontSize:10,
					fontFamily:'Microsoft Yahei'
		        },
		    },
		    calculable : true,
		    grid:{
		    		x:40,
		    		y:40,
		    		width:'88%',
		    		borderWidth:0

		    },
		    xAxis : [
		        {
		            type : 'category',                                                 
		            data : ['长春','吉林','延边','松原','通化','白城','白山','辽源','四平'],
		            splitLine: {
						show: false
					},
					axisLine: {
						lineStyle: {
							color:'rgba(145,192,236,0.4)',
							width: 1
						}
					},
					axisLabel: {
						textStyle: {
							color:'#fff',
							fontSize:10,
							fontFamily:'Microsoft Yahei'
						}
					}
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            splitLine: {
						show: false
					},
					axisLine: {
						lineStyle: {
							color:'rgba(145,192,236,0.4)',
							width: 1
						}
					},
					axisLabel: {
						textStyle: {
							color:'#fff',
							fontSize:10,
							fontFamily:'Microsoft Yahei'
						}
					}
		        }
		    ],

		    series : [
		
		        {
		            name:'一产总值',
		            type:'bar',
		            stack: '林业',
		            itemStyle: {
		            	normal: {
		            		color:'#2e8939'
		            	},
		            },
		            data:[42, 58, 20, 61, 51, 12, 16, 70, 48]
		        },
		        {
		            name:'二产总值',
		            type:'bar',
		            stack: '林业',
		            itemStyle: {
		            	normal: {
		            		color:'#85d032'
		            	},
		            },
		            data:[100, 81, 109, 112, 120, 50, 80, 156, 91]
		        },
		        {
		            name:'三产总值',
		            type:'bar',
		            stack: '林业',
		            itemStyle: {
		            	normal: {
		            		color:'#f4ff43'
		            	},
		            },
		            data:[150, 232, 201, 154, 190, 330, 410, 232, 201]
		        }
		    ]
        };
        // 为echarts对象加载数据 
        myChart.setOption(option); 
        
        
        // 采伐限额执行情况
        var myChart1 = ec.init(document.getElementById('felling-quota')); 
        $(window).resize(function() {
			$(myChart1).each(function(index, chart) {
				var a = $("#felling-quota-width").width();
				chart.resize(a);
			});
		});

        var option1 =  {
		    title : {
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		    	x:25,
		    	y:10,
		        itemWidth: 19,
		        itemHeight: 10,
		        textStyle:{
		        	'color':'#b2d5de',
		        	fontSize:10,
					fontFamily:'Microsoft Yahei'
		        },
		        data:[
		            '采伐限额','木材生产计划','采伐量'
		        ]
		    },
		    toolbox: {
		    },
		    calculable : true,
		    grid: {
				y: 50,
				x: 40,
				width:'88%',
	    		borderWidth:0
			},
		    xAxis : [
		        {
		            type : 'category',
		            splitLine: {
						show: false
					},
					axisLine: {
						lineStyle: {
							color:'rgba(145,192,236,0.4)',
							width: 1
						}
					},
					axisLabel: {
						textStyle: {
							color:'#fff',
							fontSize:10,
							fontFamily:'Microsoft Yahei'
						}
					},                                       
		            data : ['长春','吉林','延边','松原','通化','白城','白山','辽源','四平']
		        },
		        {
		            type : 'category',
		            axisLine: {show:false},
		            axisTick: {show:false},
		            axisLabel: {show:false},
		            splitArea: {show:false},
		            splitLine: {show:false},
		            data : ['长春','吉林','延边','松原','通化','白城','白山','辽源','四平']
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            splitLine: {
						show: false
					},
					axisLine: {
						lineStyle: {
							color:'rgba(145,192,236,0.4)',
							width: 1
						}
					},
		            axisLabel:{
		            	formatter:'{value}',
		            	textStyle: {
							color:'#fff',
							fontSize:10,
							fontFamily:'Microsoft Yahei'
						}
		            }
		        }
		    ],
		    series : [
		        {
		            name:'采伐限额',
		            type:'bar',
		            itemStyle: {normal: {color:'#009ea8'}},
		            data:[150,200,225,245,220,235,201,136,240]
		        },
		        {
		            name:'木材生产计划',
		            type:'bar',
		            itemStyle: {normal: {color:'#ffc911'}},
		            data:[135,180,198,130,174,100,40,34,33]
		        },
		        {
		            name:'采伐量',
		            type:'bar',
		            itemStyle: {normal: {color:'#00cfff'}},
		            data:[100,160,176,145,148,68,20,20,21]
		        }
		    ]
		};
        // 为echarts对象加载数据 
        myChart1.setOption(option1); 
        
        
        // 林地面积统计情况
        var myChart2 = ec.init(document.getElementById('forest-statistics')); 
        $(window).resize(function() {
			$(myChart2).each(function(index, chart) {
				var a = $("#forest-statistics-width").width();
				chart.resize(a);
			});
		});

        var labelTop = {
		    normal : {
		        label : {
		            show : true,
		            position : 'center',
		            formatter : '{b}',
		            textStyle: {
		                baseline : 'top',
		                fontSize:12,
		                color:'#fff',
		                fontFamily:'Microsoft Yahei'
		            }
		        },
		        labelLine : {
		            show : false
		        }
		    }
		};
		var labelFromatter = {
		    normal : {
		        label : {
		            formatter : function (params){
		                return 1000-params.value//计算公示
		            },
		            textStyle: {
		                baseline : 'bottom',
		                fontSize:24,
		                color:'#86dc68',
		                fontFamily:'Microsoft Yahei'
		            }
		        }
		    },
		}
		var labelBottom = {
		    normal : {
		        color: '#ccc',
		        label : {
		            show : true,
		            position : 'center'
		        },
		        labelLine : {
		            show : false
		        }
		    },
		    emphasis: {
		        color: 'rgba(0,0,0,0)'
		    }
		};
		var radius = [60, 75];
		option2 = {
		    legend: {
		    	show: false,
		        x : 'center',
		        y : 'center',
		        data:[
		            '有林地面积','林业用地面积','森林覆盖率','活立木总蓄积'
		        ]
		    },
		    title : {
		    },
		    toolbox: {
		    },
		    series : [
		        {
		            type : 'pie',
		            center : ['15%', '35%'],
		            radius : radius,
		            x: '10%', // for funnel
		            itemStyle : labelFromatter,
		            data : [
		                {name:'other', value:822.1, itemStyle : labelBottom},
		                {name:'有林地面积', value:177.9,itemStyle : labelTop}
		            ]
		        },
		        {
		            type : 'pie',
		            center : ['35%', '35%'],
		            radius : radius,
		            x:'20%', // for funnel
		            itemStyle : labelFromatter,
		            data : [
		                {name:'other', value:56, itemStyle : labelBottom},
		                {name:'林业用地面积', value:44,itemStyle : labelTop}
		            ]
		        },
		        {
		            type : 'pie',
		            center : ['55%', '35%'],
		            radius : radius,
		            x:'20%', // for funnel
		            itemStyle : labelFromatter,
		            data : [
		                {name:'other', value:65, itemStyle : labelBottom},
		                {name:'森林覆盖率', value:35,itemStyle : labelTop}
		            ]
		        },
		        {
		            type : 'pie',
		            center : ['75%', '35%'],
		            radius : radius,
		            x:'20%', // for funnel
		            itemStyle : labelFromatter,
		            data : [
		                {name:'other', value:70, itemStyle : labelBottom},
		                {name:'活立木总蓄积', value:30,itemStyle : labelTop}
		            ]
		        }
		    ]
		};
        // 为echarts对象加载数据 
        myChart2.setOption(option2); 
        
        
        
        
        
    }
);
///////////////////////////////////////////////// echart 结束