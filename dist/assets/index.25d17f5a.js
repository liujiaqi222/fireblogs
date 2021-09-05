var e=Object.defineProperty,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,a=(t,o,l)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[o]=l;import{f as s,c as n,p as i,a as r,u,r as d,o as c,b as g,d as m,e as p,g as v,w as f,h as b,v as h,n as P,i as w,j as y,t as k,T as M,k as T,l as L,m as C,q as N,s as I,x as A,y as _,z as q,F as B,A as U,B as H,C as $,D as x,E,G as F,Q as S,H as R,I as j,J as O,K as V}from"./vendor.d96f001e.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const D=s.initializeApp({apiKey:"AIzaSyBguThEHy9oGL9OjfPftMrT_4ftejQSEWA",authDomain:"fireblog-6aab4.firebaseapp.com",projectId:"fireblog-6aab4",storageBucket:"fireblog-6aab4.appspot.com",messagingSenderId:"789575169985",appId:"1:789575169985:web:0d6955a0449e3efb006140",measurementId:"G-EFZG328EP0"});s.firestore.FieldValue.serverTimestamp;var z=D.firestore();const W=n({actions:{getCurrentUser(e){z.collection("users").doc(s.auth().currentUser.uid).get().then((t=>{e.commit("setProfileInfo",t)}))},async updateUserSetting(e){const t=z.collection("users").doc(state.profileId);await t.update({name:e.state.profileName,userName:e.state.profileUserName})},async getPosts(e){e.state.postLoaded=!1;const t=z.collection("blogPost").orderBy("date","desc");(await t.get()).forEach((t=>{if(!e.state.blogPosts.some((e=>e.blogID===t.id))){const o={blogId:t.data().blogId,blogHTML:t.data().blogHTML,blogCoverPhoto:t.data().blogCoverPhoto,blogTitle:t.data().blogTitle,blogDate:t.data().date,blogPhotoName:t.data().blogPhotoName};e.state.blogPosts.push(o)}})),e.state.postLoaded=!0},async updatePost({commit:e,dispatch:t},o){e("filterBlogPost",o),await t("getPosts")},async deletePost({commit:e},t){e("filterBlogPost",t);const o=await z.collection("blogPost").doc(t);await o.delete()}},mutations:{toggleEditPost(e,t){e.editPost=t},updateUser(e,t){e.user=t},setProfileInfo(e,t){e.profileId=t.id,e.profileEmail=t.data().email,e.profileName=t.data().name,e.profileUserName=t.data().userName,e.isAdmin=t.data().isAdmin},changeName(e,t){e.profileName=t},changeUserName(e,t){e.profileUserName=t},newBlogPost(e,t){e.blogHTML=t},updateBlogTitle(e,t){e.blogTitle=t},fileNameChange(e,t){e.blogPhotoName=t},createFileURL(e,t){e.blogPhotoFileURL=t},openPhotoPreview(e){e.blogPhotoPreview=!e.blogPhotoPreview},filterBlogPost(e,t){e.blogPosts=e.blogPosts.filter((e=>e.blogId!==t))},setBlogState(e,t){e.blogTitle=t.blogTitle,e.blogHTML=t.blogHTML,e.blogPhotoFileURL=t.blogCoverPhoto,e.blogPhotoName=t.blogPhotoName}},state:{editPost:null,user:null,profileEmail:null,profileUserName:null,profileName:null,profileId:null,isAdmin:null,blogHTML:null,blogTitle:"",blogPhotoName:null,blogPhotoFileURL:null,blogPhotoPreview:null,editPost:null,blogPosts:[],postLoaded:null},getters:{blogPostsFeed:e=>e.blogPosts.slice(0,2),blogPostsCards:e=>e.blogPosts.slice(2,6)}});const G={setup(){u();let e=d(null),t=d(null),o=d(null);function l(){window.innerWidth<=768?e.value=!0:(e.value=!1,t.value=!1)}c((()=>{})),window.addEventListener("resize",l),l();let a=d(null),n=d(null);return{mobile:e,mobileNav:t,myMask:o,toggleMobileNav:function(){t.value=!t.value},profileMenu:a,toggleProfileMenu:function(e){e.target===n.value&&(a.value=!a.value)},profile:n,signOut:function(){s.auth().signOut(),window.location.reload()}}}};i("data-v-618c1962");const K={class:"container"},J={class:"branding"},Q=L("FireBlogs"),Y={class:"nav-links"},Z=L("首页"),X=L("博客"),ee=L("发文章"),te=L("登录/注册"),oe={style:{"font-size":"8px"}},le={class:"profile-menu"},ae={class:"info"},se={class:"name"},ne={class:"right"},ie={class:"options"},re={class:"option"},ue=p("svg",{class:"icon","aria-hidden":"true"},[p("use",{"xlink:href":"#icon-Serviceusers"})],-1),de=p("p",null,"账号设置",-1),ce={key:0,class:"option"},ge=p("svg",{class:"icon","aria-hidden":"true"},[p("use",{"xlink:href":"#icon-admin"})],-1),me=p("p",null,"管理员主页",-1),pe=[p("svg",{class:"icon","aria-hidden":"true"},[p("use",{"xlink:href":"#icon-log-out"})],-1),p("p",null,"退出登录",-1)],ve={class:"mobile-nav"},fe=L("首页"),be=L("博客"),he=L("发文章"),Pe=L("登录/注册");r(),G.render=function(e,t,o,l,a,s){const n=g("router-link");return T(),m("header",null,[p("nav",K,[p("div",J,[v(n,{class:"header",to:{name:"Home"}},{default:f((()=>[Q])),_:1})]),b(p("div",Y,[p("ul",null,[v(n,{class:P(["link",{active:"/"===e.$route.path}]),to:{name:"Home"}},{default:f((()=>[Z])),_:1},8,["class"]),v(n,{class:P(["link",{active:"/blogs"==e.$route.path}]),to:{name:"Blogs"}},{default:f((()=>[X])),_:1},8,["class"]),e.$store.state.isAdmin?(T(),w(n,{key:0,class:P(["link",{active:"/CreatePost"==e.$route.path}]),to:{name:"CreatePost"}},{default:f((()=>[ee])),_:1},8,["class"])):y("",!0),e.$store.state.user?y("",!0):(T(),w(n,{key:1,class:"link",to:{name:"Login"}},{default:f((()=>[te])),_:1}))]),e.$store.state.user?(T(),m("div",{key:0,class:"profile",ref:"profile",onClick:t[1]||(t[1]=(...e)=>l.toggleProfileMenu&&l.toggleProfileMenu(...e))},[p("span",oe,k(e.$store.state.profileName),1),b(p("div",le,[p("div",ae,[p("p",se,k(e.$store.state.profileName),1),p("div",ne,[p("p",null,k(e.$store.state.profileUserName),1),p("p",null,k(e.$store.state.profileEmail),1)])]),p("div",ie,[p("div",re,[v(n,{to:{name:"Profile"},class:"option"},{default:f((()=>[ue,de])),_:1})]),e.$store.state.isAdmin?(T(),m("div",ce,[v(n,{to:{name:"Admin"},class:"option"},{default:f((()=>[ge,me])),_:1})])):y("",!0),p("div",{class:"option",onClick:t[0]||(t[0]=(...e)=>l.signOut&&l.signOut(...e))},pe)])],512),[[h,l.profileMenu]])],512)):y("",!0)],512),[[h,!l.mobile]])]),b(p("i",{class:"fas fa-bars",onClick:t[2]||(t[2]=(...e)=>l.toggleMobileNav&&l.toggleMobileNav(...e))},null,512),[[h,l.mobile]]),b(p("div",{id:"mask",onClick:t[3]||(t[3]=e=>l.mobileNav=!1)},null,512),[[h,l.mobileNav]]),v(M,{name:"mobile-nav"},{default:f((()=>[b(p("ul",ve,[v(n,{class:P(["link",{active:"/"===e.$route.path}]),to:{name:"Home"}},{default:f((()=>[fe])),_:1},8,["class"]),v(n,{class:P(["link",{active:"/blogs"==e.$route.path}]),to:{name:"Blogs"}},{default:f((()=>[be])),_:1},8,["class"]),e.$store.state.isAdmin?(T(),w(n,{key:0,class:P(["link",{active:"/CreatePost"==e.$route.path}]),to:"#"},{default:f((()=>[he])),_:1},8,["class"])):y("",!0),e.$store.state.user?y("",!0):(T(),w(n,{key:1,class:"link",to:{name:"Login"}},{default:f((()=>[Pe])),_:1}))],512),[[h,l.mobileNav]])])),_:1})])},G.__scopeId="data-v-618c1962";const we={};i("data-v-503f647e");const ye={class:"container"},ke={class:"left"},Me={class:"col-1"},Te=L("FireBlogs"),Le=C('<ul data-v-503f647e><li data-v-503f647e><a href="#" class="icon" data-v-503f647e><i class="fab fa-twitter" data-v-503f647e></i></a></li><li data-v-503f647e><a href="#" class="icon" data-v-503f647e><i class="fab fa-instagram" data-v-503f647e></i></a></li><li data-v-503f647e><a href="#" class="icon" data-v-503f647e><i class="fab fa-github" data-v-503f647e></i></a></li><li data-v-503f647e><a href="#" class="icon" data-v-503f647e><i class="fab fa-youtube" data-v-503f647e></i></a></li></ul>',1),Ce={class:"col-2"},Ne=L("首页"),Ie=L("博客"),Ae=L("发文章"),_e=L("登录/注册"),qe=p("div",{class:"right"},[p("p",null,"Copyright 2021 All Rights Reserved")],-1);r(),we.render=function(e,t,o,l,a,s){const n=g("router-link");return T(),m("footer",null,[p("div",ye,[p("div",ke,[p("div",Me,[v(n,{class:"header",to:{name:"Home"}},{default:f((()=>[Te])),_:1}),Le]),p("div",Ce,[p("ul",null,[v(n,{class:"link",to:{name:"Home"}},{default:f((()=>[Ne])),_:1}),v(n,{class:"link",to:{name:"Blogs"}},{default:f((()=>[Ie])),_:1}),e.$store.state.isAdmin?(T(),w(n,{key:0,class:"link",to:{name:"CreatePost"}},{default:f((()=>[Ae])),_:1})):y("",!0),e.$store.state.user?y("",!0):(T(),w(n,{key:1,class:"link",to:{name:"Login"}},{default:f((()=>[_e])),_:1}))])])]),qe])])},we.__scopeId="data-v-503f647e";const Be={components:{Navigation:G,MyFooter:we},setup(){let e=d(null);const t=u(),o=N();function l(){if("Login"===t.name||"Register"===t.name||"ForgotPassword"===t.name)return e.value=!0;e.value=!1}return c((()=>{l()})),s.auth().onAuthStateChanged((e=>{o.commit("updateUser",e),o.dispatch("getPosts"),e&&o.dispatch("getCurrentUser")})),I(t,(()=>{l()})),{navigationDisabled:e}}},Ue={class:"app"};Be.render=function(e,t,o,l,a,s){const n=g("navigation"),i=g("router-view"),r=g("my-footer");return T(),m("div",Ue,[l.navigationDisabled?y("",!0):(T(),w(n,{key:0})),v(i),l.navigationDisabled?y("",!0):(T(),w(r,{key:1}))])};const He={props:["post"],setup:e=>({getImageUrl:function(e){return new URL({"../assets/blogPhotos/beautiful-stories.jpg":"/fireblogs/assets/beautiful-stories.74ffa450.jpg","../assets/blogPhotos/coding.jpg":"/fireblogs/assets/coding.02ba5261.jpg","../assets/blogPhotos/designed-for-everyone.jpg":"/fireblogs/assets/designed-for-everyone.6f40d45d.jpg"}[`../assets/blogPhotos/${e}.jpg`],window.location).href}})};i("data-v-27781675");const $e={class:"blog-content"},xe={key:0},Ee={key:1},Fe={key:2},Se=p("i",{class:"fas fa-arrow-right arrow-light arrow"},null,-1),Re=L("登录/注册 "),je=p("i",{class:"fas fa-arrow-right arrow"},null,-1),Oe=L("查看帖子 "),Ve={class:"blog-photo"},De=["src"],ze=["src"];r(),He.render=function(e,t,o,l,a,s){const n=g("router-link");return T(),m("div",{class:P(["blog-wrapper ",{"no-user":!e.$store.state.user}])},[p("div",$e,[p("div",null,[o.post.welcomeScreen?(T(),m("h2",xe,k(o.post.title),1)):(T(),m("h2",Ee,k(o.post.blogTitle),1)),o.post.welcomeScreen?(T(),m("p",Fe,k(o.post.blogPost),1)):y("",!0),o.post.welcomeScreen?(T(),w(n,{key:3,class:"link link-light",to:"#"},{default:f((()=>[Se,Re])),_:1})):(T(),w(n,{key:4,class:"link test2",to:`/view-blog/${o.post.blogId}`},{default:f((()=>[je,Oe])),_:1},8,["to"]))])]),p("div",Ve,[o.post.welcomeScreen?(T(),m("img",{key:0,src:l.getImageUrl(o.post.photo),alt:""},null,8,De)):(T(),m("img",{key:1,src:o.post.blogCoverPhoto,alt:""},null,8,ze))])],2)},He.__scopeId="data-v-27781675";const We={props:["post"],setup(e){const t=N();const o=A();return{deletePost:function(){t.dispatch("deletePost",e.post.blogId)},editPost:function(){o.push({name:"EditBlog",params:{blogId:e.post.blogId}})}}}};i("data-v-f354d4f2");const Ge={class:"blog-card"},Ke={class:"icons"},Je=[p("i",{class:"delete fas fa-trash-alt"},null,-1)],Qe=[p("i",{class:"edit fas fa-edit"},null,-1)],Ye=["src"],Ze={class:"info"},Xe=L(" 查看文章"),et=p("i",{class:"icon fas fa-arrow-right arrow"},null,-1);r(),We.render=function(e,t,o,l,a,s){const n=g("router-link");return T(),m("div",Ge,[b(p("div",Ke,[p("div",{class:"icon",onClick:t[0]||(t[0]=(...e)=>l.deletePost&&l.deletePost(...e))},Je),p("div",{class:"icon",onClick:t[1]||(t[1]=(...e)=>l.editPost&&l.editPost(...e))},Qe)],512),[[h,e.$store.state.editPost]]),p("img",{src:o.post.blogCoverPhoto,alt:""},null,8,Ye),p("div",Ze,[p("h4",null,k(o.post.blogTitle),1),p("h6",null," 发布日期："+k(new Date(o.post.blogDate).toLocaleString("zh-cn",{dateStyle:"long"})),1),v(n,{class:"link test",to:{name:"ViewBlog",params:{blogId:o.post.blogId}}},{default:f((()=>[Xe,et])),_:1},8,["to"])])])},We.__scopeId="data-v-f354d4f2";const tt={components:{BlogPost:He,BlogCard:We},setup(){const e=N();let t=_({title:"Welcome!",blogPost:"每周更新关于编程的博客，包括HTML、CSS、JavaScript甚至更多。今天注册，永远不错过最新的帖子。",welcomeScreen:!0,photo:"coding"}),o=q((()=>e.getters.blogPostsFeed));return{welcomeScreen:t,blogPostsCards:q((()=>e.getters.blogPostsCards)),blogPostsFeed:o}}};i("data-v-28e22a6e");const ot={class:"home"},lt={class:"blog-card-wrap"},at={class:"container"},st=p("h3",null,"查看更多最近发布的文章",-1),nt={class:"blog-cards"},it={key:1,class:"updates"},rt={class:"container"},ut=p("h2",null,"再也不错过任何一篇文章。 今天就免费注册一个账号！",-1),dt=L(" 注册FireBlogs的账号 "),ct=p("i",{class:"icon fas fa-arrow-right arrow arrow-light"},null,-1);r(),tt.render=function(e,t,o,l,a,s){const n=g("blog-post"),i=g("blog-card"),r=g("router-link");return T(),m("div",ot,[e.$store.state.user?y("",!0):(T(),w(n,{key:0,post:l.welcomeScreen},null,8,["post"])),(T(!0),m(B,null,U(l.blogPostsFeed,((e,t)=>(T(),w(n,{post:e,key:t},null,8,["post"])))),128)),p("div",lt,[p("div",at,[st,p("div",nt,[(T(!0),m(B,null,U(l.blogPostsCards,((e,t)=>(T(),w(i,{post:e,key:t},null,8,["post"])))),128))])])]),e.$store.state.user?y("",!0):(T(),m("div",it,[p("div",rt,[ut,v(r,{class:"router-button",to:"#"},{default:f((()=>[dt,ct])),_:1})])]))])},tt.__scopeId="data-v-28e22a6e";const gt={components:{BlogCard:We},setup(){const e=N();return H((()=>{e.commit("toggleEditPost",!1)})),{sampleBlogCards:q((()=>e.state.blogPosts)),editPost:q({get:()=>e.state.editPost,set(t){e.commit("toggleEditPost",t)}})}}};i("data-v-5ad5b24c");const mt={class:"blog-card-wrap"},pt={class:"blog-cards container"},vt={class:"toggleEdit"};r(),gt.render=function(e,t,o,l,a,s){const n=g("blog-card");return T(),m("div",mt,[p("div",pt,[p("div",vt,[b(p("span",null,"点击显示编辑按钮",512),[[h,!e.$store.state.editPost]]),b(p("span",null,"点击关闭编辑按钮",512),[[h,e.$store.state.editPost]]),b(p("input",{type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=e=>l.editPost=e),id:"checkbox"},null,512),[[$,l.editPost]])]),(T(!0),m(B,null,U(l.sampleBlogCards,((e,t)=>(T(),w(n,{post:e,key:t},null,8,["post"])))),128))])])},gt.__scopeId="data-v-5ad5b24c";const ft={setup(){let e=d(""),t=d(""),o=d(""),l=d("");const a=A();return{password:e,email:t,error:o,errorMessage:l,signIn:function(){if(""===t.value||""===e.value)return o.value=!0,void(l.value="请填写所有的输入框！");s.auth().signInWithEmailAndPassword(t.value,e.value).then((()=>{a.push({name:"Home"}),setTimeout((()=>{window.location.reload()}),500),o.value=!1})).catch((e=>(o.value=!0,"The email address is badly formatted."===e.message?l.value="请输入正确的邮箱":"The password is invalid or the user does not have a password."===e.message||"There is no user record corresponding to this identifier. The user may have been deleted."===e.message?l.value="密码或者账号不正确":void(l.value=e.message))))}}}},bt={class:"form-wrap"},ht={action:"",class:"login"},Pt={class:"login-register"},wt=L(" 还没有账号？ "),yt=L("注册"),kt=p("h2",null,"登录FireBlogs",-1),Mt={class:"inputs"},Tt={class:"input"},Lt=p("svg",{class:"icon","aria-hidden":"true"},[p("use",{"xlink:href":"#icon-youxiang"})],-1),Ct={class:"input"},Nt=p("svg",{class:"icon","aria-hidden":"true"},[p("use",{"xlink:href":"#icon-suo"})],-1),It={key:0,class:"error"},At=L("忘记了密码？"),_t=p("div",{class:"angle"},null,-1),qt=p("div",{class:"background"},null,-1);ft.render=function(e,t,o,l,a,s){const n=g("router-link");return T(),m("div",bt,[p("form",ht,[p("p",Pt,[wt,v(n,{class:"router-link",to:{name:"Register"}},{default:f((()=>[yt])),_:1})]),kt,p("div",Mt,[p("div",Tt,[b(p("input",{type:"text",placeholder:"邮箱","onUpdate:modelValue":t[0]||(t[0]=e=>l.email=e)},null,512),[[x,l.email]]),Lt]),p("div",Ct,[b(p("input",{type:"password",placeholder:"密码","onUpdate:modelValue":t[1]||(t[1]=e=>l.password=e)},null,512),[[x,l.password]]),Nt]),l.error?(T(),m("div",It,k(l.errorMessage),1)):y("",!0)]),v(n,{to:{name:"ForgotPassword"},class:"forgot-password"},{default:f((()=>[At])),_:1}),p("button",{onClick:t[2]||(t[2]=E(((...e)=>l.signIn&&l.signIn(...e)),["prevent"]))},"登录"),_t]),qt])};const Bt={setup(){let e=d(""),t=d(""),o=d(""),l=d(""),a=d(""),n=d(""),i=d(!1);const r=A();return{password:e,email:t,userName:o,name:l,isAdmin:i,error:a,errorMessage:n,register:async function(){if(""===t.value||""===e.value||""===o.value||""===l.value)return a.value=!0,void(n.value="请填写所有的输入框！");a.value=!1;const u=await s.auth(),d=await u.createUserWithEmailAndPassword(t.value,e.value),c=await d;console.log(c.user.uid);const g=z.collection("users").doc(c.user.uid);await g.set({name:l.value,userName:o.value,email:t.value,password:e.value,isAdmin:i.value}),r.push({name:"Home"}),setTimeout((()=>{window.location.reload()}),500)}}}};i("data-v-5c2dd458");const Ut={class:"form-wrap"},Ht={action:"",class:"register"},$t={class:"login-register"},xt=L(" 已经有账号了？ "),Et=L("登录"),Ft=p("h2",null,"创建FireBlogs账号",-1),St={class:"inputs"},Rt={class:"input"},jt=p("svg",{class:"icon icon1","aria-hidden":"true"},[p("use",{"xlink:href":"#icon-xingming"})],-1),Ot={class:"input"},Vt=p("svg",{class:"icon icon2","aria-hidden":"true"},[p("use",{"xlink:href":"#icon-yonghu"})],-1),Dt={class:"input"},zt=p("svg",{class:"icon","aria-hidden":"true"},[p("use",{"xlink:href":"#icon-youxiang"})],-1),Wt={class:"input"},Gt=p("svg",{class:"icon","aria-hidden":"true"},[p("use",{"xlink:href":"#icon-suo"})],-1),Kt={class:"input",id:"checkbox"},Jt=p("span",null," 是否申请成为管理员",-1),Qt={key:0,class:"error"},Yt=p("div",{class:"angle"},null,-1),Zt=p("div",{class:"background"},null,-1);r(),Bt.render=function(e,t,o,l,a,s){const n=g("router-link");return T(),m("div",Ut,[p("form",Ht,[p("p",$t,[xt,v(n,{class:"router-link",to:{name:"Login"}},{default:f((()=>[Et])),_:1})]),Ft,p("div",St,[p("div",Rt,[b(p("input",{type:"text",placeholder:"姓名","onUpdate:modelValue":t[0]||(t[0]=e=>l.name=e),required:"",maxlength:"4"},null,512),[[x,l.name]]),jt]),p("div",Ot,[b(p("input",{type:"text",placeholder:"用户名","onUpdate:modelValue":t[1]||(t[1]=e=>l.userName=e),required:"",maxlength:"12"},null,512),[[x,l.userName,void 0,{trim:!0}]]),Vt]),p("div",Dt,[b(p("input",{type:"email",placeholder:"邮箱","onUpdate:modelValue":t[2]||(t[2]=e=>l.email=e)},null,512),[[x,l.email]]),zt]),p("div",Wt,[b(p("input",{type:"password",placeholder:"密码","onUpdate:modelValue":t[3]||(t[3]=e=>l.password=e),required:"",maxlength:"18"},null,512),[[x,l.password]]),Gt]),p("div",Kt,[b(p("input",{type:"checkbox","onUpdate:modelValue":t[4]||(t[4]=e=>l.isAdmin=e)},null,512),[[$,l.isAdmin]]),Jt]),l.error?(T(),m("div",Qt,k(l.errorMessage),1)):y("",!0)]),p("button",{onClick:t[5]||(t[5]=E(((...e)=>l.register&&l.register(...e)),["prevent"]))},"注册"),Yt]),Zt])},Bt.__scopeId="data-v-5c2dd458";const Xt={props:["modalMessage"],emits:["close-modal"],setup(e,t){let o=d(document.body.clientHeight),l=d(null);return c((()=>{l.value.style.height=o.value})),{closeModal:function(){t.emit("close-modal")},modal:l}}};i("data-v-6806edd3");const eo={class:"modal",ref:"modal"},to={class:"modal-content"};r(),Xt.render=function(e,t,o,l,a,s){return T(),m("div",eo,[p("div",to,[p("p",null,k(o.modalMessage),1),p("button",{onClick:t[0]||(t[0]=(...e)=>l.closeModal&&l.closeModal(...e))},"关闭")])],512)},Xt.__scopeId="data-v-6806edd3";const oo={};i("data-v-7bb584b8");const lo={class:"loading"},ao=[p("span",null,null,-1)];r(),oo.render=function(e,t,o,l,a,s){return T(),m("div",lo,ao)},oo.__scopeId="data-v-7bb584b8";const so={components:{Modal:Xt,Loading:oo},setup(){let e=d(""),t=d(""),o=d(""),l=d("");return{email:e,modalActive:t,modalMessage:o,closeModal:function(){t.value=!t.value,e.value=""},loading:l,resetPassword:function(){l.value=!0,s.auth().sendPasswordResetEmail(e.value).then((()=>{o.value="如果您的账号已注册，您将收到一封邮件",l.value=!1,t.value=!0})).catch((e=>{o.value=e.message,l.value=!1,t.value=!0}))}}}};i("data-v-1674c4c2");const no={class:"reset-password"},io={class:"form-wrap"},ro={action:"",class:"reset"},uo={class:"login-register"},co=L(" 已经有账号了？ "),go=L("登录"),mo=p("h2",null,"重置密码",-1),po=p("p",null,"请输入邮箱来重置密码",-1),vo={class:"inputs"},fo={class:"input"},bo=p("svg",{class:"icon","aria-hidden":"true"},[p("use",{"xlink:href":"#icon-youxiang"})],-1),ho=p("div",{class:"angle"},null,-1),Po=p("div",{class:"background"},null,-1);r(),so.render=function(e,t,o,l,a,s){const n=g("modal"),i=g("loading"),r=g("router-link");return T(),m("div",no,[l.modalActive?(T(),w(n,{key:0,modalMessage:l.modalMessage,onCloseModal:l.closeModal},null,8,["modalMessage","onCloseModal"])):y("",!0),l.loading?(T(),w(i,{key:1})):y("",!0),p("div",io,[p("form",ro,[p("p",uo,[co,v(r,{class:"router-link",to:{name:"Login"}},{default:f((()=>[go])),_:1})]),mo,po,p("div",vo,[p("div",fo,[b(p("input",{type:"text",placeholder:"邮箱","onUpdate:modelValue":t[0]||(t[0]=e=>l.email=e)},null,512),[[x,l.email]]),bo])]),p("button",{onClick:t[1]||(t[1]=E(((...e)=>l.resetPassword&&l.resetPassword(...e)),["prevent"]))},"重置"),ho]),Po])])},so.__scopeId="data-v-1674c4c2";const wo={components:{Modal:Xt},setup(){let e=d("修改已经被保存！"),t=d(null);const o=N();let l=q({get:()=>o.state.profileName,set(e){o.commit("changeName",e)}}),a=q({get:()=>o.state.profileUserName,set(e){o.commit("changeUserName",e)}}),s=q({get:()=>o.state.profileEmail});return{modalMessage:e,modalActive:t,closeModal:function(){t.value=!1},name:l,userName:a,email:s,updateProfile:function(){t.value=!0,o.dispatch("updateUserSetting")}}}};i("data-v-f24fa022");const yo={class:"profile"},ko={class:"container"},Mo=p("h2",null,"账号设置",-1),To={class:"profile-info"},Lo={class:"name"},Co=p("div",{class:"admin-badge"},[p("svg",{class:"icon","aria-hidden":"true"},[p("use",{"xlink:href":"#icon-admin"})]),p("span",null,"管理员")],-1),No={class:"input"},Io=p("label",{for:"name"},"姓名",-1),Ao={class:"input"},_o=p("label",{for:"username"},"用户名:",-1),qo={class:"input"},Bo=p("label",{for:"email"},"邮箱",-1);r(),wo.render=function(e,t,o,l,a,s){const n=g("modal");return T(),m(B,null,[l.modalActive?(T(),w(n,{key:0,modalMessage:l.modalMessage,onCloseModal:l.closeModal},null,8,["modalMessage","onCloseModal"])):y("",!0),p("div",yo,[p("div",ko,[Mo,p("div",To,[p("div",Lo,k(e.$store.state.profileName),1),Co,p("div",No,[Io,b(p("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>l.name=e),max:"4"},null,512),[[x,l.name]])]),p("div",Ao,[_o,b(p("input",{type:"text",id:"username","onUpdate:modelValue":t[1]||(t[1]=e=>l.userName=e),max:"8"},null,512),[[x,l.userName]])]),p("div",qo,[Bo,b(p("input",{disabled:"",type:"text",id:"email","onUpdate:modelValue":t[2]||(t[2]=e=>l.email=e)},null,512),[[x,l.email]])]),p("button",{onClick:t[3]||(t[3]=(...e)=>l.updateProfile&&l.updateProfile(...e))},"保存修改")])])])],64)},wo.__scopeId="data-v-f24fa022";const Uo={components:{Modal:Xt,Loading:oo},setup(){let e=d(""),t=d(""),o=d(!1),l=d(!1),a=d("");return{adminEmail:e,functionMsg:t,addAdmin:function(){z.collection("users").where("email","==",e.value).get().then((e=>{let l=e.docs[0];return!0===l.data().isAdmin?(t.value="用户已经是管理员",new Promise((()=>{}))):(o.value=!0,l.id)}),(e=>{t.value="无法查询到该用户！"})).then((e=>{z.collection("users").doc(e).update({isAdmin:!0})})).then((()=>{o.value=!1,l.value=!0,a.value=`已经成功将邮箱${e.value}为管理员!`}))},loading:o,modalActive:l,modalMessage:a,closeModal:function(){l.value=!1}}}};i("data-v-df36dc60");const Ho={class:"admin"},$o={class:"container"},xo={class:"admin-info"},Eo=p("h2",null,"添加管理员",-1),Fo={class:"input"};r(),Uo.render=function(e,t,o,l,a,s){const n=g("modal"),i=g("loading");return T(),m(B,null,[l.modalActive?(T(),w(n,{key:0,modalMessage:l.modalMessage,onCloseModal:l.closeModal},null,8,["modalMessage","onCloseModal"])):y("",!0),l.loading?(T(),w(i,{key:1})):y("",!0),p("div",Ho,[p("div",$o,[p("div",xo,[Eo,p("div",Fo,[b(p("input",{placeholder:"输入要被设置为管理员的用户邮箱",type:"text",id:"addAdmins","onUpdate:modelValue":t[0]||(t[0]=e=>l.adminEmail=e)},null,512),[[x,l.adminEmail]])]),p("span",null,k(l.functionMsg),1),p("button",{onClick:t[1]||(t[1]=(...e)=>l.addAdmin&&l.addAdmin(...e)),class:"button"},"提交")])])])],64)},Uo.__scopeId="data-v-df36dc60";const So={theme:"snow",boundary:document.body,modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"]]},placeholder:"请在此处写下文章...",readOnly:!1},Ro={components:{Loading:oo},name:"quill-editor",props:{content:String,value:String,disabled:{type:Boolean,default:!1},options:{type:Object,required:!1,default:()=>({})}},emits:["ready","change","input","blur","focus","update:value"],setup(e,t){let o=d(null);const l={editorOption:{},quill:null};let a="";I((()=>e.value),(e=>{l.quill&&(e&&e!==a?(a=e,l.quill.pasteHTML(e)):e||l.quill.setText(""))})),I((()=>e.content),(e=>{l.quill&&(e&&e!==a?(a=e,l.quill.pasteHTML(e)):e||l.quill.setText(""))})),I((()=>e.disabled),(e=>{l.quill&&l.quill.enable(!e)}));const n=d(null),i=(e,t)=>{for(const o in t)e[o]&&"modules"===o?i(e[o],t[o]):e[o]=t[o];return e};return H((()=>{const e=n.value.previousSibling;e&&e.className.indexOf("ql-toolbar")>-1&&e.parentNode.removeChild(e)})),c((()=>{n.value&&(l.editorOption=i(So,e.options),l.editorOption.readOnly=!!e.disabled,l.quill=new S(n.value,l.editorOption),l.quill.getModule("toolbar").addHandler("image",((e,t,a,n)=>{const i=document.createElement("input");i.setAttribute("type","file"),i.click(),i.onchange=()=>{const e=i.files[0];if(console.log(e.type),/^image\//.test(e.type)){const t=s.storage().ref().child(`documents/blogPostPhotos/${e.name}`);o.value=!0,t.put(e).on("state_changed",(e=>{console.log(e)}),(e=>{console.log(e)}),(async()=>{const e=await t.getDownloadURL();l.quill.insertEmbed(a,"image",e),o.value=!1}))}else console.warn("You could only upload images.")}})),e.value&&l.quill.pasteHTML(e.value),l.quill.on("selection-change",(e=>{e?t.emit("focus",l.quill):t.emit("blur",l.quill)})),l.quill.on("text-change",(()=>{e.disabled&&l.quill.enable(!1);let o=n.value.children[0].innerHTML;const s=l.quill,i=l.quill.getText();"<p><br></p>"===o&&(o=""),a=o,t.emit("update:value",a),t.emit("change",{html:o,text:i,quill:s})})),t.emit("ready",l.quill))})),F((()=>{l.quill=null})),{editor:n,loading:o}}};i("data-v-46d297cf");const jo={ref:"editor",id:"editor"};r(),Ro.render=function(e,t,o,l,a,s){const n=g("loading");return T(),m(B,null,[b(v(n,null,null,512),[[h,l.loading]]),p("section",jo,null,512)],64)},Ro.__scopeId="data-v-46d297cf";const Oo={setup(){const e=N();return{blogCoverPhoto:q((()=>e.state.blogPhotoFileURL)),closePreview:function(){e.commit("openPhotoPreview")}}}};i("data-v-caf32100");const Vo={class:"modal",ref:"modal"},Do={class:"modal-content"},zo=[p("use",{"xlink:href":"#icon-guanbi1"},null,-1)],Wo=["src"];r(),Oo.render=function(e,t,o,l,a,s){return T(),m("div",Vo,[p("div",Do,[(T(),m("svg",{class:"icon","aria-hidden":"true",onClick:t[0]||(t[0]=(...e)=>l.closePreview&&l.closePreview(...e))},zo)),p("img",{src:this.blogCoverPhoto,alt:""},null,8,Wo)])],512)},Oo.__scopeId="data-v-caf32100";const Go={components:{Editor:Ro,BlogCoverPreview:Oo,Loading:oo},setup(){let e=d(null),t=d(null),o=d(null),l=d(null),a=d(null),n=d(null);const i=N(),r=A();return{error:e,errorMsg:t,blogPhoto:l,fileChange:function(){o.value=l.value.files[0],a.value=d(o.value.name),i.commit("fileNameChange",a.value),i.commit("createFileURL",URL.createObjectURL(o.value))},fileName:a,openPreview:function(){i.commit("openPhotoPreview")},uploadBlog:function(){if(n.value=!0,0!==i.state.blogTitle.length&&0!==i.state.blogHTML){if(o.value){const e=s.storage().ref().child(`documents/blogCoverPhotos/${i.state.blogPhotoName}`);return void e.put(o.value).on("state_changed",(e=>{console.log(e)}),(e=>{console.log(e),n.value=!1}),(async()=>{const t=await e.getDownloadURL(),o=await Date.now(),a=await z.collection("blogPost").doc();await a.set({blogId:a.id,blogHTML:i.state.blogHTML,blogCoverPhoto:t,blogPhotoName:i.state.blogPhotoName,blogTitle:i.state.blogTitle,profileId:i.state.profileId,date:o}),await i.dispatch("updatePost",a.id),n.value=!1,r.push({name:"ViewBlog",params:{blogId:a.id}}),i.state.blogTitle="",i.state.blogHTML="",l.value.value=null}))}return n.value=!1,e.value=!0,t.value="请确保已经上传了文章封面！",void setTimeout((()=>{e.value=!1}),5e3)}n.value=!1,e.value=!0,t.value="请确保已经填写了文章标题和文章内容！",setTimeout((()=>{e.value=!1}),5e3)},loading:n}},computed:{blogCoverPhotoName(){return this.$store.state.blogPhotoName},blogTitle:{get(){return this.$store.state.blogTitle},set(e){this.$store.commit("updateBlogTitle",e)}},blogHTML:{get(){return this.$store.state.blogHTML},set(e){this.$store.commit("newBlogPost",e)}}}},Ko={class:"create-post"},Jo={class:"container"},Qo=p("span",null,"Error：",-1),Yo={class:"blog-info"},Zo={class:"upload-file"},Xo=p("label",{for:"blog-photo"},"上传封面图片",-1),el={id:"editor"},tl={class:"blog-actions"},ol=L("发布预览");Go.render=function(e,t,o,l,a,s){const n=g("BlogCoverPreview"),i=g("loading"),r=g("editor"),u=g("router-link");return T(),m("div",Ko,[b(v(n,null,null,512),[[h,e.$store.state.blogPhotoPreview]]),b(v(i,null,null,512),[[h,l.loading]]),p("div",Jo,[p("div",{class:P([{invisible:!l.error},"err-message"])},[p("p",null,[Qo,L(k(l.errorMsg),1)])],2),p("div",Yo,[b(p("input",{type:"text",placeholder:"输入标题名称","onUpdate:modelValue":t[0]||(t[0]=e=>s.blogTitle=e)},null,512),[[x,s.blogTitle]]),p("div",Zo,[Xo,p("input",{type:"file",ref:"blogPhoto",id:"blog-photo",onChange:t[1]||(t[1]=(...e)=>l.fileChange&&l.fileChange(...e)),accept:".png, .jpg, ,jpeg"},null,544),p("button",{onClick:t[2]||(t[2]=(...e)=>l.openPreview&&l.openPreview(...e)),class:P(["preview",{"button-inactive":!e.$store.state.blogPhotoFileURL}]),to:{name:"BlogPreview"}}," 预览图片 ",2),p("span",null,"选择的文件："+k(e.$store.state.blogPhotoName),1)])]),p("div",el,[v(r,{value:s.blogHTML,"onUpdate:value":t[3]||(t[3]=e=>s.blogHTML=e)},null,8,["value"])]),p("div",tl,[p("button",{onClick:t[4]||(t[4]=(...e)=>l.uploadBlog&&l.uploadBlog(...e))},"发布文章"),v(u,{class:"router-button",to:{name:"BlogPreview"}},{default:f((()=>[ol])),_:1})])])])};const ll={setup(){},computed:((e,s)=>{for(var n in s||(s={}))o.call(s,n)&&a(e,n,s[n]);if(t)for(var n of t(s))l.call(s,n)&&a(e,n,s[n]);return e})({},R(["blogTitle","blogHTML","blogPhotoFileURL"]))},al={class:"post-view"},sl={class:"container quillWrapper"},nl=["src"],il=["innerHTML"];ll.render=function(e,t,o,l,a,s){return T(),m("div",al,[p("div",sl,[p("h2",null,k(e.blogTitle),1),p("img",{src:e.blogPhotoFileURL,alt:""},null,8,nl),p("div",{class:"post-content ql-editor",innerHTML:e.blogHTML},null,8,il)])])};const rl={setup(){let e=d(null);const t=N(),o=u();let l=d(null),a=d(null),s=d(null),n=d(null);return I((()=>t.state.postLoaded),(async()=>{t.state.postLoaded&&(e.value=await t.state.blogPosts.filter((e=>e.blogId===o.params.blogId)),l.value=e.value[0].blogTitle,s.value=new Date(e.value[0].blogDate).toLocaleString("zh-cn"),a.value=e.value[0].blogHTML,n.value=e.value[0].blogCoverPhoto)}),{immediate:!0,deep:!0}),{date:s,currentCover:n,currentHTML:a,currentBlogTitle:l}}},ul={class:"post-view"},dl={class:"container quillWrapper"},cl=["src"],gl=["innerHTML"];rl.render=function(e,t,o,l,a,s){return T(),m("div",ul,[p("div",dl,[p("h2",null,k(l.currentBlogTitle),1),p("h4",null,"发布日期："+k(l.date),1),p("img",{src:l.currentCover,alt:""},null,8,cl),p("div",{class:"post-content ql-editor",innerHTML:l.currentHTML},null,8,gl)])])};const ml={components:{Editor:Ro,BlogCoverPreview:Oo,Loading:oo},setup(){let e=d(null),t=d(null),o=d(null),l=d(null),a=d(null),n=d(null);const i=N(),r=A();const c=u();let g=d(null);return I((()=>i.state.postLoaded),(async()=>{i.state.postLoaded&&(g.value=await i.state.blogPosts.filter((e=>e.blogId===c.params.blogId)),i.commit("setBlogState",g.value[0]))}),{immediate:!0,deep:!0}),{error:e,errorMsg:t,blogPhoto:l,fileChange:function(){o.value=l.value.files[0],a.value=d(o.value.name),i.commit("fileNameChange",a.value),i.commit("createFileURL",URL.createObjectURL(o.value))},fileName:a,openPreview:function(){i.commit("openPhotoPreview")},updateBlog:async function(){n.value=!0;const a=z.collection("blogPost").doc(c.params.blogId);if(0!==i.state.blogTitle.length&&0!==i.state.blogHTML){if(o.value){const e=s.storage().ref().child(`documents/blogCoverPhotos/${i.state.blogPhotoName}`);return void e.put(o.value).on("state_changed",(e=>{console.log(e)}),(e=>{console.log(e),n.value=!1}),(async()=>{const t=await e.getDownloadURL(),o=Date.now();await a.update({blogHTML:i.state.blogHTML,blogCoverPhoto:t,blogPhotoName:i.state.blogPhotoName,blogTitle:i.state.blogTitle,date:o}),await i.dispatch("updatePost",c.params.blogId),n.value=!1,r.push({name:"ViewBlog",params:{blogId:c.params.blogId}}),i.state.blogTitle="",i.state.blogHTML="",l.value.value=null}))}return await a.update({blogHTML:i.state.blogHTML,blogTitle:i.state.blogTitle,date:Date.now()}),i.dispatch("updatePost",c.params.blogId),n.value=!1,void r.push({name:"ViewBlog",params:{blogId:c.params.blogId}})}n.value=!1,e.value=!0,t.value="请确保已经填写了文章标题和文章内容！",setTimeout((()=>{e.value=!1}),5e3)},loading:n}},computed:{blogPhotoName(){return this.$store.state.blogPhotoName},blogTitle:{get(){return this.$store.state.blogTitle},set(e){this.$store.commit("updateBlogTitle",e)}},blogHTML:{get(){return this.$store.state.blogHTML},set(e){this.$store.commit("newBlogPost",e)}}}},pl={class:"create-post"},vl={class:"container"},fl=p("span",null,"Error：",-1),bl={class:"blog-info"},hl={class:"upload-file"},Pl=p("label",{for:"blog-photo"},"上传封面图片",-1),wl={id:"editor"},yl={class:"blog-actions"},kl=L("发布预览");ml.render=function(e,t,o,l,a,s){const n=g("BlogCoverPreview"),i=g("loading"),r=g("editor"),u=g("router-link");return T(),m("div",pl,[b(v(n,null,null,512),[[h,e.$store.state.blogPhotoPreview]]),b(v(i,null,null,512),[[h,l.loading]]),p("div",vl,[p("div",{class:P([{invisible:!l.error},"err-message"])},[p("p",null,[fl,L(k(l.errorMsg),1)])],2),p("div",bl,[b(p("input",{type:"text",placeholder:"输入标题名称","onUpdate:modelValue":t[0]||(t[0]=e=>s.blogTitle=e)},null,512),[[x,s.blogTitle]]),p("div",hl,[Pl,p("input",{type:"file",ref:"blogPhoto",id:"blog-photo",onChange:t[1]||(t[1]=(...e)=>l.fileChange&&l.fileChange(...e)),accept:".png, .jpg, ,jpeg"},null,544),p("button",{onClick:t[2]||(t[2]=(...e)=>l.openPreview&&l.openPreview(...e)),class:P(["preview",{"button-inactive":!e.$store.state.blogPhotoFileURL}]),to:{name:"BlogPreview"}}," 预览图片 ",2),p("span",null,"选择的文件："+k(s.blogPhotoName),1)])]),p("div",wl,[v(r,{value:s.blogHTML,"onUpdate:value":t[3]||(t[3]=e=>s.blogHTML=e)},null,8,["value"])]),p("div",yl,[p("button",{onClick:t[4]||(t[4]=(...e)=>l.updateBlog&&l.updateBlog(...e))},"保存变化"),v(u,{class:"router-button",to:{name:"BlogPreview"}},{default:f((()=>[kl])),_:1})])])])};const Ml=[{path:"/",name:"Home",component:tt,meta:{title:"主页",requiresAuth:!1}},{path:"/blogs",name:"Blogs",component:gt,meta:{title:"Blogs",requiresAuth:!1}},{path:"/login",name:"Login",component:ft,meta:{title:"登录",requiresAuth:!1}},{path:"/register",name:"Register",component:Bt,meta:{title:"注册",requiresAuth:!1}},{path:"/forgot-password",name:"ForgotPassword",component:so,meta:{title:"重置密码",requiresAuth:!1}},{path:"/profile",name:"Profile",component:wo,meta:{title:"账号设置",requiresAuth:!0}},{path:"/admin",name:"Admin",component:Uo,meta:{title:"管理员",requiresAuth:!0,requiresAdmin:!0}},{path:"/create-post",name:"CreatePost",component:Go,meta:{title:"发布新文章",requiresAuth:!0,requiresAdmin:!0}},{path:"/post-preview",name:"BlogPreview",component:ll,meta:{title:"文章预览",requiresAuth:!0,requiresAdmin:!0}},{path:"/view-blog/:blogId",name:"ViewBlog",component:rl,meta:{title:"查看文章",requiresAuth:!1}},{path:"/edit-blog/:blogId",name:"EditBlog",component:ml,meta:{title:"编辑文章",requiresAuth:!0,requiresAdmin:!0}}],Tl=j({history:O(),routes:Ml});Tl.beforeEach(((e,t,o)=>{document.title=`${e.meta.title} | FireBlogs`,o()}));let Ll=null;Tl.beforeEach((async(e,t,o)=>{let l=s.auth().currentUser;if(l){z.collection("users").doc(s.auth().currentUser.uid).get().then((e=>{Ll=e.data().isAdmin,console.log("isAdmin",Ll)})),setTimeout((()=>{console.log("test isAdmin",Ll)}),0)}if(console.log(e.matched.some((e=>e.meta.requiresAuth)),"requiresAuth"),e.matched.some((e=>e.meta.requiresAuth)))return l?(console.log(e.matched.some((e=>e.meta.requiresAdmin))),e.matched.some((e=>e.meta.requiresAdmin))?(console.log("requiresAdmin"),console.log("admin",Ll,"final"),Ll?(console.log(999),o()):o({name:"Home"})):o()):o({name:"Home"});o()}));i("data-v-41a575c4"),r(),V(Be).use(Tl).use(W).mount("#app");
