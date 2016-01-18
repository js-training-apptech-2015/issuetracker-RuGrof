'use strict';
import {TemplateView} from './template';
/*import {ProjectListView} from './projectList';
import {BreadcrumbView} from './breadcrumb';
import {Breadcrumb} from '../model/Breadcrumb';*/
  /*export var MainView = TemplateView.extend({
    template: 'main',
    render: function () {
      TemplateView.prototype.render.call(this);
      this.projectListView = new ProjectListView({
        el: this.$('.js-project-list')
      }).render();
      
      var breadcrumb = new Breadcrumb();
      breadcrumb.set({'route':[
          {text:'problem', url:'projects'},
          {text: 123, url:'projects/123'}
          ]});
      this.breadcrumbView = new BreadcrumbView({
          model:breadcrumb,
          el: this.$('.breadcrumb-line')
      }).render();
      
      //console.log(breadcrumb.get('route'));
    }
  });*/
    export var MainView = TemplateView.extend({
    template: 'main'
  });