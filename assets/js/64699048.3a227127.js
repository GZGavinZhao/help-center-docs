"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[2151],{4137:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(o),m=r,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return o?n.createElement(f,a(a({ref:t},p),{},{components:o})):n.createElement(f,a({ref:t},p))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=o.length,a=new Array(l);a[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<l;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9197:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=o(7462),r=(o(7294),o(4137));const l={title:"Development",summary:"Installation of development software on Solus",date:new Date("2022-12-16T00:00:00.000Z")},a="Development",s={unversionedId:"user/software/development/index",id:"user/software/development/index",title:"Development",description:"Base Development Tools",source:"@site/docs/user/software/development/index.md",sourceDirName:"user/software/development",slug:"/user/software/development/",permalink:"/help-center-docs/docs/user/software/development/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user/software/development/index.md",tags:[],version:"current",frontMatter:{title:"Development",summary:"Installation of development software on Solus",date:"2022-12-16T00:00:00.000Z"},sidebar:"userSidebar",previous:{title:"Desktops",permalink:"/help-center-docs/docs/user/software/desktops/"},next:{title:"Android",permalink:"/help-center-docs/docs/user/software/development/android"}},i={},c=[{value:"Base Development Tools",id:"base-development-tools",level:2},{value:"Additional Tools",id:"additional-tools",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"development"},"Development"),(0,r.kt)("h2",{id:"base-development-tools"},"Base Development Tools"),(0,r.kt)("p",null,"If you are wanting to compile software under Solus, we recommend installing our system.devel component by running the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg install -c system.devel\n")),(0,r.kt)("p",null,"This will provide items such as clang, gcc, make, a multitude of devel sub-packages, and more. Our system.devel is similar to packages on other operating systems, such as Debian's build-essentials."),(0,r.kt)("h2",{id:"additional-tools"},"Additional Tools"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"TODO: Add blockquote CSS to mkdocs theme")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"TODO: Add links to the other development pages")))}d.isMDXComponent=!0}}]);