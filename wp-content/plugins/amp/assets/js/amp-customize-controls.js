!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t,n){var r=n(4),i=n(5),a=n(6),o=n(8);e.exports=function(e,t){return r(e)||i(e,t)||a(e,t)||o()}},function(e,t){!function(){e.exports=this.lodash}()},function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),a=n(2),o=n(0);function c(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){c=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw a}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}window.ampCustomizeControls=function(e,t){var n={nonAmpCustomizerLink:null,data:{queryVar:"",l10n:{ampVersionNotice:"",rootPanelDescription:""},optionSettings:[],activeThemeSettingImports:{},mimeTypeIcons:{image:"",document:""}}};n.boot=function(r){n.data=r,n.updatePreviewNotice(),n.extendRootDescription(),t.ajaxPrefilter(n.injectAmpIntoAjaxRequests),e.bind("ready",n.updateNonAmpCustomizeLink),e.bind("ready",n.forceAmpPreviewUrl),e.bind("ready",n.addOptionSettingNotices),e.bind("ready",n.addNavMenuPanelNotice),e.bind("ready",n.addActiveThemeSettingsImporting)},n.updatePreviewNotice=function(){var e=t("#customize-info .preview-notice");e.html(n.data.l10n.ampVersionNotice),n.nonAmpCustomizerLink=e.find("a[href]")[0]},n.updateNonAmpCustomizeLink=function(){if(n.nonAmpCustomizerLink instanceof HTMLAnchorElement){var t=function(){var t=new URL(e.previewer.previewUrl());t.searchParams.delete(n.data.queryVar);var r=new URL(n.nonAmpCustomizerLink.href);r.searchParams.set("url",t),n.nonAmpCustomizerLink.href=r.href};t(),e.previewer.previewUrl.bind(t)}},n.extendRootDescription=function(){var e=t("#customize-info .customize-panel-description");if(0===e.find("p").length){var r=t("<p></p>");r.html(e.html()),e.html(""),e.append(r)}var i=t("<p>"+n.data.l10n.rootPanelDescription+"</p>");e.append(i)};var r=["background_position","background_size","background_repeat","background_attachment"],s={display_header_text:"blank",background_attachment:"fixed",background_repeat:"no-repeat"};var u={accent_hue_active:["accent_hue"]};function d(e){var t,r=c(e);try{for(r.s();!(t=r.n()).done;){var i=t.value;i.id in n.data.activeThemeSettingImports&&i.set(n.data.activeThemeSettingImports[i.id])}}catch(e){r.e(e)}finally{r.f()}}function l(t){if(r.includes(t.id)){var i=e("background_preset");i&&i.set("custom")}t.id in s?function(e){e.id in s&&"element"in e&&e.setting.id in n.data.activeThemeSettingImports&&e.element.set(s[e.id]!==n.data.activeThemeSettingImports[e.setting.id])}(t):d(Object.values(t.settings)),function(t){if(t.id in u){var n,r=[],i=c(u[t.id]);try{for(i.s();!(n=i.n()).done;){var a=n.value,o=e(a);o&&r.push(o)}}catch(e){i.e(e)}finally{i.f()}d(r)}}(t),t.extended(e.UploadControl)?function(t){var r=t.setting();if(r&&(!t.params.attachment||t.params.attachment.url!==r)){var i,a=new URL(r),o=["jpg","png","gif","bmp"].includes(a.pathname.substr(-3))?"image":"document",c={id:1,url:a.href,type:o,icon:n.data.mimeTypeIcons[o],title:(i=a.pathname,decodeURIComponent(encodeURIComponent(i).replace(/%(2F|5C)/g,"/").replace(/^.*\//,"")))};"image"===o&&(c.sizes={full:{url:a.href}}),t.frame||t.initFrame(),t.frame.state()||t.frame.setState("library"),t.frame.state().get("selection").set([c]),t.extended(e.BackgroundControl)?e.UploadControl.prototype.select.call(t):t.select(),t.renderContent()}}(t):t.extended(e.HeaderControl)&&function(t){var n=e("header_image_data").get();n&&t.setImageFromURL(n.url,n.attachment_id,n.width,n.height)}(t)}var f=e.Section.extend({isContextuallyActive:function(){return!0},expand:function(){},otherSections:function(){var t=this,n=[];return e.section.each((function(e){e.id!==t.id&&n.push(e)})),n.sort((function(e,t){return e.priority()-t.priority()})),n},renderDetails:function(){var e,n=this.headContainer.find("dl"),r=c(this.otherSections());try{for(r.s();!(e=r.n()).done;){var i,a=e.value,s=[],u=c(a.controls());try{for(u.s();!(i=u.n()).done;){var d=i.value;this.params.controls.has(d)&&s.push(d)}}catch(e){u.e(e)}finally{u.f()}if(s.length){var l=void 0;switch(a.id){case"menu_locations":l=Object(o.__)("Menu Locations","amp");break;default:l=a.params.title}var f=t("<dt></dt>");f.text(l),n.append(f);for(var p=0,m=s;p<m.length;p++){var h=m[p],v=t("<dd></dd>"),y="amp-import-".concat(h.id),g=t("<input type=checkbox checked>");g.attr("id",y),g.val(h.id);var b=t("<label></label>");b.attr("for",y),b.html(h.params.label),v.append(g),v.append(b),n.append(v)}}}}catch(e){r.e(e)}finally{r.f()}},attachEvents:function(){var e=this;this.headContainer.find("button").on("click",(function(){e.importSelectedSettings()}))},importSelectedSettings:function(){var n=0;this.headContainer.find("input[type=checkbox]").each((function(){var r=t(this);r.prop("checked")?(l(e.control(r.val())),r.closest("dd").remove()):n++})),this.headContainer.find("dt").each((function(){var e=t(this);e.next("dd").length||e.remove()})),0===n&&this.active(!1)},ready:function(){e.Section.prototype.ready.call(this),this.renderDetails()}});return e.sectionConstructor.amp_active_theme_settings_import=f,n.addActiveThemeSettingsImporting=function(){for(var t=new Set,r=0,c=Object.entries(n.data.activeThemeSettingImports);r<c.length;r++){var s=i()(c[r],2),d=s[0],l=s[1],p=e(d);p&&!Object(a.isEqual)(p(),l)&&t.add(d)}if(0!==t.size){var m=new Set;if(e.control.each((function(e){for(var n=0,r=Object.values(e.settings);n<r.length;n++){var i=r[n];e.params.label&&((t.has(i.id)||e.id in u&&u[e.id].find((function(e){return t.has(e)})))&&m.add(e))}})),0!==m.size){var h=new f("amp_settings_import",{title:Object(o.__)("Primary Theme Settings","amp"),priority:-1,controls:m});e.section.add(h)}}},n.injectAmpIntoAjaxRequests=function(e){var t=new URL(e.url,window.location.href);t.searchParams.has(n.data.queryVar)||(t.searchParams.append(n.data.queryVar,"1"),e.url=t.href)},n.forceAmpPreviewUrl=function(){var t;e.previewer.previewUrl.validate=(t=e.previewer.previewUrl.validate,function(e){var r=t.call(this,e);if(r){var i=new URL(r);i.searchParams.has(n.data.queryVar)||(i.searchParams.append(n.data.queryVar,"1"),r=i.href)}return r})},n.addOptionSettingNotices=function(){var t,r=c(n.data.optionSettings);try{for(r.s();!(t=r.n()).done;){var i=t.value;e(i,(function(t){var n=new e.Notification("amp_option_setting",{type:"info",message:Object(o.__)("Also applies to non-AMP version of your site.","amp")});t.notifications.add(n.code,n)}))}}catch(e){r.e(e)}finally{r.f()}},n.addNavMenuPanelNotice=function(){e.panel("nav_menus",(function(n){n.notifications.container.length||(n.notifications.container=t('<div class="customize-control-notifications-container"></div>'),n.container.find(".panel-meta:first").append(n.notifications.container));var r=new e.Notification("amp_version",{type:"info",message:Object(o.__)("The menus here are shared with the non-AMP version of your site. Assign existing menus to menu locations in the Reader theme or create new AMP-specific menus.","amp")});n.notifications.add(r.code,r)}))},n}(wp.customize,jQuery)},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw a}}return n}}},function(e,t,n){var r=n(7);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}]);