"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[2413],{4137:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(o),h=a,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||r;return o?n.createElement(m,s(s({ref:t},p),{},{components:o})):n.createElement(m,s({ref:t},p))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<r;u++)s[u]=o[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},5258:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=o(7462),a=(o(7294),o(4137));const r={title:"Troubleshooting",summary:"Basic troubleshooting for some of the most common Solus problems."},s="Troubleshooting Common Issues",i={unversionedId:"user/troubleshooting/index",id:"user/troubleshooting/index",title:"Troubleshooting",description:"This guide provides some basic troubleshooting instructions for when you have an issue in Solus. Before reporting bugs, it is important to validate your Solus installation doesn't suffer from missing files or disk corruption. Also ensuring the system is fully up to date as the bug may have already been fixed.",source:"@site/docs/user/troubleshooting/index.md",sourceDirName:"user/troubleshooting",slug:"/user/troubleshooting/",permalink:"/docs/user/troubleshooting/",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/troubleshooting/index.md",tags:[],version:"current",lastUpdatedAt:1684791895,formattedLastUpdatedAt:"May 22, 2023",frontMatter:{title:"Troubleshooting",summary:"Basic troubleshooting for some of the most common Solus problems."},sidebar:"userSidebar",previous:{title:"Open Broadcaster Software (OBS)",permalink:"/docs/user/software/web/obs"},next:{title:"Boot Rescue",permalink:"/docs/user/troubleshooting/boot-rescue"}},l={},u=[{value:"Issues with Software Center or eopkg",id:"issues-with-software-center-or-eopkg",level:2},{value:"Can&#39;t install updates",id:"cant-install-updates",level:3},{value:"eopkg check shows broken packages",id:"eopkg-check-shows-broken-packages",level:3},{value:"Updated system and having issues",id:"updated-system-and-having-issues",level:2},{value:"Boot into previous kernel",id:"boot-into-previous-kernel",level:3},{value:"Reverting updates",id:"reverting-updates",level:3},{value:"Boot Failure",id:"boot-failure",level:2},{value:"Display manager won&#39;t start",id:"display-manager-wont-start",level:3},{value:"No Solus boot loader",id:"no-solus-boot-loader",level:3},{value:"Long boot time",id:"long-boot-time",level:2},{value:"Timeout on partition mount (90s)",id:"timeout-on-partition-mount-90s",level:3}],p={toc:u},d="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"troubleshooting-common-issues"},"Troubleshooting Common Issues"),(0,a.kt)("p",null,"This guide provides some basic troubleshooting instructions for when you have an issue in Solus. Before reporting bugs, it is important to validate your Solus installation doesn't suffer from missing files or disk corruption. Also ensuring the system is fully up to date as the bug may have already been fixed."),(0,a.kt)("p",null,"First of all performa a full system update ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo eopkg up")," (or via the Software Center). Then validate that packages are installed correctly and aren't missing files: (run this once, it will take some time and may not show much output)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg check | grep Broken | awk '{print $4}' | xargs sudo eopkg it --reinstall\n")),(0,a.kt)("p",null,"Then reboot the system to make sure the issue still persists on a clean system."),(0,a.kt)("h2",{id:"issues-with-software-center-or-eopkg"},"Issues with Software Center or eopkg"),(0,a.kt)("h3",{id:"cant-install-updates"},"Can't install updates"),(0,a.kt)("p",null,"If eopkg is interrupted, the database may become corrupted. When updating you will see a message similar to:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"30973, 'BDB0087 DB_RUNRECOVERY: Fatal error, run database recovery - BDB0061 PANIC: Invalid argument'")),(0,a.kt)("p",null,"To run database recovery, run ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo eopkg rdb")," in the terminal and then updates should function correctly."),(0,a.kt)("h3",{id:"eopkg-check-shows-broken-packages"},"eopkg check shows broken packages"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"eopkg check")," checks the sha256sums of files on disk versus what was originally installed by the original .eopkg file. In some cases (for example .pyc files), these files will be modified in the normal operation of Solus. If after reinstalling a package it remains broken, then it's likely nothing to worry about (there are no exceptions made in ",(0,a.kt)("inlineCode",{parentName:"p"},"eopkg check")," for files that are expected to change from use). When reinstalling broken packages, (per above) it only needs to be run once."),(0,a.kt)("h2",{id:"updated-system-and-having-issues"},"Updated system and having issues"),(0,a.kt)("h3",{id:"boot-into-previous-kernel"},"Boot into previous kernel"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"clr-boot-manager")," by default retains the latest installed kernel, plus the currently running kernel. This means that when you receive a kernel update, there are two kernels to boot into. Sometimes there are regressions that occur in the kernel, so you are able to boot into the previous kernel if the update has caused any hardware issues (for example failing to suspend when it worked previously). When booting via EFI, the boot menu can be shown by hitting space (repeatedly) during boot."),(0,a.kt)("h3",{id:"reverting-updates"},"Reverting updates"),(0,a.kt)("p",null,"If booting into the previous kernel doesn't solve the issue, there may be an issue with the package updates. It is possible to ",(0,a.kt)("a",{parentName:"p",href:"/docs/user/package-management/history-and-rollback"},"revert the updates")," (this would also confirm that the issue is in the selected updates)."),(0,a.kt)("h2",{id:"boot-failure"},"Boot Failure"),(0,a.kt)("p",null,"If Solus partially boots, you can generally get to a TTY using ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl+Alt+F2")," to login and be able to run commands just like using a terminal. This enables you to run some commands to identify or resolve the issue."),(0,a.kt)("h3",{id:"display-manager-wont-start"},"Display manager won't start"),(0,a.kt)("p",null,"A common cause of not being able to boot is due to installing the nvidia drivers, but not booting into the latest kernel (the only kernel which has the drivers installed). Also ensure you have the correct driver version installed for your kernel. You can check if you have booted into the latest kernel by comparing the installed package with the booted kernel (instructions for both kernels)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"eopkg info linux-lts | head -n2; uname -a\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"eopkg info linux-current | head -n2; uname -a\n")),(0,a.kt)("p",null,"If the kernel version and release don't match from lines 2 and 3 of the output, then you aren't booting into the latest kernel and this is the likely cause of X not loading (particularly if you just installed the drivers). A couple of common reasons are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"On a grub machine, a common cause for not booting the latest kernel is due to Solus not being the boot loader on the MBR. Make sure you are booting via the Solus boot loader (if possible), or update grub on the distro that own the boot loader, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/user/troubleshooting/installation#legacybios-installation"},"Legacy/BIOS installation"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Another possibility is that the ",(0,a.kt)("inlineCode",{parentName:"p"},"ESP")," has run out of space so the kernel cannot be copied over to it. You can debug why this isn't happening via ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo CBM_DEBUG=1 clr-boot-manager update"),". This will output all information on the process, where it may be failing, or that it is working correctly."))),(0,a.kt)("p",null,"If these two steps fail, you can't revert the installation of the drivers via ",(0,a.kt)("a",{parentName:"p",href:"/docs/user/package-management/history-and-rollback"},"History and Rollback")),(0,a.kt)("h3",{id:"no-solus-boot-loader"},"No Solus boot loader"),(0,a.kt)("p",null,"If the Solus boot loader is not functioning (this has been known to be broken by the odd update of a certain OS), the boot loader can be recreated via ",(0,a.kt)("a",{parentName:"p",href:"/docs/user/troubleshooting/boot-rescue"},"Boot Rescue")),(0,a.kt)("h2",{id:"long-boot-time"},"Long boot time"),(0,a.kt)("p",null,"There are a number of factors that can contribute to a long boot time. The boot up messages can be viewed to look for any timeouts by looking at the timestamped journal."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo journalctl -b\n")),(0,a.kt)("p",null,"Notable commands to check the boot time are: ",(0,a.kt)("inlineCode",{parentName:"p"},"systemd-analyze")," (note that the firmware time is prior to Solus boot, so outside of our control) and ",(0,a.kt)("inlineCode",{parentName:"p"},"systemd-analyze critical-chain"),"."),(0,a.kt)("h3",{id:"timeout-on-partition-mount-90s"},"Timeout on partition mount (90s)"),(0,a.kt)("p",null,"If information about a device changes (UUID or mount path ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev/sda"),"), this can cause systemd to time out for 90 seconds creating a long boot process. Most frequently this happens with the swap file which can be shared across distros. Most of the devices mounted on boot will appear in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/fstab")," or be a parameter in a file where configuring resume ",(0,a.kt)("inlineCode",{parentName:"p"},"cat /etc/kernel/cmdline.d/*"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"cat /proc/cmdline")," will show what parameters the kernel has booted with."),(0,a.kt)("p",null,"If the devices don't match up with what's listed in ",(0,a.kt)("inlineCode",{parentName:"p"},"ls /dev/disk/*/*")," then it will cause a 90s timeout while it waits to see if it can be found. To fix this, you will need to remove the reference to the UUID or device path that no longer exists, or correct it to the new UUID label."))}c.isMDXComponent=!0}}]);