(function(){
  'use strict';
   angular
      .module('samarth-webcomponents')
      .component('jobDesc',{
      templateUrl: './samarth-webcomponents/jobPost/template/jobDesc.html',
      bindings: { data: '=',
                   txt: '@'      
                },
       controller:'jobDescCtrl',
       controllerAs:'vm',
       scope:true,
       transclude:true,
      })
      .controller('jobDescCtrl',jobDescCtrl);
      function jobDescCtrl(){
            var vm=this;
            vm.job={};
            vm.job.skills={};
            vm.newSkill=newSkill;
            vm.data.desc=vm.job;
            function newSkill(chip) {
            return {
                name: chip,
                expertise: 'unknown',
                priority:'unknown',
            };
          };
      }
      })();
