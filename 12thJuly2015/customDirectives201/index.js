/**
 * Created by MTA on 7/12/2015.
 */
(function(){
    angular.module("directivesHelloWorld", [])
        .controller("ctrl1", function(){
            var vm = this;
            vm.message = "Hello world from controller";
        })
        .controller("ctrl02", function(){
            var vm = this;
            vm.textBoxModel = "Hello world from custom directive";
        })
        .directive("messagebox", function(){
            return {
                //template    : "<input type='text' ng-model = 'c.message'>",
                link        : function(scope, elem, attr){
                    elem.append("<div>Some Other message</div>");

                    alert(attr.name);
                }
            };
        });
}());
