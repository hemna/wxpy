// Temp Dew Point Graph BEGIN
var tempdata = [  ];
var dewpdata = [  ];
ctx = document.getElementById('idTempDewPoint').getContext('2d');
ctx.canvas.width = 510;
ctx.canvas.height = 215;

var color = Chart.helpers.color;
var tempdewpointoptions = {
    type: 'line',
    data: {
         datasets: [
             { label: 'Temperature °F',
               backgroundColor: color('#FF0000').alpha(0.5).rgbString(),
               borderColor: '#FF0000',
               data: tempdata,
               type: 'line',
               pointRadius: 0,
               fill: false,
               lineTension: 0,
               borderWidth: 1 },
             { label: 'Dew Point °F',
           backgroundColor: color('#333399').alpha(0.5).rgbString(),
           borderColor: '#333399',
           data: dewpdata,
           type: 'line',
           pointRadius: 0,
           fill: false,
           lineTension: 0,
           borderWidth: 1 }
        ]
    },
    options: {
        animation: {
        duration: 1500,
            easing: 'easeInExpo'
        },
        scales: {
           xAxes: [{
               type: 'time',
               distribution: 'linear',
               bounds: 'data',
               time: {
                   unit: 'minute',
               },
               ticks: {
                   autoSkip: true,
                   maxTicksLimit: 12,
                   labelOffset: 10,
                   lineHeight: 1.0
               },
               gridLines: {
                   color: '#bbbbbb',
                   drawBorder: true,
                   tickMarkLength: 5
               }
           }],
           yAxes: [{
               scaleLabel: {
                   display: false,
                   labelString: 'Temperature °F',
               },
               ticks: {
                   min: -10,
                   max: 110,
                   autoSkip: true,
                   maxTicksLimit: 12
               },
               gridLines: {
                   color: '#bbbbbb',
                   drawBorder: true
               }
           }],
        }
      }
}

var tempdewchart = new Chart(ctx, tempdewpointoptions);
// Temp Dew Point Graph END


// Humidity Graph BEGIN
var humiddata = [  ];
humctx = document.getElementById('idHumidityGraph').getContext('2d');
humctx.canvas.width = 510;
humctx.canvas.height = 215;

var color = Chart.helpers.color;
var humidoptions = {
    type: 'line',
    data: {
         datasets: [
             { label: 'Humidity %',
               backgroundColor: color('#009933').alpha(0.5).rgbString(),
               borderColor: '#009933',
               data: humiddata,
               type: 'line',
               pointRadius: 0,
               fill: false,
               lineTension: 0,
               borderWidth: 1 },
        ]
    },
    options: {
	animation: {
	    duration: 2000,
            easing: 'easeInExpo'
        },
        scales: {
           xAxes: [{
               type: 'time',
               distribution: 'linear',
               bounds: 'data',
               time: {
                   unit: 'minute',
               },
               ticks: {
                   autoSkip: true,
                   maxTicksLimit: 12,
                   labelOffset: 10,
                   lineHeight: 1.0
               },
               gridLines: {
                   color: '#bbbbbb',
                   drawBorder: true,
                   tickMarkLength: 5
               }
           }],
           yAxes: [{
               scaleLabel: {
                   display: false,
                   labelString: 'Humidity %',
               },
               ticks: {
                   autoSkip: true,
                   maxTicksLimit: 12
               },
               gridLines: {
                   color: '#bbbbbb',
                   drawBorder: true
               }
           }],
        }
      }
}

var humidchart = new Chart(humctx, humidoptions);
// Humidity Graph BEGIN

// Pressure Graph BEGIN
var presdata = [  ];
var presavgdata = [  ];
prctx = document.getElementById('idPressure').getContext('2d');
prctx.canvas.width = 510;
prctx.canvas.height = 215;

var color = Chart.helpers.color;
var presoptions = {
    type: 'line',
    data: {
         datasets: [
             { label: 'Barometric Pressure inHG',
               backgroundColor: color('#333399').alpha(0.5).rgbString(),
               borderColor: '#333399',
               data: presdata,
               type: 'line',
               pointRadius: 0,
               fill: false,
               lineTension: 0,
               borderWidth: 1 },
             { label: 'Average inHg',
               backgroundColor: color('#FF0000').alpha(0.5).rgbString(),
               borderColor: '#FF0000',
               data: presavgdata,
               type: 'line',
               pointRadius: 0,
	       fill: false,
               lineTension: 0,
               borderWidth: 1 },
        ]
    },
    options: {
	animation: {
	    duration: 2500,
            easing: 'easeInExpo'
        },
        scales: {
           xAxes: [{
               type: 'time',
               distribution: 'linear',
               bounds: 'data',
               time: {
                   unit: 'minute',
               },
               ticks: {
                   autoSkip: true,
                   maxTicksLimit: 12,
                   labelOffset: 10,
                   lineHeight: 1.0
               },
               gridLines: {
                   color: '#bbbbbb',
                   drawBorder: true,
                   tickMarkLength: 5
               }
           }],
           yAxes: [{
               scaleLabel: {
                   display: false,
                   labelString: 'Temperature °F',
               },
               ticks: {
                   autoSkip: true,
                   maxTicksLimit: 12
               },
               gridLines: {
                   color: '#bbbbbb',
                   drawBorder: true
               }
           }],
        }
      }
}

