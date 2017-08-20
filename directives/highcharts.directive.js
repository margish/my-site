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
                Highcharts.chart(element[0], {
                    chart: {
                        type: 'column',
                        width: element[0].parentElement.offsetWidth,
                    },
                    title: {
                        text: 'Skills Chart'
                    },
                    xAxis: {
                        categories: ['Java', 'SQL', 'Spring MVC', 'REST API', 'Java Script', 'Bootstrap', 'Angular', 'HTML', 'CSS', 'Hibernate']
                    },
                    credits: {
                        enabled: true
                    },
                    series: [{
                        data: scope.options.data
                    }]
                });
            }
        };
    });