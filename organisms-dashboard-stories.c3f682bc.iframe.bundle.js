(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[7736],{"./stories/organisms/dashboard.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DashboardOrganism:()=>DashboardOrganism,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _DashboardOrganism$pa,_DashboardOrganism$pa2,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),components_organisms_Dashboard_dashboard__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/organisms/Dashboard/dashboard.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/organisms/Dashboard"},DashboardOrganism=()=>__jsx(components_organisms_Dashboard_dashboard__WEBPACK_IMPORTED_MODULE_2__.Z,null);DashboardOrganism.displayName="DashboardOrganism",DashboardOrganism.parameters=_objectSpread(_objectSpread({},DashboardOrganism.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_DashboardOrganism$pa=DashboardOrganism.parameters)||void 0===_DashboardOrganism$pa?void 0:_DashboardOrganism$pa.docs),{},{source:_objectSpread({originalSource:"(): JSX.Element => <Dashboard />"},null===(_DashboardOrganism$pa2=DashboardOrganism.parameters)||void 0===_DashboardOrganism$pa2||null===(_DashboardOrganism$pa2=_DashboardOrganism$pa2.docs)||void 0===_DashboardOrganism$pa2?void 0:_DashboardOrganism$pa2.source)})});const __namedExportsOrder=["DashboardOrganism"]},"./node_modules/lodash.debounce/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var NAN=NaN,symbolTag="[object Symbol]",reTrim=/^\s+|\s+$/g,reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt,freeGlobal="object"==typeof __webpack_require__.g&&__webpack_require__.g&&__webpack_require__.g.Object===Object&&__webpack_require__.g,freeSelf="object"==typeof self&&self&&self.Object===Object&&self,root=freeGlobal||freeSelf||Function("return this")(),objectToString=Object.prototype.toString,nativeMax=Math.max,nativeMin=Math.min,now=function(){return root.Date.now()};function isObject(value){var type=typeof value;return!!value&&("object"==type||"function"==type)}function toNumber(value){if("number"==typeof value)return value;if(function isSymbol(value){return"symbol"==typeof value||function isObjectLike(value){return!!value&&"object"==typeof value}(value)&&objectToString.call(value)==symbolTag}(value))return NAN;if(isObject(value)){var other="function"==typeof value.valueOf?value.valueOf():value;value=isObject(other)?other+"":other}if("string"!=typeof value)return 0===value?value:+value;value=value.replace(reTrim,"");var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value}module.exports=function debounce(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=!1,maxing=!1,trailing=!0;if("function"!=typeof func)throw new TypeError("Expected a function");function invokeFunc(time){var args=lastArgs,thisArg=lastThis;return lastArgs=lastThis=void 0,lastInvokeTime=time,result=func.apply(thisArg,args)}function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime;return void 0===lastCallTime||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&time-lastInvokeTime>=maxWait}function timerExpired(){var time=now();if(shouldInvoke(time))return trailingEdge(time);timerId=setTimeout(timerExpired,function remainingWait(time){var result=wait-(time-lastCallTime);return maxing?nativeMin(result,maxWait-(time-lastInvokeTime)):result}(time))}function trailingEdge(time){return timerId=void 0,trailing&&lastArgs?invokeFunc(time):(lastArgs=lastThis=void 0,result)}function debounced(){var time=now(),isInvoking=shouldInvoke(time);if(lastArgs=arguments,lastThis=this,lastCallTime=time,isInvoking){if(void 0===timerId)return function leadingEdge(time){return lastInvokeTime=time,timerId=setTimeout(timerExpired,wait),leading?invokeFunc(time):result}(lastCallTime);if(maxing)return timerId=setTimeout(timerExpired,wait),invokeFunc(lastCallTime)}return void 0===timerId&&(timerId=setTimeout(timerExpired,wait)),result}return wait=toNumber(wait)||0,isObject(options)&&(leading=!!options.leading,maxWait=(maxing="maxWait"in options)?nativeMax(toNumber(options.maxWait)||0,wait):maxWait,trailing="trailing"in options?!!options.trailing:trailing),debounced.cancel=function cancel(){void 0!==timerId&&clearTimeout(timerId),lastInvokeTime=0,lastArgs=lastCallTime=lastThis=timerId=void 0},debounced.flush=function flush(){return void 0===timerId?result:trailingEdge(now())},debounced}},"./node_modules/rooks/dist/esm/hooks/useDebounce.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>useDebounce});var lodash_debounce=__webpack_require__("./node_modules/lodash.debounce/index.js"),lodash_debounce_default=__webpack_require__.n(lodash_debounce),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const useIsomorphicEffect="undefined"==typeof window?react.useEffect:react.useLayoutEffect;function useDebounce(callback,wait,options){const createDebouncedCallback=(0,react.useCallback)((function_=>lodash_debounce_default()(function_,wait,options)),[wait,options]),freshCallback=function useFreshRef(value,preferLayoutEffect=!1){const useEffectToUse=preferLayoutEffect?useIsomorphicEffect:react.useEffect,ref=(0,react.useRef)(value);return useEffectToUse((()=>{ref.current=value})),ref}(callback);const debouncedCallbackRef=(0,react.useRef)(createDebouncedCallback((function tick(...args){var _a;null===(_a=freshCallback.current)||void 0===_a||_a.call(freshCallback,...args)})));return function useWillUnmount(callback){(0,react.useEffect)((()=>callback),[])}((()=>{var _a;return null===(_a=debouncedCallbackRef.current)||void 0===_a?void 0:_a.cancel()})),debouncedCallbackRef.current}}}]);