var pressurechart = new Chart(prctx, presoptions);
// Pressure Graph END


// Wind Speed Graph
var windspeeddata = [  ];
var windspeedavgdata = [  ];
windctx = document.getElementById('idWindSpeed').getContext('2d');
windctx.canvas.width = 510;
windctx.canvas.height = 215;

var color = Chart.helpers.color;
var windoptions = {
    type: 'line',
    data: {
         datasets: [
	     { label: 'Wind Speed mph',
               backgroundColor: color('#333399').alpha(0.5).rgbString(),
	       borderColor: '#333399',
               data: windspeeddata,
	       showLine: false,
               pointRadius: .5,
               borderWidth: 1 },
	     { label: 'Average mph',
               backgroundColor: color('#FF0000').alpha(0.5).rgbString(),
	       borderColor: '#FF0000',
               data: windspeedavgdata,
	       pointRadius: .5,
               borderWidth: 1 },
        ]
    },
    options: {
	animation: {
            duration: 2000,
            easing: 'easeInExpo'
        },
        scales: {
           xAxes: [{
               type: 'time',
               distribution: 'linear',
               bounds: 'data',
               time: {
                   unit: 'minute',
               },
               ticks: {
                   autoSkip: true,
                   maxTicksLimit: 12,
                   labelOffset: 10,
                   lineHeight: 1.0
               },
               gridLines: {
                   color: '#bbbbbb',
                   drawBorder: true,
                   tickMarkLength: 5
               }
           }],
           yAxes: [{
               scaleLabel: {
                   display: false,
                   labelString: 'Wind Speed mph',
               },
               ticks: {
                   autoSkip: true,
                   maxTicksLimit: 12
               },
               gridLines: {
                   color: '#bbbbbb',
                   drawBorder: true
               }
           }],
        }
      }
}

var windc = new Chart(windctx, windoptions);
// Wind Speed Graph END


// Rain Line Graph
var raindata = [  ];
rainctx = document.getElementById('idRainLineGraph').getContext('2d');
rainctx.canvas.width = 510;
rainctx.canvas.height = 215;

var color = Chart.helpers.color;
var rainoptions = {
    type: 'line',
    data: {
         datasets: [
	     { label: 'Rain',
               backgroundColor: color('#333399').alpha(0.5).rgbString(),
	       borderColor: '#333399',
               data: raindata,
	       showLine: false,
               pointRadius: .5,
               borderWidth: 1 },
	     { label: 'Rain',
               backgroundColor: color('#333399').alpha(0.5).rgbString(),
	       borderColor: '#333399',
               type: 'bar',
               data: raindata,
	       showLine: false,
               pointRadius: .5,
               borderWidth: 1 },
        ]
    },
    options: {
	animation: {
            duration: 5000
        },
        scales: {
           xAxes: [{
               type: 'time',
               distribution: 'linear',
               bounds: 'data',
               time: {
                   unit: 'minute',
               },
               ticks: {
                   autoSkip: true,
                   maxTicksLimit: 12,
                   labelOffset: 10,
                   lineHeight: 1.0
               },
               gridLines: {
                   color: '#bbbbbb',
                   drawBorder: true,
                   tickMarkLength: 5
               }
           }],
           yAxes: [{
               scaleLabel: {
                   display: false,
                   labelString: 'Rain inches',
               },
               ticks: {
                   autoSkip: true,
                   maxTicksLimit: 12
               },
               gridLines: {
                   color: '#bbbbbb',
                   drawBorder: true
               }
           }],
        }
      }
}

var rainc = new Chart(rainctx, rainoptions);
// Rain Line Graph END


// Inside Temp Graph
var intempdata = [  ];
inctx = document.getElementById('idInsideTemp').getContext('2d');
inctx.canvas.width = 510;
inctx.canvas.height = 215;

