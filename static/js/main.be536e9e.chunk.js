(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,function(e,t,a){e.exports={wrapper:"Main_wrapper__1Ajgt",container:"Main_container__3WpME",subheader:"Main_subheader__162Tc",descr:"Main_descr__2JC3H",typewriter:"Main_typewriter__3jSkf",typing:"Main_typing__v0Lta","blink-caret":"Main_blink-caret__1Wme8",underline:"Main_underline__KlH4e",imgHover:"Main_imgHover__5jy5z",img:"Main_img__1KL3c",wrapImage:"Main_wrapImage__29xiX",circles:"Main_circles__3pBxP",animate:"Main_animate__13-Dq"}},function(e,t,a){e.exports={wrapper:"SkillsSection_wrapper__uQJoy",container:"SkillsSection_container__hInvT",line:"SkillsSection_line__311mb",icon:"SkillsSection_icon__1TpfN"}},,function(e,t,a){e.exports={card:"Work_card__3pU5z",img:"Work_img__bhkUS",face:"Work_face__3TkgR",face1:"Work_face1__2_1qb",content:"Work_content__21oeg",face2:"Work_face2__3MeVw"}},,function(e,t,a){e.exports={wrapper:"Navigation_wrapper__2K07U",linksWrapper:"Navigation_linksWrapper__2FArr",toggler:"Navigation_toggler__NDJVe",hamburger:"Navigation_hamburger__3hddS",menu:"Navigation_menu__2nb9Y"}},,function(e,t,a){e.exports={wrapper:"Skill_wrapper__V4jVY",iconWrapper:"Skill_iconWrapper__1lzNK",img:"Skill_img__17S4q",header:"Skill_header__3nA9K",descr:"Skill_descr__3N_cz"}},,,,,,function(e,t,a){e.exports={wrapper:"Footer_wrapper__30CW4",container:"Footer_container__1ksQ3",links:"Footer_links__1Iw-L"}},function(e,t,a){e.exports={wrapper:"WorksSection_wrapper__2TK_L",container:"WorksSection_container__3jp2M",line:"WorksSection_line__35Iu9"}},function(e,t,a){e.exports={wrapper:"RemoteJob_wrapper__PaykM",btn:"RemoteJob_btn__3Aww5",line:"RemoteJob_line__35I-8"}},function(e,t,a){e.exports={wrapper:"Contacts_wrapper__RTc82",btn:"Contacts_btn__34D30",line:"Contacts_line__2tKRt"}},,,,,,function(e,t,a){e.exports={wrapper:"App_wrapper__3VsLU",content:"App_content__1dgm5"}},function(e,t,a){e.exports={default:"Button_default__3et6r"}},,,,function(e,t,a){e.exports={wrapper:"Header_wrapper__1ssxg"}},,function(e,t,a){e.exports={form:"Form_form__3bz6i"}},,,,,,function(e,t,a){},,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),i=a(14),n=a.n(i),r=(a(38),a(25)),l=a.n(r),o=a(15),j=a(8),b=a.n(j),A=a(9),m=a(1),d=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],s=t[1],i=function(){s(!1)};return Object(m.jsxs)("div",{className:b.a.wrapper,children:[Object(m.jsx)("input",{type:"checkbox",className:b.a.toggler,checked:a,onChange:function(){s(!a)}}),Object(m.jsx)("div",{className:b.a.hamburger,children:Object(m.jsx)("div",{})}),Object(m.jsx)("div",{className:b.a.menu,children:Object(m.jsx)("div",{children:Object(m.jsx)("div",{children:Object(m.jsxs)("ul",{children:[Object(m.jsx)(A.Link,{onClick:i,activeClass:"active",to:"home",spy:!0,smooth:!0,offset:0,duration:1100,children:"Home"}),Object(m.jsx)(A.Link,{onClick:i,activeClass:"active",to:"skills",spy:!0,smooth:!0,offset:0,duration:800,children:"Skills"}),Object(m.jsx)(A.Link,{onClick:i,activeClass:"active",to:"works",spy:!0,smooth:!0,offset:0,duration:800,children:"Works"}),Object(m.jsx)(A.Link,{onClick:i,activeClass:"active",to:"contacts",spy:!0,smooth:!0,offset:0,duration:1100,children:"Contacts"})]})})})})]})},p=a(30),x=a.n(p),g=function(){return Object(m.jsx)("div",{className:x.a.wrapper,children:Object(m.jsx)(d,{})})},u=a(16),h=a.n(u),O=function(){return Object(m.jsx)("div",{className:h.a.wrapper,children:Object(m.jsxs)("div",{className:h.a.container,children:[Object(m.jsx)("h3",{children:"Gumay"}),Object(m.jsxs)("div",{className:h.a.links,children:[Object(m.jsx)("a",{href:"l",children:"Linkedin"}),Object(m.jsx)("a",{href:"i",children:"Instagram"}),Object(m.jsx)("a",{href:"f",children:"Facebook"})]}),Object(m.jsx)("p",{children:"Copyright"})]})})},f=a(3),_=a.n(f),w=a.p+"static/media/Lumii_20210818_134947399.1f690baa.jpg",v=a(5),D=50,N=160,k=function(e){var t=e.messages,a=Object(c.useState)({text:"",message:"",isDeleting:!1,loopNum:0,typingSpeed:N}),s=Object(o.a)(a,2),i=s[0],n=s[1];function r(e){return e.isDeleting?e.message.substring(0,e.text.length-1):e.message.substring(0,e.text.length+1)}function l(e,t){return t[Number(e.loopNum)%Number(t.length)]}function j(e){return e.isDeleting?N:D}return Object(c.useEffect)((function(){var e;return function t(){n((function(e){return Object(v.a)(Object(v.a)({},e),{},{text:r(e),typingSpeed:j(e)})})),e=setTimeout(t,i.typingSpeed)}(),function(){return clearTimeout(e)}}),[i.isDeleting]),Object(c.useEffect)((function(){i.isDeleting||i.text!==i.message?i.isDeleting&&""===i.text&&n((function(e){return Object(v.a)(Object(v.a)({},e),{},{isDeleting:!1,loopNum:e.loopNum+1,message:l(e,t)})})):setTimeout((function(){n((function(e){return Object(v.a)(Object(v.a)({},e),{},{isDeleting:!0})}))}),500)}),[i.text,i.message,i.isDeleting,t]),Object(m.jsx)("span",{className:_.a.typewriter,children:i.text})},E=function(){return Object(m.jsxs)("div",{id:"home",className:_.a.wrapper,children:[Object(m.jsxs)("ul",{className:_.a.circles,children:[Object(m.jsx)("li",{}),Object(m.jsx)("li",{}),Object(m.jsx)("li",{}),Object(m.jsx)("li",{}),Object(m.jsx)("li",{}),Object(m.jsx)("li",{}),Object(m.jsx)("li",{}),Object(m.jsx)("li",{}),Object(m.jsx)("li",{}),Object(m.jsx)("li",{}),Object(m.jsx)("li",{}),Object(m.jsx)("li",{}),Object(m.jsx)("li",{})]}),Object(m.jsxs)("div",{className:_.a.container,children:[Object(m.jsxs)("div",{className:_.a.descrWrapper,children:[Object(m.jsx)("p",{className:_.a.subheader,children:"Hi there"}),Object(m.jsx)("h1",{children:"I am Gumay"}),Object(m.jsx)("div",{className:_.a.underline}),Object(m.jsx)(k,{messages:["A React Developer.","This is my website.","I am at your service."]})]}),Object(m.jsx)("div",{className:_.a.wrapImage,children:Object(m.jsx)("div",{className:_.a.imgHover,children:Object(m.jsx)("img",{src:w,className:_.a.img,alt:""})})})]})]})},B=a(10),S=a.n(B),H=function(e){var t=e.title,a=e.img;return Object(m.jsxs)("div",{className:S.a.wrapper,children:[Object(m.jsxs)("div",{className:S.a.iconWrapper,children:[Object(m.jsx)("div",{className:S.a.img}),a]}),Object(m.jsx)("h3",{className:S.a.header,children:t})]})},M=a(4),C=a.n(M),T=a(7),y=a(31),I=function(){return Object(m.jsxs)("div",{id:"skills",className:C.a.wrapper,children:[Object(m.jsx)("h2",{children:"My skills"}),Object(m.jsx)("div",{className:C.a.line}),Object(m.jsxs)("div",{className:C.a.container,children:[Object(m.jsx)(H,{title:"TypeScript",img:Object(m.jsx)(T.e,{className:C.a.icon})}),Object(m.jsx)(H,{title:"HTML",img:Object(m.jsx)(T.b,{className:C.a.icon})}),Object(m.jsx)(H,{title:"CSS",img:Object(m.jsx)(T.a,{className:C.a.icon})})]}),Object(m.jsxs)("div",{className:C.a.container,children:[Object(m.jsx)(H,{title:"React",img:Object(m.jsx)(T.c,{className:C.a.icon})}),Object(m.jsx)(H,{title:"Redux",img:Object(m.jsx)(T.d,{className:C.a.icon})}),Object(m.jsx)(H,{title:"SASS",img:Object(m.jsx)(y.a,{className:C.a.icon})})]})]})},W=a(6),L=a.n(W),Q=function(e){var t=e.title,a=e.text,c=e.imgSrc;return Object(m.jsxs)("div",{className:L.a.card,children:[Object(m.jsx)("div",{className:"".concat(L.a.face," ").concat(L.a.face1),children:Object(m.jsxs)("div",{className:L.a.content,children:[Object(m.jsx)("img",{className:L.a.img,src:c}),Object(m.jsx)("h3",{children:t})]})}),Object(m.jsx)("div",{className:"".concat(L.a.face," ").concat(L.a.face2),children:Object(m.jsxs)("div",{className:L.a.content,children:[Object(m.jsx)("p",{children:a}),Object(m.jsx)("a",{href:"#",children:"Open"})]})})]})},R=a(17),G=a.n(R),Y=function(){return Object(m.jsxs)("div",{id:"works",className:G.a.wrapper,children:[Object(m.jsx)("h2",{children:"Projects"}),Object(m.jsx)("div",{className:G.a.line}),Object(m.jsxs)("div",{className:G.a.container,children:[Object(m.jsx)(Q,{title:"Social Network",text:"I prefer this to using template literals like @steven iseki suggested because it is easier to add and remove classes without having to wrap them in ${} every single time.",imgSrc:"data:image/png;base64,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"}),Object(m.jsx)(Q,{title:"Todolist",text:"I prefer this to using template literals like @steven iseki suggested because it is easier to add and remove classes without having to wrap them in ${} every single time.",imgSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAB7ElEQVR4nO2YPVLDMBBG1wwnYIKHIsMJuAUVHIQ+J4ML0MShChVhhgM4JWfgUcRkhP9kK5JlO/tm0iha69svq0heEUVRFEWpADwCOdMnBx6a8kxaDMhFZBnE3eHJkyS57RXxZ18gQYNhy+NiSDFjRA2ILSA2akBsAbHpbQD2+0FmzF0AK+DKr+wBaDo+LMkDrIt5KbArxlbDZ3DU63actxhgfWAp+R2wML57sxh4ClmNlla93v8DgFREXkXkTkQ+ReQ+SZJvY8qP7zXN5f09yaECgGvgo5jyBdx4E+SIrQJ6B5rjwAbYcij5ctmnHvSfTGgD3o2E/yUPvADPNfE+/gMqez2WAeavfkzeEp95MGA9CgMME7bFJ7XFD01wA7wv7BmbDpdjcG8+uIlibu4iekhcDHiSbonlxdxpMpYSPpUQW2BWqAGxBcRGDYgtIDbaEWqi5SaoHSHbA/HXEcp6xs2uI2QK7xKnHaEaTdaK7RVojqMdoWAdoc4dH9c8nANLBoTqCHXu+Ljm4RxYHkc7Qp4X9oxNh3aEHGK0IzQlQmyBWaEGxBYQGzUgtoDY9DKAwz0+m9KYM3XHx1zGTM5+C1z2nL+Ratdl7GNu6E3wTGjbAnsRWc6hCqTl5a2tArq+9Y2dab+VKoqiKAH5BQwkGLUsFhtIAAAAAElFTkSuQmCC"}),Object(m.jsx)(Q,{title:"Blog",text:"I prefer this to using template literals like @steven iseki suggested because it is easier to add and remove classes without having to wrap them in ${} every single time.",imgSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEDklEQVR4nO2bTWgWRxjHn1GbUDSpHwW1ltIeil6lUsUPVCxFBaGgHgq9tD0otkrx5KXiTUW86UEKHgQRb970IjV+K8SWYiGt9mJrLYJWmoiEkPw8zPPyLm/23Z3dndlJyv4gJOw+n/+dvLMzmYg0NJQC6AGOAn9TnMfAEaAndh+l0Qaqcjh2H6XRpwiwuoTv2tZICFFbLbQeYSx/X8wIFRi4AVwLFT86eU+w6v26CDYCpguNAN1uAL3APuA2MNI5f/kqwMNU2o0Rrf1bir5vAEuAn12yZMS4DlyN0HgaPwFLXJvvpd38I2A70NetAaegGQKU9XeI3wd8Bgxpqnu4jATssG81Pz/DbkoLkMgzT3sB+MbF4Y4ab8+xy2yAnPeAugTQXDs13S0X42E1njTsO+zyBKh03ydAv6b7z8XYqbDpJEBWvuY9IHYBsWkEiF1AbBoBYhcQm0aA2AXEphEgdgGxmeUzGLBMRDaIyPrEtXMiMiAiV4wxQz7zBaHoWgDYDZwDnpDPE7XdPVXWAibNUETEGDPpXppdB0/FPu0bInJdRF6IyBr92iwi700qICePL1z7KjICxtV0ANilwz/PZ5naDqjvuHMHFXEecQUEOK+mfwCLChSySH0Azrv6VSWEAG9id30AfgHecvDpAwbV5y4w27H+yngXQG3fpr3peJmMTUfgDeCi2j4EFhaovzJBBFD7D2jPAGeBtA9WA5xWm6fAhwXrr0wwAdTnI9p7iVm8BFaV7qICQQVQvy3AWEbzY8CWUtV7ILgA6vsFMJHS/ATwVZmYvqhFAPU/mCLA92Xj+aI2ATTGiUTzP1SJ5YtufXldDCX4TkQm9Of9gXKEwccImIrUPQKSiX8Uu0SektSxITK3hhz+8P0rACwHRnUq3Oorbok66psFUmIe0LCPgQU+YxeoIaoAM4GrGvpfOs4NkHKWIMC1eAJo3HeB52nxY10TSf8QHFGHzAMSRTHG/CX2/UBEZBx432f8LGjvVQx33kubBn8VkZUisklELvgsxBhzBtgmIjtE5Ayw0RgzLnYPcaLD3Oe1T/T7/dwigb06WoaAebkOBQEW0D5pfsB3/JR884HfNd8eF4de7Lk6sKerdgL9nov6FDstjgLLfcZO5OjHHvFrNT+I64FJ7EHJlgjd+BPH9T2wGDipgqYtl0MzCLxTVMEe7DHTm3Tf7XnkEGcddhusboaxte8hxL/mtLLk2HyJHeZgN01XAMHXH7WQJQB2E/RQ4mmc+t803qKbAMAc4ILeHsPleOp0JE0A7NvePb31DNgYq77gdAoArAb+0cu/AUtj1hecpADA58ArvXQJhz+TTXsSH3DHEj8fB2bGrq0WgAeJxkeBr2PXVCvAx8AV7Dp/Tex6GkryGurz1giw98FjAAAAAElFTkSuQmCC"})]})]})},F=a(33),K=a(26),P=a.n(K),U=function(e){var t=e.red,a=e.className,c=Object(F.a)(e,["red","className"]),s="".concat(t?P.a.red:P.a.default," ").concat(a);return Object(m.jsx)("button",Object(v.a)({className:s},c))},X=a(18),J=a.n(X),V=function(){return Object(m.jsxs)("div",{className:J.a.wrapper,children:[Object(m.jsx)("h3",{children:"I Am Available For Remote Job"}),Object(m.jsx)("div",{className:J.a.line}),Object(m.jsx)(U,{className:J.a.btn,children:"Hire me"})]})},z=a(32),q=a.n(z),Z=function(){return Object(m.jsxs)("form",{action:"",className:q.a.form,children:[Object(m.jsx)("input",{placeholder:"Name"}),Object(m.jsx)("input",{placeholder:"E-mail"}),Object(m.jsx)("textarea",{name:"",placeholder:"Your message"})]})},$=a(19),ee=a.n($),te=function(){return Object(m.jsxs)("div",{id:"contacts",className:ee.a.wrapper,children:[Object(m.jsx)("h2",{children:"Contact"}),Object(m.jsx)("div",{className:ee.a.line}),Object(m.jsx)(Z,{}),Object(m.jsx)(U,{className:ee.a.btn,children:"send message"})]})};var ae=function(){return Object(m.jsxs)("div",{className:l.a.wrapper,children:[Object(m.jsx)(g,{}),Object(m.jsxs)("div",{className:l.a.content,children:[Object(m.jsx)(E,{}),Object(m.jsx)(I,{}),Object(m.jsx)(Y,{}),Object(m.jsx)(V,{}),Object(m.jsx)(te,{})]}),Object(m.jsx)(O,{})]})},ce=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,51)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),i(e),n(e)}))};n.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(ae,{})}),document.getElementById("root")),ce()}],[[50,1,2]]]);
//# sourceMappingURL=main.be536e9e.chunk.js.map