(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1798:function(e,t,n){var o,i;i="undefined"!==typeof window?window:this,void 0===(o=function(){return function(e){"use strict";var t,n,o,i="19.02.1",r="javascript_native_web",a=!1,s=!1,c="/i",d=500,l=1e3,u=[],f=[],m={},p=[],g={},_=[],y=null,h=!0,v=0,w=null,k=0,b=0,x=0,L=60,C=20,S=0,E=60,O=10,N=100,T=!0,A=30,M=0,B=!0,I=!1,H={},P={},q=/^(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,J=/(CountlySiteBot|nuhk|Googlebot|GoogleSecurityScanner|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver|bingbot|Google Web Preview|Mediapartners-Google|AdsBot-Google|Baiduspider|Ezooms|YahooSeeker|AltaVista|AVSearch|Mercator|Scooter|InfoSeek|Ultraseek|Lycos|Wget|YandexBot|Yandex|YaDirectFetcher|SiteBot|Exabot|AhrefsBot|MJ12bot|TurnitinBot|magpie-crawler|Nutch Crawler|CMS Crawler|rogerbot|Domnutch|ssearch_bot|XoviBot|netseer|digincore|fr-crawler|wesee|AliasIO|contxbot|PingdomBot|BingPreview|HeadlessChrome)/,D=!0;(e=e||{}).features=["sessions","events","views","scrolls","clicks","forms","crashes","attribution","users","star-rating","location"];for(var R,j={},z=0;z<e.features.length;z++)j[e.features[z]]={};e.init=function(t){if(!a){if(o=ae(),a=!0,u=xe("cly_queue")||[],g={},f=xe("cly_event")||[],m=xe("cly_remote_configs")||{},d=ce("interval",t=t||{},d),l=ce("queue_size",t,l),L=ce("fail_timeout",t,L),C=ce("inactivity_time",t,C),E=ce("session_update",t,E),O=ce("max_events",t,O),N=ce("max_logs",t,N),T=ce("use_session_cookie",t,T),A=ce("session_cookie_timeout",t,A),e.ignore_prefetch=ce("ignore_prefetch",t,!0),e.debug=ce("debug",t,!1),e.app_key=ce("app_key",t,null),e.test_mode=ce("test_mode",t,!1),e.device_id=ce("device_id",t,ne()),e.url=fe(ce("url",t,"")),e.app_version=ce("app_version",t,"0.0"),e.country_code=ce("country_code",t,null),e.city=ce("city",t,null),e.ip_address=ce("ip_address",t,null),e.ignore_bots=ce("ignore_bots",t,!0),e.force_post=ce("force_post",t,!1),e.remote_config=ce("remote_config",t,!1),e.q=e.q||[],e.onload=e.onload||[],e.ignore_visitor=ce("ignore_visitor",t,!1),e.require_consent=ce("require_consent",t,!1),t.ignore_referrers&&Array.isArray(t.ignore_referrers)?_=t.ignore_referrers:e.ignore_referrers&&Array.isArray(e.ignore_referrers)&&(_=e.ignore_referrers),""===e.url&&(re("Please provide server URL"),e.ignore_visitor=!0),xe("cly_ignore")&&(e.ignore_visitor=!0),F(),window.name&&0===window.name.indexOf("cly:"))try{e.passed_data=JSON.parse(window.name.replace("cly:",""))}catch(y){re("Could not parse name",window.name)}else if(location.hash&&0===location.hash.indexOf("#cly:"))try{e.passed_data=JSON.parse(location.hash.replace("#cly:",""))}catch(y){re("Could not parse hash",location.hash)}if(e.passed_data&&e.passed_data.token&&e.passed_data.purpose&&(e.passed_data.token!==xe("cly_old_token")&&(ke(e.passed_data.token),xe("cly_old_token",e.passed_data.token)),"heatmap"===e.passed_data.purpose&&(e.ignore_visitor=!0,Ee(),Ce(e.url+"/views/heatmap.js",Oe))),!e.ignore_visitor){re("Countly initialized"),e.onload.constructor!==Array&&(e.onload=[]),e.q.constructor!==Array&&(e.q=[]),te(),xe("cly_id",e.device_id);var n=0;if(e.utm=e.utm||{source:!0,medium:!0,campaign:!0,term:!0,content:!0},location.search){var i=location.search.substring(1).split("&"),r={},s=!1;for(n=0;n<i.length;n++){var c=i[n].split("=");"cly_id"===c[0]?xe("cly_cmp_id",c[1]):"cly_uid"===c[0]?xe("cly_cmp_uid",c[1]):0===(c[0]+"").indexOf("utm_")&&e.utm[c[0].replace("utm_","")]&&(r[c[0].replace("utm_","")]=c[1],s=!0)}if(s){for(var p in e.utm)r[p]?e.userData.set("utm_"+p,r[p]):e.userData.unset("utm_"+p);e.userData.save()}}$(),e.remote_config&&e.fetch_remote_config(e.remote_config)}}},e.group_features=function(e){if(e)for(var t in e)j[t]?re("Feature name "+t+" is already reserved"):"string"===typeof e[t]?j[t]={features:[e[t]]}:e[t]&&Array.isArray(e[t])&&e[t].length?j[t]={features:e[t]}:re("Incorrect feature list for "+t+" value: "+e[t]);else re("Incorrect features: "+e)},e.check_consent=function(t){return!e.require_consent||(j[t]?!(!j[t]||!j[t].optin):(re("No feature available for "+t),!1))},e.check_any_consent=function(){if(!e.require_consent)return!0;for(var t in j)if(j[t]&&j[t].optin)return!0;return!1},e.add_consent=function(t){if(re("Adding consent for "+t),Array.isArray(t))for(var n=0;n<t.length;n++)e.add_consent(t[n]);else j[t]?j[t].features?(j[t].optin=!0,e.add_consent(j[t].features)):!0!==j[t].optin&&(H[t]=!0,j[t].optin=!0,U(),setTimeout(function(){"sessions"===t&&P.begin_session?(e.begin_session.apply(e,P.begin_session),P.begin_session=null):"views"===t&&P.track_pageview&&(w=null,e.track_pageview.apply(e,P.track_pageview),P.track_pageview=null),P.change_id&&(e.change_id.apply(e,P.change_id),P.change_id=null)},1)):re("No feature available for "+t)},e.remove_consent=function(t){if(re("Removing consent for "+t),Array.isArray(t))for(var n=0;n<t.length;n++)e.remove_consent(t[n]);else j[t]?(j[t].features?e.remove_consent(j[t].features):!1!==j[t].optin&&(H[t]=!1,U()),j[t].optin=!1):re("No feature available for "+t)};var U=function(){R&&(clearTimeout(R),R=null),R=setTimeout(function(){be(H)&&(ee({consent:JSON.stringify(H)}),H={})},1e3)};function V(t){if(!e.ignore_visitor)if(t.key){t.count||(t.count=1);var n=me(t,["key","count","sum","dur","segmentation"]);n.timestamp=se();var o=new Date;n.hour=o.getHours(),n.dow=o.getDay(),f.push(n),xe("cly_event",f),re("Adding event: ",t)}else re("Event must have key property")}e.begin_session=function(n,o){if(e.check_consent("sessions")){if(!s){t=ae(),s=!0,h=!n;var i=xe("cly_session");if(o||!T||!i||parseInt(i)<=ae()){re("Session started");var r={begin_session:1};r.metrics=JSON.stringify(ie()),ee(r)}K()}}else P.begin_session=arguments},e.session_duration=function(t){e.check_consent("sessions")&&s&&(re("Session extended",t),ee({session_duration:t}),K())},e.end_session=function(n,o){e.check_consent("sessions")&&s&&(n=n||ae()-t,Q(),!T||o?(re("Ending session"),ee({end_session:1,session_duration:n})):e.session_duration(n),s=!1)},e.change_id=function(t,n){if(e.device_id!==t){n||(f.length>0&&(ee({events:JSON.stringify(f)}),xe("cly_event",f=[])),e.end_session(null,!0),g={});var o=e.device_id;e.device_id=t,xe("cly_id",e.device_id),re("Changing id"),n?e.check_any_consent()?ee({old_device_id:o}):P.change_id=arguments:e.begin_session(!h,!0),e.remote_config&&(xe("cly_remote_configs",m={}),e.fetch_remote_config(e.remote_config))}},e.add_event=function(t){e.check_consent("events")&&V(t)},e.start_event=function(e){g[e]?re("Timed event with key "+e+" already started"):g[e]=ae()},e.end_event=function(t){"string"==typeof t&&(t={key:t}),t.key?g[t.key]?(t.dur=ae()-g[t.key],e.add_event(t),delete g[t.key]):re("Timed event with key "+t.key+" was not started"):re("Event must have key property")},e.user_details=function(t){e.check_consent("users")&&(re("Adding userdetails: ",t),ee({user_details:JSON.stringify(me(t,["name","username","email","organization","phone","picture","gender","byear","custom"]))}))},e.report_conversion=function(t,n){e.check_consent("attribution")&&(t=t||xe("cly_cmp_id")||"cly_organic",n=n||xe("cly_cmp_uid"),t&&n?ee({campaign_id:t,campaign_user:n}):t&&ee({campaign_id:t}))};var Y={},X=function(t,n,o){e.check_consent("users")&&(Y[t]||(Y[t]={}),"$push"===o||"$pull"===o||"$addToSet"===o?(Y[t][o]||(Y[t][o]=[]),Y[t][o].push(n)):Y[t][o]=n)};function F(){e.ignore_prefetch&&"undefined"!==typeof document.visibilityState&&"prerender"===document.visibilityState&&(e.ignore_visitor=!0),e.ignore_bots&&J.test(navigator.userAgent)&&(e.ignore_visitor=!0)}function G(e){var t=[];if("undefined"!==typeof e.options)for(var n=0;n<e.options.length;n++)e.options[n].selected&&t.push(e.options[n].value);return t.join(", ")}function $(){var t;if("undefined"!==typeof e.onload&&e.onload.length>0){for(t=0;t<e.onload.length;t++)"function"===typeof e.onload[t]&&e.onload[t]();e.onload=[]}}function W(t,n){try{var o=document.createElement("div");o.className="countly-iframe-wrapper",o.id="countly-iframe-wrapper-"+t._id;var r=document.createElement("span");r.className="countly-feedback-close-icon",r.id="countly-feedback-close-icon-"+t._id,r.innerHTML="x";var a=document.createElement("iframe");if(a.name="countly-feedback-iframe",a.id="countly-feedback-iframe",a.src=e.url+"/feedback?widget_id="+t._id+"&app_key="+e.app_key+"&device_id="+e.device_id+"&sdk_version="+i,document.body.appendChild(o),o.appendChild(r),o.appendChild(a),pe(document.getElementById("countly-feedback-close-icon-"+t._id),"click",function(){document.getElementById("countly-iframe-wrapper-"+t._id).style.display="none",document.getElementById("cfbg").style.display="none"}),n){var s=document.createElement("div");s.style.color=t.trigger_font_color<7?"#"+t.trigger_font_color:t.trigger_font_color,s.style.backgroundColor=t.trigger_bg_color.length<7?"#"+t.trigger_bg_color:t.trigger_bg_color,s.className="countly-feedback-sticker "+t.trigger_position,s.id="countly-feedback-sticker-"+t._id,s.innerHTML='<svg id="feedback-sticker-svg" aria-hidden="true" data-prefix="far" data-icon="grin" class="svg-inline--fa fa-grin fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path id="smileyPathInStickerSvg" fill="white" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm105.6-151.4c-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.9-3.1-19.4 5.4-17.7 15.3 7.9 47.1 71.3 80 123.3 80s115.3-32.9 123.3-80c1.6-9.8-7.7-18.4-17.7-15.3zM168 240c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z"></path></svg> '+t.trigger_button_text,document.body.appendChild(s);var c=document.getElementById("smileyPathInStickerSvg");c&&(c.style.fill=t.trigger_font_color<7?"#"+t.trigger_font_color:t.trigger_font_color),pe(document.getElementById("countly-feedback-sticker-"+t._id),"click",function(){document.getElementById("countly-iframe-wrapper-"+t._id).style.display="block",document.getElementById("cfbg").style.display="block"})}else document.getElementById("countly-iframe-wrapper-"+t._id).style.display="block",document.getElementById("cfbg").style.display="block"}catch(d){re("Somethings went wrong while element injecting process: "+d)}}function Q(){if(w){var t={name:w,segment:n};e.check_consent("views")&&V({key:"[CLY]_view",dur:D?ae()-k:b,segmentation:t}),w=null}}function K(){T&&xe("cly_session",ae()+60*A)}function Z(t){t.app_key=e.app_key,t.device_id=e.device_id,t.sdk_name=r,t.sdk_version=i,e.check_consent("location")?(e.country_code&&(t.country_code=e.country_code),e.city&&(t.city=e.city),null!==e.ip_address&&(t.ip_address=e.ip_address)):t.location="",t.timestamp=se();var n=new Date;t.hour=n.getHours(),t.dow=n.getDay()}function ee(t){e.ignore_visitor||(e.app_key&&e.device_id?(Z(t),u.length>l&&u.shift(),u.push(t),xe("cly_queue",u,!0)):re("app_key or device_id is missing"))}function te(){if(e.test_mode||e.ignore_visitor)I=!1;else{I=!0,$();var n=0;if("undefined"!==typeof e.q&&e.q.length>0){var o,i=e.q;for(e.q=[],n=0;n<i.length;n++)if(re("Processing queued call",o=i[n]),"function"===typeof o)o();else if(Array.isArray(o)&&o.length>0)if("undefined"!==typeof e[o[0]])e[o[0]].apply(null,o.slice(1));else{var r=o[0].replace("userData.","");"undefined"!==typeof e.userData[r]&&e.userData[r].apply(null,o.slice(1))}}if(s&&h&&D){var a=ae();a-t>E&&(e.session_duration(a-t),t=a)}if(f.length>0){if(f.length<=O)ee({events:JSON.stringify(f)}),f=[];else{var l=f.splice(0,O);ee({events:JSON.stringify(l)})}xe("cly_event",f)}if(u.length>0&&B&&ae()>x){B=!1;var m=u.shift();be(H)&&(R&&(clearTimeout(R),R=null),m.consent=JSON.stringify(H),H={}),re("Processing request",m),le(e.url+c,m,function(e,t){re("Request Finished",t,e),e&&(u.unshift(t),x=ae()+L),xe("cly_queue",u,!0),B=!0})}setTimeout(te,d)}}function ne(){return xe("cly_id")||oe()}function oe(){var e=(new Date).getTime(),t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?n:3&n|8).toString(16)});return t}function ie(){var t={};if(t._app_version=e.app_version,t._ua=navigator.userAgent,screen.width){var n=screen.width?parseInt(screen.width):0,o=screen.height?parseInt(screen.height):0;if(0!==n&&0!==o){var i=!!navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform);if(i&&window.devicePixelRatio)n=Math.round(n*window.devicePixelRatio),o=Math.round(o*window.devicePixelRatio);else if(90===Math.abs(window.orientation)){var r=n;n=o,o=r}t._resolution=n+"x"+o}}window.devicePixelRatio&&(t._density=window.devicePixelRatio);var a=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage;if("undefined"!==typeof a&&(t._locale=a),"undefined"!==typeof document.referrer&&document.referrer.length){var s=q.exec(document.referrer);if(s&&s[11]&&s[11]!==window.location.hostname){var c=!1;if(_&&_.length)for(var d=0;d<_.length;d++)try{var l=new RegExp(_[d]);if(l.test(document.referrer)){re("Ignored:",document.referrer),c=!0;break}}catch(u){re("Problem with regex",_[d])}c||(t._store=document.referrer)}}return re("Got metrics",t),t}function re(){e.debug&&"undefined"!==typeof console&&(arguments[1]&&"object"==typeof arguments[1]&&(arguments[1]=JSON.stringify(arguments[1])),console.log(Array.prototype.slice.call(arguments).join("\n")))}function ae(){return Math.floor((new Date).getTime()/1e3)}function se(){var e=(new Date).getTime();return M>=e?M++:M=e,M}function ce(t,n,o){return"undefined"!==typeof n[t]?n[t]:"undefined"!==typeof e[t]?e[t]:o}function de(t,n,i){if(e.check_consent("crashes")&&t){i=i||y;var r="";"object"===typeof t?"undefined"!==typeof t.stack?r=t.stack:("undefined"!==typeof t.name&&(r+=t.name+":"),"undefined"!==typeof t.message&&(r+=t.message+"\n"),"undefined"!==typeof t.fileName&&(r+="in "+t.fileName+"\n"),"undefined"!==typeof t.lineNumber&&(r+="on "+t.lineNumber),"undefined"!==typeof t.columnNumber&&(r+=":"+t.columnNumber)):r=t+"",n=!!n;var a=ie(),s={_resolution:a._resolution,_error:r,_app_version:a._app_version,_run:ae()-o,_not_os_specific:!0},c=navigator.battery||navigator.webkitBattery||navigator.mozBattery||navigator.msBattery;c&&(s._bat=Math.floor(100*c.level)),"undefined"!==typeof navigator.onLine&&(s._online=!!navigator.onLine),s._background=!document.hasFocus(),p.length>0&&(s._logs=p.join("\n")),p=[],s._nonfatal=n,s._view=(window.location.pathname||"")+(window.location.search||"")+(window.location.hash||""),"undefined"!==typeof i&&(s._custom=i);try{var d=document.createElement("canvas"),l=d.getContext("experimental-webgl");s._opengl=l.getParameter(l.VERSION)}catch(u){}ee({crash:JSON.stringify(s)})}}function le(t,n,o){try{re("Sending XML HTTP request");var i=window.XMLHttpRequest?new window.XMLHttpRequest:window.ActiveXObject?new window.ActiveXObject("Microsoft.XMLHTTP"):null,r=ue(n=n||{}),a="GET";(e.force_post||r.length>=2e3)&&(a="POST"),"GET"===a?i.open("GET",t+"?"+r,!0):(i.open("POST",t,!0),i.setRequestHeader("Content-type","application/x-www-form-urlencoded")),i.onreadystatechange=function(){4===this.readyState&&this.status>=200&&this.status<300?"function"===typeof o&&o(!1,n,this.responseText):4===this.readyState&&(re("Failed Server XML HTTP request",this.status),"function"===typeof o&&o(!0,n))},"GET"===a?i.send():i.send(r)}catch(s){re("Failed XML HTTP request",s),"function"===typeof o&&o(!0,n)}}function ue(e){var t=[];for(var n in e)t.push(n+"="+encodeURIComponent(e[n]));return t.join("&")}function fe(e){return"/"===e.substr(e.length-1)?e.substr(0,e.length-1):e}function me(e,t){for(var n,o={},i=0;i<t.length;i++)n=t[i],"undefined"!==typeof e[n]&&(o[n]=e[n]);return o}e.userData={set:function(e,t){Y[e]=t},unset:function(e){Y[e]=""},set_once:function(e,t){X(e,t,"$setOnce")},increment:function(e){X(e,1,"$inc")},increment_by:function(e,t){X(e,t,"$inc")},multiply:function(e,t){X(e,t,"$mul")},max:function(e,t){X(e,t,"$max")},min:function(e,t){X(e,t,"$min")},push:function(e,t){X(e,t,"$push")},push_unique:function(e,t){X(e,t,"$addToSet")},pull:function(e,t){X(e,t,"$pull")},save:function(){e.check_consent("users")&&ee({user_details:JSON.stringify({custom:Y})}),Y={}}},e.track_errors=function(e){y=e,window.onerror=function(e,t,n,o,i){if("undefined"!==typeof i)de(i,!1);else{var r="";"undefined"!==typeof e&&(r+=e+"\n"),"undefined"!==typeof t&&(r+="at "+t),"undefined"!==typeof n&&(r+=":"+n),"undefined"!==typeof(o=o||window.event&&window.event.errorCharacter)&&(r+=":"+o),r+="\n";try{for(var a=[],s=arguments.callee.caller;s;)a.push(s.name),s=s.caller;r+=a.join("\n")}catch(c){}de(r,!1)}},window.addEventListener("unhandledrejection",function(e){de(new Error("Unhandled rejection (reason: "+(e.reason&&e.reason.stack?e.reason.stack:e.reason)+")."),!0)})},e.log_error=function(e,t){de(e,!0,t)},e.add_log=function(t){e.check_consent("crashes")&&(p.length>N&&p.shift(),p.push(t))},e.fetch_remote_config=function(t,n,o){if(e.check_any_consent()){var i={method:"fetch_remote_config"};e.check_consent("sessions")&&(i.metrics=JSON.stringify(ie())),t&&(o||"function"!==typeof t?Array.isArray(t)&&t.length&&(i.keys=JSON.stringify(t)):(o=t,t=null)),n&&(o||"function"!==typeof n?Array.isArray(n)&&n.length&&(i.omit_keys=JSON.stringify(n)):(o=n,n=null)),Z(i),le(e.url+"/o/sdk",i,function(e,t,n){try{var r=JSON.parse(n);if(i.keys||i.omit_keys)for(var a in r)m[a]=r[a];else m=r;xe("cly_remote_configs",m)}catch(s){}"function"===typeof o&&o(e,m)})}},e.get_remote_config=function(e){return"undefined"!==typeof e?m[e]:m},e.stop_time=function(){D&&(D=!1,v=ae()-t,b=ae()-k)},e.start_time=function(){D||(D=!0,t=ae()-v,k=ae()-b,b=0)},e.track_sessions=function(){e.begin_session(),e.start_time(),pe(window,"beforeunload",function(){e.end_session()}),pe(window,"unload",function(){e.end_session()});var t="hidden";function n(){document[t]?e.stop_time():e.start_time()}function o(){S>=C&&e.start_time(),S=0}t in document?document.addEventListener("visibilitychange",n):(t="mozHidden")in document?document.addEventListener("mozvisibilitychange",n):(t="webkitHidden")in document?document.addEventListener("webkitvisibilitychange",n):(t="msHidden")in document?document.addEventListener("msvisibilitychange",n):"onfocusin"in document?(pe(window,"focusin",function(){e.start_time()}),pe(window,"focusout",function(){e.stop_time()})):(pe(window,"focus",function(){e.start_time()}),pe(window,"blur",function(){e.stop_time()}),pe(window,"pageshow",function(){e.start_time()}),pe(window,"pagehide",function(){e.stop_time()})),pe(window,"mousemove",o),pe(window,"click",o),pe(window,"keydown",o),pe(window,"scroll",o),setInterval(function(){++S>=C&&e.stop_time()},6e4)},e.track_pageview=function(t,n){if(Q(),t&&Array.isArray(t)&&(n=t,t=null),t||(t=e.getViewName?e.getViewName():window.location.pathname),n&&n.length)for(var o=0;o<n.length;o++)try{if(new RegExp(n[o]).test(t))return void re("Ignored:",t)}catch(a){re("Problem with regex",n[o])}w=t,k=ae();var i={name:t,visit:1,domain:window.location.hostname,view:e.getViewUrl?e.getViewUrl():window.location.pathname};if("undefined"!==typeof document.referrer&&document.referrer.length){var r=q.exec(document.referrer);r&&r[11]&&r[11]!==window.location.hostname&&(i.start=1)}e.check_consent("views")?V({key:"[CLY]_view",segmentation:i}):P.track_pageview=arguments},e.track_view=function(t,n){e.track_pageview(t,n)},e.track_clicks=function(t){t=t||document;var n=!0;pe(t,"click",function(t){if(n){if(n=!1,ye(t),"undefined"!==typeof t.pageX&&"undefined"!==typeof t.pageY){var o=he(),i=ve();e.check_consent("clicks")&&V({key:"[CLY]_action",segmentation:{type:"click",x:t.pageX,y:t.pageY,width:i,height:o,domain:window.location.hostname,view:e.getViewUrl?e.getViewUrl():window.location.pathname}})}setTimeout(function(){n=!0},1e3)}})},e.track_scrolls=function(t){t=t||window;var n=!0,o=0;function i(){if(n){n=!1;var t=he(),i=ve(),r=we();e.check_consent("scrolls")&&V({key:"[CLY]_action",segmentation:{type:"scroll",y:o+r,width:i,height:t,domain:window.location.hostname,view:e.getViewUrl?e.getViewUrl():window.location.pathname}})}}pe(t,"scroll",function(){o=Math.max(o,window.scrollY,document.body.scrollTop,document.documentElement.scrollTop)}),pe(t,"beforeunload",i),pe(t,"unload",i)},e.track_links=function(t){t=t||document,pe(t,"click",function(t){var n=ge(t).closest("a");n&&(ye(t),e.check_consent("clicks")&&V({key:"linkClick",segmentation:{href:n.href,text:n.innerText,id:n.id,view:e.getViewUrl?e.getViewUrl():window.location.pathname}}))})},e.track_forms=function(t,n){function o(e){return e.name||e.id||e.type||e.nodeName}t=t||document,pe(t,"submit",function(t){var i,r=ge(t),a={id:r.id,name:r.name,action:r.action,method:r.method,view:e.getViewUrl?e.getViewUrl():window.location.pathname};if("undefined"!==typeof r.elements){for(var s=0;s<r.elements.length;s++)(i=r.elements[s])&&"password"!==i.type&&("undefined"===typeof a["input:"+o(i)]&&(a["input:"+o(i)]=[]),"select"===i.nodeName.toLowerCase()?"undefined"!==typeof i.multiple?a["input:"+o(i)].push(G(i)):a["input:"+o(i)].push(i.options[i.selectedIndex].value):"input"===i.nodeName.toLowerCase()?"undefined"!==typeof i.type?"checkbox"===i.type.toLowerCase()||"radio"===i.type.toLowerCase()?i.checked&&a["input:"+o(i)].push(i.value):("hidden"!==i.type.toLowerCase()||n)&&a["input:"+o(i)].push(i.value):a["input:"+o(i)].push(i.value):"textarea"===i.nodeName.toLowerCase()?a["input:"+o(i)].push(i.value):"undefined"!==typeof i.value&&a["input:"+o(i)].push(i.value));for(var c in a)"undefined"!=typeof a[c].join&&(a[c]=a[c].join(", "))}e.check_consent("forms")&&V({key:"formSubmit",segmentation:a})})},e.collect_from_forms=function(t,n){t=t||document,pe(t,"submit",function(o){var i,r=ge(o),a={},s=!1;if("undefined"!==typeof r.elements){var c,d,l={},u=t.getElementsByTagName("LABEL");for(c=0;c<u.length;c++)u[c].htmlFor&&""!==u[c].htmlFor&&(l[u[c].htmlFor]=u[c].innerText||u[c].textContent||u[c].innerHTML);for(c=0;c<r.elements.length;c++)if((i=r.elements[c])&&"password"!==i.type&&-1===i.className.indexOf("cly_user_ignore")){var f="";if("select"===i.nodeName.toLowerCase()?f="undefined"!==typeof i.multiple?G(i):i.options[i.selectedIndex].value:"input"===i.nodeName.toLowerCase()?"undefined"===typeof i.type||"checkbox"!==i.type.toLowerCase()&&"radio"!==i.type.toLowerCase()?f=i.value:i.checked&&(f=i.value):"textarea"===i.nodeName.toLowerCase()?f=i.value:"undefined"!==typeof i.value&&(f=i.value),i.className&&-1!==i.className.indexOf("cly_user_")){var m=i.className.split(" ");for(d=0;d<m.length;d++)if(0===m[d].indexOf("cly_user_")){a[m[d].replace("cly_user_","")]=f,s=!0;break}}else i.type&&"email"===i.type.toLowerCase()||i.name&&-1!==i.name.toLowerCase().indexOf("email")||i.id&&-1!==i.id.toLowerCase().indexOf("email")||i.id&&l[i.id]&&-1!==l[i.id].toLowerCase().indexOf("email")||/[^@\s]+@[^@\s]+\.[^@\s]+/.test(f)?(a.email||(a.email=f),s=!0):i.name&&-1!==i.name.toLowerCase().indexOf("username")||i.id&&-1!==i.id.toLowerCase().indexOf("username")||i.id&&l[i.id]&&-1!==l[i.id].toLowerCase().indexOf("username")?(a.username||(a.username=f),s=!0):i.name&&(-1!==i.name.toLowerCase().indexOf("tel")||-1!==i.name.toLowerCase().indexOf("phone")||-1!==i.name.toLowerCase().indexOf("number"))||i.id&&(-1!==i.id.toLowerCase().indexOf("tel")||-1!==i.id.toLowerCase().indexOf("phone")||-1!==i.id.toLowerCase().indexOf("number"))||i.id&&l[i.id]&&(-1!==l[i.id].toLowerCase().indexOf("tel")||-1!==l[i.id].toLowerCase().indexOf("phone")||-1!==l[i.id].toLowerCase().indexOf("number"))?(a.phone||(a.phone=f),s=!0):i.name&&(-1!==i.name.toLowerCase().indexOf("org")||-1!==i.name.toLowerCase().indexOf("company"))||i.id&&(-1!==i.id.toLowerCase().indexOf("org")||-1!==i.id.toLowerCase().indexOf("company"))||i.id&&l[i.id]&&(-1!==l[i.id].toLowerCase().indexOf("org")||-1!==l[i.id].toLowerCase().indexOf("company"))?(a.organization||(a.organization=f),s=!0):(i.name&&-1!==i.name.toLowerCase().indexOf("name")||i.id&&-1!==i.id.toLowerCase().indexOf("name")||i.id&&l[i.id]&&-1!==l[i.id].toLowerCase().indexOf("name"))&&(a.name||(a.name=""),a.name+=f+" ",s=!0)}}s&&(re("Gathered user data",a),n?e.user_details({custom:a}):e.user_details(a))})},e.collect_from_facebook=function(t){FB&&FB.api&&FB.api("/me",function(n){var o={};if(n.name&&(o.name=n.name),n.email&&(o.email=n.email),"male"===n.gender?o.gender="M":"female"===n.gender&&(o.gender="F"),n.birthday){var i=n.birthday.split("/").pop();i&&4===i.length&&(o.byear=i)}if(n.work&&n.work[0]&&n.work[0].employer&&n.work[0].employer.name&&(o.organization=n.work[0].employer.name),t)for(var r in o.custom={},t){for(var a=t[r].split("."),s=n,c=0;c<a.length&&"undefined"!==typeof(s=s[a[c]]);c++);"undefined"!==typeof s&&(o.custom[r]=s)}e.user_details(o)})},e.opt_out=function(){e.ignore_visitor=!0,xe("cly_ignore",!0)},e.opt_in=function(){xe("cly_ignore",!1),e.ignore_visitor=!1,F(),e.ignore_visitor||I||te()},e.show_feedback_popup=function(t){le(e.url+"/o/feedback/widget",{widget_id:t},function(e,t,n){e&&re("Error occurred",e);try{W(JSON.parse(n),!1)}catch(o){re("JSON parse failed: "+o)}})},e.enable_feedback=function(t){Se(e.url+"/star-rating/stylesheets/countly-feedback-web.css");var n=t.popups||t.widgets;n.length>0?(document.body.innerHTML+='<div id="cfbg"></div>',le(e.url+"/o/feedback/multiple-widgets-by-id",{widgets:JSON.stringify(n)},function(e,t,n){e&&re("Errors occurred:",e);try{for(var o=JSON.parse(n),i=0;i<o.length;i++)if("true"===o[i].is_active&&o[i].target_devices[_e.device])if(o[i].hide_sticker="true"===o[i].hide_sticker,"all"!==o[i].target_page||o[i].hide_sticker)for(var r=o[i].target_pages,a=0;a<r.length;a++)r[a]!==window.location.pathname||o[i].hide_sticker||W(o[i],!0);else W(o[i],!0)}catch(s){re("JSON parse error: "+s)}})):re("You should provide at least one widget id as param. Read documentation for more detail. https://resources.count.ly/plugins/feedback")},Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;for(e=e.toUpperCase();t;){if(t.nodeName.toUpperCase()===e)return t;t=t.parentElement}});var pe=function(e,t,n){"undefined"!==typeof e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)},ge=function(e){return e?"undefined"!==typeof e.target?e.target:e.srcElement:window.event.srcElement},_e=function(){var e=navigator.userAgent.toLowerCase(),t=function(t){return t&&(e=(t+"").toLowerCase()),/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(e)?"tablet":/(mobi|ipod|phone|blackberry|opera mini|fennec|minimo|symbian|psp|nintendo ds|archos|skyfire|puffin|blazer|bolt|gobrowser|iris|maemo|semc|teashark|uzard)/.test(e)?"phone":"desktop"};return{device:t(),detect:t,isMobile:"desktop"!==t(),userAgent:e}}();function ye(e){return"undefined"==typeof e.pageY&&"number"==typeof e.clientX&&document.documentElement&&(e.pageX=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,e.pageY=e.clientY+document.body.scrollTop+document.documentElement.scrollTop),e}function he(){var e=document;return Math.max(Math.max(e.body.scrollHeight,e.documentElement.scrollHeight),Math.max(e.body.offsetHeight,e.documentElement.offsetHeight),Math.max(e.body.clientHeight,e.documentElement.clientHeight))}function ve(){var e=document;return Math.max(Math.max(e.body.scrollWidth,e.documentElement.scrollWidth),Math.max(e.body.offsetWidth,e.documentElement.offsetWidth),Math.max(e.body.clientWidth,e.documentElement.clientWidth))}function we(){var e=document;return Math.min(Math.min(e.body.clientHeight,e.documentElement.clientHeight),Math.min(e.body.offsetHeight,e.documentElement.offsetHeight),window.innerHeight)}function ke(e){xe("cly_token",e)}function be(e){if(e)for(var t in e)if(e.hasOwnProperty(t))return!0;return!1}var xe=function(e,t,n){n=n||!1;var o,i=!1;i=!0;try{"undefined"!==typeof localStorage&&localStorage.setItem("testLocal",!0)}catch(a){i=!1}if("undefined"!==typeof t&&null!==t&&("object"===typeof t&&(t=JSON.stringify(t)),i?localStorage.setItem(e,t):n||r(e,t,30)),"undefined"===typeof t){i?o=localStorage.getItem(e):n||(o=function(e){for(var t=e+"=",n=document.cookie.split(";"),o=0,i=n.length;o<i;o++){for(var r=n[o];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return null}(e));try{o=JSON.parse(o)}catch(a){}return o}function r(e,t,n){var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3);var i="; expires="+o.toGMTString();document.cookie=e+"="+t+i+"; path=/"}null===t&&(i?localStorage.removeItem(e):n||r(e,"",-1))};function Le(e,t,n,o,i,r){var a,s=document.createElement(e);s.setAttribute(t,n),s.setAttribute(o,i),r&&(s.onreadystatechange=s.onload=function(){a||r(),a=!0}),document.getElementsByTagName("head")[0].appendChild(s)}function Ce(e,t){Le("script","type","text/javascript","src",e,t)}function Se(e,t){Le("link","rel","stylesheet","href",e,t)}function Ee(){var e=document.getElementById("cly-loader");if(!e){re("setting up loader");var t="#cly-loader {height: 4px; width: 100%; position: absolute; z-index: 99999; overflow: hidden; background-color: #fff; top:0px; left:0px;}#cly-loader:before{display: block; position: absolute; content: ''; left: -200px; width: 200px; height: 4px; background-color: #2EB52B; animation: cly-loading 2s linear infinite;}@keyframes cly-loading { from {left: -200px; width: 30%;} 50% {width: 30%;} 70% {width: 70%;} 80% { left: 50%;} 95% {left: 120%;} to {left: 100%;}}",n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t)),n.appendChild(o),(e=document.createElement("div")).setAttribute("id","cly-loader"),document.body.appendChild(e)}e.style.display="block"}function Oe(){var e=document.getElementById("cly-loader");e&&(e.style.display="none")}return e._internals={store:xe,getDocWidth:ve,getDocHeight:he,getViewportHeight:we,get_page_coord:ye,get_event_target:ge,add_event:pe,getProperties:me,stripTrailingSlash:fe,prepareParams:ue,sendXmlHttpRequest:le,recordError:de,getMsTimestamp:se,getTimestamp:ae,log:re,getMetrics:ie,generateUUID:oe,getId:ne,heartBeat:te,toRequestQueue:ee,reportViewDuration:Q,loadJS:Ce,loadCSS:Se,getLastView:function(){return w},setToken:ke,getToken:function(){var e=xe("cly_token");return xe("cly_token",null),e},showLoader:Ee,hideLoader:Oe,add_cly_events:V,detect_device:_e,getRequestQueue:function(){return u},getEventQueue:function(){return f}},e}(i.Countly)}.apply(t,[]))||(e.exports=o)}}]);
//# sourceMappingURL=15.92965cec.chunk.js.map