'use strict';
import {Project} from '../model/project';
export var Projects = Backbone.Collection.extend({
    url: 'http://localhost:3000/projects',
    model: Project,
    getContext : function(){
        var temp=[];
        this.forEach(function(model,index){
            temp[index] = {
                name: model.get('name'),
                numberIssue: model.get('numberIssue')
                } 
           
        });
        return temp;
    }
    
});