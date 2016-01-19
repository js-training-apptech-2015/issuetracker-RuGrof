'use strict';
import {dispatcher} from '../dispatcher';
export var Router = Backbone.Router.extend({
    initialize: function (options) {

    },
    routes: {
        '': 'index',
        'model': 'model',
        'add': 'addProject'
    },

    index: function () {
        dispatcher.renderMainView().renderBreadcrumbView();
        dispatcher.fetchProjectsCollection();
        
    },
    model: function () {
        console.log('Всем привет от model роута!');
    },
    addProject: function () {

    }
});