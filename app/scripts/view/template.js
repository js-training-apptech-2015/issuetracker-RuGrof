'use strict';
  var templates={};
  templates['main'] = require('../../templates/main.mustache');
  templates['project-list'] = require('../../templates/project-list.mustache');
  
  export var TemplateView = Backbone.View.extend({
    render: function () {
      var template = templates[this.template];
      this.$el.html(template(this.getContext()));
    },
    getContext: function () {
      return this.model ? this.model.toJSON() : {};
    }
  });