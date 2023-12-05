"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[940],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./stories/atoms/search.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Focused:()=>Focused,WithSuggestions:()=>WithSuggestions,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Focused$parameters,_Focused$parameters2,_WithSuggestions$para,_WithSuggestions$para2,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),components_atoms_Search_search__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/Search/search.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Atoms/Search"},SearchTemplate=args=>__jsx(components_atoms_Search_search__WEBPACK_IMPORTED_MODULE_2__.Z,args);SearchTemplate.displayName="SearchTemplate";const Default=SearchTemplate.bind({}),Focused=SearchTemplate.bind({}),WithSuggestions=SearchTemplate.bind({});Default.args={placeholder:"Search repositories",name:"Search"},Focused.args={placeholder:"Search repositories",name:"Search",autoFocus:!0},WithSuggestions.args={placeholder:"Search repositories",name:"Search",suggestions:["openarch/north","opencv/opencv","openmusic5/featurecity"]},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Search {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),Focused.parameters=_objectSpread(_objectSpread({},Focused.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Focused$parameters=Focused.parameters)||void 0===_Focused$parameters?void 0:_Focused$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Search {...args} />"},null===(_Focused$parameters2=Focused.parameters)||void 0===_Focused$parameters2||null===(_Focused$parameters2=_Focused$parameters2.docs)||void 0===_Focused$parameters2?void 0:_Focused$parameters2.source)})}),WithSuggestions.parameters=_objectSpread(_objectSpread({},WithSuggestions.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithSuggestions$para=WithSuggestions.parameters)||void 0===_WithSuggestions$para?void 0:_WithSuggestions$para.docs),{},{source:_objectSpread({originalSource:"args => <Search {...args} />"},null===(_WithSuggestions$para2=WithSuggestions.parameters)||void 0===_WithSuggestions$para2||null===(_WithSuggestions$para2=_WithSuggestions$para2.docs)||void 0===_WithSuggestions$para2?void 0:_WithSuggestions$para2.source)})});const __namedExportsOrder=["Default","Focused","WithSuggestions"]},"./components/atoms/ScrollArea/scroll-area.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{fK:()=>ScrollViewport,xr:()=>ScrollArea});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-scroll-area/dist/index.mjs"),clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const _excluded=["className","children"],_excluded2=["className","children"],_excluded3=["className","orientation"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const ScrollArea=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,children}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__.fC,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("relative overflow-hidden",className)},props),__jsx(ScrollViewport,null,children))}));ScrollArea.displayName=_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__.fC.displayName;const ScrollViewport=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref2,ref)=>{let{className,children}=_ref2,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref2,_excluded2);return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__.l_,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("h-full w-full rounded-[inherit]",className)},props),children),__jsx(ScrollBar,null),__jsx(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__.Ns,null))}));ScrollViewport.displayName=_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__.l_.displayName;const ScrollBar=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref3,ref)=>{let{className,orientation="vertical"}=_ref3,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref3,_excluded3);return __jsx(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__.LW,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("flex touch-none select-none p-0.5 transition-colors duration-[160ms] ease-out","vertical"===orientation&&"h-full w-2 border-l border-l-transparent","horizontal"===orientation&&"h-2 border-t border-t-transparent",className),orientation},props),__jsx(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__.bU,{className:"relative bg-light-slate-5 flex-1 rounded-full bg-border"}))}));ScrollBar.displayName=_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__.LW.displayName;try{ScrollArea.displayName="ScrollArea",ScrollArea.__docgenInfo={description:"",displayName:"ScrollArea",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/ScrollArea/scroll-area.tsx#ScrollArea"]={docgenInfo:ScrollArea.__docgenInfo,name:"ScrollArea",path:"components/atoms/ScrollArea/scroll-area.tsx#ScrollArea"})}catch(__react_docgen_typescript_loader_error){}try{ScrollViewport.displayName="ScrollViewport",ScrollViewport.__docgenInfo={description:"",displayName:"ScrollViewport",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/ScrollArea/scroll-area.tsx#ScrollViewport"]={docgenInfo:ScrollViewport.__docgenInfo,name:"ScrollViewport",path:"components/atoms/ScrollArea/scroll-area.tsx#ScrollViewport"})}catch(__react_docgen_typescript_loader_error){}try{ScrollBar.displayName="ScrollBar",ScrollBar.__docgenInfo={description:"",displayName:"ScrollBar",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/ScrollArea/scroll-area.tsx#ScrollBar"]={docgenInfo:ScrollBar.__docgenInfo,name:"ScrollBar",path:"components/atoms/ScrollArea/scroll-area.tsx#ScrollBar"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Search/search.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_icons_gr__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-icons/gr/index.esm.js"),react_icons_fa__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-icons/fa/index.esm.js"),_SpinLoader_spin_loader__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/atoms/SpinLoader/spin-loader.tsx"),_ScrollArea_scroll_area__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/ScrollArea/scroll-area.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const suggestionsStyle={"-webkit-line-clamp":"1",display:"-webkit-box","-webkit-box-orient":"vertical"},Search=_ref=>{let{placeholder,name,value,autoFocus,className,onSearch,suggestions,onChange,isLoading}=_ref;const{0:search,1:setSearch}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value),{0:showSuggestions,1:setShowSuggestions}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),handleOnSearch=()=>{null==onSearch||onSearch(search)};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setSearch(value)}),[value]);return __jsx("div",{className:"".concat(className&&className," flex bg-white  py-1 w-60 px-3 shadow-input border transition focus-within:ring focus-within:border-orange-500 focus-within:ring-orange-100 rounded-lg   ring-light-slate-6 items-center relative")},__jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.U41,{className:"text-light-slate-9",fontSize:16,onClick:handleOnSearch}),__jsx("input",{className:"w-full pl-2 placeholder:text-sm focus:outline-none placeholder:text-slate-400",autoFocus,placeholder,name,value:search,type:"search",id:name,onChange:e=>{setSearch(e.target.value),null==onChange||onChange(e.target.value)},onKeyUp:e=>{"Enter"===e.code&&handleOnSearch()},onFocus:()=>setShowSuggestions(!0),onBlur:()=>setTimeout((()=>setShowSuggestions(!1)),500)}),suggestions&&suggestions.length>0&&showSuggestions&&__jsx("div",{className:"absolute left-0 z-10 w-full pb-1 space-y-1 bg-white border rounded-lg cursor-pointer shadow-input border-light-slate-6 top-full"},__jsx(_ScrollArea_scroll_area__WEBPACK_IMPORTED_MODULE_2__.xr,{type:"auto",className:"h-60"},suggestions.map(((suggestion,index)=>__jsx("div",{className:"px-4 py-2 overflow-hidden break-all text-light-slate-9 hover:bg-light-slate-2",style:suggestionsStyle,key:index,onClick:()=>(suggestion=>{setSearch(suggestion),null==onSearch||onSearch(suggestion),setShowSuggestions(!1)})(suggestion)},__jsx("span",{className:"pl-5 text-sm "},suggestion)))))),search&&__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,isLoading?__jsx(_SpinLoader_spin_loader__WEBPACK_IMPORTED_MODULE_1__.$,{className:"w-5 h-5 "}):__jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_4__.nfZ,{className:"cursor-pointer text-light-slate-9",fontSize:16,onClick:()=>{setSearch(""),null==onSearch||onSearch(""),null==onChange||onChange("")}})))};Search.displayName="Search";const __WEBPACK_DEFAULT_EXPORT__=Search;try{search.displayName="search",search.__docgenInfo={description:"",displayName:"search",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onSearch:{defaultValue:null,description:"",name:"onSearch",required:!1,type:{name:"((search?: string) => void)"}},suggestions:{defaultValue:null,description:"",name:"suggestions",required:!1,type:{name:"string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Search/search.tsx#search"]={docgenInfo:search.__docgenInfo,name:"search",path:"components/atoms/Search/search.tsx#search"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/SpinLoader/spin-loader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Spinner,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const _excluded=["className"],_excluded2=["className"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const SpinLoader=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx("div",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({ref},props,{className:"flex justify-center w-full pt-36 "}),__jsx(Spinner,{className:"mr-2 md:w-16 md:h-16"}))}));SpinLoader.displayName="SpinLoader";const __WEBPACK_DEFAULT_EXPORT__=SpinLoader,Spinner=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref2,ref)=>{let{className}=_ref2,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref2,_excluded2);return __jsx("div",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({ref},props,{role:"status"}),__jsx("svg",{"aria-hidden":"true",className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("inline w-6 h-6 text-gray-200 animate-spin fill-light-slate-8",className),viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},__jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),__jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})),__jsx("span",{className:"sr-only"},"Loading..."))}));Spinner.displayName="Spinner";try{SpinLoader.displayName="SpinLoader",SpinLoader.__docgenInfo={description:"",displayName:"SpinLoader",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/SpinLoader/spin-loader.tsx#SpinLoader"]={docgenInfo:SpinLoader.__docgenInfo,name:"SpinLoader",path:"components/atoms/SpinLoader/spin-loader.tsx#SpinLoader"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{W:()=>clsx,Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=clsx},"./node_modules/react-icons/lib/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w_:()=>GenIcon,Pd:()=>IconContext});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},IconContext=react.createContext&&react.createContext(DefaultContext),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function Tree2Element(tree){return tree&&tree.map((function(node,i){return react.createElement(node.tag,__assign({key:i},node.attr),Tree2Element(node.child))}))}function GenIcon(data){return function(props){return react.createElement(IconBase,__assign({attr:__assign({},data.attr)},props),Tree2Element(data.child))}}function IconBase(props){var elem=function(conf){var className,attr=props.attr,size=props.size,title=props.title,svgProps=__rest(props,["attr","size","title"]),computedSize=size||conf.size||"1em";return conf.className&&(className=conf.className),props.className&&(className=(className?className+" ":"")+props.className),react.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},conf.attr,attr,svgProps,{className,style:__assign(__assign({color:props.color||conf.color},conf.style),props.style),height:computedSize,width:computedSize,xmlns:"http://www.w3.org/2000/svg"}),title&&react.createElement("title",null,title),props.children)};return void 0!==IconContext?react.createElement(IconContext.Consumer,null,(function(conf){return elem(conf)})):elem(DefaultContext)}}}]);