webpackJsonp([1],{50:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a(2),c=n(s),u=a(54),f=n(u),d=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.onClick=function(){window.location.reload()},a.state={items:[{prop:"duration",desc:"Animation duration",type:"string",value:"-"},{prop:"delay",desc:"Animation delay",type:"string",value:"-"},{prop:"iteration",desc:"Animation iteration count",type:"string",value:"-"},{prop:"animation",desc:"Animation name",type:"string",value:"-"},{prop:"scroll",desc:"Listen and react to scroll event",type:"boolean",value:"true"},{prop:"resize",desc:"Listen and react to resize event",type:"boolean",value:"true"},{prop:"animateClass",desc:"Animation css class",type:"string",value:"animated"},{prop:"offset",desc:"Distance to the element when triggering the animation",type:"number|array",value:"0"},{prop:"overflow",desc:"If your components inside a overflow container, set this to true",type:"boolean",value:"false"},{prop:"disabled",desc:"Disable the animation",type:"boolean",value:"false"},{prop:"callback",desc:"The callback is fired every time an animation is stoped",type:"function",value:"-"}]},a}return o(t,e),i(t,[{key:"render",value:function(){var e=this.state.items;return c.default.createElement("section",{className:"col-md-8 col-md-offset-2 card-wrapper"},c.default.createElement("div",{className:"card background-card"},c.default.createElement("button",{type:"button",className:"btn btn-default btn-refresh",onClick:this.onClick},"Refresh"),c.default.createElement("h4",null,"Example"),c.default.createElement("hr",null),c.default.createElement("section",{className:"mb-50"},c.default.createElement("h5",{className:"box-title"},"Normal"),c.default.createElement("div",{className:"container-white"},c.default.createElement("div",{className:"circles"},c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col-sm-4"},c.default.createElement(f.default,{delay:"0.5s",animation:"rollIn"},c.default.createElement("p",{className:"circle bg-green"},"such easy"))),c.default.createElement("div",{className:"col-sm-4 text-center"},c.default.createElement(f.default,{delay:"0.5s",animation:"bounceInDown"},c.default.createElement("img",{src:"assets/images/wow-1.gif",className:"wow-image"}))),c.default.createElement("div",{className:"col-sm-4"},c.default.createElement(f.default,{delay:"0.5s",animation:"lightSpeedIn"},c.default.createElement("p",{className:"circle bg-yellow"},"very JS")))),c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col-sm-4 text-center"},c.default.createElement(f.default,{animation:"rollIn"},c.default.createElement("img",{src:"assets/images/wow-3.gif",className:"wow-image"}))),c.default.createElement("div",{className:"col-sm-4"},c.default.createElement(f.default,{iteration:"5",duration:"0.15s",animation:"pulse"},c.default.createElement("p",{className:"circle bg-blue"},"React-WOW"))),c.default.createElement("div",{className:"col-sm-4 text-center"},c.default.createElement(f.default,{animation:"bounceInRight"},c.default.createElement("img",{src:"assets/images/wow-12.gif",className:"wow-image"})))),c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col-sm-4"},c.default.createElement(f.default,{animation:"bounceInLeft"},c.default.createElement("p",{className:"circle bg-red"},"react"))),c.default.createElement("div",{className:"col-sm-4 text-center"},c.default.createElement(f.default,{animation:"flipInX"},c.default.createElement("img",{src:"assets/images/wow-2.gif",className:"wow-image"}))),c.default.createElement("div",{className:"col-sm-4"},c.default.createElement(f.default,{animation:"bounceInRight"},c.default.createElement("p",{className:"circle bg-purple"},"many anims")))))),c.default.createElement("h5",{className:"box-title"},"Using offset"),c.default.createElement("div",{className:"container-white"},c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col-sm-4 text-center"},c.default.createElement(f.default,{offset:50,animation:"rollIn"},c.default.createElement("img",{src:"assets/images/wow-5.gif",className:"wow-image"}))),c.default.createElement("div",{className:"col-sm-4"},c.default.createElement(f.default,{offset:50,iteration:"5",duration:"0.15s",animation:"shake"},c.default.createElement("p",{className:"circle bg-yellow"},"aint joke"))),c.default.createElement("div",{className:"col-sm-4 text-center"},c.default.createElement(f.default,{offset:50,iteration:"2",animation:"swing"},c.default.createElement("img",{src:"assets/images/wow-6.gif",className:"wow-image"})))),c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col-sm-4"},c.default.createElement(f.default,{offset:50,animation:"rollIn"},c.default.createElement("p",{className:"circle bg-purple"},"how small"))),c.default.createElement("div",{className:"col-sm-4 text-center"},c.default.createElement(f.default,{offset:50,delay:"0.5s",animation:"bounceInUp"},c.default.createElement("img",{src:"assets/images/wow-10.gif",className:"wow-image"}))),c.default.createElement("div",{className:"col-sm-4"},c.default.createElement(f.default,{offset:50,delay:"0.5s",duration:"0.15s",animation:"lightSpeedIn"},c.default.createElement("p",{className:"circle bg-green"},"3 kb only")))),c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col-sm-4 text-center"},c.default.createElement(f.default,{offset:50,animation:"rollIn"},c.default.createElement("img",{src:"assets/images/wow-7.gif",className:"wow-image"}))),c.default.createElement("div",{className:"col-sm-4"},c.default.createElement(f.default,{offset:50,iteration:"5",duration:"0.25s",animation:"pulse"},c.default.createElement("p",{className:"circle bg-blue"},"just scroll"))),c.default.createElement("div",{className:"col-sm-4 text-center"},c.default.createElement(f.default,{offset:50,animation:"lightSpeedIn"},c.default.createElement("img",{src:"assets/images/wow-9.gif",className:"wow-image"}))))),c.default.createElement("h5",{className:"box-title"},"Using inside overflow container"),c.default.createElement("div",{className:"container-white overflow"},c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col-sm-4"},c.default.createElement(f.default,{overflow:!0,iteration:"5",duration:"0.15s",animation:"bounce"},c.default.createElement("p",{className:"circle bg-yellow"},"reveal now"))),c.default.createElement("div",{className:"col-sm-4 text-center"},c.default.createElement(f.default,{overflow:!0,animation:"bounceInUp"},c.default.createElement("img",{src:"assets/images/wow-8.gif",className:"wow-image"}))),c.default.createElement("div",{className:"col-sm-4"},c.default.createElement(f.default,{overflow:!0,animation:"bounceInRight"},c.default.createElement("p",{className:"circle bg-red"},"so impress")))),c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col-sm-4 text-center"},c.default.createElement(f.default,{overflow:!0,animation:"rollIn"},c.default.createElement("img",{src:"assets/images/wow-4.gif",className:"wow-image"}))),c.default.createElement("div",{className:"col-sm-4"},c.default.createElement(f.default,{overflow:!0,iteration:"5",duration:"0.15s",animation:"flip"},c.default.createElement("p",{className:"circle bg-green"},"React-WOW"))),c.default.createElement("div",{className:"col-sm-4 text-center"},c.default.createElement(f.default,{overflow:!0,animation:"bounceInRight"},c.default.createElement("img",{src:"assets/images/wow-11.gif",className:"wow-image"})))),c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col-sm-4"},c.default.createElement(f.default,{overflow:!0,delay:"0.5s",animation:"rollIn"},c.default.createElement("p",{className:"circle bg-red"},"react!"))),c.default.createElement("div",{className:"col-sm-4 text-center"},c.default.createElement(f.default,{overflow:!0,delay:"1s",animation:"bounceInDown"},c.default.createElement("img",{src:"assets/images/grumpy.gif",className:"wow-image"}))),c.default.createElement("div",{className:"col-sm-4"},c.default.createElement(f.default,{overflow:!0,delay:"1.5s",animation:"bounceInRight"},c.default.createElement("p",{className:"circle bg-purple"},"that good!")))))),c.default.createElement("h4",{className:"text-uppercase"},"API"),c.default.createElement("hr",null),c.default.createElement("section",null,c.default.createElement("table",null,c.default.createElement("thead",null,c.default.createElement("tr",null,c.default.createElement("th",null,"属性"),c.default.createElement("th",null,"说明"),c.default.createElement("th",null,"类型"),c.default.createElement("th",null,"默认值"))),c.default.createElement("tbody",null,e.map(function(e){return c.default.createElement("tr",{key:e.prop},c.default.createElement("td",null,e.prop),c.default.createElement("td",null,e.desc),c.default.createElement("td",null,e.type),c.default.createElement("td",null,e.value))}))))))}}]),t}(c.default.Component);t.default=d},51:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a(2),c=n(s),u=a(50),f=n(u),d=function(e){function t(){return l(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),i(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("loading");e.style.display="none"}},{key:"render",value:function(){return c.default.createElement("div",{className:"container-fluid"},c.default.createElement("div",{className:"row main clearfix"},c.default.createElement(f.default,null)))}}]),t}(c.default.Component);t.default=d},54:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(2),u=n(c),f=a(20),d=n(f),m=a(3),p=a(55),v=a(57),E=n(v),g=a(58),w=n(g),h=a(56),b=n(h),y="data-react-wow",N={top:0,right:0,bottom:0,left:0,width:0,height:0},O={listeners:[],pending:[]},_=!1;try{var j=Object.defineProperty({},"passive",{get:function(){_=!0}});window.addEventListener("test",null,j)}catch(e){}var x=!!_&&{capture:!1,passive:!0},k=function(e,t){var a=d.default.findDOMNode(e),n=void 0,l=void 0;try{var r=t.getBoundingClientRect();n=r.top,l=r.height}catch(e){n=N.top,l=N.height}var o=window.innerHeight||document.documentElement.clientHeight,i=Math.max(n,0),s=Math.min(o,n+l)-i,c=void 0,u=void 0;try{var f=a.getBoundingClientRect();c=f.top,u=f.height}catch(e){c=N.top,u=N.height}var m=c-i,p=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return m-p[0]<=s&&m+u+p[1]>=0},I=function(e){var t=d.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var a=void 0,n=void 0;try{var l=t.getBoundingClientRect();a=l.top,n=l.height}catch(e){a=N.top,n=N.height}var r=window.innerHeight||document.documentElement.clientHeight,o=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return a-o[0]<=r&&a+n+o[1]>=0},P=function(e){var t=d.default.findDOMNode(e);if(t){var a=(0,b.default)(t),n=e.props.overflow&&a!==t.ownerDocument&&a!==document&&a!==document.documentElement,l=n?k(e,a):I(e);l&&(e.visible||(O.pending.push(e),e.visible=!0,e.setState({stopped:!1}),e.forceUpdate()))}},C=function(){O.pending.forEach(function(e){return(0,E.default)(O.listeners,e)}),O.pending=[]},A=function(){O.listeners.forEach(function(e){return P(e)}),C()},M=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.customStyle=function(e){var t=a.props,n=t.duration,l=t.delay,r=t.iteration,o=t.animation,i=t.disabled,s={animationName:e?"none":o,visibility:e&&!i?"hidden":"visible"};return n&&(s.animationDuration=n),l&&(s.animationDelay=l),r&&(s.animationIterationCount=r),s},a.resetAnimation=function(e){e.type.toLowerCase().indexOf("animationend")!==-1&&a.setState({stopped:!0},function(){var e=a.props.callback;"function"==typeof e&&e.call(a,d.default.findDOMNode(a))})},a.visible=!1,a.state={stopped:!1},a}return o(t,e),s(t,[{key:"componentDidMount",value:function(){if(this.props.disabled)return!1;if(this.props.overflow){var e=(0,b.default)(d.default.findDOMNode(this));if(e&&"function"==typeof e.getAttribute){var t=1+ +e.getAttribute(y);1===t&&(0,p.on)(e,"scroll",A,x),e.setAttribute(y,t)}}else if(!O.listeners.length){var a=this.props,n=a.scroll,l=a.resize;n&&(0,p.on)(window,"scroll",A,x),l&&(0,p.on)(window,"resize",A,x)}O.listeners.push(this),P(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.disabled)return!1;if(this.props.overflow){var e=(0,b.default)(d.default.findDOMNode(this));if(e&&"function"==typeof e.getAttribute){var t=+e.getAttribute(y)-1;0===t?((0,p.off)(e,"scroll",A,x),e.removeAttribute(y)):e.setAttribute(y,t)}}(0,E.default)(O.listeners,this),O.listeners.length||((0,p.off)(window,"scroll",A,x),(0,p.off)(window,"resize",A,x))}},{key:"mergeProps",value:function(e){var t=this.props,a=t.animation,n=t.animateClass,l=this.customStyle(!this.visible),r=this.visible?a+" "+(this.state.stopped?"":n):a;return i({},e,{style:i({},e.style,l),className:(0,w.default)((e.className?e.className:"")+" "+r),onAnimationEnd:this.resetAnimation})}},{key:"render",value:function(){var e=this,t=this.props,a=t.children,n=t.disabled;return n?a:a?u.default.Children.map(a,function(t){return u.default.cloneElement(t,e.mergeProps(t.props))}):null}}]),t}(u.default.Component);M.propTypes={duration:m.string,delay:m.string,iteration:m.string,animation:m.string,children:m.node,scroll:m.bool,resize:m.bool,animateClass:m.string,offset:(0,m.oneOfType)([m.number,(0,m.arrayOf)(m.number)]),overflow:m.bool,callback:m.func},M.defaultProps={duration:"",delay:"",iteration:"",animation:"",scroll:!0,resize:!0,animateClass:"animated",offset:0,overflow:!1,disabled:!1,callback:function(){}},t.default=M},55:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.on=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.addEventListener?e.addEventListener(t,a,n):e.attachEvent&&e.attachEvent("on"+t,function(t){a.call(e,t||window.event)})},t.off=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.removeEventListener?e.removeEventListener(t,a,n):e.detachEvent&&e.detachEvent("on"+t,a)}},56:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!e)return document.documentElement;for(var t="absolute"===e.style.position,a=/(scroll|auto)/,n=e;n;){if(!n.parentNode)return e.ownerDocument||document.documentElement;var l=window.getComputedStyle(n),r=l.position,o=l.overflow,i=l["overflow-x"],s=l["overflow-y"];if("static"===r&&t)n=n.parentNode;else{if(a.test(o)&&a.test(i)&&a.test(s))return n;n=n.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},57:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1],a=e.indexOf(t);a!==-1&&e.splice(a,1)}},58:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.trim().split(" ");return t.filter(function(e,a){return!!e&&t.indexOf(e)===a}).join(" ")}}});