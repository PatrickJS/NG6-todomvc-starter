webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(2);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	__webpack_require__(4);
	
	var _componentsComponents = __webpack_require__(5);
	
	var _componentsComponents2 = _interopRequireDefault(_componentsComponents);
	
	var _servicesServices = __webpack_require__(18);
	
	var _servicesServices2 = _interopRequireDefault(_servicesServices);
	
	__webpack_require__(21);
	
	var _appComponent = __webpack_require__(23);
	
	var _appComponent2 = _interopRequireDefault(_appComponent);
	
	_angular2['default'].module('app', [_componentsComponents2['default'].name, _servicesServices2['default'].name]).component('app', _appComponent2['default']);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	/*! angular-component v0.0.1 | (c) 2015 @toddmotto | https://github.com/toddmotto/angular-component */
	!function(){function t(t,n){if(n&&"string"==typeof n)return n;if("string"==typeof t){var e=/^(\S+)(\s+as\s+(\w+))?$/.exec(t);if(e)return e[3]}}function n(){function n(n,e){function o(r){function o(t){return angular.isFunction(t)?function(n,e){return r.invoke(t,this,{$element:n,$attrs:e})}:t}return{controller:e.controller||angular.noop,controllerAs:t(e.controller)||e.controllerAs||n,template:o(e.template||e.templateUrl?e.template:""),templateUrl:o(e.templateUrl),transclude:void 0===e.transclude?!0:e.transclude,scope:e.isolate===!1?!0:e.bindings,bindToController:!!e.bindings,restrict:e.restrict||"E"}}return e.$canActivate&&(o.$canActivate=e.$canActivate),e.$routeConfig&&(o.$routeConfig=e.$routeConfig),o.$inject=["$injector"],r.directive(n,o)}var r=e.apply(this,arguments);return r.component=n,r}var e=angular.module;angular.module=n}();

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(2);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _todoTextInputTodoTextInput = __webpack_require__(6);
	
	var _todoTextInputTodoTextInput2 = _interopRequireDefault(_todoTextInputTodoTextInput);
	
	var _todoHeaderComponent = __webpack_require__(14);
	
	var _todoHeaderComponent2 = _interopRequireDefault(_todoHeaderComponent);
	
	var _todoListComponent = __webpack_require__(15);
	
	var _todoListComponent2 = _interopRequireDefault(_todoListComponent);
	
	var _todoItemComponent = __webpack_require__(16);
	
	var _todoItemComponent2 = _interopRequireDefault(_todoItemComponent);
	
	var _todoFooterComponent = __webpack_require__(17);
	
	var _todoFooterComponent2 = _interopRequireDefault(_todoFooterComponent);
	
	exports['default'] = _angular2['default'].module('app.components', [_todoTextInputTodoTextInput2['default'].name]).component('todoHeader', _todoHeaderComponent2['default']).component('todoList', _todoListComponent2['default']).component('todoItem', _todoItemComponent2['default']).component('todoFooter', _todoFooterComponent2['default']);
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(2);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _todoTextInputComponent = __webpack_require__(7);
	
	var _todoTextInputComponent2 = _interopRequireDefault(_todoTextInputComponent);
	
	var _autofocusDirective = __webpack_require__(12);
	
	var _autofocusDirective2 = _interopRequireDefault(_autofocusDirective);
	
	var _escapeDirective = __webpack_require__(13);
	
	var _escapeDirective2 = _interopRequireDefault(_escapeDirective);
	
	exports['default'] = _angular2['default'].module('app.todoTextInput', []).component('todoTextInput', _todoTextInputComponent2['default']).directive({
	  autofocus: _autofocusDirective2['default'], onEscape: _escapeDirective2['default']
	});
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	__webpack_require__(8);
	
	var TodoTextInputController = (function () {
	  function TodoTextInputController() {
	    _classCallCheck(this, TodoTextInputController);
	
	    this.text = this.value || '';
	  }
	
	  _createClass(TodoTextInputController, [{
	    key: 'save',
	    value: function save() {
	      this.onSave({
	        task: this.text
	      });
	
	      this.text = '';
	    }
	  }, {
	    key: 'onEscape',
	    value: function onEscape() {
	      this.onSave({
	        task: this.value
	      });
	    }
	  }]);
	
	  return TodoTextInputController;
	})();
	
	exports['default'] = {
	  bindings: {
	    placeholder: '@',
	    value: '@',
	    onSave: '&'
	  },
	  template: '\n    <form ng-submit="todoTextInput.save()">\n      <input  class="new-todo" autofocus=""\n              on-escape="todoTextInput.onEscape()"\n              ng-model="todoTextInput.text"\n              placeholder="{{todoTextInput.placeholder}}" />\n    </form>\n  ',
	  controller: TodoTextInputController
	};
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./todoTextInput.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./todoTextInput.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports
	
	
	// module
	exports.push([module.id, ".todo-list li.editing .new-todo {\n  padding: 0;\n}\n", ""]);
	
	// exports


