
function drawEcharts(ec){
						　drawEcharts1(ec);
						}

///////////////////////////////////////////////// echart 开始
//function chartInit(){
// 路径配置
require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist',
        
    }
});
// 使用
require(
    [
        'echarts',
        'echarts/chart/bar' ,// 使用柱状图就加载bar模块，按需加载
        'echarts/chart/pie' ,
        'echarts/chart/gauge' ,
        'echarts/chart/line' 
    ],
    drawEcharts
);
    function drawEcharts1 (ec) {
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
		    	orient : 'vertical',
		    	x:'76%',
		    	y:0,
		    	itemGap:5,
		        data:['一产总值','二产总值','三产总值'],
		        itemWidth: 10,
		        itemHeight: 12,
		        textStyle:{
		        	'color':'#b2d5de',
		        	fontSize:10,
					fontFamily:'Microsoft Yahei'
		        },
		    },
		    calculable : true,
		    grid:{
		    		x:40,
		    		y:60,
		    		width:'84%',
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
		    	x:15,
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
				width:'84%',
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
		            barGap:0,
		            itemStyle: {normal: {color:'#009ea8'}},
		            data:[150,200,225,245,220,235,201,136,240]
		        },
		        {
		            name:'木材生产计划',
		            type:'bar',
		            barGap:0,
		            itemStyle: {normal: {color:'#ffc911'}},
		            data:[135,180,198,130,174,100,40,34,33]
		        },
		        {
		            name:'采伐量',
		            type:'bar',
		            barGap:0,
		            itemStyle: {normal: {color:'#00cfff'}},
		            data:[100,160,176,145,148,68,20,20,21]
		        }
		    ]
		};
        // 为echarts对象加载数据 
        myChart1.setOption(option1); 
        
        
        // 林地面积统计情况
        var myChart2 = ec.init(document.getElementById('forest-statistics')); 
        var myChart21 = ec.init(document.getElementById('forest-statistics1')); 
        var myChart22 = ec.init(document.getElementById('forest-statistics2')); 
        var myChart23 = ec.init(document.getElementById('forest-statistics3')); 
        $(window).resize(function() {
			$(myChart2).each(function(index, chart) {
				var a = $("#forest-statistics-width").width();
				chart.resize(a);
			});
			
			$(myChart21).each(function(index, chart) {
				var a = $("#forest-statistics-width").width();
				chart.resize(a);
			});
			
			$(myChart22).each(function(index, chart) {
				var a = $("#forest-statistics-width").width();
				chart.resize(a);
			});
			
			$(myChart23).each(function(index, chart) {
				var a = $("#forest-statistics-width").width();
				chart.resize(a);
			});
		});

        option2 = {
		    tooltip : {
		        formatter: "{a} <br/>{b} : {c}%"
		    },
		    toolbox: {
		    },
		    series : [
		        {
		            name:'森林统计',
		            type:'gauge',
		            center : ['50%', '55%'],    // 默认全局居中
		            radius : [0, '80%'],
		            min: 0,                     // 最小值
		            max: 100,                   // 最大值
		            precision: 0,               // 小数精度，默认为0，无小数点
		            splitNumber: 2,             // 分割段数，默认为5
		            axisLine: {            // 坐标轴线
		                show: true,        // 默认显示，属性show控制显示与否
		                lineStyle: {       // 属性lineStyle控制线条样式
		                    color: [[0.7, '#86dc68'],[1, '#0d2538']], 
		                    width: 12
		                }
		            },
		            axisTick: {show: false,},
		            axisLabel: {show: false,},
		            splitLine: {show: false,},
		            pointer : { width : 0},
		            title : {
		                show : true,
		                offsetCenter: ['0%', 25],       // x, y，单位px
		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
		                    color: '#fff',
		                    fontSize : 12,
		                    fontFamily: 'Microsoft Yahei'
		                }
		            },
		            detail : {
		                show : true,
		                backgroundColor: 'rgba(0,0,0,0)',
		                borderWidth: 0,
		                borderColor: '#ccc',
		                width: 100,
		                height: 40,
		                offsetCenter: ['0%', -37],        // x, y，单位px
		                formatter:'{value}',
		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
		                    color: '#86dc68',
		                    fontSize : 26
		                }
		            },
		            data:[{value: 822.1, name: '有林地面积'}]
		        }
		    ]
		};
		
		option21 = {
		    tooltip : {
		        formatter: "{a} <br/>{b} : {c}%"
		    },
		    toolbox: {
		    },
		    series : [
		        {
		            name:'森林统计',
		            type:'gauge',
		            center : ['50%', '55%'],    // 默认全局居中
		            radius : [0, '80%'],
		            min: 0,                     // 最小值
		            max: 100,                   // 最大值
		            precision: 0,               // 小数精度，默认为0，无小数点
		            splitNumber: 2,             // 分割段数，默认为5
		            axisLine: {            // 坐标轴线
		                show: true,        // 默认显示，属性show控制显示与否
		                lineStyle: {       // 属性lineStyle控制线条样式
		                    color: [[0.7, '#86dc68'],[1, '#0d2538']], 
		                    width: 12
		                }
		            },
		            axisTick: {show: false,},
		            axisLabel: {show: false,},
		            splitLine: {show: false,},
		            pointer : { width : 0},
		            title : {
		                show : true,
		                offsetCenter: ['0%', 25],       // x, y，单位px
		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
		                    color: '#fff',
		                    fontSize : 12,
		                    fontFamily: 'Microsoft Yahei'
		                }
		            },
		            detail : {
		                show : true,
		                backgroundColor: 'rgba(0,0,0,0)',
		                borderWidth: 0,
		                borderColor: '#ccc',
		                width: 100,
		                height: 40,
		                offsetCenter: ['0%', -37],        // x, y，单位px
		                formatter:'{value}',
		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
		                    color: '#86dc68',
		                    fontSize : 26
		                }
		            },
		            data:[{value: 937.6, name: '林业用地面积'}]
		        }
		    ]
		};
		
		option22 = {
		    tooltip : {
		        formatter: "{a} <br/>{b} : {c}%"
		    },
		    toolbox: {
		    },
		    series : [
		        {
		            name:'森林统计',
		            type:'gauge',
		            center : ['50%', '55%'],    // 默认全局居中
		            radius : [0, '80%'],
		            min: 0,                     // 最小值
		            max: 100,                   // 最大值
		            precision: 0,               // 小数精度，默认为0，无小数点
		            splitNumber: 2,             // 分割段数，默认为5
		            axisLine: {            // 坐标轴线
		                show: true,        // 默认显示，属性show控制显示与否
		                lineStyle: {       // 属性lineStyle控制线条样式
		                    color: [[0.7, '#86dc68'],[1, '#0d2538']], 
		                    width: 12
		                }
		            },
		            axisTick: {show: false,},
		            axisLabel: {show: false,},
		            splitLine: {show: false,},
		            pointer : { width : 0},
		            title : {
		                show : true,
		                offsetCenter: ['0%', 25],       // x, y，单位px
		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
		                    color: '#fff',
		                    fontSize : 12,
		                    fontFamily: 'Microsoft Yahei'
		                }
		            },
		            detail : {
		                show : true,
		                backgroundColor: 'rgba(0,0,0,0)',
		                borderWidth: 0,
		                borderColor: '#ccc',
		                width: 100,
		                height: 40,
		                offsetCenter: ['0%', -37],        // x, y，单位px
		                formatter:'{value}%',
		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
		                    color: '#86dc68',
		                    fontSize : 26
		                }
		            },
		            data:[{value: 40.9, name: '森林覆盖率'}]
		        }
		    ]
		};
		
		option23 = {
		    tooltip : {
		        formatter: "{a} <br/>{b} : {c}%"
		    },
		    toolbox: {
		    },
		    series : [
		        {
		            name:'森林统计',
		            type:'gauge',
		            center : ['50%', '55%'],    // 默认全局居中
		            radius : [0, '80%'],
		            min: 0,                     // 最小值
		            max: 100,                   // 最大值
		            precision: 0,               // 小数精度，默认为0，无小数点
		            splitNumber: 2,             // 分割段数，默认为5
		            axisLine: {            // 坐标轴线
		                show: true,        // 默认显示，属性show控制显示与否
		                lineStyle: {       // 属性lineStyle控制线条样式
		                    color: [[0.7, '#86dc68'],[1, '#0d2538']], 
		                    width: 12
		                }
		            },
		            axisTick: {show: false,},
		            axisLabel: {show: false,},
		            splitLine: {show: false,},
		            pointer : { width : 0},
		            title : {
		                show : true,
		                offsetCenter: ['0%', 25],       // x, y，单位px
		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
		                    color: '#fff',
		                    fontSize : 12,
		                    fontFamily: 'Microsoft Yahei'
		                }
		            },
		            detail : {
		                show : true,
		                backgroundColor: 'rgba(0,0,0,0)',
		                borderWidth: 0,
		                borderColor: '#ccc',
		                width: 100,
		                height: 40,
		                offsetCenter: ['0%', -37],        // x, y，单位px
		                formatter:'{value}',
		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
		                    color: '#86dc68',
		                    fontSize : 26
		                }
		            },
		            data:[{value: 9880.1, name: '活立木总蓄积'}]
		        }
		    ]
		};
        // 为echarts对象加载数据 
        myChart2.setOption(option2); 
        myChart21.setOption(option21); 
        myChart22.setOption(option22); 
        myChart23.setOption(option23); 
        
        
        // 林业分类
        var myChart3 = ec.init(document.getElementById('forestry-classification')); 
        $(window).resize(function() {
			$(myChart3).each(function(index, chart) {
				var a = $("#forestry-classification-width").width();
				chart.resize(a);
			});
		});

        var option3 =  {
		    title : {
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c}万公顷 ({d}%)"
		    },
		    legend: {
		        x : 'center',
    			y : 'bottom',
    			textStyle: {
    				color: '#b2d5de',
    				fontSize : 10,
		            fontFamily: 'Microsoft Yahei'
    			},
		        data: ['其他','竹林地','未成年林地','乔木林地','林地灌木']
		    },
		    series : [
		        {
		        	name:'林地分类',
		            type: 'pie',
		            radius : '75%',
		            center: ['50%', '40%'],
		            data:[
		                {value:150, name:'其他',itemStyle: {normal: {color:'#ff4618'}}},
		                {value:280, name:'竹林地',itemStyle: {normal: {color:'#ffc911'}}},
		                {value:60, name:'未成年林地',itemStyle: {normal: {color:'#03e156'}}},
		                {value:800, name:'乔木林地',itemStyle: {normal: {color:'#00cfff'}}},
		                {value:1200, name:'林地灌木',itemStyle: {normal: {color:'#003e71'}}}
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
        myChart3.setOption(option3); 
        
        
        
        // 物种分布
        var myChart4 = ec.init(document.getElementById('species-distribution')); 
        $(window).resize(function() {
			$(myChart4).each(function(index, chart) {
				var a = $("#species-distribution-width").width();
				chart.resize(a);
			});
		});

        var option4 =  {
		    title : {
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		    	x : 18,
    			textStyle: {
    				color: '#b2d5de',
    				fontSize : 10,
		            fontFamily: 'Microsoft Yahei'
    			},
		        data:['动物','植物']
		    },
		    toolbox: {
		    },
		    calculable : true,
		    grid: {
				x: 38,
				y: 40,
				width: '82%'
			},
		    xAxis : [
		        {
		            type : 'category',
		            boundaryGap : false,
		            data : ['长春','吉林','通化','松原','白城','白山','四平','辽源','延边'],
		            axisLine: {
						lineStyle: {
							color: 'rgba(145,192,236,0.4)',
							width: 1
						},
					},
					axisLabel: {
						textStyle: {
							color: '#fff',
							fontSize: 10
						}
					},
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            axisLine: {
						lineStyle: {
							color: 'rgba(145,192,236,0.4)',
							width: 1
						},
					},
					axisLabel: {
						textStyle: {
							color: '#fff',
							fontSize: 10
						}
					},
		        }
		    ],
		    series : [
		        {
		            name:'动物',
		            type:'line',
		            smooth:true,
		            itemStyle: {
					 	normal: {
					 		areaStyle: {
					 			type: 'default'
					 		},
					 		color: '#00cfff'
					 	}
					 },
		            data:[100, 162, 143, 160, 158, 134, 141, 210, 278, 110]
		        },
		        {
		            name:'植物',
		            type:'line',
		            smooth:true,
		            itemStyle: {
						normal: {
							areaStyle: {
								type: 'default'
							},
							color: '#ff3803'
						}
					},
		            data:[280, 432, 387, 310, 312, 325, 330, 308, 340, 280]
		        }
		    ]
		};
        // 为echarts对象加载数据 
        myChart4.setOption(option4);
        
        
        
        // 林业总面积
        var myChart5 = ec.init(document.getElementById('forest-total-area')); 
        $(window).resize(function() {
			$(myChart5).each(function(index, chart) {
				var a = $("#forest-total-area-width").width();
				chart.resize(a);
			});
		});

        var option5 =  {
		    title : {
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		    	show: false,
		    	x : 20,
    			textStyle: {
    				color: '#b2d5de',
    				fontSize : 10,
		            fontFamily: 'Microsoft Yahei'
    			},
		        data:['林业总面积']
		    },
		    toolbox: {
		    },
		    calculable : true,
		    grid: {
				x: 50,
				y: 25,
				width: '75%',
				borderWidth:0
			},
		    xAxis : [
		        {
		            type : 'category',
		            boundaryGap : false,
		            data : ['2011年','2012年','2013年','2014年','2015年'],
		            axisLine: {
						lineStyle: {
							color: 'rgba(145,192,236,0.4)',
							width: 1
						},
					},
					axisLabel: {
						textStyle: {
							color: '#fff',
							fontSize: 10
						}
					},
					axisLine: {
						lineStyle: {
							color: 'rgba(145,192,236,0.4)',
							width: 1
						},
					},
					axisLabel: {
						textStyle: {
							color: '#fff',
							fontFamily: 'Microsoft Yahei',
							fontSize: 10
						}
					},
					splitLine: {
						show: false
					}
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            name:'单位(万公顷)',
		            nameTextStyle:{
		            	color: '#fff',
		            	fontSize:10,
						fontFamily:'Microsoft Yahei'
		            },
		            axisLine: {
						lineStyle: {
							color: 'rgba(145,192,236,0.4)',
							width: 1
						},
					},
					axisLabel: {
						textStyle: {
							color: '#fff',
							fontSize: 10
						}
					},
					axisLine: {
						lineStyle: {
							color: 'rgba(145,192,236,0.4)',
							width: 1
						},
					},
					axisLabel: {
						textStyle: {
							color: '#fff',
							fontFamily: 'Microsoft Yahei',
							fontSize: 10
						}
					},
					splitLine: {
						show: false
					}
		        }
		    ],
		    series : [
		        {
		            name:'林业总面积',
		            type:'line',
		            smooth:true,
		            itemStyle: {
					 	normal: {
					 		lineStyle:{
					 			width:0
					 		},
					 		areaStyle: {
					 			color:'rgba(145,236,233,0.8)',
					 			type: 'default'
					 		},
					 		color: '#00cfff'
					 	}
					 },
		            data:[1000, 1620, 1430, 1600, 1580]
		        }
		    ]
		};
        // 为echarts对象加载数据 
        myChart5.setOption(option5);
        
        
        
        // 活立木蓄积
        var myChart6 = ec.init(document.getElementById('living-tree-volume')); 
        $(window).resize(function() {
			$(myChart6).each(function(index, chart) {
				var a = $("#living-tree-volume-width").width();
				chart.resize(a);
			});
		});

        var option6 =  {
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
		        x: 'center',
		        itemWidth:9,
		        itemHeight:8,
		        textStyle: {
    				color: '#b2d5de',
    				fontSize : 10,
		            fontFamily: 'Microsoft Yahei'
    			},
		        data : ['2011年 / 54210万立方米','2012年 / 58086万立方米','2013年 / 60000万立方米','2014年 / 63215万立方米','2015年 / 65239万立方米']
		    },
		    calculable : true,
		    series : [
		        {
		            name:'活立木蓄积',
		            type:'funnel',
		            width: '45%',
		            height: '60%',
		            x:'6%',
		            y: '10%',
		            itemStyle: {
		                normal: {
		                    borderWidth: 0,
		                    label: {
		                        position: 'right'
		                    }
		                }
		            },
		            data:[
		                {value:60, name:'2013年 / 60000万立方米',itemStyle: {normal: {color:'#c23531'}}},
		                {value:50, name:'2012年 / 58086万立方米',itemStyle: {normal: {color:'#b4b4b4'}}},
		                {value:30, name:'2011年 / 54210万立方米',itemStyle: {normal: {color:'#61a0a8'}}},
		                {value:80, name:'2014年 / 63215万立方米',itemStyle: {normal: {color:'#d48265'}}},
		                {value:100, name:'2015年 / 65239万立方米',itemStyle: {normal: {color:'#91c7ae'}}}
		            ]
		        }
		    ]
		};
        // 为echarts对象加载数据 
        myChart6.setOption(option6);
        
        
        
        
        
        
       // 物种统计
        var myChart7 = ec.init(document.getElementById('species-statistics')); 
        $(window).resize(function() {
			$(myChart7).each(function(index, chart) {
				var a = $("#species-statistics-width").width();
				chart.resize(a);
			});
		});

        var option7 = {
		    title : {
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		    	x: 20,
		        itemWidth:9,
		        itemHeight:8,
		        textStyle: {
    				color: '#b2d5de',
    				fontSize : 10,
		            fontFamily: 'Microsoft Yahei'
    			},
		        data:['动物', '植物']
		    },
		    toolbox: {
		    },
		    grid: {
				x: 60,
				y: 40,
				width: '73%',
				borderWidth:0
			},
		    calculable : true,
		    xAxis : [
		        {
		            type : 'value',
		            boundaryGap : [0, 0.01],
		            axisLine: {
						lineStyle: {
							color: 'rgba(145,192,236,0.4)',
							width: 1
						},
					},
					axisLabel: {
						textStyle: {
							color: '#fff',
							fontFamily: 'Microsoft Yahei',
							fontSize: 10
						}
					},
					splitLine: {
						show: false
					}
		        }
		    ],
		    yAxis : [
		        {
		            type : 'category',
		            data : ['2011年','2012年','2013年','2014年','2015年'],
		            axisLine: {
						lineStyle: {
							color: 'rgba(145,192,236,0.4)',
							width: 0
						},
					},
					axisLabel: {
						textStyle: {
							color: '#fff',
							fontFamily: 'Microsoft Yahei',
							fontSize: 10
						}
					},
					splitLine: {
						show: false
					}
		        }
		    ],
		    series : [
		        {
		            name:'动物',
		            type:'bar',
		            barGap: '0%',
		            data:[2884, 2000, 1842, 1945, 1721],
		            itemStyle: {
		            	normal: {
		            		color: '#56e5ff'
		            	}
		            }
		        },
		        {
		            name:'植物',
		            type:'bar',
		            barGap: '0%',
		            data:[2250, 2400, 2250, 2300, 1900],
		            itemStyle: {
		            	normal: {
		            		color: '#04a585'
		            	}
		            }
		        }
		    ]
		};
        // 为echarts对象加载数据 
        myChart7.setOption(option7);
        
        
        
        // 物种统计
        var myChart8 = ec.init(document.getElementById('fireNum-economicLosses')); 
        $(window).resize(function() {
			$(myChart8).each(function(index, chart) {
				var a = $("#fireNum-economicLosses-width").width();
				chart.resize(a);
			});
		});

        var option8 ={
		    tooltip : {
		        trigger: 'axis'
		    },
		    toolbox: {
		    },
		    calculable : true,
		    legend: {
		    	show:false,
		        data:['经济损失','火灾次数']
		    },
		    grid: {
				x: 40,
				y: 20,
				width: '71%',
				borderWidth:0
			},
		    xAxis : [
		        {
		            type : 'category',
		            data : ['2011年','2012年','2013年','2014年','2015年'],
		            axisLine: {
						lineStyle: {
							color: 'rgba(145,192,236,0.4)',
							width: 1
						},
					},
					axisLabel: {
						textStyle: {
							color: '#fff',
							fontFamily: 'Microsoft Yahei',
							fontSize: 10
						}
					},
					splitLine: {
						show: false
					}
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            name : '单位：次',
		            nameTextStyle:{
		            	color: '#a2bdc7',
		            	fontSize:10,
						fontFamily:'Microsoft Yahei'
		            },
		            axisLabel : {
		                formatter: '{value}'
		            },
		            axisLine: {
						lineStyle: {
							color: 'rgba(145,192,236,0.4)',
							width: 1
						},
					},
					axisLabel: {
						textStyle: {
							color: '#fff',
							fontFamily: 'Microsoft Yahei',
							fontSize: 10
						}
					},
					splitLine: {
						show: true,
						lineStyle: {
							color: 'rgba(145,192,236,0.4)',
							width: 1
						},
					}
		        },
		        {
		            type : 'value',
		            name : '单位：亿',
		            nameTextStyle:{
		            	color: '#a2bdc7',
		            	fontSize:10,
						fontFamily:'Microsoft Yahei'
		            },
		            axisLabel : {
		                formatter: '{value}'
		            },
		            axisLine: {
						lineStyle: {
							color: 'rgba(145,192,236,0.4)',
							width: 1
						},
					},
					axisLabel: {
						textStyle: {
							color: '#fff',
							fontFamily: 'Microsoft Yahei',
							fontSize: 10
						}
					},
					splitLine: {
						show: false
					}
		        }
		    ],
		    series : [
		
		        {
		            name:'经济损失',
		            type:'bar',
		            data:[220, 320, 480, 310, 206],
		            itemStyle: {
		            	normal: {
		            		color: '#89c83d'
		            	}
		            }
		        },
		        {
		            name:'火灾次数',
		            type:'line',
		            yAxisIndex: 1,
		            data:[1250, 2000, 2800, 2000, 1000],
		            itemStyle: {
		            	normal: {
		            		color: '#ff3803'
		            	}
		            }
		        }
		    ]
		};
        // 为echarts对象加载数据 
        myChart8.setOption(option8);
        
        
        /////////////////////////////////////////////////////森林面积
		var myChart9 = ec.init(document.getElementById('forest-area'));
		$(window).resize(function() {
			$(myChart9).each(function(index, chart) {
				var a = $("#forest-area-width").width();
				chart.resize(a);
			});
		});
		option9 = {
			color: ['#89c83d'],
			title: {},
			toolbox: {
				show: false,
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data: ['面积'],
				show: false,
			},
			calculable: true,
			grid: {
				x: 10,
				y: 6,
				width: '94%',
				borderWidth: 0
			},
			xAxis: [{
				type: 'category',
				data: ['长春','吉林','通化','松原','白城','白山','四平','辽源','延边'],
				axisLine: {
					lineStyle: {
						color: 'rgba(145,192,236,0.4)',
						width: 1
					},
				},
				axisLabel: {
					textStyle: {
						color: '#fff',
						fontFamily: 'Microsoft Yahei',
						fontSize: 10
					}
				},
				splitLine: {
					show: false
				}
			}],
			yAxis: [{
				show: false,
				type: 'value',
				axisLine: {
					lineStyle: {
						color: 'rgba(145,192,236,0.4)',
						width: 0
					},
				},
				axisLabel: {
					textStyle: {
						color: '#fff',
						fontSize: 10
					}
				},
				splitLine: {
					show: false
				}
			}],
			series: [{
				name: '森林面积',
				type: 'bar',
				data: [420.0, 285.0, 482.0, 111.1, 400, 290.0,420.0, 285.0, 482.0]
			}]
		};
		// 为echarts对象加载数据 
		myChart9.setOption(option9);
		
		
		
		// 火灾统计情况
        var myChart10 = ec.init(document.getElementById('fire-statistics')); 
        var myChart101 = ec.init(document.getElementById('fire-statistics1')); 
        var myChart102 = ec.init(document.getElementById('fire-statistics2')); 
        var myChart103 = ec.init(document.getElementById('fire-statistics3')); 
        $(window).resize(function() {
			$(myChart10).each(function(index, chart) {
				var a = $("#fire-statistics-width").width();
				chart.resize(a);
			});
			
			$(myChart101).each(function(index, chart) {
				var a = $("#fire-statistics-width").width();
				chart.resize(a);
			});
			
			$(myChart102).each(function(index, chart) {
				var a = $("#fire-statistics-width").width();
				chart.resize(a);
			});
			
			$(myChart103).each(function(index, chart) {
				var a = $("#fire-statistics-width").width();
				chart.resize(a);
			});
		});

        option10 = {
		    tooltip : {
		        formatter: "{a} <br/>{b} : {c}%"
		    },
		    toolbox: {
		    },
		    series : [
		        {
		            name:'火灾统计',
		            type:'gauge',
		            center : ['50%', '55%'],    // 默认全局居中
		            radius : [0, '80%'],
		            min: 0,                     // 最小值
		            max: 100,                   // 最大值
		            precision: 0,               // 小数精度，默认为0，无小数点
		            splitNumber: 2,             // 分割段数，默认为5
		            axisLine: {            // 坐标轴线
		                show: true,        // 默认显示，属性show控制显示与否
		                lineStyle: {       // 属性lineStyle控制线条样式
		                    color: [[0.7, '#f1412a'],[1, '#0d2538']], 
		                    width: 12
		                }
		            },
		            axisTick: {show: false,},
		            axisLabel: {show: false,},
		            splitLine: {show: false,},
		            pointer : { width : 0},
		            title : {
		                show : true,
		                offsetCenter: ['0%', 25],       // x, y，单位px
		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
		                    color: '#fff',
		                    fontSize : 12,
		                    fontFamily: 'Microsoft Yahei'
		                }
		            },
		            detail : {
		                show : true,
		                backgroundColor: 'rgba(0,0,0,0)',
		                borderWidth: 0,
		                borderColor: '#ccc',
		                width: 100,
		                height: 40,
		                offsetCenter: ['0%', -37],        // x, y，单位px
		                formatter:'{value}',
		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
		                    color: '#f1412a',
		                    fontSize : 26
		                }
		            },
		            data:[{value: 29, name: '火灾总次数'}]
		        }
		    ]
		};
		
		option101 = {
		    tooltip : {
		        formatter: "{a} <br/>{b} : {c}%"
		    },
		    toolbox: {
		    },
		    series : [
		        {
		            name:'火灾统计',
		            type:'gauge',
		            center : ['50%', '55%'],    // 默认全局居中
		            radius : [0, '80%'],
		            min: 0,                     // 最小值
		            max: 100,                   // 最大值
		            precision: 0,               // 小数精度，默认为0，无小数点
		            splitNumber: 2,             // 分割段数，默认为5
		            axisLine: {            // 坐标轴线
		                show: true,        // 默认显示，属性show控制显示与否
		                lineStyle: {       // 属性lineStyle控制线条样式
		                    color: [[0.7, '#f1412a'],[1, '#0d2538']], 
		                    width: 12
		                }
		            },
		            axisTick: {show: false,},
		            axisLabel: {show: false,},
		            splitLine: {show: false,},
		            pointer : { width : 0},
		            title : {
		                show : true,
		                offsetCenter: ['0%', 25],       // x, y，单位px
		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
		                    color: '#fff',
		                    fontSize : 12,
		                    fontFamily: 'Microsoft Yahei'
		                }
		            },
		            detail : {
		                show : true,
		                backgroundColor: 'rgba(0,0,0,0)',
		                borderWidth: 0,
		                borderColor: '#ccc',
		                width: 100,
		                height: 40,
		                offsetCenter: ['0%', -37],        // x, y，单位px
		                formatter:'{value}',
		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
		                    color: '#f1412a',
		                    fontSize : 26
		                }
		            },
		            data:[{value: 23, name: '受灾总面积'}]
		        }
		    ]
		};
		
		option102 = {
		    tooltip : {
		        formatter: "{a} <br/>{b} : {c}%"
		    },
		    toolbox: {
		    },
		    series : [
		        {
		            name:'火灾统计',
		            type:'gauge',
		            center : ['50%', '55%'],    // 默认全局居中
		            radius : [0, '80%'],
		            min: 0,                     // 最小值
		            max: 100,                   // 最大值
		            precision: 0,               // 小数精度，默认为0，无小数点
		            splitNumber: 2,             // 分割段数，默认为5
		            axisLine: {            // 坐标轴线
		                show: true,        // 默认显示，属性show控制显示与否
		                lineStyle: {       // 属性lineStyle控制线条样式
		                    color: [[0.7, '#f1412a'],[1, '#0d2538']], 
		                    width: 12
		                }
		            },
		            axisTick: {show: false,},
		            axisLabel: {show: false,},
		            splitLine: {show: false,},
		            pointer : { width : 0},
		            title : {
		                show : true,
		                offsetCenter: ['0%', 25],       // x, y，单位px
		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
		                    color: '#fff',
		                    fontSize : 12,
		                    fontFamily: 'Microsoft Yahei'
		                }
		            },
		            detail : {
		                show : true,
		                backgroundColor: 'rgba(0,0,0,0)',
		                borderWidth: 0,
		                borderColor: '#ccc',
		                width: 100,
		                height: 40,
		                offsetCenter: ['0%', -37],        // x, y，单位px
		                formatter:'{value}%',
		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
		                    color: '#f1412a',
		                    fontSize : 26
		                }
		            },
		            data:[{value: 15, name: '经济损失'}]
		        }
		    ]
		};
		
		option103 = {
		    tooltip : {
		        formatter: "{a} <br/>{b} : {c}%"
		    },
		    toolbox: {
		    },
		    series : [
		        {
		            name:'火灾统计',
		            type:'gauge',
		            center : ['50%', '55%'],    // 默认全局居中
		            radius : [0, '80%'],
		            min: 0,                     // 最小值
		            max: 100,                   // 最大值
		            precision: 0,               // 小数精度，默认为0，无小数点
		            splitNumber: 2,             // 分割段数，默认为5
		            axisLine: {            // 坐标轴线
		                show: true,        // 默认显示，属性show控制显示与否
		                lineStyle: {       // 属性lineStyle控制线条样式
		                    color: [[0.7, '#f1412a'],[1, '#0d2538']], 
		                    width: 12
		                }
		            },
		            axisTick: {show: false,},
		            axisLabel: {show: false,},
		            splitLine: {show: false,},
		            pointer : { width : 0},
		            title : {
		                show : true,
		                offsetCenter: ['0%', 25],       // x, y，单位px
		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
		                    color: '#fff',
		                    fontSize : 12,
		                    fontFamily: 'Microsoft Yahei'
		                }
		            },
		            detail : {
		                show : true,
		                backgroundColor: 'rgba(0,0,0,0)',
		                borderWidth: 0,
		                borderColor: '#ccc',
		                width: 100,
		                height: 40,
		                offsetCenter: ['0%', -37],        // x, y，单位px
		                formatter:'{value}',
		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
		                    color: '#f1412a',
		                    fontSize : 26
		                }
		            },
		            data:[{value: 177, name: '伤亡人数'}]
		        }
		    ]
		};
        // 为echarts对象加载数据 
        myChart10.setOption(option10); 
        myChart101.setOption(option101); 
        myChart102.setOption(option102); 
        myChart103.setOption(option103); 
        
        
        // 湿地分类统计
        var myChart11 = ec.init(document.getElementById('wetland-classification'));
        $(window).resize(function() {
			$(myChart11).each(function(index, chart) {
				var a = $("#wetland-classification-width").width();
				chart.resize(a);
			});
		});

        var option11 = {
            tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    legend: {
		    	x:'center',
		        data:['滨海湿地','河流湿地','湖泊湿地','沼泽湿地','人工湿地'],
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
		    		y:50,
		    		width:'84%',
		    		borderWidth:0

		    },
		    xAxis : [
		        {
		            type : 'category',  
		            data : ['2011年','2012年','2013年','2014年','2015年'],
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
		            name : '单位(万公顷)',
		            nameTextStyle:{
		            	color: '#6893a4',
		            	fontSize:10,
						fontFamily:'Microsoft Yahei'
		            },
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
		            name:'滨海湿地',
		            type:'bar',
		            stack: '林业',
		            itemStyle: {
		            	normal: {
		            		color:'#ab6d23'
		            	},
		            },
		            data:[42, 58, 20, 61, 51]
		        },
		        {
		            name:'河流湿地',
		            type:'bar',
		            stack: '林业',
		            itemStyle: {
		            	normal: {
		            		color:'#e6a64b'
		            	},
		            },
		            data:[100, 81, 109, 112, 120]
		        },
		        {
		            name:'湖泊湿地',
		            type:'bar',
		            stack: '林业',
		            itemStyle: {
		            	normal: {
		            		color:'#b4863d'
		            	},
		            },
		            data:[150, 232, 201, 154, 190]
		        },
		        {
		            name:'沼泽湿地',
		            type:'bar',
		            stack: '林业',
		            itemStyle: {
		            	normal: {
		            		color:'#dfb278'
		            	},
		            },
		            data:[100, 81, 109, 112, 120]
		        },
		        {
		            name:'人工湿地',
		            type:'bar',
		            stack: '林业',
		            itemStyle: {
		            	normal: {
		            		color:'#fff4a7'
		            	},
		            },
		            data:[150, 232, 201, 154, 190]
		        }
		    ]
        };
        // 为echarts对象加载数据 
        myChart11.setOption(option11); 
        
        
        
        // 森林覆盖率统计
        var myChart12 = ec.init(document.getElementById('forest-coverage')); 
        $(window).resize(function() {
			$(myChart12).each(function(index, chart) {
				var a = $("#forest-coverage-width").width();
				chart.resize(a);
			});
		});

        var option12 = {
		    title : {
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		        show: false,
		        data:['森林覆盖率']
		    },
		    toolbox: {
		    },
		    calculable : true,
		    grid: {
				y: 25,
				x: 60,
				width:'86%',
	    		borderWidth:0
			},
		    xAxis : [
		        {
		            type : 'category',
		            boundaryGap : false,
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
		            data : ['2011年','2012年','2013年','2014年','2015年']
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value'+'%',
		            name : '单位(%)',
		            max:100,
		            nameTextStyle:{
		            	color: '#fff',
		            	fontSize:10,
						fontFamily:'Microsoft Yahei'
		            },
		            splitLine: {
						show: true,
						lineStyle: {
							color: 'rgba(145,192,236,0.4)',
							width: 1
						}
					},
					axisLine: {
						lineStyle: {
							color:'rgba(145,192,236,0.4)',
							width: 1
						}
					},
					axisLabel: {
						formatter: '{value} %',
						textStyle: {
							color:'#fff',
							fontSize:10,
							fontFamily:'Microsoft Yahei'
						}
					}, 
		        }
		    ],
		    series : [
		        {
		            name:'森林覆盖率',
		            type:'line',
		            smooth:true,
		            itemStyle: {normal: {areaStyle: {type: 'default'},color: '#86dc68'}},
		            data:[38, 60, 57, 75, 80]
		        }
		    ]
		};
        // 为echarts对象加载数据 
        myChart12.setOption(option12); 
        
        
        
        // 采伐限额
        var myChart13 = ec.init(document.getElementById('cutting-quota')); 
        $(window).resize(function() {
			$(myChart13).each(function(index, chart) {
				var a = $("#cutting-quota-width").width();
				chart.resize(a);
			});
		});

        var option13 = {
		    title : {
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		    	x:'82%',
		    	y:'center',
		        itemWidth: 19,
		        itemHeight: 10,
		        orient : 'vertical',
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
				y: 30,
				x: 55,
				width:'70%',
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
		            data : ['2011年','2012年','2013年','2014年','2015年']
		        },
		        {
		            type : 'category',
		            axisLine: {show:false},
		            axisTick: {show:false},
		            axisLabel: {show:false},
		            splitArea: {show:false},
		            splitLine: {show:false},
		            data : ['2011年','2012年','2013年','2014年','2015年']
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            name:'单位(万立方米)',
		            nameTextStyle:{
		            	color: '#fff',
		            	fontSize:10,
						fontFamily:'Microsoft Yahei'
		            },
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
		            barGap: '0%',
		            itemStyle: {normal: {color:'#ffad56'}},
		            data:[1500,2000,2250,2450,2200]
		        },
		        {
		            name:'木材生产计划',
		            type:'bar',
		            barGap: '0%',
		            itemStyle: {normal: {color:'#afff8f'}},
		            data:[1350,1800,1980,1300,1740]
		        },
		        {
		            name:'采伐量',
		            type:'bar',
		            barGap: '0%',
		            itemStyle: {normal: {color:'#ffa98f'}},
		            data:[1000,1600,1760,1450,1480]
		        }
		    ]
		};
        // 为echarts对象加载数据 
        myChart13.setOption(option13); 
        
        
        
        // 可退耕还林面积
        var myChart14 = ec.init(document.getElementById('returning-forestArea')); 
        $(window).resize(function() {
			$(myChart14).each(function(index, chart) {
				var a = $("#returning-forestArea-width").width();
				chart.resize(a);
			});
		});

        var option14 = {
		    title : {
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		        show: false,
		        data:['可退耕还林面积']
		    },
		    toolbox: {
		    },
		    calculable : true,
		    grid: {
				y: 40,
				x: 60,
				width:'85%',
	    		borderWidth:0
			},
		    xAxis : [
		        {
		            type : 'category',
		            boundaryGap : false,
		            splitLine: {
						show: false,
						lineStyle: {
							color: 'rgba(240,240,240,1)',
							width: 1
						}
					},
					axisLine: {
						lineStyle: {
							color:'rgba(240,240,240,1)',
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
		            data : ['2011年','2012年','2013年','2014年','2015年']
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value'+'%',
		            name : '单位(万公顷)',
		            nameTextStyle:{
		            	color: '#fff',
		            	fontSize:10,
						fontFamily:'Microsoft Yahei'
		            },
		            splitLine: {
						show: true,
						lineStyle: {
							color: 'rgba(240,240,240,1)',
							width: 1
						}
					},
					axisLine: {
						lineStyle: {
							color:'rgba(240,240,240,1)',
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
		        }
		    ],
		    series : [
		        {
		            name:'可退耕还林面积',
		            type:'line',
		            smooth:true,
		            itemStyle: {normal: {areaStyle: {type: 'default'},color: '#00cfff'}},
		            data:[38, 60, 57, 75, 80]
		        }
		    ]
		};
        // 为echarts对象加载数据 
        myChart14.setOption(option14); 
        
        
        // 林业产业生产总值
        var myChart15 = ec.init(document.getElementById('forestryIndustry-GDP')); 
        $(window).resize(function() {
			$(myChart15).each(function(index, chart) {
				var a = $("#forestryIndustry-GDP-width").width();
				chart.resize(a);
			});
		});
        var dataStyle = {
			normal: {
				color: '#ff8e42',
				label: {
					show: false
				},
				labelLine: {
					show: false
				}
			}
		};
		var dataStyle01 = {
			normal: {
				color: '#ffba68',
				label: {
					show: false
				},
				labelLine: {
					show: false
				}
			}
		};
		var dataStyle02 = {
			normal: {
				color: '#ffde8e',
				label: {
					show: false
				},
				labelLine: {
					show: false
				}
			}
		};
		var dataStyle03 = {
			normal: {
				color: '#ffeb8e',
				label: {
					show: false
				},
				labelLine: {
					show: false
				}
			}
		};
		var dataStyle04 = {
			normal: {
				color: '#feffae',
				label: {
					show: false
				},
				labelLine: {
					show: false
				}
			}
		};
		var placeHolderStyle = {
			normal: {
				color: 'rgba(0,0,0,0)',
				label: {
					show: false
				},
				labelLine: {
					show: false
				}
			},
			emphasis: {
				color: 'rgba(0,0,0,0)'
			}
		};
		option15 = {
			title: {
			},
			tooltip: {
				show: true,
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			legend: {
				orient: 'vertical',
				x: '52%',
				y: 25,
				itemGap: 5,
				textStyle: {
					color: '#fff',
					fontFamily: '微软雅黑',
					fontSize: 10
				},
				data: ['2015年  1569.65亿', '2014年  1034.87亿', '2013年    987.06亿', '2012年    834.21亿', '2011年    790.32亿']
			},
			toolbox: {},
			series: [{
				name: '1',
				type: 'pie',
				clockWise: false,
				radius: [100, 120],
				itemStyle: dataStyle,
				data: [{
					value: 0.7,
					name: '2015年  1569.65亿'
				}, {
					value: 0.3,
					name: 'invisible',
					itemStyle: placeHolderStyle
				}]
			}, {
				name: '2',
				type: 'pie',
				clockWise: false,
				radius: [80, 100],
				itemStyle: dataStyle01,
				data: [{
					value: 0.65,
					name: '2014年  1034.87亿'
				}, {
					value: 0.35,
					name: 'invisible',
					itemStyle: placeHolderStyle
				}]
			}, {
				name: '3',
				type: 'pie',
				clockWise: false,
				radius: [60, 80],
				itemStyle: dataStyle02,
				data: [{
					value: 0.55,
					name: '2013年    987.06亿'
				}, {
					value: 0.45,
					name: 'invisible',
					itemStyle: placeHolderStyle
				}]
			}, {
				name: '4',
				type: 'pie',
				clockWise: false,
				radius: [40, 60],
				itemStyle: dataStyle03,
				data: [{
					value: 0.3,
					name: '2012年    834.21亿'
				}, {
					value: 0.7,
					name: 'invisible',
					itemStyle: placeHolderStyle
				}]
			}, {
				name: '5',
				type: 'pie',
				clockWise: false,
				radius: [20, 40],
				itemStyle: dataStyle04,
				data: [{
					value: 0.2,
					name: '2011年    790.32亿'
				}, {
					value: 0.8,
					name: 'invisible',
					itemStyle: placeHolderStyle
				}]
			}]
		};
        // 为echarts对象加载数据 
        myChart15.setOption(option15); 
        
        ///////////////////////////////////////////////////////////////////////////////////////未来预测
        // 活立木蓄积
        var myChart6living = ec.init(document.getElementById('living-tree-volume1')); 
        $(window).resize(function() {
			$(myChart6living).each(function(index, chart) {
				var a = $("#living-tree-volume-width1").width();
				chart.resize(a);
			});
		});

        var option6living =  {
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
		        x: 'center',
		        itemWidth:6,
		        itemHeight:6,
		        
		        textStyle: {
    				color: '#b2d5de',
    				fontSize : 10,
		            fontFamily: 'Microsoft Yahei'
    			}, 
		        data : ['长春 / 63008万立方米','吉林 / 58846万立方米','延边 / 60535万立方米','松原 / 56821万立方米','通化 / 65239万立方米','白城 / 55846万立方米','白山 / 62018万立方米','辽源 / 55125万立方米','四平 / 53154万立方米']
		    },
		    calculable : true,
		    series : [
		        {
		            name:'活立木蓄积',
		            type:'funnel',
		            width: '42%',
		            height: '68%',
		            x:'10%',
		            y: '10%',
		            itemStyle: {
		                normal: {
		                    borderWidth: 0,
		                    label: {
		                        position: 'right'
		                    }
		                }
		            },
		            data:[
		                {value:110, name:'长春 / 63008万立方米',itemStyle: {normal: {color:'#65c9cf'}}},
		                {value:85, name:'吉林 / 58846万立方米',itemStyle: {normal: {color:'#c23531'}}},
		                {value:90, name:'延边 / 60535万立方米',itemStyle: {normal: {color:'#d48265'}}},
		                {value:60, name:'松原 / 56821万立方米',itemStyle: {normal: {color:'#d0afc1'}}},
		                {value:100, name:'白山 / 62018万立方米',itemStyle: {normal: {color:'#ffa180'}}},
		                {value:30, name:'辽源 / 55125万立方米',itemStyle: {normal: {color:'#d48265'}}},
		                {value:120, name:'通化 / 65239万立方米',itemStyle: {normal: {color:'#91c7ae'}}}
		            ]
		        },
		        {
		            name:'金字塔',
		            type:'funnel',
		            width: '15%',
		            height: '17%',
		            x:'23%',
		            y:'76%',
		            sort : 'ascending',
		            itemStyle: {
		                normal: {
		                	borderWidth:0,
		                    label: {
		                        position: 'right'
		                    }
		                }
		            },
		            data:[
		                {value:60, name:'白城 / 55846万立方米',itemStyle: {normal: {color:'#b4b4b4'}}},
		                {value:30, name:'四平 / 53154万立方米',itemStyle: {normal: {color:'#a7bf80'}}}
		            ]
		        }
		    ]
		};
        // 为echarts对象加载数据 
        myChart6living.setOption(option6living);
        
        
        // 湿地分类统计
        var myChart11wetland = ec.init(document.getElementById('wetland-classification1'));
        $(window).resize(function() {
			$(myChart11wetland).each(function(index, chart) {
				var a = $("#wetland-classification-width1").width();
				chart.resize(a);
			});
		});

        var option11wetland = {
            tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    legend: {
		    	x:'center',
		        data:['滨海湿地','河流湿地','湖泊湿地','沼泽湿地','人工湿地'],
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
		    		y:50,
		    		width:'84%',
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
		            name : '单位(万公顷)',
		            nameTextStyle:{
		            	fontSize:10,
						fontFamily:'Microsoft Yahei'
		            },
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
		            name:'滨海湿地',
		            type:'bar',
		            stack: '林业',
		            itemStyle: {
		            	normal: {
		            		color:'#ab6d23'
		            	},
		            },
		            data:[42, 58, 20, 61, 51, 58, 20, 61, 51]
		        },
		        {
		            name:'河流湿地',
		            type:'bar',
		            stack: '林业',
		            itemStyle: {
		            	normal: {
		            		color:'#e6a64b'
		            	},
		            },
		            data:[100, 81, 109, 112, 120, 81, 109, 112, 120]
		        },
		        {
		            name:'湖泊湿地',
		            type:'bar',
		            stack: '林业',
		            itemStyle: {
		            	normal: {
		            		color:'#b4863d'
		            	},
		            },
		            data:[150, 232, 201, 154, 190, 232, 201, 154, 190]
		        },
		        {
		            name:'沼泽湿地',
		            type:'bar',
		            stack: '林业',
		            itemStyle: {
		            	normal: {
		            		color:'#dfb278'
		            	},
		            },
		            data:[100, 81, 109, 112, 120, 81, 109, 112, 120]
		        },
		        {
		            name:'人工湿地',
		            type:'bar',
		            stack: '林业',
		            itemStyle: {
		            	normal: {
		            		color:'#fff4a7'
		            	},
		            },
		            data:[150, 232, 201, 154, 190, 232, 201, 154, 190]
		        }
		    ]
        };
        // 为echarts对象加载数据 
        myChart11wetland.setOption(option11wetland); 
        
        
        
        // 森林覆盖率统计
        var myChart12forest = ec.init(document.getElementById('forest-coverage1')); 
        $(window).resize(function() {
			$(myChart12forest).each(function(index, chart) {
				var a = $("#forest-coverage-width1").width();
				chart.resize(a);
			});
		});

        var option12forest = {
		    title : {
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		        show: false, 
		        data:['森林覆盖率']
		    },
		    toolbox: {
		    },
		    calculable : true,
		    grid: {
				y: 30,
				x: 50,
				width:'88%',
	    		borderWidth:0
			},
		    xAxis : [
		        {
		            type : 'category',
		            boundaryGap : false,
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
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value'+'%',
		            name : '单位(%)',
		            nameTextStyle:{
		            	color: '#fff',
		            	fontSize:10,
						fontFamily:'Microsoft Yahei'
		            },
		            splitLine: {
						show: true,
						lineStyle: {
							color: 'rgba(145,192,236,0.4)',
							width: 1
						}
					},
					axisLine: {
						lineStyle: {
							color:'rgba(145,192,236,0.4)',
							width: 1
						}
					},
					axisLabel: {
						formatter: '{value} %',
						textStyle: {
							color:'#fff',
							fontSize:10,
							fontFamily:'Microsoft Yahei'
						}
					}, 
		        }
		    ],
		    series : [
		        {
		            name:'森林覆盖率',
		            type:'line',
		            smooth:true,
		            itemStyle: {normal: {areaStyle: {type: 'default'},color: '#86dc68'}},
		            data:[38, 60, 57, 75, 80, 60, 57, 75, 80]
		        }
		    ]
		};
        // 为echarts对象加载数据 
        myChart12forest.setOption(option12forest); 
        
        
        
        // 采伐限额
        var myChart13cutting = ec.init(document.getElementById('cutting-quota1')); 
        $(window).resize(function() {
			$(myChart13cutting).each(function(index, chart) {
				var a = $("#cutting-quota-width1").width();
				chart.resize(a);
			});
		});

        var option13cutting = {
		    title : {
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		    	x:'83%',
		    	y:'center',
		        itemWidth: 19,
		        itemHeight: 10,
		        orient : 'vertical',
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
				width:'74%',
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
		            name:'单位(万立方米)',
		            nameTextStyle:{
		            	color: '#fff',
		            	fontSize:10,
						fontFamily:'Microsoft Yahei'
		            },
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
		            barGap: '0%',
		            itemStyle: {normal: {color:'#ffad56'}},
		            data:[1500,2000,2250,2450,2200,2000,2250,2450,2200]
		        },
		        {
		            name:'木材生产计划',
		            type:'bar',
		            barGap: '0%',
		            itemStyle: {normal: {color:'#afff8f'}},
		            data:[1350,1800,1980,1300,1740,1800,1980,1300,1740]
		        },
		        {
		            name:'采伐量',
		            type:'bar',
		            barGap: '0%',
		            itemStyle: {normal: {color:'#ffa98f'}},
		            data:[1000,1600,1760,1450,1480,1600,1760,1450,1480]
		        }
		    ]
		};
        // 为echarts对象加载数据 
        myChart13cutting.setOption(option13cutting); 
        
        
        
        // 可退耕还林面积
        var myChart14returning = ec.init(document.getElementById('returning-forestArea1')); 
        $(window).resize(function() {
			$(myChart14returning).each(function(index, chart) {
				var a = $("#returning-forestArea-width1").width();
				chart.resize(a);
			});
		});

        var option14returning = {
		    title : {
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		        show: false,
		        data:['可退耕还林面积']
		    },
		    toolbox: {
		    },
		    calculable : true,
		    grid: {
				y: 40,
				x: 60,
				width:'84%',
	    		borderWidth:0
			},
		    xAxis : [
		        {
		            type : 'category',
		            boundaryGap : false,
		            splitLine: {
						show: false,
						lineStyle: {
							color: 'rgba(240,240,240,1)',
							width: 1
						}
					},
					axisLine: {
						lineStyle: {
							color:'rgba(240,240,240,1)',
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
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            name : '单位(万公顷)',
		            max:1000,
		            nameTextStyle:{
		            	color: '#fff',
		            	fontSize:10,
						fontFamily:'Microsoft Yahei'
		            },
		            splitLine: {
						show: true,
						lineStyle: {
							color: 'rgba(240,240,240,1)',
							width: 1
						}
					},
					axisLine: {
						lineStyle: {
							color:'rgba(240,240,240,1)',
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
		        }
		    ],
		    series : [
		        {
		            name:'可退耕还林面积',
		            type:'line',
		            smooth:true,
		            itemStyle: {normal: {areaStyle: {type: 'default'},color: '#00cfff'}},
		            data:[380, 600, 570, 750, 800, 600, 570, 750, 800]
		        }
		    ]
		};
        // 为echarts对象加载数据 
        myChart14returning.setOption(option14returning); 
        
        
        // 物种统计
        var myChart13cutting2 = ec.init(document.getElementById('cutting-quota2')); 
        $(window).resize(function() {
			$(myChart13cutting2).each(function(index, chart) {
				var a = $("#cutting-quota-width2").width();
				chart.resize(a);
			});
		});

        var option13cutting2 = {
		    title : {
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		    	x:'left',
		    	y:'top',
		        itemWidth: 10,
		        itemHeight: 8,
		        textStyle:{
		        	'color':'#b2d5de',
		        	fontSize:10,
					fontFamily:'Microsoft Yahei'
		        },
		        data:[
		            '动物','植物'
		        ]
		    },
		    toolbox: {
		    },
		    calculable : true,
		    grid: {
				y: 50,
				x: 40,
				width:'84%',
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
		            name:'动物',
		            type:'bar',
		            barGap: '0%',
		            itemStyle: {normal: {color:'#56e5ff'}},
		            data:[1500,2000,2250,2450,2200,2000,2250,2450,2200]
		        },
		        {
		            name:'植物',
		            type:'bar',
		            barGap: '0%',
		            itemStyle: {normal: {color:'#04a585'}},
		            data:[1350,1800,1980,1300,1740,1800,1980,1300,1740]
		        }
		    ]
		};
        // 为echarts对象加载数据 
        myChart13cutting2.setOption(option13cutting2); 
        
        
        
        // 林业产业生产总值
        var myChart15forestryIndustry = ec.init(document.getElementById('forestryIndustry-GDP1')); 
        $(window).resize(function() {
			$(myChart15forestryIndustry).each(function(index, chart) {
				var a = $("#forestryIndustry-GDP-width1").width();
				chart.resize(a);
			});
		});
        var dataStyleGDP = {
			normal: {
				color: '#ff612a',
				label: {
					show: false
				},
				labelLine: {
					show: false
				}
			}
		};
		var dataStyleGDP01 = {
			normal: {
				color: '#ffae00',
				label: {
					show: false
				},
				labelLine: {
					show: false
				}
			}
		};
		var dataStyleGDP02 = {
			normal: {
				color: '#ff8e42',
				label: {
					show: false
				},
				labelLine: {
					show: false
				}
			}
		};
		var dataStyleGDP03 = {
			normal: {
				color: '#ffda48',
				label: {
					show: false
				},
				labelLine: {
					show: false
				}
			}
		};
		var dataStyleGDP04 = {
			normal: {
				color: '#fea468',
				label: {
					show: false
				},
				labelLine: {
					show: false
				}
			}
		};
		var dataStyleGDP05 = {
			normal: {
				color: '#fffa73',
				label: {
					show: false
				},
				labelLine: {
					show: false
				}
			}
		};
		var dataStyleGDP06 = {
			normal: {
				color: '#ffba68',
				label: {
					show: false
				},
				labelLine: {
					show: false
				}
			}
		};
		var dataStyleGDP07 = {
			normal: {
				color: '#feff97',
				label: {
					show: false
				},
				labelLine: {
					show: false
				}
			}
		};
		var dataStyleGDP08 = {
			normal: {
				color: '#ffdd83',
				label: {
					show: false
				},
				labelLine: {
					show: false
				}
			}
		};
		option15forestryIndustry = {
			title: {
			},
			tooltip: {
				show: true,
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			legend: {
				orient: 'vertical',
				x: '52%',
				y: 0,
				itemGap: 2,
				textStyle: {
					color: '#fff',
					fontFamily: '微软雅黑',
					fontSize: 10
				},
				data: ['长春  1569.65亿', '吉林  1034.87亿', '通化    987.06亿', '白山    834.21亿', '延边    790.32亿', '松原    734.87亿', '白城    687.06亿', '辽源    634.21亿', '四平    590.32亿']
			},
			toolbox: {},
			series: [{
				name: '1',
				type: 'pie',
				clockWise: false,
				radius: [125, 140],
				itemStyle: dataStyleGDP,
				data: [{
					value: 0.75,
					name: '长春  1569.65亿'
				}, {
					value: 0.25,
					name: 'invisible',
					itemStyle: placeHolderStyle
				}]
			}, {
				name: '2',
				type: 'pie',
				clockWise: false,
				radius: [110, 125],
				itemStyle: dataStyleGDP01,
				data: [{
					value: 0.71,
					name: '吉林  1034.87亿'
				}, {
					value: 0.29,
					name: 'invisible',
					itemStyle: placeHolderStyle
				}]
			}, {
				name: '3',
				type: 'pie',
				clockWise: false,
				radius: [95, 110],
				itemStyle: dataStyleGDP02,
				data: [{
					value: 0.7,
					name: '通化    987.06亿'
				}, {
					value: 0.3,
					name: 'invisible',
					itemStyle: placeHolderStyle
				}]
			}, {
				name: '4',
				type: 'pie',
				clockWise: false,
				radius: [80, 95],
				itemStyle: dataStyleGDP03,
				data: [{
					value: 0.6,
					name: '白山    834.21亿'
				}, {
					value: 0.4,
					name: 'invisible',
					itemStyle: placeHolderStyle
				}]
			}, {
				name: '5',
				type: 'pie',
				clockWise: false,
				radius: [65, 80],
				itemStyle: dataStyleGDP04,
				data: [{
					value: 0.5,
					name: '延边    790.32亿'
				}, {
					value: 0.5,
					name: 'invisible',
					itemStyle: placeHolderStyle
				}]
			}, {
				name: '6',
				type: 'pie',
				clockWise: false,
				radius: [50, 65],
				itemStyle: dataStyleGDP05,
				data: [{
					value: 0.46,
					name: '松原    734.87亿'
				}, {
					value: 0.54,
					name: 'invisible',
					itemStyle: placeHolderStyle
				}]
			}, {
				name: '7',
				type: 'pie',
				clockWise: false,
				radius: [35, 50],
				itemStyle: dataStyleGDP06,
				data: [{
					value: 0.45,
					name: '白城    687.06亿'
				}, {
					value: 0.55,
					name: 'invisible',
					itemStyle: placeHolderStyle
				}]
			}, {
				name: '8',
				type: 'pie',
				clockWise: false,
				radius: [20, 35],
				itemStyle: dataStyleGDP07,
				data: [{
					value: 0.3,
					name: '辽源    634.21亿'
				}, {
					value: 0.7,
					name: 'invisible',
					itemStyle: placeHolderStyle
				}]
			}, {
				name: '9',
				type: 'pie',
				clockWise: false,
				radius: [5, 20],
				itemStyle: dataStyleGDP08,
				data: [{
					value: 0.2,
					name: '四平    590.32亿'
				}, {
					value: 0.8,
					name: 'invisible',
					itemStyle: placeHolderStyle
				}]
			}]
		};
        // 为echarts对象加载数据 
        myChart15forestryIndustry.setOption(option15forestryIndustry);
        
        
        
        // 林地分类
        var myChart2classification = ec.init(document.getElementById('forest-classification1')); 
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
		        data: ['乔木林地','宜林地','竹林地','无立木林地','一般灌木林地','林辅用地','未成林造林地','苗圃地','疏林地','特殊灌木林地']
		    },
		    series : [
		        {
		            name: '林地分类',
		            type: 'pie',
		            radius : '73%',
		            center: ['67%', '50%'],
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
        myChart2classification.setOption(option2classification); 
        
    }

///////////////////////////////////////////////// echart 结束
//}