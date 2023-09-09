"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[9397],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(o),c=r,h=d["".concat(l,".").concat(c)]||d[c]||m[c]||i;return o?n.createElement(h,s(s({ref:t},p),{},{components:o})):n.createElement(h,s({ref:t},p))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,s=new Array(i);s[0]=c;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:r,s[1]=a;for(var u=2;u<i;u++)s[u]=o[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},5049:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=o(7462),r=(o(7294),o(3905));const i={title:"Boot Rescue",summary:"Troubleshooting the boot process for Solus"},s="Boot Rescue",a={unversionedId:"user/troubleshooting/boot-rescue",id:"user/troubleshooting/boot-rescue",title:"Boot Rescue",description:"In this document, we will walk through restoring the ability to boot Solus.",source:"@site/docs/user/troubleshooting/boot-rescue.md",sourceDirName:"user/troubleshooting",slug:"/user/troubleshooting/boot-rescue",permalink:"/docs/user/troubleshooting/boot-rescue",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/troubleshooting/boot-rescue.md",tags:[],version:"current",lastUpdatedAt:1694290073,formattedLastUpdatedAt:"Sep 9, 2023",frontMatter:{title:"Boot Rescue",summary:"Troubleshooting the boot process for Solus"},sidebar:"userSidebar",previous:{title:"Troubleshooting",permalink:"/docs/user/troubleshooting/"},next:{title:"Installation Issues",permalink:"/docs/user/troubleshooting/installation"}},l={},u=[{value:"Multi-Booting",id:"multi-booting",level:2},{value:"An entry is present in /etc/fstab that is not present at boot time",id:"an-entry-is-present-in-etcfstab-that-is-not-present-at-boot-time",level:2},{value:"Incorrectly Applied Updates / Disk Changes",id:"incorrectly-applied-updates--disk-changes",level:2},{value:"Mounting your system",id:"mounting-your-system",level:3},{value:"Encrypted Systems / LVM Systems",id:"encrypted-systems--lvm-systems",level:4},{value:"UEFI",id:"uefi",level:4},{value:"Other partitions",id:"other-partitions",level:4},{value:"Chrooting to your Solus system",id:"chrooting-to-your-solus-system",level:3},{value:"Networking",id:"networking",level:3},{value:"Repairing Packages",id:"repairing-packages",level:3},{value:"Correcting disks",id:"correcting-disks",level:3},{value:"Re-run System-Wide Configuration Triggers",id:"re-run-system-wide-configuration-triggers",level:3},{value:"Unmounting your system",id:"unmounting-your-system",level:3}],p={toc:u},d="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"boot-rescue"},"Boot Rescue"),(0,r.kt)("p",null,"In this document, we will walk through restoring the ability to boot Solus."),(0,r.kt)("p",null,"The inability to boot Solus can be attributed to various issues, such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Multi-booting with an other operating system that "owns" GRUB and fails to show Solus after an upgrade of Solus is performed.'),(0,r.kt)("li",{parentName:"ul"},'Upgrades, such as to the kernel, that may not have applied correctly. In which case this could affect "legacy boot" (non-UEFI) or UEFI systems.'),(0,r.kt)("li",{parentName:"ul"},"If a disk is added, removed or had its UUID / mount point change.")),(0,r.kt)("p",null,'NOTE: Most examples below use sdX as the drive name. If your system has nvme drives, substitute the appropriate name, for example "nvme0n1".'),(0,r.kt)("h2",{id:"multi-booting"},"Multi-Booting"),(0,r.kt)("p",null,'Multi-booting is when you have multiple operating systems on the same device. Also referred to as "dual-booting" when only having two operating systems on the same device.'),(0,r.kt)("p",null,'The inability to access Solus in a multi-boot scenario typically applies to "legacy boot" (non-UEFI), where the other operating system owns GRUB, which is used booting itself and Solus. This can be resolved by accessing the other operating system and running ',(0,r.kt)("inlineCode",{parentName:"p"},"sudo update-grub"),"."),(0,r.kt)("h2",{id:"an-entry-is-present-in-etcfstab-that-is-not-present-at-boot-time"},"An entry is present in /etc/fstab that is not present at boot time"),(0,r.kt)("p",null,'If you get to an emergency prompt when the system tries to boot, check /etc/fstab. Look for any entries that might refer to disks not present at boot, such as a USB drive or nfs mount. Try adding "noauto" and rebooting. A USB drive entry might look like:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"UUID=XXXXXX  /mnt/mydisk  exfat noauto,uid=1000,gid=1000,umask=0022  0  0\n")),(0,r.kt)("h2",{id:"incorrectly-applied-updates--disk-changes"},"Incorrectly Applied Updates / Disk Changes"),(0,r.kt)("p",null,"In the case that updates have not been applied correctly by the system, the updates were interrupted, or the disks have changed, it may be possible to boot rescue the Solus system. To do so, you will need:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A Live ISO of Solus booted on your system"),(0,r.kt)("li",{parentName:"ol"},"A terminal in that Live ISO opened")),(0,r.kt)("h3",{id:"mounting-your-system"},"Mounting your system"),(0,r.kt)("p",null,"Whether you're using GRUB or UEFI, you will need to mount your Solus root (",(0,r.kt)("inlineCode",{parentName:"p"},"/"),") partition as the first step of performing a boot rescue. This is typically your primary partition, formatted as the filesystem type ",(0,r.kt)("inlineCode",{parentName:"p"},"ext4"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First we need to be the root user. Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo su")),(0,r.kt)("li",{parentName:"ol"},"Next we make a directory where we will mount our local Solus system: ",(0,r.kt)("inlineCode",{parentName:"li"},"mkdir /target")),(0,r.kt)("li",{parentName:"ol"},"Now, using ",(0,r.kt)("inlineCode",{parentName:"li"},"lsblk"),", determine the partition of the Solus system. We recommend checking the size of the partition listed and if it matches the size of your Solus install, use that. It will likely be something along the lines of ",(0,r.kt)("inlineCode",{parentName:"li"},"sda#")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"sdb#"),". For NVME drives, the name will look like ",(0,r.kt)("inlineCode",{parentName:"li"},"nvme0n1px"),'\nNote: If you see "lvm" as the type, the system has LVM partitions. See the next section for how to mount them.'),(0,r.kt)("li",{parentName:"ol"},'If your root partition is of type sdX / nvme0n1x, replace the "sdX#" in the following command with the partition and mount to the target directory we created: ',(0,r.kt)("inlineCode",{parentName:"li"},"mount /dev/sdX# /target"))),(0,r.kt)("h4",{id:"encrypted-systems--lvm-systems"},"Encrypted Systems / LVM Systems"),(0,r.kt)("p",null,"If you use LVM volumes on your system, the process for mounting the system is a little different.\nIf you use LUKS-based encryption, the process will involve decrypting your LUKS partition before mounting it to the correct location. To do this, note the sda / sdb device from the prior steps and follow the steps below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If the disk is encrypted, decrypt it by running ",(0,r.kt)("inlineCode",{parentName:"li"},"cryptsetup luksOpen /dev/sdX# decrypted"),", replacing ",(0,r.kt)("inlineCode",{parentName:"li"},"X#")," with the partition you identified, and enter your password when prompted."),(0,r.kt)("li",{parentName:"ol"},"Next check the output of ",(0,r.kt)("inlineCode",{parentName:"li"},"lsblk"),". This will show you any LVM volumes. You should now see ",(0,r.kt)("inlineCode",{parentName:"li"},"SolusSystem-Swap")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"SolusSystem-Root"),".\nFor non-encrypted volumes, you may see something like this. In this example, ",(0,r.kt)("inlineCode",{parentName:"li"},"SolusSystem-Swap")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"SolusSystem-Root"),' are under "sda2":')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                   MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINT\nloop0                    7:0    0   1.3G  1 loop  /run/initramfs/squashfs\nloop1                    7:1    0   6.2G  1 loop  /run/rootfsbase\nsr0                   11:0    1  2.7G  0 rom  /run/initramfs/live\nzram0                251:0    0  7.8G  0 disk [SWAP]\nsda                  252:0    0   96G  0 disk\n\u251c\u2500sda1               252:1    0  287M  0 part\n\u2514\u2500sda2               252:2    0 69.7G  0 part\n  \u251c\u2500SolusSystem-Swap 253:0    0  3.7G  0 lvm\n  \u2514\u2500SolusSystem-Root 253:1    0   46G  0 lvm\n...\n")),(0,r.kt)("p",null,"  For decrypted volumes, the output should look similar to this, with ",(0,r.kt)("inlineCode",{parentName:"p"},"SolusSystem-Swap")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"SolusSystem-Root"),' being under "decrypted":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                   MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINT\nloop0                    7:0    0   1.3G  1 loop  /run/initramfs/squashfs\nloop1                    7:1    0   6.2G  1 loop  /run/rootfsbase\nloop2                    7:2    0   6.2G  1 loop\n\u2514\u2500live-base            253:0    0   6.2G  1 dm\nsda                      8:0    0 238.5G  0 disk\n\u251c\u2500sda1                   8:1    0 488.3M  0 part\n\u2514\u2500sda2                   8:2    0   238G  0 part\n  \u2514\u2500decrypted          253:1    0   238G  0 crypt\n    \u251c\u2500SolusSystem-Swap 253:2    0   3.7G  0 lvm\n    \u2514\u2500SolusSystem-Root 253:3    0 234.3G  0 lvm\nsdb                      8:16   1   7.3G  0 disk\n\u251c\u2500sdb1                   8:17   1   1.4G  0 part  /run/initramfs/live\n\u2514\u2500sdb2                   8:18   1    40M  0 part\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Mount ",(0,r.kt)("inlineCode",{parentName:"li"},"SolusSystem-Root")," by running ",(0,r.kt)("inlineCode",{parentName:"li"},"mount /dev/mapper/SolusSystem-Root /target"))),(0,r.kt)("h4",{id:"uefi"},"UEFI"),(0,r.kt)("p",null,"If your system uses UEFI as opposed to GRUB, you will also need to mount your EFI System Partition, otherwise referred to as ESP. If you followed our ",(0,r.kt)("a",{parentName:"p",href:"/docs/user/quick-start/installation/disks#uefi"},"UEFI guide")," during installation of Solus, then in all likelihood your ESP will be about 500mb in size. If you're unsure of the partition, run the following, replacing X with the same letter during your mounting of your root file system, minus the number:"),(0,r.kt)("p",null,"For HDD / SDD drives:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"fdisk -o Device,Size,Type -l /dev/sdX\n")),(0,r.kt)("p",null,"For nvme drives:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"fdisk -o Device,Size,Type -l /dev/nvme0nX\n")),(0,r.kt)("p",null,"Your output may look something similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Device       Size Type\n/dev/sda1    512M EFI System\n/dev/sda2  111.3G Linux filesystem\n")),(0,r.kt)("p",null,"Notice we have ",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/sda1")," as the Device with the ",(0,r.kt)("inlineCode",{parentName:"p"},"EFI System")," type and roughly 500mb in size. This is the partition we will be mounting."),(0,r.kt)("p",null,"With our ESP device known, let's go ahead and mount it, replacing ",(0,r.kt)("inlineCode",{parentName:"p"},"sdX#")," in the case below with our partition."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mount /dev/sdX# /target/boot\n")),(0,r.kt)("h4",{id:"other-partitions"},"Other partitions"),(0,r.kt)("p",null,"If your system has other specific partitions, such as a separate /home partition, they will also need to be mounted."),(0,r.kt)("h3",{id:"chrooting-to-your-solus-system"},"Chrooting to your Solus system"),(0,r.kt)("p",null,"To access your system and perform boot rescue, you will need to mount specific directories from the host system (in this case, our Live ISO), to our Solus system, and then chroot (change root) to the Solus system."),(0,r.kt)("p",null,"First run the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mount --types proc /proc /target/proc\nmount --rbind /dev /target/dev\nmount --rbind /sys /target/sys\nmount --make-rslave /target/dev\nmount --make-rslave /target/sys\n")),(0,r.kt)("p",null,"Assuming all goes well, you should now be able to chroot into your Solus system by doing ",(0,r.kt)("inlineCode",{parentName:"p"},"chroot /target"),"."),(0,r.kt)("h3",{id:"networking"},"Networking"),(0,r.kt)("p",null,"To validate a working network connection (assuming a network connection is available in your live image), you can run ",(0,r.kt)("inlineCode",{parentName:"p"},"ping google.com")," in the chrooted environment. If you get responses from ",(0,r.kt)("inlineCode",{parentName:"p"},"google.com"),", you have a successful connection to the Internet. If you do not, try the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Exit the chroot by typing ",(0,r.kt)("inlineCode",{parentName:"li"},"exit")),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"cp /etc/resolv.conf /target/etc/")),(0,r.kt)("li",{parentName:"ol"},"Chroot back into ",(0,r.kt)("inlineCode",{parentName:"li"},"/target")," by running ",(0,r.kt)("inlineCode",{parentName:"li"},"chroot /target")," again."),(0,r.kt)("li",{parentName:"ol"},"Retry networking.")),(0,r.kt)("h3",{id:"repairing-packages"},"Repairing Packages"),(0,r.kt)("p",null,"In the event you had an incomplete upgrade, try the following commands:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"sudo eopkg rebuild-db")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"sudo eopkg up")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"sudo eopkg check | grep Broken | awk '{print $4}' | xargs sudo eopkg it --reinstall"),'\nIf you see output that starts with "Usage", this means the system has no broken packages.'),(0,r.kt)("li",{parentName:"ol"},'Try reverting the latest package transaction (this should only be done if the first two steps, followed by the "Re-run System-Wide Configuration Triggers", failed to produce a successful bootup). See ',(0,r.kt)("a",{parentName:"li",href:"/docs/user/package-management/history-and-rollback"},"our documentation on history and rollback")," for more information, followed by re-applying your updates by running ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo eopkg up"),".")),(0,r.kt)("h3",{id:"correcting-disks"},"Correcting disks"),(0,r.kt)("p",null,"In the event that disk changes had caused the system to fail to boot, try the following in the chroot environment:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Get the UUIDs of your partitions the system expects from ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/fstab"),"."),(0,r.kt)("li",{parentName:"ol"},"Compare this to the output of ",(0,r.kt)("inlineCode",{parentName:"li"},"ls -lah /dev/disk/by-uuid"))),(0,r.kt)("h3",{id:"re-run-system-wide-configuration-triggers"},"Re-run System-Wide Configuration Triggers"),(0,r.kt)("p",null,"In the chroot environment, run the following command which will perform various configuration triggers to update your icon cache, update GRUB and EFI configuration, re-compile settings, and more."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo usysconf run -f\n")),(0,r.kt)("p",null,"After this, you should exit your chroot with ",(0,r.kt)("inlineCode",{parentName:"p"},"exit")," then reboot your system. In the event you are still unable to access Solus, please ",(0,r.kt)("a",{parentName:"p",href:"/docs/user/contributing/getting-involved"},"contact us"),"."),(0,r.kt)("h3",{id:"unmounting-your-system"},"Unmounting your system"),(0,r.kt)("p",null,"In case further partition modifications are required, there's a series of steps that must be followed."),(0,r.kt)("p",null,"If you are still chrooted you have to exit the chroot environment by pressing ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"D"),"."),(0,r.kt)("p",null,"Then proceed with unmounting the filesystem."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"umount -R /target\n")),(0,r.kt)("p",null,"In case of having a LUKS-based encryption you'll have to deactivate your logical volumes plus volume groups and then close your LUKS partition."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"lvchange -a n /dev/SolusSystem/Swap # `-a n` means `active: no`\nlvchange -a n /dev/SolusSystem/Root\nvgchange -a n SolusSystem\ncryptsetup luksClose decrypted\n")))}m.isMDXComponent=!0}}]);