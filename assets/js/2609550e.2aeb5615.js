"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[3206],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>h});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),m=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=m(e.components);return n.createElement(l.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=m(t),p=s,h=d["".concat(l,".").concat(p)]||d[p]||c[p]||o;return t?n.createElement(h,i(i({ref:a},u),{},{components:t})):n.createElement(h,i({ref:a},u))}));function h(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var o=t.length,i=new Array(o);i[0]=p;var r={};for(var l in a)hasOwnProperty.call(a,l)&&(r[l]=a[l]);r.originalType=e,r[d]="string"==typeof e?e:s,i[1]=r;for(var m=2;m<o;m++)i[m]=t[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},541:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>m});var n=t(7462),s=(t(7294),t(3905));const o={title:"Samba File Sharing",summary:"A quick start guide to Samba on Solus"},i="Samba file sharing",r={unversionedId:"user/software/networking/samba",id:"user/software/networking/samba",title:"Samba File Sharing",description:"Samba is the standard Windows interoperability suite of programs for Linux and Unix. Among other things, it allows Linux, macOS and Windows users to share files via the Server Message Block (SMB) protocol.",source:"@site/docs/user/software/networking/samba.md",sourceDirName:"user/software/networking",slug:"/user/software/networking/samba",permalink:"/docs/user/software/networking/samba",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/software/networking/samba.md",tags:[],version:"current",lastUpdatedAt:1689163310,formattedLastUpdatedAt:"Jul 12, 2023",frontMatter:{title:"Samba File Sharing",summary:"A quick start guide to Samba on Solus"},sidebar:"userSidebar",previous:{title:"Networking",permalink:"/docs/category/networking"},next:{title:"TigerVNC",permalink:"/docs/user/software/networking/tigervnc"}},l={},m=[{value:"Samba on Solus",id:"samba-on-solus",level:2},{value:"How to start/stop Samba",id:"how-to-startstop-samba",level:3},{value:"Enabling Windows 7+ network discovery support",id:"enabling-windows-7-network-discovery-support",level:3},{value:"Accessing Samba via IPv6",id:"accessing-samba-via-ipv6",level:3},{value:"A brief introduction to the Samba usershare functionality",id:"a-brief-introduction-to-the-samba-usershare-functionality",level:2},{value:"GUI - configuring shares via file manager plugins",id:"gui---configuring-shares-via-file-manager-plugins",level:3},{value:"CLI - using the net usershare command",id:"cli---using-the-net-usershare-command",level:3},{value:"Managing Samba authentication for named users",id:"managing-samba-authentication-for-named-users",level:2},{value:"Debugging Samba authentication issues",id:"debugging-samba-authentication-issues",level:3},{value:"Adding custom configuration parameters via <code>/etc/samba/smb.conf</code>",id:"adding-custom-configuration-parameters-via-etcsambasmbconf",level:2},{value:"Example -- anonymous, read-write share outside of <em>$HOME</em>",id:"example----anonymous-read-write-share-outside-of-home",level:3},{value:"Links to the official Samba documentation",id:"links-to-the-official-samba-documentation",level:3},{value:"Full manual control of Samba (recommended only for experienced Samba admins)",id:"full-manual-control-of-samba-recommended-only-for-experienced-samba-admins",level:2}],u={toc:m},d="wrapper";function c(e){let{components:a,...t}=e;return(0,s.kt)(d,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"samba-file-sharing"},"Samba file sharing"),(0,s.kt)("p",null,"Samba is the standard Windows interoperability suite of programs for Linux and Unix. Among other things, it allows Linux, macOS and Windows users to share files via the Server Message Block (SMB) protocol."),(0,s.kt)("h2",{id:"samba-on-solus"},"Samba on Solus"),(0,s.kt)("p",null,"To enable convenient file-sharing on Solus, we maintain a Solus-specific Samba configuration that out-of-the-box:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Supports Samba usershare functionality"),(0,s.kt)("li",{parentName:"ul"},"Enables sharing of ",(0,s.kt)("em",{parentName:"li"},"$HOME")," folders (manual user account activation needed)"),(0,s.kt)("li",{parentName:"ul"},"Is set up as a standalone server using the SMB2.0.2 protocol and up (>= Windows Vista/Server 2008)"),(0,s.kt)("li",{parentName:"ul"},"Advertises itself via ",(0,s.kt)("em",{parentName:"li"},"Avahi")," aka ",(0,s.kt)("em",{parentName:"li"},"Apple Bonjour")," / ",(0,s.kt)("em",{parentName:"li"},"mDNS")," / ",(0,s.kt)("em",{parentName:"li"},"zeroconf")," for macOS compatibility"),(0,s.kt)("li",{parentName:"ul"},"Advertises itself via ",(0,s.kt)("em",{parentName:"li"},"wsdd")," aka ",(0,s.kt)("em",{parentName:"li"},"Web Services Discovery Daemon")," for Windows 7+ compatibility"),(0,s.kt)("li",{parentName:"ul"},"Disables sharing of printers via Samba (use IPP via CUPS instead)"),(0,s.kt)("li",{parentName:"ul"},"Allows access only from IPv4 and IPv6 private and link-local (non-internet-routable) addresses")),(0,s.kt)("p",null,"As of Samba 4.7.x, Solus disables the old, deprecated and insecure original SMB1/CIFS protocol by default."),(0,s.kt)("p",null,"For more information on this choice, please read ",(0,s.kt)("a",{parentName:"p",href:"https://blogs.technet.microsoft.com/filecab/2016/09/16/stop-using-smb1/"},"this post regarding SMB1"),"."),(0,s.kt)("p",null,"As of Samba 4.11.x, the SMB1/CIFS protocol is officially deprecated upstream."),(0,s.kt)("h3",{id:"how-to-startstop-samba"},"How to start/stop Samba"),(0,s.kt)("p",null,"Please note that Samba does NOT run on system boot by default. It needs to be manually started/configured to start automatically:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Start Samba manually\nsudo systemctl start smb\n\n# Configure Samba to start automatically on each boot and immediately start the service\nsudo systemctl enable --now smb\n\n# Check whether Samba is running\nsudo systemctl status smb\n\n# Restart Samba manually\nsudo systemctl restart smb\n\n# Stop Samba manually\nsudo systemctl stop smb\n\n# Configure Samba to not start automatically on each boot and immediately stop the service\nsudo systemctl disable --now smb\n")),(0,s.kt)("h3",{id:"enabling-windows-7-network-discovery-support"},"Enabling Windows 7+ network discovery support"),(0,s.kt)("p",null,"The Web Services Discovery protocol is used by Windows 7+ clients to discover shares on other computers. Solus now includes the ",(0,s.kt)("em",{parentName:"p"},"wsdd")," service which provides support for the Web Services Discovery protocol."),(0,s.kt)("p",null,"When restarting wsdd, it may be necessary to also restart Samba."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Start wsdd manually (depends on the smb service)\nsudo systemctl start wsdd\n\n# Configure wsdd to start automatically on each boot and immediately start the service\nsudo systemctl enable --now wsdd\n\n# Check whether wsdd is running\nsudo systemctl status wsdd\n\n# Restart wsdd and Samba\nsudo systemctl restart wsdd smb\n\n# Stop wsdd manually\nsudo systemctl stop wsdd\n\n# Configure wsdd to not start automatically on each boot and immediately stop the service\nsudo systemctl disable --now wsdd\n")),(0,s.kt)("p",null,"For more details on managing services on Solus with ",(0,s.kt)("em",{parentName:"p"},"systemctl"),", see ",(0,s.kt)("inlineCode",{parentName:"p"},"man systemctl")," which is part of the systemd system and service manager."),(0,s.kt)("h3",{id:"accessing-samba-via-ipv6"},"Accessing Samba via IPv6"),(0,s.kt)("p",null,"In order to access a running Solus Samba server instance via IPv6, first verify that all relevant hosts (including the Samba host) are configured with an IPv6 link-local address."),(0,s.kt)("p",null,"This can be verified in a terminal:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ ip addr\n\n2: enp2s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000\n    link/ether 14:da:e9:10:f9:c7 brd ff:ff:ff:ff:ff:ff\n    inet 192.168.147.233/24 brd 192.168.147.255 scope global dynamic noprefixroute enp2s0\n       valid_lft 5066sec preferred_lft 5066sec\n    inet6 fe80::d555:a50f:1aea:c944/64 scope link noprefixroute\n       valid_lft forever preferred_lft forever\n")),(0,s.kt)("p",null,"In the above example, the name of the relevant network device is ",(0,s.kt)("inlineCode",{parentName:"p"},"enp2s0"),". Note how the line starting with ",(0,s.kt)("inlineCode",{parentName:"p"},"inet6")," contains an IPv6 address which begins with fe80:: and contains ",(0,s.kt)("inlineCode",{parentName:"p"},"scope link"),"."),(0,s.kt)("p",null,"Ensure that Samba has been started on the host and then query the running local Samba instance with the following command, using the IPv6 address and interface as show by the output of ",(0,s.kt)("inlineCode",{parentName:"p"},"ip addr"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ smbclient -N -L //fe80::d555:a50f:1aea:c944%enp2s0\n")),(0,s.kt)("p",null,"The output might look something like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Unable to initialize messaging context\nAnonymous login successful\n\n        Sharename       Type      Comment\n        ---------       ----      -------\n        eopkgs          Disk\n        IPC$            IPC       IPC Service (Samba server (version: 4.10.11, protocol: SMB3_11))\n        Public          Disk\nfe80::d555:a50f:1aea:c944%enp2s0 is an IPv6 address -- no workgroup available\n")),(0,s.kt)("p",null,"Make sure to change the IPv6 address and interface name (",(0,s.kt)("inlineCode",{parentName:"p"},"fe80::d555:a50f:1aea:c944")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"enp2s0")," respectively in the above example) to the real address and interface name of the Samba host in question."),(0,s.kt)("h2",{id:"a-brief-introduction-to-the-samba-usershare-functionality"},"A brief introduction to the Samba usershare functionality"),(0,s.kt)("p",null,"In order to support user-managed (as opposed to system-managed) shares, Samba provides the so-called ",(0,s.kt)("em",{parentName:"p"},"usershare")," functionality, where users can define network shares without touching the traditional Samba configuration file."),(0,s.kt)("h3",{id:"gui---configuring-shares-via-file-manager-plugins"},"GUI - configuring shares via file manager plugins"),(0,s.kt)("p",null,"The default Solus configuration was written with the ",(0,s.kt)("inlineCode",{parentName:"p"},"nautilus-share")," (Budgie/GNOME), ",(0,s.kt)("inlineCode",{parentName:"p"},"kdenetwork-filesharing")," (KDE) and ",(0,s.kt)("inlineCode",{parentName:"p"},"caja-share")," (MATE) file manager plugins in mind. These plugins allow the user to share folders in an easy and convenient way."),(0,s.kt)("p",null,"All the user needs to do is to install either the ",(0,s.kt)("inlineCode",{parentName:"p"},"caja-extensions")," package (which includes the ",(0,s.kt)("inlineCode",{parentName:"p"},"caja-share")," plugin), the ",(0,s.kt)("inlineCode",{parentName:"p"},"kdenetwork-filesharing")," package or the ",(0,s.kt)("inlineCode",{parentName:"p"},"nautilus-share")," package from the Software Center and enable the relevant Samba services."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Budgie/GNOME\nsudo eopkg install nautilus-share\n\n# KDE\nsudo eopkg install kdenetwork-filesharing\n\n# MATE\nsudo eopkg install caja-extensions\n")),(0,s.kt)("p",null,"In order to load the newly installed file manager plugin, the user will need to log out of the current desktop session and log back in to a new desktop session, at which point the plugin in question will be ready for use. To enable shares from any drive and folder on your System you will need add the following parameter to /etc/samba/smb.conf:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"usershare owner only = false\n")),(0,s.kt)("p",null,"Afterwards simply right-clicking a folder and clicking ",(0,s.kt)("em",{parentName:"p"},"properties")," will now show an option to share it, as well as whether to allow Read/Write permissions to your users or guest access."),(0,s.kt)("h3",{id:"cli---using-the-net-usershare-command"},"CLI - using the net usershare command"),(0,s.kt)("p",null,"Excerpt from the ",(0,s.kt)("inlineCode",{parentName:"p"},"man smb.conf")," manual page:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"net usershare add sharename path [comment] [acl] [guest_ok=[y|n]]\n    To create or modify (overwrite) a user defined share.\n\nnet usershare delete sharename\n    To delete a user defined share.\n\nnet usershare list wildcard-sharename\n    To list user defined shares.\n\nnet usershare info wildcard-sharename\n    To print information about user defined shares.\n")),(0,s.kt)("h2",{id:"managing-samba-authentication-for-named-users"},"Managing Samba authentication for named users"),(0,s.kt)("p",null,"Should the user ",(0,s.kt)("inlineCode",{parentName:"p"},"some_user")," wish to access e.g. the ",(0,s.kt)("em",{parentName:"p"},"$HOME")," directory via Samba, it is necessary to enable the ",(0,s.kt)("inlineCode",{parentName:"p"},"some_user")," Samba account."),(0,s.kt)("p",null,"Note that the ",(0,s.kt)("inlineCode",{parentName:"p"},"some_user")," Samba account is separate from the ",(0,s.kt)("inlineCode",{parentName:"p"},"some_user")," Linux user account, but they share the same ",(0,s.kt)("em",{parentName:"p"},"$HOME")," directory."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Add the some_user account to the Samba login db\nsudo smbpasswd -a some_user\n\n# Enable the some_user account in the Samba login db\nsudo smbpasswd -e some_user\n\n# Try to log in to a running Samba instance as some_user and list shares\nsmbclient -U some_user -L localhost\n\n# Disable the some_user account in the Samba login db\nsudo smbpasswd -d some_user\n\n# Remove the some_user account from the Samba login db\nsudo smbpasswd -x some_user\n")),(0,s.kt)("p",null,"See ",(0,s.kt)("inlineCode",{parentName:"p"},"man smbpasswd")," for more details."),(0,s.kt)("h3",{id:"debugging-samba-authentication-issues"},"Debugging Samba authentication issues"),(0,s.kt)("p",null,"To help debug authentication issues, the Solus Samba configuration is by default set up with relatively verbose logging when it comes to authentication and protocol negotiation."),(0,s.kt)("p",null,"The Samba log files live in the ",(0,s.kt)("inlineCode",{parentName:"p"},"/var/log/samba/")," directory."),(0,s.kt)("h2",{id:"adding-custom-configuration-parameters-via-etcsambasmbconf"},"Adding custom configuration parameters via ",(0,s.kt)("inlineCode",{parentName:"h2"},"/etc/samba/smb.conf")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"CAUTION:")," ",(0,s.kt)("em",{parentName:"p"},"From this point on, it is assumed that the user is familiar with the Samba documentation, including ",(0,s.kt)("inlineCode",{parentName:"em"},"man smb.conf"),", and that the user has a basic understanding of Linux filesystem permissions.")),(0,s.kt)("p",null,"The default Solus-managed configuration (which lives in ",(0,s.kt)("inlineCode",{parentName:"p"},"/usr/share/defaults/samba/smb.conf")," and will be overwritten on each Samba package update) is written such that it will attempt to include any configuration parameters present in ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/samba/smb.conf"),"."),(0,s.kt)("p",null,"Hence, any persistent user-managed parameters should be added to ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/samba/smb.conf")," which will ",(0,s.kt)("em",{parentName:"p"},"never")," be overwritten by the system package manager."),(0,s.kt)("p",null,"In addition, the Solus-controlled Samba configuration is written such that it is possible to override its default parameters simply by assigning a new value to the parameter in question in ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/samba/smb.conf"),". From a technical perspective, any parameters added without a ",(0,s.kt)("inlineCode",{parentName:"p"},"[shared resource]")," header will considered part of the ",(0,s.kt)("inlineCode",{parentName:"p"},"[global]")," configuration section."),(0,s.kt)("p",null,"This way, simply deleting or renaming ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/samba/smb.conf")," and restarting Samba with ",(0,s.kt)("inlineCode",{parentName:"p"},"sudo systemctl restart smb")," will reset the configuration to the known working default Solus configuration."),(0,s.kt)("h3",{id:"example----anonymous-read-write-share-outside-of-home"},"Example -- anonymous, read-write share outside of ",(0,s.kt)("em",{parentName:"h3"},"$HOME")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ini"},"# Contents of /etc/samba/smb.conf:\n#\n# If /etc/samba/smb.conf exists, it is automatically loaded by the Solus-\n# controlled default config residing in /usr/share/defaults/samba/smb.conf\n#\n# The following configuration creates a \"//servername/someshare\" share where\n# anonymous users have read and write access.\n#\n# ';' also denotes a comment (typically used for configuration parameters)\n#\n[someshare]\npath = /mnt/someshare\n# allow anonymous access\nguest ok = Yes\n# ONLY allow anonymous access (don't allow both guest and system user access)\n;guest only = Yes\n# allow write access\nread only = No\n# This is an example of how to limit access to the share to known IPs\n;hosts deny = ALL\n;hosts allow = 127.0.0.1 192.168.1.0/24\n# share config end\n")),(0,s.kt)("p",null,"In the above example, it is assumed that the user has chosen a suitable method for making ",(0,s.kt)("inlineCode",{parentName:"p"},"/mnt/someshare")," writeable by guest users."),(0,s.kt)("p",null,"After adding a ",(0,s.kt)("inlineCode",{parentName:"p"},"[someshare]")," section like in the above example, run ",(0,s.kt)("inlineCode",{parentName:"p"},"sudo testparm")," to check that the newly included share does not contain syntax errors. Check out ",(0,s.kt)("inlineCode",{parentName:"p"},"man testparm")," for more information about the ",(0,s.kt)("em",{parentName:"p"},"testparm")," utility."),(0,s.kt)("p",null,"If ",(0,s.kt)("em",{parentName:"p"},"testparm")," didn't spot any problems, restart Samba with ",(0,s.kt)("inlineCode",{parentName:"p"},"sudo systemctl restart smb"),", which will activate the new configuration."),(0,s.kt)("h3",{id:"links-to-the-official-samba-documentation"},"Links to the official Samba documentation"),(0,s.kt)("p",null,"Apart from the aforementioned ",(0,s.kt)("inlineCode",{parentName:"p"},"man smb.conf"),", wiki.samba.org is your friend, specifically:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://wiki.samba.org/index.php/Setting_up_a_Share_Using_POSIX_ACLs"},"https://wiki.samba.org/index.php/Setting_up_a_Share_Using_POSIX_ACLs")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://wiki.samba.org/index.php/Setting_up_Samba_as_a_Standalone_Server"},"https://wiki.samba.org/index.php/Setting_up_Samba_as_a_Standalone_Server"))),(0,s.kt)("p",null,"The default Solus Samba configuration is patterned on the above."),(0,s.kt)("h2",{id:"full-manual-control-of-samba-recommended-only-for-experienced-samba-admins"},"Full manual control of Samba (recommended only for experienced Samba admins)"),(0,s.kt)("p",null,"Full manual control of Samba can be achieved by completely bypassing the default Solus Samba configuration."),(0,s.kt)("p",null,"In the ",(0,s.kt)("em",{parentName:"p"},"smbd")," manual page (",(0,s.kt)("inlineCode",{parentName:"p"},"man 8 smbd"),"), it is shown how the compiled-in default config file can be overridden by specifying the ",(0,s.kt)("inlineCode",{parentName:"p"},"--configfile=<somepath>")," flag during startup."),(0,s.kt)("p",null,"To use the traditional ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/samba/smb.conf")," configuration file exclusively (thus bypassing the Solus configuration), edit the ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/sysconfig/samba")," file to look like so:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'## Path:           Network/Samba\n## Description:    Samba process options\n## Type:           string\n## Default:        ""\n## ServiceRestart: samba\nSAMBAOPTIONS=""\n## Type:           string\n## Default:        ""\n## ServiceRestart: smb\nSMBDOPTIONS="--configfile=/etc/samba/smb.conf"\n## Type:           string\n## Default:        ""\n## ServiceRestart: nmb\nNMBDOPTIONS="--configfile=/etc/samba/smb.conf"\n## Type:           string\n## Default:        ""\n## ServiceRestart: winbind\nWINBINDOPTIONS=""\n')))}c.isMDXComponent=!0}}]);