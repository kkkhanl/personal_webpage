(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var i=n(9),c=n(3),a=n(1),s=n(0),r=Object(a.createContext)(),l=function(e){var t=e.children,n=Object(a.useState)("light"),i=Object(c.a)(n,2),l=i[0],o=i[1];Object(a.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(s.jsx)(r.Provider,{value:[{themeName:l,toggleTheme:function(){var e="dark"===l?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://kkkhanl.github.io",j="KL",h={name:"Kehan Li",description:["Hi! My name is Kehan and I am a fourth-year undergraduate student at UC Berkeley. My research interest lies in the areas of Reinforcement Learning, Robotics and Computer Vision. I am currently involved in research in the following labs at UC Berkeley:","MPC lab (advised by Professor Francesco Borrelli)","VIP lab (advised by Professor Avideh Zakhor)","Darrell Group (advised by Professor Trevor Darrell)","Currently, I am applying to CS MS programs for Fall 2024"],resume:"https://drive.google.com/file/d/1u40xnZL0QiEQ46WA98pFLgLdQF0v6Zy-/view?usp=sharing",social:{linkedin:"https://www.linkedin.com/in/kehan-li/",github:"https://github.com/kkkhanl"}},d=[{name:"HIPIE +",description:"Extension of the HIPIE project, building a segmentation model with language guided context and chain of thought reasoning",stack:["Research Project","Computer Vision","Large Language Models"],livePreview:"https://people.eecs.berkeley.edu/~xdwang/projects/HIPIE/"},{name:"Adaptive Navigation for Autonomous Drones",description:"Enably autonomous long-range, obstacle avoidance drone flights with Reinforcement Learning",stack:["Research Project","Reinforcement Learning","Computer Vison"],livePreview:"https://bcommons.berkeley.edu/adaptive-long-distance-navigation-autonomous-drones"},{name:"Park-Predict ++",description:"Extension of the Park Predict + Project, enhancing trajectory prediction for vehicles in a parking lot environment",stack:["Research Project","Transformer Models","Trajectory Prediction"],livePreview:"https://sites.google.com/view/xushenssite/research/parkpredict_1?authuser=0"},{name:"Euroskepticism Detection with BERT",description:"Devised a Machine Learning model that classifies the EU\u2019s parliamentary questions as pro- or anti-Europeanism.",stack:["Research Project","BERT","Natural Language Processing"],livePreview:"https://urapprojects.berkeley.edu/detail.php?id=18971-3"},{name:"Trailer Hitch Tracking",description:"Developed a robust system to detect and track trailer tongue from LiDAR data to enhance autonomous hitching.",stack:["Internship Project","3D Point Cloud Processing","Optimization"],livePreview:"https://developer.cepton.com/blog/trailer_hitch_tracking"},{name:"Reinforcement Learning Gomoku",description:"Implemented various reinforcement learning models to play the strategy board game of Gomoku with a novel tournament-style training loop.",stack:["Course Project","Reinforcement Learning"],sourceCode:"https://github.com/kkkhanl/Gomoku_Tournaments"},{name:"Wind and Fluid Simulator",description:"Developed a Computer Graphics model that simulated the realistic behavior of fluid under the effects of wind.",stack:["Course Project","Computer Graphics","Physics Simulation"],livePreview:"https://zenith-rhythm-571.notion.site/CS184-Final-Project-Blown-Away-by-Fluid-Dynamics-2c9121dd210c46178e4ee1b1b077508d?pvs=4"}],u=["Python","Java","C","C++","ROS","RISC-V","PyTorch","TensorFlow","Stable Baselines3"],b="kehanli AT berkeley.edu",m=n(16),p=n.n(m),f=n(14),O=n.n(f),k=n(18),g=n.n(k),x=n(17),v=n.n(x),_=(n(28),function(){var e=Object(a.useContext)(r),t=Object(c.a)(e,1)[0],n=t.themeName,i=t.toggleTheme,l=Object(a.useState)(!1),o=Object(c.a)(l,2),j=o[0],h=o[1],m=function(){return h(!j)};return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[d.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:m,className:"link link--nav",children:"Projects"})}):null,u.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:m,className:"link link--nav",children:"Skills"})}):null,b?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:m,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:i,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(s.jsx)(O.a,{}):Object(s.jsx)(p.a,{})}),Object(s.jsx)("button",{type:"button",onClick:m,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(s.jsx)(v.a,{}):Object(s.jsx)(g.a,{})})]})}),N=(n(32),function(){var e=o,t=j;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link",children:t}):t}),Object(s.jsx)(_,{})]})}),y=n(11),P=n.n(y),w=n(19),C=n.n(w),L=(n(33),n.p+"static/media/pic.49b98afd.jpg"),E=function(){var e=h.name,t=h.description,n=h.resume,i=h.social;return Object(s.jsxs)("div",{className:"about center",children:[Object(s.jsx)("img",{src:L,alt:"Profile",className:"about__image"}),Object(s.jsxs)("div",{className:"about__text-container",children:[e&&Object(s.jsx)("h1",{children:"Kehan Li"}),t&&Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{className:"about__desc",children:t[0]}),Object(s.jsx)("ul",{className:"about__labs-list",children:t.slice(1,-1).map((function(e,t){return Object(s.jsx)("li",{className:"about__desc",children:e},e)}))}),Object(s.jsx)("p",{className:"about__desc",children:t[t.length-1]})]}),Object(s.jsxs)("div",{className:"about__contact center",children:[n&&Object(s.jsx)("a",{href:n,children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),i&&Object(s.jsxs)(s.Fragment,{children:[i.github&&Object(s.jsx)("a",{href:i.github,"aria-label":"github",className:"link link--icon",children:Object(s.jsx)(P.a,{style:{fontSize:50}})}),i.linkedin&&Object(s.jsx)("a",{href:i.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(s.jsx)(C.a,{style:{fontSize:60}})})]})]})]})]})},S=n(7),R=n.n(S),I=n(20),T=n.n(I),D=(n(35),function(e){var t=e.project;return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(s.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(s.jsx)("li",{className:"project__stack-item",children:e},R()())}))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(P.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(T.a,{})})]})}),B=(n(36),function(){return d.length?Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Projects"}),Object(s.jsx)("div",{className:"projects__grid",children:d.map((function(e){return Object(s.jsx)(D,{project:e},R()())}))})]}):null}),F=(n(37),function(){return u.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:u.map((function(e){return Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},R()())}))})]}):null}),M=n(21),A=n.n(M),G=(n(38),function(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){var e=function(){return window.pageYOffset>500?i(!0):i(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top",children:Object(s.jsx)(A.a,{fontSize:"large"})})}):null}),z=(n(39),function(){return b?Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsx)("a",{href:"mailto:".concat(b),className:"contact__details",children:"kehanli@berkeley.edu"})]}):null}),H=(n(40),function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("a",{href:"https://github.com/rajshekhar26/cleanfolio",className:"link footer__link",children:"Created By Raj Shekhar"})})}),V=(n(41),function(){var e=Object(a.useContext)(r),t=Object(c.a)(e,1)[0].themeName;return Object(s.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(s.jsx)(N,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(E,{}),Object(s.jsx)(B,{}),Object(s.jsx)(F,{}),Object(s.jsx)(z,{})]}),Object(s.jsx)(G,{}),Object(s.jsx)(H,{})]})});n(42);Object(i.render)(Object(s.jsx)(l,{children:Object(s.jsx)(V,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.8df4f0c6.chunk.js.map