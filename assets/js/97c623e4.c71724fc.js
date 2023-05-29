"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[6427],{4137:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(a),g=n,k=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return a?r.createElement(k,p(p({ref:t},l),{},{components:a})):r.createElement(k,p({ref:t},l))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,p=new Array(o);p[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,p[1]=i;for(var c=2;c<o;c++)p[c]=a[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},9168:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(7462),n=(a(7294),a(4137));const o={title:"Requesting a Package Update",summary:"Boohoo, your favourite package is outdated!"},p="Requesting A Package Update",i={unversionedId:"packaging/procedures/request-a-package-update",id:"packaging/procedures/request-a-package-update",title:"Requesting a Package Update",description:"Packages updates are typically provided by community or dedicated package maintainers, however if we are not shipping the latest stable release of a package, you can let us know using our Task Tracker",source:"@site/docs/packaging/procedures/request-a-package-update.md",sourceDirName:"packaging/procedures",slug:"/packaging/procedures/request-a-package-update",permalink:"/docs/packaging/procedures/request-a-package-update",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/packaging/procedures/request-a-package-update.md",tags:[],version:"current",lastUpdatedAt:1684791895,formattedLastUpdatedAt:"May 22, 2023",frontMatter:{title:"Requesting a Package Update",summary:"Boohoo, your favourite package is outdated!"},sidebar:"packagingSidebar",previous:{title:"Release Processes",permalink:"/docs/packaging/procedures/release-processes"},next:{title:"Requesting a Package",permalink:"/docs/packaging/procedures/request-a-package"}},s={},c=[],l={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"requesting-a-package-update"},"Requesting A Package Update"),(0,n.kt)("p",null,"Packages updates are typically provided by community or dedicated package maintainers, however if we are not shipping the latest stable release of a package, you can let us know using our ",(0,n.kt)("a",{parentName:"p",href:"https://dev.getsol.us/"},"Task Tracker")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Please look to see if an update request has already been filed for the software or library you require"),"."),(0,n.kt)("p",null,"If there isn't an existing request, you can use the template below for requesting to update a package. Note that updates solely for a new version number, platform-specific updates (such as to macOS or Windows) which aren't relevant, or solely translation updates, are generally not accepted or not prioritized."),(0,n.kt)("p",null,"Please provide the following information:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Title of Task: ",(0,n.kt)("inlineCode",{parentName:"li"},"Update $packagename to $version")),(0,n.kt)("li",{parentName:"ul"},"Example: ",(0,n.kt)("inlineCode",{parentName:"li"},"Update nano to 2.9.7")),(0,n.kt)("li",{parentName:"ul"},"Description: Explanation as to the value-add of updating this package."),(0,n.kt)("li",{parentName:"ul"},"Link to source tarball/zip file"),(0,n.kt)("li",{parentName:"ul"},"master.zip files ",(0,n.kt)("strong",{parentName:"li"},"are not permitted"),'. We require versioned tarballs, for example: "1.2.3.tar.gz".'),(0,n.kt)("li",{parentName:"ul"},"Use the tag ",(0,n.kt)("strong",{parentName:"li"},"Software")," for tagging your update request")),(0,n.kt)("p",null,"Please put this information into a new ",(0,n.kt)("a",{parentName:"p",href:"https://dev.getsol.us/maniphest/task/edit/form/1/"},"task")))}d.isMDXComponent=!0}}]);