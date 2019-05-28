var ctx = document.getElementById('graph').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2013', '2014', '2015', '2016', '2017', '2018'],
        datasets: [{      
            data: [104, 125, 260, 275, 391, 600, 600],
            borderColor: '#FFCC08',
            backgroundColor:'transparent',        
            borderWidth: 2
        }]
    },
    options: {        
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,                    
                },
            /*gridLines: {
                    borderDash: [3,3,3],
                }*/
            }],
            yAxes: [{
                gridLines: {
                    display:false
                },
                ticks: {
                    fontSize: 0,                    
                },   
            }]
        },
        legend: {
            display: false
        },        
        /*tooltips: {
            custom: function(tooltip) {
                if (!tooltip) return;
                // disable displaying the color box;
                tooltip.displayColors = false;
            },
            callbacks: {
                // use label callback to return the desired label
                label: function(tooltipItem, data) {
                    return tooltipItem.xLabel + " :" + tooltipItem.yLabel;
                },
                // remove title
                title: function(tooltipItem, data) {
                    return;
                }
            }
        }*/   
    }
});