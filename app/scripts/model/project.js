'use strict';
export var Project = Backbone.Model.extend({
    defaults: {
        name: '',
        numberIssue: 0
    },
    validate: function(attrs, options){
        if(attrs.name === 'add'){
            return "Invalid model name";
        }
    }
});