(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{141:function(t,e,n){"use strict";n.r(e);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),u=n(150),c=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){return i.a.createElement(u.a,{location:this.props.location},i.a.createElement("h1",null,"Not Found"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},e}(i.a.Component);e.default=c},146:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return f}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(145),c=n.n(u);n.d(e,"Link",function(){return c.a}),n.d(e,"withPrefix",function(){return u.withPrefix}),n.d(e,"navigate",function(){return u.navigate}),n.d(e,"push",function(){return u.push}),n.d(e,"replace",function(){return u.replace}),n.d(e,"navigateTo",function(){return u.navigateTo});var s=n(148),l=n.n(s);n.d(e,"PageRenderer",function(){return l.a});var d=n(33);n.d(e,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},147:function(t,e,n){"use strict";n.d(e,"a",function(){return c}),n.d(e,"b",function(){return s});var a=n(151),r=n.n(a),o=n(152),i=n.n(o);i.a.overrideThemeStyles=function(){return{p:{marginBottom:"1.25rem"},a:{color:"#007bff"},"a.gatsby-resp-image-link":{boxShadow:"none"},"h1,h2,h3":{fontFamily:["Source Sans Pro","system,system-ui","-apple-system","BlinkMacSystemFont","Roboto","Helvetica","Arial","sans-serif"].join(",")},ol:{marginLeft:"1rem !important"},ul:{marginLeft:"1.75rem !important"},"ul.nav-links":{marginLeft:"0 !important"}}},delete i.a.googleFonts;var u=new r.a(i.a);var c=u.rhythm,s=u.scale},148:function(t,e,n){var a;t.exports=(a=n(149))&&a.default||a},149:function(t,e,n){"use strict";n.r(e);n(32);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(51),c=n(2),s=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(u.a,Object.assign({location:e,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=s},150:function(t,e,n){"use strict";n(32);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),u=n(146),c=(n(153),n(147)),s=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,a=e.title,r=e.children;return t="/blog/"===n.pathname?i.a.createElement("h1",{style:Object.assign({},Object(c.b)(1.25),{marginBottom:Object(c.a)(1),marginTop:0})},i.a.createElement(u.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):i.a.createElement("h3",{style:{marginTop:0,marginBottom:Object(c.a)(-1)}},i.a.createElement(u.Link,{style:{boxShadow:"none",textDecoration:"none",color:"#007bff"},to:"/"},a)),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},t,r)},e}(i.a.Component);e.a=s}}]);
//# sourceMappingURL=component---src-pages-404-js-e044afa330e5a3b6a8ae.js.map