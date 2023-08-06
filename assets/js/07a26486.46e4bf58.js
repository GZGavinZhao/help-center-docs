"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[9273],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>m});var o=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=o.createContext({}),i=function(e){var a=o.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=i(e.components);return o.createElement(p.Provider,{value:a},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},d=o.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=i(t),d=n,m=c["".concat(p,".").concat(d)]||c[d]||g[d]||r;return t?o.createElement(m,l(l({ref:a},u),{},{components:t})):o.createElement(m,l({ref:a},u))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,l=new Array(r);l[0]=d;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s[c]="string"==typeof e?e:n,l[1]=s;for(var i=2;i<r;i++)l[i]=t[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1279:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var o=t(7462),n=(t(7294),t(3905));const r={title:"eopkg",summary:"Quick intro to package management with eopkg",lastmod:null},l="eopkg",s={unversionedId:"user/quick-start/package-management/eopkg",id:"user/quick-start/package-management/eopkg",title:"eopkg",description:"Solus uses the eopkg package management system to deliver software to the end-user. It is actively developed by Solus, for Solus. We hope you enjoy the simplicity it offers for day-to-day use. For power users, there's plenty for you too!",source:"@site/docs/user/quick-start/package-management/eopkg.md",sourceDirName:"user/quick-start/package-management",slug:"/user/quick-start/package-management/eopkg",permalink:"/docs/user/quick-start/package-management/eopkg",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/quick-start/package-management/eopkg.md",tags:[],version:"current",lastUpdatedAt:1691356021,formattedLastUpdatedAt:"Aug 6, 2023",frontMatter:{title:"eopkg",summary:"Quick intro to package management with eopkg",lastmod:null},sidebar:"userSidebar",previous:{title:"Software Center",permalink:"/docs/user/quick-start/package-management/"},next:{title:"Contributing",permalink:"/docs/category/contributing"}},p={},i=[{value:"Installing Software",id:"installing-software",level:2},{value:"Reinstalling Software",id:"reinstalling-software",level:2},{value:"Uninstalling Software",id:"uninstalling-software",level:2},{value:"Get Information on Software",id:"get-information-on-software",level:2},{value:"Updating",id:"updating",level:2},{value:"Searching",id:"searching",level:2},{value:"History and Rollback",id:"history-and-rollback",level:2},{value:"History",id:"history",level:3},{value:"Rollback",id:"rollback",level:3},{value:"Repository Management",id:"repository-management",level:2},{value:"Adding a Repository",id:"adding-a-repository",level:3},{value:"Removing a Repository",id:"removing-a-repository",level:3},{value:"Enabling a Repository",id:"enabling-a-repository",level:3},{value:"Disabling a Repository",id:"disabling-a-repository",level:3},{value:"Updating a Repository",id:"updating-a-repository",level:3},{value:"List repositories",id:"list-repositories",level:3}],u={toc:i},c="wrapper";function g(e){let{components:a,...t}=e;return(0,n.kt)(c,(0,o.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"eopkg"},"eopkg"),(0,n.kt)("p",null,"Solus uses the ",(0,n.kt)("inlineCode",{parentName:"p"},"eopkg")," package management system to deliver software to the end-user. It is actively developed by Solus, for Solus. We hope you enjoy the simplicity it offers for day-to-day use. For power users, there's plenty for you too!"),(0,n.kt)("h1",{id:"basics"},"Basics"),(0,n.kt)("h2",{id:"installing-software"},"Installing Software"),(0,n.kt)("p",null,"You can install one or more packages by using:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg install packagename\n")),(0,n.kt)("p",null,"For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg install gnome-documents gnome-music\n")),(0,n.kt)("h2",{id:"reinstalling-software"},"Reinstalling Software"),(0,n.kt)("p",null,"You can reinstall one or more packages by using:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg install --reinstall packagename\n")),(0,n.kt)("p",null,"For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg install --reinstall gnome-documents gnome-music\n")),(0,n.kt)("h2",{id:"uninstalling-software"},"Uninstalling Software"),(0,n.kt)("p",null,"You can uninstall one or more packages by using:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo eopkg remove packagename\n")),(0,n.kt)("p",null,"For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg remove gnome-documents gnome-music\n")),(0,n.kt)("h2",{id:"get-information-on-software"},"Get Information on Software"),(0,n.kt)("p",null,"You can get information on software, such as its description, version, installation size, and more, by using"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg info packagename\n")),(0,n.kt)("p",null,"For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg info gnome-documents\n")),(0,n.kt)("h2",{id:"updating"},"Updating"),(0,n.kt)("p",null,"You can update your system by using:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg upgrade\n")),(0,n.kt)("p",null,"If you want to ",(0,n.kt)("strong",{parentName:"p"},"only")," update a specific piece of software on your system, you can specify is like below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg upgrade firefox\n")),(0,n.kt)("h2",{id:"searching"},"Searching"),(0,n.kt)("p",null,"You can search the software selection Solus provides by using:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg search term\n")),(0,n.kt)("p",null,"For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg search documents\n")),(0,n.kt)("p",null,"Notice that you don't need to search for a specific software name, although you can do that. We search summaries and software names by default."),(0,n.kt)("h1",{id:"advanced"},"Advanced"),(0,n.kt)("h2",{id:"history-and-rollback"},"History and Rollback"),(0,n.kt)("p",null,"Solus provides a history and rollback feature via its package manager, eopkg. This feature allows you to see when your repository was last updated, actions such as installation, removal, and upgrading of software."),(0,n.kt)("p",null,"Our rollback feature allows you to essentially rewind your system's software back to a previous state, assuming you or our repository has the versions in question."),(0,n.kt)("h3",{id:"history"},"History"),(0,n.kt)("p",null,"You can see the history from eopkg by using:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg history\n")),(0,n.kt)("h3",{id:"rollback"},"Rollback"),(0,n.kt)("p",null,"To rollback your system, first use the above history command to check what the transaction / operation number was. Then, we use the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg history -t number\n")),(0,n.kt)("p",null,"The number, in this case, is the operation before the one you want to change. So if the number was ",(0,n.kt)("inlineCode",{parentName:"p"},"100"),", then you would use ",(0,n.kt)("inlineCode",{parentName:"p"},"99"),"."),(0,n.kt)("h2",{id:"repository-management"},"Repository Management"),(0,n.kt)("p",null,"While Solus currently only provides two repositories, stable (shannon) and unstable, our package manager does support actively using multiple repositories on your system. This is useful if you are using a vendor-provided repository."),(0,n.kt)("h3",{id:"adding-a-repository"},"Adding a Repository"),(0,n.kt)("p",null,"You can add a repository by using:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg add-repo Name Url\n")),(0,n.kt)("p",null,"For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg add-repo Example https://example.com/repo/eopkg-index.xml.gz\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," This does not enable the repository."),(0,n.kt)("h3",{id:"removing-a-repository"},"Removing a Repository"),(0,n.kt)("p",null,"You can remove a repository by using:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg remove-repo Name\n")),(0,n.kt)("p",null,"For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg remove-repo Example\n")),(0,n.kt)("h3",{id:"enabling-a-repository"},"Enabling a Repository"),(0,n.kt)("p",null,"You can enable a repository for usage, by using:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg enable-repo Name\n")),(0,n.kt)("p",null,"For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg enable-repo Example\n")),(0,n.kt)("h3",{id:"disabling-a-repository"},"Disabling a Repository"),(0,n.kt)("p",null,"You can disable a repository by using:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg disable-repo Name\n")),(0,n.kt)("p",null,"For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg disable-repo Example\n")),(0,n.kt)("h3",{id:"updating-a-repository"},"Updating a Repository"),(0,n.kt)("p",null,"You can update the index of a repository by using:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg update-repo Name\n")),(0,n.kt)("p",null,"For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg update-repo Example\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," You can update all repository by ",(0,n.kt)("strong",{parentName:"p"},"not")," providing a name."),(0,n.kt)("h3",{id:"list-repositories"},"List repositories"),(0,n.kt)("p",null,"You can list all the repositories added on your system by using:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg list-repo\n")))}g.isMDXComponent=!0}}]);