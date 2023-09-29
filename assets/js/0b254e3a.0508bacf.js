"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[6726],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>d});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),p=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,d=u["".concat(l,".").concat(m)]||u[m]||g[m]||o;return t?n.createElement(d,r(r({ref:a},c),{},{components:t})):n.createElement(d,r({ref:a},c))}));function d(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=t[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},436:(e,a,t)=>{t.d(a,{ZP:()=>s});var n=t(7462),i=(t(7294),t(3905));const o={toc:[]},r="wrapper";function s(e){let{components:a,...t}=e;return(0,i.kt)(r,(0,n.Z)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"}," --cleanup=scissors")," flag is necessary. By default, git treats lines starting with # as a comment, and removes them."),(0,i.kt)("p",{parentName:"admonition"},"If you would like to always use this flag without having to type it manually you can do so in one of two ways."),(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set an alias in ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-config#Documentation/git-config.txt-alias"},(0,i.kt)("inlineCode",{parentName:"a"},"~/.gitconfig"))," such as"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cs = commit --cleanup=scissors\n")),(0,i.kt)("p",{parentName:"li"},"You can then use ",(0,i.kt)("inlineCode",{parentName:"p"},"git cs")," which will do the same thing as ",(0,i.kt)("inlineCode",{parentName:"p"},"git commit --cleanup=scissors"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set your git global config to always use the flag. To do so run"))),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git config --global commit.cleanup scissors\n"))))}s.isMDXComponent=!0},2753:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=t(7462),i=(t(7294),t(3905)),o=t(436);const r={title:"Updating an Existing Package",summary:"Updating an Existing Package",sidebar_position:4},s="Updating an Existing Package",l={unversionedId:"packaging/updating-an-existing-package",id:"packaging/updating-an-existing-package",title:"Updating an Existing Package",description:"This article will go over updating a package that is already in the Solus package repositories.",source:"@site/docs/packaging/updating-an-existing-package.md",sourceDirName:"packaging",slug:"/packaging/updating-an-existing-package",permalink:"/docs/packaging/updating-an-existing-package",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/packaging/updating-an-existing-package.md",tags:[],version:"current",lastUpdatedAt:1696024232,formattedLastUpdatedAt:"Sep 29, 2023",sidebarPosition:4,frontMatter:{title:"Updating an Existing Package",summary:"Updating an Existing Package",sidebar_position:4},sidebar:"packagingSidebar",previous:{title:"Creating a New Package",permalink:"/docs/packaging/creating-a-new-package"},next:{title:"Testing a Package",permalink:"/docs/packaging/testing-a-package"}},p={},c=[{value:"Update your clone of the packages Repository",id:"update-your-clone-of-the-packages-repository",level:3},{value:"Switch to a New Git Branch",id:"switch-to-a-new-git-branch",level:2},{value:"Bumping a Package",id:"bumping-a-package",level:2},{value:"Updating a Package",id:"updating-a-package",level:2},{value:"The <code>MAINTAINERS.md</code> File",id:"the-maintainersmd-file",level:2},{value:"Build the package",id:"build-the-package",level:2},{value:"Commit Your Changes",id:"commit-your-changes",level:2},{value:"Commit message format for updated / bumped packages",id:"commit-message-format-for-updated--bumped-packages",level:3}],u={toc:c},g="wrapper";function m(e){let{components:a,...t}=e;return(0,i.kt)(g,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"updating-an-existing-package"},"Updating an Existing Package"),(0,i.kt)("p",null,"This article will go over updating a package that is already in the Solus package repositories."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Please ",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/getsolus/packages/issues?q=label%3A%22Package+Request%22"},"look to see if an issue has been filed")," for the software update"),".\nIf there is an existing request, please add a link to it in your pull request. Ex:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"This PR resolves software update request https://github.com/getsolus/packages/issues/123\n"))),(0,i.kt)("h3",{id:"update-your-clone-of-the-packages-repository"},"Update your clone of the packages Repository"),(0,i.kt)("p",null,"If you do not have a local clone set up yet, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/packaging/prepare-for-packaging#fork-the-getsoluspackages-repository"},"Prepare for Packaging")),(0,i.kt)("p",null,"Bring your local clone up to date. Run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/solus-builds/packages/n/nano\ngit switch main\ngit pull\n")),(0,i.kt)("h2",{id:"switch-to-a-new-git-branch"},"Switch to a New Git Branch"),(0,i.kt)("p",null,"It's always a good idea to switch to a new git branch before beginning packaging work. This will allow you to more easily separate your work from any new changes made to the package repository, which will allow you to more easily rebase any changes if needed.\nExample:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git switch -c update_nano\n")),(0,i.kt)("h2",{id:"bumping-a-package"},"Bumping a Package"),(0,i.kt)("p",null,"Bumping a package is typically done when rebuilding against a changed dependency, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"imagemagick")," needing to be rebuilt if ",(0,i.kt)("inlineCode",{parentName:"p"},"libwebp")," changes. It is also done if changes are being made to the package, such as adding new dependencies or other modifications which aren't a version update."),(0,i.kt)("p",null,"This can be achieved by doing ",(0,i.kt)("inlineCode",{parentName:"p"},"go-task bump"),", which increments the release number by 1."),(0,i.kt)("h2",{id:"updating-a-package"},"Updating a Package"),(0,i.kt)("p",null,"To update the package to a newer version, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"go-task update")," command."),(0,i.kt)("p",null,"This command takes two arguments, in the following order:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Version"),(0,i.kt)("li",{parentName:"ol"},"Source URL")),(0,i.kt)("p",null,"If you're updating the package to a newer version, naturally you would change both the version and source. If you're merely changing the source URL for the existing version, just pass the same version number and the new source URL."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go-task update -- 1.0 https://example.com/example-1.0.tar.xz\n")),(0,i.kt)("h2",{id:"the-maintainersmd-file"},"The ",(0,i.kt)("inlineCode",{parentName:"h2"},"MAINTAINERS.md")," File"),(0,i.kt)("p",null,"There must be a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"MAINTAINERS.md")," using the template in ",(0,i.kt)("a",{parentName:"p",href:"/docs/packaging/procedures/maintainership"},"Maintainership"),". Add it if it does not already exist. It should name the current maintainer(s) of the package."),(0,i.kt)("h2",{id:"build-the-package"},"Build the package"),(0,i.kt)("p",null,"After bumping or updating the package, build it by running ",(0,i.kt)("inlineCode",{parentName:"p"},"go-task"),".\nOnce your package has built successfully, you will need to ",(0,i.kt)("a",{parentName:"p",href:"testing-a-package"},"test it"),"."),(0,i.kt)("h2",{id:"commit-your-changes"},"Commit Your Changes"),(0,i.kt)("p",null,"Check the ",(0,i.kt)("a",{parentName:"p",href:"git-basics#check-the-changes-in-your-files"},"changes in your files"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/packaging/git-basics"},"Add / remove files as necessary to the commit"),". Then, ",(0,i.kt)("strong",{parentName:"p"},"check your branch"),"."),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"git status"),". Make sure all the files you changed are staged, and that there are no untracked files. When all is well, run ",(0,i.kt)("inlineCode",{parentName:"p"},"git commit --cleanup=scissors"),"."),(0,i.kt)(o.ZP,{mdxType:"GitCommitCleanup"}),(0,i.kt)("h3",{id:"commit-message-format-for-updated--bumped-packages"},"Commit message format for updated / bumped packages"),(0,i.kt)("p",null,"There should be a meaningful summary line (which starts with the package name), a blank line, and then the rest of the commit message."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bullet point lists should start with a dash."),(0,i.kt)("li",{parentName:"ul"},"Include a changelog with a brief list of updates from the upstream release notes, with no links."),(0,i.kt)("li",{parentName:"ul"},"There may also be a section for Solus specific work (e.g. rebuild against x / rework to remove dependency)."),(0,i.kt)("li",{parentName:"ul"},"Optional: A link to the upstream release notes page."),(0,i.kt)("li",{parentName:"ul"},"Include your Test Plan.")),(0,i.kt)("p",null,"Here is an example in our standard format (make sure to check the box in the checklist):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"foo: Update to 1.2.3\n\n## Summary\n\nBugfixes:\n\n- Fixed a crash\n- Something else\n\nEnhancements:\n\n- Implemented a feature\n- Error when encountering a thing\n\n**Full release notes:**\n- [1.2.3](https://github.com/foo/foo/releases/tag/v1.2.3)\n\n## Test Plan\n\n- Launched the application\n- Exercised the UI\n- Exercised some feature\n\n## Checklist\n\n- [] Package was built and tested against unstable\n")),(0,i.kt)("p",null,"For more information on suitable commit messages, please check the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/solus-project/tooling-central/blob/master/README.rst#using-git"},"tooling central documentation"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you want to link this pull request to an existing issue, simply mention it in your commit message (use the full URL): ",(0,i.kt)("inlineCode",{parentName:"li"},"The inclusion of <somepackage> fixes https://github.com/getsolus/packages/issues/123")),(0,i.kt)("li",{parentName:"ul"},"If you need a change to depend on another change, mention it in the commit message too (use the full URL): ",(0,i.kt)("inlineCode",{parentName:"li"},"Depends on https://github.com/getsolus/packages/issues/234"))),(0,i.kt)("p",null,"Next, you'll ",(0,i.kt)("a",{parentName:"p",href:"/docs/packaging/submitting-a-pull-request"},"submit a pull request for review"),"."))}m.isMDXComponent=!0}}]);