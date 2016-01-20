'use strict';
import {TemplateView} from './template';
export var ProjectListView = TemplateView.extend({
    template: 'project-list',
    events: {
        "click .add-new-project": "addNewProject",
        "click .project-button" : "showProject"
    },
    getContext: function () {
        return {
            projects: this.collection ? this.collection.getContext() : {}
        }
    },

    addNewProject: function () {
        console.log("Add new project");
        return false;
    },
    showProject: function(){
        console.log("showProject");
        return false;
    }
});