/***/ },
/* 10 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports["default"] = function () {
	
	  return function (scope, el) {
	    setTimeout(function () {
	      el[0].focus();
	    }, 0);
	  };
	};
	
	module.exports = exports["default"];

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function () {
	
	  var ESCAPE_KEY = 27;
	
	  return function (scope, el, attrs) {
	    el.bind('keydown', function (event) {
	      if (event.keyCode === ESCAPE_KEY) {
	        scope.$apply(attrs.onEscape);
	      }
	    });
	
	    scope.$on('$destroy', function () {
	      el.unbind('keydown');
	    });
	  };
	};
	
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TodoHeaderController = (function () {
	  function TodoHeaderController() {
	    "ngInject";
	
	    _classCallCheck(this, TodoHeaderController);
	  }
	
	  _createClass(TodoHeaderController, [{
	    key: "onSave",
	    value: function onSave(task) {
	      if (!task) {
	        return;
	      }
	
	      this.todos.add(task);
	    }
	  }]);
	
	  return TodoHeaderController;
	})();
	
	exports["default"] = {
	  bindings: {
	    todos: '='
	  },
	  template: "\n    <section class=\"header\">\n      <h1>todos</h1>\n      <header class=\"header-input\">\n        <todo-text-input\n          placeholder=\"What needs to get done?\"\n          on-save=\"todoHeader.onSave(task)\">\n        </todo-text-input>\n      </header>\n    </section>\n  ",
	  controller: TodoHeaderController
	};
	module.exports = exports["default"];

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TodoListController = (function () {
	  TodoListController.$inject = ["todoManager"];
	  function TodoListController(todoManager) {
	    "ngInject";
	
	    _classCallCheck(this, TodoListController);
	
	    this.manager = todoManager;
	  }
	
	  _createClass(TodoListController, [{
	    key: "toggleCompleteAll",
	
	    // do nothing?
	    value: function toggleCompleteAll() {
	      this.manager.toggleAll();
	    }
	  }, {
	    key: "allChecked",
	    get: function get() {
	      return this.todos.todos.reduce(function (result, task) {
	        return result && task.complete;
	      }, true);
	    },
	    set: function set(val) {}
	  }]);
	
	  return TodoListController;
	})();
	
	exports["default"] = {
	  bindings: {
	    todos: '='
	  },
	  template: "\n     <section class=\"main\">\n      <input class=\"toggle-all\"\n             type=\"checkbox\"\n             ng-model=\"todoList.allChecked\"\n             ng-model-options=\"{getterSetter: true}\"\n             ng-change=\"todoList.toggleCompleteAll()\"\n             ng-show=\"todoList.todos.list.length\" />\n      <label for=\"toggle-all\">Mark all as complete</label>\n      <ul class=\"todo-list\">\n        <todo-item todo=\"todo\" ng-repeat=\"todo in todoList.todos.list\"></todo-item>\n      </ul>\n    </section>\n  ",
	  controller: TodoListController
	};
	module.exports = exports["default"];

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TodoItemController = (function () {
	  TodoItemController.$inject = ["todoManager"];
	  function TodoItemController(todoManager) {
	    "ngInject";
	
	    _classCallCheck(this, TodoItemController);
	
	    this.manager = todoManager;
	  }
	
	  _createClass(TodoItemController, [{
	    key: "onDestroyClick",
	    value: function onDestroyClick() {
	      this.manager.remove(this.task);
	    }
	  }, {
	    key: "onSave",
	    value: function onSave(description) {
	      if (!description) {
	        this.manager.remove(this.task);
	      } else {
	        this.task.description = description;
	      }
	
	      this.isEditing = false;
	    }
	  }]);
	
	  return TodoItemController;
	})();
	
	exports["default"] = {
	  bindings: {
	    task: '=todo'
	  },
	  template: "\n    <li ng-class=\"{'completed': todoItem.task.complete, 'editing': todoItem.isEditing}\">\n      <div class=\"view\" ng-show=\"!todoItem.isEditing\">\n        <input\n          class=\"toggle\"\n          type=\"checkbox\"\n          ng-model=\"todoItem.task.complete\"\n          ng-model-options=\"{getterSetter: true}\">\n        </input>\n        <label ng-dblclick=\"todoItem.isEditing = true\" class=\"todo-text\" >{{todoItem.task.description}}</label>\n        <button class=\"destroy\" ng-click=\"todoItem.onDestroyClick()\"></button>\n      </div>\n      <div class=\"edit-container\" ng-if=\"todoItem.isEditing\">\n        <todo-text-input\n          class=\"edit\"\n          on-save=\"todoItem.onSave(task)\"\n          value=\"{{todoItem.task.description}}\">\n        </todo-text-input>\n      </div>\n    </li>\n  ",
	  controller: TodoItemController
	};
	module.exports = exports["default"];

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TodoFooterController = (function () {
	  TodoFooterController.$inject = ["todoManager"];
	  function TodoFooterController(todoManager) {
	    "ngInject";
	
	    _classCallCheck(this, TodoFooterController);
	
	    this.todos = todoManager;
	    this.filterState = 'all';
	  }
	
	  _createClass(TodoFooterController, [{
	    key: "filter",
	    value: function filter(state) {
	      this.filterState = state;
	      this.todos.filter(this.filterState);
	    }
	  }, {
	    key: "clearCompleted",
	    value: function clearCompleted() {
	      this.todos.clearCompleted();
	    }
	  }]);
	
	  return TodoFooterController;
	})();
	
	exports["default"] = {
	  bindings: {},
	  template: "\n    <footer class=\"footer\">\n      <span class=\"todo-count\">\n        {{todoFooter.todos.notCompletedCount()}} {{todoFooter.todos.notCompletedCount() == 1 ? 'todo' : 'todos'}} left\n      </span>\n      <ul class=\"filters\">\n        <li><a href ng-class=\"{selected: todoFooter.filterState == 'all'}\" ng-click=\"todoFooter.filter('all')\">All</a></li>\n        <li><a href ng-class=\"{selected: todoFooter.filterState == 'active'}\" ng-click=\"todoFooter.filter('active')\">Active</a></li>\n        <li><a href ng-class=\"{selected: todoFooter.filterState == 'completed'}\" ng-click=\"todoFooter.filter('completed')\">Completed</a></li>\n      </ul>\n      <button\n        class=\"clear-completed\"\n        ng-click=\"todoFooter.clearCompleted()\"\n        ng-show=\"todoFooter.todos.completedCount() >= 1\">\n        Clear Completed ({{ todoFooter.todos.completedCount() }})\n      </button>\n    </footer>\n  ",
	  controller: TodoFooterController
	};
	module.exports = exports["default"];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(2);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _todoManager = __webpack_require__(19);
	
	var _todoManager2 = _interopRequireDefault(_todoManager);
	
	exports['default'] = _angular2['default'].module('app.services', []).service({
	  todoManager: _todoManager2['default']
	});
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _cuid = __webpack_require__(20);
	
	var _cuid2 = _interopRequireDefault(_cuid);
	
	//import 'core-js/modules/es6.array.find';
	
	var TodoManager = (function () {
	  function TodoManager() {
	    _classCallCheck(this, TodoManager);
	
	    this.filterState = 'all';
	    this.todos = this.list = [];
	    this.showCompleted = undefined;
	  }
	
	  _createClass(TodoManager, [{
	    key: 'add',
	    value: function add(description) {
	      var task = new Task(description);
	      this.todos.push(task);
	      this.$refreshList();
	
	      return task;
	    }
	  }, {
	    key: 'toggleAll',
	    value: function toggleAll() {
	      var complete = this.notCompletedCount() !== 0;
	      this.todos = this.todos.map(function (task) {
	        task.complete = !!complete;
	
	        return task;
	      });
	
	      this.$refreshList();
	    }
	  }, {
	    key: 'notCompletedCount',
	    value: function notCompletedCount() {
	      return this.todos.filter(function (item) {
	        return !item.complete;
	      }).length;
	    }
	  }, {
	    key: 'completedCount',
	    value: function completedCount() {
	      return this.todos.filter(function (item) {
	        return item.complete;
	      }).length;
	    }
	  }, {
	    key: 'remove',
	    value: function remove(item) {
	      this.todos = this.todos.filter(function (todo) {
	        return todo !== item;
	      });
	      this.$refreshList();
	    }
	  }, {
	    key: 'clearCompleted',
	    value: function clearCompleted() {
	      this.todos = this.todos.filter(function (todo) {
	        return !todo.complete;
	      });
	      this.$refreshList();
	    }
	  }, {
	    key: 'filter',
	    value: function filter(filterState) {
	      this.filterState = filterState;
	      var showAll = 'all' === filterState;
	      var showCompleted = 'completed' === filterState;
	
	      this.list = this.todos.filter(function (item) {
	        return showAll || showCompleted === item.complete;
	      });
	    }
	  }, {
	    key: '$refreshList',
	    value: function $refreshList() {
	      this.filter(this.filterState);
	    }
	  }]);
	
	  return TodoManager;
	})();
	
	exports['default'] = TodoManager;
	
	var Task = (function () {
	  function Task(description) {
	    _classCallCheck(this, Task);
	
	    this.id = (0, _cuid2['default'])();
	    this.description = description;
	    this.isCompleted = false;
	  }
	
	  _createClass(Task, [{
	    key: 'complete',
	    get: function get() {
	      return this.isCompleted;
	    },
	    set: function set(val) {
	      this.isCompleted = !!val;
	    }
	  }]);
	
	  return Task;
	})();
	
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * cuid.js
	 * Collision-resistant UID generator for browsers and node.
	 * Sequential for fast db lookups and recency sorting.
	 * Safe for element IDs and server-side lookups.
	 *
	 * Extracted from CLCTR
	 *
	 * Copyright (c) Eric Elliott 2012
	 * MIT License
	 */
	
	/*global window, navigator, document, require, process, module */
	(function (app) {
	  'use strict';
	  var namespace = 'cuid',
	    c = 0,
	    blockSize = 4,
	    base = 36,
	    discreteValues = Math.pow(base, blockSize),
	
	    pad = function pad(num, size) {
	      var s = "000000000" + num;
	      return s.substr(s.length-size);
	    },
	
	    randomBlock = function randomBlock() {
	      return pad((Math.random() *
	            discreteValues << 0)
	            .toString(base), blockSize);
	    },
	
	    safeCounter = function () {
	      c = (c < discreteValues) ? c : 0;
	      c++; // this is not subliminal
	      return c - 1;
	    },
	
	    api = function cuid() {
	      // Starting with a lowercase letter makes
	      // it HTML element ID friendly.
	      var letter = 'c', // hard-coded allows for sequential access
	
	        // timestamp
	        // warning: this exposes the exact date and time
	        // that the uid was created.
	        timestamp = (new Date().getTime()).toString(base),
	
	        // Prevent same-machine collisions.
	        counter,
	
	        // A few chars to generate distinct ids for different
	        // clients (so different computers are far less
	        // likely to generate the same id)
	        fingerprint = api.fingerprint(),
	
	        // Grab some more chars from Math.random()
	        random = randomBlock() + randomBlock();
	
	        counter = pad(safeCounter().toString(base), blockSize);
	
	      return  (letter + timestamp + counter + fingerprint + random);
	    };
	
	  api.slug = function slug() {
	    var date = new Date().getTime().toString(36),
	      counter,
	      print = api.fingerprint().slice(0,1) +
	        api.fingerprint().slice(-1),
	      random = randomBlock().slice(-2);
	
	      counter = safeCounter().toString(36).slice(-4);
	
	    return date.slice(-2) +
	      counter + print + random;
	  };
	
	  api.globalCount = function globalCount() {
	    // We want to cache the results of this
	    var cache = (function calc() {
	        var i,
	          count = 0;
	
	        for (i in window) {
	          count++;
	        }
	
	        return count;
	      }());
	
	    api.globalCount = function () { return cache; };
	    return cache;
	  };
	
	  api.fingerprint = function browserPrint() {
	    return pad((navigator.mimeTypes.length +
	      navigator.userAgent.length).toString(36) +
	      api.globalCount().toString(36), 4);
	  };
	
	  // don't change anything from here down.
	  if (app.register) {
	    app.register(namespace, api);
	  } else if (true) {
	    module.exports = api;
	  } else {
	    app[namespace] = api;
	  }
	
	}(this.applitude || this));


