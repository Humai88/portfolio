(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{103:function(e,t,a){},214:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),i=a(37),n=a.n(i),r=(a(103),a(59)),o=a.n(r),l=a(6),j=a(24),b=a.n(j),m=a(25),d=a(1),p=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),a=t[0],s=t[1],i=function(){s(!1)};return Object(d.jsxs)("div",{className:b.a.wrapper,children:[Object(d.jsx)("input",{type:"checkbox",className:b.a.toggler,checked:a,onChange:function(){s(!a)}}),Object(d.jsx)("div",{className:b.a.hamburger,children:Object(d.jsx)("div",{})}),Object(d.jsx)("div",{className:b.a.menu,children:Object(d.jsx)("div",{children:Object(d.jsx)("div",{children:Object(d.jsxs)("ul",{children:[Object(d.jsx)(m.Link,{onClick:i,activeClass:"active",to:"home",spy:!0,smooth:!0,offset:0,duration:1100,children:"Home"}),Object(d.jsx)(m.Link,{onClick:i,activeClass:"active",to:"skills",spy:!0,smooth:!0,offset:0,duration:800,children:"Skills"}),Object(d.jsx)(m.Link,{onClick:i,activeClass:"active",to:"works",spy:!0,smooth:!0,offset:0,duration:800,children:"Works"}),Object(d.jsx)(m.Link,{onClick:i,activeClass:"active",to:"contacts",spy:!0,smooth:!0,offset:0,duration:1100,children:"Contacts"})]})})})})]})},g=a(91),x=a.n(g),A=function(){return Object(d.jsx)("div",{className:x.a.wrapper,children:Object(d.jsx)(p,{})})},h=a(41),u=a.n(h),O=function(){return Object(d.jsx)("div",{className:u.a.wrapper,children:Object(d.jsxs)("div",{className:u.a.container,children:[Object(d.jsx)("h3",{children:"Gumay"}),Object(d.jsxs)("div",{className:u.a.links,children:[Object(d.jsx)("a",{href:"https://www.linkedin.com/in/gumay-vierdiyeva-296949215/",target:"_blank",rel:"noreferrer",children:"Linkedin"}),Object(d.jsx)("a",{href:"https://www.instagram.com/gumay88/?hl=en",target:"_blank",rel:"noreferrer",children:"Instagram"}),Object(d.jsx)("a",{href:"https://www.facebook.com/gumay.verdiyeva/",target:"_blank",rel:"noreferrer",children:"Facebook"})]}),Object(d.jsx)("p",{children:"Copyright"})]})})},f=a(7),_=a.n(f),w=a.p+"static/media/photo_2021-08-31_00-35-04.ceab40c3.jpg",k=a(5),v=50,N=160,D=function(e){var t=e.messages,a=Object(c.useState)({text:"",message:"",isDeleting:!1,loopNum:0,typingSpeed:N}),s=Object(l.a)(a,2),i=s[0],n=s[1];function r(e){return e.isDeleting?e.message.substring(0,e.text.length-1):e.message.substring(0,e.text.length+1)}function o(e,t){return t[Number(e.loopNum)%Number(t.length)]}function j(e){return e.isDeleting?N:v}return Object(c.useEffect)((function(){var e;return function t(){n((function(e){return Object(k.a)(Object(k.a)({},e),{},{text:r(e),typingSpeed:j(e)})})),e=setTimeout(t,i.typingSpeed)}(),function(){return clearTimeout(e)}}),[i.isDeleting]),Object(c.useEffect)((function(){i.isDeleting||i.text!==i.message?i.isDeleting&&""===i.text&&n((function(e){return Object(k.a)(Object(k.a)({},e),{},{isDeleting:!1,loopNum:e.loopNum+1,message:o(e,t)})})):setTimeout((function(){n((function(e){return Object(k.a)(Object(k.a)({},e),{},{isDeleting:!0})}))}),500)}),[i.text,i.message,i.isDeleting,t]),Object(d.jsx)("span",{className:_.a.typewriter,children:i.text})},E=function(){return Object(d.jsxs)("div",{id:"home",className:_.a.wrapper,children:[Object(d.jsxs)("ul",{className:_.a.circles,children:[Object(d.jsx)("li",{}),Object(d.jsx)("li",{}),Object(d.jsx)("li",{}),Object(d.jsx)("li",{}),Object(d.jsx)("li",{}),Object(d.jsx)("li",{}),Object(d.jsx)("li",{}),Object(d.jsx)("li",{}),Object(d.jsx)("li",{}),Object(d.jsx)("li",{}),Object(d.jsx)("li",{}),Object(d.jsx)("li",{}),Object(d.jsx)("li",{})]}),Object(d.jsxs)("div",{className:_.a.container,children:[Object(d.jsxs)("div",{className:_.a.descrWrapper,children:[Object(d.jsx)("p",{className:_.a.subheader,children:"Hi there"}),Object(d.jsx)("h1",{children:"I am Gumay"}),Object(d.jsx)("div",{className:_.a.underline}),Object(d.jsx)(D,{messages:["A React Developer.","This is my website.","I am at your service."]})]}),Object(d.jsx)("div",{className:_.a.wrapImage,children:Object(d.jsx)("div",{className:_.a.imgHover,children:Object(d.jsx)("img",{src:w,className:_.a.img,alt:""})})})]})]})},S=a(26),y=a.n(S),B=function(e){var t=e.title,a=e.img;return Object(d.jsxs)("div",{className:y.a.wrapper,children:[Object(d.jsxs)("div",{className:y.a.iconWrapper,children:[Object(d.jsx)("div",{className:y.a.img}),a]}),Object(d.jsx)("h3",{className:y.a.header,children:t})]})},M=a(4),H=a.n(M),C=a(9),T=a(23),W=function(){return Object(d.jsxs)("div",{id:"skills",className:H.a.wrapper,children:[Object(d.jsx)("h2",{children:"My skills"}),Object(d.jsx)("div",{className:H.a.line}),Object(d.jsxs)("div",{className:H.a.container,children:[Object(d.jsx)(B,{img:Object(d.jsx)(C.d,{style:{color:"#ECD662"},className:H.a.icon})}),Object(d.jsx)(B,{img:Object(d.jsx)(C.i,{style:{color:"#2978B5"},className:H.a.icon})}),Object(d.jsx)(B,{img:Object(d.jsx)(C.c,{style:{color:"#FF4C29"},className:H.a.icon})}),Object(d.jsx)(B,{img:Object(d.jsx)(C.a,{style:{color:"#3DB2FF"},className:H.a.icon})}),Object(d.jsx)(B,{img:Object(d.jsx)(C.f,{style:{color:"#3EDBF0"},className:H.a.icon})}),Object(d.jsx)(B,{img:Object(d.jsx)(C.g,{style:{color:"#7952B3"},className:H.a.icon})}),Object(d.jsx)(B,{img:Object(d.jsx)(C.b,{style:{color:"#DD2C00"},className:H.a.icon})}),Object(d.jsx)(B,{img:Object(d.jsx)(T.b,{style:{color:"#E36BAE"},className:H.a.icon})})]}),Object(d.jsx)("h2",{className:H.a.tools,children:"Tools I Use"}),Object(d.jsx)("div",{className:H.a.line}),Object(d.jsxs)("div",{className:"".concat(H.a.container," ").concat(H.a.toolsWrapper),children:[Object(d.jsx)(B,{img:Object(d.jsx)(C.j,{style:{color:"#2978B5"},className:H.a.icon})}),Object(d.jsx)(B,{img:Object(d.jsx)(C.e,{style:{color:"#FF5722"},className:H.a.icon})}),Object(d.jsx)(B,{img:Object(d.jsx)(C.h,{style:{color:"#FD6F96"},className:H.a.icon})}),Object(d.jsx)(B,{img:Object(d.jsx)(T.c,{style:{color:"#548CA8"},className:H.a.icon})})]})]})},R=a(8),L=a.n(R),I=a(92),F=function(e){var t=e.title,a=e.text,c=e.imgSrc,s=e.ghLink,i=e.webLink;return Object(d.jsxs)("div",{className:L.a.card,children:[Object(d.jsx)("div",{className:"".concat(L.a.face," ").concat(L.a.face1),children:Object(d.jsxs)("div",{className:L.a.content,children:[Object(d.jsx)("img",{className:L.a.img,src:c}),Object(d.jsx)("h3",{children:t})]})}),Object(d.jsx)("div",{className:"".concat(L.a.face," ").concat(L.a.face2),children:Object(d.jsxs)("div",{className:L.a.content,children:[Object(d.jsx)("p",{children:a}),Object(d.jsxs)("div",{className:L.a.linksWrapper,children:[Object(d.jsxs)("a",{href:s,target:"_blank",rel:"noreferrer",children:[Object(d.jsx)(I.a,{className:L.a.icon}),"GitHub"]}),Object(d.jsxs)("a",{className:L.a.btn,href:i,target:"_blank",rel:"noreferrer",children:[Object(d.jsx)(T.a,{})," Visit the Site"]})]})]})})]})},Q=a(42),G=a.n(Q),Y=function(){return Object(d.jsxs)("div",{id:"works",className:G.a.wrapper,children:[Object(d.jsx)("h2",{children:"Projects"}),Object(d.jsx)("div",{className:G.a.line}),Object(d.jsxs)("div",{className:G.a.container,children:[Object(d.jsx)(F,{title:"Social Network",text:"A social network website I built using React (functional components, Hooks), Redux (Redux Thunk), React-Redux, REST Api (fetching, displaying and posting data), Axios, Formik, Yup and Typescript. ",imgSrc:"data:image/png;base64,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",ghLink:"https://github.com/Humai88/socialnetwork",webLink:"http://Humai88.github.io/socialnetwork"}),Object(d.jsx)(F,{title:"Todolist",text:"A website for creating a tasks-list. I implemented there React (functional components, Hooks), Redux (Redux Thunk), REST Api (fetching, displaying and posting data), Axios, SASS, Material UI ",imgSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAB7ElEQVR4nO2YPVLDMBBG1wwnYIKHIsMJuAUVHIQ+J4ML0MShChVhhgM4JWfgUcRkhP9kK5JlO/tm0iha69svq0heEUVRFEWpADwCOdMnBx6a8kxaDMhFZBnE3eHJkyS57RXxZ18gQYNhy+NiSDFjRA2ILSA2akBsAbHpbQD2+0FmzF0AK+DKr+wBaDo+LMkDrIt5KbArxlbDZ3DU63actxhgfWAp+R2wML57sxh4ClmNlla93v8DgFREXkXkTkQ+ReQ+SZJvY8qP7zXN5f09yaECgGvgo5jyBdx4E+SIrQJ6B5rjwAbYcij5ctmnHvSfTGgD3o2E/yUPvADPNfE+/gMqez2WAeavfkzeEp95MGA9CgMME7bFJ7XFD01wA7wv7BmbDpdjcG8+uIlibu4iekhcDHiSbonlxdxpMpYSPpUQW2BWqAGxBcRGDYgtIDbaEWqi5SaoHSHbA/HXEcp6xs2uI2QK7xKnHaEaTdaK7RVojqMdoWAdoc4dH9c8nANLBoTqCHXu+Ljm4RxYHkc7Qp4X9oxNh3aEHGK0IzQlQmyBWaEGxBYQGzUgtoDY9DKAwz0+m9KYM3XHx1zGTM5+C1z2nL+Ratdl7GNu6E3wTGjbAnsRWc6hCqTl5a2tArq+9Y2dab+VKoqiKAH5BQwkGLUsFhtIAAAAAElFTkSuQmCC",ghLink:"https://github.com/Humai88/todolist",webLink:"https://humai88.github.io/todolist/"}),Object(d.jsx)(F,{title:"Blog",text:"A primary school teacher's blog (Standalone server) that I first built using vanilla JS but after a while migrated it to React. I implemented CSS Modules approach and SASS for styling. For displaying data I used fetching data from a local JSON.",imgSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEDklEQVR4nO2bTWgWRxjHn1GbUDSpHwW1ltIeil6lUsUPVCxFBaGgHgq9tD0otkrx5KXiTUW86UEKHgQRb970IjV+K8SWYiGt9mJrLYJWmoiEkPw8zPPyLm/23Z3dndlJyv4gJOw+n/+dvLMzmYg0NJQC6AGOAn9TnMfAEaAndh+l0Qaqcjh2H6XRpwiwuoTv2tZICFFbLbQeYSx/X8wIFRi4AVwLFT86eU+w6v26CDYCpguNAN1uAL3APuA2MNI5f/kqwMNU2o0Rrf1bir5vAEuAn12yZMS4DlyN0HgaPwFLXJvvpd38I2A70NetAaegGQKU9XeI3wd8Bgxpqnu4jATssG81Pz/DbkoLkMgzT3sB+MbF4Y4ab8+xy2yAnPeAugTQXDs13S0X42E1njTsO+zyBKh03ydAv6b7z8XYqbDpJEBWvuY9IHYBsWkEiF1AbBoBYhcQm0aA2AXEphEgdgGxmeUzGLBMRDaIyPrEtXMiMiAiV4wxQz7zBaHoWgDYDZwDnpDPE7XdPVXWAibNUETEGDPpXppdB0/FPu0bInJdRF6IyBr92iwi700qICePL1z7KjICxtV0ANilwz/PZ5naDqjvuHMHFXEecQUEOK+mfwCLChSySH0Azrv6VSWEAG9id30AfgHecvDpAwbV5y4w27H+yngXQG3fpr3peJmMTUfgDeCi2j4EFhaovzJBBFD7D2jPAGeBtA9WA5xWm6fAhwXrr0wwAdTnI9p7iVm8BFaV7qICQQVQvy3AWEbzY8CWUtV7ILgA6vsFMJHS/ATwVZmYvqhFAPU/mCLA92Xj+aI2ATTGiUTzP1SJ5YtufXldDCX4TkQm9Of9gXKEwccImIrUPQKSiX8Uu0SektSxITK3hhz+8P0rACwHRnUq3Oorbok66psFUmIe0LCPgQU+YxeoIaoAM4GrGvpfOs4NkHKWIMC1eAJo3HeB52nxY10TSf8QHFGHzAMSRTHG/CX2/UBEZBx432f8LGjvVQx33kubBn8VkZUisklELvgsxBhzBtgmIjtE5Ayw0RgzLnYPcaLD3Oe1T/T7/dwigb06WoaAebkOBQEW0D5pfsB3/JR884HfNd8eF4de7Lk6sKerdgL9nov6FDstjgLLfcZO5OjHHvFrNT+I64FJ7EHJlgjd+BPH9T2wGDipgqYtl0MzCLxTVMEe7DHTm3Tf7XnkEGcddhusboaxte8hxL/mtLLk2HyJHeZgN01XAMHXH7WQJQB2E/RQ4mmc+t803qKbAMAc4ILeHsPleOp0JE0A7NvePb31DNgYq77gdAoArAb+0cu/AUtj1hecpADA58ArvXQJhz+TTXsSH3DHEj8fB2bGrq0WgAeJxkeBr2PXVCvAx8AV7Dp/Tex6GkryGurz1giw98FjAAAAAElFTkSuQmCC",ghLink:"https://github.com/Humai88/on-les",webLink:"https://www.on-les.com/"})]})]})},U=a(98),K=a(60),P=a.n(K),J=function(e){var t=e.red,a=e.className,c=Object(U.a)(e,["red","className"]),s="".concat(t?P.a.red:P.a.default," ").concat(a);return Object(d.jsx)("button",Object(k.a)({className:s},c))},V=a(43),X=a.n(V),q=function(){return Object(d.jsxs)("div",{className:X.a.wrapper,children:[Object(d.jsx)("h3",{children:"I Am Available For Remote Job"}),Object(d.jsx)("div",{className:X.a.line}),Object(d.jsx)("a",{href:"https://www.linkedin.com/in/gumay-vierdiyeva-296949215/detail/contact-info/",target:"_blank",rel:"noreferrer",children:Object(d.jsx)(J,{className:X.a.btn,children:"Hire me"})})]})},z=a(17),Z=a(27),$=a(44),ee=a.n($),te=a(63),ae=a.n(te),ce=function(e){var t=Object(z.c)(e),a=Object(l.a)(t,2),c=a[0],s=a[1],i=(e.label,e.className);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(k.a)(Object(k.a)({className:"".concat(ae.a.input," ").concat(i)},c),e)),s.touched&&s.error?Object(d.jsx)("div",{className:ae.a.error,children:s.error}):null]})},se=a(64),ie=a.n(se),ne=function(e){var t=Object(z.c)(e),a=Object(l.a)(t,2),c=a[0],s=a[1],i=(e.label,e.className);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("textarea",Object(k.a)(Object(k.a)({className:"".concat(ie.a.textarea," ").concat(i)},c),e)),s.touched&&s.error?Object(d.jsx)("div",{className:ie.a.error,children:s.error}):null]})},re=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(z.b,{initialValues:{name:"",email:"",message:""},validationSchema:Z.a({name:Z.b().min(2,"Must be at least 2 characters").max(30,"Must be less then 30 characters").required("Required!"),email:Z.b().email("Must be a valid email!").required("Required!"),message:Z.b().min(50,"Must be at least 50 characters")}),onSubmit:function(e,t){var a=t.setSubmitting;(0,t.resetForm)(),a(!1),console.log(e)},children:function(e){return Object(d.jsxs)(z.a,{className:ee.a.form,children:[Object(d.jsx)(ce,{type:"text",name:"name",placeholder:"Name"}),Object(d.jsx)(ce,{type:"text",name:"email",placeholder:"E-mail"}),Object(d.jsx)(ne,{name:"message",placeholder:"Your message"}),Object(d.jsx)("div",{className:ee.a.msg,children:"Message has been sent"}),Object(d.jsx)(J,{className:ee.a.btn,type:"submit",children:e.isSubmitting?"Loading...":"send message"})]})}})})},oe=a(65),le=a.n(oe),je=function(){return Object(d.jsxs)("div",{id:"contacts",className:le.a.wrapper,children:[Object(d.jsx)("h2",{children:"Contact"}),Object(d.jsx)("div",{className:le.a.line}),Object(d.jsx)(re,{})]})};var be=function(){return Object(d.jsxs)("div",{className:o.a.wrapper,children:[Object(d.jsx)(A,{}),Object(d.jsxs)("div",{className:o.a.content,children:[Object(d.jsx)(E,{}),Object(d.jsx)(W,{}),Object(d.jsx)(Y,{}),Object(d.jsx)(q,{}),Object(d.jsx)(je,{})]}),Object(d.jsx)(O,{})]})},me=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,215)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),i(e),n(e)}))};n.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(be,{})}),document.getElementById("root")),me()},24:function(e,t,a){e.exports={wrapper:"Navigation_wrapper__2K07U",linksWrapper:"Navigation_linksWrapper__2FArr",toggler:"Navigation_toggler__NDJVe",hamburger:"Navigation_hamburger__3hddS",menu:"Navigation_menu__2nb9Y"}},26:function(e,t,a){e.exports={wrapper:"Skill_wrapper__V4jVY",iconWrapper:"Skill_iconWrapper__1lzNK",img:"Skill_img__17S4q",header:"Skill_header__3nA9K",descr:"Skill_descr__3N_cz"}},4:function(e,t,a){e.exports={wrapper:"SkillsSection_wrapper__uQJoy",container:"SkillsSection_container__hInvT",line:"SkillsSection_line__311mb",icon:"SkillsSection_icon__1TpfN",tools:"SkillsSection_tools__1xefG",toolsWrapper:"SkillsSection_toolsWrapper__11rmW"}},41:function(e,t,a){e.exports={wrapper:"Footer_wrapper__30CW4",container:"Footer_container__1ksQ3",links:"Footer_links__1Iw-L"}},42:function(e,t,a){e.exports={wrapper:"WorksSection_wrapper__2TK_L",container:"WorksSection_container__3jp2M",line:"WorksSection_line__35Iu9"}},43:function(e,t,a){e.exports={wrapper:"RemoteJob_wrapper__PaykM",btn:"RemoteJob_btn__3Aww5",line:"RemoteJob_line__35I-8"}},44:function(e,t,a){e.exports={form:"Form_form__3bz6i",btn:"Form_btn__9quah",msg:"Form_msg__3hdii",msgAppear:"Form_msgAppear__3jE4m"}},59:function(e,t,a){e.exports={wrapper:"App_wrapper__3VsLU",content:"App_content__1dgm5"}},60:function(e,t,a){e.exports={default:"Button_default__3et6r"}},63:function(e,t,a){},64:function(e,t,a){e.exports={textarea:"Textarea_textarea__AgwFO"}},65:function(e,t,a){e.exports={wrapper:"Contacts_wrapper__RTc82",line:"Contacts_line__2tKRt"}},7:function(e,t,a){e.exports={wrapper:"Main_wrapper__1Ajgt",container:"Main_container__3WpME",subheader:"Main_subheader__162Tc",typewriter:"Main_typewriter__3jSkf","blink-caret":"Main_blink-caret__1Wme8",underline:"Main_underline__KlH4e",imgHover:"Main_imgHover__5jy5z",img:"Main_img__1KL3c",wrapImage:"Main_wrapImage__29xiX",circles:"Main_circles__3pBxP",animate:"Main_animate__13-Dq",typing:"Main_typing__v0Lta"}},8:function(e,t,a){e.exports={card:"Work_card__3pU5z",img:"Work_img__bhkUS",face:"Work_face__3TkgR",face1:"Work_face1__2_1qb",content:"Work_content__21oeg",face2:"Work_face2__3MeVw",linksWrapper:"Work_linksWrapper__2gdMz",icon:"Work_icon__3feTQ"}},91:function(e,t,a){e.exports={wrapper:"Header_wrapper__1ssxg"}}},[[214,1,2]]]);
//# sourceMappingURL=main.666b22ab.chunk.js.map