(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return f});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(145),l=(n(150),n(154)),s=n(149),u=n(158),m=n(156),p=n(146),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,n=(e.site.siteMetadata.description,e.allMarkdownRemark.edges);return i.a.createElement(s.a,{location:this.props.location,title:t},i.a.createElement(m.a,null),i.a.createElement(l.a,null),n.map(function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug;return i.a.createElement("div",{key:t.fields.slug},i.a.createElement("h3",{style:{marginBottom:Object(p.a)(.25)}},i.a.createElement(c.Link,{style:{boxShadow:"none"},to:t.fields.slug},n)),i.a.createElement("small",null,t.frontmatter.date),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}),i.a.createElement(u.a,{location:this.props.location}))},t}(i.a.Component);t.default=d;var f="3889142462"},145:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return d});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(144),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(147),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var m=n(33);n.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),d=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},146:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return s});var a=n(151),r=n.n(a),o=n(152),i=n.n(o);i.a.overrideThemeStyles=function(){return{a:{color:"#007bff"},"a.gatsby-resp-image-link":{boxShadow:"none"},"h1,h2,h3":{fontFamily:["Source Sans Pro","system,system-ui","-apple-system","BlinkMacSystemFont","Roboto","Helvetica","Arial","sans-serif"].join(",")}}},delete i.a.googleFonts;var c=new r.a(i.a);var l=c.rhythm,s=c.scale},147:function(e,t,n){var a;e.exports=(a=n(148))&&a.default||a},148:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(51),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},149:function(e,t,n){"use strict";n(32);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(145),l=(n(153),n(146)),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,n=t.location,a=t.title,r=t.children;return e="/blog/"===n.pathname?i.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.25),{marginBottom:Object(l.a)(1),marginTop:0})},i.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):i.a.createElement("h3",{style:{marginTop:0,marginBottom:Object(l.a)(-1)}},i.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"#007bff"},to:"/"},a)),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},e,r)},t}(i.a.Component);t.a=s},154:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=(n(160),n(161),n(155)),l=n.n(c),s=n(146),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(s.a)(2.5)}},i.a.createElement("img",{src:l.a,alt:"Cedric Amaya",style:{marginRight:Object(s.a)(.5),marginBottom:0,width:Object(s.a)(2),height:Object(s.a)(2)}}),i.a.createElement("p",null,"Written by ",i.a.createElement("strong",null,"Cedric Amaya")," who is currently studying Computer Science in sunny California. You should"," ",i.a.createElement("a",{href:"https://twitter.com/cedricamaya",target:"_blank",rel:"noopener noreferrer"},"follow him on Twitter"),"."))},t}(i.a.Component);t.a=u},155:function(e,t,n){e.exports=n.p+"static/avatar-b7c380fe663df50d5d8600e8748284a0.png"},156:function(e,t,n){"use strict";var a=n(157),r=n(0),o=n.n(r),i=n(145),c=n(150),l=n.n(c);function s(e){var t=e.title,n=e.description;e.lang,e.meta;return o.a.createElement(i.StaticQuery,{query:u,render:function(e){var a,r=n||e.site.siteMetadata.description,i=t||e.site.siteMetadata.title;return o.a.createElement(l.a,((a={htmlAttributes:{lang:"en"},meta:[{name:"description",content:r}],title:i}).meta=[{name:"description",content:r},{property:"og:title",content:i},{property:"og:description",content:r},{property:"og:type",content:"website"},{property:"og:url",content:"https://cedric.tech/blog"},{property:"og:image",content:"https://cedric.tech/blog/og-image.png"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:creator",content:"@CedricAmaya"},{name:"twitter:title",content:i},{name:"twitter:description",content:r},{name:"twitter:image",content:"https://cedric.tech/blog/og-image.png"}],a))},data:a})}s.defaultProps={lang:"en",meta:[],keywords:[]},t.a=s;var u="1025518380"},157:function(e){e.exports={data:{site:{siteMetadata:{title:"My Random Thoughts",description:"Essays, musings, and more by Cedric Amaya.",author:"Cedric Amaya"}}}}},158:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(145),l=n(146),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("footer",{style:{marginTop:Object(l.a)(2.5),paddingTop:Object(l.a)(1)}},i.a.createElement("div",{style:{float:"right"}},i.a.createElement("a",{href:"https://cedric.tech/blog/rss.xml",target:"_blank",rel:"noopener noreferrer"},"rss")),i.a.createElement("a",{href:"https://twitter.com/cedricamaya",target:"_blank",rel:"noopener noreferrer"},"twitter")," •"," ",i.a.createElement("a",{href:"https://github.com/cedricium",target:"_blank",rel:"noopener noreferrer"},"github")," •"," ",i.a.createElement("a",{href:"https://linkedin.com/in/cedricamaya",target:"_blank",rel:"noopener noreferrer"},"linkedin"),"/about"!==this.props.location.pathname&&i.a.createElement("span",null," ","•"," ",i.a.createElement(c.Link,{to:"/about"},"about me")))},t}(i.a.Component);t.a=s}}]);
//# sourceMappingURL=component---src-pages-index-js-6b2f07542f3ec3382e60.js.map