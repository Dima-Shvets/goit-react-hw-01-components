(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,,function(e,t,a){e.exports={profile:"Profile_profile__21OnS",description:"Profile_description__34FEo",avatar:"Profile_avatar__1v5nf",name:"Profile_name__1ZhOs",tag:"Profile_tag__3l0KN",location:"Profile_location__2OnXb",stats:"Profile_stats__TbiWg",quantity:"Profile_quantity__2gul1"}},function(e){e.exports=JSON.parse('{"username":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e,t,a){e.exports={statistics:"Statistics_statistics__1k4Wt",title:"Statistics_title__1rVXP","stat-list":"Statistics_stat-list__1KgYA",item:"Statistics_item__34fLi"}},function(e,t,a){e.exports={list:"FriendListItem_list__3GJnf",item:"FriendListItem_item__3bcuF",status:"FriendListItem_status__2_wqP",avatar:"FriendListItem_avatar__3Tn_T",name:"FriendListItem_name__v9gYK"}},,,,,,,,,,function(e,t,a){},,,,function(e,t,a){e.exports={"transaction-history":"TransactionHistory_transaction-history__HUStx"}},function(e,t,a){e.exports={Container:"Container_Container__2F9MI"}},function(e){e.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,function(e,t,a){},,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,c,i=a(1),s=a.n(i),r=a(13),l=a.n(r),o=(a(28),a(2)),d=a.n(o),b=a(0),u=function(e){var t=e.avatar,a=e.userName,n=e.tag,c=e.location,i=e.followers,s=e.views,r=e.likes;return Object(b.jsxs)("div",{className:d.a.profile,children:[Object(b.jsxs)("div",{className:d.a.description,children:[Object(b.jsx)("img",{src:t,alt:"User avatar",className:d.a.avatar}),Object(b.jsx)("p",{className:d.a.name,children:a}),Object(b.jsxs)("p",{className:d.a.tag,children:["@",n]}),Object(b.jsx)("p",{className:d.a.location,children:c})]}),Object(b.jsxs)("ul",{className:d.a.stats,children:[Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{className:d.a.label,children:"Followers"}),Object(b.jsx)("span",{className:d.a.quantity,children:i.toLocaleString("en-IN")})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{className:d.a.label,children:"Views"}),Object(b.jsx)("span",{className:d.a.quantity,children:s.toLocaleString("en-IN")})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{className:d.a.label,children:"Likes"}),Object(b.jsx)("span",{className:d.a.quantity,children:r.toLocaleString("en-IN")})]})]})]})},p=a(4),j=a.n(p),m=a(14),f=a.n(m),h=function(e){var t=e.title,a=e.stats;return Object(b.jsxs)("section",{className:j.a.statistics,children:[t&&Object(b.jsx)("h2",{className:j.a.title,children:t}),Object(b.jsx)("ul",{className:j.a["stat-list"],children:a.map((function(e){return Object(b.jsxs)("li",{className:j.a.item,style:{backgroundColor:f()()},children:[Object(b.jsx)("span",{className:j.a.label,children:e.label}),Object(b.jsxs)("span",{className:j.a.percentage,children:[e.percentage,"%"]})]},e.id)}))})]})},O=a(15),y=a.n(O),x=a(8),_=a(9),v=_.b.span(n||(n=Object(x.a)(["\n  display: block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: red;\n  overflow: hidden;\n\n  ","\n"])),(function(e){return e.isOnline&&Object(_.a)(c||(c=Object(x.a)(["\n      background: green;\n    "])))})),g=a(5),N=a.n(g);function w(e){var t=e.avatar,a=e.name,n=e.isOnline,c=void 0!==n&&n;return Object(b.jsxs)("li",{className:"".concat(N.a.list," ").concat(N.a.item),children:[Object(b.jsx)(v,{isOnline:c,className:N.a.status}),Object(b.jsx)("img",{className:N.a.avatar,src:t,alt:"User avatar",width:"48"}),Object(b.jsx)("p",{className:N.a.name,children:a})]})}var S=a(6),L=a.n(S);function P(e){var t=e.friends;return Object(b.jsx)("ul",{className:y.a["friend-list"],children:t.map((function(e){return Object(b.jsx)(w,{avatar:e.avatar,name:e.name,isOnline:e.isOnline},e.id.toString())}))})}P.propType={friends:L.a.arrayOf(L.a.shape({id:L.a.string.isRequired}))};var k=a(19),F=a.n(k);function C(e){var t=e.items;return Object(b.jsxs)("table",{className:F.a["transaction-history"],children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Type"}),Object(b.jsx)("th",{children:"Amount"}),Object(b.jsx)("th",{children:"Currency"})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.type,n=e.amount,c=e.currency;return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:a}),Object(b.jsx)("td",{children:n}),Object(b.jsx)("td",{children:c})]},t)}))})]})}var U=a(20),I=a.n(U);function T(e){var t=e.children;return Object(b.jsx)("div",{className:I.a.Container,children:t})}var J=a(3),q=a(21),G=a(22),A=a(23);a(37);var D=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(T,{children:Object(b.jsx)(u,{userName:J.username,tag:J.tag,location:J.location,avatar:J.avatar,stats:J.stats,followers:J.stats.followers,views:J.stats.views,likes:J.stats.likes})}),Object(b.jsx)(T,{children:Object(b.jsx)(h,{title:"Upload stats",stats:G})}),Object(b.jsx)(T,{children:Object(b.jsx)(P,{friends:q})}),Object(b.jsx)(T,{children:Object(b.jsx)(C,{items:A})})]})},K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,39)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};l.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(D,{})}),document.getElementById("root")),K()}],[[38,1,2]]]);
//# sourceMappingURL=main.55f4fece.chunk.js.map