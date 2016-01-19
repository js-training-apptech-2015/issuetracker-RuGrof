'use strict';
import '../styles/main.css';

import {dispatcher} from './dispatcher';
(function () {
    'use strict';
    
    //var projectsCollection = new Projects(); 
    // var dispatcher = _.clone(Backbone.Events);

    $(function () {
        /*var mainView = new MainView({
          el: $('#application')
        });
        mainView.render();
        dispatcher.listenTo(mainView, 'test',dispatcher.testFunction);
        mainView.trigger('test',[1,2,3]);
        new Router();
        */
        //dispatcher.renderMainView().renderBreadcrumbView();
        /*dispatcher.mainView.render();
        dispatcher.breadcrumbView.render();*/
        dispatcher.init();
        Backbone.history.start({ pushState: true });
    
        //projectsCollection.fetch();
        /* console.log(projectsCollection);
         console.log(dispatcher);*/
    });
})();
