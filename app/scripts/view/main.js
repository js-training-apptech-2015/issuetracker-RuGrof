'use strict';
import {TemplateView} from './template';
import {ProjectListView} from './projectList';
  export var MainView = TemplateView.extend({
    template: 'main',
    render: function () {
      TemplateView.prototype.render.call(this);
      this.projectListView = new ProjectListView({
        el: this.$('.js-project-list')
      });
      this.projectListView.render();
    }
  });