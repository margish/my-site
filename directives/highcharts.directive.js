/**
 * Created by margish on 8/19/17.
 */
mainApp.directive('highChart', function () {
        return {
            restrict: 'E',
            template: '<div></div>',
            scope: {
                options: '='
            },
            link: function (scope, element) {
                var chart = Highcharts.chart(element[0], {
                    chart: {
                        type: 'column',
                        width: element[0].parentElement.offsetWidth,
                    },
                    title: {
                        text: ''
                    },
                    legend: {
                        enabled: false
                    },
                    yAxis: {
                        tickInterval: 10,
                        title: '%'
                    },
                    xAxis: {
                        categories: ['Java', 'SQL', 'Spring MVC', 'REST API', 'Java Script', 'Bootstrap', 'Angular', 'HTML', 'CSS', 'Hibernate'],
                        labels: {
                            style: {
                                "fontSize": "16px",
                                "fontWeight": "bold"
                            }
                        }
                    },
                    credits: {
                        enabled: true
                    },
                    series: [{
                        data: scope.options.data
                    }],
                    plotOptions: {
                        series: {
                            dataLabels: {
                                enabled: true,
                                formatter: function() {return this.y + '%'},
                                inside: true
                            },
                            enableMouseTracking: false
                        }
                    }
                });

                // resize chart width on window resize
                $(window).resize(function() {
                    var height = chart.height;
                    var width = element[0].parentElement.offsetWidth;
                    chart.setSize(width, height, true);
                });

            }
        };
    });