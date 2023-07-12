"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[4002],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=d(i),h=a,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||l;return i?n.createElement(m,o(o({ref:t},u),{},{components:i})):n.createElement(m,o({ref:t},u))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=i.length,o=new Array(l);o[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:a,o[1]=r;for(var d=2;d<l;d++)o[d]=i[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},5858:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var n=i(7462),a=(i(7294),i(3905));const l={title:"Preparing to Install",summary:"Installation Guide for multiple operating systems"},o="Preparing to install",r={unversionedId:"user/quick-start/installation/index",id:"user/quick-start/installation/index",title:"Preparing to Install",description:"The first step to installing Solus is acquiring the correct media. The Solus Project provides ISO images, which contain the contents of Solus for installing.",source:"@site/docs/user/quick-start/installation/index.md",sourceDirName:"user/quick-start/installation",slug:"/user/quick-start/installation/",permalink:"/docs/user/quick-start/installation/",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/quick-start/installation/index.md",tags:[],version:"current",lastUpdatedAt:1689163310,formattedLastUpdatedAt:"Jul 12, 2023",frontMatter:{title:"Preparing to Install",summary:"Installation Guide for multiple operating systems"},sidebar:"userSidebar",previous:{title:"Default Applications",permalink:"/docs/user/quick-start/default-applications"},next:{title:"Disk Partitioning",permalink:"/docs/user/quick-start/installation/disks"}},s={},d=[{value:"Linux and Mac",id:"linux-and-mac",level:2},{value:"Import the Public Key",id:"import-the-public-key",level:3},{value:"Verify SHA256SUMS file signature",id:"verify-sha256sums-file-signature",level:3},{value:"Verify ISO",id:"verify-iso",level:3},{value:"Linux",id:"linux",level:2},{value:"DVD",id:"dvd",level:3},{value:"USB",id:"usb",level:3},{value:"Graphical Tool",id:"graphical-tool",level:4},{value:"Command-Line",id:"command-line",level:4},{value:"Windows",id:"windows",level:2},{value:"DVD",id:"dvd-1",level:3},{value:"USB",id:"usb-1",level:3},{value:"macOS",id:"macos",level:2},{value:"DVD",id:"dvd-2",level:3},{value:"USB",id:"usb-2",level:3},{value:"Graphical Tool",id:"graphical-tool-1",level:4},{value:"Command-Line",id:"command-line-1",level:4},{value:"Boot the Media",id:"boot-the-media",level:2}],u={toc:d},p="wrapper";function c(e){let{components:t,...l}=e;return(0,a.kt)(p,(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"preparing-to-install"},"Preparing to install"),(0,a.kt)("p",null,"The first step to installing Solus is acquiring the correct media. The Solus Project provides ISO images, which contain the contents of Solus for installing."),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"getting-the-iso"},"Getting the ISO"),(0,a.kt)("p",null,"You can download a Solus ISO by going to our ",(0,a.kt)("a",{parentName:"p",href:"https://getsol.us/download"},"Download page"),"."),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"verifying-the-iso"},"Verifying the ISO"),(0,a.kt)("h2",{id:"linux-and-mac"},"Linux and Mac"),(0,a.kt)("p",null,"Download the relevant Solus ISO SHA256SUMS: File, Signed File and Public Key from the ",(0,a.kt)("a",{parentName:"p",href:"https://getsol.us/download"},"Download page"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," It is advisable that the files are all placed in the same folder."),(0,a.kt)("h3",{id:"import-the-public-key"},"Import the Public Key"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --import <Public Key>.gpg\n")),(0,a.kt)("h3",{id:"verify-sha256sums-file-signature"},"Verify SHA256SUMS file signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --verify <Signed File>.sign <File>.sha256sum\n")),(0,a.kt)("h3",{id:"verify-iso"},"Verify ISO"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sha256sum -c Solus-4.4-Budgie.iso.sha256sum | grep OK\n")),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"creating-bootable-media"},"Creating Bootable Media"),(0,a.kt)("p",null,"To make boot media, you will need:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Either a blank DVD or a USB drive larger than 2 GB."),(0,a.kt)("li",{parentName:"ol"},"If using a USB, the ability to boot from the USB."),(0,a.kt)("li",{parentName:"ol"},'ISO from the "Getting the ISO" section.')),(0,a.kt)("p",null,"There is a multitude of tools which enable the writing of our ISO image to DVDs or USB thumb drives. Below, we break it apart across Linux, Windows and macOS."),(0,a.kt)("h2",{id:"linux"},"Linux"),(0,a.kt)("h3",{id:"dvd"},"DVD"),(0,a.kt)("p",null,"We recommend using ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.gnome.org/Apps/Brasero"},"Brasero")," for writing the ISO to a DVD."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Insert blank DVD (DVD-R or DVD+RW is suitable) into your DVD writer."),(0,a.kt)("li",{parentName:"ol"},"Open Brasero."),(0,a.kt)("li",{parentName:"ol"},"Select the option \u201cBurn image\u201d."),(0,a.kt)("li",{parentName:"ol"},"Click the \u201cClick here to select a disc image\u201d button and using the file dialog, choose the ISO."),(0,a.kt)("li",{parentName:"ol"},"Ensure the correct DVD is selected in the \u201cSelect a disc to write to\u201d."),(0,a.kt)("li",{parentName:"ol"},'Click "Burn" and wait.'),(0,a.kt)("li",{parentName:"ol"},'Upon seeing \u201cImage successfully burned to DVD\u201d, click "Close".')),(0,a.kt)("h3",{id:"usb"},"USB"),(0,a.kt)("h4",{id:"graphical-tool"},"Graphical Tool"),(0,a.kt)("p",null,"We recommend using ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.gnome.org/Apps/MultiWriter"},"Gnome MultiWriter"),". Please note that unetbootin will ",(0,a.kt)("strong",{parentName:"p"},"not")," work."),(0,a.kt)("p",null,"Upon opening Gnome MultiWriter, you will likely be shown a window similar to the one below, in the event your USB drive is already plugged in."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"MultiWriter Start",src:i(9948).Z,width:"706",height:"156"})),(0,a.kt)("p",null,"If your USB drive is not plugged, you will be prompted with an image indicating to plug it in."),(0,a.kt)("p",null,'Next, click the "Start Copying" button, and you will be prompted to select the ISO. Choose the ISO you downloaded in the "Getting the ISO" section. The USB will automatically be written to.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"MultiWriter Writing",src:i(4992).Z,width:"706",height:"156"})),(0,a.kt)("p",null,"Upon completion, you will be prompted with the following dialog and your USB is now ready for use."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"MultiWriter Done",src:i(1910).Z,width:"706",height:"156"})),(0,a.kt)("h4",{id:"command-line"},"Command-Line"),(0,a.kt)("p",null,"For those comfortable with the command-line / terminal, we will walk you through using ",(0,a.kt)("inlineCode",{parentName:"p"},"dd"),"."),(0,a.kt)("p",null,"First, insert the USB drive into your computer and open your Terminal. Proceed to type ",(0,a.kt)("inlineCode",{parentName:"p"},"lsblk")," into your Terminal. It should output something along the lines of:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT\nsda      8:0    0 111.8G  0 disk\n\u251c\u2500sda1   8:1    0   350M  0 part\n\u251c\u2500sda2   8:2    0  39.7G  0 part\n\u2514\u2500sda3   8:3    0  71.8G  0 part /\nsdb      8:64   1   7.5G  0 disk\n\u251c\u2500sdb1   8:65   1   712M  0 part\n\u2514\u2500sdb2   8:66   1  17.2M  0 part\n")),(0,a.kt)("p",null,"You will see one disk, in this case ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev/sdb"),", that is roughly the size of the USB drive. Yours should be similar (difference being in size). Write this device down somewhere."),(0,a.kt)("p",null,"Next, locate the downloaded ISO. It will most likely be in your Downloads folder. In the event that it is, type: ",(0,a.kt)("inlineCode",{parentName:"p"},"cd ~/Downloads")),(0,a.kt)("p",null,"If it is ",(0,a.kt)("strong",{parentName:"p"},"not")," in your Downloads folder, use ",(0,a.kt)("inlineCode",{parentName:"p"},"cd")," to navigate to the correct directory."),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"This is where we overwrite the contents of your USB drive so please ensure you identified the correct drive in the ",(0,a.kt)("inlineCode",{parentName:"p"},"lsblk")," stage above. Selecting the wrong drive here will lead to its contents being overwritten. An example command is below, however you may need to replace ",(0,a.kt)("inlineCode",{parentName:"p"},"sdb")," with the drive we located above:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dd if=Solus-4.4-Budgie.iso of=/dev/sdb bs=4M status=progress oflag=sync && sudo eject /dev/sdb\n")),(0,a.kt)("p",null,"This will write the contents of the ISO to the thumb drive so you can boot it and also make sure the data is synchronised so you can eject the USB safely."),(0,a.kt)("h2",{id:"windows"},"Windows"),(0,a.kt)("h3",{id:"dvd-1"},"DVD"),(0,a.kt)("p",null,"You can easily burn an ISO image to a DVD, on Windows 7 and newer, by using Window's built-in file manager (Explorer)."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open Window's built-in file manager (Explorer)."),(0,a.kt)("li",{parentName:"ol"},'Right click on the ISO image file and click "Burn disk image".'),(0,a.kt)("li",{parentName:"ol"},"Select the correct disc burner."),(0,a.kt)("li",{parentName:"ol"},'Click "Burn".')),(0,a.kt)("h3",{id:"usb-1"},"USB"),(0,a.kt)("p",null,"You can easily burn an ISO image to a USB by using graphical tool ",(0,a.kt)("a",{parentName:"p",href:"https://rufus.ie/"},"Rufus"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open Rufus."),(0,a.kt)("li",{parentName:"ol"},"Ensure your device is correct by checking the contents of the Device dropdown."),(0,a.kt)("li",{parentName:"ol"},"Click the CD icon found in the image below, and select the ISO."),(0,a.kt)("li",{parentName:"ol"},'Untick all options except "Create a bootable disk using" and use the dropdown to select "DD Image".'),(0,a.kt)("li",{parentName:"ol"},'Click "Start".')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Rufus",src:i(3093).Z,width:"365",height:"518"})),(0,a.kt)("h2",{id:"macos"},"macOS"),(0,a.kt)("h3",{id:"dvd-2"},"DVD"),(0,a.kt)("p",null,"Since OS X El Capitan (10.11), the easiest way to burn a DVD is:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Insert your DVD and open Finder."),(0,a.kt)("li",{parentName:"ol"},"Right click on the ISO image."),(0,a.kt)("li",{parentName:"ol"},"Click on \u201cBurn Disk Image \u2018Solus-4.4-Budgie.iso\u2019 to Disc\u2026\u201d"),(0,a.kt)("li",{parentName:"ol"},"Then click \u201cBurn\u201d.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"macOS Burn DVD",src:i(4725).Z,width:"638",height:"343"})),(0,a.kt)("h3",{id:"usb-2"},"USB"),(0,a.kt)("h4",{id:"graphical-tool-1"},"Graphical Tool"),(0,a.kt)("p",null,"One of the easiest ways to burn an ISO image to a USB thumb drive is by using a graphical tool called ",(0,a.kt)("a",{parentName:"p",href:"https://etcher.balena.io/"},"Etcher"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open Etcher."),(0,a.kt)("li",{parentName:"ol"},"Click on \u201cSelect image\u201d and then select the ISO and click \u201cOpen\u201d."),(0,a.kt)("li",{parentName:"ol"},"Etcher will automatically select your USB drive. If it has selected the wrong one, click \u201cChange\u201d and select the correct one."),(0,a.kt)("li",{parentName:"ol"},"Click \u201cFlash!\u201d."),(0,a.kt)("li",{parentName:"ol"},"You may be prompted for your macOS user password."),(0,a.kt)("li",{parentName:"ol"},"Once Etcher has finished it is safe to remove the USB drive.")),(0,a.kt)("p",null,"You may see a message stating \u201cThe disk you inserted was not readable by this computer.\u201d once Etcher finishes. This can be ignored."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"macOS Etcher",src:i(4020).Z,width:"800",height:"380"})),(0,a.kt)("h4",{id:"command-line-1"},"Command-Line"),(0,a.kt)("p",null,"For those comfortable with the macOS Terminal app, we will walk you through using ",(0,a.kt)("inlineCode",{parentName:"p"},"dd"),"."),(0,a.kt)("p",null,"First, insert the USB drive into your computer and open Terminal (found in Applications/Utilities)."),(0,a.kt)("p",null,"Now you'll need to identify your USB drive by listing your storage devices with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"diskutil list\n")),(0,a.kt)("p",null,"You should see output similar to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/dev/disk0 (internal, physical):\n   #:                       TYPE NAME                    SIZE       IDENTIFIER\n   0:      GUID_partition_scheme                        *1.0 TB     disk0\n   1:                        EFI EFI                     209.7 MB   disk0s1\n   2:                  Apple_HFS Macintosh HD            999.3 GB   disk0s2\n   3:                 Apple_Boot Recovery HD             650.0 MB   disk0s3\n\n/dev/disk1 (external, physical):\n   #:                       TYPE NAME                    SIZE       IDENTIFIER\n   0:      GUID_partition_scheme                        *15.6 GB    disk1\n   1:                        EFI EFI                     209.7 MB   disk1s1\n   2:                  Apple_HFS Ultra                   15.3 GB    disk1s2\n")),(0,a.kt)("p",null,"From this output, we can see the USB drive is listed as ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev/disk1 (external, physical)"),". In this example, the IDENTIFIER is ",(0,a.kt)("inlineCode",{parentName:"p"},"disk1"),". Please note, your USB drive may have a different identifier. You should be able to tell which is your USB drive by checking the name and size."),(0,a.kt)("p",null,"macOS usually auto-mounts USB drives so you\u2019ll need to unmount it first before proceeding. Use the following command and replace ",(0,a.kt)("inlineCode",{parentName:"p"},"IDENTIFIER")," with the correct identifier we found in the ",(0,a.kt)("inlineCode",{parentName:"p"},"diskutil list")," step."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"diskutil unmountDisk /dev/IDENTIFIER\n")),(0,a.kt)("p",null,"Now navigate to the folder that has the downloaded ISO. This could be your Mac\u2019s Downloads folder. The following command will get you there:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/Downloads\n")),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"This next step is dangerous. Using the wrong drive identifier could result in data loss."))),(0,a.kt)("p",null,"We will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"dd")," command to write the contents of the ISO to the thumb drive. Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"IDENTIFIER")," in the command below with your drive identifier. Note the extra ",(0,a.kt)("inlineCode",{parentName:"p"},"r")," before the identifier (i.e ",(0,a.kt)("inlineCode",{parentName:"p"},"rdisk1"),"). This is for raw mode, which along with bs=1m, makes the transfer faster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dd if=Solus-4.4-Budgie.iso of=/dev/rIDENTIFIER bs=1m\n")),(0,a.kt)("p",null,"Be patient! After a few minutes you\u2019ll receive a message saying how much data was transferred. You can now safely eject the usb drive."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"diskutil eject /dev/IDENTIFIER\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"boot-the-media"},"Boot the Media"),(0,a.kt)("p",null,"Now it is time to restart your computer to boot the DVD or USB. Most computers will automatically boot from DVDs and USB, however if you experience issues booting the media, you may need to select to boot from DVD or USB."),(0,a.kt)("p",null,"This is usually accessible by pressing ",(0,a.kt)("inlineCode",{parentName:"p"},"F9")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"F12")," while your computer is booting. On some devices it may also be ",(0,a.kt)("inlineCode",{parentName:"p"},"ESC"),"."),(0,a.kt)("p",null,'Macs will boot to the "Startup Manager" by holding down the Option (Alt) key. The DVD or USB drive will most likely show up as "EFI Boot".'))}c.isMDXComponent=!0},1910:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/done-fdbb3bda7061afd0ca7f97b85c1cef18.jpg"},4725:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/mac-burn-dvd-0bef9578a58d61610854fc7c25e3496f.jpg"},4020:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/mac-etcher-2d28aaeb19eda12c960c6b09e81eceb2.jpg"},3093:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/rufus-6f16a561298400882bff901d61064e58.jpg"},9948:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/start-c8e10b8e6f627b862f8f6344260db698.jpg"},4992:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/writing-1a2eb065ba3c61dd1371f89b2ab9f7c1.jpg"}}]);