const loadChart = function() {
    document.addEventListener('DOMContentLoaded', function () {
        const myChart = Highcharts.chart('sampleHighChart', {
            chart: {
                zoomType: 'xy'
            },
            title: {
                text: 'Access User and Click User'
            },
            xAxis: [{
                categories: ['2019-01', '2019-02', '2019-03', '2019-04'],
                crosshair: true
            }],
            yAxis: [{ // Primary yAxis
                title: {
                    text: 'Access User'
                }
            }, { // Secondary yAxis
                title: {
                    text: 'Click User'
                },
                opposite: true
            }],
            tooltip: {
                shared: true
            },
            series: [{
                name: 'Access User',
                type: 'column',
                yAxis: 1,
                data: [50, 67, 48, 65],
        
            }, {
                name: 'Click User',
                type: 'spline',
                data: [20, 20, 40, 40],
            }]
        });
    });
};

const loadHeatmap = function() {
    document.addEventListener('DOMContentLoaded', function () {
        const myChart = Highcharts.chart('heatmapHighChart', {

            chart: {
                type: 'heatmap'
            },
            title: {
                text: 'Click Peek Per Content Category'
            },
            xAxis: {
                categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
            },
            yAxis: {
                categories: ['Shopping', 'Travel', 'Beauty', 'Sports', 'News']
            },
            colorAxis: {
                min: 0,
                minColor: '#FFFFFF',
                maxColor: Highcharts.getOptions().colors[0]
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.xAxis.categories[this.point.x] + '</b> <br><b>' +
                        this.point.value + '</b> Click in <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>';
                }
            },
        
            series: [{
                data: [
                    [0, 0, 10], [0, 1, 10], [0, 2, 8], [0, 3, 24], [0, 4, 70],
                    [1, 0, 92], [1, 1, 10], [1, 2, 10], [1, 3, 100], [1, 4, 50],
                    [2, 0, 35], [2, 1, 10], [2, 2, 20], [2, 3, 64], [2, 4, 40],
                    [3, 0, 72], [3, 1, 20], [3, 2, 114], [3, 3, 19], [3, 4, 60],
                    [4, 0, 38], [4, 1, 100], [4, 2, 8], [4, 3, 80], [4, 4, 60],
                    [5, 0, 88], [5, 1, 100], [5, 2, 12], [5, 3, 80], [5, 4, 70],
                    [6, 0, 13], [6, 1, 60], [6, 2, 88], [6, 3, 98], [6, 4, 30],
                ],
                dataLabels: {
                    enabled: true
                }
            }]
        });
    });
};