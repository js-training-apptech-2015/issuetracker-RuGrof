'use strict';
import {dispatcher} from '../dispatcher';
export var Router = Backbone.Router.extend({
    initialize: function (options) {

    },
    routes: {
        '': 'index',
        'model': 'model',
        ':nameProject' : 'showProject'
    },

    index: function () {
        dispatcher.renderMainView().renderBreadcrumbView();
        dispatcher.fetchProjectsCollection().then(function (){
            dispatcher.renderProjectListView();
            });
        
    },
    model: function () {
        console.log('Всем привет от model роута!');
    },
    addProject: function () {
        console.log('route addProject');
    },
    showProject: function () {
        console.log('route showProject');
    },
});