

AmCharts.makeChart("forecasts", {
                "type": "serial",
                "theme": "light",
                "dataDateFormat": "YYYY-MM-DD",
                "dataProvider": [{
                    "date": "2017-04-30",
                    "value": 3050
                }, {
                    "date": "2017-05-30",
                    "value": 3100
                }, {
                    "date": "2017-06-30",
                    "value": 3200
                }, {
                    "date": "2017-07-30",
                    "value": 2700
                }, {
                    "date": "2017-08-30",
                    "value": 2950
                }, {
                    "date": "2017-09-30",
                    "value": 2950
                }],
                "valueAxes": [{
                    "maximum": 4000,
                    "minimum": 1000,
                    "axisAlpha": 0,
                    "guides": [{
                        "fillAlpha": 0.1,
                        "fillColor": "#CC0000",
                        "lineAlpha": 0,
                        "toValue": 3200, //80% capacity
                        "value": 0
                    }, {
                        "fillAlpha": 0.1,
                        "fillColor": "#0000cc",
                        "lineAlpha": 0,
                        "toValue": 4000, //100% capacity
                        "value": 3200
                    }]
                }],
                "graphs": [{
                    "bullet": "round",
                    "dashLength": 4,
                    "valueField": "value"
                }],
                "chartCursor": {
                    "cursorAlpha": 0,
                    "zoomable":false,
                    "valueZoomable":true
                },
                "categoryField": "date",
                "categoryAxis": {
                    "parseDates": true
                }
            });

var complexity_chart = AmCharts.makeChart( "complexity", {
  "type": "serial",
  "theme": "light",
  "legend": {
    "horizontalGap": 10,
    "useGraphSettings": true,
    "markerSize": 15,
    "fontSize": 9,
    "markerLabelGap": 3,
    "spacing": 0
  },
  "dataProvider": [ {
    "type": 'Build',
    "simple": 1,
    "moderate": 7,
    "complex": 8
  }, {
    "type": 'Decomm',
    "simple": 0,
    "moderate": 7,
    "complex": 5
  }, {
    "type": 'Maintain',
    "simple": 1,
    "moderate": 4,
    "complex": 1
  } ],
  "valueAxes": [ {
    "stackType": "regular",
    "axisAlpha": 0,
    "gridAlpha": 0
  } ],
  "graphs": [ {
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
    "fillColors": "#BFEAC7",
    "fillAlphas": 0.8,
    "labelText": "",
    "lineAlpha": 0,
    "title": "Simple",
    "type": "column",
    "color": "#000000",
    "newStack": true,
    "valueField": "simple"
  }, {
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
    "fillColors": "#FFF0A5",
    "fillAlphas": 0.8,
    "labelText": "",
    "lineAlpha": 0,
    "title": "Moderate",
    "type": "column",
    "color": "#000000",
    "newStack": true,
    "valueField": "moderate"
  }, {
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
    "fillColors": "#FA8072",
    "fillAlphas": 0.8,
    "labelText": "",
    "lineAlpha": 0,
    "title": "Complex",
    "type": "column",
    "newStack": true,
    "color": "#000000",
    "valueField": "complex"
  }],
  "categoryField": "type",
  "categoryAxis": {
    "gridPosition": "start",
    "axisAlpha": 0,
    "gridAlpha": 0,
    "position": "left"
  }

} );

