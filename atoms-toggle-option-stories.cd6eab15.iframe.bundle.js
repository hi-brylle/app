"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[2996],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@radix-ui/react-switch/dist/index.module.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{fC:()=>$6be4966fd9bbc698$export$be92b6f5f03c0fe9,bU:()=>$6be4966fd9bbc698$export$6521433ed15a34db});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),index_module=__webpack_require__("./node_modules/@radix-ui/primitive/dist/index.module.js"),dist_index_module=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.module.js"),react_context_dist_index_module=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.module.js"),react_use_controllable_state_dist_index_module=__webpack_require__("./node_modules/@radix-ui/react-use-controllable-state/dist/index.module.js"),react_use_previous_dist_index_module=__webpack_require__("./node_modules/@radix-ui/react-use-previous/dist/index.module.js"),react_use_size_dist_index_module=__webpack_require__("./node_modules/@radix-ui/react-use-size/dist/index.module.js");__webpack_require__("./node_modules/next/dist/compiled/react-dom/index.js");const $5e63c961fc1ce211$export$8c6ed5c666ac1360=(0,react.forwardRef)(((props,forwardedRef)=>{const{children,...slotProps}=props,childrenArray=react.Children.toArray(children),slottable=childrenArray.find($5e63c961fc1ce211$var$isSlottable);if(slottable){const newElement=slottable.props.children,newChildren=childrenArray.map((child=>child===slottable?react.Children.count(newElement)>1?react.Children.only(null):(0,react.isValidElement)(newElement)?newElement.props.children:null:child));return(0,react.createElement)($5e63c961fc1ce211$var$SlotClone,(0,esm_extends.Z)({},slotProps,{ref:forwardedRef}),(0,react.isValidElement)(newElement)?(0,react.cloneElement)(newElement,void 0,newChildren):null)}return(0,react.createElement)($5e63c961fc1ce211$var$SlotClone,(0,esm_extends.Z)({},slotProps,{ref:forwardedRef}),children)}));$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName="Slot";const $5e63c961fc1ce211$var$SlotClone=(0,react.forwardRef)(((props,forwardedRef)=>{const{children,...slotProps}=props;return(0,react.isValidElement)(children)?(0,react.cloneElement)(children,{...$5e63c961fc1ce211$var$mergeProps(slotProps,children.props),ref:(0,dist_index_module.F)(forwardedRef,children.ref)}):react.Children.count(children)>1?react.Children.only(null):null}));$5e63c961fc1ce211$var$SlotClone.displayName="SlotClone";const $5e63c961fc1ce211$export$d9f1ccf0bdb05d45=({children})=>(0,react.createElement)(react.Fragment,null,children);function $5e63c961fc1ce211$var$isSlottable(child){return(0,react.isValidElement)(child)&&child.type===$5e63c961fc1ce211$export$d9f1ccf0bdb05d45}function $5e63c961fc1ce211$var$mergeProps(slotProps,childProps){const overrideProps={...childProps};for(const propName in childProps){const slotPropValue=slotProps[propName],childPropValue=childProps[propName];/^on[A-Z]/.test(propName)?slotPropValue&&childPropValue?overrideProps[propName]=(...args)=>{childPropValue(...args),slotPropValue(...args)}:slotPropValue&&(overrideProps[propName]=slotPropValue):"style"===propName?overrideProps[propName]={...slotPropValue,...childPropValue}:"className"===propName&&(overrideProps[propName]=[slotPropValue,childPropValue].filter(Boolean).join(" "))}return{...slotProps,...overrideProps}}const $8927f6f2acc4f386$export$250ffa63cdc0d034=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"].reduce(((primitive,node)=>{const Node=(0,react.forwardRef)(((props,forwardedRef)=>{const{asChild,...primitiveProps}=props,Comp=asChild?$5e63c961fc1ce211$export$8c6ed5c666ac1360:node;return(0,react.useEffect)((()=>{window[Symbol.for("radix-ui")]=!0}),[]),(0,react.createElement)(Comp,(0,esm_extends.Z)({},primitiveProps,{ref:forwardedRef}))}));return Node.displayName=`Primitive.${node}`,{...primitive,[node]:Node}}),{});const[$6be4966fd9bbc698$var$createSwitchContext,$6be4966fd9bbc698$export$cf7f5f17f69cbd43]=(0,react_context_dist_index_module.b)("Switch"),[$6be4966fd9bbc698$var$SwitchProvider,$6be4966fd9bbc698$var$useSwitchContext]=$6be4966fd9bbc698$var$createSwitchContext("Switch"),$6be4966fd9bbc698$export$b5d5cf8927ab7262=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeSwitch,name,checked:checkedProp,defaultChecked,required,disabled,value="on",onCheckedChange,...switchProps}=props,[button,setButton]=(0,react.useState)(null),composedRefs=(0,dist_index_module.e)(forwardedRef,(node=>setButton(node))),hasConsumerStoppedPropagationRef=(0,react.useRef)(!1),isFormControl=!button||Boolean(button.closest("form")),[checked=!1,setChecked]=(0,react_use_controllable_state_dist_index_module.T)({prop:checkedProp,defaultProp:defaultChecked,onChange:onCheckedChange});return(0,react.createElement)($6be4966fd9bbc698$var$SwitchProvider,{scope:__scopeSwitch,checked,disabled},(0,react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button,(0,esm_extends.Z)({type:"button",role:"switch","aria-checked":checked,"aria-required":required,"data-state":$6be4966fd9bbc698$var$getState(checked),"data-disabled":disabled?"":void 0,disabled,value},switchProps,{ref:composedRefs,onClick:(0,index_module.M)(props.onClick,(event=>{setChecked((prevChecked=>!prevChecked)),isFormControl&&(hasConsumerStoppedPropagationRef.current=event.isPropagationStopped(),hasConsumerStoppedPropagationRef.current||event.stopPropagation())}))})),isFormControl&&(0,react.createElement)($6be4966fd9bbc698$var$BubbleInput,{control:button,bubbles:!hasConsumerStoppedPropagationRef.current,name,value,checked,required,disabled,style:{transform:"translateX(-100%)"}}))})),$6be4966fd9bbc698$export$4d07bf653ea69106=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeSwitch,...thumbProps}=props,context=$6be4966fd9bbc698$var$useSwitchContext("SwitchThumb",__scopeSwitch);return(0,react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span,(0,esm_extends.Z)({"data-state":$6be4966fd9bbc698$var$getState(context.checked),"data-disabled":context.disabled?"":void 0},thumbProps,{ref:forwardedRef}))})),$6be4966fd9bbc698$var$BubbleInput=props=>{const{control,checked,bubbles=!0,...inputProps}=props,ref=(0,react.useRef)(null),prevChecked=(0,react_use_previous_dist_index_module.D)(checked),controlSize=(0,react_use_size_dist_index_module.t)(control);return(0,react.useEffect)((()=>{const input=ref.current,inputProto=window.HTMLInputElement.prototype,setChecked=Object.getOwnPropertyDescriptor(inputProto,"checked").set;if(prevChecked!==checked&&setChecked){const event=new Event("click",{bubbles});setChecked.call(input,checked),input.dispatchEvent(event)}}),[prevChecked,checked,bubbles]),(0,react.createElement)("input",(0,esm_extends.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:checked},inputProps,{tabIndex:-1,ref,style:{...props.style,...controlSize,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function $6be4966fd9bbc698$var$getState(checked){return checked?"checked":"unchecked"}const $6be4966fd9bbc698$export$be92b6f5f03c0fe9=$6be4966fd9bbc698$export$b5d5cf8927ab7262,$6be4966fd9bbc698$export$6521433ed15a34db=$6be4966fd9bbc698$export$4d07bf653ea69106},"./node_modules/@radix-ui/react-use-previous/dist/index.module.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>$010c2913dbd2fe3d$export$5cae361ad82dce8b});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({value,previous:value});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(ref.current.value!==value&&(ref.current.previous=ref.current.value,ref.current.value=value),ref.current.previous)),[value])}},"./stories/atoms/toggle-option.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithIcon:()=>WithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_WithIcon$parameters,_WithIcon$parameters2,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),components_atoms_ToggleOption_toggle_option__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/ToggleOption/toggle-option.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Atoms/ToggleOption"},ToggleOptionTemplate=args=>__jsx(components_atoms_ToggleOption_toggle_option__WEBPACK_IMPORTED_MODULE_2__.Z,args);ToggleOptionTemplate.displayName="ToggleOptionTemplate";const Default=ToggleOptionTemplate.bind({}),WithIcon=ToggleOptionTemplate.bind({});Default.args={optionText:"test"},WithIcon.args={optionText:"text",withIcon:!0},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <ToggleOption {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),WithIcon.parameters=_objectSpread(_objectSpread({},WithIcon.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithIcon$parameters=WithIcon.parameters)||void 0===_WithIcon$parameters?void 0:_WithIcon$parameters.docs),{},{source:_objectSpread({originalSource:"args => <ToggleOption {...args} />"},null===(_WithIcon$parameters2=WithIcon.parameters)||void 0===_WithIcon$parameters2||null===(_WithIcon$parameters2=_WithIcon$parameters2.docs)||void 0===_WithIcon$parameters2?void 0:_WithIcon$parameters2.source)})});const __namedExportsOrder=["Default","WithIcon"]},"./components/atoms/ToggleOption/toggle-option.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_icons_hi__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-icons/hi/index.esm.js"),_ToggleSwitch_toggle_switch__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/atoms/ToggleSwitch/toggle-switch.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const ToggleOption=_ref=>{let{optionText,withIcon,checked,handleToggle}=_ref;return __jsx("div",{onClick:handleToggle,className:"inline-flex cursor-pointer items-center gap-2 rounded-md px-2 py-0.5 border border-light-slate-6 bg-light-slate-1"},__jsx(_ToggleSwitch_toggle_switch__WEBPACK_IMPORTED_MODULE_1__.Z,{ariaLabel:optionText,size:"sm",handleToggle,name:optionText,checked}),__jsx("span",{className:"text-sm text-light-slate-11"},optionText),withIcon&&__jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_2__.frK,{title:"An outside contributor is not a member the organization",className:"text-light-slate-9"}))};ToggleOption.displayName="ToggleOption";const __WEBPACK_DEFAULT_EXPORT__=ToggleOption;try{toggleoption.displayName="toggleoption",toggleoption.__docgenInfo={description:"",displayName:"toggleoption",props:{optionText:{defaultValue:null,description:"",name:"optionText",required:!0,type:{name:"string"}},withIcon:{defaultValue:null,description:"",name:"withIcon",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},handleToggle:{defaultValue:null,description:"",name:"handleToggle",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/ToggleOption/toggle-option.tsx#toggleoption"]={docgenInfo:toggleoption.__docgenInfo,name:"toggleoption",path:"components/atoms/ToggleOption/toggle-option.tsx#toggleoption"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/ToggleSwitch/toggle-switch.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-switch/dist/index.module.js"),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const ToggleSwitch=props=>{const{name,checked=!1,handleToggle,size="base",classNames}=props;let ariaProps;return props.ariaLabelledBy&&(ariaProps={"aria-labelledby":props.ariaLabelledBy}),props.ariaLabel&&(ariaProps={"aria-label":props.ariaLabel}),__jsx(_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_1__.fC,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({defaultChecked:!0,checked,onClick:()=>handleToggle(),name},ariaProps,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)(classNames,checked&&"!bg-light-orange-10 justify-end","flex rounded-2xl p-[2px] transition overflow-hidden bg-light-slate-8","lg"===size?"w-14 h-[30px]":"base"===size?"w-10 h-5":"sm"===size?"w-7 h-4":"")}),__jsx(_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_1__.bU,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("bg-white block rounded-2xl  h-full w-1/2")}))};ToggleSwitch.displayName="ToggleSwitch";const __WEBPACK_DEFAULT_EXPORT__=ToggleSwitch;try{toggleswitch.displayName="toggleswitch",toggleswitch.__docgenInfo={description:"",displayName:"toggleswitch",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},handleToggle:{defaultValue:null,description:"",name:"handleToggle",required:!0,type:{name:"() => void"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"sm"'},{value:'"lg"'}]}},classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}},ariaLabelledBy:{defaultValue:null,description:"",name:"ariaLabelledBy",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/ToggleSwitch/toggle-switch.tsx#toggleswitch"]={docgenInfo:toggleswitch.__docgenInfo,name:"toggleswitch",path:"components/atoms/ToggleSwitch/toggle-switch.tsx#toggleswitch"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{W:()=>clsx,Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=clsx},"./node_modules/react-icons/lib/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w_:()=>GenIcon,Pd:()=>IconContext});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},IconContext=react.createContext&&react.createContext(DefaultContext),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function Tree2Element(tree){return tree&&tree.map((function(node,i){return react.createElement(node.tag,__assign({key:i},node.attr),Tree2Element(node.child))}))}function GenIcon(data){return function(props){return react.createElement(IconBase,__assign({attr:__assign({},data.attr)},props),Tree2Element(data.child))}}function IconBase(props){var elem=function(conf){var className,attr=props.attr,size=props.size,title=props.title,svgProps=__rest(props,["attr","size","title"]),computedSize=size||conf.size||"1em";return conf.className&&(className=conf.className),props.className&&(className=(className?className+" ":"")+props.className),react.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},conf.attr,attr,svgProps,{className,style:__assign(__assign({color:props.color||conf.color},conf.style),props.style),height:computedSize,width:computedSize,xmlns:"http://www.w3.org/2000/svg"}),title&&react.createElement("title",null,title),props.children)};return void 0!==IconContext?react.createElement(IconContext.Consumer,null,(function(conf){return elem(conf)})):elem(DefaultContext)}}}]);