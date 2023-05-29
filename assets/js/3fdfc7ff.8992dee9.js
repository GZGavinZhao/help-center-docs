"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[4608],{4137:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>d});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),c=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},u=function(e){var a=c(e.components);return n.createElement(i.Provider,{value:a},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),g=r,d=p["".concat(i,".").concat(g)]||p[g]||m[g]||o;return t?n.createElement(d,s(s({ref:a},u),{},{components:t})):n.createElement(d,s({ref:a},u))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=g;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},479:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(7462),r=(t(7294),t(4137));const o={title:"Basics to Package Management",summary:"Basics to Package Management"},s="Basics to Package Management",l={unversionedId:"user/package-management/basics",id:"user/package-management/basics",title:"Basics to Package Management",description:"Solus uses the eopkg package management system to deliver software to the end-user.",source:"@site/docs/user/package-management/basics.md",sourceDirName:"user/package-management",slug:"/user/package-management/basics",permalink:"/docs/user/package-management/basics",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/package-management/basics.md",tags:[],version:"current",lastUpdatedAt:1684791895,formattedLastUpdatedAt:"May 22, 2023",frontMatter:{title:"Basics to Package Management",summary:"Basics to Package Management"},sidebar:"userSidebar",previous:{title:"Package Management",permalink:"/docs/category/package-management"},next:{title:"History and Software Rollback",permalink:"/docs/user/package-management/history-and-rollback"}},i={},c=[{value:"Installing Software",id:"installing-software",level:2},{value:"Reinstalling Software",id:"reinstalling-software",level:2},{value:"Uninstalling Software",id:"uninstalling-software",level:2},{value:"Get Information on Software",id:"get-information-on-software",level:2},{value:"Updating",id:"updating",level:2},{value:"Searching",id:"searching",level:2},{value:"Base Development Tools",id:"base-development-tools",level:2}],u={toc:c},p="wrapper";function m(e){let{components:a,...t}=e;return(0,r.kt)(p,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"basics-to-package-management"},"Basics to Package Management"),(0,r.kt)("p",null,"Solus uses the eopkg package management system to deliver software to the end-user.",(0,r.kt)("br",{parentName:"p"}),"\n","Below are some basic commands for using eopkg."),(0,r.kt)("h2",{id:"installing-software"},"Installing Software"),(0,r.kt)("p",null,"You can install one or more packages by using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg install packagename\n")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg install gnome-documents gnome-music\n")),(0,r.kt)("h2",{id:"reinstalling-software"},"Reinstalling Software"),(0,r.kt)("p",null,"You can reinstall one or more packages by using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg install --reinstall packagename\n")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg install --reinstall gnome-documents gnome-music\n")),(0,r.kt)("h2",{id:"uninstalling-software"},"Uninstalling Software"),(0,r.kt)("p",null,"You can uninstall one or more packages by using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo eopkg remove packagename\n")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg remove gnome-documents gnome-music\n")),(0,r.kt)("h2",{id:"get-information-on-software"},"Get Information on Software"),(0,r.kt)("p",null,"You can get information on software, such as its description, version, installation size, and more, by using"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg info packagename\n")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg info gnome-documents\n")),(0,r.kt)("h2",{id:"updating"},"Updating"),(0,r.kt)("p",null,"You can update your system by using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg upgrade\n")),(0,r.kt)("p",null,"If you want to ",(0,r.kt)("strong",{parentName:"p"},"only")," update a specific piece of software on your system, you can specify is like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg upgrade firefox\n")),(0,r.kt)("h2",{id:"searching"},"Searching"),(0,r.kt)("p",null,"You can search the software selection Solus provides by using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg search term\n")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg search documents\n")),(0,r.kt)("p",null,"Notice that you don't need to search for a specific software name, although you can do that. We search summaries and software names by default."),(0,r.kt)("h2",{id:"base-development-tools"},"Base Development Tools"),(0,r.kt)("p",null,"If you are wanting to compile software under Solus, we recommend installing our system.devel component by running the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg install -c system.devel\n")),(0,r.kt)("p",null,"This will provide items such as clang, gcc, make, a multitude of devel sub-packages, and more. Our system.devel is similar to packages on other operating systems, such as Debian's build-essentials."))}m.isMDXComponent=!0}}]);