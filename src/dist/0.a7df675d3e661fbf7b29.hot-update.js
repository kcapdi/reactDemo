webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(2, function() {
				var newContent = __webpack_require__(2);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "body {\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  background-image: url(" + __webpack_require__(4) + ");\n  background-size: cover;\n}\n\n.header {\n  margin-top: 20px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 15px;\n}\n\n.header .social-media a {\n  color: #ffffff;\n  font-size: 16px;\n  border-radius: 50%;\n  padding: 10px;\n  margin: 0 3px;\n}\n\n.header .social-media a:nth-child(1) {\n  background: #265073;\n}\n\n.header .social-media a:nth-child(2) {\n  background: #16baf0;\n}\n\n.header .social-media a:nth-child(3) {\n  background: #da273d;\n}\n\n.header .social-media a:nth-child(4) {\n  background: #4caaf0;\n}\n\n.header .social-media a:nth-child(5) {\n  background: #ff7f13;\n}\n\n.logo img {\n  max-width: 300px;\n  width: 100%;\n}\n\n.banner {\n  position: absolute;\n  left: 0;\n  right: 0;\n  background: url(" + __webpack_require__(6) + ") no-repeat center center;\n  background-size: cover;\n  height: 300px;\n  margin-top: -1px;\n}\n\n.banner h3 {\n  color: white;\n  line-height: 30px;\n  margin-bottom: 25px;\n}\n\n.btn-orange {\n  background: #e2530c;\n  border-radius: 4px;\n  color: #ffffff;\n  padding: 10px 20px;\n}\n\n.border-top {\n  border-top: 1px solid #aeaeae;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  right: 0;\n  height: 0;\n  content: '';\n}\n\n.navbar {\n  margin: 0;\n}\n\n.navbar-nav {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n.navbar-nav li {\n  border-left: 1px solid #aeaeae;\n  width: 100%;\n}\n\n.navbar-nav li:last-of-type {\n  border-right: 1px solid #aeaeae;\n}\n\n.navbar-nav li a {\n  width: 100%;\n  text-align: center;\n  padding: 15px 25px;\n  color: #242226;\n  background: #ffffff;\n}\n\n.navbar-nav li.active a {\n  background: #e2530c;\n  color: #ffffff;\n}\n\n.navbar-nav li:hover a {\n  background: #bf3218;\n  color: #ffffff;\n}\n\n.content {\n  margin-top: 340px;\n}\n\n@media (max-width: 400px) {\n  .content {\n    margin-top: 0px;\n  }\n}\n\n", ""]);

	// exports


/***/ },
/* 3 */
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "Background.jpg";

/***/ },
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "People_logo.png";

/***/ }
])
//# sourceMappingURL=0.a7df675d3e661fbf7b29.hot-update.js.map