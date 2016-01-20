'use strict';
import {dispatcher} from '../dispatcher';
export var Router = Backbone.Router.extend({
    initialize: function (options) {

    },
    routes: {
        '': 'index',
        ':nameProject' : 'showProject'
    },

    index: function () {
        dispatcher.renderProjectListRouterIndex();        
    },
    addProject: function () {
        console.log('route addProject');
    },
    showProject: function (nameProject) {
        console.log(nameProject);
    },
});