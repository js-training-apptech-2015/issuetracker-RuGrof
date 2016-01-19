'use strict';
import {Project} from '../model/project';
export var Projects = Backbone.Collection.extend({
    url: 'http://localhost:3000/projects',
    model: Project
    
});