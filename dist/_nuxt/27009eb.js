(window.webpackJsonp=window.webpackJsonp||[]).push([[11,2,3,9,10],{232:function(t,e,n){"use strict";n.r(e);var l={props:{title:{type:String},subtitle:{type:String}}},o=n(44),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center py-16"},[n("div",{staticClass:"font-medium text-gray-500 text-medium uppercase"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("div",{staticClass:"text-3xl font-light text-indigo-900 py-2 font-gochihand"},[t._v("\n    "+t._s(t.subtitle)+"\n  ")])])}),[],!1,null,"eaf586c0",null);e.default=component.exports},236:function(t,e,n){"use strict";n.r(e);var l=n(131),o={data:function(){return{data:l}}},r=n(44),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"py-40 px-16 lg:px-32"},[n("div",{staticClass:"md:grid md:grid-cols-3"},[n("div",{staticClass:"\n          transform\n          transition\n          duration-300\n          hover:scale-95\n          rotate-[-7deg]\n        "},[n("img",{staticClass:"object-cover h-5/6 w-5/6 rounded-lg",attrs:{src:t.data.main.image,alt:"myphoto"}})]),t._v(" "),n("div",{staticClass:"col-span-2 md:pl-16"},[n("div",{staticClass:"\n            pt-16\n            md:pt-0\n            text-transparent text-2xl\n            font-bold\n            bg-clip-text bg-gradient-to-r\n            from-blue-900\n            via-purple-400\n            to-pink-200\n          "},[t._v("\n          Hi, people call me "+t._s(t.data.main.firstname)+" or Momo!\n          ")]),t._v(" "),n("div",{staticClass:"\n            py-8\n            font-normal\n            text-sm text-indigo-900\n            leading-6\n            text-justify\n            font-sans\n          "},[t._v("\n          "+t._s(t.data.main.bio)+"\n        ")]),t._v(" "),t._m(0)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"py-4"},[e("hr")])}],!1,null,"77c4fe94",null);e.default=component.exports},237:function(t,e,n){"use strict";n.r(e);var l=n(131),o={data:function(){return{data:l}}},r=n(44),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-blue-50"},[n("div",{staticClass:"p-16 lg:mx-32 lg:grid lg:grid-cols-2 lg:gap-x-10 font-sans"},[n("div",{staticClass:"text-center flex flex-col items-center justify-center"},[n("div",{staticClass:"text-indigo-900 text-2xl hover:font-light"},[t._v("\n        "+t._s(t.data.main.pointofview)+"\n      ")]),t._v(" "),n("div",{staticClass:"font-normal text-sm text-indigo-900 pt-6 text-justify"},[t._v("\n        Lorem Ipsum is simply dummy text of the printing and typesetting\n        industry. Lorem Ipsum has been the industry's standard dummy text ever\n        since the 1500s, when an unknown printer took a galley of type and\n        scrambled it to make a type specimen book. It has survived not only\n        five centuries, but also the leap into electronic typesetting,\n        remaining essentially unchanged. It was popularised in the 1960s with\n        the release of Letraset sheets containing Lorem Ipsum passages, and\n        more recently with desktop publishing software like Aldus PageMaker\n        including versions of Lorem Ipsum.\n      ")]),t._v(" "),n("div")]),t._v(" "),n("div",t._l(t.data.skillsets,(function(e){return n("div",{key:e.index,staticClass:"py-3"},[n("div",{staticClass:"flex justify-between mb-1"},[n("span",{staticClass:"text-base font-normal text-blue-900"},[t._v(t._s(e.name))]),t._v(" "),n("span",{staticClass:"text-sm font-medium text-blue-900"},[t._v(t._s(e.progress)+"%")])]),t._v(" "),n("div",{staticClass:"w-full bg-gray-200 rounded-full h-2.5"},[n("div",{staticClass:"bg-indigo-900 h-2.5 rounded-full",style:"width: "+e.progress+"%"})])])})),0)])])}),[],!1,null,"f9bdafd2",null);e.default=component.exports},238:function(t,e,n){"use strict";n.r(e);var l=n(131),o={data:function(){return{data:l}}},r=n(44),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-16 lg:px-32 py-20"},[n("Title",{staticClass:"pt-0",attrs:{title:"Education",subtitle:"My Educations"}}),t._v(" "),n("div",{staticClass:"lg:grid lg:grid-cols-2 gap-8 font-sans"},t._l(t.data.educations,(function(e){return n("div",{key:e.index,staticClass:"\n        bg-blue-50\n        p-12\n        text-blue-900\n        transform\n        transition\n        duration-300\n        hover:scale-95 hover:shadow-lg\n      "},[n("div",{staticClass:"text-2xl"},[n("font-awesome-icon",{attrs:{icon:"graduation-cap"}})],1),t._v(" "),n("div",{staticClass:"italic text-lg py-2 font-medium"},[t._v("\n        "+t._s(e.type)+"\n      ")]),t._v(" "),n("div",{staticClass:"font-normal text-sm"},[n("div",{staticClass:"flex py-1"},[n("div",{staticClass:"w-1/5 font-medium"},[t._v("School:")]),t._v(" "),n("div",{staticClass:"w-4/5"},[t._v(t._s(e.school))])]),t._v(" "),n("div",{staticClass:"flex py-1"},[n("div",{staticClass:"w-1/5 font-medium"},[t._v("Year:")]),t._v(" "),n("div",{staticClass:"w-4/5"},[t._v(t._s(e.year))])]),t._v(" "),n("div",{staticClass:"flex py-1"},[n("div",{staticClass:"w-1/5 font-medium"},[t._v("Level:")]),t._v(" "),n("div",{staticClass:"\n              w-4/5\n              overflow-ellipsis overflow-hidden\n              max-h-20\n              text-justify\n            "},[t._v("\n            "+t._s(e.grade)+"\n          ")])])])])})),0),t._v(" "),n("Title",{attrs:{title:"Work",subtitle:"My Work Experiences"}}),t._v(" "),n("div",{staticClass:"lg:grid lg:grid-cols-2 gap-8 font-sans"},[n("div",{staticClass:"\n        bg-blue-50\n        p-12\n        text-blue-900\n        transform\n        transition\n        duration-300\n        hover:scale-95 hover:shadow-lg\n      "},[n("div",{staticClass:"text-2xl"},[n("font-awesome-icon",{attrs:{icon:"briefcase"}})],1),t._v(" "),n("div",{staticClass:"italic text-lg py-2 font-medium"},[t._v("\n        "+t._s(t.data.work.position)+"\n      ")]),t._v(" "),n("div",{staticClass:"font-normal text-sm"},[n("div",{staticClass:"flex py-1"},[n("div",{staticClass:"w-1/5 font-medium"},[t._v("Name:")]),t._v(" "),n("div",{staticClass:"w-4/5"},[t._v(t._s(t.data.work.company))])]),t._v(" "),n("div",{staticClass:"flex py-1"},[n("div",{staticClass:"w-1/5 font-medium"},[t._v("Year:")]),t._v(" "),n("div",{staticClass:"w-4/5"},[t._v(t._s(t.data.work.year))])]),t._v(" "),n("div",{staticClass:"flex py-1"},[n("div",{staticClass:"w-1/5 font-medium"},[t._v("Description:")]),t._v(" "),n("div",{staticClass:"\n              w-4/5\n              overflow-ellipsis overflow-hidden\n              max-h-20\n              text-justify\n            "},[t._v("\n            "+t._s(t.data.work.description)+"\n          ")])])])])]),t._v(" "),n("Title",{attrs:{title:"Achievements",subtitle:"Personal Award"}}),t._v(" "),n("div",{staticClass:"lg:grid lg:grid-cols-2 gap-8 font-sans"},t._l(t.data.achievements,(function(e){return n("div",{key:e.index,staticClass:"\n        bg-blue-50\n        p-12\n        text-indigo-900\n        transform\n        transition\n        duration-300\n        hover:scale-95 hover:shadow-lg\n      "},[n("div",{staticClass:"text-2xl"},[n("font-awesome-icon",{attrs:{icon:"medal"}})],1),t._v(" "),n("div",{staticClass:"italic text-lg py-2 font-medium"},[t._v("\n        "+t._s(e.title)+"\n      ")]),t._v(" "),n("div",{staticClass:"font-normal text-sm"},[n("div",[t._v("\n          "+t._s(e.details)+"\n        ")])])])})),0)],1)}),[],!1,null,"5f43f780",null);e.default=component.exports;installComponents(component,{Title:n(232).default})},244:function(t,e,n){"use strict";n.r(e);var l=n(236),o=n(237),r=n(238);l.default,o.default,r.default;var d={},c=n(44),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("About"),t._v(" "),n("Skillsets"),t._v(" "),n("Aboutcards")],1)}),[],!1,null,"134beea8",null);e.default=component.exports;installComponents(component,{About:n(236).default,Skillsets:n(237).default,Aboutcards:n(238).default})}}]);