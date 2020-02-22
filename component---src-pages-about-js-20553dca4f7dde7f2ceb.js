(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return m});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(146),l=n(150),s=n(159),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title;return i.a.createElement(l.a,{location:this.props.location},i.a.createElement("h3",null,i.a.createElement(c.Link,{style:{boxShadow:"none"},to:"/"},e)),i.a.createElement("p",null,"Hi, I'm Cedric, a 20-something year old indie maker, coffee consumer, and coder. I was born and raised in Washington state and currently reside in California where I go to college to study Computer Science."),i.a.createElement("p",null,"I love working day-to-day on projects that require multidisciplinary skillsets solving complex issues that make the lives of others easier.  When I'm not in front of a computer screen, I'm most likely writing blog posts, playing football with friends, or binge-watching some comedy show on Netflix with my significant other."),i.a.createElement("p",null,"I love meeting new people and making connections, so feel free to reach out to me on any of the sites listed below. Cheers!"),i.a.createElement(s.a,{location:this.props.location}))},t}(i.a.Component);t.default=u;var m="1097489062"},146:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return d});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(145),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(148),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var m=n(33);n.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),d=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},147:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return s});var a=n(151),r=n.n(a),o=n(152),i=n.n(o);i.a.overrideThemeStyles=function(){return{p:{marginBottom:"1.25rem"},a:{color:"#007bff"},"a.gatsby-resp-image-link":{boxShadow:"none"},"h1,h2,h3":{fontFamily:["Source Sans Pro","system,system-ui","-apple-system","BlinkMacSystemFont","Roboto","Helvetica","Arial","sans-serif"].join(",")},ol:{marginLeft:"1rem !important"},ul:{marginLeft:"1.75rem !important"},"ul.nav-links":{marginLeft:"0 !important"}}},delete i.a.googleFonts;var c=new r.a(i.a);var l=c.rhythm,s=c.scale},148:function(e,t,n){var a;e.exports=(a=n(149))&&a.default||a},149:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(51),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},150:function(e,t,n){"use strict";n(32);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(146),l=(n(153),n(147)),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,n=t.location,a=t.title,r=t.children;return e="/blog/"===n.pathname?i.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.25),{marginBottom:Object(l.a)(1),marginTop:0})},i.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):i.a.createElement("h3",{style:{marginTop:0,marginBottom:Object(l.a)(-1)}},i.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"#007bff"},to:"/"},a)),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},e,r)},t}(i.a.Component);t.a=s},159:function(e,t,n){"use strict";n(73),n(74);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(146),l=n(147),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("footer",{style:{marginTop:Object(l.a)(2.5),paddingTop:Object(l.a)(1)}},i.a.createElement("div",{style:{float:"right"}},i.a.createElement("a",{href:"https://cedric.tech/blog/rss.xml",target:"_blank",rel:"noopener noreferrer"},"rss")),i.a.createElement("a",{href:"https://twitter.com/cedricamaya",target:"_blank",rel:"noopener noreferrer"},"twitter")," •"," ",i.a.createElement("a",{href:"https://github.com/cedricium",target:"_blank",rel:"noopener noreferrer"},"github")," •"," ",i.a.createElement("a",{href:"https://linkedin.com/in/cedricamaya",target:"_blank",rel:"noopener noreferrer"},"linkedin"),!this.props.location.pathname.includes("/about")&&i.a.createElement("span",null," ","•"," ",i.a.createElement(c.Link,{to:"/about"},"about me")))},t}(i.a.Component);t.a=s}}]);
//# sourceMappingURL=component---src-pages-about-js-20553dca4f7dde7f2ceb.js.map