const loadChart = function(){
    const ctx = document.getElementById('sampleChartJs').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['2019-01', '2019-02',  '2019-03', '2019-04'],
            datasets: [{
                label: 'Access User',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                data: [50, 67, 48, 65]
            }, {
				type: 'line',
				label: 'Click User',
				borderColor: 'rgba(54, 162, 235, 1)',
				data: [20, 20, 40, 40]
			}]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });    
};

const loadRadarChart = function(){
    const ctx = document.getElementById('RadarChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['The content is interesting', 'The content design is nice', 'The content is useful', 'Other'],
            datasets: [{
                label: 'A company',
                data: [50, 80, 80, 60],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                pointBackgroundColor: 'rgba(255, 99, 132, 1)'
            }, {
                label: 'B company',
                data: [60, 70, 90, 60],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                pointBackgroundColor: 'rgba(54, 162, 235, 1)',
            }],
        },
        options: {
            scale: {
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }
        }
    });    
};