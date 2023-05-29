"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[9677],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(4137));const r={title:"Java",summary:"A quick guide to Java development on Solus"},i="Java",s={unversionedId:"user/software/development/java",id:"user/software/development/java",title:"Java",description:"This article covers obtaining open source Java (otherwise known as OpenJDK). In this article, two abbreviations will be used to refer to components of the Java software suite:",source:"@site/docs/user/software/development/java.md",sourceDirName:"user/software/development",slug:"/user/software/development/java",permalink:"/docs/user/software/development/java",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/software/development/java.md",tags:[],version:"current",lastUpdatedAt:1684791895,formattedLastUpdatedAt:"May 22, 2023",frontMatter:{title:"Java",summary:"A quick guide to Java development on Solus"},sidebar:"userSidebar",previous:{title:"Android",permalink:"/docs/user/software/development/android"},next:{title:"PostgreSQL",permalink:"/docs/user/software/development/postgresql"}},l={},p=[{value:"Installing OpenJDK",id:"installing-openjdk",level:2},{value:"OpenJDK 11",id:"openjdk-11",level:3},{value:"OpenJDK 8",id:"openjdk-8",level:3},{value:"Running Java Applications",id:"running-java-applications",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"java"},"Java"),(0,o.kt)("p",null,"This article covers obtaining open source Java (otherwise known as OpenJDK). In this article, two abbreviations will be used to refer to components of the Java software suite:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"JRE (Java Runtime Environment)"),(0,o.kt)("li",{parentName:"ul"},"JDK (Java Development Kit)")),(0,o.kt)("h2",{id:"installing-openjdk"},"Installing OpenJDK"),(0,o.kt)("p",null,"Solus currently offers two Java versions in the repository, and these versions can be installed alongside one another. For ease of maintenance, Solus only includes LTS versions of OpenJDK. Those who require the absolute newest version of the JDK, or other non-LTS versions, should look to other methods of installation (such as ",(0,o.kt)("a",{parentName:"p",href:"https://sdkman.io/"},"sdkman"),")."),(0,o.kt)("h3",{id:"openjdk-11"},"OpenJDK 11"),(0,o.kt)("p",null,"OpenJDK 11 is included in the repository as ",(0,o.kt)("inlineCode",{parentName:"p"},"openjdk-11"),". It includes the JRE, the JDK, and OpenJFX, all in one package. The majority of Java packages in Solus currently use OpenJDK 11, and this is the recommended version if you need Java but aren't sure which version you should install. If the software you use doesn't work with OpenJDK 11, you should use OpenJDK 8 instead."),(0,o.kt)("p",null,"Once ",(0,o.kt)("inlineCode",{parentName:"p"},"openjdk-11")," is installed, you'll be able to find all of its components at ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib64/openjdk-11"),". This is the path you should set ",(0,o.kt)("inlineCode",{parentName:"p"},"JAVA_HOME")," to for use with Java software not packaged by Solus if you want them to use JDK 11."),(0,o.kt)("h3",{id:"openjdk-8"},"OpenJDK 8"),(0,o.kt)("p",null,"OpenJDK 8 is included in the repository as ",(0,o.kt)("inlineCode",{parentName:"p"},"openjdk-8")," for the JRE and JDK, and ",(0,o.kt)("inlineCode",{parentName:"p"},"openjfx-8")," for the implementation of JavaFX. Once it's installed, its components can be found at ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib64/openjdk-8"),". This is the path you should set ",(0,o.kt)("inlineCode",{parentName:"p"},"JAVA_HOME")," to for use with Java software not packaged by Solus if you want them to use JDK 8."),(0,o.kt)("h2",{id:"running-java-applications"},"Running Java Applications"),(0,o.kt)("p",null,"Once a Java version has been installed, you might notice that running jar files in the terminal via ",(0,o.kt)("inlineCode",{parentName:"p"},"java -jar foo.jar")," doesn't work. This is because Solus uses a stateless configuration for its Java packages so as to avoid conflicts between different installed versions, and thus there is no ",(0,o.kt)("inlineCode",{parentName:"p"},"java")," command on the ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," by default. To amend this, there are multiple possible solutions, each of which should be used for certain scenarios."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a .desktop file and specify ",(0,o.kt)("inlineCode",{parentName:"li"},"env JAVA_HOME=/path/to/jdk")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"Exec")," (best for GUIs)"),(0,o.kt)("li",{parentName:"ul"},"Create a script that sets ",(0,o.kt)("inlineCode",{parentName:"li"},"JAVA_HOME")," before running the application"),(0,o.kt)("li",{parentName:"ul"},"Symlink the ",(0,o.kt)("inlineCode",{parentName:"li"},"java")," executable from within ",(0,o.kt)("inlineCode",{parentName:"li"},"/path/to/jdk/bin")," into ",(0,o.kt)("inlineCode",{parentName:"li"},"/usr/bin")),(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"/path/to/jdk/bin")," to your PATH")))}c.isMDXComponent=!0}}]);