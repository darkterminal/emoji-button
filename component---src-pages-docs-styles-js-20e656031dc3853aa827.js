(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+73+":function(e,t,a){e.exports={layout:"DocLayout-module--layout--2m-0z",main:"DocLayout-module--main--3L6xJ"}},"ATu/":function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a("q1tI"),i=a.n(n),r=a("wZee"),o=a.n(r),l=(a("Veyx"),a("qhky")),s=a("Wbzz"),c=a("3aSG"),u=a.n(c),m=a("IgYj"),d=a.n(m);function p(){return i.a.createElement("nav",{className:d.a.sidebar},i.a.createElement("div",{className:d.a.logo},i.a.createElement(s.a,{to:"/"},i.a.createElement("img",{src:u.a}))),i.a.createElement("h2",null,"Documentation"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(s.a,{activeClassName:d.a.active,to:"/docs"},"Home")),i.a.createElement("li",null,i.a.createElement(s.a,{activeClassName:d.a.active,to:"/docs/styles"},"Styles")),i.a.createElement("li",null,i.a.createElement(s.a,{activeClassName:d.a.active,to:"/docs/custom"},"Custom Emojis")),i.a.createElement("li",null,i.a.createElement(s.a,{activeClassName:d.a.active,to:"/docs/plugins"},"Plugins")),i.a.createElement("li",null,i.a.createElement(s.a,{activeClassName:d.a.active,to:"/docs/themes"},"Themes")),i.a.createElement("li",null,i.a.createElement(s.a,{activeClassName:d.a.active,to:"/docs/recents"},"Recent Emojis")),i.a.createElement("li",null,i.a.createElement(s.a,{activeClassName:d.a.active,to:"/docs/position"},"Positioning")),i.a.createElement("li",null,i.a.createElement(s.a,{activeClassName:d.a.active,to:"/docs/customize"},"Customization")),i.a.createElement("li",null,i.a.createElement(s.a,{activeClassName:d.a.active,to:"/docs/i18n"},"I18N Strings"))),i.a.createElement("h2",null,"Reference"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(s.a,{activeClassName:d.a.active,to:"/docs/api"},"API"))))}var E=a("+73+"),S=a.n(E);function f(e){var t=e.children;return Object(n.useEffect)((function(){o.a.highlightAll()}),[]),i.a.createElement("div",{className:S.a.layout},i.a.createElement(l.a,null,i.a.createElement("title",null,"Emoji Button")),i.a.createElement(p,null),i.a.createElement("main",{className:S.a.main},t))}},ArrC:function(e,t){e.exports="import { EmojiButton } from '@joeattardi/emoji-button';\n\nconst trigger = document.querySelector('.trigger');\n\nconst picker = new EmojiButton({\n  style: 'twemoji'\n});\n\npicker.on('emoji', selection => {\n  // Remove the old image\n  trigger.removeChild(trigger.firstChild);\n\n  // Add the new image for the new Twemoji\n  const img = document.createElement('img');\n  img.src = selection.url;\n  img.alt = selection.emoji;\n  trigger.appendChild(img);\n});\n\ntrigger.addEventListener('click', () => {\n  picker.togglePicker(trigger);\n});\n"},INYr:function(e,t,a){"use strict";var n=a("XKFU"),i=a("CkkT")(6),r="findIndex",o=!0;r in[]&&Array(1)[r]((function(){o=!1})),n(n.P+n.F*o,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(r)},IgYj:function(e,t,a){e.exports={sidebar:"Sidebar-module--sidebar--2OrhV",logo:"Sidebar-module--logo--2CVgv",active:"Sidebar-module--active--1dRAY"}},R1CB:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a("q1tI"),i=a.n(n),r=a("ATu/"),o=a("WDxw"),l=a("RgaQ"),s=a("ArrC"),c=a.n(s);function u(){return i.a.createElement(r.a,null,i.a.createElement("h1",null,"Styles"),i.a.createElement("p",null,"Emoji Button supports two different styles of emojis, controlled by the"," ",i.a.createElement("code",null,"style")," option."),i.a.createElement("h2",null,"Native"),i.a.createElement("p",null,"Uses the native emoji characters built in to the operating system. These are the actual Unicode characters. This is the default setting."),i.a.createElement("div",null,i.a.createElement(o.a,null)),i.a.createElement("h2",null,"Twemoji"),i.a.createElement("p",null,"Uses Twitter's ",i.a.createElement("a",{href:"https://twemoji.twitter.com"},"Twemoji")," ","library. This is a cross-platform emoji library that uses SVG images in place of emoji characters. This is a good choice if you want a consistent emoji style on all platforms."),i.a.createElement("p",null,"To use the Twemoji style, set the ",i.a.createElement("code",null,"style")," property to"," ",i.a.createElement("code",null,"twemoji")," in the options object passed to the"," ",i.a.createElement("code",null,"EmojiButton")," constructor."),i.a.createElement("p",null,"When using the Twemoji style, the argument to the ",i.a.createElement("code",null,"emoji")," ","event has a ",i.a.createElement("code",null,"url")," property, which is the URL of the Twemoji image corresponding to the emoji that was selected. The"," ",i.a.createElement("code",null,"emoji")," property is also present."),i.a.createElement("div",null,i.a.createElement(o.a,{options:{style:"twemoji"},initialImageUrl:"https://twemoji.maxcdn.com/v/13.0.0/svg/1f60e.svg"})),i.a.createElement(l.a,{src:c.a}))}},RgaQ:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("dKDz"),i=a.n(n),r=a("q1tI"),o=a.n(r);function l(e){var t=e.src;return o.a.createElement("pre",null,o.a.createElement("code",{className:"language-javascript",dangerouslySetInnerHTML:{__html:i()(t)}}))}},SLtz:function(e,t,a){e.exports={emojiButton:"Example-module--emoji-button---ihCG"}},Veyx:function(e,t,a){a("Oyvg"),function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",a={environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b\w+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+?)\s*(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:a},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s*(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\](?:\\\\)*)(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\2)[^\\])*\2/,lookbehind:!0,greedy:!0,inside:a}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:a.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}};for(var n=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],i=a.variable[1].inside,r=0;r<n.length;r++)i[n[r]]=e.languages.bash[n[r]];e.languages.shell=e.languages.bash}(Prism)},WDxw:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("q1tI"),i=a.n(n),r=a("yLlt"),o=a("SLtz"),l=a.n(o);function s(e){var t=e.initialEmoji,a=void 0===t?"😎":t,o=e.initialImageUrl,s=e.options,c=Object(n.useRef)(),u=Object(n.useState)(null),m=u[0],d=u[1],p=Object(n.useState)(a),E=p[0],S=p[1],f=Object(n.useState)(o),h=f[0],g=f[1];return Object(n.useEffect)((function(){var e=new r.a(s);e.on("emoji",(function(e){S(e.emoji),g(e.url)})),d(e)}),[]),i.a.createElement("button",{className:l.a.emojiButton,ref:c,onClick:function(){m.togglePicker(c.current)}},h?i.a.createElement("img",{alt:E,src:h}):i.a.createElement("span",null,E))}},dKDz:function(e,t,a){"use strict";var n=/["'&<>]/;e.exports=function(e){var t,a=""+e,i=n.exec(a);if(!i)return a;var r="",o=0,l=0;for(o=i.index;o<a.length;o++){switch(a.charCodeAt(o)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#39;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}l!==o&&(r+=a.substring(l,o)),l=o+1,r+=t}return l!==o?r+a.substring(l,o):r}},dRSK:function(e,t,a){"use strict";var n=a("XKFU"),i=a("CkkT")(5),r=!0;"find"in[]&&Array(1).find((function(){r=!1})),n(n.P+n.F*r,"Array",{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")("find")}}]);
//# sourceMappingURL=component---src-pages-docs-styles-js-20e656031dc3853aa827.js.map