(window.webpackJsonp=window.webpackJsonp||[]).push([[11,2,3,9,10],{232:function(t,n,e){"use strict";e.r(n);var l={props:{title:{type:String},subtitle:{type:String}}},r=e(44),component=Object(r.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"text-center py-16"},[e("div",{staticClass:"font-medium text-gray-500 text-medium uppercase"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),e("div",{staticClass:"text-3xl font-light text-indigo-900 py-2 font-gochihand"},[t._v("\n    "+t._s(t.subtitle)+"\n  ")])])}),[],!1,null,"eaf586c0",null);n.default=component.exports},236:function(t,n,e){"use strict";e.r(n);var l=e(131),r={data:function(){return{data:l}}},o=e(44),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("section",{staticClass:"py-40 px-16 lg:px-32"},[e("div",{staticClass:"md:grid md:grid-cols-3"},[e("div",{staticClass:"\n          transform\n          transition\n          duration-300\n          hover:scale-95\n          rotate-[-7deg]\n        "},[e("img",{staticClass:"object-cover h-5/6 w-5/6 rounded-lg",attrs:{src:t.data.main.image,alt:"myphoto"}})]),t._v(" "),e("div",{staticClass:"col-span-2 md:pl-16"},[e("div",{staticClass:"\n            pt-16\n            md:pt-0\n            text-transparent text-2xl\n            font-bold\n            bg-clip-text bg-gradient-to-r\n            from-blue-900\n            via-purple-400\n            to-pink-200\n          "},[t._v("\n          Hi, people call me "+t._s(t.data.main.firstname)+" or Momo!\n          ")]),t._v(" "),e("div",{staticClass:"\n            py-8\n            font-normal\n            text-sm text-indigo-900\n            leading-6\n            text-justify\n            font-sans\n          "},[t._v("\n          "+t._s(t.data.main.bio)+"\n        ")]),t._v(" "),t._m(0)])])])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"py-4"},[n("hr")])}],!1,null,"77c4fe94",null);n.default=component.exports},237:function(t,n,e){"use strict";e.r(n);var l=e(131),r={data:function(){return{data:l}}},o=e(44),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"bg-blue-50"},[e("div",{staticClass:"p-16 lg:mx-32 lg:grid lg:grid-cols-2 lg:gap-x-10 font-sans"},[e("div",{staticClass:"text-center flex flex-col items-center justify-center"},[e("div",{staticClass:"text-indigo-900 text-2xl hover:font-light"},[t._v("\n        "+t._s(t.data.main.pointofview)+"\n      ")]),t._v(" "),e("div",{staticClass:"font-normal text-sm text-indigo-900 pt-6 text-justify"},[t._v("\n        Lorem Ipsum is simply dummy text of the printing and typesetting\n        industry. Lorem Ipsum has been the industry's standard dummy text ever\n        since the 1500s, when an unknown printer took a galley of type and\n        scrambled it to make a type specimen book. It has survived not only\n        five centuries, but also the leap into electronic typesetting,\n        remaining essentially unchanged. It was popularised in the 1960s with\n        the release of Letraset sheets containing Lorem Ipsum passages, and\n        more recently with desktop publishing software like Aldus PageMaker\n        including versions of Lorem Ipsum.\n      ")]),t._v(" "),e("div")]),t._v(" "),e("div",t._l(t.data.skillsets,(function(n){return e("div",{key:n.index,staticClass:"py-3"},[e("div",{staticClass:"flex justify-between mb-1"},[e("span",{staticClass:"text-base font-normal text-blue-900"},[t._v(t._s(n.name))]),t._v(" "),e("span",{staticClass:"text-sm font-medium text-blue-900"},[t._v(t._s(n.progress)+"%")])]),t._v(" "),e("div",{staticClass:"w-full bg-gray-200 rounded-full h-2.5"},[e("div",{staticClass:"bg-indigo-900 h-2.5 rounded-full",style:"width: "+n.progress+"%"})])])})),0)])])}),[],!1,null,"f9bdafd2",null);n.default=component.exports},238:function(t,n,e){"use strict";e.r(n);var l=e(131),r={data:function(){return{data:l}}},o=e(44),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"px-16 lg:px-32 py-20"},[e("Title",{staticClass:"pt-0",attrs:{title:"Education",subtitle:"My Educations"}}),t._v(" "),e("div",{staticClass:"lg:grid lg:grid-cols-2 gap-8 font-sans"},t._l(t.data.educations,(function(n){return e("div",{key:n.index,staticClass:"\n        bg-blue-50\n        p-12\n        text-blue-900\n        transform\n        transition\n        duration-300\n        hover:scale-95 hover:shadow-lg\n      "},[e("div",{staticClass:"text-2xl"},[e("font-awesome-icon",{attrs:{icon:"graduation-cap"}})],1),t._v(" "),e("div",{staticClass:"italic text-lg py-2 font-medium"},[t._v("\n        "+t._s(n.type)+"\n      ")]),t._v(" "),e("div",{staticClass:"font-light"},[e("div",[t._v("\n          School: "),e("span",[t._v(t._s(n.school))])]),t._v(" "),e("div",[t._v("\n          Year: "),e("span",[t._v(t._s(n.year))])]),t._v(" "),e("div",[t._v("\n          Level: "),e("span",[t._v(t._s(n.grade))])])])])})),0),t._v(" "),e("Title",{attrs:{title:"Work",subtitle:"My Work Experiences"}}),t._v(" "),e("div",{staticClass:"lg:grid lg:grid-cols-2 gap-8"},[e("div",{staticClass:"\n        bg-blue-50\n        p-12\n        text-blue-900\n        transform\n        transition\n        duration-300\n        hover:scale-95 hover:shadow-lg\n      "},[e("div",{staticClass:"text-2xl"},[e("font-awesome-icon",{attrs:{icon:"briefcase"}})],1),t._v(" "),e("div",{staticClass:"italic text-lg py-2 font-medium"},[t._v("\n        "+t._s(t.data.work.position)+"\n      ")]),t._v(" "),e("div",{staticClass:"font-light"},[e("div",[t._v("\n          Name: "),e("span",[t._v(t._s(t.data.work.company))])]),t._v(" "),e("div",[t._v("\n          Year: "),e("span",[t._v(t._s(t.data.work.year))])]),t._v(" "),e("div",[t._v("\n          Descriptions: "),e("span",[t._v(t._s(t.data.work.description))])])])])]),t._v(" "),e("Title",{attrs:{title:"Achievements",subtitle:"Personal Award"}}),t._v(" "),e("div",{staticClass:"lg:grid lg:grid-cols-2 gap-8 font-sans"},t._l(t.data.achievements,(function(n){return e("div",{key:n.index,staticClass:"\n        bg-blue-50\n        p-12\n        text-blue-900\n        transform\n        transition\n        duration-300\n        hover:scale-95 hover:shadow-lg\n      "},[e("div",{staticClass:"text-2xl"},[e("font-awesome-icon",{attrs:{icon:"medal"}})],1),t._v(" "),e("div",{staticClass:"italic text-lg py-2 font-medium"},[t._v("\n        "+t._s(n.title)+"\n      ")]),t._v(" "),e("div",{staticClass:"font-light"},[e("div",[t._v("\n          "+t._s(n.details)+"\n        ")])])])})),0)],1)}),[],!1,null,"ded8805a",null);n.default=component.exports;installComponents(component,{Title:e(232).default})},244:function(t,n,e){"use strict";e.r(n);var l=e(236),r=e(237),o=e(238);l.default,r.default,o.default;var d={},c=e(44),component=Object(c.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("About"),t._v(" "),e("Skillsets"),t._v(" "),e("Aboutcards")],1)}),[],!1,null,"134beea8",null);n.default=component.exports;installComponents(component,{About:e(236).default,Skillsets:e(237).default,Aboutcards:e(238).default})}}]);