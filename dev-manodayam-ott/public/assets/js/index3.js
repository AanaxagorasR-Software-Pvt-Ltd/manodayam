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
	 colors: ["#b5c7f9", '#5054e9'],
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
	gradientStroke.addColorStop(0, '#2b61ff');
	gradientStroke.addColorStop(1, '#2b61ff');
	
	var gradientStroke1 = myCanvas.createLinearGradient(0, 80, 0, 280);
	gradientStroke1.addColorStop(0, 'rgba(200 ,213 ,247,0.2)');
	gradientStroke1.addColorStop(1, '#fff');


	var myChart = new Chart( myCanvas, {
		type: 'line',
		data : {
			labels: ['January', 'February', 'March', 'April', 'May','June', 'July', 'August', 'September', 'October', 'November', 'December'],
			datasets: [
			{
				label: "This Month",
				data: [1500, 1250, 2500, 2000,1300, 1500,2500,2000,1600,1700,1800,1600],
				backgroundColor: 'transparent',
				borderColor: gradientStroke,
				pointBackgroundColor:'transparent',
				pointBorderWidth :2,
				pointRadius :0,
				pointHoverRadius :5,
				labelColor:gradientStroke,
				borderWidth: 3,
                pointStyle: 'circle',
                pointBorderColor: '#2b61ff',
				pointBackgroundColor: '#2b61ff',

			}, {
				label: "Last Month",
				data: [1350, 1450, 1500, 1400,1700, 2000,1500,1400,1800,1900,1700,1600],
				backgroundColor: gradientStroke1,
				borderColor: '#c8d5f7',
				pointBackgroundColor:'transparent',
				pointBorderWidth :2,
				pointRadius :0,
				pointHoverRadius :5,
				borderWidth: 3,
				pointStyle: 'circle',
                pointBorderColor: '#c8d5f7',
				pointBackgroundColor: '#c8d5f7',
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
						fontSize: 10,
						fontColor: '#728096',
						padding: 0,
						stepSize: 500,
						max:3000,
						min:500
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
	 
	/* sparkline_bar12 */
	$(".sparkline_bar12").sparkline([5, 4, 6, 5, 4, 6,3,5, 4, 6, 5, 4, 6,3,5, 4, 6, 5, 4, 6,3,5], {
		type: 'bar',
		height: 60,
		width:200,
		barWidth: 3,
		barSpacing: 8,
		colorMap: {
			'9': '#4e54e8'
		},
		barColor: '#4e54e8'
	});
	/* sparkline_bar12 end */
	
	
	/* Visitors */
	var options9 = {
		series: [68, 50, 35],
		chart: {
			height: 300,
			type: 'radialBar',
		},
		plotOptions: {
			radialBar: {
				dataLabels: {
					name: {
						fontSize: '15px',
						show: true,
					},
					value: {
						fontSize: '15px',
						color:'#171b26',
						show: true, 
					},
					total: {
					  show: true,
					  label: 'TOTAL SALES',
					  color:'171b26',
					}
				},
				track: {
					background: '#eff6fe',
					strokeWidth: "90%",
				},
			}
		},
		stroke: {
			lineCap: "round"
		},  
		label: {
            font: {
				family: "Poppins",
				fontweight:700,
            }
        },
		labels: ['ORDERS', 'SALES', 'PENDING ORDERS'],
		colors: ['#3c4ae1', '#ffa202', '#ed1b24'],
	};
	var chart9 = new ApexCharts(document.querySelector("#sales"), options9);
	chart9.render();
	/* End Visitors */
	
	
});





