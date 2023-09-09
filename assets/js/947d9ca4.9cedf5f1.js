"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[1944],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5883:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const r={title:"Web Development",summary:"Solus specific help for different web development tools"},i="Web Development",s={unversionedId:"user/software/development/web",id:"user/software/development/web",title:"Web Development",description:"Many of the Solus contributors over the years have been involved in Web development of some kind. We try our best to provide up-to-date and stable versions of all of the most frequently used tools. This list features how to get started with some of the most popular web tools on Solus.",source:"@site/docs/user/software/development/web.md",sourceDirName:"user/software/development",slug:"/user/software/development/web",permalink:"/docs/user/software/development/web",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/software/development/web.md",tags:[],version:"current",lastUpdatedAt:1694290073,formattedLastUpdatedAt:"Sep 9, 2023",frontMatter:{title:"Web Development",summary:"Solus specific help for different web development tools"},sidebar:"userSidebar",previous:{title:"Rust",permalink:"/docs/user/software/development/rust"},next:{title:"Gaming",permalink:"/docs/user/software/gaming/"}},l={},d=[{value:"caddy",id:"caddy",level:2},{value:"Installation",id:"installation",level:3},{value:"Usage",id:"usage",level:3},{value:"Configuration",id:"configuration",level:4},{value:"Management",id:"management",level:4},{value:"httpd (Apache)",id:"httpd-apache",level:2},{value:"Installation",id:"installation-1",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Configuration and DocumentRoot",id:"configuration-and-documentroot",level:4},{value:"PHP Support",id:"php-support",level:4},{value:"Management",id:"management-1",level:4},{value:"nginx",id:"nginx",level:2},{value:"Installation",id:"installation-2",level:3},{value:"Usage",id:"usage-2",level:3},{value:"Configuration",id:"configuration-1",level:4},{value:"Management",id:"management-2",level:4}],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"web-development"},"Web Development"),(0,o.kt)("p",null,"Many of the Solus contributors over the years have been involved in Web development of some kind. We try our best to provide up-to-date and stable versions of all of the most frequently used tools. This list features how to get started with some of the most popular web tools on Solus."),(0,o.kt)("h1",{id:"servers"},"Servers"),(0,o.kt)("h2",{id:"caddy"},"caddy"),(0,o.kt)("p",null,"Solus provides the caddy web server and proxy to users and developers who want to test their web applications before setting them to production."),(0,o.kt)("p",null,"Remember that Solus is not a server operating system: any usage outside local testing is discouraged."),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"caddy is available in the ",(0,o.kt)("inlineCode",{parentName:"p"},"caddy")," package. It can be installed from the ",(0,o.kt)("a",{parentName:"p",href:"/docs/user/package-management/basics#installing-software"},"Software Center")," or via terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg install caddy\n")),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("h4",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"caddy, like many other packages in the Solus repository, is ",(0,o.kt)("a",{parentName:"p",href:"https://clearlinux.org/features/stateless"},"stateless"),". That means the package gets installed with a vendored configuration out-of-the-box which can be customized, or even overridden, by a privileged user."),(0,o.kt)("p",null,"caddy can use any valid configuration by reloading it via the cli. For automatic HTTPS users may need to generate their own certs and to add them at their ",(0,o.kt)("inlineCode",{parentName:"p"},"Caddyfile"),"s. For PHP FastCGI support ",(0,o.kt)("inlineCode",{parentName:"p"},"php")," needs to be also installed and with the ",(0,o.kt)("inlineCode",{parentName:"p"},"php-fpm")," service also running. Reloading with the ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/share/caddy/Caddyfile")," reverts caddy to its original settings. More documentation about caddy is available at their ",(0,o.kt)("a",{parentName:"p",href:"https://caddyserver.com/docs/"},"website"),"."),(0,o.kt)("h4",{id:"management"},"Management"),(0,o.kt)("p",null,"Basic caddy management is done via ",(0,o.kt)("inlineCode",{parentName:"p"},"systemd")," and the cli, using the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable --now caddy # To enable nginx on startup and run it immediately.\ncaddy reload --config /etc/caddy/Caddyfile # To reload caddy with an specified configuration.\nsudo systemctl stop caddy   # To stop caddy.\n")),(0,o.kt)("p",null,"More details about ",(0,o.kt)("inlineCode",{parentName:"p"},"systemctl")," are available ",(0,o.kt)("a",{parentName:"p",href:"https://www.freedesktop.org/software/systemd/man/systemctl.html"},"at this address"),"."),(0,o.kt)("h2",{id:"httpd-apache"},"httpd (Apache)"),(0,o.kt)("p",null,"Solus provides httpd (otherwise referred to as Apache) web server for web developers to test locally before uploading their work."),(0,o.kt)("h3",{id:"installation-1"},"Installation"),(0,o.kt)("p",null,"httpd can be installed either from the Software Center or via terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg install httpd\n")),(0,o.kt)("h3",{id:"usage-1"},"Usage"),(0,o.kt)("h4",{id:"configuration-and-documentroot"},"Configuration and DocumentRoot"),(0,o.kt)("p",null,"Unlike most other operating systems, the httpd provided in Solus is ",(0,o.kt)("a",{parentName:"p",href:"https://clearlinux.org/features/stateless"},"stateless"),", enabling us to provide out-of-the-box vendor configuration via ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/share/defaults/httpd/"),", while still enabling the system administrator (",(0,o.kt)("em",{parentName:"p"},"or a user with the appropriate permissions"),") to override the vendor configuration via the system-wide configuration location, ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc"),"."),(0,o.kt)("p",null,"Therefore, to make modifications to httpd's configuration, you must first create the directories ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/httpd/conf.d/")," and create your own ","*",".conf files, which will override the vendor-provided configuration files."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Modification of the ",(0,o.kt)("strong",{parentName:"p"},"vendor")," configuration files may result in your changes being overwritten during the next update to httpd."),(0,o.kt)("p",null,"By default, httpd's DocumentRoot is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/www/"),", thus files you desire to be accessible via your httpd server must be copied to that location."),(0,o.kt)("h4",{id:"php-support"},"PHP Support"),(0,o.kt)("p",null,"To get PHP working, install it from the Software Center or via terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg install php\n")),(0,o.kt)("p",null,"Because PHP is loaded via FPM and FastCGI and not via an Apache module, to enable PHP you must create a new file, ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/httpd/conf.d/php.conf"),", with the following lines:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'LoadModule proxy_module lib64/httpd/mod_proxy.so\nLoadModule proxy_fcgi_module lib64/httpd/mod_proxy_fcgi.so\n<FilesMatch \\.php$>\nSetHandler "proxy:fcgi://127.0.0.1:9000"\n</FilesMatch>\n<IfModule dir_module>\nDirectoryIndex index.php index.html\n</IfModule>\n')),(0,o.kt)("p",null,"Now, to load the changes, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl restart httpd && sudo systemctl restart php-fpm\n")),(0,o.kt)("h4",{id:"management-1"},"Management"),(0,o.kt)("p",null,"Managing httpd is done via systemd, using the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable httpd # Enable on startup\nsudo systemctl start httpd # Start the web server\nsudo systemctl stop httpd # Stop the web server\n")),(0,o.kt)("h2",{id:"nginx"},"nginx"),(0,o.kt)("p",null,"Solus provides the nginx web server and proxy to users and developers who want to test their web applications before setting them to production."),(0,o.kt)("p",null,"Remember that Solus is not a server operating system: any usage outside the local testing is discouraged."),(0,o.kt)("h3",{id:"installation-2"},"Installation"),(0,o.kt)("p",null,"nginx is available in the ",(0,o.kt)("inlineCode",{parentName:"p"},"nginx")," package. It can be installed from the ",(0,o.kt)("a",{parentName:"p",href:"/docs/user/package-management/basics#installing-software"},"Software Center")," or via terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg install nginx\n")),(0,o.kt)("h3",{id:"usage-2"},"Usage"),(0,o.kt)("h4",{id:"configuration-1"},"Configuration"),(0,o.kt)("p",null,"nginx, as many other packages in the Solus repository, is ",(0,o.kt)("a",{parentName:"p",href:"https://clearlinux.org/features/stateless"},"stateless"),". That means the package gets installed with a vendored configuration out-of-the-box which can be customized, or even overridden, by a privileged user. The default location for nginx config files is in ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/share/defaults/nginx/")),(0,o.kt)("p",null,"nginx on Solus is designed to read users' configuration files from ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/nginx/conf.d/")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/nginx/sites-enabled"),". You may copy the default config files from ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/share/defaults/nginx/")," and modify them to suit your needs. It is also possible to manually create these directories and put personal files in there to customize nginx's behavior. To revert back to the original settings, just delete ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/nginx/"),"."),(0,o.kt)("h4",{id:"management-2"},"Management"),(0,o.kt)("p",null,"Basic nginx management is done via systemd, using the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable --now nginx # To enable nginx on startup and run it immediately.\nsudo systemctl stop nginx   # To stop nginx.\n")),(0,o.kt)("p",null,"More details about ",(0,o.kt)("inlineCode",{parentName:"p"},"systemctl")," are available ",(0,o.kt)("a",{parentName:"p",href:"https://www.freedesktop.org/software/systemd/man/systemctl.html"},"at this address"),"."))}c.isMDXComponent=!0}}]);