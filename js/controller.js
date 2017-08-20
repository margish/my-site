var mainApp = angular.module("myApp", []);

mainApp.controller('mkController', function ($scope, $location, $anchorScroll) {
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
            link: 'https://github.com/mar915h',
            class: 'btn btn-round btn-clear btn-github',
            icon: 'fa fa-github'
        },
        {
            name: 'twitter',
            link: 'https://twitter.com/imargish',
            class: 'btn btn-round btn-clear btn-twitter',
            icon: 'fa fa-twitter'
        },
        {
            name: 'facebook',
            link: 'https://www.facebook.com/margish/',
            class: 'btn btn-round btn-clear btn-facebook',
            icon: 'fa fa-facebook'
        },
        {
            name: 'google',
            link: 'https://plus.google.com/u/0/+MargishKotadiya',
            class: 'btn btn-round btn-clear btn-google',
            icon: 'fa fa-google-plus'
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
            name: 'Bootstrap',
            y: 90,
            color: '#3368be'
        }, {
            name: 'Angular',
            y: 90,
            color: '#3368be'
        }, {
            name: 'HTML',
            y: 85,
            color: '#3368be'
        }, {
            name: 'CSS',
            y: 75,
            color: '#3368be'
        }, {
            name: 'Hibernate',
            y: 65,
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
            position: 'Senior Software Developer',
            company: 'Southern Company Services',
            project: 'Sr. Java/HTML5/Flex developer for Energy Management System',
            from: 'Sept 2011',
            to: 'Current'
        },
        {
            position: 'Lead Java/Flex Developer',
            company: 'Deloitte Consulting, State of Illinois',
            project: 'Lead for Child Care Management System UI Team',
            from: 'Apr 2011',
            to: 'Sept 2011'
        },
        {
            position: 'Software Developer',
            company: 'AniEffects Media Works',
            project: 'Software Developer for Corporate UI Development Team',
            from: 'Mar 2008',
            to: 'Dec 2008'
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