let graph = document.getElementById('graph');
if(graph){
    let ctx = graph.getContext('2d'),
    canvasHeight = 280,
    canvasWidth = 278,
    dataLabels =  graph.dataset.labels.split(','),
    dataPoints =  graph.dataset.points.split(','),
    font = '13';

    let graphCanvas = function () {
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
        
        let myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: dataLabels,
                datasets: [{      
                    data: dataPoints,
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
                        tension: 0 
                    }
                }, 
                geometry: 'vertical',
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
        });
    }
    graphCanvas();
    (function() {

        window.addEventListener("resize", resizeThrottler, false);
      
        var resizeTimeout;
        function resizeThrottler() {
          // ignore resize events as long as an actualResizeHandler execution is in the queue
          if ( !resizeTimeout ) {
            resizeTimeout = setTimeout(function() {
              resizeTimeout = null;
              actualResizeHandler();
           
             // The actualResizeHandler will execute at a rate of 15fps
             }, 100);
          }
        }
      
        function actualResizeHandler(){      
            graphCanvas();
        }
      
      }());
    

}
