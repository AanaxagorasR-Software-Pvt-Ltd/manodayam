 $(function(){
	 
	 
	 
	 /* Apexcharts (#bar) */
	var optionsBar = {
	  chart: {
		height: 250,
		type: 'bar',
		foreColor: '#728096',
		toolbar: {
		   show: false,
		},
		fontFamily: 'poppins, sans-serif',
		// dropShadow: {
		//   enabled: true,
		//   top: 1,
		//   left: 1,
		//   blur: 2,
		//   opacity: 0.2,
		// }
	  },
	 colors: ["#7fcdfe", '#5054e9'],
	 plotOptions: {
				bar: {
				  dataLabels: {
					enabled: false
				  },
				  columnWidth: '40%',
				  endingShape: 'rounded',
				}
			},
	  dataLabels: {
		  enabled: false
	  },
	  stroke: {
		  show: true,
		  width: 0,
		  endingShape: 'rounded',
		  colors: ['transparent'],
	  },
	  
	  grid: {
		  show: true,
		  borderColor: '#90A4AE',
		  strokeDashArray: 0,
		  position: 'back',
		  xaxis: {
			  lines: {
				  show: false
			  }
		  },   
		  yaxis: {
			  lines: {
				  show: false
			  }
		  },  
		  row: {
			  colors: undefined,
			  opacity: 0.5
		  },  
		  column: {
			  colors: undefined,
			  opacity: 0.5
		  },  
		  padding: {
			  top: 0,
			  right: 0,
			  bottom: 0,
			  left: 0
		  },  
	  },
	  responsive: [{
		  breakpoint: 576,
		  options: {
			   stroke: {
			  show: true,
			  width: 1,
			  endingShape: 'rounded',
			  colors: ['transparent'],
			},
		  },
		  
		  
	  }],
	   series: [{
		  name: '',
		  data: [46, 85, 57, 56, 76, 35]
	  }, {
		  name: '',
		  data: [74, 35, 101, 98, 44, 55]
	  }, ],
	  xaxis: {
		  categories: ['mon', 'tue', 'wed', 'thur', 'fri', 'sat'],
	  },
	  fill: {
		  opacity: 1
	  },
	  legend: {
		show: false,
		floating: true,
		position: 'top',
		horizontalAlign: 'left',
		

	  },
	  tooltip: {
		  y: {
			  formatter: function (val) {
				  return "$ " + val + " thousands"
			  }
		  }
	  }
	}
	new ApexCharts(document.querySelector('#bar'), optionsBar).render();
	
	/* Apexcharts (#bar) closed */
	
	
	/* Chart-js (#statistics) */
	var myCanvas = document.getElementById('statistics').getContext("2d");
	myCanvas.height="290";
	
	var gradientStroke = myCanvas.createLinearGradient(0, 100, 0, 280);
	gradientStroke.addColorStop(0, '#601ed7');
	gradientStroke.addColorStop(1, '#601ed7');
	
	var gradientStroke1 = myCanvas.createLinearGradient(0, 80, 0, 280);
	gradientStroke1.addColorStop(0, '#f0f0f0');
	gradientStroke1.addColorStop(1, '#f0f0f0');


	var myChart = new Chart( myCanvas, {
		type: 'line',
		data : {
			labels: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
			datasets: [
			{
				label: "Expenses",
				data: [20, 45, 31, 85,17, 83, 43, 51, 17, 44, 33, 9, 36,45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51 ],
				backgroundColor: 'transparent',
				borderColor: gradientStroke,
				pointBackgroundColor:'transparent',
				pointBorderWidth :2,
				pointRadius :0,
				pointHoverRadius :5,
				labelColor:gradientStroke,
				borderWidth: 4,
                pointStyle: 'circle',
                pointBorderColor: '#d72e04',
				pointBackgroundColor: 'transparent',

			}, {
				label: "Budget",
				data: [10, 65, 41, 95, 27, 93, 53, 61, 27, 54, 43, 19, 46,45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51],
				backgroundColor: 'transparent',
				borderColor: gradientStroke1,
				pointBackgroundColor:'transparent',
				pointBorderWidth :2,
				pointRadius :0,
				pointHoverRadius :5,
				borderWidth: 4,
				pointStyle: 'circle',
                pointBorderColor: '#163eaf',
				pointBackgroundColor: 'transparent',
				borderDash:[5,9],
			}
		  ]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			legend: {
				display:false,
			    labels: {
					fontColor: '#728096'
			    }
			},
			tooltips: {
				show: true,
				showContent: true,
				alwaysShowContent: true,
				triggerOn: 'mousemove',
				trigger: 'axis',
				axisPointer:
				{
					label: {
						show: false,
						color: '#728096',
					},
				}
			},

			scales: {
				xAxes: [ {
					gridLines: {
						color: 'rgba(114 ,128 ,150,0.1)',
						zeroLineColor: 'rgba(114 ,128 ,150,0.5)',
						drawBorder: true,
						display:true
					},
					ticks: {
						fontColor: '#728096',
					},
					display: true,
					scaleLabel: {
						display: false,
						labelString: 'Day',
						fontColor: '#728096'
					}
				} ],
				yAxes: [ {
					gridLines: {
						color: 'rgba(114 ,128 ,150,0.1)',
						zeroLineColor: 'rgba(114 ,128 ,150,0.5)',
						drawBorder: true,
						display:true
					},
					ticks: {
						fontSize: 12,
						fontColor: '#728096',
						padding: 0,
						beginAtZero: true,
						stepSize: 20,
						max:100
					},
				} ]
			},
			title: {
				display: false,
			},
			elements: {
				line: {
					borderWidth: 2
				},
				point: {
					radius: 0,
					hitRadius: 10,
					hoverRadius: 5
				}
			}
		}
	})
	
	/* Chart-js (#statistics) closed */
	
/* doughnut Chart*/
	
	Chart.defaults.RoundedDoughnut    = Chart.helpers.clone(Chart.defaults.doughnut);
	Chart.controllers.RoundedDoughnut = Chart.controllers.doughnut.extend({
    draw: function(ease) {
        var ctx           = this.chart.ctx;
        var easingDecimal = ease || 1;
        var arcs          = this.getMeta().data;
        Chart.helpers.each(arcs, function(arc, i) {
            arc.transition(easingDecimal).draw();

            var pArc   = arcs[i === 0 ? arcs.length - 1 : i - 1];
            var pColor = pArc._view.backgroundColor;

            var vm         = arc._view;
            var radius     = (vm.outerRadius + vm.innerRadius) / 2;
            var thickness  = (vm.outerRadius - vm.innerRadius) / 2;
            var startAngle = Math.PI - vm.startAngle - Math.PI / 2;
            var angle      = Math.PI - vm.endAngle - Math.PI / 2;

            ctx.save();
            ctx.translate(vm.x, vm.y);

            ctx.fillStyle = i === 0 ? vm.backgroundColor : pColor;
            ctx.beginPath();
            ctx.arc(radius * Math.sin(startAngle), radius * Math.cos(startAngle), thickness, 0, 2 * Math.PI);
            ctx.fill();

            ctx.fillStyle = vm.backgroundColor;
            ctx.beginPath();
            ctx.arc(radius * Math.sin(angle), radius * Math.cos(angle), thickness, 0, 2 * Math.PI);
            ctx.fill();

            ctx.restore();
		});
	}
	});
	
	if ($('#chart').length) {
		var ctx = document.getElementById("chart").getContext("2d");
		new Chart(ctx, {
			type: 'RoundedDoughnut',
			data: {
				labels: ["Oders","Profit","Sales","Exchange"],
				datasets: [{
					data           : [20, 25, 15,40],
						backgroundColor: [
							'#ff9e01',
							'#00b220',
							'#f11111',
							'#373be5'
						],
						borderWidth    : 0,
					borderColor:'transparent',
				}]
			},
			options: {
				legend: {
					display: false
				},
				cutoutPercentage: 85,
			}
		});
	}	


/* doughnut Chart*/

/* Area Chart*/
	var ctx = document.getElementById("chartArea-1");
	var gradientStroke = myCanvas.createLinearGradient(0, 100, 0, 280);
	gradientStroke.addColorStop(1, '#9f64fc');
	gradientStroke.addColorStop(0, '#caaafd');
	
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
			datasets: [{
				label: "",
				lineTension: 0,
				borderColor: "#8337fc",
				borderWidth: "3",
				backgroundColor: gradientStroke,
				data: [7, 5, 9, 3, 6, 7,10],
			}, {
				label: "",
				lineTension: 0,
				borderColor: "",
				borderWidth: "1",
				backgroundColor: "transparent",
				pointHighlightStroke: "#f0f0f0",
				data: [7, 8, 11, 5, 10, 13, 20],
			}]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			legend: {
				display:false,
			    labels: {
					fontColor: '#737277'
			    }
			},
			tooltips: {
				show: true,
				showContent: true,
				alwaysShowContent: true,
				triggerOn: 'mousemove',
				trigger: 'axis',
				axisPointer:
				{
					label: {
						show: false,
						color: '#737277',
					},
				}
			},

			scales: {
				xAxes: [ {
					gridLines: {
						drawBorder: true,
						display:true
					},
					ticks: {
						fontColor: '#737277',
						display:false,
					},
					display: false,
					scaleLabel: {
						display: false,
						labelString: 'Day',
						fontColor: '#737277'
					}
				} ],
				yAxes: [ {
					gridLines: {
						color: 'rgba(114 ,128 ,150,0.1)',
						zeroLineColor: 'rgba(114 ,128 ,150,0.5)',
						drawBorder: true,
						display:true
					},
					ticks: {
						fontSize: 12,
						fontColor: '#737277',
						padding: 0,
						beginAtZero: true,
						stepSize: 10,
						max:20
					},
				} ]
			},
			title: {
				display: false,
			},
			elements: {
				line: {
					borderWidth: 2
				},
				point: {
					radius: 0,
					hitRadius: 10,
					hoverRadius: 5
				}
			}
		}
	});
	
	/* Area Chart*/
	
	/* Chart-js (#statistics-1) Opened */
	var myCanvas = document.getElementById('statistics-1').getContext("2d");
	myCanvas.height="190";
	
	var gradientStroke = myCanvas.createLinearGradient(0, 100, 0, 280);
	gradientStroke.addColorStop(0, '#601ed7');
	gradientStroke.addColorStop(1, '#601ed7');
	
	var gradientStroke1 = myCanvas.createLinearGradient(0, 80, 0, 280);
	gradientStroke1.addColorStop(0, '#f0f0f0');
	gradientStroke1.addColorStop(1, '#f0f0f0');


	var myChart = new Chart( myCanvas, {
		type: 'line',
		data : {
			labels: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
			datasets: [
			{
				label: "Expenses",
				lineTension: 1,
				data: [10, 50, 45, 25,80, 53, 43, 51, 17, 44, 33, 9, 36,45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51 ],
				backgroundColor: 'transparent',
				borderColor: gradientStroke,
				pointBackgroundColor:'transparent',
				pointBorderWidth :2,
				pointRadius :0,
				pointHoverRadius :5,
				labelColor:gradientStroke,
				borderWidth: 4,
                pointStyle: 'circle',
                pointBorderColor: '#d72e04',
				pointBackgroundColor: 'transparent',

			}, {
				label: "Budget",
				lineTension: 1,
				data: [10, 65, 41, 95, 27, 93, 53, 61, 27, 54, 43, 19, 46,45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51],
				backgroundColor: 'transparent',
				borderColor: gradientStroke1,
				pointBackgroundColor:'transparent',
				pointBorderWidth :2,
				pointRadius :0,
				pointHoverRadius :5,
				borderWidth: 4,
				pointStyle: 'circle',
                pointBorderColor: '#163eaf',
				pointBackgroundColor: 'transparent',
				borderDash:[5,9],
			}
		  ]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			legend: {
				display:false,
			    labels: {
					fontColor: 'rgba(114 ,128 ,150,0.1)'
			    }
			},
			tooltips: {
				show: true,
				showContent: true,
				alwaysShowContent: true,
				triggerOn: 'mousemove',
				trigger: 'axis',
				axisPointer:
				{
					label: {
						show: false,
						color: 'rgba(114 ,128 ,150,0.1)',
					},
				}
			},

			scales: {
				xAxes: [ {
					gridLines: {
						drawBorder: true,
						display:true,
						color: 'rgba(114 ,128 ,150,0.1)',
						zeroLineColor: 'rgba(114 ,128 ,150,0.5)',
					},
					ticks: {
						fontColor: 'rgba(114 ,128 ,150,0.1)',
						display: false,
						
					},
					scaleLabel: {
						display: false,
						labelString: 'Day',
						fontColor: 'rgba(114 ,128 ,150,0.1)'
					}
				} ],
				yAxes: [ {
					gridLines: {
						color: 'rgba(114 ,128 ,150,0.1)',
						zeroLineColor: 'rgba(114 ,128 ,150,0.5)',
						drawBorder: true,
						display:true
					},
					ticks: {
						display: false,
						fontSize: 12,
						fontColor: 'rgba(114 ,128 ,150,0.1)',
						padding: 0,
						beginAtZero: true,
						stepSize: 30,
						max:90
					},
				} ]
			},
			title: {
				display: false,
			},
			elements: {
				line: {
					borderWidth: 2
				},
				point: {
					radius: 0,
					hitRadius: 10,
					hoverRadius: 5
				}
			}
		}
	})
	
	/* Chart-js (#statistics-1) closed */
	 
	
	
	
});





