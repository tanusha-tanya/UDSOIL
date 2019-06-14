let graph = document.getElementById('graph');
if(graph){
    let ctx = graph.getContext('2d'),
    canvasHeight = 280,
    canvasWidth = 278,
    dataLabels =  graph.dataset.labels.split(','),
    dataPoints =  graph.dataset.points.split(','),
    font = '13';
    let chartData;
    
    if ($(window).width() > 1990){
        canvasHeight = 552;
        canvasWidth = 916;
        font = '18'
    }
    else if ($(window).width() > 1280){
        canvasHeight = 384;
        canvasWidth = 637;
        font = '13'
    }
    else if ($(window).width() > 767){
        canvasHeight = 365;
        canvasWidth = 666;
        font = '13'       
    }       
                
    ctx.canvas.height = canvasHeight;
    ctx.canvas.width = canvasWidth;        
    chartData = {
        type: 'line',
        data: {
            labels: dataLabels,
            datasets: [{      
                data: [dataPoints[0]],
                borderColor: '#FFCC08',
                backgroundColor:'transparent',        
                borderWidth: 4,
                pointBorderColor: "#FFCC08",
                pointBackgroundColor: "#fff",
                pointRadius: 4
            }]
        },    
        options: {               
            elements: {
                line: {
                    tension: 0,                        
                }
            },  
            animation: {
                duration: 3000,
                easing: 'linear'
            },            
            plugins: {
                datalabels: {
                    color: '#282828',
                    align: 'top',
                    font:{
                        size: font,
                        weight: '600',
                        family: 'Raleway,  Arial, Helvetica, sans-serif'
                    }
                }
            },       
            scales: {
                xAxes: [{
                    ticks: {     
                        autoSkip: false,               
                        min: 0,
                        stepSize: 100
                    },
                    gridLines: {
                        borderDash: [3,3,3],
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display:false
                    },
                    ticks: {
                        fontSize: 0, 
                        max: Number(dataPoints[dataPoints.length - 1]) + 100,
                        min: 0                                      
                    },   
                }]
            },
            legend: {
                display: false
            }
        }
    }   
      
    var inView = false; 
    var showed = false; 
    function isScrolledIntoView(elem){
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();    
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
    }


    $(window).scroll(function() {
        if (isScrolledIntoView('#graph')) {
            if (showed) { return; }            
                inView = true;
                showed = true;
                var MyChart = new Chart(ctx, chartData);
                var next = function() {
                    var data = chartData.data.datasets[0].data;
                    var count = data.length;
                    data[count] = data[count - 1];
                    MyChart.update({duration: 300});
                    data[count] = dataPoints[count];
                    MyChart.update();
                    if (count < dataPoints.length) {
                      setTimeout(next, 400);
                    }
                  }
                setTimeout(next, 400);     
        } else {
                inView = false;  
        }
    });      
}
/*let graph = document.getElementById('graph');
if(graph){
    let ctx = graph.getContext('2d'),
    canvasHeight = 280,
    canvasWidth = 278,
    dataLabels =  graph.dataset.labels.split(','),
    dataPoints =  graph.dataset.points.split(','),
    font = '13';
    let chartData;
    
        if ($(window).width() > 1990){
            canvasHeight = 552;
            canvasWidth = 916;
            font = '18'
        }
        else if ($(window).width() > 1280){
            canvasHeight = 384;
            canvasWidth = 637;
            font = '13'
        }
        else if ($(window).width() > 767){
            canvasHeight = 365;
            canvasWidth = 666;
            font = '13'
            
        }       
                
        ctx.canvas.height = canvasHeight;
        ctx.canvas.width = canvasWidth;        
        chartData = {
            type: 'line',
            data: {
                labels: dataLabels,
                datasets: [{      
                    data: [],
                    borderColor: '#FFCC08',
                    backgroundColor:'transparent',        
                    borderWidth: 2,
                    pointBorderColor: "#FFCC08",
                    pointBackgroundColor: "#fff",
                    pointRadius: 4
                }]
            },    
            options: {               
                elements: {
                    line: {
                        tension: 0,                        
                    }
                },  
                animation: {
                    duration: 5000,
                    easing: 'easeInQuad'
                },            
                plugins: {
                    datalabels: {
                        color: '#282828',
                        align: 'top',
                        font:{
                            size: font,
                            weight: '600',
                            family: 'Raleway,  Arial, Helvetica, sans-serif'
                        }
                    }
                },       
                scales: {
                    xAxes: [{
                        ticks: {     
                            autoSkip: false,               
                            min: 0,
                            stepSize: 100
                        },
                        gridLines: {
                            borderDash: [3,3,3],
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display:false
                        },
                        ticks: {
                            fontSize: 0, 
                            max: Number(dataPoints[dataPoints.length - 1]) + 100,
                            min: 0                                      
                        },   
                    }]
                },
                legend: {
                    display: false
                }
            }
        }
        
        for (var i = 0; i < dataPoints.length; i++) {                      
            chartData.data.datasets[0].data.push(null)
          }
        
          var MyChart = new Chart(ctx, chartData);   

        
            for (var i = dataPoints.length; i >= 0; i--) {                
                
                chartData.data.datasets[0].data.pop();
                chartData.data.datasets[0].data.unshift(dataPoints[i]);
                MyChart.update();                  
            }            
       
}
*/