"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[543],{"./stories/molecules/collaboration-summary-card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ConnectionCardStory:()=>ConnectionCardStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>collaboration_summary_card_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),index_esm=__webpack_require__("./node_modules/react-icons/tb/index.esm.js"),bi_index_esm=__webpack_require__("./node_modules/react-icons/bi/index.esm.js"),avatar=__webpack_require__("./components/atoms/Avatar/avatar.tsx"),__jsx=react.createElement;const ConnectionSummaryCard=_ref=>{let{requests,connectionsCount,messagesCount}=_ref;return __jsx("div",{className:"flex flex-col max-w-2xl gap-4 p-4 bg-white border rounded-2xl border-light-slate-6"},__jsx("div",{className:"flex items-center justify-between text-sm "},__jsx("div",{className:"flex items-center gap-2 text-sm"},__jsx("div",{className:"flex items-center"},"Connection requests:"," ",__jsx("span",{className:"flex items-center gap-3 ml-3"},requests.map(((i,index)=>__jsx(avatar.Z,{key:index,className:"!rounded-none",size:"sm",avatarURL:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"}))))," ")),__jsx("div",{className:"flex gap-2"},__jsx("button",{className:"px-2"},"Archive"),__jsx("button",{className:"px-2 py-1 text-white rounded-lg outline-none bg-light-orange-9"},"Expand"))),__jsx("div",null,requests[0].outreachMessage),__jsx("div",{className:"flex items-center gap-3 text-light-slate-10"},__jsx("div",{className:"flex items-center gap-2"},__jsx(index_esm.bMu,null)," ",__jsx("span",{className:"text-sm"},connectionsCount," connections")),__jsx("div",{className:"flex items-center gap-2"},__jsx(bi_index_esm.GQN,null)," ",__jsx("span",{className:"text-sm"},messagesCount," messages"))))};ConnectionSummaryCard.displayName="ConnectionSummaryCard";const connection_summary_card=ConnectionSummaryCard;try{connectionsummarycard.displayName="connectionsummarycard",connectionsummarycard.__docgenInfo={description:"",displayName:"connectionsummarycard",props:{requests:{defaultValue:null,description:"",name:"requests",required:!0,type:{name:"ConnectionRequestObject[]"}},connectionsCount:{defaultValue:null,description:"",name:"connectionsCount",required:!1,type:{name:"number"}},messagesCount:{defaultValue:null,description:"",name:"messagesCount",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/ConnectionSummaryCard/connection-summary-card.tsx#connectionsummarycard"]={docgenInfo:connectionsummarycard.__docgenInfo,name:"connectionsummarycard",path:"components/molecules/ConnectionSummaryCard/connection-summary-card.tsx#connectionsummarycard"})}catch(__react_docgen_typescript_loader_error){}var _ConnectionCardStory$,_ConnectionCardStory$2,collaboration_summary_card_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const collaboration_summary_card_stories={title:"Design System/Molecules/Connection Summary card"},ConnectionCardTemplate=args=>collaboration_summary_card_stories_jsx(connection_summary_card,args);ConnectionCardTemplate.displayName="ConnectionCardTemplate";const requestor={login:"jsmith123",name:"Janice Smith"},ConnectionCardStory=ConnectionCardTemplate.bind({});ConnectionCardStory.args={requests:[{outreachMessage:" Hello Nate, we’re currently working on a project and think that you would be a great fit for our team. Would yoube interested in joining us",requestor,requestId:"nsodijsoiofer",onAccept(id){},onDecline(id){}},{outreachMessage:" Hello Nate, we’re currently working on a project and think that you would be a great fit for our team. Would yoube interested in joining us",requestor,requestId:"nsodijsoiofer",onAccept(id){},onDecline(id){}},{outreachMessage:" Hello Nate, we’re currently working on a project and think that you would be a great fit for our team. Would yoube interested in joining us",requestor,requestId:"nsodijsoiofer",onAccept(id){},onDecline(id){}}],connectionsCount:34,messagesCount:23},ConnectionCardStory.parameters=_objectSpread(_objectSpread({},ConnectionCardStory.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ConnectionCardStory$=ConnectionCardStory.parameters)||void 0===_ConnectionCardStory$?void 0:_ConnectionCardStory$.docs),{},{source:_objectSpread({originalSource:"args => <ConnectionSummaryCard {...args} />"},null===(_ConnectionCardStory$2=ConnectionCardStory.parameters)||void 0===_ConnectionCardStory$2||null===(_ConnectionCardStory$2=_ConnectionCardStory$2.docs)||void 0===_ConnectionCardStory$2?void 0:_ConnectionCardStory$2.source)})});const __namedExportsOrder=["ConnectionCardStory"]},"./components/atoms/Avatar/avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Avatar_avatar});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs");const cachedImages=(imageUrl,cloudName)=>cloudName?"https://res.cloudinary.com/".concat(cloudName,"/image/fetch/").concat(imageUrl):imageUrl;var console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react.createElement;const Avatar_avatar=props=>{let imageSource;try{"string"==typeof props.avatarURL&&props.avatarURL.length>0&&new URL(props.avatarURL),imageSource=props.avatarURL&&props.isCached?cachedImages(props.avatarURL,"dgxgziswe"):props.avatarURL}catch(error){console.error(error)}switch(typeof props.size){case"string":return __jsx(DefaultAvatar,(0,esm_extends.Z)({},props,{avatarURL:imageSource}));case"number":return __jsx(CustomAvatar,(0,esm_extends.Z)({},props,{avatarURL:imageSource}))}},CustomAvatar=_ref=>{let{className,avatarURL,initials,alt,size,hasBorder,isCircle,initialsClassName}=_ref;return __jsx("div",{className:"inline-flex ".concat(avatarURL?"":"bg-orange-500"," justify-center relative items-center w-max h-max overflow-hidden\n\n        ").concat(isCircle?"rounded-full ":"rounded-lg ","\n        ").concat(hasBorder?"ring-2 ring-slate-200 ":"","\n        ").concat(null!=className?className:" ","\n      ")},avatarURL?__jsx(next_image.Z,{className:"".concat(className||""," object-cover"),alt:alt||"Avatar",width:size,height:size,src:avatarURL}):__jsx("div",{className:"".concat(initialsClassName," flex items-center justify-center font-bold leading-none text-slate-50 mb-0.25 "),style:{width:size,height:size}},initials))};CustomAvatar.displayName="CustomAvatar";const DefaultAvatar=_ref2=>{let{className,avatarURL,initials,alt,size,hasBorder,isCircle}=_ref2;return __jsx("div",{className:"inline-flex ".concat(avatarURL?"":"bg-orange-500"," justify-center relative items-center overflow-hidden\n        ").concat(isCircle?"rounded-full ":"rounded-lg ","\n        ").concat(hasBorder?"ring-2 ring-slate-200 ":"","\n        ").concat("sm"===size?"w-6 h-6 ":"base"===size?"w-8 h-8 ":"lg"===size?"w-12 h-12 ":"w-8 h-8 ","\n        ").concat(null!=className?className:" ","\n      ")},avatarURL?__jsx(next_image.Z,{className:"".concat(className||""," object-cover"),alt:alt||"Avatar",fill:!0,src:avatarURL}):__jsx("div",{className:"flex items-center justify-center font-bold leading-none text-slate-50 mb-0.25 ".concat("sm"===size?"text-xs":"base"===size?"text-sm":"lg"===size?"text-lg":"text-sm"),style:{width:size,height:size}},initials))};DefaultAvatar.displayName="DefaultAvatar";try{avatar.displayName="avatar",avatar.__docgenInfo={description:"",displayName:"avatar",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},avatarURL:{defaultValue:null,description:"",name:"avatarURL",required:!1,type:{name:"string | StaticImageData"}},initials:{defaultValue:null,description:"",name:"initials",required:!1,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:'number | "base" | "sm" | "lg"'}},hasBorder:{defaultValue:null,description:"",name:"hasBorder",required:!1,type:{name:"boolean"}},isCircle:{defaultValue:null,description:"",name:"isCircle",required:!1,type:{name:"boolean"}},isCached:{defaultValue:null,description:"",name:"isCached",required:!1,type:{name:"boolean"}},initialsClassName:{defaultValue:null,description:"",name:"initialsClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Avatar/avatar.tsx#avatar"]={docgenInfo:avatar.__docgenInfo,name:"avatar",path:"components/atoms/Avatar/avatar.tsx#avatar"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react-icons/lib/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w_:()=>GenIcon,Pd:()=>IconContext});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},IconContext=react.createContext&&react.createContext(DefaultContext),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function Tree2Element(tree){return tree&&tree.map((function(node,i){return react.createElement(node.tag,__assign({key:i},node.attr),Tree2Element(node.child))}))}function GenIcon(data){return function(props){return react.createElement(IconBase,__assign({attr:__assign({},data.attr)},props),Tree2Element(data.child))}}function IconBase(props){var elem=function(conf){var className,attr=props.attr,size=props.size,title=props.title,svgProps=__rest(props,["attr","size","title"]),computedSize=size||conf.size||"1em";return conf.className&&(className=conf.className),props.className&&(className=(className?className+" ":"")+props.className),react.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},conf.attr,attr,svgProps,{className,style:__assign(__assign({color:props.color||conf.color},conf.style),props.style),height:computedSize,width:computedSize,xmlns:"http://www.w3.org/2000/svg"}),title&&react.createElement("title",null,title),props.children)};return void 0!==IconContext?react.createElement(IconContext.Consumer,null,(function(conf){return elem(conf)})):elem(DefaultContext)}}}]);