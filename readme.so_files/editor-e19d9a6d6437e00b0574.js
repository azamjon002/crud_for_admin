(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[154],{1706:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return z},default:function(){return $}});var s=n(318),r=n(9008),o=n(7294),a=n(8266),l=n(5893),i=function(e){var t=e.setShowModal,n=(0,a.$G)("editor").t;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"fixed inset-0 z-10 overflow-y-auto","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true",children:(0,l.jsxs)("div",{className:"flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0",children:[(0,l.jsx)("div",{className:"fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75",role:"overlay","aria-hidden":"true",onClick:function(){return t(!1)}}),(0,l.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),(0,l.jsxs)("div",{className:"inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white dark:bg-black rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"text-center text-7xl",children:"\ud83c\udf89"}),(0,l.jsxs)("div",{className:"mt-3 text-center sm:mt-5",children:[(0,l.jsx)("h3",{className:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-300",id:"modal-title",children:n("download-readme-generated")}),(0,l.jsxs)("div",{className:"mt-2",children:[(0,l.jsxs)("p",{className:"text-sm text-gray-500 dark:text-gray-300",children:[n("download-reach-out")," ",(0,l.jsx)("a",{href:"https://twitter.com/katherinecodes",target:"_blank",className:"text-emerald-500 hover:text-emerald-400",children:"Twitter"})," ",n("download-feedback")]}),(0,l.jsx)("p",{className:"mt-3 text-sm text-gray-500",children:n("download-coffee")})]})]})]}),(0,l.jsx)("div",{className:"flex justify-center mx-auto mt-5 sm:mt-6",children:(0,l.jsx)("a",{href:"https://www.buymeacoffee.com/katherinecodes",children:(0,l.jsx)("img",{src:"https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=katherinecodes&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"})})}),(0,l.jsx)("div",{className:"flex justify-center items-center mt-3",children:(0,l.jsx)("iframe",{src:"https://github.com/sponsors/octokatherine/button",title:"Sponsor octokatherine",height:"35",width:"116",className:"border-0"})})]})]})})})},c=n(3789),u=n(724),d=n.n(u),m="editor",f="preview",g="raw";function h(e){var t=e.text,n=(0,o.useRef)(null),s=(0,o.useState)(!1),r=s[0],a=s[1];return(0,l.jsxs)("div",{className:"h-full relative",children:[(0,l.jsx)("button",{className:"absolute top-0 right-7 focus:outline-none",type:"button","aria-label":r?"Copied Success":"To Copy",onClick:function(e){n.current.select(),document.execCommand("copy"),e.target.focus(),a(!0),setTimeout((function(){a(!1)}),3e3)},children:r?(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-emerald-500 focus:outline-none",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"})}):(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 hover:text-emerald-500 focus:outline-none",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})})}),(0,l.jsx)("textarea",{ref:n,readOnly:!0,className:"h-full w-full resize-none focus:outline-none",value:t})]})}var p=n(43),x=function(e){var t=e.selectedSectionSlugs,n=e.getTemplate,s=e.selectedTab,r=(t=(0,c.Z)(new Set(t))).reduce((function(e,t){var s=n(t);return s?"".concat(e).concat(s.markdown):e}),""),o=s===f;return(0,l.jsx)("div",{className:"h-full preview-width md:w-auto border border-gray-500 rounded-md p-6 preview bg-white full-screen \n      overflow-x-scroll md:overflow-x-auto ".concat(o?"overflow-y-scroll":"overflow-hidden"),children:o?(0,l.jsx)(d(),{plugins:[p],children:r,renderers:{link:function(e){return(0,l.jsx)("a",{href:e.href,target:"_blank",children:e.children})}}}):(0,l.jsx)(h,{text:r})})},b=n(2809);function v(){var e=(0,o.useState)(!1),t=e[0],n=e[1];return(0,o.useEffect)((function(){var e="undefined"===typeof window.navigator?"":navigator.userAgent,t=Boolean(e.match(/Mobi|Android|BlackBerry|iPhone/i));n(t)}),[]),{isMobile:t}}function w(){var e=(0,o.useState)(null),t=e[0],n=e[1],s=(0,o.useState)(null),r=s[0],a=s[1];(0,o.useEffect)((function(){var e=localStorage.getItem("readme-backup");e&&n(JSON.parse(e))}),[]);return{backup:t,saveBackup:function(e){try{r&&clearTimeout(r),a(setTimeout((function(){localStorage.setItem("readme-backup",JSON.stringify(e))}),1e3))}catch(t){console.error("Failed to create local backup")}},deleteBackup:function(){try{localStorage.removeItem("readme-backup")}catch(e){console.error("Failed to delete local backup")}}}}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,b.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=function(e){var t=e.focusedSectionSlug,s=e.templates,r=e.setTemplates,i=e.theme,c=function(){var e=s.find((function(e){return e.slug===t}));return e?e.markdown:""},u=(0,o.useState)(c()),d=u[0],m=u[1],f=(0,o.useState)(!1),g=(f[0],f[1]),h=v().isMobile,p=(0,o.useState)(null),x=p[0],b=p[1],j=w().saveBackup,y=(0,o.useRef)(null),k=(0,o.useRef)(null);(0,o.useEffect)((function(){var e=c();m(e)}),[t,s]);var N=function(e){m(e);var n=s.map((function(n){return n.slug===t?S(S({},n),{},{markdown:e}):n}));r(n),j(n)};(0,o.useEffect)((function(){h||x||n.e(972).then(n.bind(n,4972)).then((function(e){b(e.default)}))}),[x,h,b]);var T=(0,a.$G)("editor").t;return"noEdit"==t?(0,l.jsx)("p",{className:"font-sm text-emerald-500 max-w-[28rem] text-center mx-auto mt-10",children:T("editor-select")}):(0,l.jsx)(l.Fragment,{children:h?(0,l.jsx)("textarea",{onFocus:function(){return g(!0)},onBlur:function(){return g(!1)},ref:k,type:"text",onChange:function(e){return N(e.target.value)},value:d,className:"full-screen rounded-sm border border-gray-500 w-full p-6 resize-none ".concat("dark"===i?"bg-gray-800 text-white":"")}):x&&(0,l.jsx)(x,{onMount:function(e){y.current=e},wrapperClassName:"rounded-sm border border-gray-500",className:"full-screen",theme:i,language:"markdown",value:d,onChange:N,loading:"Loading...","aria-label":"Markdown Editor",options:{minimap:{enabled:!1},lineNumbers:!1}})})},k={Heading:function(e){var t=e.children,n=e.className,s=void 0===n?"":n;return(0,l.jsx)("h3",{className:"border-transparent whitespace-nowrap px-1 border-b-2 font-medium text-sm focus:outline-none \n    text-emerald-500 ".concat(s),children:t})},Tab:function(e){var t=e.children,n=e.isActive,s=e.className,r=void 0===s?"":s,o=e.onClick,a=void 0===o?function(){return null}:o;return(0,l.jsx)("button",{onClick:a,type:"button",className:"border-transparent whitespace-nowrap px-1 border-b-2 font-medium text-sm focus:outline-none \n    ".concat(n?"text-emerald-500":"text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-400"," ").concat(r),children:t})}},N=function(e){var t=e.selectedTab,n=e.setSelectedTab,s=(e.focusedSectionSlug,e.toggleTheme,e.toggleState,(0,a.$G)("editor").t);return(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)("div",{className:"flex flex-0 pb-3",children:(0,l.jsx)(k.Tab,{isActive:t===m,className:"flex-1",onClick:function(){return n(m)},children:s("editor-column-editor")})}),(0,l.jsx)("div",{className:"flex flex-1 justify-end border-b border-gray-200 dark:border-b-0",children:(0,l.jsxs)("nav",{className:"-mb-px flex space-x-8","aria-label":"Tabs",children:[(0,l.jsx)(k.Tab,{isActive:t===f,className:"pb-3",onClick:function(){return n(f)},children:s("preview-column-preview")}),(0,l.jsx)(k.Tab,{isActive:t===g,className:"pb-3",onClick:function(){return n(g)},children:s("preview-column-raw")})]})})]})},T=function(e){var t=e.templates,n=e.setTemplates,s=e.getTemplate,r=e.focusedSectionSlug,i=e.selectedSectionSlugs,c=e.setSelectedSectionSlugs,u=e.darkMode,d=(0,a.$G)("editor").t,h=(0,o.useState)({theme:"dark",img:"toggle_sun.svg"}),p=h[0],b=(h[1],(0,o.useState)(f)),w=b[0],j=b[1],S=v().isMobile;(0,o.useEffect)((function(){j(S?m:f)}),[S]);var T=!S||w===m,O=!S||w===f||w===g;return(0,l.jsxs)("div",{className:"flex flex-1 pt-6 px-6 md:p-0 flex-col md:flex-row",children:[S?(0,l.jsx)(N,{selectedTab:w,setSelectedTab:j,focusedSectionSlug:r,toggleState:p,toggleTheme:function(){return setDarkMode(!u)}}):null,T?(0,l.jsxs)("div",{className:"w-full md:w-1/2 px-3 full-screen",children:[S?null:(0,l.jsx)(k.Heading,{children:d("editor-column-editor")}),(0,l.jsx)(y,{focusedSectionSlug:r,selectedSectionSlugs:i,setSelectedSectionSlugs:c,templates:t,setTemplates:n,theme:"vs-dark"})]}):null,O?(0,l.jsxs)("div",{className:"px-3 flex-1",children:[S?null:(0,l.jsx)("div",{className:"border-b border-gray-200",children:(0,l.jsxs)("nav",{className:"-mb-px flex space-x-8","aria-label":"Tabs",children:[(0,l.jsx)(k.Tab,{isActive:w===f,className:"pb-3",onClick:function(){return j(f)},children:d("preview-column-preview")}),(0,l.jsx)(k.Tab,{isActive:w===g,className:"pb-3",onClick:function(){return j(g)},children:d("preview-column-raw")})]})}),(0,l.jsx)(x,{selectedSectionSlugs:i,getTemplate:s,selectedTab:w})]}):null]})},O=n(1664),C=n(9260),M=function(e){var t=e.className;return(0,l.jsxs)("svg",{className:t,viewBox:"0 0 512 512",children:[(0,l.jsx)("title",{children:"Menu"}),(0,l.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"30",d:"M80 160h352M80 256h352M80 352h352"})]})},E=function(e){var t=e.className;return(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,viewBox:"0 0 512 512",children:[(0,l.jsx)("title",{children:"Close"}),(0,l.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M368 368L144 144M368 144L144 368"})]})},D=function(e){var t=e.selectedSectionSlugs,n=e.setShowModal,s=e.getTemplate,r=e.onMenuClick,o=e.isDrawerOpen,i=e.darkMode,c=e.setDarkMode,u=e.focusedSectionSlug,d=t.reduce((function(e,t){var n=s(t);return n?"".concat(e).concat(n.markdown):e}),""),m=v().isMobile,f=(0,a.$G)("editor").t;return(0,l.jsxs)("nav",{className:"flex justify-between p-4 bg-gray-800 align-center w-full",children:[(0,l.jsx)(O.default,{href:"/",children:(0,l.jsx)("a",{className:"focus:outline-none focus:ring-2 focus:ring-emerald-400 flex items-center",children:(0,l.jsx)("img",{className:"w-auto h-12",src:"readme.svg",alt:"readme.so logo"})})}),(0,l.jsxs)("div",{className:"flex flex-row-reverse md:flex-row",children:[(0,l.jsx)("button",{className:"focus:outline-none focus:ring-2 focus:ring-emerald-400",onClick:r,children:o?(0,l.jsx)(E,{className:"w-10 h-10 md:hidden fill-current text-emerald-500"}):(0,l.jsx)(M,{className:"w-10 h-10 md:hidden fill-current text-emerald-500"})}),"noEdit"!==u&&(0,l.jsx)("button",{onClick:function(){return c(!i)},"aria-label":"Color Mode",className:"toggle-dark-mode focus:outline-none transition transform motion-reduce:transition-none motion-reduce:transform-none  pr-4",children:(0,l.jsx)(C.default,{className:"w-auto h-8 mr-2",alt:i?"dark":"light",src:i?"/toggle_sun.svg":"/toggle_moon.svg",width:40,height:40})}),(0,l.jsxs)("button",{type:"button","aria-label":"Download Markdown",className:"flex flex-row relative items-center mr-4 md:mr-0 px-4 py-2 text-sm font-bold tracking-wide text-white border border-transparent rounded-md shadow-sm bg-emerald-500 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-emerald-500",onClick:function(){var e=document.createElement("a"),t=new Blob([d]);e.href=URL.createObjectURL(t),e.download="README.md",e.click(),m&&o&&r(),n(!0)},children:[(0,l.jsx)("img",{className:"w-auto h-6 cursor-pointer",src:"download.svg"}),(0,l.jsx)("span",{className:"hidden md:inline-block ml-2",children:f("nav-download")})]})]})]})},F=n(9752),_=n(2339),I=n(5587),B=n(4285);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,b.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function R(e){var t=(0,I.nB)({id:e.id}),n=t.attributes,s=t.listeners,r=t.setNodeRef,o=t.transform,a=t.transition,i={transform:B.ux.Transform.toString(o),transition:a},c=function(){localStorage.setItem("current-focused-slug",e.id),e.setFocusedSectionSlug(e.id)};return(0,l.jsxs)("li",L(L({ref:r,style:i},n),{},{onClick:c,onKeyUp:function(e){"enter"===e.key.toLowerCase()&&c()},className:"bg-white dark:bg-gray-200 shadow rounded-md pl-1 pr-14 py-2 flex items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 relative select-none ".concat(e.section.slug===e.focusedSectionSlug?"ring-2 ring-emerald-400":""),children:[(0,l.jsx)("button",L(L({type:"button",className:"mr-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400"},s),{},{children:(0,l.jsx)("img",{className:"w-5 h-5",src:"drag.svg"})})),(0,l.jsx)("p",{children:e.section.name}),e.section.slug===e.focusedSectionSlug&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{className:"focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 absolute right-8",type:"button","aria-label":"Reset section",onClick:function(t){!0===window.confirm("The section will be reset to default template; to continue, click OK")&&e.onResetSection(t,e.section.slug)},children:(0,l.jsx)("img",{className:"w-auto h-5",src:"reset.svg",alt:"reset-icon"})}),(0,l.jsx)("button",{className:"focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 absolute right-2",type:"button","aria-label":"Delete section",onClick:function(t){e.onDeleteSection(t,e.section.slug)},children:(0,l.jsx)("img",{className:"w-auto h-5",src:"trash.svg",alt:"trash-icon"})})]})]}))}var A=n(3949),Z=n(13),G=function(e){var t=e.setTemplates,n=e.setSelectedSectionSlugs,s=e.setFocusedSectionSlug,r=e.setpageRefreshed,i=e.setAddAction,u=(0,o.useState)(!1),d=u[0],m=u[1],f=(0,o.useState)(""),g=f[0],h=f[1],p=w().saveBackup,x=(0,a.$G)("editor").t,b=(0,o.useRef)(null);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(A.u.Root,{show:d,as:o.Fragment,children:(0,l.jsx)(Z.V,{as:"div",className:"fixed z-10 inset-0 overflow-y-auto",initialFocus:b,onClose:function(){return m(!1)},children:(0,l.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[(0,l.jsx)(A.u.Child,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,l.jsx)(Z.V.Overlay,{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),(0,l.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),(0,l.jsx)(A.u.Child,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,l.jsxs)("div",{className:"inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6",children:[(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"mt-3 text-center sm:mt-5",children:[(0,l.jsx)(Z.V.Title,{as:"h3",className:"text-lg leading-6 font-medium text-gray-900",children:"New Custom Section"}),(0,l.jsx)("div",{className:"my-4",children:(0,l.jsx)("input",{ref:b,type:"text",name:"title",id:"title",onChange:function(e){return h(e.target.value)},className:"shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 block w-full sm:text-sm border border-gray-300 rounded-md",placeholder:"Section Title"})})]})}),(0,l.jsxs)("div",{className:"mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense",children:[(0,l.jsx)("button",{type:"button",className:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-emerald-500 text-base font-medium text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 sm:col-start-2 sm:text-sm disabled:opacity-50",disabled:!g,onClick:function(){m(!1);var e={slug:"custom-"+g.toLowerCase().replace(/\s/g,"-"),name:g,markdown:"\n## ".concat(g)};localStorage.setItem("current-focused-slug",e.slug),t((function(t){var n=[].concat((0,c.Z)(t),[e]);return p(n),n})),r(!1),i(!0),n((function(t){return[].concat((0,c.Z)(t),[e.slug])})),s(localStorage.getItem("current-focused-slug"))},children:"Add Section"}),(0,l.jsx)("button",{type:"button",className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 sm:mt-0 sm:col-start-1 sm:text-sm",onClick:function(){return m(!1)},children:"Cancel"})]})]})})]})})}),(0,l.jsx)("div",{className:"mb-3",children:(0,l.jsxs)("button",{className:"flex items-center justify-center block w-full h-full py-2 pl-3 pr-6 bg-white dark:bg-gray-200 font-bold rounded-md shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400",type:"button",onClick:function(){return m(!0)},children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",clipRule:"evenodd"})}),(0,l.jsx)("span",{className:"ml-1",children:x("custom-section")})]})})]})},V=function(e){var t=e.selectedSectionSlugs,n=e.setSelectedSectionSlugs,s=e.sectionSlugs,r=e.setSectionSlugs,i=e.setFocusedSectionSlug,u=e.focusedSectionSlug,d=e.templates,m=e.originalTemplate,f=e.setTemplates,g=e.getTemplate,h=e.darkMode,p=(0,F.Dy)((0,F.VT)(F.MA),(0,F.VT)(F.LO),(0,F.VT)(F.Lg,{coordinateGetter:I.is})),x=(0,o.useState)(!1),b=x[0],v=x[1],j=(0,o.useState)(!1),S=j[0],y=j[1],k=(0,o.useState)([]),N=k[0],T=k[1],O=(0,o.useState)([]),M=O[0],E=O[1],D=w(),B=D.saveBackup,P=D.deleteBackup;(0,o.useEffect)((function(){var e=null==localStorage.getItem("current-slug-list")?"title-and-description":localStorage.getItem("current-slug-list");if(E(e),e.length>0){v(!0);var t=[];e.indexOf(",")>-1?t=e.split(","):t.push(e),t.forEach((function(e){r((function(t){return t.filter((function(t){return t!=e}))}))})),T(t),n(t),i(N[0]),localStorage.setItem("current-focused-slug",t[0])}}),[]);(0,o.useEffect)((function(){localStorage.setItem("current-slug-list",t)}),[t]);var L=function(e,t){e.stopPropagation(),n((function(e){return e.filter((function(e){return e!==t}))})),r((function(e){return[].concat((0,c.Z)(e),[t])})),i(null),localStorage.setItem("current-focused-slug","noEdit")},A=function(e,t){var n;if(e.stopPropagation(),"custom"===t.slice(0,6)){var s=t.slice(6,t.length).split("-").map((function(e){return e.slice(0,1).toUpperCase()+e.slice(1)})).join(" ");n={slug:t,name:s,markdown:"\n## ".concat(s)}}else n=m.find((function(e){return e.slug===t}));var r=d.map((function(e){return e.slug===n.slug?n:e}));f(r),B(r)};(0,o.useEffect)((function(){i(localStorage.getItem("current-focused-slug"))}),[u]);var Z=(0,a.$G)("editor").t,V=s.sort();return(0,l.jsxs)("div",{className:"sections w-80",children:[(0,l.jsxs)("h3",{className:"px-1 text-sm font-medium border-b-2 border-transparent text-emerald-500 whitespace-nowrap focus:outline-none",children:[Z("section-column-section"),(0,l.jsxs)("button",{className:"focus:outline-none float-right",type:"button",onClick:function(){var e=localStorage.getItem("current-slug-list");if(!0===window.confirm("All sections of your readme will be removed; to continue, click OK")){var t=e?e.split(","):[];r((function(e){return[].concat((0,c.Z)(e),(0,c.Z)(t)).filter((function(e){return"title-and-description"!==e}))})),n(["title-and-description"]),i("title-and-description"),localStorage.setItem("current-focused-slug","noEdit"),f(m),P()}},children:[(0,l.jsx)("span",{className:"pl-2 float-right",children:Z("section-column-click-reset")}),(0,l.jsx)(C.default,{className:"w-auto h-5 inline-block",src:h?"/reset-light.svg":"/reset.svg",alt:"Delete",width:16,height:16})]})]}),(0,l.jsxs)("div",{className:"px-3 pr-4 overflow-y-scroll full-screen",children:[t.length>0&&(0,l.jsx)("h4",{className:"mb-3 text-xs leading-6 text-gray-900 dark:text-gray-300",children:Z("section-column-click-edit")}),(0,l.jsx)("ul",{className:"mb-12 space-y-3",children:(0,l.jsx)(F.LB,{sensors:p,collisionDetection:F.pE,onDragEnd:function(e){var t=e.active,s=e.over;t.id!==s.id&&n((function(e){var n=e.findIndex((function(e){return e===t.id})),r=e.findIndex((function(e){return e===s.id}));return(0,I.Rp)(e,n,r)}))},modifiers:[_.DL],children:(0,l.jsx)(I.Fo,{items:t,children:((b||S)&&(t=(0,c.Z)(new Set(t))),t.map((function(e){var t=g(e);if(t)return(0,l.jsx)(R,{id:e,section:t,focusedSectionSlug:u,setFocusedSectionSlug:i,onDeleteSection:L,onResetSection:A},e)})))})})}),s.length>0&&(0,l.jsx)("h4",{className:"mb-3 text-xs leading-6 text-gray-900 dark:text-gray-300 overflow-ellipsis",children:Z("section-column-click-add")}),(0,l.jsx)(G,{setSelectedSectionSlugs:n,setFocusedSectionSlug:i,setpageRefreshed:v,setAddAction:y,setTemplates:f}),(0,l.jsx)("ul",{className:"mb-12 space-y-3",children:(b&&-1==M.indexOf("title-and-description")&&s.push("title-and-description"),V=s.sort(),(b||S)&&(V=(0,c.Z)(new Set(V))),V.map((function(e){var t=g(e);if(t)return(0,l.jsx)("li",{children:(0,l.jsx)("button",{className:"flex items-center block w-full h-full py-2 pl-3 pr-6 bg-white dark:bg-gray-200 rounded-md shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400",type:"button",onClick:function(t){return s=e,localStorage.setItem("current-focused-slug",s),v(!1),y(!0),r((function(e){return e.filter((function(e){return e!==s}))})),n((function(e){return[].concat((0,c.Z)(e),[s])})),void i(localStorage.getItem("current-focused-slug"));var s},children:(0,l.jsx)("span",{children:t.name})})},e)})))})]})]})};var z=!0;function $(e){var t=e.sectionTemplates,n=(0,o.useState)([]),a=n[0],c=n[1],u=(0,o.useState)(t.map((function(e){return e.slug}))),d=u[0],m=u[1],f=(0,o.useState)(null),g=f[0],h=f[1],p=(0,o.useState)(!1),x=p[0],b=p[1],v=(0,o.useState)(t),j=v[0],S=v[1],y=(0,o.useState)(!1),k=y[0],N=y[1],O=w().backup,C=function(){var e="color-theme",t=window.localStorage.getItem(e),n=(0,o.useState)("dark"===t),s=n[0],r=n[1];return(0,o.useEffect)((function(){var t="dark",n=window.document.documentElement;s?(localStorage.setItem(e,"dark"),n.classList.add(t)):(localStorage.setItem(e,"light"),n.classList.remove(t))}),[s]),[s,r]}(),M=(0,s.Z)(C,2),E=M[0],F=M[1];(0,o.useEffect)((function(){O&&S(O)}),[O]);var _=function(e){return j.find((function(t){return t.slug===e}))};(0,o.useEffect)((function(){h(null)}),[]),(0,o.useEffect)((function(){-1==localStorage.getItem("current-slug-list").indexOf("title-and-description")&&a.indexOf("title-and-description")>-1&&a.splice(a.indexOf("title-and-description"),1),h(localStorage.getItem("current-slug-list").split(",")[0]),localStorage.setItem("current-slug-list",a)}),[a]);var I=k?"":"-translate-x-full md:transform-none";return(0,l.jsxs)("div",{className:"w-full h-full",children:[(0,l.jsxs)(r.default,{children:[(0,l.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),(0,l.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Mali&display=swap",rel:"stylesheet"}),(0,l.jsx)("script",{"data-name":"BMC-Widget","data-cfasync":"false",src:"https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js","data-id":"katherinecodes","data-description":"Support me on Buy me a coffee!","data-message":"","data-color":"#FFDD00","data-position":"Right","data-x_margin":"18","data-y_margin":"18"})]}),(0,l.jsx)(D,{selectedSectionSlugs:a,setShowModal:b,getTemplate:_,onMenuClick:function(){return N(!k)},isDrawerOpen:k,darkMode:E,setDarkMode:F,focusedSectionSlug:g}),x&&(0,l.jsx)(i,{setShowModal:b}),(0,l.jsxs)("div",{className:"flex md:px-6 md:pt-6 ",children:[(0,l.jsx)("div",{className:"flex flex-0 drawer-height absolute md:static p-6 md:p-0 bg-white dark:bg-gray-800 md:bg-transparent shadow md:shadow-none z-10 md:z-0\n        transform  transition-transform duration-500 ease-in-out ".concat(I),children:(0,l.jsx)(V,{selectedSectionSlugs:a,setSelectedSectionSlugs:c,sectionSlugs:d,setSectionSlugs:m,setFocusedSectionSlug:h,focusedSectionSlug:g,templates:j,originalTemplate:t,setTemplates:S,getTemplate:_,darkMode:E})}),(0,l.jsx)(T,{templates:j,setTemplates:S,getTemplate:_,focusedSectionSlug:g,setFocusedSectionSlug:h,selectedSectionSlugs:a,setSelectedSectionSlugs:c,darkMode:E})]})]})}},7253:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/editor",function(){return n(1706)}])}},function(e){e.O(0,[821,774,888,179],(function(){return t=7253,e(e.s=t);var t}));var t=e.O();_N_E=t}]);