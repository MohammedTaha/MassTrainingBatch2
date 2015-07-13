/**
 * Created by MTA on 7/12/2015.
 */
(function(){
    angular.module("directivesHelloWorld", [])
        .controller("ctrl1", function(){
            var vm = this;
            vm.message = "Hello world from controller";
        })
        .directive("messagebox", function(){
            return {
                restrict : "E",
                template : "<input type='text' ng-model = 'c2.textBoxModel'>  <br/> {{c.message}} <br/> {{c2.textBoxModel}}<br/> {{c2.message}}",
                controller : function(){
                    var vm = this;
                    vm.message = "Hello world from custom directive";


                },
                controllerAs : "c2"
            };
        });
}());
