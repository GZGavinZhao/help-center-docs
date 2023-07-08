"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[1896],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),c=n,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return r?a.createElement(h,l(l({ref:t},p),{},{components:r})):a.createElement(h,l({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1984:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={title:"VirtualBox",summary:"Quick start guide for VirtualBox on Solus"},l="VirtualBox",i={unversionedId:"user/software/virtualization/virtualbox",id:"user/software/virtualization/virtualbox",title:"VirtualBox",description:"VirtualBox is an x86 and x86_64 virtualization software package developed by Oracle.",source:"@site/docs/user/software/virtualization/virtualbox.md",sourceDirName:"user/software/virtualization",slug:"/user/software/virtualization/virtualbox",permalink:"/docs/user/software/virtualization/virtualbox",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/software/virtualization/virtualbox.md",tags:[],version:"current",lastUpdatedAt:1688774876,formattedLastUpdatedAt:"Jul 8, 2023",frontMatter:{title:"VirtualBox",summary:"Quick start guide for VirtualBox on Solus"},sidebar:"userSidebar",previous:{title:"Virtualization",permalink:"/docs/category/virtualization"},next:{title:"Web",permalink:"/docs/category/web"}},s={},u=[{value:"Before you start",id:"before-you-start",level:2},{value:"Remove prior installation",id:"remove-prior-installation",level:3},{value:"Update your system",id:"update-your-system",level:3},{value:"Determine which kernel you are using",id:"determine-which-kernel-you-are-using",level:3},{value:"Solus as Host",id:"solus-as-host",level:2},{value:"Solus as Guest",id:"solus-as-guest",level:2},{value:"Extra configuration",id:"extra-configuration",level:2},{value:"USB Controller",id:"usb-controller",level:4},{value:"Shared Folders",id:"shared-folders",level:4},{value:"Troubleshooting",id:"troubleshooting",level:2}],p={toc:u},d="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"virtualbox"},"VirtualBox"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.virtualbox.org/"},"VirtualBox")," is an x86 and x86_64 virtualization software package developed by Oracle."),(0,n.kt)("h2",{id:"before-you-start"},"Before you start"),(0,n.kt)("p",null,"This section applies to new installations for both ",(0,n.kt)("strong",{parentName:"p"},"Host")," and ",(0,n.kt)("strong",{parentName:"p"},"Guest"),"."),(0,n.kt)("h3",{id:"remove-prior-installation"},"Remove prior installation"),(0,n.kt)("p",null,"It is important to uninstall any version of VirtualBox (or VirtualBox Guest Additions) that ",(0,n.kt)("strong",{parentName:"p"},"was not")," installed from the Software Center or there will be conflicts that will prevent the application to work.\nThis can usually be done by executing the following command from a terminal:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo /opt/VirtualBox/uninstall.sh\n")),(0,n.kt)("h3",{id:"update-your-system"},"Update your system"),(0,n.kt)("p",null,"Ensure your system is up-to-date. This is very important because VirtualBox installs some kernel modules and the application will not work if your kernel is outdated."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg upgrade\n")),(0,n.kt)("h3",{id:"determine-which-kernel-you-are-using"},"Determine which kernel you are using"),(0,n.kt)("p",null,"Solus support both a ",(0,n.kt)("inlineCode",{parentName:"p"},"current")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"lts")," kernel. It is important to install the version that corresponds to your kernel."),(0,n.kt)("p",null,"If you aren't sure which kernel you are running, run the following in terminal:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"uname -r\n")),(0,n.kt)("p",null,"You will either have a ",(0,n.kt)("inlineCode",{parentName:"p"},".current")," or ",(0,n.kt)("inlineCode",{parentName:"p"},".lts")," suffix. Examples: ",(0,n.kt)("inlineCode",{parentName:"p"},"5.13.1-187.current")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"4.14.237-175.lts")),(0,n.kt)("h2",{id:"solus-as-host"},"Solus as Host"),(0,n.kt)("p",null,"VirtualBox is available in the Software Center, select the package that matches your kernel."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"virtualbox"),(0,n.kt)("th",{parentName:"tr",align:null},"virtualbox-current"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"VirtualBox Host modules for the ",(0,n.kt)("strong",{parentName:"td"},"linux-lts")," kernel"),(0,n.kt)("td",{parentName:"tr",align:null},"VirtualBox Host modules for the ",(0,n.kt)("strong",{parentName:"td"},"linux-current")," kernel")))),(0,n.kt)("p",null,"You ",(0,n.kt)("strong",{parentName:"p"},"must")," reboot your computer before running VirtualBox for the first time."),(0,n.kt)("h2",{id:"solus-as-guest"},"Solus as Guest"),(0,n.kt)("p",null,"VirtualBox Guest Additions are available in the Software Center, select the package that matches kernel version on the Solus virtual machine."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"virtualbox-guest"),(0,n.kt)("th",{parentName:"tr",align:null},"virtualbox-guest-common"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"VirtualBox Guest modules for the ",(0,n.kt)("strong",{parentName:"td"},"linux-lts")," kernel"),(0,n.kt)("td",{parentName:"tr",align:null},"Install this package if the ",(0,n.kt)("strong",{parentName:"td"},"linux-current")," kernel is used")))),(0,n.kt)("p",null,"You ",(0,n.kt)("strong",{parentName:"p"},"must")," reboot your virtual machine to load the newly installed modules"),(0,n.kt)("h2",{id:"extra-configuration"},"Extra configuration"),(0,n.kt)("h4",{id:"usb-controller"},"USB Controller"),(0,n.kt)("p",null,"If you want to use USB 2.0 or 3.0 in your virtual machine (and your hardware supports it), you have to install the ",(0,n.kt)("a",{parentName:"p",href:"https://www.virtualbox.org/manual/ch01.html#intro-installing"},"extension pack"),"."),(0,n.kt)("p",null,"Note: Access to USB is granted by the user group ",(0,n.kt)("inlineCode",{parentName:"p"},"vboxusers")," on the ",(0,n.kt)("strong",{parentName:"p"},"Host")," operating system. You can add yourself to this group with the following command"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo gpasswd -a $USER vboxusers\n")),(0,n.kt)("h4",{id:"shared-folders"},"Shared Folders"),(0,n.kt)("p",null,"Share folders let you access files from the host system from within a guest machine."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," auto-mounted shared folders are mounted into the ",(0,n.kt)("inlineCode",{parentName:"p"},"/media")," directory, along with the prefix ",(0,n.kt)("inlineCode",{parentName:"p"},"sf_"),". For example, the shared folder ",(0,n.kt)("inlineCode",{parentName:"p"},"myfiles")," would be mounted to ",(0,n.kt)("inlineCode",{parentName:"p"},"/media/sf_myfiles"),"."),(0,n.kt)("p",null,"Access to the shared folders is only granted to the user group ",(0,n.kt)("inlineCode",{parentName:"p"},"vboxsf")," on the ",(0,n.kt)("strong",{parentName:"p"},"Guest")," operating system."),(0,n.kt)("p",null,"Execute these commands to set the permissions and add yourself to the group"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo gpasswd -a $USER vboxsf\n")),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"VBOX Kernel",src:r(4848).Z,width:"500",height:"336"})),(0,n.kt)("p",null,"The Error ",(0,n.kt)("inlineCode",{parentName:"p"},"Kernel driver not installed (rc=-1908)")," may occur if"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The computer was not restarted before launching VirtualBox for the first time"),(0,n.kt)("li",{parentName:"ul"},"The computer is not booted on the latest kernel. Make sure to apply the updates from the Software Center and restart your machine."),(0,n.kt)("li",{parentName:"ul"},"The wrong VirtualBox package was installed. Please check the instructions just above to install the correct package for your kernel."),(0,n.kt)("li",{parentName:"ul"},"VirtualBox was manually installed and it conflicts with the version installed from the Solus Repository.")))}m.isMDXComponent=!0},4848:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/vbox-kernel-85eb11034e02dafe61706f4d967580fe.png"}}]);