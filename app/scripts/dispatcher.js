import {Projects} from './collection/projects';
import {Router} from './router/router';
import {MainView} from './view/main';
import {BreadcrumbView} from './view/breadcrumb';
import {Breadcrumb} from './model/Breadcrumb';
export var dispatcher = _.clone(Backbone.Events);


dispatcher.renderMainView = function (){
    if(!dispatcher.mainView){
        dispatcher.mainView = new MainView({
            el: $('#application')
            });
    }
    //render once only 
    if(!dispatcher.mainViewRendered){
        dispatcher.mainView.render();  
        dispatcher.mainViewRendered = true;  
    }      
    return this;    
} 
 

//breadcrumb
dispatcher.breadcrumbModel = new Breadcrumb();
dispatcher.renderBreadcrumbView = function(){ 
    
    if(!dispatcher.breadcrumbView){
        dispatcher.breadcrumbView = new BreadcrumbView({
            model: dispatcher.breadcrumbModel,
            el: $('.breadcrumb-line')
        }); 
    }
    dispatcher.breadcrumbView.render();
    dispatcher.listenTo(dispatcher.breadcrumbView,'test',dispatcher.testFunction);
    console.log('breadcrumbView');
}
//test breadcrumb
dispatcher.breadcrumbModel.set({'route':[
    
          {text:'problem', url:'projects'},
          {text: 123, url:'projects/123'}
          
          ]});
          
dispatcher.init = function(){
    dispatcher.router = new Router(); 
}
   
   
dispatcher.testFunction = function (args){
     console.log('test event',args.toElement);
    dispatcher.breadcrumbModel.set({'route':[
          {text:'issue', url:'issue'},
          {text: 123, url:'projects/123'}
          ]});
    dispatcher.breadcrumbView.render();
}

//Projects
dispatcher.fetchProjectsCollection = function(options){
    if(!dispatcher.projectsCollection){
        dispatcher.projectsCollection = new Projects();
    }
    return dispatcher.projectsCollection.fetch(options);
}