'use strict';
import {TemplateView} from './template';
export var ProjectListView = TemplateView.extend({
    template: 'project-list',
    events: {
        "click .add-new-project": "addNewProject"
    },
    getContext: function () {
        return {
            projects: [{ name: 'Uno' }, { name: 'Duo' }, { name: 'Tres' }]
        }
    },

    addNewProject: function () {
        console.log("Add new project");
        return false;
    }
});