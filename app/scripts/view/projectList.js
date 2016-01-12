'use strict';
import {TemplateView} from './template';
export var ProjectListView = TemplateView.extend({
    template: 'project-list',
    getContext: function () {
      return {
        projects: [{name: 'Uno'}, {name: 'Duo'}, {name: 'Tres'}]
      }
    }
  });