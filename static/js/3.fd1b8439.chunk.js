(this.webpackJsonpsocial_network=this.webpackJsonpsocial_network||[]).push([[3],{333:function(e,t,a){e.exports={container:"Profile_container__2S1QA",upper_container_image:"Profile_upper_container_image__5BLgj",fullName:"Profile_fullName__3GhK9",avaSection:"Profile_avaSection__1xI92",aboutMe:"Profile_aboutMe__1GD4S",contacts:"Profile_contacts__2QgIE",formOnError:"Profile_formOnError__1-7Wa"}},334:function(e,t,a){e.exports={container:"PostSection_container__1dsMW",containerInput:"PostSection_containerInput__30rQF",containerButton:"PostSection_containerButton__3PXCj"}},335:function(e,t,a){e.exports={post_ava:"Post_post_ava__3WTEW",like:"Post_like__2vjOL",likeDiv:"Post_likeDiv__2TSgK"}},336:function(e,t,a){"use strict";a.r(t);var n=a(39),r=a(27),o=a(41),l=a(40),s=a(0),c=a.n(s),i=a(333),u=a.n(i),m=a(75),p=a(118),f=a.n(p),d=c.a.memo((function(e){var t=Object(s.useState)(!1),a=Object(m.a)(t,2),n=a[0],r=a[1],o=Object(s.useState)(e.status),l=Object(m.a)(o,2),i=l[0],u=l[1];Object(s.useEffect)((function(){u(e.status)}),[e.status]);var p=function(){r(!1),e.updateUserStatus(i)};return c.a.createElement("div",null,c.a.createElement("div",null,!n&&c.a.createElement("div",null,c.a.createElement("span",{onDoubleClick:function(){r(!0)}},c.a.createElement("b",null,"Status : "),e.status||"--------"," ")),n&&c.a.createElement("div",null,c.a.createElement("input",{value:i,onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:p}),c.a.createElement("button",{onClick:p,value:i},"send"))))})),E=a(76),b=a(66),v=a(35),h=a(140),_=Object(h.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return c.a.createElement("form",{onSubmit:t},c.a.createElement("button",null,"save"),c.a.createElement("div",null,n&&c.a.createElement("div",null," ",c.a.createElement("span",{className:u.a.formOnError}," ",n)),c.a.createElement("p",{className:u.a.fullName},Object(v.a)("Full name",[b.b],"fullName",v.b))),c.a.createElement("div",null,c.a.createElement("b",null,"Looking for a job:",Object(v.a)("looking For A Job",null,"lookingForAJob",v.b,{type:"checkbox"}))),c.a.createElement("div",null,c.a.createElement("b",null,"Professional skills :",Object(v.a)("Skills",null,"lookingForAJobDescription",v.c)," ")),c.a.createElement("div",null,c.a.createElement("b",null,"About me : ",Object(v.a)("About Me",null,"aboutMe",v.c))),c.a.createElement("div",{className:u.a.contacts},Object.keys(a.contacts).map((function(e){return c.a.createElement("div",{className:u.a.contacts,key:e},e,":",Object(v.a)(e,null,"contacts.".concat(e),v.b)," ")}))))})),k=c.a.memo((function(e){var t=Object(s.useState)(!1),a=Object(m.a)(t,2),n=a[0],r=a[1];if(!e.profile)return c.a.createElement(E.a,null);return c.a.createElement("div",{className:u.a.upper_container},c.a.createElement("img",{className:u.a.upper_container_image,alt:"1",src:"https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"}),c.a.createElement("div",{className:u.a.avaSection},c.a.createElement("img",{alt:"avatar",src:e.profile.photos.large||e.profile.photos.small||f.a}),c.a.createElement("div",null,n?c.a.createElement(_,{initialValues:e.profile,profile:e.profile,onSubmit:function(t){e.saveProfile(t).then((function(){r(!1)}))}}):c.a.createElement(g,{editProfile:function(){r(!0)},profile:e.profile}),c.a.createElement("div",null,e.isOwner&&c.a.createElement("input",{onChange:function(t){t.target.files.length&&e.updateUserPhoto(t.target.files[0])},type:"file"})),c.a.createElement("div",null,c.a.createElement(d,{status:e.status,updateUserStatus:e.updateUserStatus})))))})),g=function(e){var t=e.profile,a=e.editProfile;return c.a.createElement("div",null,c.a.createElement("button",{onClick:a},"edit"),c.a.createElement("div",null,c.a.createElement("p",{className:u.a.fullName},t.fullName)),c.a.createElement("div",null,c.a.createElement("b",null,"Looking for a job:",t.lookingForAJob?"yes":"no")),t.lookingForAJob&&c.a.createElement("div",null,c.a.createElement("b",null,"Professional skills : ",t.lookingForAJobDescription)),c.a.createElement("div",null,c.a.createElement("b",null,"About me : ",t.aboutMe)),c.a.createElement("div",{className:u.a.contacts},Object.keys(t.contacts).map((function(e){return c.a.createElement(P,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))))},P=function(e){var t=e.contactTitle,a=e.contactValue;return c.a.createElement("div",null,c.a.createElement("b",null,t)," : ",a)},S=a(335),O=a.n(S),j=function(e){return c.a.createElement("div",{className:O.a.container},c.a.createElement("img",{className:O.a.post_ava,alt:"avatar",src:"https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg"}),c.a.createElement("div",{className:O.a.post_container},e.message,c.a.createElement("div",{className:O.a.likeDiv},c.a.createElement("button",null,"-"),c.a.createElement("span",null,c.a.createElement("div",{className:O.a.like},"like"),e.likesCount),c.a.createElement("button",null,"+"))))},N=a(334),U=a.n(N),y=a(98),I=Object(b.a)(30),A=Object(h.a)({form:"postSectionItem"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",null,"My posts"),c.a.createElement("div",{className:U.a.containerInput},c.a.createElement(y.a,{component:v.c,name:"postItem",placeholder:"Type your post",validate:[b.b,I]})),c.a.createElement("div",{className:U.a.containerButton},c.a.createElement("button",null,"Add")))})),C=c.a.memo((function(e){var t=e.posts.map((function(e){return c.a.createElement(j,{key:e.id,message:e.message,likesCount:e.likesCount})}));return c.a.createElement("div",{key:"postElementContainer",className:U.a.container},c.a.createElement(A,{onSubmit:function(t){e.addPostActionCreator(t.postItem)}}),c.a.createElement("div",{key:"postElement"},t))})),w=a(107),T=a(19),D=Object(T.b)((function(e){return{posts:e.postsSection.posts,newPostText:e.postsSection.newPostText}}),{addPostActionCreator:w.a})(C),F=function(e){return c.a.createElement("div",{className:u.a.container},c.a.createElement(k,{saveProfile:e.saveProfile,updateUserPhoto:e.updateUserPhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateUserStatus:e.updateUserStatus}),c.a.createElement(D,null))},J=a(106),M=a(12),x=a(11),B=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedId)||this.props.history.push("/login"),this.props.profileUserThunk(this.props.match.params.userId),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return s.createElement(F,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,saveProfile:this.props.saveProfile,updateUserStatus:this.props.updateUserStatus,updateUserPhoto:this.props.updateUserPhoto}))}}]),a}(s.Component);t.default=Object(x.d)(M.f,J.a,Object(T.b)((function(e){return{profile:e.postsSection.profile,status:e.postsSection.status,authorizedId:e.auth.userId,isAuth:e.auth.isAuth}}),{profileUserThunk:w.d,setUserProfile:w.f,getUserStatus:w.c,updateUserStatus:w.h,updateUserPhoto:w.g,saveProfile:w.e}))(B)}}]);
//# sourceMappingURL=3.fd1b8439.chunk.js.map