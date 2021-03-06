/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	var _dispatcher = __webpack_require__(2);
	
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
	        _dispatcher.dispatcher.init();
	        Backbone.history.start({ pushState: true });
	
	        //projectsCollection.fetch();
	        /* console.log(projectsCollection);
	         console.log(dispatcher);*/
	    });
	})();

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.dispatcher = undefined;
	
	var _projects = __webpack_require__(3);
	
	var _router = __webpack_require__(5);
	
	var _main = __webpack_require__(6);
	
	var _projectList = __webpack_require__(14);
	
	var _breadcrumb = __webpack_require__(15);
	
	var _Breadcrumb = __webpack_require__(16);
	
	var dispatcher = exports.dispatcher = _.clone(Backbone.Events);
	
	dispatcher.renderMainView = function () {
	    if (!dispatcher.mainView) {
	        dispatcher.mainView = new _main.MainView({
	            el: $('#application')
	        });
	    }
	    //render once only
	    if (!dispatcher.mainViewRendered) {
	        dispatcher.mainView.render();
	        dispatcher.mainViewRendered = true;
	    }
	    return this;
	};
	
	//breadcrumb
	dispatcher.breadcrumbModel = new _Breadcrumb.Breadcrumb();
	dispatcher.renderBreadcrumbView = function () {
	
	    if (!dispatcher.breadcrumbView) {
	        dispatcher.breadcrumbView = new _breadcrumb.BreadcrumbView({
	            model: dispatcher.breadcrumbModel,
	            el: $('.breadcrumb-line')
	        });
	    }
	    dispatcher.breadcrumbView.render();
	    dispatcher.listenTo(dispatcher.breadcrumbView, 'test', dispatcher.testFunction);
	    console.log('breadcrumbView');
	    return this;
	};
	//test breadcrumb
	dispatcher.breadcrumbModel.set({ 'route': [{ text: 'problem', url: 'projects' }, { text: 123, url: 'projects/123' }] });
	
	dispatcher.init = function () {
	    dispatcher.router = new _router.Router();
	};
	
	dispatcher.testFunction = function (args) {
	    console.log('test event', args.toElement);
	    dispatcher.breadcrumbModel.set({ 'route': [{ text: 'issue', url: 'issue' }, { text: 123, url: 'projects/123' }] });
	    dispatcher.breadcrumbView.render();
	};
	
	//Projects
	dispatcher.fetchProjectsCollection = function (options) {
	    if (!dispatcher.projectsCollection) {
	        dispatcher.projectsCollection = new _projects.Projects();
	    }
	    return dispatcher.projectsCollection.fetch(options);
	};
	
	dispatcher.renderProjectListView = function () {
	    if (!dispatcher.ProjectListView) {
	        dispatcher.ProjectListView = new _projectList.ProjectListView({
	            collection: dispatcher.projectsCollection,
	            el: $('.content')
	        });
	    }
	    dispatcher.ProjectListView.render();
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Projects = undefined;
	
	var _project = __webpack_require__(4);
	
	var Projects = exports.Projects = Backbone.Collection.extend({
	    url: 'http://localhost:3000/projects',
	    model: _project.Project,
	    getContext: function getContext() {
	        var temp = [];
	        this.forEach(function (model, index) {
	            temp[index] = {
	                name: model.get('name'),
	                numberIssue: model.get('numberIssue')
	            };
	        });
	        return temp;
	    }
	
	});

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Project = exports.Project = Backbone.Model.extend({
	    defaults: {
	        name: '',
	        numberIssue: 0
	    },
	    validate: function validate(attrs, options) {
	        if (attrs.name === 'add') {
	            return "Invalid model name";
	        }
	    }
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Router = undefined;
	
	var _dispatcher = __webpack_require__(2);
	
	var Router = exports.Router = Backbone.Router.extend({
	    initialize: function initialize(options) {},
	    routes: {
	        '': 'index',
	        ':nameProject': 'showProject'
	    },
	
	    index: function index() {
	        _dispatcher.dispatcher.renderMainView().renderBreadcrumbView();
	        _dispatcher.dispatcher.fetchProjectsCollection().then(function () {
	            _dispatcher.dispatcher.renderProjectListView();
	        });
	    },
	    addProject: function addProject() {
	        console.log('route addProject');
	    },
	    showProject: function showProject(nameProject) {
	        console.log(nameProject);
	    }
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MainView = undefined;
	
	var _template = __webpack_require__(7);
	
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
	var MainView = exports.MainView = _template.TemplateView.extend({
	    template: 'main'
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var templates = {};
	templates['main'] = __webpack_require__(8);
	templates['project-list'] = __webpack_require__(12);
	templates['breadcrumb'] = __webpack_require__(13);
	
	var TemplateView = exports.TemplateView = Backbone.View.extend({
	    render: function render() {
	        var template = templates[this.template];
	        this.$el.html(template(this.getContext()));
	        return this;
	    },
	    getContext: function getContext() {
	        return this.model ? this.model.toJSON() : {};
	    }
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(9);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"header\">\r");t.b("\n" + i);t.b("  \r");t.b("\n" + i);t.b("  <div class=\"breadcrumb-line\">\r");t.b("\n" + i);t.b("  </div>\r");t.b("\n" + i);t.b("</div>\r");t.b("\n" + i);t.b("\r");t.b("\n" + i);t.b("<div class=\"content\">\r");t.b("\n" + i);t.b("    <h3 class=\"text-muted\">Select Project</h3>\r");t.b("\n" + i);t.b("</div>\r");t.b("\n" + i);t.b("\r");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"header\">\r\n  \r\n  <div class=\"breadcrumb-line\">\r\n  </div>\r\n</div>\r\n\r\n<div class=\"content\">\r\n    <h3 class=\"text-muted\">Select Project</h3>\r\n</div>\r\n\r\n", H);return T.render.apply(T, arguments); };

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/*
	 *  Copyright 2011 Twitter, Inc.
	 *  Licensed under the Apache License, Version 2.0 (the "License");
	 *  you may not use this file except in compliance with the License.
	 *  You may obtain a copy of the License at
	 *
	 *  http://www.apache.org/licenses/LICENSE-2.0
	 *
	 *  Unless required by applicable law or agreed to in writing, software
	 *  distributed under the License is distributed on an "AS IS" BASIS,
	 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 *  See the License for the specific language governing permissions and
	 *  limitations under the License.
	 */
	
	// This file is for use with Node.js. See dist/ for browser files.
	
	var Hogan = __webpack_require__(10);
	Hogan.Template = __webpack_require__(11).Template;
	Hogan.template = Hogan.Template;
	module.exports = Hogan;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/*
	 *  Copyright 2011 Twitter, Inc.
	 *  Licensed under the Apache License, Version 2.0 (the "License");
	 *  you may not use this file except in compliance with the License.
	 *  You may obtain a copy of the License at
	 *
	 *  http://www.apache.org/licenses/LICENSE-2.0
	 *
	 *  Unless required by applicable law or agreed to in writing, software
	 *  distributed under the License is distributed on an "AS IS" BASIS,
	 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 *  See the License for the specific language governing permissions and
	 *  limitations under the License.
	 */
	
	(function (Hogan) {
	  // Setup regex  assignments
	  // remove whitespace according to Mustache spec
	  var rIsWhitespace = /\S/,
	      rQuot = /\"/g,
	      rNewline = /\n/g,
	      rCr = /\r/g,
	      rSlash = /\\/g,
	      rLineSep = /\u2028/,
	      rParagraphSep = /\u2029/;
	
	  Hogan.tags = {
	    '#': 1, '^': 2, '<': 3, '$': 4,
	    '/': 5, '!': 6, '>': 7, '=': 8, '_v': 9,
	    '{': 10, '&': 11, '_t': 12
	  };
	
	  Hogan.scan = function scan(text, delimiters) {
	    var len = text.length,
	        IN_TEXT = 0,
	        IN_TAG_TYPE = 1,
	        IN_TAG = 2,
	        state = IN_TEXT,
	        tagType = null,
	        tag = null,
	        buf = '',
	        tokens = [],
	        seenTag = false,
	        i = 0,
	        lineStart = 0,
	        otag = '{{',
	        ctag = '}}';
	
	    function addBuf() {
	      if (buf.length > 0) {
	        tokens.push({ tag: '_t', text: new String(buf) });
	        buf = '';
	      }
	    }
	
	    function lineIsWhitespace() {
	      var isAllWhitespace = true;
	      for (var j = lineStart; j < tokens.length; j++) {
	        isAllWhitespace = Hogan.tags[tokens[j].tag] < Hogan.tags['_v'] || tokens[j].tag == '_t' && tokens[j].text.match(rIsWhitespace) === null;
	        if (!isAllWhitespace) {
	          return false;
	        }
	      }
	
	      return isAllWhitespace;
	    }
	
	    function filterLine(haveSeenTag, noNewLine) {
	      addBuf();
	
	      if (haveSeenTag && lineIsWhitespace()) {
	        for (var j = lineStart, next; j < tokens.length; j++) {
	          if (tokens[j].text) {
	            if ((next = tokens[j + 1]) && next.tag == '>') {
	              // set indent to token value
	              next.indent = tokens[j].text.toString();
	            }
	            tokens.splice(j, 1);
	          }
	        }
	      } else if (!noNewLine) {
	        tokens.push({ tag: '\n' });
	      }
	
	      seenTag = false;
	      lineStart = tokens.length;
	    }
	
	    function changeDelimiters(text, index) {
	      var close = '=' + ctag,
	          closeIndex = text.indexOf(close, index),
	          delimiters = trim(text.substring(text.indexOf('=', index) + 1, closeIndex)).split(' ');
	
	      otag = delimiters[0];
	      ctag = delimiters[delimiters.length - 1];
	
	      return closeIndex + close.length - 1;
	    }
	
	    if (delimiters) {
	      delimiters = delimiters.split(' ');
	      otag = delimiters[0];
	      ctag = delimiters[1];
	    }
	
	    for (i = 0; i < len; i++) {
	      if (state == IN_TEXT) {
	        if (tagChange(otag, text, i)) {
	          --i;
	          addBuf();
	          state = IN_TAG_TYPE;
	        } else {
	          if (text.charAt(i) == '\n') {
	            filterLine(seenTag);
	          } else {
	            buf += text.charAt(i);
	          }
	        }
	      } else if (state == IN_TAG_TYPE) {
	        i += otag.length - 1;
	        tag = Hogan.tags[text.charAt(i + 1)];
	        tagType = tag ? text.charAt(i + 1) : '_v';
	        if (tagType == '=') {
	          i = changeDelimiters(text, i);
	          state = IN_TEXT;
	        } else {
	          if (tag) {
	            i++;
	          }
	          state = IN_TAG;
	        }
	        seenTag = i;
	      } else {
	        if (tagChange(ctag, text, i)) {
	          tokens.push({ tag: tagType, n: trim(buf), otag: otag, ctag: ctag,
	            i: tagType == '/' ? seenTag - otag.length : i + ctag.length });
	          buf = '';
	          i += ctag.length - 1;
	          state = IN_TEXT;
	          if (tagType == '{') {
	            if (ctag == '}}') {
	              i++;
	            } else {
	              cleanTripleStache(tokens[tokens.length - 1]);
	            }
	          }
	        } else {
	          buf += text.charAt(i);
	        }
	      }
	    }
	
	    filterLine(seenTag, true);
	
	    return tokens;
	  };
	
	  function cleanTripleStache(token) {
	    if (token.n.substr(token.n.length - 1) === '}') {
	      token.n = token.n.substring(0, token.n.length - 1);
	    }
	  }
	
	  function trim(s) {
	    if (s.trim) {
	      return s.trim();
	    }
	
	    return s.replace(/^\s*|\s*$/g, '');
	  }
	
	  function tagChange(tag, text, index) {
	    if (text.charAt(index) != tag.charAt(0)) {
	      return false;
	    }
	
	    for (var i = 1, l = tag.length; i < l; i++) {
	      if (text.charAt(index + i) != tag.charAt(i)) {
	        return false;
	      }
	    }
	
	    return true;
	  }
	
	  // the tags allowed inside super templates
	  var allowedInSuper = { '_t': true, '\n': true, '$': true, '/': true };
	
	  function buildTree(tokens, kind, stack, customTags) {
	    var instructions = [],
	        opener = null,
	        tail = null,
	        token = null;
	
	    tail = stack[stack.length - 1];
	
	    while (tokens.length > 0) {
	      token = tokens.shift();
	
	      if (tail && tail.tag == '<' && !(token.tag in allowedInSuper)) {
	        throw new Error('Illegal content in < super tag.');
	      }
	
	      if (Hogan.tags[token.tag] <= Hogan.tags['$'] || isOpener(token, customTags)) {
	        stack.push(token);
	        token.nodes = buildTree(tokens, token.tag, stack, customTags);
	      } else if (token.tag == '/') {
	        if (stack.length === 0) {
	          throw new Error('Closing tag without opener: /' + token.n);
	        }
	        opener = stack.pop();
	        if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) {
	          throw new Error('Nesting error: ' + opener.n + ' vs. ' + token.n);
	        }
	        opener.end = token.i;
	        return instructions;
	      } else if (token.tag == '\n') {
	        token.last = tokens.length == 0 || tokens[0].tag == '\n';
	      }
	
	      instructions.push(token);
	    }
	
	    if (stack.length > 0) {
	      throw new Error('missing closing tag: ' + stack.pop().n);
	    }
	
	    return instructions;
	  }
	
	  function isOpener(token, tags) {
	    for (var i = 0, l = tags.length; i < l; i++) {
	      if (tags[i].o == token.n) {
	        token.tag = '#';
	        return true;
	      }
	    }
	  }
	
	  function isCloser(close, open, tags) {
	    for (var i = 0, l = tags.length; i < l; i++) {
	      if (tags[i].c == close && tags[i].o == open) {
	        return true;
	      }
	    }
	  }
	
	  function stringifySubstitutions(obj) {
	    var items = [];
	    for (var key in obj) {
	      items.push('"' + esc(key) + '": function(c,p,t,i) {' + obj[key] + '}');
	    }
	    return "{ " + items.join(",") + " }";
	  }
	
	  function stringifyPartials(codeObj) {
	    var partials = [];
	    for (var key in codeObj.partials) {
	      partials.push('"' + esc(key) + '":{name:"' + esc(codeObj.partials[key].name) + '", ' + stringifyPartials(codeObj.partials[key]) + "}");
	    }
	    return "partials: {" + partials.join(",") + "}, subs: " + stringifySubstitutions(codeObj.subs);
	  }
	
	  Hogan.stringify = function (codeObj, text, options) {
	    return "{code: function (c,p,i) { " + Hogan.wrapMain(codeObj.code) + " }," + stringifyPartials(codeObj) + "}";
	  };
	
	  var serialNo = 0;
	  Hogan.generate = function (tree, text, options) {
	    serialNo = 0;
	    var context = { code: '', subs: {}, partials: {} };
	    Hogan.walk(tree, context);
	
	    if (options.asString) {
	      return this.stringify(context, text, options);
	    }
	
	    return this.makeTemplate(context, text, options);
	  };
	
	  Hogan.wrapMain = function (code) {
	    return 'var t=this;t.b(i=i||"");' + code + 'return t.fl();';
	  };
	
	  Hogan.template = Hogan.Template;
	
	  Hogan.makeTemplate = function (codeObj, text, options) {
	    var template = this.makePartials(codeObj);
	    template.code = new Function('c', 'p', 'i', this.wrapMain(codeObj.code));
	    return new this.template(template, text, this, options);
	  };
	
	  Hogan.makePartials = function (codeObj) {
	    var key,
	        template = { subs: {}, partials: codeObj.partials, name: codeObj.name };
	    for (key in template.partials) {
	      template.partials[key] = this.makePartials(template.partials[key]);
	    }
	    for (key in codeObj.subs) {
	      template.subs[key] = new Function('c', 'p', 't', 'i', codeObj.subs[key]);
	    }
	    return template;
	  };
	
	  function esc(s) {
	    return s.replace(rSlash, '\\\\').replace(rQuot, '\\\"').replace(rNewline, '\\n').replace(rCr, '\\r').replace(rLineSep, '\\u2028').replace(rParagraphSep, '\\u2029');
	  }
	
	  function chooseMethod(s) {
	    return ~s.indexOf('.') ? 'd' : 'f';
	  }
	
	  function createPartial(node, context) {
	    var prefix = "<" + (context.prefix || "");
	    var sym = prefix + node.n + serialNo++;
	    context.partials[sym] = { name: node.n, partials: {} };
	    context.code += 't.b(t.rp("' + esc(sym) + '",c,p,"' + (node.indent || '') + '"));';
	    return sym;
	  }
	
	  Hogan.codegen = {
	    '#': function _(node, context) {
	      context.code += 'if(t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),' + 'c,p,0,' + node.i + ',' + node.end + ',"' + node.otag + " " + node.ctag + '")){' + 't.rs(c,p,' + 'function(c,p,t){';
	      Hogan.walk(node.nodes, context);
	      context.code += '});c.pop();}';
	    },
	
	    '^': function _(node, context) {
	      context.code += 'if(!t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),c,p,1,0,0,"")){';
	      Hogan.walk(node.nodes, context);
	      context.code += '};';
	    },
	
	    '>': createPartial,
	    '<': function _(node, context) {
	      var ctx = { partials: {}, code: '', subs: {}, inPartial: true };
	      Hogan.walk(node.nodes, ctx);
	      var template = context.partials[createPartial(node, context)];
	      template.subs = ctx.subs;
	      template.partials = ctx.partials;
	    },
	
	    '$': function $(node, context) {
	      var ctx = { subs: {}, code: '', partials: context.partials, prefix: node.n };
	      Hogan.walk(node.nodes, ctx);
	      context.subs[node.n] = ctx.code;
	      if (!context.inPartial) {
	        context.code += 't.sub("' + esc(node.n) + '",c,p,i);';
	      }
	    },
	
	    '\n': function _(node, context) {
	      context.code += write('"\\n"' + (node.last ? '' : ' + i'));
	    },
	
	    '_v': function _v(node, context) {
	      context.code += 't.b(t.v(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
	    },
	
	    '_t': function _t(node, context) {
	      context.code += write('"' + esc(node.text) + '"');
	    },
	
	    '{': tripleStache,
	
	    '&': tripleStache
	  };
	
	  function tripleStache(node, context) {
	    context.code += 't.b(t.t(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
	  }
	
	  function write(s) {
	    return 't.b(' + s + ');';
	  }
	
	  Hogan.walk = function (nodelist, context) {
	    var func;
	    for (var i = 0, l = nodelist.length; i < l; i++) {
	      func = Hogan.codegen[nodelist[i].tag];
	      func && func(nodelist[i], context);
	    }
	    return context;
	  };
	
	  Hogan.parse = function (tokens, text, options) {
	    options = options || {};
	    return buildTree(tokens, '', [], options.sectionTags || []);
	  };
	
	  Hogan.cache = {};
	
	  Hogan.cacheKey = function (text, options) {
	    return [text, !!options.asString, !!options.disableLambda, options.delimiters, !!options.modelGet].join('||');
	  };
	
	  Hogan.compile = function (text, options) {
	    options = options || {};
	    var key = Hogan.cacheKey(text, options);
	    var template = this.cache[key];
	
	    if (template) {
	      var partials = template.partials;
	      for (var name in partials) {
	        delete partials[name].instance;
	      }
	      return template;
	    }
	
	    template = this.generate(this.parse(this.scan(text, options.delimiters), text, options), text, options);
	    return this.cache[key] = template;
	  };
	})( true ? exports : Hogan);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	/*
	 *  Copyright 2011 Twitter, Inc.
	 *  Licensed under the Apache License, Version 2.0 (the "License");
	 *  you may not use this file except in compliance with the License.
	 *  You may obtain a copy of the License at
	 *
	 *  http://www.apache.org/licenses/LICENSE-2.0
	 *
	 *  Unless required by applicable law or agreed to in writing, software
	 *  distributed under the License is distributed on an "AS IS" BASIS,
	 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 *  See the License for the specific language governing permissions and
	 *  limitations under the License.
	 */
	
	var Hogan = {};
	
	(function (Hogan) {
	  Hogan.Template = function (codeObj, text, compiler, options) {
	    codeObj = codeObj || {};
	    this.r = codeObj.code || this.r;
	    this.c = compiler;
	    this.options = options || {};
	    this.text = text || '';
	    this.partials = codeObj.partials || {};
	    this.subs = codeObj.subs || {};
	    this.buf = '';
	  };
	
	  Hogan.Template.prototype = {
	    // render: replaced by generated code.
	    r: function r(context, partials, indent) {
	      return '';
	    },
	
	    // variable escaping
	    v: hoganEscape,
	
	    // triple stache
	    t: coerceToString,
	
	    render: function render(context, partials, indent) {
	      return this.ri([context], partials || {}, indent);
	    },
	
	    // render internal -- a hook for overrides that catches partials too
	    ri: function ri(context, partials, indent) {
	      return this.r(context, partials, indent);
	    },
	
	    // ensurePartial
	    ep: function ep(symbol, partials) {
	      var partial = this.partials[symbol];
	
	      // check to see that if we've instantiated this partial before
	      var template = partials[partial.name];
	      if (partial.instance && partial.base == template) {
	        return partial.instance;
	      }
	
	      if (typeof template == 'string') {
	        if (!this.c) {
	          throw new Error("No compiler available.");
	        }
	        template = this.c.compile(template, this.options);
	      }
	
	      if (!template) {
	        return null;
	      }
	
	      // We use this to check whether the partials dictionary has changed
	      this.partials[symbol].base = template;
	
	      if (partial.subs) {
	        // Make sure we consider parent template now
	        if (!partials.stackText) partials.stackText = {};
	        for (key in partial.subs) {
	          if (!partials.stackText[key]) {
	            partials.stackText[key] = this.activeSub !== undefined && partials.stackText[this.activeSub] ? partials.stackText[this.activeSub] : this.text;
	          }
	        }
	        template = createSpecializedPartial(template, partial.subs, partial.partials, this.stackSubs, this.stackPartials, partials.stackText);
	      }
	      this.partials[symbol].instance = template;
	
	      return template;
	    },
	
	    // tries to find a partial in the current scope and render it
	    rp: function rp(symbol, context, partials, indent) {
	      var partial = this.ep(symbol, partials);
	      if (!partial) {
	        return '';
	      }
	
	      return partial.ri(context, partials, indent);
	    },
	
	    // render a section
	    rs: function rs(context, partials, section) {
	      var tail = context[context.length - 1];
	
	      if (!isArray(tail)) {
	        section(context, partials, this);
	        return;
	      }
	
	      for (var i = 0; i < tail.length; i++) {
	        context.push(tail[i]);
	        section(context, partials, this);
	        context.pop();
	      }
	    },
	
	    // maybe start a section
	    s: function s(val, ctx, partials, inverted, start, end, tags) {
	      var pass;
	
	      if (isArray(val) && val.length === 0) {
	        return false;
	      }
	
	      if (typeof val == 'function') {
	        val = this.ms(val, ctx, partials, inverted, start, end, tags);
	      }
	
	      pass = !!val;
	
	      if (!inverted && pass && ctx) {
	        ctx.push((typeof val === 'undefined' ? 'undefined' : _typeof(val)) == 'object' ? val : ctx[ctx.length - 1]);
	      }
	
	      return pass;
	    },
	
	    // find values with dotted names
	    d: function d(key, ctx, partials, returnFound) {
	      var found,
	          names = key.split('.'),
	          val = this.f(names[0], ctx, partials, returnFound),
	          doModelGet = this.options.modelGet,
	          cx = null;
	
	      if (key === '.' && isArray(ctx[ctx.length - 2])) {
	        val = ctx[ctx.length - 1];
	      } else {
	        for (var i = 1; i < names.length; i++) {
	          found = findInScope(names[i], val, doModelGet);
	          if (found !== undefined) {
	            cx = val;
	            val = found;
	          } else {
	            val = '';
	          }
	        }
	      }
	
	      if (returnFound && !val) {
	        return false;
	      }
	
	      if (!returnFound && typeof val == 'function') {
	        ctx.push(cx);
	        val = this.mv(val, ctx, partials);
	        ctx.pop();
	      }
	
	      return val;
	    },
	
	    // find values with normal names
	    f: function f(key, ctx, partials, returnFound) {
	      var val = false,
	          v = null,
	          found = false,
	          doModelGet = this.options.modelGet;
	
	      for (var i = ctx.length - 1; i >= 0; i--) {
	        v = ctx[i];
	        val = findInScope(key, v, doModelGet);
	        if (val !== undefined) {
	          found = true;
	          break;
	        }
	      }
	
	      if (!found) {
	        return returnFound ? false : "";
	      }
	
	      if (!returnFound && typeof val == 'function') {
	        val = this.mv(val, ctx, partials);
	      }
	
	      return val;
	    },
	
	    // higher order templates
	    ls: function ls(func, cx, partials, text, tags) {
	      var oldTags = this.options.delimiters;
	
	      this.options.delimiters = tags;
	      this.b(this.ct(coerceToString(func.call(cx, text)), cx, partials));
	      this.options.delimiters = oldTags;
	
	      return false;
	    },
	
	    // compile text
	    ct: function ct(text, cx, partials) {
	      if (this.options.disableLambda) {
	        throw new Error('Lambda features disabled.');
	      }
	      return this.c.compile(text, this.options).render(cx, partials);
	    },
	
	    // template result buffering
	    b: function b(s) {
	      this.buf += s;
	    },
	
	    fl: function fl() {
	      var r = this.buf;this.buf = '';return r;
	    },
	
	    // method replace section
	    ms: function ms(func, ctx, partials, inverted, start, end, tags) {
	      var textSource,
	          cx = ctx[ctx.length - 1],
	          result = func.call(cx);
	
	      if (typeof result == 'function') {
	        if (inverted) {
	          return true;
	        } else {
	          textSource = this.activeSub && this.subsText && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text;
	          return this.ls(result, cx, partials, textSource.substring(start, end), tags);
	        }
	      }
	
	      return result;
	    },
	
	    // method replace variable
	    mv: function mv(func, ctx, partials) {
	      var cx = ctx[ctx.length - 1];
	      var result = func.call(cx);
	
	      if (typeof result == 'function') {
	        return this.ct(coerceToString(result.call(cx)), cx, partials);
	      }
	
	      return result;
	    },
	
	    sub: function sub(name, context, partials, indent) {
	      var f = this.subs[name];
	      if (f) {
	        this.activeSub = name;
	        f(context, partials, this, indent);
	        this.activeSub = false;
	      }
	    }
	
	  };
	
	  //Find a key in an object
	  function findInScope(key, scope, doModelGet) {
	    var val;
	
	    if (scope && (typeof scope === 'undefined' ? 'undefined' : _typeof(scope)) == 'object') {
	
	      if (scope[key] !== undefined) {
	        val = scope[key];
	
	        // try lookup with get for backbone or similar model data
	      } else if (doModelGet && scope.get && typeof scope.get == 'function') {
	          val = scope.get(key);
	        }
	    }
	
	    return val;
	  }
	
	  function createSpecializedPartial(instance, subs, partials, stackSubs, stackPartials, stackText) {
	    function PartialTemplate() {};
	    PartialTemplate.prototype = instance;
	    function Substitutions() {};
	    Substitutions.prototype = instance.subs;
	    var key;
	    var partial = new PartialTemplate();
	    partial.subs = new Substitutions();
	    partial.subsText = {}; //hehe. substext.
	    partial.buf = '';
	
	    stackSubs = stackSubs || {};
	    partial.stackSubs = stackSubs;
	    partial.subsText = stackText;
	    for (key in subs) {
	      if (!stackSubs[key]) stackSubs[key] = subs[key];
	    }
	    for (key in stackSubs) {
	      partial.subs[key] = stackSubs[key];
	    }
	
	    stackPartials = stackPartials || {};
	    partial.stackPartials = stackPartials;
	    for (key in partials) {
	      if (!stackPartials[key]) stackPartials[key] = partials[key];
	    }
	    for (key in stackPartials) {
	      partial.partials[key] = stackPartials[key];
	    }
	
	    return partial;
	  }
	
	  var rAmp = /&/g,
	      rLt = /</g,
	      rGt = />/g,
	      rApos = /\'/g,
	      rQuot = /\"/g,
	      hChars = /[&<>\"\']/;
	
	  function coerceToString(val) {
	    return String(val === null || val === undefined ? '' : val);
	  }
	
	  function hoganEscape(str) {
	    str = coerceToString(str);
	    return hChars.test(str) ? str.replace(rAmp, '&amp;').replace(rLt, '&lt;').replace(rGt, '&gt;').replace(rApos, '&#39;').replace(rQuot, '&quot;') : str;
	  }
	
	  var isArray = Array.isArray || function (a) {
	    return Object.prototype.toString.call(a) === '[object Array]';
	  };
	})( true ? exports : Hogan);

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(9);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<h3 class=\"text-muted\">Select Project</h3>\r");t.b("\n" + i);t.b("<div class=\"list-group\">\r");t.b("\n" + i);if(t.s(t.f("projects",c,p,1),c,p,0,87,170,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <a href=\"#");t.b(t.v(t.f("name",c,p,0)));t.b("\" class=\"list-group-item project-button\">");t.b(t.v(t.f("name",c,p,0)));t.b("</a>\r");t.b("\n" + i);});c.pop();}t.b("    <a href=\"#\" class=\"list-group-item add-new-project\"><span class=\"glyphicon glyphicon-plus-sign\"></span>Add new</a>\r");t.b("\n" + i);t.b("</div>\r");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<h3 class=\"text-muted\">Select Project</h3>\r\n<div class=\"list-group\">\r\n    {{#projects}}\r\n    <a href=\"#{{name}}\" class=\"list-group-item project-button\">{{name}}</a>\r\n    {{/projects}}  \r\n    <a href=\"#\" class=\"list-group-item add-new-project\"><span class=\"glyphicon glyphicon-plus-sign\"></span>Add new</a>\r\n</div>\r\n", H);return T.render.apply(T, arguments); };

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(9);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<ul id=\"breadcrumb\">\r");t.b("\n" + i);t.b("    <li><a href=\"#\"><span class=\"icon glyphicon glyphicon-home\"> </span>Home</a></li>\r");t.b("\n" + i);if(t.s(t.f("route",c,p,1),c,p,0,123,219,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <li><a href=\"#");t.b(t.v(t.f("url",c,p,0)));t.b("\"><span class=\"icon icon-beaker\"> </span> ");t.b(t.v(t.f("text",c,p,0)));t.b("</a></li>\r");t.b("\n" + i);});c.pop();}t.b("</ul>");return t.fl(); },partials: {}, subs: {  }}, "<ul id=\"breadcrumb\">\r\n    <li><a href=\"#\"><span class=\"icon glyphicon glyphicon-home\"> </span>Home</a></li>\r\n    {{#route}}\r\n        <li><a href=\"#{{url}}\"><span class=\"icon icon-beaker\"> </span> {{text}}</a></li>\r\n    {{/route}}  \r\n</ul>", H);return T.render.apply(T, arguments); };

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ProjectListView = undefined;
	
	var _template = __webpack_require__(7);
	
	var ProjectListView = exports.ProjectListView = _template.TemplateView.extend({
	    template: 'project-list',
	    events: {
	        "click .add-new-project": "addNewProject",
	        "click .project-button": "showProject"
	    },
	    getContext: function getContext() {
	        return {
	            projects: this.collection ? this.collection.getContext() : {}
	        };
	    },
	
	    addNewProject: function addNewProject() {
	        console.log("Add new project");
	        return false;
	    },
	    showProject: function showProject() {
	        console.log("showProject");
	        return false;
	    }
	});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.BreadcrumbView = undefined;
	
	var _template = __webpack_require__(7);
	
	var _dispatcher = __webpack_require__(2);
	
	var BreadcrumbView = exports.BreadcrumbView = _template.TemplateView.extend({
	    template: 'breadcrumb',
	    getContext: function getContext() {
	        return {
	            route: this.model ? this.model.get('route') : {}
	        };
	    },
	    events: {
	        "click #breadcrumb": 'tester'
	    },
	    tester: function tester(e) {
	        this.trigger('test', e);
	        return false;
	    }
	});

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Breadcrumb = exports.Breadcrumb = Backbone.Model.extend({
	    defaults: {
	        route: []
	    }
	});

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map