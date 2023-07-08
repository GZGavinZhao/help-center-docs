"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[1242],{3905:(e,t,s)=>{s.d(t,{Zo:()=>p,kt:()=>k});var a=s(7294);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function l(e,t){if(null==e)return{};var s,a,n=function(e,t){if(null==e)return{};var s,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)s=r[a],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)s=r[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var s=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(s),h=n,k=d["".concat(i,".").concat(h)]||d[h]||c[h]||r;return s?a.createElement(k,o(o({ref:t},p),{},{components:s})):a.createElement(k,o({ref:t},p))}));function k(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=s.length,o=new Array(r);o[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<r;u++)o[u]=s[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,s)}h.displayName="MDXCreateElement"},1098:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=s(7462),n=(s(7294),s(3905));const r={title:"KDE Wallet",summary:"A quick introduction to using KWallet on Solus"},o="KDE Wallet and SSH keys",l={unversionedId:"user/software/utilities/kwallet",id:"user/software/utilities/kwallet",title:"KDE Wallet",description:"In KDE Plasma, the KDE Wallet is responsible for securely storing and supplying user credentials to the various KDE applications that request them.",source:"@site/docs/user/software/utilities/kwallet.md",sourceDirName:"user/software/utilities",slug:"/user/software/utilities/kwallet",permalink:"/docs/user/software/utilities/kwallet",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/software/utilities/kwallet.md",tags:[],version:"current",lastUpdatedAt:1688774876,formattedLastUpdatedAt:"Jul 8, 2023",frontMatter:{title:"KDE Wallet",summary:"A quick introduction to using KWallet on Solus"},sidebar:"userSidebar",previous:{title:"KSysGuard",permalink:"/docs/user/software/utilities/ksysguard"},next:{title:"Virtualization",permalink:"/docs/category/virtualization"}},i={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"The <code>SSH_ASKPASS</code> environment variable",id:"the-ssh_askpass-environment-variable",level:2},{value:"Create <code>~/.config/autostart/ssh-add.desktop</code>",id:"create-configautostartssh-adddesktop",level:2},{value:"Example",id:"example",level:3},{value:"Set correct permissions",id:"set-correct-permissions",level:3},{value:"Re-log to test your changes",id:"re-log-to-test-your-changes",level:2},{value:"Unlock SSH key passphrases automatically on login",id:"unlock-ssh-key-passphrases-automatically-on-login",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...s}=e;return(0,n.kt)(d,(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"kde-wallet-and-ssh-keys"},"KDE Wallet and SSH keys"),(0,n.kt)("p",null,"In KDE Plasma, the KDE Wallet is responsible for securely storing and supplying user credentials to the various KDE applications that request them."),(0,n.kt)("p",null,"Out of the box, the Solus KDE Plasma Desktop is already configured to use the KDE Wallet PAM module, which unlocks the KDE Wallet on session login."),(0,n.kt)("p",null,"However, additional configuration is needed to make the KDE Wallet manage SSH key passphrases."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"This document assumes that you are familiar with utilising SSH key passphrases."),(0,n.kt)("p",null,"For more information, see ",(0,n.kt)("a",{parentName:"p",href:"https://help.github.com/en/articles/working-with-ssh-key-passphrases"},"working with SSH key passphrases")),(0,n.kt)("h2",{id:"the-ssh_askpass-environment-variable"},"The ",(0,n.kt)("inlineCode",{parentName:"h2"},"SSH_ASKPASS")," environment variable"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"SSH_ASKPASS")," environment variable tells the SSH subsystem which application to use when prompting the user for SSH key passphrases."),(0,n.kt)("p",null,"On the Solus KDE Plasma Desktop spin, ",(0,n.kt)("inlineCode",{parentName:"p"},"ksshaskpass")," is installed out of the box and ",(0,n.kt)("inlineCode",{parentName:"p"},"SSH_ASKPASS")," is set to ",(0,n.kt)("inlineCode",{parentName:"p"},"ksshaskpass")," in the file ",(0,n.kt)("inlineCode",{parentName:"p"},"/usr/share/xdg/plasma-workspace/env/50-solus-defaults.sh")," by default."),(0,n.kt)("h2",{id:"create-configautostartssh-adddesktop"},"Create ",(0,n.kt)("inlineCode",{parentName:"h2"},"~/.config/autostart/ssh-add.desktop")),(0,n.kt)("p",null,"The contents of ",(0,n.kt)("inlineCode",{parentName:"p"},"~/.config/autostart/ssh-add.desktop")," should reflect the SSH keys you want to manage using the KDE Wallet."),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("p",null,"Below is an example of the contents of ",(0,n.kt)("inlineCode",{parentName:"p"},"~/.config/autostart/ssh-add.desktop"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[Desktop Entry]\nExec=ssh-add -q\nName=ssh-add\nType=Application\n")),(0,n.kt)("p",null,"Tip: The above ssh-add.desktop file will only add the default key ",(0,n.kt)("inlineCode",{parentName:"p"},"~/.ssh/id_rsa"),". Assuming you have different keys named key1, key2 etc you need to change the above desktop file to"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[Desktop Entry]\nExec=ssh-add -q ~/.ssh/key1 ~/.ssh/key2 ~/.ssh/key3\nName=ssh-add\nType=Application\n")),(0,n.kt)("h3",{id:"set-correct-permissions"},"Set correct permissions"),(0,n.kt)("p",null,"After you created your file inside the autostart folder you have to give it the correct permissions"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"chmod 700 ~/.config/autostart/ssh-add.desktop\n")),(0,n.kt)("p",null,"with this the file should appear inside the autostart settings"),(0,n.kt)("h2",{id:"re-log-to-test-your-changes"},"Re-log to test your changes"),(0,n.kt)("p",null,"After logging out and back in, you should now be prompted by the KDE Wallet to input your SSH key passphrases."),(0,n.kt)("h2",{id:"unlock-ssh-key-passphrases-automatically-on-login"},"Unlock SSH key passphrases automatically on login"),(0,n.kt)("p",null,"KDE Wallet supports automatically unlocking your SSH key passphrases on login."),(0,n.kt)("p",null,"For this to work, your KDE Wallet password needs to be identical to your login password."),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"ssh key doesn't get triggered, you can force this manually by running this command."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"SSH_ASKPASS=/usr/bin/ksshaskpass ssh-add < /dev/null\n")))}c.isMDXComponent=!0}}]);