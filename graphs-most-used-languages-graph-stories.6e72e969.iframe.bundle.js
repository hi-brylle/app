"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[5415],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./stories/graphs/most-used-languages-graph.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Loading:()=>Loading,__namedExportsOrder:()=>__namedExportsOrder,default:()=>most_used_languages_graph_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),index_esm=__webpack_require__("./node_modules/react-icons/bs/index.esm.js"),dist=__webpack_require__("./node_modules/react-loading-skeleton/dist/index.mjs"),card=__webpack_require__("./components/atoms/Card/card.tsx"),Typography_text=__webpack_require__("./components/atoms/Typography/text.tsx"),contributor_type_filter=__webpack_require__("./components/Graphs/shared/contributor-type-filter.tsx"),__jsx=react.createElement;const MostUsedLanguagesGraph=_ref=>{let{data,setContributorType,contributorType,isLoading=!1}=_ref;const colors=["hsl(53, 91%, 59%)","hsl(204, 100%, 40%)","hsl(14, 98%, 49%)","hsl(267, 36%, 37%)","hsl(17, 100%, 50%)"],{data:languages=[],mainLanguage}=data,lastItem=languages.length>0?languages.length-1:0,sortedLanguages=languages.sort(((a,b)=>b.value-a.value)),languagesRef=(0,react.useRef)(null),{0:language,1:setLanguage}=(0,react.useState)();return(0,react.useEffect)((()=>{if(language){var _languagesRef$current;const languageElement=null===(_languagesRef$current=languagesRef.current)||void 0===_languagesRef$current?void 0:_languagesRef$current.querySelector('[data-language="'.concat(language,'"]'));languageElement&&languageElement.classList.add("font-semibold")}}),[language]),__jsx(card.Z,{className:"p-5"},__jsx("div",{className:"flex flex-col gap-6"},__jsx("div",null,__jsx("h2",{className:"pb-1 font-medium text-lg text-slate-900"},"Most used languages"),__jsx(Typography_text.Z,null,mainLanguage," contributions have been growing on average ",10,"% MoM")),__jsx("div",{className:"w-max"},__jsx(contributor_type_filter.o,{setContributorType,contributorType})),__jsx("div",{className:"flex h-3 place-content-center"},isLoading?__jsx("div",{className:"loading rounded-lg w-max",style:{width:"100%"}},__jsx("span",{className:"sr-only"},"loading most used languages graph")):__jsx(react.Fragment,null,sortedLanguages.length>0?sortedLanguages.map(((item,index)=>__jsx("button",{"aria-label":"".concat(item.name," is ").concat(item.value,"% of the most used languages for contributors in your list"),key:item.name,"data-language":item.name,className:"".concat(0===index?"rounded-l-lg":""," ").concat(index===lastItem?"rounded-r-lg":""," transform hover:scale-110 transition-transform hover:z-10"),style:{backgroundColor:colors[index],width:"".concat(item.value,"%")},onMouseOver:event=>{const{language}=event.currentTarget.dataset;setLanguage(language)},onMouseOut:event=>{setLanguage(null)},onFocus:event=>{const{language}=event.currentTarget.dataset;setLanguage(language)},onBlur:event=>{setLanguage(null)}}))):__jsx("div",{className:"rounded-lg bg-slate-100 w-full"}))),isLoading?__jsx(dist.Z,{height:24,count:5,className:"mt-4 mb-4"}):__jsx("ul",{ref:languagesRef,className:"grid grid-cols-1 content-center"},sortedLanguages.length>0?sortedLanguages.map(((item,index)=>__jsx("li",{key:item.name,className:"flex justify-between pt-4 pb-4 ".concat(index===lastItem?"":"border-b-1 border-slate-100"," ").concat(language===item.name?"font-semibold":"")},__jsx("span",{className:"flex gap-2 items-center ".concat(language===item.name?"text-black":"text-slate-700")},__jsx(index_esm.rJz,{size:11,style:{fill:colors[index]}}),item.name),__jsx("span",{className:"".concat(language===item.name?"text-black":"text-slate-600")},item.value,"%")))):__jsx("p",{className:"text-center"},"There is no language data"))))};MostUsedLanguagesGraph.displayName="MostUsedLanguagesGraph";try{MostUsedLanguagesGraph.displayName="MostUsedLanguagesGraph",MostUsedLanguagesGraph.__docgenInfo={description:"",displayName:"MostUsedLanguagesGraph",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"{ mainLanguage: string; data: { name: string; value: number; }[]; }"}},setContributorType:{defaultValue:null,description:"",name:"setContributorType",required:!0,type:{name:"(type: ContributorType) => void"}},contributorType:{defaultValue:null,description:"",name:"contributorType",required:!0,type:{name:"enum",value:[{value:'"all"'},{value:'"active"'},{value:'"new"'},{value:'"alumni"'}]}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Graphs/MostUsedLanguagesGraph/most-used-languages-graph.tsx#MostUsedLanguagesGraph"]={docgenInfo:MostUsedLanguagesGraph.__docgenInfo,name:"MostUsedLanguagesGraph",path:"components/Graphs/MostUsedLanguagesGraph/most-used-languages-graph.tsx#MostUsedLanguagesGraph"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_Loading$parameters,_Loading$parameters2,console=__webpack_require__("./node_modules/console-browserify/index.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const most_used_languages_graph_stories={title:"Components/Graphs/Most Used Languages Graph",component:MostUsedLanguagesGraph};const Default={args:{data:{mainLanguage:"TypeScript",data:[{name:"Python",value:10},{name:"TypeScript",value:25},{name:"JavaScript",value:20},{name:"C++",value:15},{name:"Zig",value:30}]},contributorType:"all",setContributorType(type){console.log(type)}}},Loading={args:{isLoading:!0,data:{mainLanguage:"TypeScript",data:[{name:"Python",value:10},{name:"TypeScript",value:25},{name:"JavaScript",value:20},{name:"C++",value:15},{name:"Zig",value:30}]},contributorType:"all",setContributorType(type){console.log(type)}}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    data: generateData(),\n    contributorType: "all",\n    setContributorType(type) {\n      // eslint-disable-next-line no-console\n      console.log(type);\n    }\n  }\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),Loading.parameters=_objectSpread(_objectSpread({},Loading.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Loading$parameters=Loading.parameters)||void 0===_Loading$parameters?void 0:_Loading$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    isLoading: true,\n    data: generateData(),\n    contributorType: "all",\n    setContributorType(type) {\n      // eslint-disable-next-line no-console\n      console.log(type);\n    }\n  }\n}'},null===(_Loading$parameters2=Loading.parameters)||void 0===_Loading$parameters2||null===(_Loading$parameters2=_Loading$parameters2.docs)||void 0===_Loading$parameters2?void 0:_Loading$parameters2.source)})});const __namedExportsOrder=["Default","Loading"]},"./components/Graphs/shared/contributor-type-filter.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>ContributorTypeFilter});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),components_atoms_Button_button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/atoms/Button/button.tsx"),components_atoms_Dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/Dropdown/dropdown.tsx"),img_icons_people_svg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./img/icons/people.svg"),img_chevron_down_svg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./img/chevron-down.svg"),components_atoms_SVGIcon_svg_icon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./components/atoms/SVGIcon/svg-icon.tsx"),components_atoms_Icon_icon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./components/atoms/Icon/icon.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const peopleFilters={all:"All Contributors",active:"Active Contributors",new:"New Contributors",alumni:"Alumni Contributors"},ContributorTypeFilter=_ref=>{let{setContributorType,contributorType}=_ref;return __jsx(components_atoms_Dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2__.h_,null,__jsx(components_atoms_Dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2__.$F,{asChild:!0},__jsx(components_atoms_Button_button__WEBPACK_IMPORTED_MODULE_1__.Z,{variant:"default",className:"items-center gap-1"},__jsx(components_atoms_SVGIcon_svg_icon__WEBPACK_IMPORTED_MODULE_5__.Z,{IconImage:"".concat(img_icons_people_svg__WEBPACK_IMPORTED_MODULE_3__.Z.src,"#icon"),className:"w-4 h-4"}),peopleFilters[contributorType],__jsx(components_atoms_Icon_icon__WEBPACK_IMPORTED_MODULE_6__.Z,{IconImage:img_chevron_down_svg__WEBPACK_IMPORTED_MODULE_4__.Z,className:"w-4 h-4"}))),__jsx(components_atoms_Dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2__.AW,{align:"end",className:"flex flex-col gap-2"},Object.entries(peopleFilters).map((_ref2=>{let[key,value]=_ref2;return __jsx(components_atoms_Dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2__.Xi,{key,className:"rounded-md !cursor-pointer",onClick:()=>setContributorType(key)},value)}))))};ContributorTypeFilter.displayName="ContributorTypeFilter";try{ContributorTypeFilter.displayName="ContributorTypeFilter",ContributorTypeFilter.__docgenInfo={description:"",displayName:"ContributorTypeFilter",props:{setContributorType:{defaultValue:null,description:"",name:"setContributorType",required:!0,type:{name:"(type: ContributorType) => void"}},contributorType:{defaultValue:null,description:"",name:"contributorType",required:!0,type:{name:"enum",value:[{value:'"all"'},{value:'"active"'},{value:'"new"'},{value:'"alumni"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Graphs/shared/contributor-type-filter.tsx#ContributorTypeFilter"]={docgenInfo:ContributorTypeFilter.__docgenInfo,name:"ContributorTypeFilter",path:"components/Graphs/shared/contributor-type-filter.tsx#ContributorTypeFilter"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Button/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const _excluded=["className","children","loading","disabled","showLoadingText","href"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,children,loading,disabled,showLoadingText=!0,href}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);const styles={primary:"bg-light-orange-9 text-light-orange-2 border-light-orange-9 hover:bg-light-orange-10 ".concat(disabled?"bg-light-orange-7 hover:bg-light-orange-7 border-none  pointer-events-none":""),default:"bg-white border-light-slate-8 text-light-slate-11 hover:bg-light-slate-2 ".concat(disabled?"bg-light-slate-4 text-light-slate-9 pointer-events-none":""),dark:"bg-dark-slate-6 border-dark-slate-8 text-light-orange-2 hover:bg-dark-slate-8 ".concat(disabled?"bg-dark-slate-4 text-dark-slate-9 pointer-events-none":""),outline:"bg-orange-50 border-orange-500 text-orange-600 hover:bg-orange-100 ".concat(disabled?"bg-light-orange-3 pointer-events-none text-light-orange-7 border-light-orange-5":""),link:"text-orange-600 hover:bg-orange-100 border-none ".concat(disabled?"text-orange-400 pointer-events-none":"")},rootClass=(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("primary"===props.variant&&styles.primary,"default"===props.variant&&styles.default,"dark"===props.variant&&styles.dark,"outline"===props.variant&&styles.outline,"link"===props.variant&&styles.link,disabled&&"bg-light-orange-7 hover:bg-light-orange-7 border-none pointer-events-none","items-center inline-flex text-sm font-semibold tracking-tight border py-2 px-4 rounded-md focus-visible:border-orange-500 focus:outline-none focus-visible:ring focus-visible:ring-orange-200 whitespace-nowrap",className),content=loading?__jsx("div",null,__jsx("svg",{"aria-hidden":"true",role:"status",className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("inline w-4 h-4 text-white animate-spin",showLoadingText?"mr-2":""),viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},__jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}),__jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"})),showLoadingText&&__jsx("span",{className:"text-white"},"Loading...")):children;return href?__jsx("a",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:rootClass,href,ref},props),content):__jsx("button",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:rootClass,ref},props),content)}));Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"dark"'},{value:'"link"'},{value:'"text"'},{value:'"default"'},{value:'"primary"'},{value:'"outline"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"string"}},showLoadingText:{defaultValue:{value:"true"},description:"",name:"showLoadingText",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Button/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/atoms/Button/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Card/card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Card=_ref=>{let{className,children,heading}=_ref;return __jsx("article",{className:"".concat(className||""," block ").concat(heading?"":"p-3"," bg-white border rounded-lg shadow-xs")},heading?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"px-3 md:px-6 py-3 rounded-t-lg bg-light-slate-3"},heading),__jsx("div",null,children)):children)};Card.displayName="Card";const __WEBPACK_DEFAULT_EXPORT__=Card;try{card.displayName="card",card.__docgenInfo={description:"",displayName:"card",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},heading:{defaultValue:null,description:"",name:"heading",required:!1,type:{name:"string | Element"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Card/card.tsx#card"]={docgenInfo:card.__docgenInfo,name:"card",path:"components/atoms/Card/card.tsx#card"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Dropdown/dropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$F:()=>DropdownMenuTrigger,AW:()=>DropdownMenuContent,Xi:()=>DropdownMenuItem,h_:()=>DropdownMenu});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-dropdown-menu/dist/index.module.js"),clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const _excluded=["className","sideOffset"],_excluded2=["className","inset"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const DropdownMenu=_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.fC,DropdownMenuTrigger=_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.xz,DropdownMenuContent=(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.Uv,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,sideOffset=4}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);return __jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.Uv,null,__jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.VY,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref,sideOffset,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("z-50 min-w-max overflow-hidden rounded-lg border border-slate-100 bg-white p-1 text-slate-700 shadow-xs animate-in data-[side=right]:slide-in-from-left-2 data-[side=left]:slide-in-from-right-2 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 ",className)},props)))})));DropdownMenuContent.displayName=_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.VY.displayName;const DropdownMenuItem=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref2,ref)=>{let{className,inset}=_ref2,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref2,_excluded2);return __jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.ck,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("relative flex cursor-default select-none items-center py-1.5 px-2 text-sm focus:text-sauced-orange outline-none focus:bg-orange-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ",inset&&"pl-8",className)},props))}));DropdownMenuItem.displayName=_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.ck.displayName;try{DropdownMenu.displayName="DropdownMenu",DropdownMenu.__docgenInfo={description:"",displayName:"DropdownMenu",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Dropdown/dropdown.tsx#DropdownMenu"]={docgenInfo:DropdownMenu.__docgenInfo,name:"DropdownMenu",path:"components/atoms/Dropdown/dropdown.tsx#DropdownMenu"})}catch(__react_docgen_typescript_loader_error){}try{DropdownMenuItem.displayName="DropdownMenuItem",DropdownMenuItem.__docgenInfo={description:"",displayName:"DropdownMenuItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},inset:{defaultValue:null,description:"",name:"inset",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Dropdown/dropdown.tsx#DropdownMenuItem"]={docgenInfo:DropdownMenuItem.__docgenInfo,name:"DropdownMenuItem",path:"components/atoms/Dropdown/dropdown.tsx#DropdownMenuItem"})}catch(__react_docgen_typescript_loader_error){}try{DropdownMenuContent.displayName="DropdownMenuContent",DropdownMenuContent.__docgenInfo={description:"",displayName:"DropdownMenuContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Dropdown/dropdown.tsx#DropdownMenuContent"]={docgenInfo:DropdownMenuContent.__docgenInfo,name:"DropdownMenuContent",path:"components/atoms/Dropdown/dropdown.tsx#DropdownMenuContent"})}catch(__react_docgen_typescript_loader_error){}try{DropdownMenuTrigger.displayName="DropdownMenuTrigger",DropdownMenuTrigger.__docgenInfo={description:"",displayName:"DropdownMenuTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Dropdown/dropdown.tsx#DropdownMenuTrigger"]={docgenInfo:DropdownMenuTrigger.__docgenInfo,name:"DropdownMenuTrigger",path:"components/atoms/Dropdown/dropdown.tsx#DropdownMenuTrigger"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Icon/icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_image__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Icon=_ref=>{let{onClick,className,IconImage,alt,size=16}=_ref;return __jsx("div",{className:"".concat(className||""," inline-flex")},__jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.Z,{onClick,className:"items-center justify-center ",alt:alt||"Icon",width:size,height:size,src:IconImage,style:{maxWidth:"100%",height:"auto"}}))};Icon.displayName="Icon";const __WEBPACK_DEFAULT_EXPORT__=Icon;try{icon.displayName="icon",icon.__docgenInfo={description:"",displayName:"icon",props:{IconImage:{defaultValue:null,description:"",name:"IconImage",required:!0,type:{name:"string | StaticImageData"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:{value:"16"},description:"",name:"size",required:!1,type:{name:"number"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((...args: any) => any)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Icon/icon.tsx#icon"]={docgenInfo:icon.__docgenInfo,name:"icon",path:"components/atoms/Icon/icon.tsx#icon"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/SVGIcon/svg-icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),__jsx=__webpack_require__("./node_modules/next/dist/compiled/react/index.js").createElement;const SVGIcon=_ref=>{let{onClick,className,IconImage,size=16}=_ref;return __jsx("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__.Z)("inline-flex",className),onClick},__jsx("svg",null,__jsx("use",{href:IconImage,width:size,height:size,className:"items-center justify-center",style:{stroke:"currentcolor",maxWidth:"100%",height:"auto"}})))};SVGIcon.displayName="SVGIcon";const __WEBPACK_DEFAULT_EXPORT__=SVGIcon;try{svgicon.displayName="svgicon",svgicon.__docgenInfo={description:"",displayName:"svgicon",props:{IconImage:{defaultValue:null,description:"",name:"IconImage",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:{value:"16"},description:"",name:"size",required:!1,type:{name:"number"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((...args: any) => any)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/SVGIcon/svg-icon.tsx#svgicon"]={docgenInfo:svgicon.__docgenInfo,name:"svgicon",path:"components/atoms/SVGIcon/svg-icon.tsx#svgicon"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Typography/text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_wrapper__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/atoms/Typography/wrapper.tsx");const _excluded=["children","title","className","type","disabled","mark","code","keyboard","underline","strikethrough","strong","small"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Text=_ref=>{let{children,title,className,type="default",disabled,mark,code,keyboard,underline,strikethrough,strong,small}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);const TextTag=mark?"mark":code?"code":keyboard?"kbd":strong?"strong":small?"small":"span";return __jsx(_wrapper__WEBPACK_IMPORTED_MODULE_1__.Z,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(className,disabled&&"cursor-not-allowed select-none text-light-slate-11/50",keyboard&&"bg-light-slate-4/50 rounded px-2 border border-b-2 border-light-slate-8/50",underline&&"underline",strikethrough&&"line-through",(type=>"secondary"===type?"!text-light-slate-5":"success"===type?"!text-dark-grass-10":"warning"===type?"!text-yellow-500":"danger"===type?"!text-dark-red-10":"")(type))},props),__jsx(TextTag,{title},children))};Text.displayName="Text";const __WEBPACK_DEFAULT_EXPORT__=Text;try{text.displayName="text",text.__docgenInfo={description:"",displayName:"text",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},mark:{defaultValue:null,description:"",name:"mark",required:!1,type:{name:"boolean"}},code:{defaultValue:null,description:"",name:"code",required:!1,type:{name:"boolean"}},keyboard:{defaultValue:null,description:"",name:"keyboard",required:!1,type:{name:"boolean"}},underline:{defaultValue:null,description:"",name:"underline",required:!1,type:{name:"boolean"}},strikethrough:{defaultValue:null,description:"",name:"strikethrough",required:!1,type:{name:"boolean"}},strong:{defaultValue:null,description:"",name:"strong",required:!1,type:{name:"boolean"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Typography/text.tsx#text"]={docgenInfo:text.__docgenInfo,name:"text",path:"components/atoms/Typography/text.tsx#text"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Typography/wrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const _excluded=["children","className","size"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const TypographyWrapper=_ref=>{let{children,className,size="sm"}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx("span",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("prose","prose-".concat(size),className)},props),children)};TypographyWrapper.displayName="TypographyWrapper";const __WEBPACK_DEFAULT_EXPORT__=TypographyWrapper;try{wrapper.displayName="wrapper",wrapper.__docgenInfo={description:"",displayName:"wrapper",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Typography/wrapper.tsx#wrapper"]={docgenInfo:wrapper.__docgenInfo,name:"wrapper",path:"components/atoms/Typography/wrapper.tsx#wrapper"})}catch(__react_docgen_typescript_loader_error){}},"./img/chevron-down.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={src:"static/media/chevron-down.d99071fc.svg",height:16,width:16,blurDataURL:"static/media/chevron-down.d99071fc.svg"}},"./img/icons/people.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={src:"static/media/people.41d40dc4.svg",height:18,width:18,blurDataURL:"static/media/people.41d40dc4.svg"}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{W:()=>clsx,Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=clsx},"./node_modules/react-loading-skeleton/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Skeleton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const SkeletonThemeContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({}),defaultEnableAnimation=!0;function styleOptionsToCssProperties({baseColor,highlightColor,width,height,borderRadius,circle,direction,duration,enableAnimation=defaultEnableAnimation}){const style={};return"rtl"===direction&&(style["--animation-direction"]="reverse"),"number"==typeof duration&&(style["--animation-duration"]=`${duration}s`),enableAnimation||(style["--pseudo-element-display"]="none"),"string"!=typeof width&&"number"!=typeof width||(style.width=width),"string"!=typeof height&&"number"!=typeof height||(style.height=height),"string"!=typeof borderRadius&&"number"!=typeof borderRadius||(style.borderRadius=borderRadius),circle&&(style.borderRadius="50%"),void 0!==baseColor&&(style["--base-color"]=baseColor),void 0!==highlightColor&&(style["--highlight-color"]=highlightColor),style}function Skeleton({count=1,wrapper:Wrapper,className:customClassName,containerClassName,containerTestId,circle=!1,style:styleProp,...originalPropsStyleOptions}){var _a,_b,_c;const contextStyleOptions=react__WEBPACK_IMPORTED_MODULE_0__.useContext(SkeletonThemeContext),propsStyleOptions={...originalPropsStyleOptions};for(const[key,value]of Object.entries(originalPropsStyleOptions))void 0===value&&delete propsStyleOptions[key];const styleOptions={...contextStyleOptions,...propsStyleOptions,circle},style={...styleProp,...styleOptionsToCssProperties(styleOptions)};let className="react-loading-skeleton";customClassName&&(className+=` ${customClassName}`);const inline=null!==(_a=styleOptions.inline)&&void 0!==_a&&_a,elements=[],countCeil=Math.ceil(count);for(let i=0;i<countCeil;i++){let thisStyle=style;if(countCeil>count&&i===countCeil-1){const width=null!==(_b=thisStyle.width)&&void 0!==_b?_b:"100%",fractionalPart=count%1,fractionalWidth="number"==typeof width?width*fractionalPart:`calc(${width} * ${fractionalPart})`;thisStyle={...thisStyle,width:fractionalWidth}}const skeletonSpan=react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className,style:thisStyle,key:i},"‌");inline?elements.push(skeletonSpan):elements.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{key:i},skeletonSpan,react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null)))}return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:containerClassName,"data-testid":containerTestId,"aria-live":"polite","aria-busy":null!==(_c=styleOptions.enableAnimation)&&void 0!==_c?_c:defaultEnableAnimation},Wrapper?elements.map(((el,i)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrapper,{key:i},el))):elements)}}}]);