(this["webpackJsonp99-unit-activities"]=this["webpackJsonp99-unit-activities"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),s=n(12),r=n.n(s),i=(n(23),n(24),n(25),n(0));var l=function(){return Object(i.jsx)("div",{className:"header-bg",children:Object(i.jsx)("h1",{children:"EMPLOYEE DIRECTORY"})})},h=n(13),j=n(14),o=n(15),d=n(18),u=n(17);var b=function(e){return Object(i.jsx)("form",{children:Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("input",{onChange:e.handleInputChange,value:e.value,name:e.name,type:"text",className:"form-control",placeholder:"Search Employee Data",id:"search"}),Object(i.jsx)("br",{}),Object(i.jsx)("button",{onClick:e.handleFormSubmit,className:"btn btn-outline-dark",children:"Search"})]})})};var m=function(e){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("img",{src:e.picture,alt:e.firstName})}),Object(i.jsx)("td",{children:e.firstName}),Object(i.jsx)("td",{children:e.lastName}),Object(i.jsx)("td",{children:Object(i.jsx)("a",{href:e.email,children:e.email})}),Object(i.jsx)("td",{children:e.phone}),Object(i.jsx)("td",{children:e.birthday})]})},O=n(16),x=n.n(O),p=function(){return x.a.get("https://randomuser.me/api/?results=5")},f=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={users:[],search:"",results:[],display:"",sort:"asc"},e.searchEmployeeData=function(t){p(t).then((function(t){return e.setState({users:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){t.preventDefault(),console.log(t.target.value),console.log(t.target.name),console.log(t.target);var n=t.target,a=n.name,c=n.value;e.setState(Object(h.a)({},a,c),(function(){console.log("x",e.state)}))},e.handleFormSubmit=function(t){t.preventDefault(),console.log(t.target);var n=e.state.users.filter((function(t){return console.log("z",t.name.first.match(new RegExp(e.state.search,"i"))),t.name.first.match(new RegExp(e.state.search,"i"))}));e.setState({results:n},(function(){console.log("y",e.state)}))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.searchEmployeeData()}},{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(b,{name:"search",value:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),Object(i.jsxs)("p",{children:['the searched value is " ',this.state.search,' "']}),Object(i.jsxs)("table",{className:"table table-striped App",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Image"}),Object(i.jsx)("th",{children:"First Name"}),Object(i.jsx)("th",{children:"Last Name"}),Object(i.jsx)("th",{children:"e-mail"}),Object(i.jsx)("th",{children:"Phone"}),Object(i.jsx)("th",{children:"Birthday"})]})}),Object(i.jsx)("tbody",{children:this.state.users.map((function(e,t){return Object(i.jsx)(m,{picture:e.picture.thumbnail,firstName:e.name.first,lastName:e.name.last,email:e.email,phone:e.phone,birthday:e.dob.date},t)}))})]}),Object(i.jsxs)("table",{className:"table table-striped App",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Image"}),Object(i.jsx)("th",{children:"First Name"}),Object(i.jsx)("th",{children:"Last Name"}),Object(i.jsx)("th",{children:"e-mail"}),Object(i.jsx)("th",{children:"Phone"}),Object(i.jsx)("th",{children:"Birthday"})]})}),Object(i.jsx)("tbody",{children:this.state.results.map((function(e,t){return Object(i.jsx)(m,{picture:e.picture.thumbnail,firstName:e.name.first,lastName:e.name.last,email:e.email,phone:e.phone,birthday:e.dob.date},t)}))})]})]})}}]),n}(a.Component);var g=function(){return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(l,{}),Object(i.jsx)(f,{})]})};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.457a61ca.chunk.js.map