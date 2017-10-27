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
		'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
		'echarts/chart/treemap',
		'echarts/chart/venn',
		'echarts/chart/pie',
		'echarts/chart/line'
	],
	function(ec) {
		/////////////////////////////////////////////////////各地区国土面积分步
		var myChart3 = ec.init(document.getElementById('landof-area'));
		$(window).resize(function() {
			$(myChart2).each(function(index, chart) {
				var a = $("#landof-area-width").width();
				chart.resize(a);
			});
		});
		option8 = {
			color: ['#89c83d'],
			title: {},
			toolbox: {
				show: false,
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data: ['分类'],
				show: false,
			},
			calculable: true,
			grid: {
				x: 65,
				y: 6,
				width: '87%',
				height: 170,
				borderWidth: 0
			},
			xAxis: [{
				type: 'category',
				data: ['长春', '吉林', '四平', '通化', '松原', '辽源', '延边', '白城', '白山'],
				axisLine: {
					lineStyle: {
						color: 'rgba(145,192,236,0.4)',
						width: 1
					},
					splitLine: {
						show: false
					}
				},
				axisLabel: {
					textStyle: {
						color: '#fff',
						fontFamily: 'Microsoft Yahei',
						fontSize: 12
					}
				},
				splitLine: {
					show: false
				}
			}],
			yAxis: [{
				type: 'value',
				axisLine: {
					lineStyle: {
						color: 'rgba(145,192,236,0.4)',
						width: 1
					},
					splitLine: {
						show: false
					}
				},
				axisLabel: {
					textStyle: {
						color: '#fff'
					}
				},
				splitLine: {
					show: false
				}
				
			}],
			series: [{
				name: '平方公里',
				type: 'bar',
				itemStyle: {
				 	normal: {
				 		areaStyle: {
				 			type: 'default'
				 		},
				 		color: '#5cc52b'
				 	}
				},
				data: [20001, 31000, 16000, 17000, 24000, 8000, 50000, 28000, 18000]

			}]
		};
		// 为echarts对象加载数据 
		myChart3.setOption(option8);
		/////////////////////////////////////////湿地变化-国土总面积趋势图
        var myChart4 = ec.init(document.getElementById('land-area')); 
        $(window).resize(function() {
			$(myChart4).each(function(index, chart) {
				var a = $("#land-area-width").width();
				chart.resize(a);
			});
		});

        var option7 =  {
		    title : {
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		    	x : 15,
    			textStyle: {
    				color: '#b2d5de',
    				fontSize : 10,
		            fontFamily: 'Microsoft Yahei'
    			},
		        data:['湿地总面积']
		    },
		    toolbox: {
		    },
		    calculable : true,
		    grid: {
				x: 30,
				y: 40,
				width: '80%',
				borderWidth:0
			},
		    xAxis : [
		        {
		            type : 'category',
		            boundaryGap : false,
		            data : ['2011年','2012年','2013年','2014年','2015年'],
		            axisLine: {
						lineStyle: {
							color: 'rgba(20,132,198,0.2)',
							width: 1
						},
						splitLine: {
							show: false
						}
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
						splitLine: {
							show: false
						}
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
		        }
		    ],
		    series : [
		        {
		            name:'湿地总面积',
		            type:'line',
		            smooth:true,
		            itemStyle: {
					 	normal: {
					 		areaStyle: {
					 			type: 'default'
					 		},
					 		color: '#76c6c3'
					 	}
					 },
		            data:[41,53,59,62,70]
		        }
		    ]
		};
        // 为echarts对象加载数据 
        myChart4.setOption(option7);
		/////////////////////////////////////////湿地变化-湿地面积占比
		var myChart6 = ec.init(document.getElementById('wetland-area'));
		$(window).resize(function() {
			$(myChart6).each(function(index, chart) {
				var a = $("#wetland-area-width").width();
				chart.resize(a);
			});
		});
		option6 = {
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        x : 'right',
		        y: 'bottom',
		        data:['其他','湿地'],
		        textStyle: {
					color: '#a4c5ce',
					fontFamily: '微软雅黑',
					fontSize: 10
				}
		    },
		    toolbox: {
		    },
		    calculable : true,
		    series : [
		        {
		            name:'面积占比',
		            type:'pie',
		            radius : ['30%', '70%'],
		            itemStyle : {
		                normal : {
		                    label : {
		                        show : false
		                    },
		                    labelLine : {
		                        show : false
		                    }
		                },

		                emphasis : {
		                    label : {
		                        show : true,
		                        position : 'center',
		                        textStyle : {
		                            fontSize : '30',
		                            fontWeight : 'bold'
		                        }
		                    }
		                }
		            },
		            data:[
		                {value:300, name:'其他',itemStyle: {normal: {color:'#09957a'}}},
		                {value:30, name:'湿地',itemStyle: {normal: {color:'#46cdc6'}}}
		            ]
		        }
		    ]
		};
		myChart6.setOption(option6);
		/////////////////////////////////////////湿地变化-湿地转化其他
		var myChart = ec.init(document.getElementById('wetland-change1'));
		var dataStyle = {
			normal: {
				color: '#f7f18b',
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
				color: '#ffe500',
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
				color: '#ffd200',
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
				color: '#ffa600',
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
				color: '#ff7917',
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
		option = {
			title: {
				text: '0.97%',
				subtext: '湿地转化其他',
				x: 'center',
				y: 100,
				itemGap: 10,
				textStyle: {
					color: '#ff3600',
					fontFamily: '微软雅黑',
					fontSize: 18,
					fontWeight: 'bolder'
				},
				subtextStyle: {
					color: '#c5948e',
					fontFamily: '微软雅黑',
					fontSize: 12
				}
			},
			tooltip: {
				show: true,
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			legend: {
				orient: 'vertical',
				x: $('#wetland-change-width').width() / 4,
				y: 25,
				itemGap: 0,
				textStyle: {
					color: '#fff',
					fontFamily: '微软雅黑',
					fontSize: 10
				},
				data: ['居住用地  0.31%', '工业用地  0.30%', '建设用地  0.25%', '旱地用地  0.09%', '交通用地  0.02%']
			},
			toolbox: {},
			series: [{
				name: '1',
				type: 'pie',
				clockWise: false,
				radius: [60, 70],
				itemStyle: dataStyle,
				data: [{
					value: 0.31,
					name: '居住用地  0.31%'
				}, {
					value: 0.38,
					name: '其他',
					itemStyle: placeHolderStyle
				}]
			}, {
				name: '2',
				type: 'pie',
				clockWise: false,
				radius: [50, 60],
				itemStyle: dataStyle01,
				data: [{
					value: 0.30,
					name: '工业用地  0.30%'
				}, {
					value: 0.5,
					name: '其他',
					itemStyle: placeHolderStyle
				}]
			}, {
				name: '3',
				type: 'pie',
				clockWise: false,
				radius: [40, 50],
				itemStyle: dataStyle02,
				data: [{
					value: 0.25,
					name: '建设用地  0.25%'
				}, {
					value: 0.5,
					name: '其他',
					itemStyle: placeHolderStyle
				}]
			}, {
				name: '4',
				type: 'pie',
				clockWise: false,
				radius: [30, 40],
				itemStyle: dataStyle03,
				data: [{
					value: 0.09,
					name: '旱地用地  0.09%'
				}, {
					value: 0.3,
					name: '其他',
					itemStyle: placeHolderStyle
				}]
			}, {
				name: '5',
				type: 'pie',
				clockWise: false,
				radius: [20, 30],
				itemStyle: dataStyle04,
				data: [{
					value: 0.02,
					name: '交通用地  0.02%'
				}, {
					value: 0.1,
					name: '其他',
					itemStyle: placeHolderStyle
				}]
			}]
		};
		// 为echarts对象加载数据 
		myChart.setOption(option);

		/////////////////////////////////////////湿地变化-其他转化湿地
		var myChart1 = ec.init(document.getElementById('wetland-change11'));
		var dataStyle1 = {
			normal: {
				color: '#8acff2',
				label: {
					show: false
				},
				labelLine: {
					show: false
				}
			}
		};
		var dataStyle10 = {
			normal: {
				color: '#a7dbb5',
				label: {
					show: false
				},
				labelLine: {
					show: false
				}
			}
		};
		var dataStyle11 = {
			normal: {
				color: '#c2e67e',
				label: {
					show: false
				},
				labelLine: {
					show: false
				}
			}
		};
		var dataStyle12 = {
			normal: {
				color: '#86dc68',
				label: {
					show: false
				},
				labelLine: {
					show: false
				}
			}
		};
		option1 = {
			title: {
				text: '7.25%',
				subtext: '其他转化为湿地',
				x: 'center',
				y: 100,
				itemGap: 10,
				textStyle: {
					color: '#02c7fe',
					fontFamily: '微软雅黑',
					fontSize: 18,
					fontWeight: 'bolder'
				},
				subtextStyle: {
					color: '#81b1c5',
					fontFamily: '微软雅黑',
					fontSize: 12
				}
			},
			tooltip: {
				show: true,
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			legend: {
				orient: 'vertical',
				x: $('#wetland-change-width').width() / 4,
				y: 25,
				itemGap: 0,
				textStyle: {
					color: '#fff',
					fontFamily: '微软雅黑',
					fontSize: 10
				},
				data: ['林业用地  3.51%', '工业用地  2.35%', '鱼塘用地  0.97%', '旱地用地  0.69%']
			},
			toolbox: {},
			series: [{
				name: '1',
				type: 'pie',
				clockWise: false,
				radius: [60, 70],
				itemStyle: dataStyle1,
				data: [{
					value: 3.51,
					name: '林业用地  3.51%'
				}, {
					value: 5,
					name: '其他',
					itemStyle: placeHolderStyle
				}]
			}, {
				name: '2',
				type: 'pie',
				clockWise: false,
				radius: [50, 60],
				itemStyle: dataStyle10,
				data: [{
					value: 2.35,
					name: '工业用地  2.35%'
				}, {
					value: 5,
					name: '其他',
					itemStyle: placeHolderStyle
				}]
			}, {
				name: '3',
				type: 'pie',
				clockWise: false,
				radius: [40, 50],
				itemStyle: dataStyle11,
				data: [{
					value: 0.97,
					name: '鱼塘用地  0.97%'
				}, {
					value: 2.5,
					name: '其他',
					itemStyle: placeHolderStyle
				}]
			}, {
				name: '4',
				type: 'pie',
				clockWise: false,
				radius: [30, 40],
				itemStyle: dataStyle12,
				data: [{
					value: 0.69,
					name: '旱地用地  0.69%'
				}, {
					value: 2,
					name: '其他',
					itemStyle: placeHolderStyle
				}]
			}]
		};
		// 为echarts对象加载数据 
		myChart1.setOption(option1);

		/////////////////////////////////////////////////////野生动物分类
		var myChart2 = ec.init(document.getElementById('wild-animal'));
		$(window).resize(function() {
			$(myChart2).each(function(index, chart) {
				var a = $("#wild-animal-width").width();
				chart.resize(a);
			});
		});
		option2 = {
			color: ['#f1e41a'],
			title: {},
			toolbox: {
				show: false,
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data: ['分类'],
				show: false,
			},
			calculable: true,
			grid: {
				x: 42,
				y: 6,
				width: '84%',
				height: 120,
				borderWidth: 0
			},
			xAxis: [{
				type: 'category',
				data: ['鸟类', '兽类', '两栖类', '爬行类', '鱼类', '无脊椎'],
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
				type: 'value',
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
				splitLine: {
					show: false
				}
			}],
			series: [{
				name: '野生动物分类统计',
				type: 'bar',
				itemStyle: {
				 	normal: {
				 		areaStyle: {
				 			type: 'default'
				 		},
				 		color: '#d4b009'
				 	}
				},
				data: [420.0, 285.0, 482.0, 111.1, 400, 290.0]

			}]
		};
		// 为echarts对象加载数据 
		myChart2.setOption(option2);

		/////////////////////////////////////////////////////野生动物分类
		var myChart3 = ec.init(document.getElementById('wild-plant'));
		$(window).resize(function() {
			$(myChart2).each(function(index, chart) {
				var a = $("#wild-plant-width").width();
				chart.resize(a);
			});
		});
		option3 = {
			color: ['#89c83d'],
			title: {},
			toolbox: {
				show: false,
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data: ['分类'],
				show: false,
			},
			calculable: true,
			grid: {
				x: 42,
				y: 6,
				width: '84%',
				height: 120,
				borderWidth: 0
			},
			xAxis: [{
				type: 'category',
				data: ['苔藓植物', '蕨类植物', '裸子植物', '被子植物'],
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
						fontSize: 12
					}
				},
				splitLine: {
					show: false
				}
			}],
			yAxis: [{
				type: 'value',
				axisLine: {
					lineStyle: {
						color: 'rgba(145,192,236,0.4)',
						width: 1
					},
				},
				axisLabel: {
					textStyle: {
						color: '#fff'
					}
				},
				splitLine: {
					show: false
				}
			}],
			series: [{
				name: '野生动物分类统计',
				type: 'bar',
				itemStyle: {
				 	normal: {
				 		areaStyle: {
				 			type: 'default'
				 		},
				 		color: '#14d25b'
				 	}
				},
				data: [260.0, 189.1, 386.0, 199.0]

			}]
		};
		// 为echarts对象加载数据 
		myChart3.setOption(option3);

		/////////////////////////////////////////////////////重要湿地及湿地公园
		var myChart4 = ec.init(document.getElementById('important-wetland'));
		$(window).resize(function() {
			$(myChart4).each(function(index, chart) {
				var a = $("#important-wetland-width").width();
				chart.resize(a);
			});
		});
		option4 = {
			title: {},
			tooltip: {
				trigger: 'item',
				formatter: "{b}  {c}"
			},
			toolbox: {},
			hoverable: true,
			series: [{
				type: 'treemap',
				name: ' ',
				itemStyle: {
					normal: {
						label: {
							show: true,
							formatter: "{b}  {c}",
							textStyle: {
								color: '#fff',
								align: 'center',
								baseline: 'middle',
								fontFamily: 'Microsoft Yahei',
								fontSize: 10,
								fontStyle: 'normal',
								fontWeight: 'normal'
							}
						},
						borderWidth: 1,
						borderColor: '#215846'
					},
					emphasis: {
						label: {
							show: false,
							textStyle: {
								color: '#fff',
								fontFamily: 'Microsoft Yahei',
								fontSize: 10,
								fontStyle: 'normal'
							}
						},
						color: 'rgba(255,255,255,0.4)',
						borderWidth: 1,
						borderColor: '#215846'
					}
				},
				data: [{
					name: '国际重要湿地',
					value: 7,
					itemStyle: {
						normal: {
							color: '#73bf1c',
							label: {
								show: true,
								formatter: "{b}  {c}",
							}
						}
					}
				}, {
					name: '国家湿地公园',
					value: 21,
					itemStyle: {
						normal: {
							color: '#35a648',
						}
					}
				}, {
					name: '中国重要湿地',
					value: 8,
					itemStyle: {
						normal: {
							color: '#7aaf3e',
						}
					}
				}, {
					name: '省级湿地公园',
					value: 13,
					itemStyle: {
						normal: {
							color: '#038644',
							label: {
								show: true,
								formatter: "{b}  {c}",
							},
							borderWidth: 1
						},
						emphasis: {
							label: {
								show: false
							},
							color: 'rgba(255,255,255,0.4)'
						}
					}
				}]
			}]
		};
		// 为echarts对象加载数据 
		myChart4.setOption(option4);


	}
);
///////////////////////////////////////////////// echart 结束