(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(3),i=a.n(s),o=a(4),r=a(5),l=a(7),d=a(6),b=a(0),u=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(b.jsx)("div",{children:Object(b.jsx)("ul",{className:"feedback-list",children:t.map((function(e){return Object(b.jsx)("li",{className:"feedback-item",children:Object(b.jsx)("button",{name:e,className:"feedback-btn",type:"button",onClick:a,children:e})},e)}))})})},j=function(e){var t=e.good,a=e.neutral,c=e.bad,n=e.total,s=e.positivePercentage;return Object(b.jsxs)("ul",{className:"statistics__list",children:[Object(b.jsxs)("li",{className:"statistics__item",children:["Good: ",t]}),Object(b.jsxs)("li",{className:"statistics__item",children:["Neutral: ",a]}),Object(b.jsxs)("li",{className:"statistics__item",children:["Bad: ",c]}),Object(b.jsxs)("li",{className:"statistics__item",children:["Total:",n]}),Object(b.jsxs)("li",{className:"statistics__item",children:["PositivePercentage: ",s,"%"]})]})},h=function(e){var t=e.message;return Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:t})})},v=(a(13),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={good:0,neutral:0,bad:0,total:0,positivePercentage:0,visible:!1},e.onLeaveFeedback=function(t){e.show();var a=t.target.name;"good"===a&&e.setState((function(e){return{good:e.good+1}})),"neutral"===a&&e.setState((function(e){return{neutral:e.neutral+1}})),"bad"===a&&e.setState((function(e){return{bad:e.bad+1}})),e.countTotalFeedback(),e.countPositiveFeedbackPercentage()},e.countTotalFeedback=function(){e.setState((function(e){return{total:e.good+e.bad+e.neutral}}))},e.countPositiveFeedbackPercentage=function(){e.setState((function(e){var t=e.total,a=e.good;return{positivePercentage:Math.round(100/t*a)}}))},e.show=function(){e.setState({visible:!0})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,c=e.bad,n=e.total,s=e.positivePercentage,i=e.visible;return Object(b.jsxs)("section",{className:"Feedback",children:[Object(b.jsx)("h1",{children:"Please leave feedback"}),Object(b.jsx)(u,{options:["good","neutral","bad"],onLeaveFeedback:this.onLeaveFeedback}),Object(b.jsx)("h2",{children:"Statistics"}),i?Object(b.jsx)(j,{good:t,neutral:a,bad:c,total:n,positivePercentage:s}):Object(b.jsx)(h,{message:"No feedback given"})]})}}]),a}(n.a.Component)),f=function(){return Object(b.jsx)(v,{})};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.342d4047.chunk.js.map