(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[472],{"./stories/organisms/tools-display.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ToolsDisplayOrganism:()=>ToolsDisplayOrganism,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _ToolsDisplayOrganism,_ToolsDisplayOrganism2,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_components_organisms_ToolsDisplay_tools_display__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/organisms/ToolsDisplay/tools-display.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Organisms/Tools Display"},ToolsDisplayOrganism=()=>__jsx(_components_organisms_ToolsDisplay_tools_display__WEBPACK_IMPORTED_MODULE_2__.Z,null);ToolsDisplayOrganism.displayName="ToolsDisplayOrganism",ToolsDisplayOrganism.parameters=_objectSpread(_objectSpread({},ToolsDisplayOrganism.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ToolsDisplayOrganism=ToolsDisplayOrganism.parameters)||void 0===_ToolsDisplayOrganism?void 0:_ToolsDisplayOrganism.docs),{},{source:_objectSpread({originalSource:"() => <Tool />"},null===(_ToolsDisplayOrganism2=ToolsDisplayOrganism.parameters)||void 0===_ToolsDisplayOrganism2||null===(_ToolsDisplayOrganism2=_ToolsDisplayOrganism2.docs)||void 0===_ToolsDisplayOrganism2?void 0:_ToolsDisplayOrganism2.source)})});const __namedExportsOrder=["ToolsDisplayOrganism"]},"./node_modules/@stripe/stripe-js/dist/stripe.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>loadStripe});var console=__webpack_require__("./node_modules/console-browserify/index.js"),V3_URL="https://js.stripe.com/v3",V3_URL_REGEX=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,EXISTING_SCRIPT_MESSAGE="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",stripePromise=null,loadScript=function loadScript(params){return null!==stripePromise||(stripePromise=new Promise((function(resolve,reject){if("undefined"!=typeof window)if(window.Stripe&&params&&console.warn(EXISTING_SCRIPT_MESSAGE),window.Stripe)resolve(window.Stripe);else try{var script=function findScript(){for(var scripts=document.querySelectorAll('script[src^="'.concat(V3_URL,'"]')),i=0;i<scripts.length;i++){var script=scripts[i];if(V3_URL_REGEX.test(script.src))return script}return null}();script&&params?console.warn(EXISTING_SCRIPT_MESSAGE):script||(script=function injectScript(params){var queryString=params&&!params.advancedFraudSignals?"?advancedFraudSignals=false":"",script=document.createElement("script");script.src="".concat(V3_URL).concat(queryString);var headOrBody=document.head||document.body;if(!headOrBody)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return headOrBody.appendChild(script),script}(params)),script.addEventListener("load",(function(){window.Stripe?resolve(window.Stripe):reject(new Error("Stripe.js not available"))})),script.addEventListener("error",(function(){reject(new Error("Failed to load Stripe.js"))}))}catch(error){return void reject(error)}else resolve(null)}))),stripePromise},stripePromise$1=Promise.resolve().then((function(){return loadScript(null)})),loadCalled=!1;stripePromise$1.catch((function(err){loadCalled||console.warn(err)}));var loadStripe=function loadStripe(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];loadCalled=!0;var startTime=Date.now();return stripePromise$1.then((function(maybeStripe){return function initStripe(maybeStripe,args,startTime){if(null===maybeStripe)return null;var stripe=maybeStripe.apply(void 0,args);return function registerWrapper(stripe,startTime){stripe&&stripe._registerWrapper&&stripe._registerWrapper({name:"stripe-js",version:"1.46.0",startTime})}(stripe,startTime),stripe}(maybeStripe,args,startTime)}))}},"./node_modules/@supabase/auth-helpers-react/dist/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var mod,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,src_exports={};((target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})})(src_exports,{SessionContextProvider:()=>SessionContextProvider,useSession:()=>useSession,useSessionContext:()=>useSessionContext,useSupabaseClient:()=>useSupabaseClient,useUser:()=>useUser}),module.exports=(mod=src_exports,((to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to})(__defProp({},"__esModule",{value:!0}),mod));var import_react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),import_jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),SessionContext=(0,import_react.createContext)({isLoading:!0,session:null,error:null,supabaseClient:{}}),SessionContextProvider=({supabaseClient,initialSession=null,children})=>{const[session,setSession]=(0,import_react.useState)(initialSession),[isLoading,setIsLoading]=(0,import_react.useState)(!initialSession),[error,setError]=(0,import_react.useState)();(0,import_react.useEffect)((()=>{let mounted=!0;return function getSession(){return __this=this,__arguments=null,generator=function*(){const{data:{session:session2},error:error2}=yield supabaseClient.auth.getSession();if(mounted){if(error2)return setError(error2),void setIsLoading(!1);setSession(session2),setIsLoading(!1)}},new Promise(((resolve,reject)=>{var fulfilled=value=>{try{step(generator.next(value))}catch(e){reject(e)}},rejected=value=>{try{step(generator.throw(value))}catch(e){reject(e)}},step=x=>x.done?resolve(x.value):Promise.resolve(x.value).then(fulfilled,rejected);step((generator=generator.apply(__this,__arguments)).next())}));var __this,__arguments,generator}(),()=>{mounted=!1}}),[]),(0,import_react.useEffect)((()=>{const{data:{subscription}}=supabaseClient.auth.onAuthStateChange(((event,session2)=>{!session2||"SIGNED_IN"!==event&&"TOKEN_REFRESHED"!==event||setSession(session2),"SIGNED_OUT"===event&&setSession(null)}));return()=>{subscription.unsubscribe()}}),[]);const value=(0,import_react.useMemo)((()=>isLoading?{isLoading:!0,session:null,error:null,supabaseClient}:error?{isLoading:!1,session:null,error,supabaseClient}:{isLoading:!1,session,error:null,supabaseClient}),[isLoading,session,error]);return(0,import_jsx_runtime.jsx)(SessionContext.Provider,{value,children})},useSessionContext=()=>{const context=(0,import_react.useContext)(SessionContext);if(void 0===context)throw new Error("useSessionContext must be used within a SessionContextProvider.");return context};function useSupabaseClient(){const context=(0,import_react.useContext)(SessionContext);if(void 0===context)throw new Error("useSupabaseClient must be used within a SessionContextProvider.");return context.supabaseClient}var useSession=()=>{const context=(0,import_react.useContext)(SessionContext);if(void 0===context)throw new Error("useSession must be used within a SessionContextProvider.");return context.session},useUser=()=>{var _a,_b;const context=(0,import_react.useContext)(SessionContext);if(void 0===context)throw new Error("useUser must be used within a SessionContextProvider.");return null!=(_b=null==(_a=context.session)?void 0:_a.user)?_b:null}},"./node_modules/react-csv/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react-csv/lib/index.js")},"./node_modules/react-csv/lib/components/Download.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react2=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/next/dist/compiled/react/index.js")),_core=__webpack_require__("./node_modules/react-csv/lib/core.js"),_metaProps=__webpack_require__("./node_modules/react-csv/lib/metaProps.js");var CSVDownload=function(_React$Component){function CSVDownload(props){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,CSVDownload);var _this=function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}(this,(CSVDownload.__proto__||Object.getPrototypeOf(CSVDownload)).call(this,props));return _this.state={},_this}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}(CSVDownload,_React$Component),_createClass(CSVDownload,[{key:"buildURI",value:function buildURI(){return _core.buildURI.apply(void 0,arguments)}},{key:"componentDidMount",value:function componentDidMount(){var _props=this.props,data=_props.data,headers=_props.headers,separator=_props.separator,enclosingCharacter=_props.enclosingCharacter,uFEFF=_props.uFEFF,target=_props.target,specs=_props.specs,replace=_props.replace;this.state.page=window.open(this.buildURI(data,uFEFF,headers,separator,enclosingCharacter),target,specs,replace)}},{key:"getWindow",value:function getWindow(){return this.state.page}},{key:"render",value:function render(){return null}}]),CSVDownload}(_react2.default.Component);CSVDownload.defaultProps=Object.assign(_metaProps.defaultProps,{target:"_blank"}),CSVDownload.propTypes=_metaProps.propTypes,exports.default=CSVDownload},"./node_modules/react-csv/lib/components/Link.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react2=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/next/dist/compiled/react/index.js")),_core=__webpack_require__("./node_modules/react-csv/lib/core.js"),_metaProps=__webpack_require__("./node_modules/react-csv/lib/metaProps.js");var CSVLink=function(_React$Component){function CSVLink(props){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,CSVLink);var _this=function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}(this,(CSVLink.__proto__||Object.getPrototypeOf(CSVLink)).call(this,props));return _this.buildURI=_this.buildURI.bind(_this),_this}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}(CSVLink,_React$Component),_createClass(CSVLink,[{key:"buildURI",value:function buildURI(){return _core.buildURI.apply(void 0,arguments)}},{key:"handleLegacy",value:function handleLegacy(event){var isAsync=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(window.navigator.msSaveOrOpenBlob){event.preventDefault();var _props=this.props,data=_props.data,headers=_props.headers,separator=_props.separator,filename=_props.filename,enclosingCharacter=_props.enclosingCharacter,uFEFF=_props.uFEFF,csvData=isAsync&&"function"==typeof data?data():data,blob=new Blob([uFEFF?"\ufeff":"",(0,_core.toCSV)(csvData,headers,separator,enclosingCharacter)]);return window.navigator.msSaveBlob(blob,filename),!1}}},{key:"handleAsyncClick",value:function handleAsyncClick(event){var _this2=this;this.props.onClick(event,(function done(proceed){!1!==proceed?_this2.handleLegacy(event,!0):event.preventDefault()}))}},{key:"handleSyncClick",value:function handleSyncClick(event){!1===this.props.onClick(event)?event.preventDefault():this.handleLegacy(event)}},{key:"handleClick",value:function handleClick(){var _this3=this;return function(event){if("function"==typeof _this3.props.onClick)return _this3.props.asyncOnClick?_this3.handleAsyncClick(event):_this3.handleSyncClick(event);_this3.handleLegacy(event)}}},{key:"render",value:function render(){var _this4=this,_props2=this.props,data=_props2.data,headers=_props2.headers,separator=_props2.separator,filename=_props2.filename,uFEFF=_props2.uFEFF,children=_props2.children,enclosingCharacter=(_props2.onClick,_props2.asyncOnClick,_props2.enclosingCharacter),rest=function _objectWithoutProperties(obj,keys){var target={};for(var i in obj)keys.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(obj,i)&&(target[i]=obj[i]);return target}(_props2,["data","headers","separator","filename","uFEFF","children","onClick","asyncOnClick","enclosingCharacter"]),href="undefined"==typeof window?"":this.buildURI(data,uFEFF,headers,separator,enclosingCharacter);return _react2.default.createElement("a",_extends({download:filename},rest,{ref:function ref(link){return _this4.link=link},target:"_self",href,onClick:this.handleClick()}),children)}}]),CSVLink}(_react2.default.Component);CSVLink.defaultProps=_metaProps.defaultProps,CSVLink.propTypes=_metaProps.propTypes,exports.default=CSVLink},"./node_modules/react-csv/lib/core.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}return Array.from(arr)}var isSafari=exports.isSafari=function isSafari(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},isJsons=exports.isJsons=function isJsons(array){return Array.isArray(array)&&array.every((function(row){return"object"===(void 0===row?"undefined":_typeof(row))&&!(row instanceof Array)}))},isArrays=exports.isArrays=function isArrays(array){return Array.isArray(array)&&array.every((function(row){return Array.isArray(row)}))},jsonsHeaders=exports.jsonsHeaders=function jsonsHeaders(array){return Array.from(array.map((function(json){return Object.keys(json)})).reduce((function(a,b){return new Set([].concat(_toConsumableArray(a),_toConsumableArray(b)))}),[]))},jsons2arrays=exports.jsons2arrays=function jsons2arrays(jsons,headers){var headerLabels=headers=headers||jsonsHeaders(jsons),headerKeys=headers;isJsons(headers)&&(headerLabels=headers.map((function(header){return header.label})),headerKeys=headers.map((function(header){return header.key})));var data=jsons.map((function(object){return headerKeys.map((function(header){return getHeaderValue(header,object)}))}));return[headerLabels].concat(_toConsumableArray(data))},getHeaderValue=exports.getHeaderValue=function getHeaderValue(property,obj){var foundValue=property.replace(/\[([^\]]+)]/g,".$1").split(".").reduce((function(o,p,i,arr){var value=o[p];if(null!=value)return value;arr.splice(1)}),obj);return void 0===foundValue?property in obj?obj[property]:"":foundValue},elementOrEmpty=exports.elementOrEmpty=function elementOrEmpty(element){return null==element?"":element},joiner=exports.joiner=function joiner(data){var separator=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",enclosingCharacter=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'"';return data.filter((function(e){return e})).map((function(row){return row.map((function(element){return elementOrEmpty(element)})).map((function(column){return""+enclosingCharacter+column+enclosingCharacter})).join(separator)})).join("\n")},arrays2csv=exports.arrays2csv=function arrays2csv(data,headers,separator,enclosingCharacter){return joiner(headers?[headers].concat(_toConsumableArray(data)):data,separator,enclosingCharacter)},jsons2csv=exports.jsons2csv=function jsons2csv(data,headers,separator,enclosingCharacter){return joiner(jsons2arrays(data,headers),separator,enclosingCharacter)},string2csv=exports.string2csv=function string2csv(data,headers,separator,enclosingCharacter){return headers?headers.join(separator)+"\n"+data:data.replace(/"/g,'""')},toCSV=exports.toCSV=function toCSV(data,headers,separator,enclosingCharacter){if(isJsons(data))return jsons2csv(data,headers,separator,enclosingCharacter);if(isArrays(data))return arrays2csv(data,headers,separator,enclosingCharacter);if("string"==typeof data)return string2csv(data,headers,separator);throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ')};exports.buildURI=function buildURI(data,uFEFF,headers,separator,enclosingCharacter){var csv=toCSV(data,headers,separator,enclosingCharacter),type=isSafari()?"application/csv":"text/csv",blob=new Blob([uFEFF?"\ufeff":"",csv],{type}),dataURI="data:"+type+";charset=utf-8,"+(uFEFF?"\ufeff":"")+csv,URL=window.URL||window.webkitURL;return void 0===URL.createObjectURL?dataURI:URL.createObjectURL(blob)}},"./node_modules/react-csv/lib/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";exports.CSVLink=void 0;var _Download2=_interopRequireDefault(__webpack_require__("./node_modules/react-csv/lib/components/Download.js")),_Link2=_interopRequireDefault(__webpack_require__("./node_modules/react-csv/lib/components/Link.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}_Download2.default,exports.CSVLink=_Link2.default},"./node_modules/react-csv/lib/metaProps.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PropsNotForwarded=exports.defaultProps=exports.propTypes=void 0;(function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}})(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"));var _propTypes=__webpack_require__("./node_modules/prop-types/index.js");exports.propTypes={data:(0,_propTypes.oneOfType)([_propTypes.string,_propTypes.array,_propTypes.func]).isRequired,headers:_propTypes.array,target:_propTypes.string,separator:_propTypes.string,filename:_propTypes.string,uFEFF:_propTypes.bool,onClick:_propTypes.func,asyncOnClick:_propTypes.bool,enclosingCharacter:_propTypes.string},exports.defaultProps={separator:",",filename:"generatedBy_react-csv.csv",uFEFF:!0,asyncOnClick:!1,enclosingCharacter:'"'},exports.PropsNotForwarded=["data","headers"]}}]);