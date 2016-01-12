'use strict';
import '../styles/main.css';
import {Projects} from './collection/projects';
import {Router} from './router/router';
import {MainView} from './view/main';
(function () {
  'use strict';
    
  var projectsCollection = new Projects([
      {
          name:'project1',
          numberIssue:3
      },
      {
          name:'project2',
          numberIssue:4
      },
      {
          name:'project6',
          numberIssue:7
      }
      ]); 

  $(function () {
    var mainView = new MainView({
      el: $('#application')
    });
    mainView.render();
    
    new Router();
    Backbone.history.start({pushState: true});
    console.log(projectsCollection);
  });
})();
