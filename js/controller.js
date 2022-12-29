var mainApp = angular.module("myApp", []);

mainApp.controller('mkController', function ($scope, $location, $anchorScroll) {

    $scope.currentPosition = 'Senior Software Engineer | React | Java | AWS';
    $scope.mainMenuText = 'Margish';
    $scope.headerText = 'MARGISH KOTADIYA';

    $scope.menuItems = [
        {
            name: 'home',
            ref: '#home',
            class: ''
        },
        {
            name: 'profile',
            ref: '#profile',
            class: ''
        },
        {
            name: 'skills',
            ref: '#skills',
            class: ''
        },
        {
            name: 'education',
            ref: '#education',
            class: ''
        },
        {
            name: 'experience',
            ref: '#experience',
            class: ''
        },
        {
            name: 'contact',
            ref: '#contact',
            class: ''
        }
    ];
    $scope.socialLinks = [
        {
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/margish/',
            class: 'btn btn-round btn-clear btn-linkedin',
            icon: 'fa fa-linkedin'
        },
        {
            name: 'github',
            link: 'https://github.com/margish',
            class: 'btn btn-round btn-clear btn-github',
            icon: 'fa fa-github'
        }
    ];

    $scope.chartOptions = {
        data: [{
            name: 'Java',
            y: 90,
            color: '#3368be'
        }, {
            name: 'SQL',
            y: 90,
            color: '#3368be'
        }, {
            name: 'Spring MVC',
            y: 90,
            color: '#3368be'
        }, {
            name: 'REST API',
            y: 90,
            color: '#3368be'
        }, {
            name: 'Java Script',
            y: 90,
            color: '#3368be'
        }, {
            name: 'React/Redux',
            y: 90,
            color: '#3368be'
        }, {
            name: 'HTML',
            y: 85,
            color: '#3368be'
        }, {
            name: 'AWS',
            y: 80,
            color: '#3368be'
        }, {
            name: 'CSS',
            y: 75,
            color: '#3368be'
        }, {
            name: 'Kubernetes',
            y: 60,
            color: '#3368be'
        }]
    };

    $scope.education = [{
        name: 'Indiana University of Pennsylvania',
        degree: 'MBA (Finance)',
        status: 'Graduated',
        year: '2010'
    }, {
        name: 'Visvesvaraya Technological University',
        degree: 'BE (Information Science)',
        status: 'Graduated',
        year: '2007'
    }];

    $scope.experience = [
        {
            position: 'Senior Software Engineer',
            company: 'Guidewire Software',
            project: 'InsuranceNow - Consumer Service Portal',
            from: 'Nov 2017',
            to: 'Current'
        },{
            position: 'Senior Software Developer',
            company: 'Southern Company Services',
            project: 'Sr. Java/HTML5/Flex developer for Energy Management System',
            from: 'Sept 2011',
            to: 'Nov 2017'
        },
        {
            position: 'Java/Flex Developer',
            company: 'Deloitte Consulting, State of Illinois',
            project: 'Child Care Management System UI Team',
            from: 'Apr 2011',
            to: 'Sept 2011'
        },
        {
            position: 'Associate Technology L1',
            company: 'Sapient Corporation',
            project: 'Developer/Support for Energy Front Desk for a reputed hedge fund company',
            from: 'Jun 2007',
            to: 'Feb 2008'
        },
    ];

    $scope.scrollTo = function (ref) {
        console.log('ref 1', ref);
        $location.hash(ref);
        $anchorScroll();
    };
});