"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[172],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},631:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={},i="Testing an ISO",s={unversionedId:"user/contributing/testing-an-iso",id:"user/contributing/testing-an-iso",title:"Testing an ISO",description:"A handy checklist anyone can use for testing an ISO.",source:"@site/docs/user/contributing/testing-an-iso.md",sourceDirName:"user/contributing",slug:"/user/contributing/testing-an-iso",permalink:"/docs/user/contributing/testing-an-iso",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/contributing/testing-an-iso.md",tags:[],version:"current",lastUpdatedAt:1689163310,formattedLastUpdatedAt:"Jul 12, 2023",frontMatter:{},sidebar:"userSidebar",previous:{title:"Getting Involved",permalink:"/docs/user/contributing/getting-involved"},next:{title:"Editions",permalink:"/docs/user/editions/"}},l={},u=[{value:"For any release",id:"for-any-release",level:2},{value:"Laptops",id:"laptops",level:3},{value:"VMs",id:"vms",level:3},{value:"For the specific release",id:"for-the-specific-release",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"testing-an-iso"},"Testing an ISO"),(0,a.kt)("p",null,"A handy checklist anyone can use for testing an ISO."),(0,a.kt)("p",null,"This is a list of some general things to check. It is not meant to be exhaustive, just enough to hit major points and hopefully uncover obvious problems. Testers are certainly not prohibited from doing more, at their discretion. Not all points will be testable by everyone (ex: docking / undocking). That is fine; this is just a reference."),(0,a.kt)("p",null,"When testing, try to keep different types of users in mind. For instance, would a general / new user be comfortable with the experience? Would a technical user be put off by a limitation?"),(0,a.kt)("h2",{id:"for-any-release"},"For any release"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ISO can be written to a USB, used to boot a system and install"),(0,a.kt)("li",{parentName:"ul"},"Installer is easy to follow"),(0,a.kt)("li",{parentName:"ul"},"Installer detects location, time and time zone properly. Bonus points if the correct timezone is shown in the picker and you don't have to manually select one."),(0,a.kt)("li",{parentName:"ul"},"Start menu works, has search"),(0,a.kt)("li",{parentName:"ul"},"Can scan / print / use your peripherals"),(0,a.kt)("li",{parentName:"ul"},"Sound over speakers"),(0,a.kt)("li",{parentName:"ul"},"Bluetooth device connects, has high fidelity and headphone modes, you can hear sound"),(0,a.kt)("li",{parentName:"ul"},"Install your usual software and just make sure basic functionality works"),(0,a.kt)("li",{parentName:"ul"},"Plugging in a USB drive allows user to mount the drive and access files"),(0,a.kt)("li",{parentName:"ul"},"System can be put to sleep and woken, things still work after waking (display, keyboard, mouse, sound, network)"),(0,a.kt)("li",{parentName:"ul"},"Able to create and use samba shares via file manager (you must ",(0,a.kt)("a",{parentName:"li",href:"https://help.getsol.us/docs/user/software/networking/samba#samba-on-solus"},"enable smb after installation"),")"),(0,a.kt)("li",{parentName:"ul"},"Anything that's been flaky in your experience (LVM, for instance)")),(0,a.kt)("h3",{id:"laptops"},"Laptops"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Multi-monitor display behaves properly with docking and undocking.")),(0,a.kt)("h3",{id:"vms"},"VMs"),(0,a.kt)("p",null,"This functionality might be affected by the settings of the VM."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Copy and paste works from host to guest ",(0,a.kt)("em",{parentName:"li"},"before")," install, while booted into the live ISO"),(0,a.kt)("li",{parentName:"ul"},"Copy and paste works ",(0,a.kt)("em",{parentName:"li"},"after")," installation and rebooting the VM")),(0,a.kt)("h2",{id:"for-the-specific-release"},"For the specific release"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Any issues that have been recently fixed, or are known to be recently flaky."),(0,a.kt)("li",{parentName:"ul"},"Check the ISO task in the tracker for other potential areas of interest.")))}d.isMDXComponent=!0}}]);