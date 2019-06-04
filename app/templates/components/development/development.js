var ctx = document.getElementById('graph').getContext('2d');
var canvasHeight = 280;
var canvasWidth = 278;
if ($(window).width() > 767){
    canvasHeight = 365;
    canvasWidth = 666;
}
else if ($(window).width() > 1280){
    canvasHeight = 384;
    canvasWidth = 637;
}
else if ($(window).width() > 1990){
    canvasHeight = 552;
    canvasWidth = 916;
}

ctx.canvas.height = canvasHeight;
ctx.canvas.width = canvasWidth;

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
        datasets: [{      
            data: [104, 125, 260, 275, 391, 600, 600],
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
                    size: '13',
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
                    max: 700,
                    min: 0,
                    //stepSize: 500                   
                },   
            }]
        },
        legend: {
            display: false
        }
    }
});