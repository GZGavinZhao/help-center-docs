"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[3851],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>g});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),p=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=p(e.components);return n.createElement(c.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return t?n.createElement(g,l(l({ref:a},s),{},{components:t})):n.createElement(g,l({ref:a},s))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3284:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const i={title:"Creating a New Package",summary:"Creating a New Package"},l="Creating a New Package",o={unversionedId:"packaging/creating-a-new-package",id:"packaging/creating-a-new-package",title:"Creating a New Package",description:"This page will take you through the steps required to build a new package on Solus. For this example, we will use the command line utility tree, which is already packaged for Solus, but we will pretend like it's not.",source:"@site/docs/packaging/creating-a-new-package.md",sourceDirName:"packaging",slug:"/packaging/creating-a-new-package",permalink:"/docs/packaging/creating-a-new-package",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/packaging/creating-a-new-package.md",tags:[],version:"current",lastUpdatedAt:1694290073,formattedLastUpdatedAt:"Sep 9, 2023",frontMatter:{title:"Creating a New Package",summary:"Creating a New Package"},sidebar:"packagingSidebar",previous:{title:"Prepare for Packaging",permalink:"/docs/packaging/"},next:{title:"Eopkg Configuration",permalink:"/docs/packaging/eopkg-configuration"}},c={},p=[{value:"Create a new Package Directory",id:"create-a-new-package-directory",level:2},{value:"Create the <code>package.yml</code> File",id:"create-the-packageyml-file",level:2},{value:"Build the Package",id:"build-the-package",level:2}],s={toc:p},u="wrapper";function m(e){let{components:a,...t}=e;return(0,r.kt)(u,(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-a-new-package"},"Creating a New Package"),(0,r.kt)("p",null,"This page will take you through the steps required to build a new package on Solus. For this example, we will use the command line utility ",(0,r.kt)("a",{parentName:"p",href:"https://gitlab.com/OldManProgrammer/unix-tree"},"tree"),", which is already packaged for Solus, but we will pretend like it's not."),(0,r.kt)("h2",{id:"create-a-new-package-directory"},"Create a new Package Directory"),(0,r.kt)("p",null,"From within your build directory, create a new directory for the new package with the package name, and create the required Makefile within that directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'mkdir tree\ncd tree\necho "include ../Makefile.common" > Makefile\n')),(0,r.kt)("h2",{id:"create-the-packageyml-file"},"Create the ",(0,r.kt)("inlineCode",{parentName:"h2"},"package.yml")," File"),(0,r.kt)("p",null,"Create a skeleton ",(0,r.kt)("inlineCode",{parentName:"p"},"package.yml")," file using the ",(0,r.kt)("inlineCode",{parentName:"p"},"yauto.py")," script from ",(0,r.kt)("inlineCode",{parentName:"p"},"common")," You will need a link to the source tarball.",(0,r.kt)("br",{parentName:"p"}),"\n","You can, of course, create your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.yml")," file entirely from scratch, but the script will give you a better starting point."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"../common/Scripts/yauto.py https://gitlab.com/OldManProgrammer/unix-tree/-/archive/2.1.1/unix-tree-2.1.1.tar.gz\n")),(0,r.kt)("p",null,"Consider creating an alias for this script in your ",(0,r.kt)("inlineCode",{parentName:"p"},".bashrc")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'alias fetchYml="$HOME/solus-builds/common/Scripts/yauto.py"\n')),(0,r.kt)("p",null,"Now you should have a ",(0,r.kt)("inlineCode",{parentName:"p"},"package.yml")," file that looks something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name       : unix-tree\nversion    : 2.1.1\nrelease    : 1\nsource     :\n    - https://gitlab.com/OldManProgrammer/unix-tree/-/archive/2.1.1/unix-tree-2.1.1.tar.gz : bcd2a0327ad40592a9c43e09a4d2ef834e6f17aa9a59012a5fb1007950b5eced\nlicense    : GPL-2.0-or-later # CHECK ME\ncomponent  : PLEASE FILL ME IN\nsummary    : PLEASE FILL ME IN\ndescription: |\n    PLEASE FILL ME IN\nbuilddeps  :\nsetup      : |\n    %configure\nbuild      : |\n    %make\ninstall    : |\n    %make_install\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"yauto.py")," script has filled many fields for us, but not all of them will be right, and some of them are blank. Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packaging/package.yml"},"package.yml page")," to see how each field should be used."),(0,r.kt)("p",null,"For this example, we need to fix the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"license")," is correct, so we remove the comment."),(0,r.kt)("li",{parentName:"ul"},"Fill in ",(0,r.kt)("inlineCode",{parentName:"li"},"component"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"summary"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"description"),"."),(0,r.kt)("li",{parentName:"ul"},"Remove ",(0,r.kt)("inlineCode",{parentName:"li"},"builddeps"),". This package has no builddeps beyond the ones already available for every package (the ",(0,r.kt)("inlineCode",{parentName:"li"},"system.devel")," packages)."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"setup")," step is not required."),(0,r.kt)("li",{parentName:"ul"},"We can't use the ",(0,r.kt)("inlineCode",{parentName:"li"},"%make_install")," macro for this package, so the files are installed in there correct locations individually.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name       : tree\nversion    : 2.1.1\nrelease    : 1\nsource     :\n    - https://gitlab.com/OldManProgrammer/unix-tree/-/archive/2.1.1/unix-tree-2.1.1.tar.gz : bcd2a0327ad40592a9c43e09a4d2ef834e6f17aa9a59012a5fb1007950b5eced\nhomepage   : https://gitlab.com/OldManProgrammer/unix-tree\nlicense    : GPL-2.0-or-later\ncomponent  : system.utils\nsummary    : list contents of directories in a tree-like format.\ndescription: |\n    Tree is a recursive directory listing command that produces a depth indented listing of files, which is colorized ala dircolors if the LS_COLORS environment variable is set and output is to tty\nbuild      : |\n    %make\ninstall    : |\n    install -Dm00664 $workdir/doc/tree.1 $installdir/usr/share/man/man1/tree.1\n    install -Dm00755 $workdir/tree $installdir/usr/bin/tree\n")),(0,r.kt)("p",null,"Understanding how to translate source code into a good ",(0,r.kt)("inlineCode",{parentName:"p"},"package.yml")," file is the heart of packaging. If you are stumped, or have questions, ",(0,r.kt)("strong",{parentName:"p"},"ask for help on ",(0,r.kt)("a",{parentName:"strong",href:"/docs/user/contributing/getting-involved#matrix-chat"},"Matrix"),".")),(0,r.kt)("h2",{id:"build-the-package"},"Build the Package"),(0,r.kt)("p",null,"Build the package:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make\n")),(0,r.kt)("p",null,"Once the build completes, your directory should now include the following files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u251c\u2500\u2500 abi_used_libs\n\u251c\u2500\u2500 abi_used_symbols\n\u251c\u2500\u2500 Makefile\n\u251c\u2500\u2500 package.yml\n\u251c\u2500\u2500 pspec_x86_64.xml\n\u2514\u2500\u2500 tree-2.1.1-1-1-x86_64.eopkg\n")),(0,r.kt)("p",null,"All these files ",(0,r.kt)("em",{parentName:"p"},"except")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"*eopkg")," file should be included when you submit the package for review."))}m.isMDXComponent=!0}}]);