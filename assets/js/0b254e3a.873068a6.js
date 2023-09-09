"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[6726],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>k});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),g=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},l=function(e){var a=g(e.components);return n.createElement(c.Provider,{value:a},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=g(t),d=i,k=s["".concat(c,".").concat(d)]||s[d]||u[d]||r;return t?n.createElement(k,p(p({ref:a},l),{},{components:t})):n.createElement(k,p({ref:a},l))}));function k(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,p=new Array(r);p[0]=d;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o[s]="string"==typeof e?e:i,p[1]=o;for(var g=2;g<r;g++)p[g]=t[g];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2753:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>g});var n=t(7462),i=(t(7294),t(3905));const r={title:"Updating an Existing Package",summary:"Updating an Existing Package"},p="Updating an Existing Package",o={unversionedId:"packaging/updating-an-existing-package",id:"packaging/updating-an-existing-package",title:"Updating an Existing Package",description:"This article will go over updating a package that is already in the Solus git repository.",source:"@site/docs/packaging/updating-an-existing-package.md",sourceDirName:"packaging",slug:"/packaging/updating-an-existing-package",permalink:"/docs/packaging/updating-an-existing-package",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/packaging/updating-an-existing-package.md",tags:[],version:"current",lastUpdatedAt:1694290073,formattedLastUpdatedAt:"Sep 9, 2023",frontMatter:{title:"Updating an Existing Package",summary:"Updating an Existing Package"},sidebar:"packagingSidebar",previous:{title:"Submitting the Package",permalink:"/docs/packaging/submitting-a-package"},next:{title:"Your First Package",permalink:"/docs/packaging/your-first-package"}},c={},g=[{value:"Bumping a package",id:"bumping-a-package",level:2},{value:"Updating a package",id:"updating-a-package",level:2},{value:"Building a package",id:"building-a-package",level:2}],l={toc:g},s="wrapper";function u(e){let{components:a,...t}=e;return(0,i.kt)(s,(0,n.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"updating-an-existing-package"},"Updating an Existing Package"),(0,i.kt)("p",null,"This article will go over updating a package that is already in the Solus git repository."),(0,i.kt)("p",null,"The instructions below assume you have cloned the package's repository using the https link provided on the respective git page, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/solus-packages/nano"},"for example nano"),". The process for submitting an updated package is the same as if it is a new package. Follow the steps ",(0,i.kt)("a",{parentName:"p",href:"/docs/packaging/submitting-a-package"},"here"),"."),(0,i.kt)("h2",{id:"bumping-a-package"},"Bumping a package"),(0,i.kt)("p",null,"Bumping a package is typically done when rebuilding against a changed dependency, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"imagemagick")," needing to be rebuilt if ",(0,i.kt)("inlineCode",{parentName:"p"},"libwebp")," changes. Additionally, it is done if changes are being made to the package, such as additional new dependencies or other modifications."),(0,i.kt)("p",null,"This can be achieved by doing ",(0,i.kt)("inlineCode",{parentName:"p"},"make bump"),", which increments the release number by 1."),(0,i.kt)("h2",{id:"updating-a-package"},"Updating a package"),(0,i.kt)("p",null,"To update the package to a newer version, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"yupdate")," tool. This tool is located at ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/share/ypkg/yupdate.py")," and while you can use it directly, we generally recommend setting an alias via your ",(0,i.kt)("inlineCode",{parentName:"p"},".bashrc"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".zshrc"),", etc."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"alias updatePackage='/usr/share/ypkg/yupdate.py'\n")),(0,i.kt)("p",null,"This script takes two arguments, in the following order:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Version"),(0,i.kt)("li",{parentName:"ol"},"Source URL")),(0,i.kt)("p",null,"If you're updating the package to a newer version, naturally you would change both the version and source. If you're merely changing the source URL for the existing version, just pass the same version number and the new source URL."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/share/ypkg/yupdate.py 1.0 https://example.com/example-1.0.tar.xz\n")),(0,i.kt)("h2",{id:"building-a-package"},"Building a package"),(0,i.kt)("p",null,"After bumping or updating the package, build it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make\n")))}u.isMDXComponent=!0}}]);