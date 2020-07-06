(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{185:function(module,exports,__webpack_require__){__webpack_require__(186),__webpack_require__(317),module.exports=__webpack_require__(318)},253:function(module,exports){},318:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(17),__webpack_require__(20),__webpack_require__(96);var _storybook_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(76),req=__webpack_require__(435);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.configure)((function(){req.keys().forEach((function(filename){return req(filename)}))}),module)}.call(this,__webpack_require__(147)(module))},435:function(module,exports,__webpack_require__){var map={"./index.stories.js":436};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=435},436:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(37),__webpack_require__(31),__webpack_require__(150),__webpack_require__(106);var react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_storybook_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(76),_src_index__WEBPACK_IMPORTED_MODULE_8__=(__webpack_require__(437),__webpack_require__(440),__webpack_require__(77));function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var stories=Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.storiesOf)("Toast UI ImageEditor",module),props={includeUI:{loadImage:{path:"img/sampleImage2.png",name:"sampleImage2"},initMenu:"shape",uiSize:{height:"700px",width:"1000px"}},cssMaxWidth:700,cssMaxHeight:500};stories.add("Include default UI",(function(){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_8__.a,props)})),stories.add("Using Method",(function(){var Story=function(_React$Component){function Story(){var _getPrototypeOf2,_this;_classCallCheck(this,Story);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _defineProperty(_assertThisInitialized(_this=_possibleConstructorReturn(this,(_getPrototypeOf2=_getPrototypeOf(Story)).call.apply(_getPrototypeOf2,[this].concat(args)))),"ref",react__WEBPACK_IMPORTED_MODULE_4___default.a.createRef()),_defineProperty(_assertThisInitialized(_this),"imageEditor",null),_this}return _inherits(Story,_React$Component),_createClass(Story,[{key:"componentDidMount",value:function(){this.imageEditor=this.ref.current.getInstance()}},{key:"flipImageByAxis",value:function(isXAxis){this.imageEditor[isXAxis?"flipX":"flipY"]().then((function(status){console.log("flipX: ",status.flipX),console.log("flipY: ",status.flipY),console.log("angle: ",status.angle)})).catch((function(message){console.log("error: ",message)}))}},{key:"render",value:function(){var _this2=this;return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_8__.a,_extends({ref:this.ref},props)),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{onClick:function(){_this2.flipImageByAxis(!0)}},"Flip-X!"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{onClick:function(){_this2.flipImageByAxis(!1)}},"Flip-Y!"))}}]),Story}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Story,null)})),stories.add("Events",(function(){var Story2=function(_React$Component2){function Story2(){var _getPrototypeOf3,_this3;_classCallCheck(this,Story2);for(var _len2=arguments.length,args=Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];return _defineProperty(_assertThisInitialized(_this3=_possibleConstructorReturn(this,(_getPrototypeOf3=_getPrototypeOf(Story2)).call.apply(_getPrototypeOf3,[this].concat(args)))),"ref",react__WEBPACK_IMPORTED_MODULE_4___default.a.createRef()),_defineProperty(_assertThisInitialized(_this3),"imageEditor",null),_this3}return _inherits(Story2,_React$Component2),_createClass(Story2,[{key:"componentDidMount",value:function(){this.imageEditor=this.ref.current.getInstance()}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_8__.a,_extends({ref:this.ref},props,{onMousedown:function(event,originPointer){console.log(event),console.log(originPointer)},onAddText:function(pos){var _pos$originPosition=pos.originPosition,ox=_pos$originPosition.x,oy=_pos$originPosition.y,_pos$clientPosition=pos.clientPosition,cx=_pos$clientPosition.x,cy=_pos$clientPosition.y;console.log("text position on canvas(x, y): ".concat(ox,"px, ").concat(oy,"px")),console.log("text position on brwoser(x, y): ".concat(cx,"px, ").concat(cy,"px"))}}))}}]),Story2}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Story2,null)}))}.call(this,__webpack_require__(147)(module))},449:function(module,exports){},450:function(module,exports){},451:function(module,exports){},77:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ImageEditor}));__webpack_require__(37),__webpack_require__(442),__webpack_require__(31),__webpack_require__(106),__webpack_require__(17),__webpack_require__(20),__webpack_require__(96),__webpack_require__(39);var react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__),tui_image_editor__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(184),tui_image_editor__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(tui_image_editor__WEBPACK_IMPORTED_MODULE_9__);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var ImageEditor=function(_React$Component){function ImageEditor(){var _getPrototypeOf2,_this;_classCallCheck(this,ImageEditor);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _defineProperty(_assertThisInitialized(_this=_possibleConstructorReturn(this,(_getPrototypeOf2=_getPrototypeOf(ImageEditor)).call.apply(_getPrototypeOf2,[this].concat(args)))),"rootEl",react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef()),_defineProperty(_assertThisInitialized(_this),"imageEditorInst",null),_this}return function(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(ImageEditor,_React$Component),Constructor=ImageEditor,(protoProps=[{key:"componentDidMount",value:function(){this.imageEditorInst=new tui_image_editor__WEBPACK_IMPORTED_MODULE_9___default.a(this.rootEl.current,function(target){for(var source,i=1;i<arguments.length;i++)source=null==arguments[i]?{}:arguments[i],i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}({},this.props)),this.bindEventHandlers(this.props)}},{key:"componentWillUnmount",value:function(){this.unbindEventHandlers(),this.imageEditorInst.destroy(),this.imageEditorInst=null}},{key:"shouldComponentUpdate",value:function(nextProps){return this.bindEventHandlers(this.props,nextProps),!1}},{key:"getInstance",value:function(){return this.imageEditorInst}},{key:"getRootElement",value:function(){return this.rootEl.current}},{key:"bindEventHandlers",value:function(props,prevProps){var _this2=this;Object.keys(props).filter(this.isEventHandlerKeys).forEach((function(key){var eventName=key[2].toLowerCase()+key.slice(3);prevProps&&prevProps[key]!==props[key]&&_this2.imageEditorInst.off(eventName),_this2.imageEditorInst.on(eventName,props[key])}))}},{key:"unbindEventHandlers",value:function(){var _this3=this;Object.keys(this.props).filter(this.isEventHandlerKeys).forEach((function(key){var eventName=key[2].toLowerCase()+key.slice(3);_this3.imageEditorInst.off(eventName)}))}},{key:"isEventHandlerKeys",value:function(key){return/on[A-Z][a-zA-Z]+/.test(key)}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{ref:this.rootEl})}}])&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),ImageEditor;var Constructor,protoProps,staticProps}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);ImageEditor.__docgenInfo={description:"",methods:[{name:"getInstance",docblock:null,modifiers:[],params:[],returns:null},{name:"getRootElement",docblock:null,modifiers:[],params:[],returns:null},{name:"bindEventHandlers",docblock:null,modifiers:[],params:[{name:"props",type:null},{name:"prevProps",type:null}],returns:null},{name:"unbindEventHandlers",docblock:null,modifiers:[],params:[],returns:null},{name:"isEventHandlerKeys",docblock:null,modifiers:[],params:[{name:"key",type:null}],returns:null}],displayName:"ImageEditor"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.js"]={name:"ImageEditor",docgenInfo:ImageEditor.__docgenInfo,path:"src/index.js"})}},[[185,1,2]]]);
//# sourceMappingURL=main.22032edd9f492f8a2727.bundle.js.map