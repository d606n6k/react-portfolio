(this["webpackJsonpreact-portfolio-app"]=this["webpackJsonpreact-portfolio-app"]||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var r=c(2),s=c.n(r),a=c(14),i=c.n(a),n=(c(27),c(28),c(15)),l=c.p+"static/media/William_Lucht_Software_Engineer_V2.38be569a.PDF",o=c(0);var j=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("header",{className:"flex-container",children:[Object(o.jsx)("section",{id:"portfolio-name",className:"flex-wrap",children:Object(o.jsx)("h1",{children:"William Lucht"})}),Object(o.jsx)("section",{id:"navigation",className:"flex-wrap",children:Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{className:"nav-ul flex-container nav-flex-container",children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#about-me-inner",children:"About Me"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#work",children:"Work"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#connect-with",children:"Contact Me"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:l,target:"_blank",rel:"noreferrer",children:"Resume"})})]})})})]})})},h=c.p+"static/media/codehero2.52a0973d.jpg",b=c.p+"static/media/william.e7129784.jpg";var d=function(){return Object(o.jsxs)("div",{id:"hero",children:[Object(o.jsx)("img",{src:h,alt:"web developer cartoon"}),Object(o.jsx)("div",{id:"william-hero",children:Object(o.jsx)("img",{src:b,alt:"William Lucht"})})]})};var x=function(){return Object(o.jsx)("section",{id:"flex-container container about-me",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("section",{id:"about-me-inner",className:"col-sm",children:[Object(o.jsxs)("div",{id:"intro",children:[Object(o.jsx)("h2",{className:"flex-wrap",children:"Get to know William..."}),Object(o.jsx)("p",{className:"flex-wrap first-p",children:"A strong work ethic is the basis for all success. With over 5 years Web Development experience primarily focused on E-Commerce Implementations, I put forward my drive and passion for the Web with thorough and sound solutions. I have been on development teams solving business solution for small brick and mortar stores to enterprise level Salesforce implementations for multi million dollar companies."}),Object(o.jsxs)("p",{children:["My vast understanding of the E-Commerce ecosystem has garnered positive reviews and acknowledgement from those I work for. Please feel free to contact me about any current Web Development/E-commerce opportunities I may be qualified for. Thank you."," "]})]}),Object(o.jsxs)("div",{id:"connect-with",children:[Object(o.jsx)("h2",{children:"Connect with me!"}),Object(o.jsxs)("p",{children:["Phone: ",Object(o.jsx)("a",{href:"tel:+18586034860",children:"+1 (858)603-4860"})]}),Object(o.jsxs)("p",{children:["Email:"," ",Object(o.jsx)("a",{href:"mailto:aaronlucht@gmail.com",children:"aaronlucht@gmail.com"})]}),Object(o.jsxs)("p",{children:["via"," ",Object(o.jsxs)("a",{href:"https://github.com/d606n6k",target:"_blank",rel:"noreferrer",children:[Object(o.jsx)("i",{class:"fab fa-github"})," - Github"]})]}),Object(o.jsxs)("p",{children:["via"," ",Object(o.jsxs)("a",{href:"https://www.linkedin.com/in/williamlucht/",target:"_blank",role:"button",rel:"noreferrer",children:[Object(o.jsx)("i",{className:"fa fa-linkedin"})," - LinkedIn"]})]})]})]})})})},m=c(18),f=c(19),p=c(22),O=c(21),u=c(20),k=c.n(u),g=function(){return k.a.get("https://api.github.com/users/d606n6k/repos?per_page=50")};var v=function(e){return Object(o.jsx)("div",{className:"col-xl-12",children:e.repo.slice(33).map((function(e){return Object(o.jsx)("a",{href:e.html_url,target:"_blank",rel:"noreferrer",children:Object(o.jsx)("div",{id:"work-example-1",className:"col-xl-12 boxx",children:Object(o.jsxs)("div",{id:"project-examp-one",children:[Object(o.jsxs)("h5",{children:["Repository Name: ",e.name]}),Object(o.jsx)("hr",{})]})})})}))})},w=function(e){Object(p.a)(c,e);var t=Object(O.a)(c);function c(){var e;Object(m.a)(this,c);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={projects:[]},e.projectGrab=function(){g().then((function(t){return e.setState({projects:t.data})})).catch((function(e){return console.log(e)}))},e}return Object(f.a)(c,[{key:"componentDidMount",value:function(){this.projectGrab()}},{key:"render",value:function(){return console.log(this.state),Object(o.jsxs)("section",{id:"work",className:"container-fluid",children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{id:"work-h2",className:"heading col-12",children:Object(o.jsx)("h2",{children:"Work Samples"})})}),Object(o.jsxs)("div",{className:"container-md work-stuff",children:[Object(o.jsxs)("div",{className:"content row work-examples",children:[Object(o.jsx)(v,{repo:this.state.projects},this.state.projects.id),Object(o.jsx)("div",{className:"col-sm",children:Object(o.jsx)("a",{href:"https://github.com/d606n6k/recipe-shuffle",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("div",{id:"work-example-2",className:"col-sm boxx",children:Object(o.jsx)("div",{id:"project-examp-two"})})})}),Object(o.jsx)("div",{className:"col-sm",children:Object(o.jsx)("a",{href:"https://github.com/d606n6k/work-day-scheduler",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("div",{id:"work-example-3",className:"col-sm boxx",children:Object(o.jsx)("div",{id:"project-examp-three"})})})})]}),Object(o.jsxs)("div",{className:"content row work-examples",children:[Object(o.jsx)("div",{className:"col-sm",children:Object(o.jsx)("a",{href:"https://github.com/d606n6k/neighborhood_ranking_app",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("div",{id:"work-example-4",className:"col-sm boxx",children:Object(o.jsx)("div",{id:"project-examp-four"})})})}),Object(o.jsx)("div",{className:"col-sm",children:Object(o.jsx)("a",{href:"https://github.com/d606n6k/ecommerce_backend",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("div",{id:"work-example-5",className:"col-sm boxx",children:Object(o.jsx)("div",{id:"project-examp-five"})})})})]}),Object(o.jsxs)("div",{className:"project-info",children:[Object(o.jsx)("h4",{children:"The Weather Dashboard"}),Object(o.jsxs)("p",{children:["Live URL:"," ",Object(o.jsx)("a",{href:"https://d606n6k.github.io/weather-dashboard/",target:"_blank",rel:"noreferrer",children:"https://d606n6k.github.io/weather-dashboard/"})]}),Object(o.jsxs)("p",{children:["Github Repository:"," ",Object(o.jsx)("a",{href:"https://github.com/d606n6k/weather-dashboard",target:"_blank",rel:"noreferrer",children:"https://github.com/d606n6k/weather-dashboard"})]}),Object(o.jsx)("p",{children:"Tech Used:"}),Object(o.jsx)("i",{className:"fa fa-html5 fa-2x"}),Object(o.jsx)("i",{className:"fa fa-css3 fa-2x"}),Object(o.jsx)("i",{className:"fa fa-js fa-2x"})]}),Object(o.jsxs)("div",{className:"project-info",children:[Object(o.jsx)("h4",{children:"recipeShuffle.io"}),Object(o.jsxs)("p",{children:["Live URL:"," ",Object(o.jsx)("a",{href:"https://d606n6k.github.io/recipe-shuffle/",target:"_blank",rel:"noreferrer",children:"https://d606n6k.github.io/recipe-shuffle/"})]}),Object(o.jsxs)("p",{children:["Github Repository:"," ",Object(o.jsx)("a",{href:"https://github.com/d606n6k/recipe-shuffle",target:"_blank",rel:"noreferrer",children:"https://github.com/d606n6k/recipe-shuffle"})]}),Object(o.jsx)("p",{children:"Tech Used:"}),Object(o.jsx)("i",{className:"fa fa-html5 fa-2x"}),Object(o.jsx)("i",{className:"fa fa-css3 fa-2x"}),Object(o.jsx)("i",{className:"fa fa-js fa-2x"})]}),Object(o.jsxs)("div",{className:"project-info",children:[Object(o.jsx)("h4",{children:"The Workday Scheduler"}),Object(o.jsxs)("p",{children:["Live URL:"," ",Object(o.jsx)("a",{href:"https://d606n6k.github.io/work-day-scheduler/",target:"_blank",rel:"noreferrer",children:"https://d606n6k.github.io/work-day-scheduler/"})]}),Object(o.jsxs)("p",{children:["Github Repository:"," ",Object(o.jsx)("a",{href:"https://github.com/d606n6k/work-day-scheduler",target:"_blank",rel:"noreferrer",children:"https://github.com/d606n6k/work-day-scheduler"})]}),Object(o.jsx)("p",{children:"Tech Used:"}),Object(o.jsx)("i",{className:"fa fa-html5 fa-2x"}),Object(o.jsx)("i",{className:"fa fa-css3 fa-2x"}),Object(o.jsx)("i",{className:"fa fa-js fa-2x"})]}),Object(o.jsxs)("div",{className:"project-info",children:[Object(o.jsx)("h4",{children:"The Neighborhood Ranking App"}),Object(o.jsxs)("p",{children:["Live URL:"," ",Object(o.jsx)("a",{href:"https://neighborhood-appage.herokuapp.com/",target:"_blank",rel:"noreferrer",children:"https://neighborhood-appage.herokuapp.com/"})]}),Object(o.jsxs)("p",{children:["Github Repository:"," ",Object(o.jsx)("a",{href:"https://github.com/d606n6k/neighborhood_ranking_app",target:"_blank",rel:"noreferrer",children:"Repo Link"})]}),Object(o.jsx)("p",{children:"Tech Used:"}),Object(o.jsx)("i",{className:"fab fa-html5 fa-2x"}),Object(o.jsx)("i",{className:"icon-spacer fab fa-css3-alt fa-2x"}),Object(o.jsx)("i",{className:"icon-spacer fab fa-js fa-2x"}),Object(o.jsx)("i",{className:"icon-spacer fab fa-node-js fa-2x"})]}),Object(o.jsxs)("div",{className:"project-info",children:[Object(o.jsx)("h4",{children:"The E-commerce Backend CLI App"}),Object(o.jsxs)("p",{children:["Video Demo:"," ",Object(o.jsx)("a",{href:"https://www.youtube.com/watch?v=iEAfTyJPoEo",target:"_blank",rel:"noreferrer",children:"Video Link"})]}),Object(o.jsxs)("p",{children:["Github Repository:"," ",Object(o.jsx)("a",{href:"https://github.com/d606n6k/ecommerce_backend",target:"_blank",rel:"noreferrer",children:"Repo Link"})]}),Object(o.jsx)("p",{children:"Tech Used:"}),Object(o.jsx)("i",{className:"fab fa-html5 fa-2x"}),Object(o.jsx)("i",{className:"icon-spacer fab fa-css3-alt fa-2x"}),Object(o.jsx)("i",{className:"icon-spacer fab fa-js fa-2x"}),Object(o.jsx)("i",{className:"icon-spacer fab fa-node-js fa-2x"})]})]})]})}}]),c}(r.Component);var N=function(){return Object(o.jsxs)("footer",{id:"copyright-footer",className:"bg-dark text-center text-white",children:[Object(o.jsxs)("div",{className:"container p-4 pb-0",children:[Object(o.jsx)("h6",{children:"Let's Connect!"}),Object(o.jsxs)("section",{className:"mb-1",children:[Object(o.jsx)("a",{className:"btn btn-outline-light btn-floating m-1",href:"https://twitter.com/emericas1",target:"_blank",role:"button",rel:"noreferrer",children:Object(o.jsx)("i",{className:"fa fa-twitter"})}),Object(o.jsx)("a",{className:"btn btn-outline-light btn-floating m-1",href:"https://www.linkedin.com/in/williamlucht/",target:"_blank",role:"button",rel:"noreferrer",children:Object(o.jsx)("i",{className:"fa fa-linkedin"})}),Object(o.jsx)("a",{className:"btn btn-outline-light btn-floating m-1",href:"https://github.com/d606n6k",role:"button",children:Object(o.jsx)("i",{className:"fa fa-github"})})]})]}),Object(o.jsxs)("div",{className:"text-center p-3",style:{backgroundColor:"rgba(0, 0, 0, 0.2"},children:["\xa9 2021 Copyright:",Object(o.jsx)("a",{className:"text-white",href:"https://github.com/d606n6k",target:"_blank",rel:"noreferrer",children:"William Lucht"})]})]})};c(13);var _=function(){return Object(o.jsxs)("main",{children:[Object(o.jsx)(d,{}),Object(o.jsx)(x,{}),Object(o.jsx)(w,{}),Object(o.jsx)(N,{})]})};var y=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(n.a,{children:[Object(o.jsx)("title",{children:"William Lucht - Portfolio"}),Object(o.jsx)("meta",{name:"description",content:"William Lucht's React based Portfolio"}),Object(o.jsx)("meta",{name:"theme-color",content:"#008f68"}),Object(o.jsx)("script",{src:"https://kit.fontawesome.com/542b46dc44.js",crossorigin:"anonymous"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)(j,{}),Object(o.jsx)(_,{})]})]})};c(51),c(52);i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.5135a2f3.chunk.js.map