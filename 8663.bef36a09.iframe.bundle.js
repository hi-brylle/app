"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[8663],{"./node_modules/@radix-ui/react-dialog/dist/index.module.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x8:()=>$5d3850c4d0b4e6c7$export$f39c2d165cd861fe,VY:()=>$5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2,dk:()=>$5d3850c4d0b4e6c7$export$393edc798c47379d,aV:()=>$5d3850c4d0b4e6c7$export$c6fdb837b070b4ff,h_:()=>$5d3850c4d0b4e6c7$export$602eac185826482c,fC:()=>$5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9,Dx:()=>$5d3850c4d0b4e6c7$export$f99233281efd08a0,xz:()=>$5d3850c4d0b4e6c7$export$41fb9f06171c75f4,jm:()=>$5d3850c4d0b4e6c7$export$69b62a49393917d6,p8:()=>$5d3850c4d0b4e6c7$export$cc702773b8ea3e41});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),index_module=__webpack_require__("./node_modules/@radix-ui/primitive/dist/index.module.js"),dist_index_module=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.module.js"),react_context_dist_index_module=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.module.js"),react_id_dist_index_module=__webpack_require__("./node_modules/@radix-ui/react-id/dist/index.module.js"),react_use_controllable_state_dist_index_module=__webpack_require__("./node_modules/@radix-ui/react-use-controllable-state/dist/index.module.js"),react_dom=__webpack_require__("./node_modules/next/dist/compiled/react-dom/index.js");const $5e63c961fc1ce211$export$8c6ed5c666ac1360=(0,react.forwardRef)(((props,forwardedRef)=>{const{children,...slotProps}=props,childrenArray=react.Children.toArray(children),slottable=childrenArray.find($5e63c961fc1ce211$var$isSlottable);if(slottable){const newElement=slottable.props.children,newChildren=childrenArray.map((child=>child===slottable?react.Children.count(newElement)>1?react.Children.only(null):(0,react.isValidElement)(newElement)?newElement.props.children:null:child));return(0,react.createElement)($5e63c961fc1ce211$var$SlotClone,(0,esm_extends.Z)({},slotProps,{ref:forwardedRef}),(0,react.isValidElement)(newElement)?(0,react.cloneElement)(newElement,void 0,newChildren):null)}return(0,react.createElement)($5e63c961fc1ce211$var$SlotClone,(0,esm_extends.Z)({},slotProps,{ref:forwardedRef}),children)}));$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName="Slot";const $5e63c961fc1ce211$var$SlotClone=(0,react.forwardRef)(((props,forwardedRef)=>{const{children,...slotProps}=props;return(0,react.isValidElement)(children)?(0,react.cloneElement)(children,{...$5e63c961fc1ce211$var$mergeProps(slotProps,children.props),ref:(0,dist_index_module.F)(forwardedRef,children.ref)}):react.Children.count(children)>1?react.Children.only(null):null}));$5e63c961fc1ce211$var$SlotClone.displayName="SlotClone";const $5e63c961fc1ce211$export$d9f1ccf0bdb05d45=({children})=>(0,react.createElement)(react.Fragment,null,children);function $5e63c961fc1ce211$var$isSlottable(child){return(0,react.isValidElement)(child)&&child.type===$5e63c961fc1ce211$export$d9f1ccf0bdb05d45}function $5e63c961fc1ce211$var$mergeProps(slotProps,childProps){const overrideProps={...childProps};for(const propName in childProps){const slotPropValue=slotProps[propName],childPropValue=childProps[propName];/^on[A-Z]/.test(propName)?slotPropValue&&childPropValue?overrideProps[propName]=(...args)=>{childPropValue(...args),slotPropValue(...args)}:slotPropValue&&(overrideProps[propName]=slotPropValue):"style"===propName?overrideProps[propName]={...slotPropValue,...childPropValue}:"className"===propName&&(overrideProps[propName]=[slotPropValue,childPropValue].filter(Boolean).join(" "))}return{...slotProps,...overrideProps}}const $8927f6f2acc4f386$export$250ffa63cdc0d034=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"].reduce(((primitive,node)=>{const Node=(0,react.forwardRef)(((props,forwardedRef)=>{const{asChild,...primitiveProps}=props,Comp=asChild?$5e63c961fc1ce211$export$8c6ed5c666ac1360:node;return(0,react.useEffect)((()=>{window[Symbol.for("radix-ui")]=!0}),[]),(0,react.createElement)(Comp,(0,esm_extends.Z)({},primitiveProps,{ref:forwardedRef}))}));return Node.displayName=`Primitive.${node}`,{...primitive,[node]:Node}}),{});var react_use_callback_ref_dist_index_module=__webpack_require__("./node_modules/@radix-ui/react-use-callback-ref/dist/index.module.js");let $5cb92bef7577960e$var$originalBodyPointerEvents;const $5cb92bef7577960e$var$DismissableLayerContext=(0,react.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),$5cb92bef7577960e$export$177fb62ff3ec1f22=(0,react.forwardRef)(((props,forwardedRef)=>{var _node$ownerDocument;const{disableOutsidePointerEvents=!1,onEscapeKeyDown,onPointerDownOutside,onFocusOutside,onInteractOutside,onDismiss,...layerProps}=props,context=(0,react.useContext)($5cb92bef7577960e$var$DismissableLayerContext),[node1,setNode]=(0,react.useState)(null),ownerDocument=null!==(_node$ownerDocument=null==node1?void 0:node1.ownerDocument)&&void 0!==_node$ownerDocument?_node$ownerDocument:null===globalThis||void 0===globalThis?void 0:globalThis.document,[,force]=(0,react.useState)({}),composedRefs=(0,dist_index_module.e)(forwardedRef,(node=>setNode(node))),layers=Array.from(context.layers),[highestLayerWithOutsidePointerEventsDisabled]=[...context.layersWithOutsidePointerEventsDisabled].slice(-1),highestLayerWithOutsidePointerEventsDisabledIndex=layers.indexOf(highestLayerWithOutsidePointerEventsDisabled),index=node1?layers.indexOf(node1):-1,isBodyPointerEventsDisabled=context.layersWithOutsidePointerEventsDisabled.size>0,isPointerEventsEnabled=index>=highestLayerWithOutsidePointerEventsDisabledIndex,pointerDownOutside=function $5cb92bef7577960e$var$usePointerDownOutside(onPointerDownOutside,ownerDocument=(null===globalThis||void 0===globalThis?void 0:globalThis.document)){const handlePointerDownOutside=(0,react_use_callback_ref_dist_index_module.W)(onPointerDownOutside),isPointerInsideReactTreeRef=(0,react.useRef)(!1),handleClickRef=(0,react.useRef)((()=>{}));return(0,react.useEffect)((()=>{const handlePointerDown=event=>{if(event.target&&!isPointerInsideReactTreeRef.current){const eventDetail={originalEvent:event};function handleAndDispatchPointerDownOutsideEvent(){$5cb92bef7577960e$var$handleAndDispatchCustomEvent("dismissableLayer.pointerDownOutside",handlePointerDownOutside,eventDetail,{discrete:!0})}"touch"===event.pointerType?(ownerDocument.removeEventListener("click",handleClickRef.current),handleClickRef.current=handleAndDispatchPointerDownOutsideEvent,ownerDocument.addEventListener("click",handleClickRef.current,{once:!0})):handleAndDispatchPointerDownOutsideEvent()}isPointerInsideReactTreeRef.current=!1},timerId=window.setTimeout((()=>{ownerDocument.addEventListener("pointerdown",handlePointerDown)}),0);return()=>{window.clearTimeout(timerId),ownerDocument.removeEventListener("pointerdown",handlePointerDown),ownerDocument.removeEventListener("click",handleClickRef.current)}}),[ownerDocument,handlePointerDownOutside]),{onPointerDownCapture:()=>isPointerInsideReactTreeRef.current=!0}}((event=>{const target=event.target,isPointerDownOnBranch=[...context.branches].some((branch=>branch.contains(target)));isPointerEventsEnabled&&!isPointerDownOnBranch&&(null==onPointerDownOutside||onPointerDownOutside(event),null==onInteractOutside||onInteractOutside(event),event.defaultPrevented||null==onDismiss||onDismiss())}),ownerDocument),focusOutside=function $5cb92bef7577960e$var$useFocusOutside(onFocusOutside,ownerDocument=(null===globalThis||void 0===globalThis?void 0:globalThis.document)){const handleFocusOutside=(0,react_use_callback_ref_dist_index_module.W)(onFocusOutside),isFocusInsideReactTreeRef=(0,react.useRef)(!1);return(0,react.useEffect)((()=>{const handleFocus=event=>{if(event.target&&!isFocusInsideReactTreeRef.current){$5cb92bef7577960e$var$handleAndDispatchCustomEvent("dismissableLayer.focusOutside",handleFocusOutside,{originalEvent:event},{discrete:!1})}};return ownerDocument.addEventListener("focusin",handleFocus),()=>ownerDocument.removeEventListener("focusin",handleFocus)}),[ownerDocument,handleFocusOutside]),{onFocusCapture:()=>isFocusInsideReactTreeRef.current=!0,onBlurCapture:()=>isFocusInsideReactTreeRef.current=!1}}((event=>{const target=event.target;[...context.branches].some((branch=>branch.contains(target)))||(null==onFocusOutside||onFocusOutside(event),null==onInteractOutside||onInteractOutside(event),event.defaultPrevented||null==onDismiss||onDismiss())}),ownerDocument);return function $addc16e1bbe58fd0$export$3a72a57244d6e765(onEscapeKeyDownProp,ownerDocument=(null===globalThis||void 0===globalThis?void 0:globalThis.document)){const onEscapeKeyDown=(0,react_use_callback_ref_dist_index_module.W)(onEscapeKeyDownProp);(0,react.useEffect)((()=>{const handleKeyDown=event=>{"Escape"===event.key&&onEscapeKeyDown(event)};return ownerDocument.addEventListener("keydown",handleKeyDown),()=>ownerDocument.removeEventListener("keydown",handleKeyDown)}),[onEscapeKeyDown,ownerDocument])}((event=>{index===context.layers.size-1&&(null==onEscapeKeyDown||onEscapeKeyDown(event),!event.defaultPrevented&&onDismiss&&(event.preventDefault(),onDismiss()))}),ownerDocument),(0,react.useEffect)((()=>{if(node1)return disableOutsidePointerEvents&&(0===context.layersWithOutsidePointerEventsDisabled.size&&($5cb92bef7577960e$var$originalBodyPointerEvents=ownerDocument.body.style.pointerEvents,ownerDocument.body.style.pointerEvents="none"),context.layersWithOutsidePointerEventsDisabled.add(node1)),context.layers.add(node1),$5cb92bef7577960e$var$dispatchUpdate(),()=>{disableOutsidePointerEvents&&1===context.layersWithOutsidePointerEventsDisabled.size&&(ownerDocument.body.style.pointerEvents=$5cb92bef7577960e$var$originalBodyPointerEvents)}}),[node1,ownerDocument,disableOutsidePointerEvents,context]),(0,react.useEffect)((()=>()=>{node1&&(context.layers.delete(node1),context.layersWithOutsidePointerEventsDisabled.delete(node1),$5cb92bef7577960e$var$dispatchUpdate())}),[node1,context]),(0,react.useEffect)((()=>{const handleUpdate=()=>force({});return document.addEventListener("dismissableLayer.update",handleUpdate),()=>document.removeEventListener("dismissableLayer.update",handleUpdate)}),[]),(0,react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div,(0,esm_extends.Z)({},layerProps,{ref:composedRefs,style:{pointerEvents:isBodyPointerEventsDisabled?isPointerEventsEnabled?"auto":"none":void 0,...props.style},onFocusCapture:(0,index_module.M)(props.onFocusCapture,focusOutside.onFocusCapture),onBlurCapture:(0,index_module.M)(props.onBlurCapture,focusOutside.onBlurCapture),onPointerDownCapture:(0,index_module.M)(props.onPointerDownCapture,pointerDownOutside.onPointerDownCapture)}))}));function $5cb92bef7577960e$var$dispatchUpdate(){const event=new CustomEvent("dismissableLayer.update");document.dispatchEvent(event)}function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(name,handler,detail,{discrete}){const target=detail.originalEvent.target,event=new CustomEvent(name,{bubbles:!1,cancelable:!0,detail});handler&&target.addEventListener(name,handler,{once:!0}),discrete?function $8927f6f2acc4f386$export$6d1a0317bde7de7f(target,event){target&&(0,react_dom.flushSync)((()=>target.dispatchEvent(event)))}(target,event):target.dispatchEvent(event)}const $d3863c46a17e8a28$var$EVENT_OPTIONS={bubbles:!1,cancelable:!0},$d3863c46a17e8a28$export$20e40289641fbbb6=(0,react.forwardRef)(((props,forwardedRef)=>{const{loop=!1,trapped=!1,onMountAutoFocus:onMountAutoFocusProp,onUnmountAutoFocus:onUnmountAutoFocusProp,...scopeProps}=props,[container1,setContainer]=(0,react.useState)(null),onMountAutoFocus=(0,react_use_callback_ref_dist_index_module.W)(onMountAutoFocusProp),onUnmountAutoFocus=(0,react_use_callback_ref_dist_index_module.W)(onUnmountAutoFocusProp),lastFocusedElementRef=(0,react.useRef)(null),composedRefs=(0,dist_index_module.e)(forwardedRef,(node=>setContainer(node))),focusScope=(0,react.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,react.useEffect)((()=>{if(trapped){function handleFocusIn(event){if(focusScope.paused||!container1)return;const target=event.target;container1.contains(target)?lastFocusedElementRef.current=target:$d3863c46a17e8a28$var$focus(lastFocusedElementRef.current,{select:!0})}function handleFocusOut(event){!focusScope.paused&&container1&&(container1.contains(event.relatedTarget)||$d3863c46a17e8a28$var$focus(lastFocusedElementRef.current,{select:!0}))}return document.addEventListener("focusin",handleFocusIn),document.addEventListener("focusout",handleFocusOut),()=>{document.removeEventListener("focusin",handleFocusIn),document.removeEventListener("focusout",handleFocusOut)}}}),[trapped,container1,focusScope.paused]),(0,react.useEffect)((()=>{if(container1){$d3863c46a17e8a28$var$focusScopesStack.add(focusScope);const previouslyFocusedElement=document.activeElement;if(!container1.contains(previouslyFocusedElement)){const mountEvent=new CustomEvent("focusScope.autoFocusOnMount",$d3863c46a17e8a28$var$EVENT_OPTIONS);container1.addEventListener("focusScope.autoFocusOnMount",onMountAutoFocus),container1.dispatchEvent(mountEvent),mountEvent.defaultPrevented||(!function $d3863c46a17e8a28$var$focusFirst(candidates,{select=!1}={}){const previouslyFocusedElement=document.activeElement;for(const candidate of candidates)if($d3863c46a17e8a28$var$focus(candidate,{select}),document.activeElement!==previouslyFocusedElement)return}(function $d3863c46a17e8a28$var$removeLinks(items){return items.filter((item=>"A"!==item.tagName))}($d3863c46a17e8a28$var$getTabbableCandidates(container1)),{select:!0}),document.activeElement===previouslyFocusedElement&&$d3863c46a17e8a28$var$focus(container1))}return()=>{container1.removeEventListener("focusScope.autoFocusOnMount",onMountAutoFocus),setTimeout((()=>{const unmountEvent=new CustomEvent("focusScope.autoFocusOnUnmount",$d3863c46a17e8a28$var$EVENT_OPTIONS);container1.addEventListener("focusScope.autoFocusOnUnmount",onUnmountAutoFocus),container1.dispatchEvent(unmountEvent),unmountEvent.defaultPrevented||$d3863c46a17e8a28$var$focus(null!=previouslyFocusedElement?previouslyFocusedElement:document.body,{select:!0}),container1.removeEventListener("focusScope.autoFocusOnUnmount",onUnmountAutoFocus),$d3863c46a17e8a28$var$focusScopesStack.remove(focusScope)}),0)}}}),[container1,onMountAutoFocus,onUnmountAutoFocus,focusScope]);const handleKeyDown=(0,react.useCallback)((event=>{if(!loop&&!trapped)return;if(focusScope.paused)return;const isTabKey="Tab"===event.key&&!event.altKey&&!event.ctrlKey&&!event.metaKey,focusedElement=document.activeElement;if(isTabKey&&focusedElement){const container=event.currentTarget,[first,last]=function $d3863c46a17e8a28$var$getTabbableEdges(container){const candidates=$d3863c46a17e8a28$var$getTabbableCandidates(container),first=$d3863c46a17e8a28$var$findVisible(candidates,container),last=$d3863c46a17e8a28$var$findVisible(candidates.reverse(),container);return[first,last]}(container);first&&last?event.shiftKey||focusedElement!==last?event.shiftKey&&focusedElement===first&&(event.preventDefault(),loop&&$d3863c46a17e8a28$var$focus(last,{select:!0})):(event.preventDefault(),loop&&$d3863c46a17e8a28$var$focus(first,{select:!0})):focusedElement===container&&event.preventDefault()}}),[loop,trapped,focusScope.paused]);return(0,react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div,(0,esm_extends.Z)({tabIndex:-1},scopeProps,{ref:composedRefs,onKeyDown:handleKeyDown}))}));function $d3863c46a17e8a28$var$getTabbableCandidates(container){const nodes=[],walker=document.createTreeWalker(container,NodeFilter.SHOW_ELEMENT,{acceptNode:node=>{const isHiddenInput="INPUT"===node.tagName&&"hidden"===node.type;return node.disabled||node.hidden||isHiddenInput?NodeFilter.FILTER_SKIP:node.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;walker.nextNode();)nodes.push(walker.currentNode);return nodes}function $d3863c46a17e8a28$var$findVisible(elements,container){for(const element of elements)if(!$d3863c46a17e8a28$var$isHidden(element,{upTo:container}))return element}function $d3863c46a17e8a28$var$isHidden(node,{upTo}){if("hidden"===getComputedStyle(node).visibility)return!0;for(;node;){if(void 0!==upTo&&node===upTo)return!1;if("none"===getComputedStyle(node).display)return!0;node=node.parentElement}return!1}function $d3863c46a17e8a28$var$focus(element,{select=!1}={}){if(element&&element.focus){const previouslyFocusedElement=document.activeElement;element.focus({preventScroll:!0}),element!==previouslyFocusedElement&&function $d3863c46a17e8a28$var$isSelectableInput(element){return element instanceof HTMLInputElement&&"select"in element}(element)&&select&&element.select()}}const $d3863c46a17e8a28$var$focusScopesStack=function $d3863c46a17e8a28$var$createFocusScopesStack(){let stack=[];return{add(focusScope){const activeFocusScope=stack[0];focusScope!==activeFocusScope&&(null==activeFocusScope||activeFocusScope.pause()),stack=$d3863c46a17e8a28$var$arrayRemove(stack,focusScope),stack.unshift(focusScope)},remove(focusScope){var _stack$;stack=$d3863c46a17e8a28$var$arrayRemove(stack,focusScope),null===(_stack$=stack[0])||void 0===_stack$||_stack$.resume()}}}();function $d3863c46a17e8a28$var$arrayRemove(array,item){const updatedArray=[...array],index=updatedArray.indexOf(item);return-1!==index&&updatedArray.splice(index,1),updatedArray}const $f1701beae083dbae$export$602eac185826482c=(0,react.forwardRef)(((props,forwardedRef)=>{var _globalThis$document;const{container=null===globalThis||void 0===globalThis||null===(_globalThis$document=globalThis.document)||void 0===_globalThis$document?void 0:_globalThis$document.body,...portalProps}=props;return container?react_dom.createPortal((0,react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div,(0,esm_extends.Z)({},portalProps,{ref:forwardedRef})),container):null}));var react_presence_dist_index_module=__webpack_require__("./node_modules/@radix-ui/react-presence/dist/index.module.js"),react_focus_guards_dist_index_module=__webpack_require__("./node_modules/@radix-ui/react-focus-guards/dist/index.module.js");var __assign=function(){return __assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};Object.create;Object.create;var constants=__webpack_require__("./node_modules/react-remove-scroll-bar/dist/es2015/constants.js"),useMergeRef=__webpack_require__("./node_modules/use-callback-ref/dist/es2015/useMergeRef.js"),effectCar=(0,__webpack_require__("./node_modules/use-sidecar/dist/es2015/medium.js")._)(),nothing=function(){},RemoveScroll=react.forwardRef((function(props,parentRef){var ref=react.useRef(null),_a=react.useState({onScrollCapture:nothing,onWheelCapture:nothing,onTouchMoveCapture:nothing}),callbacks=_a[0],setCallbacks=_a[1],forwardProps=props.forwardProps,children=props.children,className=props.className,removeScrollBar=props.removeScrollBar,enabled=props.enabled,shards=props.shards,sideCar=props.sideCar,noIsolation=props.noIsolation,inert=props.inert,allowPinchZoom=props.allowPinchZoom,_b=props.as,Container=void 0===_b?"div":_b,rest=function __rest(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t}(props,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),SideCar=sideCar,containerRef=(0,useMergeRef.q)([ref,parentRef]),containerProps=__assign(__assign({},rest),callbacks);return react.createElement(react.Fragment,null,enabled&&react.createElement(SideCar,{sideCar:effectCar,removeScrollBar,shards,noIsolation,inert,setCallbacks,allowPinchZoom:!!allowPinchZoom,lockRef:ref}),forwardProps?react.cloneElement(react.Children.only(children),__assign(__assign({},containerProps),{ref:containerRef})):react.createElement(Container,__assign({},containerProps,{className,ref:containerRef}),children))}));RemoveScroll.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},RemoveScroll.classNames={fullWidth:constants.zi,zeroRight:constants.pF};var es2015_exports=__webpack_require__("./node_modules/use-sidecar/dist/es2015/exports.js"),es2015=__webpack_require__("./node_modules/react-remove-scroll-bar/dist/es2015/index.js"),dist_es2015=__webpack_require__("./node_modules/react-style-singleton/dist/es2015/index.js"),passiveSupported=!1;if("undefined"!=typeof window)try{var options=Object.defineProperty({},"passive",{get:function(){return passiveSupported=!0,!0}});window.addEventListener("test",options,options),window.removeEventListener("test",options,options)}catch(err){passiveSupported=!1}var nonPassive=!!passiveSupported&&{passive:!1},elementCanBeScrolled=function(node,overflow){var styles=window.getComputedStyle(node);return"hidden"!==styles[overflow]&&!(styles.overflowY===styles.overflowX&&!function(node){return"TEXTAREA"===node.tagName}(node)&&"visible"===styles[overflow])},locationCouldBeScrolled=function(axis,node){var current=node;do{if("undefined"!=typeof ShadowRoot&&current instanceof ShadowRoot&&(current=current.host),elementCouldBeScrolled(axis,current)){var _a=getScrollVariables(axis,current);if(_a[1]>_a[2])return!0}current=current.parentNode}while(current&&current!==document.body);return!1},elementCouldBeScrolled=function(axis,node){return"v"===axis?function(node){return elementCanBeScrolled(node,"overflowY")}(node):function(node){return elementCanBeScrolled(node,"overflowX")}(node)},getScrollVariables=function(axis,node){return"v"===axis?[(_a=node).scrollTop,_a.scrollHeight,_a.clientHeight]:function(_a){return[_a.scrollLeft,_a.scrollWidth,_a.clientWidth]}(node);var _a},getTouchXY=function(event){return"changedTouches"in event?[event.changedTouches[0].clientX,event.changedTouches[0].clientY]:[0,0]},getDeltaXY=function(event){return[event.deltaX,event.deltaY]},extractRef=function(ref){return ref&&"current"in ref?ref.current:ref},generateStyle=function(id){return"\n  .block-interactivity-".concat(id," {pointer-events: none;}\n  .allow-interactivity-").concat(id," {pointer-events: all;}\n")},idCounter=0,lockStack=[];const sidecar=(0,es2015_exports.L)(effectCar,(function RemoveScrollSideCar(props){var shouldPreventQueue=react.useRef([]),touchStartRef=react.useRef([0,0]),activeAxis=react.useRef(),id=react.useState(idCounter++)[0],Style=react.useState((function(){return(0,dist_es2015.Ws)()}))[0],lastProps=react.useRef(props);react.useEffect((function(){lastProps.current=props}),[props]),react.useEffect((function(){if(props.inert){document.body.classList.add("block-interactivity-".concat(id));var allow_1=function __spreadArray(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))}([props.lockRef.current],(props.shards||[]).map(extractRef),!0).filter(Boolean);return allow_1.forEach((function(el){return el.classList.add("allow-interactivity-".concat(id))})),function(){document.body.classList.remove("block-interactivity-".concat(id)),allow_1.forEach((function(el){return el.classList.remove("allow-interactivity-".concat(id))}))}}}),[props.inert,props.lockRef.current,props.shards]);var shouldCancelEvent=react.useCallback((function(event,parent){if("touches"in event&&2===event.touches.length)return!lastProps.current.allowPinchZoom;var currentAxis,touch=getTouchXY(event),touchStart=touchStartRef.current,deltaX="deltaX"in event?event.deltaX:touchStart[0]-touch[0],deltaY="deltaY"in event?event.deltaY:touchStart[1]-touch[1],target=event.target,moveDirection=Math.abs(deltaX)>Math.abs(deltaY)?"h":"v";if("touches"in event&&"h"===moveDirection&&"range"===target.type)return!1;var canBeScrolledInMainDirection=locationCouldBeScrolled(moveDirection,target);if(!canBeScrolledInMainDirection)return!0;if(canBeScrolledInMainDirection?currentAxis=moveDirection:(currentAxis="v"===moveDirection?"h":"v",canBeScrolledInMainDirection=locationCouldBeScrolled(moveDirection,target)),!canBeScrolledInMainDirection)return!1;if(!activeAxis.current&&"changedTouches"in event&&(deltaX||deltaY)&&(activeAxis.current=currentAxis),!currentAxis)return!0;var cancelingAxis=activeAxis.current||currentAxis;return function(axis,endTarget,event,sourceDelta,noOverscroll){var directionFactor=function(axis,direction){return"h"===axis&&"rtl"===direction?-1:1}(axis,window.getComputedStyle(endTarget).direction),delta=directionFactor*sourceDelta,target=event.target,targetInLock=endTarget.contains(target),shouldCancelScroll=!1,isDeltaPositive=delta>0,availableScroll=0,availableScrollTop=0;do{var _a=getScrollVariables(axis,target),position=_a[0],elementScroll=_a[1]-_a[2]-directionFactor*position;(position||elementScroll)&&elementCouldBeScrolled(axis,target)&&(availableScroll+=elementScroll,availableScrollTop+=position),target=target.parentNode}while(!targetInLock&&target!==document.body||targetInLock&&(endTarget.contains(target)||endTarget===target));return(isDeltaPositive&&(noOverscroll&&0===availableScroll||!noOverscroll&&delta>availableScroll)||!isDeltaPositive&&(noOverscroll&&0===availableScrollTop||!noOverscroll&&-delta>availableScrollTop))&&(shouldCancelScroll=!0),shouldCancelScroll}(cancelingAxis,parent,event,"h"===cancelingAxis?deltaX:deltaY,!0)}),[]),shouldPrevent=react.useCallback((function(_event){var event=_event;if(lockStack.length&&lockStack[lockStack.length-1]===Style){var delta="deltaY"in event?getDeltaXY(event):getTouchXY(event),sourceEvent=shouldPreventQueue.current.filter((function(e){return e.name===event.type&&e.target===event.target&&(x=e.delta,y=delta,x[0]===y[0]&&x[1]===y[1]);var x,y}))[0];if(sourceEvent&&sourceEvent.should)event.cancelable&&event.preventDefault();else if(!sourceEvent){var shardNodes=(lastProps.current.shards||[]).map(extractRef).filter(Boolean).filter((function(node){return node.contains(event.target)}));(shardNodes.length>0?shouldCancelEvent(event,shardNodes[0]):!lastProps.current.noIsolation)&&event.cancelable&&event.preventDefault()}}}),[]),shouldCancel=react.useCallback((function(name,delta,target,should){var event={name,delta,target,should};shouldPreventQueue.current.push(event),setTimeout((function(){shouldPreventQueue.current=shouldPreventQueue.current.filter((function(e){return e!==event}))}),1)}),[]),scrollTouchStart=react.useCallback((function(event){touchStartRef.current=getTouchXY(event),activeAxis.current=void 0}),[]),scrollWheel=react.useCallback((function(event){shouldCancel(event.type,getDeltaXY(event),event.target,shouldCancelEvent(event,props.lockRef.current))}),[]),scrollTouchMove=react.useCallback((function(event){shouldCancel(event.type,getTouchXY(event),event.target,shouldCancelEvent(event,props.lockRef.current))}),[]);react.useEffect((function(){return lockStack.push(Style),props.setCallbacks({onScrollCapture:scrollWheel,onWheelCapture:scrollWheel,onTouchMoveCapture:scrollTouchMove}),document.addEventListener("wheel",shouldPrevent,nonPassive),document.addEventListener("touchmove",shouldPrevent,nonPassive),document.addEventListener("touchstart",scrollTouchStart,nonPassive),function(){lockStack=lockStack.filter((function(inst){return inst!==Style})),document.removeEventListener("wheel",shouldPrevent,nonPassive),document.removeEventListener("touchmove",shouldPrevent,nonPassive),document.removeEventListener("touchstart",scrollTouchStart,nonPassive)}}),[]);var removeScrollBar=props.removeScrollBar,inert=props.inert;return react.createElement(react.Fragment,null,inert?react.createElement(Style,{styles:generateStyle(id)}):null,removeScrollBar?react.createElement(es2015.jp,{gapMode:"margin"}):null)}));var ReactRemoveScroll=react.forwardRef((function(props,ref){return react.createElement(RemoveScroll,__assign({},props,{ref,sideCar:sidecar}))}));ReactRemoveScroll.classNames=RemoveScroll.classNames;const Combination=ReactRemoveScroll;var aria_hidden_dist_es2015=__webpack_require__("./node_modules/aria-hidden/dist/es2015/index.js");__webpack_require__("./node_modules/console-browserify/index.js");const[$5d3850c4d0b4e6c7$var$createDialogContext,$5d3850c4d0b4e6c7$export$cc702773b8ea3e41]=(0,react_context_dist_index_module.b)("Dialog"),[$5d3850c4d0b4e6c7$var$DialogProvider,$5d3850c4d0b4e6c7$var$useDialogContext]=$5d3850c4d0b4e6c7$var$createDialogContext("Dialog"),$5d3850c4d0b4e6c7$export$3ddf2d174ce01153=props=>{const{__scopeDialog,children,open:openProp,defaultOpen,onOpenChange,modal=!0}=props,triggerRef=(0,react.useRef)(null),contentRef=(0,react.useRef)(null),[open=!1,setOpen]=(0,react_use_controllable_state_dist_index_module.T)({prop:openProp,defaultProp:defaultOpen,onChange:onOpenChange});return(0,react.createElement)($5d3850c4d0b4e6c7$var$DialogProvider,{scope:__scopeDialog,triggerRef,contentRef,contentId:(0,react_id_dist_index_module.M)(),titleId:(0,react_id_dist_index_module.M)(),descriptionId:(0,react_id_dist_index_module.M)(),open,onOpenChange:setOpen,onOpenToggle:(0,react.useCallback)((()=>setOpen((prevOpen=>!prevOpen))),[setOpen]),modal},children)},$5d3850c4d0b4e6c7$export$2e1e1122cf0cba88=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeDialog,...triggerProps}=props,context=$5d3850c4d0b4e6c7$var$useDialogContext("DialogTrigger",__scopeDialog),composedTriggerRef=(0,dist_index_module.e)(forwardedRef,context.triggerRef);return(0,react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button,(0,esm_extends.Z)({type:"button","aria-haspopup":"dialog","aria-expanded":context.open,"aria-controls":context.contentId,"data-state":$5d3850c4d0b4e6c7$var$getState(context.open)},triggerProps,{ref:composedTriggerRef,onClick:(0,index_module.M)(props.onClick,context.onOpenToggle)}))})),[$5d3850c4d0b4e6c7$var$PortalProvider,$5d3850c4d0b4e6c7$var$usePortalContext]=$5d3850c4d0b4e6c7$var$createDialogContext("DialogPortal",{forceMount:void 0}),$5d3850c4d0b4e6c7$export$dad7c95542bacce0=props=>{const{__scopeDialog,forceMount,children,container}=props,context=$5d3850c4d0b4e6c7$var$useDialogContext("DialogPortal",__scopeDialog);return(0,react.createElement)($5d3850c4d0b4e6c7$var$PortalProvider,{scope:__scopeDialog,forceMount},react.Children.map(children,(child=>(0,react.createElement)(react_presence_dist_index_module.z,{present:forceMount||context.open},(0,react.createElement)($f1701beae083dbae$export$602eac185826482c,{asChild:!0,container},child)))))},$5d3850c4d0b4e6c7$export$bd1d06c79be19e17=(0,react.forwardRef)(((props,forwardedRef)=>{const portalContext=$5d3850c4d0b4e6c7$var$usePortalContext("DialogOverlay",props.__scopeDialog),{forceMount=portalContext.forceMount,...overlayProps}=props,context=$5d3850c4d0b4e6c7$var$useDialogContext("DialogOverlay",props.__scopeDialog);return context.modal?(0,react.createElement)(react_presence_dist_index_module.z,{present:forceMount||context.open},(0,react.createElement)($5d3850c4d0b4e6c7$var$DialogOverlayImpl,(0,esm_extends.Z)({},overlayProps,{ref:forwardedRef}))):null})),$5d3850c4d0b4e6c7$var$DialogOverlayImpl=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeDialog,...overlayProps}=props,context=$5d3850c4d0b4e6c7$var$useDialogContext("DialogOverlay",__scopeDialog);return(0,react.createElement)(Combination,{as:$5e63c961fc1ce211$export$8c6ed5c666ac1360,allowPinchZoom:!0,shards:[context.contentRef]},(0,react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div,(0,esm_extends.Z)({"data-state":$5d3850c4d0b4e6c7$var$getState(context.open)},overlayProps,{ref:forwardedRef,style:{pointerEvents:"auto",...overlayProps.style}})))})),$5d3850c4d0b4e6c7$export$b6d9565de1e068cf=(0,react.forwardRef)(((props,forwardedRef)=>{const portalContext=$5d3850c4d0b4e6c7$var$usePortalContext("DialogContent",props.__scopeDialog),{forceMount=portalContext.forceMount,...contentProps}=props,context=$5d3850c4d0b4e6c7$var$useDialogContext("DialogContent",props.__scopeDialog);return(0,react.createElement)(react_presence_dist_index_module.z,{present:forceMount||context.open},context.modal?(0,react.createElement)($5d3850c4d0b4e6c7$var$DialogContentModal,(0,esm_extends.Z)({},contentProps,{ref:forwardedRef})):(0,react.createElement)($5d3850c4d0b4e6c7$var$DialogContentNonModal,(0,esm_extends.Z)({},contentProps,{ref:forwardedRef})))})),$5d3850c4d0b4e6c7$var$DialogContentModal=(0,react.forwardRef)(((props,forwardedRef)=>{const context=$5d3850c4d0b4e6c7$var$useDialogContext("DialogContent",props.__scopeDialog),contentRef=(0,react.useRef)(null),composedRefs=(0,dist_index_module.e)(forwardedRef,context.contentRef,contentRef);return(0,react.useEffect)((()=>{const content=contentRef.current;if(content)return(0,aria_hidden_dist_es2015.R)(content)}),[]),(0,react.createElement)($5d3850c4d0b4e6c7$var$DialogContentImpl,(0,esm_extends.Z)({},props,{ref:composedRefs,trapFocus:context.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,index_module.M)(props.onCloseAutoFocus,(event=>{var _context$triggerRef$c;event.preventDefault(),null===(_context$triggerRef$c=context.triggerRef.current)||void 0===_context$triggerRef$c||_context$triggerRef$c.focus()})),onPointerDownOutside:(0,index_module.M)(props.onPointerDownOutside,(event=>{const originalEvent=event.detail.originalEvent,ctrlLeftClick=0===originalEvent.button&&!0===originalEvent.ctrlKey;(2===originalEvent.button||ctrlLeftClick)&&event.preventDefault()})),onFocusOutside:(0,index_module.M)(props.onFocusOutside,(event=>event.preventDefault()))}))})),$5d3850c4d0b4e6c7$var$DialogContentNonModal=(0,react.forwardRef)(((props,forwardedRef)=>{const context=$5d3850c4d0b4e6c7$var$useDialogContext("DialogContent",props.__scopeDialog),hasInteractedOutsideRef=(0,react.useRef)(!1);return(0,react.createElement)($5d3850c4d0b4e6c7$var$DialogContentImpl,(0,esm_extends.Z)({},props,{ref:forwardedRef,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:event=>{var _props$onCloseAutoFoc,_context$triggerRef$c2;(null===(_props$onCloseAutoFoc=props.onCloseAutoFocus)||void 0===_props$onCloseAutoFoc||_props$onCloseAutoFoc.call(props,event),event.defaultPrevented)||(hasInteractedOutsideRef.current||null===(_context$triggerRef$c2=context.triggerRef.current)||void 0===_context$triggerRef$c2||_context$triggerRef$c2.focus(),event.preventDefault());hasInteractedOutsideRef.current=!1},onInteractOutside:event=>{var _props$onInteractOuts,_context$triggerRef$c3;null===(_props$onInteractOuts=props.onInteractOutside)||void 0===_props$onInteractOuts||_props$onInteractOuts.call(props,event),event.defaultPrevented||(hasInteractedOutsideRef.current=!0);const target=event.target;(null===(_context$triggerRef$c3=context.triggerRef.current)||void 0===_context$triggerRef$c3?void 0:_context$triggerRef$c3.contains(target))&&event.preventDefault()}}))})),$5d3850c4d0b4e6c7$var$DialogContentImpl=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeDialog,trapFocus,onOpenAutoFocus,onCloseAutoFocus,...contentProps}=props,context=$5d3850c4d0b4e6c7$var$useDialogContext("DialogContent",__scopeDialog),contentRef=(0,react.useRef)(null),composedRefs=(0,dist_index_module.e)(forwardedRef,contentRef);return(0,react_focus_guards_dist_index_module.EW)(),(0,react.createElement)(react.Fragment,null,(0,react.createElement)($d3863c46a17e8a28$export$20e40289641fbbb6,{asChild:!0,loop:!0,trapped:trapFocus,onMountAutoFocus:onOpenAutoFocus,onUnmountAutoFocus:onCloseAutoFocus},(0,react.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f22,(0,esm_extends.Z)({role:"dialog",id:context.contentId,"aria-describedby":context.descriptionId,"aria-labelledby":context.titleId,"data-state":$5d3850c4d0b4e6c7$var$getState(context.open)},contentProps,{ref:composedRefs,onDismiss:()=>context.onOpenChange(!1)}))),!1)})),$5d3850c4d0b4e6c7$export$16f7638e4a34b909=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeDialog,...titleProps}=props,context=$5d3850c4d0b4e6c7$var$useDialogContext("DialogTitle",__scopeDialog);return(0,react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.h2,(0,esm_extends.Z)({id:context.titleId},titleProps,{ref:forwardedRef}))})),$5d3850c4d0b4e6c7$export$94e94c2ec2c954d5=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeDialog,...descriptionProps}=props,context=$5d3850c4d0b4e6c7$var$useDialogContext("DialogDescription",__scopeDialog);return(0,react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.p,(0,esm_extends.Z)({id:context.descriptionId},descriptionProps,{ref:forwardedRef}))})),$5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeDialog,...closeProps}=props,context=$5d3850c4d0b4e6c7$var$useDialogContext("DialogClose",__scopeDialog);return(0,react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button,(0,esm_extends.Z)({type:"button"},closeProps,{ref:forwardedRef,onClick:(0,index_module.M)(props.onClick,(()=>context.onOpenChange(!1)))}))}));function $5d3850c4d0b4e6c7$var$getState(open){return open?"open":"closed"}const[$5d3850c4d0b4e6c7$export$69b62a49393917d6,$5d3850c4d0b4e6c7$var$useWarningContext]=(0,react_context_dist_index_module.k)("DialogTitleWarning",{contentName:"DialogContent",titleName:"DialogTitle",docsSlug:"dialog"}),$5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9=$5d3850c4d0b4e6c7$export$3ddf2d174ce01153,$5d3850c4d0b4e6c7$export$41fb9f06171c75f4=$5d3850c4d0b4e6c7$export$2e1e1122cf0cba88,$5d3850c4d0b4e6c7$export$602eac185826482c=$5d3850c4d0b4e6c7$export$dad7c95542bacce0,$5d3850c4d0b4e6c7$export$c6fdb837b070b4ff=$5d3850c4d0b4e6c7$export$bd1d06c79be19e17,$5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2=$5d3850c4d0b4e6c7$export$b6d9565de1e068cf,$5d3850c4d0b4e6c7$export$f99233281efd08a0=$5d3850c4d0b4e6c7$export$16f7638e4a34b909,$5d3850c4d0b4e6c7$export$393edc798c47379d=$5d3850c4d0b4e6c7$export$94e94c2ec2c954d5,$5d3850c4d0b4e6c7$export$f39c2d165cd861fe=$5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac}}]);