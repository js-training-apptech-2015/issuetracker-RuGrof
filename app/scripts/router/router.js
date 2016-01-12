  'use strict';
  export var Router = Backbone.Router.extend({
    routes: {
         ''     : 'index',
         'model' : 'model'
    },
 
    index: function() {
        console.log('Всем привет от индексного роута!');   
    },
    model: function() {
        console.log('Всем привет от model роута!');   
    }
});