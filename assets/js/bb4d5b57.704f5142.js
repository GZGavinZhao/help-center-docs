"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[5139],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=o.createContext({}),s=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(d.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,f=p["".concat(d,".").concat(m)]||p[m]||c[m]||i;return t?o.createElement(f,a(a({ref:n},u),{},{components:t})):o.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1251:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=t(7462),r=(t(7294),t(3905));const i={title:"Android",summary:"A quick guide to getting set up for Android development on Solus"},a="Building Android\u2122 on Solus",l={unversionedId:"user/software/development/android",id:"user/software/development/android",title:"Android",description:"This article covers building the Android Open Source Project (AOSP) on Solus, the instructions can also be tweaked to also install forks of Android such as LineageOS.",source:"@site/docs/user/software/development/android.md",sourceDirName:"user/software/development",slug:"/user/software/development/android",permalink:"/docs/user/software/development/android",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/software/development/android.md",tags:[],version:"current",lastUpdatedAt:1691356021,formattedLastUpdatedAt:"Aug 6, 2023",frontMatter:{title:"Android",summary:"A quick guide to getting set up for Android development on Solus"},sidebar:"userSidebar",previous:{title:"Development",permalink:"/docs/user/software/development/"},next:{title:"Containers",permalink:"/docs/user/software/development/containers"}},d={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installing Build Dependencies",id:"installing-build-dependencies",level:3},{value:"Installing the <code>repo</code> Tool",id:"installing-the-repo-tool",level:3},{value:"Downloading the Source Code",id:"downloading-the-source-code",level:2},{value:"Building Android",id:"building-android",level:2},{value:"More Information",id:"more-information",level:2}],u={toc:s},p="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"building-android-on-solus"},"Building Android\u2122 on Solus"),(0,r.kt)("p",null,"This article covers building the ",(0,r.kt)("a",{parentName:"p",href:"https://www.android.com/"},"Android Open Source Project")," (AOSP) on Solus, the instructions can also be tweaked to also install forks of Android such as ",(0,r.kt)("a",{parentName:"p",href:"https://lineageos.org/"},"LineageOS"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Note that Solus is not an officially supported Linux distribution for building Android.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before we can start we need to setup our build environment ready for building Android. You'll need a minimum of ",(0,r.kt)("inlineCode",{parentName:"p"},"100GB")," of free space to download and compile Android."),(0,r.kt)("h3",{id:"installing-build-dependencies"},"Installing Build Dependencies"),(0,r.kt)("p",null,"Android 7 (Nougat) and Android 8 (Oreo) require OpenJDK 8. Android 5 (Lollipop) and Android 6 (Marshmallow) require OpenJDK 7 which is not currently in the repository."),(0,r.kt)("p",null,"To install OpenJDK 8 run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg it openjdk-8-devel\n")),(0,r.kt)("p",null,"Next we need to install packages from the ",(0,r.kt)("inlineCode",{parentName:"p"},"system.devel")," component, these provide common build tools for general software development."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg it -c system.devel\n")),(0,r.kt)("p",null,"Now we'll need to install the rest of the required build dependencies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg it curl-devel git gnupg gperf libgcc-32bit libxslt-devel lzop ncurses-32bit-devel ncurses-devel readline-32bit-devel rsync schedtool sdl1-devel squashfs-tools unzip vboot-utils vim wxwidgets-devel zip zlib-32bit-devel\n")),(0,r.kt)("p",null,"Not a build dependency, but you'll definitely want ADB and Fastboot capabilities if you're developing for AOSP."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg it android-tools\n")),(0,r.kt)("h3",{id:"installing-the-repo-tool"},"Installing the ",(0,r.kt)("inlineCode",{parentName:"h3"},"repo")," Tool"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"repo")," is a tool from Google to manage multiple git repositories. We'll need to install it to download the Android source code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir ~/bin\ncurl https://storage.googleapis.com/git-repo-downloads/repo > ~/bin/repo\nchmod a+x ~/bin/repo\n")),(0,r.kt)("p",null,"We now need to export ",(0,r.kt)("inlineCode",{parentName:"p"},"~/bin")," to our PATH so we can run ",(0,r.kt)("inlineCode",{parentName:"p"},"repo")," from any directory. Paste the following into your ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'if [ -d "$HOME/bin" ] ; then\n    PATH="$HOME/bin:$PATH"\nfi\n')),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"source ~/.bashrc")," for the changes to apply."),(0,r.kt)("p",null,"Now our build environment is prepared, we can download the source code."),(0,r.kt)("h2",{id:"downloading-the-source-code"},"Downloading the Source Code"),(0,r.kt)("p",null,"First we need to create a directory where we want to download Android."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir ~/android && cd ~/android\n")),(0,r.kt)("p",null,"Next we'll need to initialize the repository with what version of Android you want to build. You can find a list of versions you can checkout ",(0,r.kt)("a",{parentName:"p",href:"https://source.android.com/source/build-numbers#source-code-tags-and-builds"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"repo init -u https://android.googlesource.com/platform/manifest -b android-8.0.0_r34\n")),(0,r.kt)("p",null,"Now we can finally download the source code, this will take a long time and depends on the speed of your internet connection. The ",(0,r.kt)("inlineCode",{parentName:"p"},"-j")," option downloads as many repos simultaneously as you have processor cores, and, the ",(0,r.kt)("inlineCode",{parentName:"p"},"-c")," option only downloads the current branch."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"repo sync -j `nproc` -c\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"If you have a slow or unreliable internet connection using ",(0,r.kt)("inlineCode",{parentName:"em"},"j 1")," may be more reliable.")),(0,r.kt)("h2",{id:"building-android"},"Building Android"),(0,r.kt)("p",null,"Once the source has finished downloading we can build Android. The following commands will not build android for any specific device. For building Android specifically for your device you'll need to find additional instructions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"source build/envsetup.sh\nlunch full-eng\nmake -j`nproc`\n")),(0,r.kt)("h2",{id:"more-information"},"More Information"),(0,r.kt)("p",null,"Google has provided build instructions for building AOSP on Ubuntu and MacOS, you may find additional useful information there, not stated here."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://source.android.com/docs/setup/start/requirements"},"https://source.android.com/docs/setup/start/requirements")),(0,r.kt)("p",null,"If your device is supported by LineageOS you can choose your device and follow the device specific build instructions at the LineageOS Wiki."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://wiki.lineageos.org/devices/"},"https://wiki.lineageos.org/devices/")))}c.isMDXComponent=!0}}]);