var multiline = AmCharts.makeChart("historical", {
        "type": "serial",
        "theme": "none",
        "pathToImages": "http://www.amcharts.com/lib/3/images/",
        "dataDateFormat": "YYYY-MM-DD",
        "valueAxes": [{
            "id":"v1",
            "axisAlpha": 0,
            "position": "left",
            "minimum": 0,
            "maximum": 40
        }],
        "graphs": [{
      "id": "g1",
            "lineColor": "#77EEFF",
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "bulletColor": "#77EEFF",
            "bulletSize": 5,
            "hideBulletsCount": 50,
            "lineThickness": 2,
            "title": "In Progress",
            "useLineColorForBulletBorder": true,
            "valueField": "progress"
        },
                  {
      "id": "g2",
            "lineColor": "#FFF0A5",
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFF0A5",
            "bulletSize": 5,
            "hideBulletsCount": 50,
            "lineThickness": 2,
            "title": "On Hold",
            "useLineColorForBulletBorder": true,
            "valueField": "hold"
        }, {
      "id": "g3",
            "lineColor": "#BFEAC7",
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "bulletColor": "#BFEAC7",
            "bulletSize": 5,
            "hideBulletsCount": 50,
            "lineThickness": 2,
            "title": "Completed",
            "useLineColorForBulletBorder": true,
            "valueField": "completed"
        }, {
      "id": "g4",
            "lineColor": "#FA8072",
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "bulletColor": "#FA8072",
            "bulletSize": 5,
            "hideBulletsCount": 50,
            "lineThickness": 2,
            "title": "Cancelled",
            "useLineColorForBulletBorder": true,
            "valueField": "cancelled"
        }
        ],
        "categoryField": "date",
        "categoryAxis": {
            "parseDates": true,
            "dashLength": 1,

          "minorGridEnabled": true
        },
        "dataProvider": [{
            "date": "2017-01-30",
            "progress": 32,
            "hold": 4,
            "completed": 18,
            "cancelled": 12
        }, {
            "date": "2017-02-26",
            "progress": 30,
            "hold": 2,
            "completed": 20,
            "cancelled": 13
        }, {
            "date": "2017-03-30",
            "progress": 33,
            "hold": 6,
            "completed": 18,
            "cancelled": 14
        }, {
            "date": "2017-04-30",
            "progress": 29,
            "hold": 8,
            "completed": 14,
            "cancelled": 20
        }, {
            "date": "2017-05-30",
            "progress": 28,
            "hold": 10,
            "completed": 22,
            "cancelled": 12
        }, {
            "date": "2017-06-30",
            "progress": 24,
            "hold": 4,
            "completed": 19,
            "cancelled": 18
        }]
    }
);
var legendmultiline = new AmCharts.AmLegend();
legendmultiline.fontSize = 9;
multiline.addLegend(legendmultiline);

