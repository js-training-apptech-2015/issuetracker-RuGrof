'use strict';
import {TemplateView} from './template';
import {dispatcher} from '../dispatcher';
export var BreadcrumbView = TemplateView.extend({
    template: 'breadcrumb',
    getContext: function () {
      return {
          route:this.model ? this.model.get('route') : {}
          };
    },
    events :{
        "click #breadcrumb" : 'tester'
    },
    tester: function(e){
        this.trigger('test',e);
        return false;
    }
  });