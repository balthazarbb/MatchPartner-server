(this["webpackJsonpMatchPartner-client"]=this["webpackJsonpMatchPartner-client"]||[]).push([[0],{114:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(10),i=n.n(r),o=(n(88),n(34)),s=n(51),l=n(56),d=n.n(l),h=n(74),u=n(18),j=n(19),m=n(22),p=n(21),b=n(13),O=n(17),f=n(149),x=n(151),g=n(146),v=n(2),y=Object(g.a)({root:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center"}});var C=function(t){var e=y();return Object(v.jsx)("div",{children:Object(v.jsxs)(f.a,{className:e.root,children:[Object(v.jsx)("h1",{children:"welcome to matchpartner"}),Object(v.jsxs)(x.a,{children:[Object(v.jsx)(O.b,{style:{marginLeft:"10px"},to:"/signup",children:"SignUp"}),Object(v.jsx)(O.b,{style:{marginLeft:"10px"},to:"/signin",children:"LogIn"})]})]})})},w=n(14),S=n(159),I=n(152),A=Object(g.a)({root:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center"}});var k=function(t){var e,n,a=t.onSubmit,c=A();return Object(v.jsx)(f.a,{className:c.root,children:Object(v.jsx)(x.a,{children:Object(v.jsxs)("form",{onSubmit:a,children:[Object(v.jsx)("h1",{children:"SignUp"}),Object(v.jsx)("div",{className:"form-group",children:Object(v.jsx)(S.a,(e={id:"outlined-basic",label:"Username",variant:"outlined"},Object(w.a)(e,"id","InputUsername"),Object(w.a)(e,"name","username"),e))}),Object(v.jsx)("div",{className:"form-group",children:Object(v.jsx)(S.a,(n={id:"outlined-basic",type:"password",label:"Password",variant:"outlined"},Object(w.a)(n,"id","InputPassword"),Object(w.a)(n,"name","password"),n))}),Object(v.jsx)(I.a,{type:"submit",variant:"contained",color:"primary",children:"Submit"})]})})})},D=Object(g.a)({root:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center"}});var M=function(t){var e,n,a=t.onSignIn,c=t.error,r=D();return Object(v.jsx)(f.a,{className:r.root,children:Object(v.jsx)(x.a,{children:Object(v.jsxs)("form",{onSubmit:a,children:[Object(v.jsx)("h1",{children:"LogIn"}),Object(v.jsx)("div",{className:"form-group",children:Object(v.jsx)(S.a,(e={id:"outlined-basic",label:"Username",variant:"outlined"},Object(w.a)(e,"id","InputUsername"),Object(w.a)(e,"name","username"),e))}),Object(v.jsx)("div",{className:"form-group",children:Object(v.jsx)(S.a,(n={id:"outlined-basic",type:"password",label:"Password",variant:"outlined"},Object(w.a)(n,"id","InputPassword"),Object(w.a)(n,"name","password"),n))}),Object(v.jsx)(I.a,{type:"submit",variant:"contained",color:"primary",children:"LogIn"}),c&&Object(v.jsx)("p",{style:{color:"red"},children:c.error})]})})})},P=n(16),L=n.n(P),_="https://matchpartner.herokuapp.com",N=n(155),T=n(154),U=(Object(g.a)((function(t){return{root:{"& .MuiTextField-root":{margin:t.spacing(1),width:"25ch",position:"relative",display:"flex",justifyContent:"center",alignItems:"center"}}}})),function(t){Object(m.a)(n,t);var e=Object(p.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var t=this.props.onAdd;return Object(v.jsxs)("form",{onSubmit:t,children:[Object(v.jsx)(S.a,{name:"sports",type:"text",id:"filled-basic",label:"Which Sport?",variant:"filled"}),Object(v.jsx)(S.a,{name:"dateAndTime",id:"filled-basic",label:"Date and Time?",variant:"filled"}),Object(v.jsx)(S.a,{name:"duration",id:"filled-basic",label:"Duration?",variant:"filled"}),Object(v.jsx)(S.a,{name:"numberOfParticipants",id:"filled-basic",label:"How many?",variant:"filled"}),Object(v.jsx)(S.a,{name:"equipment",id:"filled-basic",label:"Equipment needed?",variant:"filled"}),Object(v.jsx)(I.a,{type:"submit",variant:"contained",color:"primary",children:"Create Match"})]})}}]),n}(a.Component)),q=n(153),E=(Object(g.a)((function(t){return{root:{width:"100%",height:400,maxWidth:300,backgroundColor:t.palette.background.paper,position:"relative",display:"flex",justifyContent:"center",alignItems:"center"}}})),function(t){Object(m.a)(n,t);var e=Object(p.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(t){var e=this.props,n=e.onAdd,a=e.onDelete,c=e.matches,r=e.index,i=e.style,o=e.onChange;return Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:"Create a new match!"}),Object(v.jsx)(U,{onAdd:n}),Object(v.jsx)(q.a,{button:!0,style:i,children:c.map((function(t){return Object(v.jsxs)("div",{children:[Object(v.jsx)(O.b,{to:"/matches/".concat(t._id),children:t.sports}),Object(v.jsx)(I.a,{size:"small",onClick:function(){o(t._id)},variant:"contained",color:"primary",href:"#contained-buttons",children:"Edit"}),Object(v.jsx)(I.a,{size:"small",onClick:function(){a(t._id)},variant:"contained",color:"primary",href:"#contained-buttons",children:"Delete"})]},t._id)}))},r)]})}}]),n}(a.Component)),W=n(160),B=Object(g.a)({root:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});var G=function(t){var e,n=t.onAdd,a=t.matches,c=t.onDelete,r=t.user,i=t.handleMatchChange,o=B();return o.bullet,Object(v.jsxs)("div",{children:[Object(v.jsxs)(f.a,{className:o.root,variant:"outlined",children:[Object(v.jsxs)(x.a,{children:[Object(v.jsx)(T.a,{className:o.root,color:"textSecondary",gutterBottom:!0,children:Object(v.jsxs)("h2",{children:["Welcome to your profile",r.username]})}),Object(v.jsx)(W.a,{className:o.root,src:"/broken-image.jpg"}),Object(v.jsx)(T.a,(e={className:o.root},Object(w.a)(e,"className",o.pos),Object(w.a)(e,"color","textSecondary"),e)),Object(v.jsxs)(T.a,{className:o.root,variant:"body2",component:"p",children:[Object(v.jsx)("br",{}),'"Get up and do sports!"']})]}),Object(v.jsx)(N.a,{})]}),Object(v.jsx)(I.a,{size:"small"}),Object(v.jsx)(E,{onAdd:n,matches:a,onDelete:c,onChange:i})]})},J=n(156),z=n(157),F=n(158),H=Object(g.a)((function(t){return{root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:{flexGrow:1}}}));var R=function(t){var e=t.user,n=t.onLogout,a=H();return Object(v.jsx)("div",{className:a.root,children:Object(v.jsx)(J.a,{color:"default",position:"static",children:Object(v.jsxs)(z.a,{children:[Object(v.jsx)(F.a,{color:"inherit","aria-label":"menu"}),Object(v.jsx)(T.a,{children:Object(v.jsx)("img",{width:"90",height:"80",padding:"5px",src:"https://res.cloudinary.com/dg3rhmvdt/image/upload/v1621518135/IMG_1098_isniex.png",alt:"logo"})}),Object(v.jsx)("h3",{children:"MatchPartner"}),e?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(I.a,{onClick:n,children:"Logout"}),Object(v.jsx)(O.b,{style:{marginLeft:"10px"},to:"/list",children:"AllMatches"}),Object(v.jsx)(O.b,{style:{marginLeft:"10px"},to:"/profile",children:"MyProfile"})]}):Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(O.b,{style:{marginLeft:"10px"},to:"/signin",children:"LogIn"})})]})})})},K=function(t){Object(m.a)(n,t);var e=Object(p.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var t=this.props,e=t.onCom,n=t.matchId;return Object(v.jsxs)("form",{onSubmit:function(t){return e(t,n)},children:[Object(v.jsx)("input",{name:"comment",type:"text",placeholder:"Comment"}),Object(v.jsx)("button",{type:"submit",children:"Submit"})]})}}]),n}(a.Component),Q=n(35),V=n(75),X=function(t){Object(m.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={matches:null},t}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var t=this;console.log(this.props);var e=this.props.match.params.matchesId;console.log(e),L.a.get("".concat(_,"/api/matches/").concat(e),{withCredentials:!0}).then((function(e){console.log("inside of then block",e.data),t.setState({matches:e.data})})).catch((function(t){console.log("detail view crashed")}))}},{key:"render",value:function(){console.log(this.props);var t=this.state.matches,e=this.props,n=e.onAdd,a=e.onCom,c=e.user,r=e.comments;return console.log(t),c?t?Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"Match Details"}),Object(v.jsx)(V.a,{style:{width:"18rem"},children:Object(v.jsxs)(Q.a,{variant:"flush",children:[Object(v.jsxs)(Q.a.Item,{children:["What: ",t.sports]}),Object(v.jsxs)(Q.a.Item,{children:["When: ",t.dateAndTime]}),Object(v.jsxs)(Q.a.Item,{children:["How long:",t.duration]}),Object(v.jsxs)(Q.a.Item,{children:["Participants",t.numberOfParticipants]}),Object(v.jsxs)(Q.a.Item,{children:["Bring: ",t.equipment]})]})}),Object(v.jsx)("button",{onClick:function(){n(t._id)},children:"Join"}),Object(v.jsx)(K,{onCom:a,comments:r,matchId:t._id}),Object(v.jsx)("div",{children:" Comments: "}),t.commentId.map((function(e){return console.log(t),Object(v.jsxs)("li",{children:[" ",e.comment]},e._id)})),t.userId.map((function(e){return console.log(t),Object(v.jsxs)("p",{children:["Who joins: ",e.username]},e._id)}))]}):Object(v.jsx)("p",{children:"Loading . . ."}):Object(v.jsx)(b.a,{to:"/signin"})}}]),n}(a.Component),Y=function(t){Object(m.a)(n,t);var e=Object(p.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(t){var e=this.props.matches;return Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:"All available matches"}),Object(v.jsx)(q.a,{children:e.map((function(t){return Object(v.jsxs)("div",{children:[">",Object(v.jsx)(O.b,{to:"/matches/".concat(t._id),children:t.sports})]})}))})]})}}]),n}(a.Component),Z=function(t){Object(m.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={match:{}},t.fetchDetails=function(){var e=t.props.match.params.matchId;L.a.get("".concat(_,"/api/matches/").concat(e)).then((function(e){t.setState({match:e.data})})).catch((function(t){console.log("Fetch failed")}))},t.handleMatchChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(w.a)({},a,c))},t}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.fetchDetails()}},{key:"componentDidUpdate",value:function(t){t.comments!==this.props.comments&&this.fetchDetails()}},{key:"render",value:function(){var t=this.state.match,e=this.props.onEdit;return Object(v.jsx)("div",{children:Object(v.jsxs)("form",{onSubmit:function(n){e(n,t)},children:[Object(v.jsx)("input",{name:"sports",type:"text",onChange:this.handleMatchChange,value:t.sports}),Object(v.jsx)("input",{name:"equipment",type:"text",onChange:this.handleMatchChange,value:t.equipment}),Object(v.jsx)("input",{name:"dateAndTime",type:"number",onChange:this.handleMatchChange,value:t.dateAndTime}),Object(v.jsx)("input",{name:"duration",type:"number",onChange:this.handleMatchChange,value:t.duration}),Object(v.jsx)("input",{name:"numberOfParticipants",type:"number",onChange:this.handleMatchChange,value:t.numberOfParticipants}),Object(v.jsx)("button",{children:"Edit"})]})})}}]),n}(a.Component),$=function(t){Object(m.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={user:null,error:null,fetchingUser:!0,matches:[],comments:[]},t.handleSignUp=function(e){e.preventDefault();var n=e.target,a=n.username,c=n.password,r={username:a.value,password:c.value};console.log(r),L.a.post("".concat(_,"/api/signup"),r,{withCredentials:!0}).then((function(e){t.setState({user:e.data},(function(){t.props.history.push("/signin")}))})).catch((function(t){console.log(t)}))},t.handleSignIn=function(){var e=Object(h.a)(d.a.mark((function e(n){var a,c,r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),a=n.target,c=a.username,r=a.password,i={username:c.value,password:r.value},L.a.post("".concat(_,"/api/signin"),i,{withCredentials:!0}).then((function(e){t.setState({user:e.data,error:null},(function(){t.props.history.push("/profile")}))})).catch((function(e){t.setState({error:e.response.data})}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.handleLogout=function(){L.a.get("".concat(_,"/api/logout"),{withCredentials:!0}).then((function(){t.setState({user:null},t.props.history.push("/"))})).catch((function(e){t.setState({error:e.response.data})}))},t.handleJoin=function(t){console.log(t),L.a.patch("".concat(_,"/api/matchespart/").concat(t),{},{withCredentials:!0}).then((function(t){})).catch((function(t){}))},t.handleAdd=function(e){e.preventDefault();var n={sports:e.target.sports.value,dateAndTime:e.target.dateAndTime.value,duration:e.target.duration.value,numberOfParticipants:e.target.numberOfParticipants.value,equipment:e.target.equipment.value,completed:!1};console.log("something"),L.a.post("".concat(_,"/api/create"),n,{withCredentials:!0}).then((function(e){t.setState({matches:[e.data].concat(Object(s.a)(t.state.matches))},(function(){console.log(t.state.matches),t.props.history.push("/profile")}))})).catch((function(t){console.log("add match fail")}))},t.handleAddComment=function(e,n){e.preventDefault(),console.log(e.target.comment.value);var a={userId:t.state.user._id,comment:e.target.comment.value};console.log(e),L.a.post("".concat(_,"/api/createcomment"),{newComment:a},{withCredentials:!0}).then((function(e){L.a.patch("".concat(_,"/api/matches/").concat(n,"/addcomment"),{comment:e.data._id},{withCredentials:!0}).then((function(n){t.setState({comments:[e.data].concat(Object(s.a)(t.state.comments)),matches:[n.data].concat(Object(s.a)(t.state.matches))})})).catch((function(t){console.log("add comment fail")}))}))},t.handleMatchChange=function(e,n){L.a.patch("".concat(_,"/api/matches/").concat(n._id),{sports:e.target.sports.value,dateAndTime:e.target.dateAndTime.value,duration:e.target.duration.value,numberOfParticipants:e.target.numberOfParticipants.value,equipment:e.target.equipment.value,completed:!1},{withCredentials:!0}).then((function(e){var a=t.state.matches.map((function(t){return n._id===t._id&&(t.sports=e.data.sports,t.dateAndTime=e.data.dateAndTime,t.duration=e.data.duration,t.numberOfParticipants=e.data.numberOfParticipants,t.equipment=e.data.equipment),t}));t.setState({matches:a},(function(){t.props.history.push("/profile")}))}))},t.handleDelete=function(e){L.a.delete("".concat(_,"/api/matches/").concat(e),{withCredentials:!0}).then((function(){console.log("DELETING");var n=t.state.matches.filter((function(t){return t._id!==e}));t.setState({matches:n},(function(){t.props.history.push("/profile")}))})).catch((function(t){console.log("delete not working")}))},t}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var t=this;L.a.get("".concat(_,"/api/matches")).then((function(e){t.setState({matches:e.data})})).catch((function(t){})),L.a.get("".concat(_,"/api/user"),{withCredentials:!0}).then((function(e){t.setState({user:e.data,fetchingUser:!1})})).catch((function(e){t.setState({error:e.data,fetchingUser:!1})}))}},{key:"render",value:function(){var t=this,e=this.state,n=e.error,a=e.user,c=e.fetchingUser,r=e.matches;return c?Object(v.jsx)("p",{children:"Loading . . . "}):Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{children:Object(v.jsx)(R,{onLogout:this.handleLogout,user:a,error:n})}),Object(v.jsxs)(b.d,{children:[Object(v.jsx)(b.b,{exact:!0,path:"/",component:C,user:a}),Object(v.jsx)(b.b,{path:"/list",render:function(t){return Object(v.jsx)(Y,{matches:r})}}),Object(v.jsx)(b.b,{path:"/signup",render:function(e){return Object(v.jsx)(k,Object(o.a)({onSubmit:t.handleSignUp},e))}}),Object(v.jsx)(b.b,{path:"/signin",render:function(e){return Object(v.jsx)(M,Object(o.a)({error:n,onSignIn:t.handleSignIn},e))}}),Object(v.jsx)(b.b,{exact:!0,path:"/profile",render:function(e){return Object(v.jsx)(G,Object(o.a)({user:a,onAdd:t.handleAdd,matches:r,onDelete:t.handleDelete},e))}}),Object(v.jsx)(b.b,{exact:!0,path:"/matches/:matchesId",render:function(e){return Object(v.jsx)(X,Object(o.a)(Object(o.a)({user:a,matches:r,onCom:t.handleAddComment},e),{},{onAdd:t.handleJoin}))}}),Object(v.jsx)(b.b,{exact:!0,path:"/matches/:matchesId",render:function(e){return Object(v.jsx)(Z,Object(o.a)({user:a,onChange:t.handleMatchChange,matches:r},e))}})]})]})}}]),n}(a.Component),tt=Object(b.g)($);i.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(O.a,{children:Object(v.jsx)(tt,{})})}),document.getElementById("root"))},88:function(t,e,n){}},[[114,1,2]]]);
//# sourceMappingURL=main.29d60812.chunk.js.map