/***/ },
/* 21 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 22 */,
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	__webpack_require__(24);
	
	var TodoAppController = function TodoAppController(todoManager) {
	  "ngInject";
	
	  _classCallCheck(this, TodoAppController);
	
	  this.todos = todoManager;
	};
	TodoAppController.$inject = ["todoManager"];
	
	exports["default"] = {
	  template: "\n      <section class=\"todoapp\">\n        <todo-header todos=\"app.todos\"></todo-header>\n        <todo-list todos=\"app.todos\"></todo-list>\n        <todo-footer ng-if=\"app.todos.todos.length\" todos=\"app.todos\"></todo-footer>\n      </section>\n  ",
	  controller: TodoAppController
	};
	module.exports = exports["default"];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(25);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./app.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./app.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports
	
	
	// module
	exports.push([module.id, "html,\nbody {\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbutton {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tbackground: none;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tcolor: inherit;\n\t-webkit-appearance: none;\n\tappearance: none;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-font-smoothing: antialiased;\n\tfont-smoothing: antialiased;\n}\n\nbody {\n\tfont: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\tline-height: 1.4em;\n\tbackground: #f5f5f5;\n\tcolor: #4d4d4d;\n\tmin-width: 230px;\n\tmax-width: 550px;\n\tmargin: 0 auto;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-font-smoothing: antialiased;\n\tfont-smoothing: antialiased;\n\tfont-weight: 300;\n}\n\nbutton,\ninput[type=\"checkbox\"] {\n\toutline: none;\n}\n\n.hidden {\n\tdisplay: none;\n}\n\n.todoapp {\n\tbackground: #fff;\n\tmargin: 130px 0 40px 0;\n\tposition: relative;\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\n\t            0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n\n.todoapp input::-webkit-input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n\n.todoapp input::-moz-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n\n.todoapp input::input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n\n.todoapp h1 {\n\tposition: absolute;\n\ttop: -155px;\n\twidth: 100%;\n\tfont-size: 100px;\n\tfont-weight: 100;\n\ttext-align: center;\n\tcolor: rgba(175, 47, 47, 0.15);\n\t-webkit-text-rendering: optimizeLegibility;\n\t-moz-text-rendering: optimizeLegibility;\n\ttext-rendering: optimizeLegibility;\n}\n\n.new-todo,\n.edit {\n\tposition: relative;\n\tmargin: 0;\n\twidth: 100%;\n\tfont-size: 24px;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tline-height: 1.4em;\n\tborder: 0;\n\toutline: none;\n\tcolor: inherit;\n\tpadding: 6px;\n\tborder: 1px solid #999;\n\tbox-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n\tbox-sizing: border-box;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-font-smoothing: antialiased;\n\tfont-smoothing: antialiased;\n}\n\n.new-todo {\n\tpadding: 16px 16px 16px 60px;\n\tborder: none;\n\tbackground: rgba(0, 0, 0, 0.003);\n\tbox-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\n}\n\n.main {\n\tposition: relative;\n\tz-index: 2;\n\tborder-top: 1px solid #e6e6e6;\n}\n\nlabel[for='toggle-all'] {\n\tdisplay: none;\n}\n\n.toggle-all {\n\tposition: absolute;\n\ttop: -55px;\n\tleft: -12px;\n\twidth: 60px;\n\theight: 34px;\n\ttext-align: center;\n\tborder: none; /* Mobile Safari */\n}\n\n.toggle-all:before {\n\tcontent: '\\276F';\n\tfont-size: 22px;\n\tcolor: #e6e6e6;\n\tpadding: 10px 27px 10px 27px;\n}\n\n.toggle-all:checked:before {\n\tcolor: #737373;\n}\n\n.todo-list {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n}\n\n.todo-list li {\n\tposition: relative;\n\tfont-size: 24px;\n\tborder-bottom: 1px solid #ededed;\n}\n\n.todo-list li:last-child {\n\tborder-bottom: none;\n}\n\n.todo-list li.editing {\n\tborder-bottom: none;\n\tpadding: 0;\n}\n\n.todo-list li.editing .edit {\n\tdisplay: block;\n\twidth: 506px;\n\tpadding: 13px 17px 12px 17px;\n\tmargin: 0 0 0 43px;\n}\n\n.todo-list li.editing .view {\n\tdisplay: none;\n}\n\n.todo-list li .toggle {\n\ttext-align: center;\n\twidth: 40px;\n\t/* auto, since non-WebKit browsers doesn't support input styling */\n\theight: auto;\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tmargin: auto 0;\n\tborder: none; /* Mobile Safari */\n\t-webkit-appearance: none;\n\tappearance: none;\n}\n\n.todo-list li .toggle:after {\n\tcontent: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#ededed\" stroke-width=\"3\"/></svg>');\n}\n\n.todo-list li .toggle:checked:after {\n\tcontent: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#bddad5\" stroke-width=\"3\"/><path fill=\"#5dc2af\" d=\"M72 25L42 71 27 56l-4 4 20 20 34-52z\"/></svg>');\n}\n\n.todo-list li label {\n\twhite-space: pre-line;\n\tword-break: break-all;\n\tpadding: 15px 60px 15px 15px;\n\tmargin-left: 45px;\n\tdisplay: block;\n\tline-height: 1.2;\n\ttransition: color 0.4s;\n}\n\n.todo-list li.completed label {\n\tcolor: #d9d9d9;\n\ttext-decoration: line-through;\n}\n\n.todo-list li .destroy {\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 0;\n\tright: 10px;\n\tbottom: 0;\n\twidth: 40px;\n\theight: 40px;\n\tmargin: auto 0;\n\tfont-size: 30px;\n\tcolor: #cc9a9a;\n\tmargin-bottom: 11px;\n\ttransition: color 0.2s ease-out;\n}\n\n.todo-list li .destroy:hover {\n\tcolor: #af5b5e;\n}\n\n.todo-list li .destroy:after {\n\tcontent: '\\D7';\n}\n\n.todo-list li:hover .destroy {\n\tdisplay: block;\n}\n\n.todo-list li .edit {\n\tdisplay: none;\n}\n\n.todo-list li.editing:last-child {\n\tmargin-bottom: -1px;\n}\n\n.footer {\n\tcolor: #777;\n\tpadding: 10px 15px;\n\theight: 20px;\n\ttext-align: center;\n\tborder-top: 1px solid #e6e6e6;\n}\n\n.footer:before {\n\tcontent: '';\n\tposition: absolute;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\theight: 50px;\n\toverflow: hidden;\n\tbox-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\n\t            0 8px 0 -3px #f6f6f6,\n\t            0 9px 1px -3px rgba(0, 0, 0, 0.2),\n\t            0 16px 0 -6px #f6f6f6,\n\t            0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n\n.todo-count {\n\tfloat: left;\n\ttext-align: left;\n}\n\n.todo-count strong {\n\tfont-weight: 300;\n}\n\n.filters {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n\tposition: absolute;\n\tright: 0;\n\tleft: 0;\n}\n\n.filters li {\n\tdisplay: inline;\n}\n\n.filters li a {\n\tcolor: inherit;\n\tmargin: 3px;\n\tpadding: 3px 7px;\n\ttext-decoration: none;\n\tborder: 1px solid transparent;\n\tborder-radius: 3px;\n}\n\n.filters li a.selected,\n.filters li a:hover {\n\tborder-color: rgba(175, 47, 47, 0.1);\n}\n\n.filters li a.selected {\n\tborder-color: rgba(175, 47, 47, 0.2);\n}\n\n.clear-completed,\nhtml .clear-completed:active {\n\tfloat: right;\n\tposition: relative;\n\tline-height: 20px;\n\ttext-decoration: none;\n\tcursor: pointer;\n}\n\n.clear-completed:hover {\n\ttext-decoration: underline;\n}\n\n.info {\n\tmargin: 65px auto 0;\n\tcolor: #bfbfbf;\n\tfont-size: 10px;\n\ttext-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n\ttext-align: center;\n}\n\n.info p {\n\tline-height: 1;\n}\n\n.info a {\n\tcolor: inherit;\n\ttext-decoration: none;\n\tfont-weight: 400;\n}\n\n.info a:hover {\n\ttext-decoration: underline;\n}\n\n/*\n\tHack to remove background from Mobile Safari.\n\tCan't use it globally since it destroys checkboxes in Firefox\n*/\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n\t.toggle-all,\n\t.todo-list li .toggle {\n\t\tbackground: none;\n\t}\n\n\t.todo-list li .toggle {\n\t\theight: 40px;\n\t}\n\n\t.toggle-all {\n\t\t-webkit-transform: rotate(90deg);\n\t\ttransform: rotate(90deg);\n\t\t-webkit-appearance: none;\n\t\tappearance: none;\n\t}\n}\n\n@media (max-width: 430px) {\n\t.footer {\n\t\theight: 50px;\n\t}\n\n\t.filters {\n\t\tbottom: 10px;\n\t}\n}\n\n.todo-list li.editing .new-todo {\n  padding: 0;\n}\n", ""]);
	
	// exports


/***/ }
]);
//# sourceMappingURL=app.js.map