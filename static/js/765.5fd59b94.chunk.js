"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[765],{1008:function(n,r,o){o.d(r,{GX:function(){return h},Rn:function(){return x},__:function(){return f},ff:function(){return p},l0:function(){return d}});var e,t,a,i,c,l=o(168),s=o(6444),u=o(8454),d=s.ZP.form(e||(e=(0,l.Z)(["\n  width: 450px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  border: 1px solid black;\n  margin: auto;\n  padding: 15px;\n  border-radius: 8px;\n  border-color: var(--color-blue-300);\n"]))),f=s.ZP.label(t||(t=(0,l.Z)(["\n  margin-bottom: 15px;\n  font-weight: 600;\n  font-size: var(--font-size-500);\n  color: var(--color-blue-200);\n"]))),p=s.ZP.input.attrs((function(){return{type:"text",name:"name",autoComplete:"off",required:!0,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}}))(a||(a=(0,l.Z)(["\n  display: block;\n  margin-top: 5px;\n  border: 2px solid var(--color-gray-200);\n  border-radius: 4px;\n  box-shadow: 0px 4px 4px 0px var(--color-gray-100);\n  background-color: inherit;\n\n  &::placeholder {\n    font-family: inherit;\n    font-size: var(--font-size-500);\n    color: var(--color-white);\n  }\n  &:hover,\n  &:focus {\n    outline: none;\n    border-color: var(--color-blue-200);\n    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  &:not(:placeholder-shown) {\n    color: var(--color-white);\n  }\n"]))),x=s.ZP.input.attrs((function(){return{type:"tel",name:"number",autoComplete:"off",required:!0,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}}))(i||(i=(0,l.Z)(["\n  display: block;\n  margin-top: 5px;\n  border: 2px solid var(--color-gray-200);\n  border-radius: 4px;\n  box-shadow: 0px 4px 4px 0px var(--color-gray-100);\n  background-color: inherit;\n  &::placeholder {\n    font-family: inherit;\n    font-size: var(--font-size-500);\n    color: var(--color-white);\n  }\n  &:hover,\n  &:focus {\n    outline: none;\n    border-color: var(--color-blue-200);\n    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  &:not(:placeholder-shown) {\n    color: var(--color-white);\n  }\n"]))),h=(0,s.ZP)(u.Z).attrs((function(){return{type:"submit"}}))(c||(c=(0,l.Z)(["\nfont-size: var(--font-size-400);\n"])))},5822:function(n,r,o){o.d(r,{Z:function(){return u}});var e,t,a=o(168),i=o(6444),c=i.ZP.section(e||(e=(0,a.Z)(["\n  width: 300px;\n  margin: 0 auto;\n  padding-top: 20px;\n  padding-bottom: 20px;\n"]))),l=i.ZP.h2(t||(t=(0,a.Z)(["\n  color: var(--color-blue-300);\n  font-size: var(--font-size-600);\n  margin: 15px auto;\n"]))),s=o(3329);function u(n){var r=n.title,o=n.children;return(0,s.jsxs)(c,{children:[r&&(0,s.jsx)(l,{children:r}),o]})}},765:function(n,r,o){o.r(r),o.d(r,{default:function(){return B}});var e=o(2791),t=o(9434),a=o(885),i=o(5218),c=o(3634),l=function(n){return n.contacts.loading},s=function(n){return n.contacts.filter},u=function(n){return n.contacts.items},d=o(1008),f=o(3329);function p(){var n=(0,e.useState)(""),r=(0,a.Z)(n,2),o=r[0],l=r[1],s=(0,e.useState)(""),p=(0,a.Z)(s,2),x=p[0],h=p[1],b=(0,t.v9)(u),m=(0,t.I0)(),v=function(){l(""),h("")};return(0,f.jsxs)(d.l0,{onSubmit:function(n){n.preventDefault();var r=function(n){var r=n.toLowerCase();return b.find((function(n){return n.name.toLowerCase()===r}))}(o);if(r)return i.Am.error("".concat(o," is already in contacts.")),void v();m((0,c.uK)({name:o,number:x})),i.Am.success("".concat(o," was created!")),v()},children:[(0,f.jsxs)(d.__,{children:["Name",(0,f.jsx)(d.ff,{value:o,onChange:function(n){return l(n.target.value)}})]}),(0,f.jsxs)(d.__,{children:["Number",(0,f.jsx)(d.Rn,{value:x,onChange:function(n){return h(n.target.value)}})]}),(0,f.jsx)(d.GX,{text:"Add contact"})]})}var x,h,b,m,v,g,Z=o(168),y=o(6444),j=o(8454),w=y.ZP.li(x||(x=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-weight: 500;\n\n  &:not(:last-child) {\n    margin-bottom: 5px;\n  }\n"]))),z=y.ZP.div(h||(h=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n  font-size: var(--font-size-500);\n"]))),P=y.ZP.span(b||(b=(0,Z.Z)(["\n  margin-right: 5px;\n  color: var(--color-blue-200);\n"]))),k=y.ZP.span(m||(m=(0,Z.Z)(["\n  margin-right: 5px;\n  color: var(--color-blue-200);\n"]))),C=y.ZP.span(v||(v=(0,Z.Z)(["\n  margin-right: 5px;\n  color: var(--color-gray-300);\n"]))),_=(0,y.ZP)(j.Z).attrs((function(){return{type:"button"}}))(g||(g=(0,Z.Z)(["\n  min-width: 100px;\n  font-size: var(--font-size-300);\n"])));function A(n){var r=n.id,o=n.name,e=n.number,a=n.index,l=(0,t.I0)();return(0,f.jsxs)(w,{children:[(0,f.jsxs)(z,{children:[(0,f.jsx)(P,{children:"".concat(a+1,".")}),(0,f.jsx)(k,{children:o}),(0,f.jsx)(C,{children:e})]}),(0,f.jsx)(_,{text:"Delete",onClick:function(){l((0,c.GK)(r)),i.Am.success("".concat(o," has been deleted!"))}})]})}var F,I=o(728),L=y.ZP.ul(F||(F=(0,Z.Z)(["\n  margin: 0;\n  padding: 0;\n"])));function G(){var n=(0,t.I0)(),r=(0,t.v9)(u),o=(0,t.v9)(s),a=(0,t.v9)(l);(0,e.useEffect)((function(){n((0,c.yF)())}),[n]);return(0,f.jsx)(L,{children:a?(0,f.jsx)(I.Z,{}):(0,f.jsx)(f.Fragment,{children:r&&function(){var n=(o||"").toLowerCase().trim();return r.filter((function(r){return(r.name||"").toLowerCase().includes(n)}))}().map((function(n,r){var o=n.name,e=n.number,t=n.id;return(0,f.jsx)(A,{id:t,name:o,number:e,index:r},t)}))})})}var K,N,S=o(5822),q=o(2152),D=o(7840),E=y.ZP.label(K||(K=(0,Z.Z)(["\n  display: block;\n  margin-bottom: 10px;\n  font-weight: 600;\n  font-size: var(--font-size-500);\n  color: var(--color-gray-300);\n"]))),R=y.ZP.input.attrs((function(){return{type:"text",name:"filter",autoComplete:"off"}}))(N||(N=(0,Z.Z)(["\n  display: block;\n  margin-top: 5px;\n  border: 2px solid var(--color-gray-200);\n  border-radius: 4px;\n  box-shadow: 0px 4px 4px 0px var(--color-gray-100);\n  background-color: inherit;\n  &::placeholder {\n    font-family: inherit;\n    font-size: var(--font-size-500);\n    color: var(--color-gray-200);\n  }\n  &:hover,\n  &:focus {\n    outline: none;\n    border-color: var(--color-blue-200);\n    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  &:not(:placeholder-shown) {\n    color: var(--color-gray-200);\n  }\n"])));function X(){var n=(0,t.I0)();return(0,f.jsxs)(E,{children:["Find contacts by name",(0,f.jsx)(R,{onChange:function(r){n((0,D.K)(r.target.value))}})]})}function B(){var n=(0,t.I0)(),r=(0,t.v9)(l);return(0,e.useEffect)((function(){n((0,c.yF)())}),[n]),(0,f.jsxs)(q.Z,{children:[(0,f.jsx)(S.Z,{title:"Phonebook",children:(0,f.jsx)(p,{})}),(0,f.jsx)("div",{children:r&&(0,f.jsx)(I.Z,{})}),(0,f.jsxs)(S.Z,{title:"Contacts",children:[(0,f.jsx)(X,{}),(0,f.jsx)(G,{})]})]})}}}]);
//# sourceMappingURL=765.5fd59b94.chunk.js.map