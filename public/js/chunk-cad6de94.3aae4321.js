(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cad6de94"],{"150b":function(t,e,a){},"6bfa":function(t,e,a){},9792:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAFoCAMAAABNO5HnAAAABlBMVEX///8AAABVwtN+AAAEhklEQVR42u3d226cQBBFUTry//8yebeEu26ME1j7LRGXYatUOm41xXEAAAAAAAAAAAAAAAAAAAAAwDNY7QMuOIvXnTpvBX/fuvj39PP+UWufgWiiiQbRRBNNwWf4msqJ1dydzc27vLzL2euXnldFax1Eg2iiiaaA6Hfm6GhOvTq+uv77/bhqDl6b3zX1vCpa6yAaRBMNoomWo+9gl6fP4nnR83c5X0VrHSCaaKJBNNH4F3L0Vf6N5ufdvo5onl6b81W01gGiiSYaRBONO3P0VO6M7vfY7c84kzl8JZ/nVNFaB4gmmmgQTTQaObo6xyKbl6N5+u7jl4rWOkA00USDaKLRyNHd9dir9wmz+6Oncv0RzNsqWusA0UQTDaKJxh1xdAXzcvb9vu48j+xckLP5vCpa6yAaRBMNoomWoyMHZnNpN1d/Kl/v/g7o5nAVrXUQDaKJJpoCoh/Fdl9HNr9W5zJX3/ervl+4ivfL5mcVrXUQDaKJBtFEvzNHZ/NxNKcexeucyVxfnf+xitdT0VoH0SCaaBBN9CtY1QPOoePO4R8cnRu9y8/V/K2itQ6iQTTRIJroV5Ce15HNy7u8Gt2fvMu70fydXc9W0VoHiCaaaBBNNH6Il+EDptdps+ftjsvm/GyePlW01gGiiSYaRBONRo6OnhfN3dl9yd2cHs3H3TnXKlrrIBpEEw2iiX4k4fcMq/PoouvW1fXh3X2iebx6fPS+KlrrIBpEE000BUQ/ivL86Giers7VyObb7vuFaSHBvzNUtNZBNIgmGkQTLUd38md1X0Z33/R0vo/mdRWtdRANookG0US/O0dP7Q/OrvNW83X2OzDVfJ39vSpa6yAaRBNNNAVEvytHT+Xg6XXlXS7OXq/63RXr0VoH0SCaaBBNtBzdOTE7h6M6r676QN3vGHZ/l4rWOogG0UQTTQHRcnQmV09/5yS6fjz1wFN5X0VrHUSDaKKJpoDoR7Gdeze9n6Kaa6e+a1jNydncrKK1DqJBNNEgmuhHc9v3DLvfNYleJ5p3714Xtx6tdRANookG0UTL0ZHce5Uro+fdtQ58132P5HVVtNZBNIgmGkQT/WjC3zNcw8cdyTy6gtc/k/m2mtvt69A6iAbRRINoouXoTp78nnOrufMsXm8Ff9cRvE51rp2K1jqIBtFEg2iiX0V6X0f4xGJOrs79iO4rmf4OuP3RWgfRIJpoEE20HH3nDbrzPrJ5uZuvs4LkaK2DaBBNNIgm+lWE595lqebm6v7m6FyR3fp2d3+KitY6iAbRRINool9BeV9H9vjsPuVubp2er9edV62itQ6iQTTRRFNA9KP4yp6Q/Z7f1PdYsvPrrnL5Grq/uXdaB9EgmmgQTbQc/Umyczh2+593eTb7ncVoHs9+30VFax1Eg2iiiaaAaDk6wxnMw9H/P4PnZXNxd+61itY6iAbRRINoouXoSC6eytPR+0T3W3ffK6x+v1FFax1Eg2iiQTTRcvRPeXOKq3XiqXnR2VxfXS83P1rrIBpEEw2iiQYAAAAAAAAAAAAAAAAAAAAA/Mf8BWrfLnPk+2DLAAAAAElFTkSuQmCC"},ab4d:function(t,e,a){"use strict";a.r(e),a.d(e,"render",function(){return X});
/*!
 * github-buttons v2.2.9
 * (c) 2019 なつき
 * @license BSD-2-Clause
 */
var o=window.document,n=(o.location,window.encodeURIComponent),r=(window.decodeURIComponent,window.Math),i=window.HTMLElement,l=window.XMLHttpRequest,c=function(t){return function(e,a,o){var n=t.createElement(e);if(a)for(var r in a){var i=a[r];null!=i&&(null!=n[r]?n[r]=i:n.setAttribute(r,i))}if(o)for(var l=0,c=o.length;l<c;l++){var s=o[l];n.appendChild("string"===typeof s?t.createTextNode(s):s)}return n}},s=c(o),d=function(t){var e;return function(){e||(e=1,t.apply(this,arguments))}},u="github-buttons",f="2.2.9",h="https://unpkg.com/"+u+"@"+f+"/dist/buttons.html",p="https://api.github.com",g=l&&l.prototype&&"withCredentials"in l.prototype,b=g&&i&&i.prototype.attachShadow&&!i.prototype.attachShadow.prototype,m=function(t,e,a){t.addEventListener?t.addEventListener(e,a):t.attachEvent("on"+e,a)},v=function(t,e,a){t.removeEventListener?t.removeEventListener(e,a):t.detachEvent("on"+e,a)},A=function(t,e,a){var o=function(n){return v(t,e,o),a(n)};m(t,e,o)},w=function(t,e,a){var o="readystatechange",n=function(r){if(e.test(t.readyState))return v(t,o,n),a(r)};m(t,o,n)},y=function(t){for(var e={href:t.href,title:t.title,"aria-label":t.getAttribute("aria-label")},a=["icon","text","size","show-count"],o=0,n=a.length;o<n;o++){var r="data-"+a[o];e[r]=t.getAttribute(r)}return null==e["data-text"]&&(e["data-text"]=t.textContent||t.innerText),e},x="body{margin:0}a{color:#24292e;text-decoration:none;outline:0}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor}.widget{display:inline-block;overflow:hidden;font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif;font-size:0;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.btn,.social-count{display:inline-block;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;border:1px solid #c5c9cc;border-radius:0.25em}.btn{background-color:#eff3f6;background-image:-webkit-linear-gradient(top, #fafbfc, #eff3f6 90%);background-image:-moz-linear-gradient(top, #fafbfc, #eff3f6 90%);background-image:linear-gradient(180deg, #fafbfc, #eff3f6 90%);background-position:-1px -1px;background-repeat:repeat-x;background-size:110% 110%;border-color:rgba(27,31,35,0.2);-ms-filter:\"progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFFAFBFC', endColorstr='#FFEEF2F5')\";*filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFFAFBFC', endColorstr='#FFEEF2F5')}.btn:active{background-color:#e9ecef;background-image:none;border-color:#a5a9ac;border-color:rgba(27,31,35,0.35);box-shadow:inset 0 0.15em 0.3em rgba(27,31,35,0.15)}.btn:focus,.btn:hover{background-color:#e6ebf1;background-image:-webkit-linear-gradient(top, #f0f3f6, #e6ebf1 90%);background-image:-moz-linear-gradient(top, #f0f3f6, #e6ebf1 90%);background-image:linear-gradient(180deg, #f0f3f6, #e6ebf1 90%);border-color:#a5a9ac;border-color:rgba(27,31,35,0.35);-ms-filter:\"progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF0F3F6', endColorstr='#FFE5EAF0')\";*filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF0F3F6', endColorstr='#FFE5EAF0')}.social-count{position:relative;margin-left:5px;background-color:#fff}.social-count:focus,.social-count:hover{color:#0366d6}.social-count b,.social-count i{position:absolute;top:50%;left:0;display:block;width:0;height:0;margin:-4px 0 0 -4px;border:solid transparent;border-width:4px 4px 4px 0;_line-height:0;_border-top-color:red !important;_border-bottom-color:red !important;_border-left-color:red !important;_filter:chroma(color=red)}.social-count b{border-right-color:#c5c9cc}.social-count i{margin-left:-3px;border-right-color:#fff}.lg .btn,.lg .social-count{height:16px;padding:5px 10px;font-size:12px;line-height:16px}.lg .social-count{margin-left:6px}.lg .social-count b,.lg .social-count i{margin:-5px 0 0 -5px;border-width:5px 5px 5px 0}.lg .social-count i{margin-left:-4px}\n",C={"mark-github":{width:16,height:16,path:'<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>'},eye:{width:16,height:16,path:'<path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/>'},star:{width:14,height:16,path:'<path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/>'},"repo-forked":{width:10,height:16,path:'<path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/>'},"issue-opened":{width:14,height:16,path:'<path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/>'},"cloud-download":{width:16,height:16,path:'<path fill-rule="evenodd" d="M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z"/>'}},N=function(t,e){return t=(""+t).toLowerCase().replace(/^octicon-/,""),C.hasOwnProperty(t)||(t="mark-github"),'<svg version="1.1" width="'+e*C[t].width/C[t].height+'" height="'+e+'" viewBox="0 0 '+C[t].width+" "+C[t].height+'" class="octicon octicon-'+t+'" aria-hidden="true">'+C[t].path+"</svg>"},k={},E=function(t,e){var a=k[t]||(k[t]=[]);if(!(a.push(e)>1)){var o=d(function(){delete k[t];while(e=a.shift())e.apply(null,arguments)});if(g){var n=new l;m(n,"abort",o),m(n,"error",o),m(n,"load",function(){var t;try{t=JSON.parse(n.responseText)}catch(e){return void o(e)}o(200!==n.status,t)}),n.open("GET",t),n.send()}else{var r=this||window;r._=function(t){r._=null,o(200!==t.meta.status,t.data)};var i=c(r.document)("script",{async:!0,src:t+(/\?/.test(t)?"&":"?")+"callback=_"}),s=function(){r._&&r._({meta:{}})};m(i,"load",s),m(i,"error",s),i.readyState&&w(i,/de|m/,s),r.document.getElementsByTagName("head")[0].appendChild(i)}}},F=function(t,e,a){var o=c(t.ownerDocument),n=t.appendChild(o("style",{type:"text/css"}));n.styleSheet?n.styleSheet.cssText=x:n.appendChild(t.ownerDocument.createTextNode(x));var r=o("a",{className:"btn",href:e.href,target:"_blank",innerHTML:N(e["data-icon"],/^large$/i.test(e["data-size"])?16:14),"aria-label":e["aria-label"]||void 0},[" ",o("span",{},[e["data-text"]||""])]);/\.github\.com$/.test("."+r.hostname)?/^https?:\/\/((gist\.)?github\.com\/[^\/?#]+\/[^\/?#]+\/archive\/|github\.com\/[^\/?#]+\/[^\/?#]+\/releases\/download\/|codeload\.github\.com\/)/.test(r.href)&&(r.target="_top"):(r.href="#",r.target="_self");var i,l,s,d,u=t.appendChild(o("div",{className:"widget"+(/^large$/i.test(e["data-size"])?" lg":"")},[r]));/^(true|1)$/i.test(e["data-show-count"])&&"github.com"===r.hostname&&(i=r.pathname.replace(/^(?!\/)/,"/").match(/^\/([^\/?#]+)(?:\/([^\/?#]+)(?:\/(?:(subscription)|(fork)|(issues)|([^\/?#]+)))?)?(?:[\/?#]|$)/))&&!i[6]?(i[2]?(l="/repos/"+i[1]+"/"+i[2],i[3]?(d="subscribers_count",s="watchers"):i[4]?(d="forks_count",s="network"):i[5]?(d="open_issues_count",s="issues"):(d="stargazers_count",s="stargazers")):(l="/users/"+i[1],s=d="followers"),E.call(this,p+l,function(t,e){if(!t){var n=e[d];u.appendChild(o("a",{className:"social-count",href:e.html_url+"/"+s,target:"_blank","aria-label":n+" "+d.replace(/_count$/,"").replace("_"," ").slice(0,n<2?-1:void 0)+" on GitHub"},[o("b"),o("i"),o("span",{},[(""+n).replace(/\B(?=(\d{3})+(?!\d))/g,",")])]))}a&&a(u)})):a&&a(u)},z=function(t){var e=[];for(var a in t){var o=t[a];null!=o&&e.push(n(a)+"="+n(o))}return e.join("&")},R=window.devicePixelRatio||1,B=function(t){return(R>1?r.ceil(r.round(t*R)/R*2)/2:r.ceil(t))||0},_=function(t){var e=t.offsetWidth,a=t.offsetHeight;if(t.getBoundingClientRect){var o=t.getBoundingClientRect();e=r.max(e,B(o.width)),a=r.max(a,B(o.height))}return[e,a]},T=function(t,e){t.style.width=e[0]+"px",t.style.height=e[1]+"px"},X=function(t,e){if(null!=t&&null!=e)if(t.getAttribute&&(t=y(t)),b){var a=s("span",{title:t.title||void 0});F(a.attachShadow({mode:"closed"}),t,function(){e(a)})}else{var n=s("iframe",{src:"javascript:0",title:t.title||void 0,allowtransparency:!0,scrolling:"no",frameBorder:0});T(n,[0,0]),n.style.border="none";var r=function(){var a,i=n.contentWindow;try{a=i.document.body}catch(l){return void o.body.appendChild(n.parentNode.removeChild(n))}v(n,"load",r),F.call(i,a,t,function(a){var o=_(a);n.parentNode.removeChild(n),A(n,"load",function(){T(n,o)}),n.src=h+"#"+(n.name=z(t)),e(n)})};m(n,"load",r),o.body.appendChild(n)}}},c162:function(t,e,a){"use strict";var o=a("e253"),n=a.n(o);n.a},e253:function(t,e,a){},ea2a:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("html",{attrs:{lang:"en"}},[t._m(0),a("body",[a("b-navbar",{attrs:{toggleable:"md",type:"dark",fixed:"top",variant:"dark"}},[a("b-navbar-brand",{attrs:{href:"#"}},[t._v("SCG Assignment")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-nav-item",[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"home"}}},[t._v("Restaurant Search")])],1),a("b-nav-item",[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"polymial"}}},[t._v("Polymial")])],1),a("b-nav-item",[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"cv"}}},[t._v("CV")])],1),a("b-nav-item",[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"line"}}},[t._v("LINE Project")])],1)],1)],1)],1),t._t("default")],2)])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("head",[a("meta",{attrs:{charset:"utf-8"}}),a("meta",{attrs:{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}}),a("meta",{attrs:{name:"description",content:"scg assignment"}}),a("meta",{attrs:{name:"author",content:"uttapong ruangrit"}}),a("title",[t._v("SCG Assignment")])])}],r={name:"DefaultLayout",data:function(){return{menuCollapsed:!1}},methods:{toggleMenu:function(){this.menuCollapsed=!this.menuCollapsed}}},i=r,l=a("2877"),c=Object(l["a"])(i,o,n,!1,null,null,null);e["a"]=c.exports},f1d8:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-layout",[o("b-container",{attrs:{fluid:""}},[o("b-row",[o("div",{staticClass:"scg-map pad"},[o("b-row",[o("b-col",{staticClass:"scg-container justify-content-left",attrs:{col:"",lg:"12",cols:"12"}},[o("h1",{staticClass:"mb-3"},[t._v("Restaurant search on LINE")]),o("h2",[t._v("How to subscribe")]),o("ol",[o("li",[t._v("\n                Add LINE bot account @459mmroz or by using QRCode.\n                "),o("br"),o("img",{staticClass:"qr",attrs:{src:a("9792")}})]),o("li",[t._v("Type location keyword to search for nearby restaurants.")]),o("li",[o("github-button",{attrs:{href:"https://github.com/uttapong/scg-test-line/archive/master.zip","data-icon":"octicon-cloud-download","data-size":"large","aria-label":"Download uttapong/scg-test-line on GitHub"}},[t._v("Download from Github")])],1)])])],1)],1)])],1)],1)},n=[],r=(a("6bfa"),a("150b"),{name:"github-button",props:["href","ariaLabel","title","dataIcon","dataSize","dataShowCount","dataText"],render:function(t){return t("span",[t("a",{attrs:{href:this.href,"aria-label":this.ariaLabel,title:this.title,"data-icon":this.dataIcon,"data-size":this.dataSize,"data-show-count":this.dataShowCount,"data-text":this.dataText},ref:"_"},this.$slots.default)])},mounted:function(){this.paint()},beforeUpdate:function(){this.reset()},updated:function(){this.paint()},beforeDestroy:function(){this.reset()},methods:{paint:function(){const t=this.$el.appendChild(document.createElement("span"));Promise.resolve().then(a.bind(null,"ab4d")).then(({render:e})=>{e(t.appendChild(this.$refs._),function(e){try{t.parentNode.replaceChild(e,t)}catch(t){}})})},reset:function(){this.$el.replaceChild(this.$refs._,this.$el.lastChild)}}}),i=a("ea2a"),l={components:{GithubButton:r,VLayout:i["a"]}},c=l,s=(a("c162"),a("2877")),d=Object(s["a"])(c,o,n,!1,null,"c5ef6636",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-cad6de94.3aae4321.js.map