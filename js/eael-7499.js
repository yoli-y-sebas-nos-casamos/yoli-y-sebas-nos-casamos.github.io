!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}((function(t){"use strict";var s=function(e,i){this.$element=t(e),this.defaults=t.extend({},s.defaults,this.$element.data(),t.isPlainObject(i)?i:{}),this.init()};s.prototype={constructor:s,init:function(){var t=this.$element.html(),s=new Date(this.defaults.date||t);s.getTime()&&(this.content=t,this.date=s,this.find(),this.defaults.autoStart&&this.start())},find:function(){var t=this.$element;this.$days=t.find("[data-days]"),this.$hours=t.find("[data-hours]"),this.$minutes=t.find("[data-minutes]"),this.$seconds=t.find("[data-seconds]"),this.$days.length+this.$hours.length+this.$minutes.length+this.$seconds.length>0&&(this.found=!0)},reset:function(){this.found?(this.output("days"),this.output("hours"),this.output("minutes"),this.output("seconds")):this.output()},ready:function(){var t,s=this.date,e=36e5,i=864e5,n={};return!!s&&((t=s.getTime()-(new Date).getTime())<=0?(this.end(),!1):(n.days=t,n.hours=n.days%i,n.minutes=n.hours%e,n.seconds=n.minutes%6e4,n.milliseconds=n.seconds%1e3,this.days=Math.floor(n.days/i),this.hours=Math.floor(n.hours/e),this.minutes=Math.floor(n.minutes/6e4),this.seconds=Math.floor(n.seconds/1e3),this.deciseconds=Math.floor(n.milliseconds/100),!0))},start:function(){!this.active&&this.ready()&&(this.active=!0,this.reset(),this.autoUpdate=this.defaults.fast?setInterval(t.proxy(this.fastUpdate,this),100):setInterval(t.proxy(this.update,this),1e3))},stop:function(){this.active&&(this.active=!1,clearInterval(this.autoUpdate))},end:function(){this.date&&(this.stop(),this.days=0,this.hours=0,this.minutes=0,this.seconds=0,this.deciseconds=0,this.reset(),this.defaults.end())},destroy:function(){this.date&&(this.stop(),this.$days=null,this.$hours=null,this.$minutes=null,this.$seconds=null,this.$element.empty().html(this.content),this.$element.removeData("countdown"))},fastUpdate:function(){--this.deciseconds>=0?this.output("deciseconds"):(this.deciseconds=9,this.update())},update:function(){--this.seconds>=0?this.output("seconds"):(this.seconds=59,this.output("seconds"),--this.minutes>=0?this.output("minutes"):(this.minutes=59,this.output("minutes"),--this.hours>=0?this.output("hours"):(this.hours=23,this.output("hours"),--this.days>=0?this.output("days"):this.end())))},output:function(t){if(this.found)switch(t){case"deciseconds":this.$seconds.text(this.getSecondsText());break;case"seconds":this.$seconds.text(this.seconds<10?"0"+this.seconds:this.seconds);break;case"minutes":this.$minutes.text(this.minutes<10?"0"+this.minutes:this.minutes);break;case"hours":this.$hours.text(this.hours<10?"0"+this.hours:this.hours);break;case"days":this.$days.text(this.days<10?"0"+this.days:this.days)}else this.$element.empty().html(this.template())},template:function(){return this.defaults.text.replace("%s",this.days).replace("%s",this.hours).replace("%s",this.minutes).replace("%s",this.getSecondsText())},getSecondsText:function(){return this.seconds<10?this.active&&this.defaults.fast?"0"+this.seconds+"."+this.deciseconds:"0"+this.seconds:this.active&&this.defaults.fast?this.seconds+"."+this.deciseconds:this.seconds}},s.defaults={autoStart:!0,date:null,fast:!1,end:t.noop,text:"%s days, %s hours, %s minutes, %s seconds"},s.setDefaults=function(e){t.extend(s.defaults,e)},t.fn.eacountdown=function(e){return this.each((function(){var i=t(this),n=i.data("countdown");n||i.data("countdown",n=new s(this,e)),"string"==typeof e&&t.isFunction(n[e])&&n[e]()}))},t.fn.eacountdown.constructor=s,t.fn.eacountdown.setDefaults=s.setDefaults}));!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}({7:function(e,t){var n=function(e,t){var n=e.find(".eael-countdown-wrapper").eq(0),r=void 0!==n.data("countdown-id")?n.data("countdown-id"):"",o=void 0!==n.data("expire-type")?n.data("expire-type"):"",a=void 0!==n.data("expiry-text")?n.data("expiry-text"):"",i=void 0!==n.data("expiry-title")?n.data("expiry-title"):"",d=void 0!==n.data("redirect-url")?n.data("redirect-url"):"",l=(void 0!==n.data("template")&&n.data("template"),void 0!==n.data("countdown-type")?n.data("countdown-type"):""),u=void 0!==n.data("evergreen-time")?n.data("evergreen-time"):"",c=void 0!==n.data("evergreen-recurring")&&n.data("evergreen-recurring"),p=void 0!==n.data("evergreen-recurring-stop")?n.data("evergreen-recurring-stop"):"";jQuery(document).ready((function(e){"use strict";var t=e("#eael-countdown-"+r),f={end:function(){"text"==o?t.html('<div class="eael-countdown-finish-message"><h4 class="expiry-title">'+i+'</h4><div class="eael-countdown-finish-text">'+a+"</div></div>"):"url"===o?isEditMode?t.html("Your Page will be redirected to given URL (only on Frontend)."):window.location.href=d:"template"===o&&t.html(n.find(".eael-countdown-expiry-template").html())}};if("evergreen"===l){var v="eael_countdown_evergreen_interval_".concat(r),s="eael_countdown_evergreen_time_".concat(r),g=localStorage.getItem(v),m=localStorage.getItem(s);if(null!==m&&null!==g&&g==u||(m=Date.now()+1e3*parseInt(u),localStorage.setItem(v,u.toString()),localStorage.setItem(s,m.toString())),!1!==c){p=new Date(p);var y=36e5*parseFloat(c);parseInt(m)+y<Date.now()&&(m=Date.now()+1e3*parseInt(u),localStorage.setItem(s,m.toString())),p.getTime()<m&&(m=p.getTime())}f.date=new Date(parseInt(m))}t.eacountdown(f)}))};jQuery(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/eael-countdown.default",n)}))}});