var color = Chart.helpers.color;
var intempoptions = {
    type: 'line',
    data: {
         datasets: [
             { label: 'Inside Temperature °F',
               backgroundColor: color('#009933').alpha(0.5).rgbString(),
               borderColor: '#009933',
               data: intempdata,
               type: 'line',
               pointRadius: 0,
               fill: false,
               lineTension: 0,
               borderWidth: 1 },
        ]
    },
    options: {
	animation: {
	    duration: 2000,
            easing: 'easeInExpo'
        },
        scales: {
           xAxes: [{
               type: 'time',
               distribution: 'linear',
               bounds: 'data',
               time: {
                   unit: 'minute',
               },
               ticks: {
                   autoSkip: true,
                   maxTicksLimit: 12,
                   labelOffset: 10,
                   lineHeight: 1.0
               },
               gridLines: {
                   color: '#bbbbbb',
                   drawBorder: true,
                   tickMarkLength: 5
               }
           }],
           yAxes: [{
               scaleLabel: {
                   display: false,
                   labelString: 'Temperature °F',
               },
               ticks: {
                   autoSkip: true,
                   maxTicksLimit: 12
               },
               gridLines: {
                   color: '#bbbbbb',
                   drawBorder: true
               }
           }],
        }
      }
}

var insidechart = new Chart(inctx, intempoptions);
// Inside Temp Graph END



// WIND Direction Gauge
//
var langWindDir = new Array("N", "NNE", "NE", "ENE","E", "ESE", "SE", "SSE",
								"S", "SSW", "SW", "WSW","W", "WNW", "NW", "NNW");
	function windDirLang (winddir) {
		return langWindDir[Math.floor(((parseInt(winddir,10) + 11.25) / 22.5))];
	}

	var winddiroptions = {
		chart: {
			type: 'gauge',
			renderTo: 'idWindDirGaugediv',
			plotBackgroundColor: null,
			plotBackgroundImage: null,
			plotBorderWidth: 0,
			plotShadow: false,
		},
		pane: {
			background: [{
				backgroundColor: {
					linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
					stops: [
						[0, '#FFF'],
						[1, '#333']
					]
				},
				borderWidth: 0,
				outerRadius: '109%'
			}, {
				backgroundColor: {
					linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
					stops: [
						[0, '#333'],
						[1, '#FFF']
					]
				},
				borderWidth: 1,
				outerRadius: '107%'
			}, {
				// default background
			}, {
				backgroundColor: '#DDD',
				borderWidth: 0,
				outerRadius: '105%',
				innerRadius: '103%'
			}]
		},
		title: {
			text: 'Wind Direction'
		},
		credits: {
			enabled: false
		},
		yAxis: {
			min: 0,
			max: 360,

			/*minorTickInterval: 'auto',
			minorTickWidth: 1,
			minorTickLength: 10,
			minorTickPosition: 'inside',
			minorTickColor: '#666',*/

			tickInterval: 22.5,
			tickWidth: 2,
			tickPosition: 'inside',
			tickLength: 3,
			tickColor: '#666',
			labels: {
				step: 2,
				rotation: 'auto',
				formatter: 
					function() {
						return windDirLang(this.value);
					}
			},
			title: {
				text: ''
			},
		},
		series: [{
			name: 'Wind Direction',
			color: '#0000ff',
			data:  [],
			},
		]
		}

	var winddirgraph = new Highcharts.Chart(winddiroptions);

// Wind Speed
var windspeedoptions = {
		chart: {
			type: 'gauge',
			renderTo: 'idWindSpeedGaugediv',
			plotBackgroundColor: null,
			plotBackgroundImage: null,
			plotBorderWidth: 0,
			plotShadow: false,
		},
		pane: {
			startAngle: -150,
			endAngle: 150,
			background: [{
				backgroundColor: {
					linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
					stops: [
						[0, '#FFF'],
						[1, '#333']
					]
				},
				borderWidth: 0,
				outerRadius: '109%'
			}, {
				backgroundColor: {
					linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
					stops: [
						[0, '#333'],
						[1, '#FFF']
					]
				},
				borderWidth: 1,
				outerRadius: '107%'
			}, {
				// default background
			}, {
				backgroundColor: '#DDD',
				borderWidth: 0,
				outerRadius: '105%',
				innerRadius: '103%'
			}]
		},
		title: {
			text: 'Wind Speed'
		},
		credits: { 
			enabled: false
		},
		yAxis: {
			min: 0,
			max: 40,
			minorTickInterval: 'auto',
			minorTickWidth: 1,
			minorTickLength: 10,
			minorTickPosition: 'inside',
			minorTickColor: '#666',

			tickPixelInterval: 20,
			tickWidth: 2,
			tickPosition: 'inside',
			tickLength: 10,
			tickColor: '#666',
			labels: {
				step: 2,
				rotation: 'auto',
			},
			title: {
				text: ''
			},   
			plotBands: [{
				from: 0,
				to: 15,
				color: '#55BF3B'
			  }, {
				from : 15,
				to: 30,
				color: '#DDDF0D'
			  }, {
				from : 30,
				to: 40,
				color: '#DF5353'
			  }]
		},
		series: [{
			name: 'Wind Speed',
			color: '#0000ff',
			data:  [],
			tooltip: {
				valueSuffix: ' mph'
			}
			},
		]
		}

	var windspeedgraph = new Highcharts.Chart(windspeedoptions);
