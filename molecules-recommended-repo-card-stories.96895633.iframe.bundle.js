"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[3646],{"./stories/molecules/recommended-repo-card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Molecules/Recommended Repo Card",component:__webpack_require__("./components/molecules/RecommendedRepoCard/recommended-repo-card.tsx").Z},Default={args:{fullName:"open-sauced/insights"}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    fullName: "open-sauced/insights"\n  }\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})});const __namedExportsOrder=["Default"]},"./components/atoms/Avatar/avatar-hover-card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>avatar_hover_card});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),index_module=__webpack_require__("./node_modules/@radix-ui/react-hover-card/dist/index.module.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),next_router=__webpack_require__("./node_modules/next/router.js"),useFetchUser=__webpack_require__("./lib/hooks/useFetchUser.ts"),useContributorPullRequestsChart=__webpack_require__("./lib/hooks/useContributorPullRequestsChart.ts"),github=__webpack_require__("./lib/utils/github.ts"),contributor_hover_card=__webpack_require__("./components/molecules/ContributorHoverCard/contributor-hover-card.tsx"),__jsx=react.createElement;const hover_card_wrapper=_ref=>{let{username,repositories}=_ref;const topic=(0,next_router.useRouter)().query.pageId,{data:contributor}=(0,useFetchUser.j)(username),{repoList}=(0,useContributorPullRequestsChart.u)(username,"*",repositories,"30",!0),profile={githubAvatar:(0,github.cc)(username,40),githubName:username,totalPR:repoList.length},{is_maintainer,first_opened_pr_at}=null!=contributor?contributor:{};return __jsx(react.Fragment,null,__jsx(contributor_hover_card.Z,{dateOfFirstPr:first_opened_pr_at,totalPR:profile.totalPR,githubAvatar:profile.githubAvatar,githubName:profile.githubName,repoList,topic,repositories,isMaintainer:!!is_maintainer}))};try{hovercardwrapper.displayName="hovercardwrapper",hovercardwrapper.__docgenInfo={description:"",displayName:"hovercardwrapper",props:{username:{defaultValue:null,description:"",name:"username",required:!0,type:{name:"string"}},repositories:{defaultValue:null,description:"",name:"repositories",required:!1,type:{name:"number[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/HoverCardWrapper/hover-card-wrapper.tsx#hovercardwrapper"]={docgenInfo:hovercardwrapper.__docgenInfo,name:"hovercardwrapper",path:"components/molecules/HoverCardWrapper/hover-card-wrapper.tsx#hovercardwrapper"})}catch(__react_docgen_typescript_loader_error){}var avatar_hover_card_jsx=react.createElement;const Avatar=_ref=>{let{contributor,size="large"}=_ref,width=500,height=500;switch(size){case"xsmall":width=24,height=24;break;case"small":width=45,height=45;break;case"medium":width=35,height=35}return avatar_hover_card_jsx(next_image.Z,{alt:contributor,className:"border rounded-full",height:width,src:(0,github.cc)(contributor,40),width:height})};Avatar.displayName="Avatar";const AvatarHoverCard=_ref2=>{let{contributor,repositories,size="large"}=_ref2;return avatar_hover_card_jsx(index_module.fC,null,avatar_hover_card_jsx(link_default(),{href:"/user/".concat(contributor),as:"/user/".concat(contributor)},avatar_hover_card_jsx(index_module.xz,null,avatar_hover_card_jsx(Avatar,{contributor,size}))),avatar_hover_card_jsx(index_module.h_,null,avatar_hover_card_jsx(index_module.VY,{sideOffset:5},avatar_hover_card_jsx(hover_card_wrapper,{username:contributor,repositories}))))};AvatarHoverCard.displayName="AvatarHoverCard";const avatar_hover_card=AvatarHoverCard;try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{contributor:{defaultValue:null,description:"",name:"contributor",required:!0,type:{name:"string"}},size:{defaultValue:{value:"large"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"xsmall"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Avatar/avatar-hover-card.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"components/atoms/Avatar/avatar-hover-card.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}try{avatarhovercard.displayName="avatarhovercard",avatarhovercard.__docgenInfo={description:"",displayName:"avatarhovercard",props:{contributor:{defaultValue:null,description:"",name:"contributor",required:!0,type:{name:"string"}},size:{defaultValue:{value:"large"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"xsmall"'},{value:'"large"'}]}},repositories:{defaultValue:null,description:"",name:"repositories",required:!0,type:{name:"number[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Avatar/avatar-hover-card.tsx#avatarhovercard"]={docgenInfo:avatarhovercard.__docgenInfo,name:"avatarhovercard",path:"components/atoms/Avatar/avatar-hover-card.tsx#avatarhovercard"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/SpinLoader/spin-loader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Spinner,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const _excluded=["className"],_excluded2=["className"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const SpinLoader=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx("div",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({ref},props,{className:"flex justify-center w-full pt-36 "}),__jsx(Spinner,{className:"mr-2 md:w-16 md:h-16"}))}));SpinLoader.displayName="SpinLoader";const __WEBPACK_DEFAULT_EXPORT__=SpinLoader,Spinner=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref2,ref)=>{let{className}=_ref2,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref2,_excluded2);return __jsx("div",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({ref},props,{role:"status"}),__jsx("svg",{"aria-hidden":"true",className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("inline w-6 h-6 text-gray-200 animate-spin fill-light-slate-8",className),viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},__jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),__jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})),__jsx("span",{className:"sr-only"},"Loading..."))}));Spinner.displayName="Spinner";try{SpinLoader.displayName="SpinLoader",SpinLoader.__docgenInfo={description:"",displayName:"SpinLoader",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/SpinLoader/spin-loader.tsx#SpinLoader"]={docgenInfo:SpinLoader.__docgenInfo,name:"SpinLoader",path:"components/atoms/SpinLoader/spin-loader.tsx#SpinLoader"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/ContributorHoverCard/contributor-hover-card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/router.js"),lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./lib/utils/date-utils.ts"),components_atoms_Badge_badge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/Badge/badge.tsx"),_CardProfile_card_profile__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/molecules/CardProfile/card-profile.tsx"),_CardRepoList_card_repo_list__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./components/molecules/CardRepoList/card-repo-list.tsx"),_PullRequestTable_pull_request_table__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./components/molecules/PullRequestTable/pull-request-table.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const ContributorHoverCard=_ref=>{let{repoList,githubName,totalPR,dateOfFirstPr,githubAvatar,repositories,isMaintainer}=_ref;const topic=(0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query.pageId,calculatedDateFromToday=dateOfFirstPr?(0,lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_6__.wu)(new Date(parseInt(dateOfFirstPr).toString())):"-";return __jsx("div",{className:"w-[364px] bg-white gap-4 p-3 rounded-lg shadow-superlative flex flex-col"},__jsx("div",{className:"flex items-center justify-between"},__jsx(_CardProfile_card_profile__WEBPACK_IMPORTED_MODULE_3__.Z,{dateOfFirstPR:calculatedDateFromToday,githubAvatar,githubName,totalPRs:totalPR,isRoundedAvatar:!0}),isMaintainer&&__jsx(components_atoms_Badge_badge__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"maintainer"})),__jsx("div",{className:""},__jsx(_PullRequestTable_pull_request_table__WEBPACK_IMPORTED_MODULE_5__.Z,{isHoverCard:!0,repositories,limit:5,contributor:githubName,topic})),__jsx("div",null,__jsx(_CardRepoList_card_repo_list__WEBPACK_IMPORTED_MODULE_4__.Z,{repoList,limit:3})))};ContributorHoverCard.displayName="ContributorHoverCard";const __WEBPACK_DEFAULT_EXPORT__=ContributorHoverCard;try{contributorhovercard.displayName="contributorhovercard",contributorhovercard.__docgenInfo={description:"",displayName:"contributorhovercard",props:{repoList:{defaultValue:null,description:"",name:"repoList",required:!0,type:{name:"RepoList[]"}},githubAvatar:{defaultValue:null,description:"",name:"githubAvatar",required:!0,type:{name:"string"}},githubName:{defaultValue:null,description:"",name:"githubName",required:!0,type:{name:"string"}},totalPR:{defaultValue:null,description:"",name:"totalPR",required:!0,type:{name:"number"}},dateOfFirstPr:{defaultValue:null,description:"",name:"dateOfFirstPr",required:!0,type:{name:"string | undefined"}},topic:{defaultValue:null,description:"",name:"topic",required:!1,type:{name:"string"}},repositories:{defaultValue:null,description:"",name:"repositories",required:!1,type:{name:"number[]"}},isMaintainer:{defaultValue:null,description:"",name:"isMaintainer",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/ContributorHoverCard/contributor-hover-card.tsx#contributorhovercard"]={docgenInfo:contributorhovercard.__docgenInfo,name:"contributorhovercard",path:"components/molecules/ContributorHoverCard/contributor-hover-card.tsx#contributorhovercard"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/RecommendedRepoCard/recommended-repo-card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>recommended_repo_card});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),index_esm=__webpack_require__("./node_modules/react-icons/bi/index.esm.js"),vsc_index_esm=__webpack_require__("./node_modules/react-icons/vsc/index.esm.js"),ai_index_esm=__webpack_require__("./node_modules/react-icons/ai/index.esm.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),github=__webpack_require__("./lib/utils/github.ts"),humanizeNumber=__webpack_require__("./lib/utils/humanizeNumber.ts"),dist=__webpack_require__("./node_modules/swr/core/dist/index.mjs"),public_api_fetcher=__webpack_require__("./lib/utils/public-api-fetcher.ts");const fetchRecommendationByRepo=(owner,repo)=>{const{data,error,mutate}=(0,dist.ZP)("repos/".concat(owner,"/").concat(repo),public_api_fetcher.Z);return{data:null!=data?data:void 0,isLoading:!data&&!error,isError:!!error,mutate}};var truncate_string=__webpack_require__("./lib/utils/truncate-string.ts"),useRepositoryPullRequests=__webpack_require__("./lib/hooks/api/useRepositoryPullRequests.ts"),get_pr_contributors=__webpack_require__("./lib/utils/get-pr-contributors.ts"),spin_loader=__webpack_require__("./components/atoms/SpinLoader/spin-loader.tsx"),stacked_avatar=__webpack_require__("./components/molecules/StackedAvatar/stacked-avatar.tsx"),__jsx=react.createElement;const RecommendedRepoCard=_ref=>{let{fullName,className}=_ref;const[owner,name]=fullName.split("/"),{data,isLoading,isError}=fetchRecommendationByRepo(owner,name),{data:repositoryPullRequests,isError:pullError,meta}=(0,useRepositoryPullRequests.Z)(fullName),contributorData=(0,get_pr_contributors.Z)(repositoryPullRequests);return __jsx("div",{className:(0,clsx_m.Z)("relative w-full flex flex-col gap-2 p-4  bg-white border rounded-2xl ",className)},isLoading&&__jsx("div",{className:"flex items-center justify-center w-full h-36"},__jsx(spin_loader.$,null)),isError&&__jsx(react.Fragment,null,"An error occured loading ..."),data&&__jsx(react.Fragment,null,__jsx("div",{className:"flex justify-between w-full"},__jsx("a",{target:"_blank",href:"https://github.com/".concat(fullName),className:"flex items-center gap-1.5",rel:"noreferrer"},__jsx("picture",null,__jsx("img",{alt:"Hot Repo Icon",className:"w-4 h-4 overflow-hidden rounded-md",src:(0,github.cc)(owner)})),__jsx("span",{className:"text-sm text-light-slate-11"},owner))),__jsx("div",{className:"flex flex-col gap-2 pb-3"},__jsx("a",{className:"text-xl font-semibold",href:"https://app.opensauced.pizza/hot/repositories/filter/".concat(fullName),rel:"noopener noreferrer",target:"_blank"},name),__jsx("p",{title:data.description,className:"w-5/6 text-sm text-gray-500"},(0,truncate_string.a)(data.description,100))),__jsx("div",{className:"flex flex-wrap items-center justify-between mt-auto text-light-slate-10"},__jsx("div",{className:"flex space-x-3 text-xs"},__jsx("div",{className:"flex items-center justify-center space-x-1 text-sm"},__jsx(vsc_index_esm.gL2,{className:"fill-light-slate-10",size:16}),__jsx("span",{className:"text-lightSlate11"},(0,humanizeNumber.Z)(Number(data.issues),"abbreviation"))),__jsx("div",{className:"flex items-center justify-center space-x-1 text-sm"},__jsx(ai_index_esm.y5j,{className:"fill-lightSlate10",size:16}),__jsx("span",{className:"text-lightSlate11"},(0,humanizeNumber.Z)(Number(data.stars),"abbreviation"))),__jsx("div",{className:"flex items-center justify-center space-x-1 text-sm"},__jsx(index_esm.XeX,{className:"fill-lightSlate10",size:16}),__jsx("span",{className:"text-lightSlate11"},(0,humanizeNumber.Z)(meta.itemCount,"abbreviation")))),__jsx(stacked_avatar.Z,{contributors:contributorData}))))};RecommendedRepoCard.displayName="RecommendedRepoCard";const recommended_repo_card=RecommendedRepoCard;try{recommendedrepocard.displayName="recommendedrepocard",recommendedrepocard.__docgenInfo={description:"",displayName:"recommendedrepocard",props:{fullName:{defaultValue:null,description:"",name:"fullName",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/RecommendedRepoCard/recommended-repo-card.tsx#recommendedrepocard"]={docgenInfo:recommendedrepocard.__docgenInfo,name:"recommendedrepocard",path:"components/molecules/RecommendedRepoCard/recommended-repo-card.tsx#recommendedrepocard"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/StackedAvatar/stacked-avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>stacked_avatar});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_router=__webpack_require__("./node_modules/next/router.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),avatar_hover_card=__webpack_require__("./components/atoms/Avatar/avatar-hover-card.tsx"),dist=__webpack_require__("./node_modules/swr/core/dist/index.mjs"),public_api_fetcher=__webpack_require__("./lib/utils/public-api-fetcher.ts");const hooks_useInsight=id=>{const baseEndpoint="insights/".concat(id),endpointString="".concat(baseEndpoint),{data,error,mutate}=(0,dist.ZP)(id?endpointString:null,public_api_fetcher.Z);return{data,isLoading:!error&&!data,isError:!!error&&Object.keys(error).length>0,mutate}};var console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react.createElement;const StackedAvatar=_ref=>{let{contributors,visibleQuantity=5,classNames}=_ref;const router=(0,next_router.useRouter)(),{pageId}=router.query,insightId=Number.isInteger(parseInt(pageId,10))?pageId:"",{data:insight,isError}=hooks_useInsight(insightId),repositories=insight?insight.repos.map((repo=>repo.repo_id)):[];return isError?(console.log("Error fetching insight",isError),__jsx("div",null,"-")):__jsx("div",{className:(0,clsx_m.Z)("flex -space-x-3 transition-all duration-300 hover:-space-x-1",classNames)},contributors&&contributors.slice(0,visibleQuantity).map((_ref2=>{let{host_login:hostLogin}=_ref2;return __jsx("div",{key:"contributor-avatar-".concat(hostLogin),className:"w-8 h-8 overflow-hidden transition-all duration-300 border-2 border-white border-solid rounded-full"},__jsx(avatar_hover_card.Z,{contributor:hostLogin,repositories}))})))};StackedAvatar.displayName="StackedAvatar";const stacked_avatar=StackedAvatar;try{stackedavatar.displayName="stackedavatar",stackedavatar.__docgenInfo={description:"",displayName:"stackedavatar",props:{contributors:{defaultValue:null,description:"",name:"contributors",required:!0,type:{name:"Contributor[]"}},visibleQuantity:{defaultValue:{value:"5"},description:"",name:"visibleQuantity",required:!1,type:{name:"number"}},classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/StackedAvatar/stacked-avatar.tsx#stackedavatar"]={docgenInfo:stackedavatar.__docgenInfo,name:"stackedavatar",path:"components/molecules/StackedAvatar/stacked-avatar.tsx#stackedavatar"})}catch(__react_docgen_typescript_loader_error){}},"./lib/hooks/api/useRepositoryPullRequests.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var swr__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/swr/core/dist/index.mjs"),next_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/router.js"),lib_utils_public_api_fetcher__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./lib/utils/public-api-fetcher.ts"),lib_utils_get_filter_query__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./lib/utils/get-filter-query.ts");const __WEBPACK_DEFAULT_EXPORT__=function(fullName){var _data$data,_data$meta;let limit=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,range=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30;const router=(0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)(),{pageId,selectedFilter}=router.query,topic=pageId,filterQuery=(0,lib_utils_get_filter_query__WEBPACK_IMPORTED_MODULE_3__.Z)(selectedFilter),query=new URLSearchParams(filterQuery);topic&&Number.isNaN(Number(topic))&&query.set("topic",topic),!query.get("repo")&&fullName&&query.set("repo",fullName),query.get("repo")&&query.delete("topic"),query.set("page","1"),query.set("limit","".concat(limit)),query.set("range","".concat(range));const endpointString="".concat("prs/search","?").concat(query.toString()),{data,error}=(0,swr__WEBPACK_IMPORTED_MODULE_0__.ZP)(fullName?endpointString:null,lib_utils_public_api_fetcher__WEBPACK_IMPORTED_MODULE_2__.Z);return{data:null!==(_data$data=null==data?void 0:data.data)&&void 0!==_data$data?_data$data:[],meta:null!==(_data$meta=null==data?void 0:data.meta)&&void 0!==_data$meta?_data$meta:{itemCount:0,limit:0,page:0,hasNextPage:!1,hasPreviousPage:!1,pageCount:0},isLoading:!error&&!data,isError:!!error}}},"./lib/utils/get-pr-contributors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__=repositoryPullRequests=>Object.keys(repositoryPullRequests.filter((pr=>!pr.author_login.includes("[bot]"))).reduce(((contributors,pull_request)=>_objectSpread(_objectSpread({},contributors),{},{[pull_request.author_login]:!0})),{})).map((author=>({host_login:author})))},"./lib/utils/truncate-string.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function truncateString(str,num){return void 0===str||str.length<=num||void 0===str?str:str.slice(0,num)+"..."}__webpack_require__.d(__webpack_exports__,{a:()=>truncateString})}}]);