var timeline_chart = AmCharts.makeChart("chartdiv", {
            "type": "gantt",
            "period": "WW",

            "valueAxis": {
                "type": "date"
            },
            "brightnessStep": 10,
            "graph": {
                "fillAlphas": 1,
                "balloonText": "[[open]] - [[value]]"
            },
            "rotate": true,
            "categoryField": "category",
            "segmentsField": "segments",
            "dataDateFormat": "YYYY-MM-DD",
            "startDateField": "start",
            "endDateField": "end",
            "dataProvider": [{
                "category": "ESF 3.0 Distro Decomm",
                "segments": [{
                    "start": "2017-06-02",
                    "end": "2017-08-11"
                }]
            }, 

{
                "category": "Data Center Backbone",
                "segments": [{
                    "start": "2017-06-02",
                    "end": "2017-08-05"
                }]
            }, 
{
                "category": "Nexus LLZ 3K - B",
                "segments": [{
                    "start": "2017-06-08",
                    "end": "2017-08-08"
                
                }]
            },
{
                "category": "ESF 3.1 Distribution - B",
                "segments": [{
                    "start": "2017-06-11",
                    "end": "2017-08-30"
                }]
            },

{                "category": "ESF L3 6K Container Build",
                "segments": [{
                    "start": "2017-06-12",
                    "end": "2017-09-01"
                }]
            },
{
                "category": "Nexus GPC 5k - C",
                "segments": [{
                    "start": "2017-06-12",
                    "end": "2017-08-22"
                }]
            }, 
{
                "category": "Device Swap",
                "segments": [{
                    "start": "2017-06-14",
                    "end": "2017-07-31"
                }]
            },
{
                "category": "VSI/PSI UCS Zone",
                "segments": [{
                    "start": "2017-06-16",
                    "end": "2017-08-11"
                }]
            }, 
{
                "category": "DMZ Tower Build",
                "segments": [{
                    "start": "2017-06-16",
                    "end": "2017-08-18"
                }]
            }, 
{
                "category": "ESF 3.0 OOC Decommission",
                "segments": [{
                    "start": "2017-06-17",
                    "end": "2017-09-01"
                }]
            }, 
{
                "category": "Nexus GPC 5k - A",
                "segments": [{
                    "start": "2017-06-19",
                    "end": "2017-08-12"
                }]
            }, 
{
                "category": "DCBB Environment Decomm",
                "segments": [{
                    "start": "2017-06-19",
                    "end": "2017-08-23"
                }]
            }, 
{
                "category": "ESP 3.0 GPC Access Decomm",
                "segments": [{
                    "start": "2017-06-19",
                    "end": "2017-08-19"
                }]
            },
{
                "category": "ESF 3.1 Distribution",
                "segments": [{
                    "start": "2017-06-20",
                    "end": "2017-09-30"
                }]
            }, 
{
                "category": "ESF 1.x Distro",
                "segments": [{
                    "start": "2017-06-21",
                    "end": "2017-08-16"
                }]
            }, 
{
                "category": "UCS Decommission",
                "segments": [{
                    "start": "2017-06-21",
                    "end": "2017-08-30"
                }]
            }, 
{
                "category": "DMZ Vlan Documentation",
                "segments": [{
                    "start": "2017-06-22",
                    "end": "2017-09-12"
                }]
            }, 
{
                "category": "ESF Access Zone - B",
                "segments": [{
                    "start": "2017-06-22",
                    "end": "2017-09-01"
                }]
            },
{
                "category": "Access Zone Build",
                "segments": [{
                    "start": "2017-06-23",
                    "end": "2017-08-18"
                }]
            }, 
{
                "category": "ESF L3 5k Container Build",
                "segments": [{
                    "start": "2017-06-23",
                    "end": "2017-08-29"
                }]
            }, 
{
                "category": "Nexus LLZ 3k Decomm",
                "segments": [{
                    "start": "2017-06-24",
                    "end": "2017-08-21"
                }]
            },
{
                "category": "Line Card Upgrades",
                "segments": [{
                    "start": "2017-06-30",
                    "end": "2017-07-27"
                }]
            },
{
                "category": "Nexus GPC 5k - B",
                "segments": [{
                    "start": "2017-07-01",
                    "end": "2017-09-08"
                }]
            }, 
{
                "category": "Out of Band Network",
                "segments": [{
                    "start": "2017-07-02",
                    "end": "2017-08-30"
                }]
            }, 
{
                "category": "Nexus LLZ 3K",
                "segments": [{
                    "start": "2017-07-02",
                    "end": "2017-09-18"
                }]
            }, 
{
                "category": "ESF Access Zone",
                "segments": [{
                    "start": "2017-07-02",
                    "end": "2017-09-02"
                }]
            }, 
{
                "category": "Code Upgrades",
                "segments": [{
                    "start": "2017-07-02",
                    "end": "2017-07-31"
                }]
            },
{
                "category": "Nexus LLZ 3k Decomm - B",
                "segments": [{
                    "start": "2017-07-02",
                    "end": "2017-09-11"
                }]
            },
{
                "category": "DMZ Vlan Decommission - B",
                "segments": [{
                    "start": "2017-07-07",
                    "end": "2017-09-09"
                }]
            },
{
                "category": "UCS Decommission - B",
                "segments": [{
                    "start": "2017-07-08",
                    "end": "2017-09-18"
                }]
            }, 
{
                "category": "IP Capacity Uplift",
                "segments": [{
                    "start": "2017-07-11",
                    "end": "2017-08-01"
                }]
            },
{
                "category": "Line Card Install",
                "segments": [{
                    "start": "2017-07-11",
                    "end": "2017-07-31"
                }]
            },
{
                "category": "ESF 3.0 Distribution",
                "segments": [{
                    "start": "2017-07-12",
                    "end": "2017-09-30"
                }]
            },  
{
                "category": "Mulitcast Subnet Uplift",
                "segments": [{
                    "start": "2017-07-14",
                    "end": "2017-08-11"
                }]
            }
          ],

            "chartCursor": {
                "valueBalloonsEnabled": false,
                "cursorAlpha": 0,
                "valueLineBalloonEnabled": true,
                "valueLineEnabled": true,
                "valueZoomable":true,
                "zoomable":false
            }
        });
        var categoryAxis = timeline_chart.categoryAxis;
        categoryAxis.gridCount = 34;
        categoryAxis.autoGridCount = false;

function handleClick(event)
{
    window.location = "./flowdisplayEngineer.html";
}

timeline_chart.addListener("clickGraphItem", handleClick);