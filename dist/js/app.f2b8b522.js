(function(){"use strict";var e={3440:function(e,t,r){var n=r(6848),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("title-bar"),t("router-view")],1)},c=[],a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"title-bar"},[t("router-link",{staticClass:"title-link",attrs:{to:"/exchange-rate"}},[e._v("ExchangeRate")])],1)},s=[],i={name:"TitleBar"},u=i,l=r(1656),d=(0,l.A)(u,a,s,!1,null,"6ce7d2a4",null),D=d.exports,v={name:"App",components:{"title-bar":D}},f=v,p=(0,l.A)(f,o,c,!1,null,null,null),h=p.exports,A=r(6178),S=function(){var e=this,t=e._self._c;return t("div",[t("currency-converter"),t("div",{staticClass:"table-container"},[t("table",[e._m(0),t("tbody",e._l(e.sortedRates,(function(r,n){return t("tr",{key:n},[t("td",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedCurrencies,expression:"selectedCurrencies"}],staticStyle:{width:"30px","margin-bottom":"10px"},attrs:{type:"checkbox"},domProps:{value:n,checked:Array.isArray(e.selectedCurrencies)?e._i(e.selectedCurrencies,n)>-1:e.selectedCurrencies},on:{change:function(t){var r=e.selectedCurrencies,o=t.target,c=!!o.checked;if(Array.isArray(r)){var a=n,s=e._i(r,a);o.checked?s<0&&(e.selectedCurrencies=r.concat([a])):s>-1&&(e.selectedCurrencies=r.slice(0,s).concat(r.slice(s+1)))}else e.selectedCurrencies=c}}})]),t("td",[e._v(e._s(n)+"  "+e._s(e.currencyMap[n]||"未知貨幣"))]),t("td",[e._v(e._s(r))]),t("td",[e._v(e._s(e.computeInverseRate(r)))])])})),0)])])],1)},m=[function(){var e=this,t=e._self._c;return t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"center"},attrs:{colspan:"4"}},[e._v("當日匯率一覽")])]),t("tr",[t("th",[e._v("置頂")]),t("th",[e._v("貨幣")]),t("th",[e._v("台幣兌外幣")]),t("th",[e._v("外幣兌台幣")])])])}],R=r(8355),P=function(){var e=this,t=e._self._c;return t("div",{staticClass:"currency-converter"},[t("h1",[e._v("貨幣轉換器")]),t("div",[t("label",{attrs:{for:"twdAmount"}},[e._v("台幣 (TWD):")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.twdAmount,expression:"twdAmount"}],attrs:{type:"number",id:"twdAmount",placeholder:"請輸入台幣金額"},domProps:{value:e.twdAmount},on:{input:[function(t){t.target.composing||(e.twdAmount=t.target.value)},e.convertFromTWD]}})]),t("div",[t("label",{attrs:{for:"foreignCurrency"}},[e._v("選擇外幣:")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedCurrency,expression:"selectedCurrency"}],attrs:{id:"foreignCurrency"},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedCurrency=t.target.multiple?r:r[0]},e.convertFromTWD]}},e._l(e.rates,(function(r,n){return t("option",{key:n,domProps:{value:n}},[e._v(e._s(n)+"  "+e._s(e.currencyMap[n]||"未知貨幣"))])})),0)]),t("div",[t("label",{attrs:{for:"foreignAmount"}},[e._v("外幣金額:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.foreignAmount,expression:"foreignAmount"}],attrs:{type:"number",id:"foreignAmount",placeholder:"請輸入外幣金額"},domProps:{value:e.foreignAmount},on:{input:[function(t){t.target.composing||(e.foreignAmount=t.target.value)},e.convertToTWD]}})])])},C=[],N={name:"CurrencyConverter",data(){return{twdAmount:0,foreignAmount:0,selectedCurrency:"USD",rates:{},currencyMap:{TWD:"新台幣",AED:"阿聯酋迪拉姆",AFN:"阿富汗尼",ALL:"阿爾巴尼亞列克",AMD:"亞美尼亞德拉姆",ANG:"荷屬安的列斯盾",AOA:"安哥拉寬扎",ARS:"阿根廷比索",AUD:"澳元",AWG:"阿魯巴盾",AZN:"亞塞拜疆馬納特",BAM:"波斯尼亞可兌換馬克",BBD:"巴巴多斯元",BDT:"孟加拉塔卡",BGN:"保加利亞列弗",BHD:"巴林第納爾",BIF:"布隆迪法郎",BMD:"百慕達元",BND:"文萊元",BOB:"玻利維亞諾",BRL:"巴西里亞伊",BSD:"巴哈馬元",BTN:"不丹努爾特魯姆",BWP:"博茨瓦納普拉",BYN:"白俄羅斯盧布",BZD:"伯利茲元",CAD:"加拿大元",CDF:"剛果法郎",CHF:"瑞士法郎",CLP:"智利比索",CNY:"人民幣",COP:"哥倫比亞比索",CRC:"哥斯達黎加科朗",CUP:"古巴比索",CVE:"佛得角埃斯庫多",CZK:"捷克克朗",DJF:"吉布提法郎",DKK:"丹麥克朗",DOP:"多米尼加比索",DZD:"阿爾及利亞第納爾",EGP:"埃及鎊",ERN:"厄立特里亞納克法",ETB:"埃塞俄比亞比爾",EUR:"歐元",FJD:"斐濟元",FKP:"福克蘭群島鎊",FOK:"法羅群島克朗",GBP:"英鎊",GEL:"喬治亞拉里",GGP:"根西鎊",GHS:"加納塞地",GIP:"直布羅陀鎊",GMD:"岡比亞達拉西",GNF:"幾內亞法郎",GTQ:"危地馬拉格查爾",GYD:"圭亞那元",HKD:"港元",HNL:"洪都拉斯倫皮拉",HRK:"克羅地亞庫納",HTG:"海地古德",HUF:"匈牙利福林",IDR:"印尼盾",ILS:"以色列新謝克爾",IMP:"馬恩島鎊",INR:"印度盧比",IQD:"伊拉克第納爾",IRR:"伊朗里亞爾",ISK:"冰島島克朗",JEP:"澤西鎊",JMD:"牙買加元",JOD:"約旦第納爾",JPY:"日元",KES:"肯尼亞先令",KGS:"吉爾吉斯斯坦索姆",KHR:"柬埔寨瑞爾",KID:"基里巴斯元",KMF:"科摩羅法郎",KRW:"韓圓",KWD:"科威特第納爾",KYD:"開曼群島元",KZT:"哈薩克斯坦坚戈",LAK:"老撾基普",LBP:"黎巴嫩鎊",LKR:"斯里蘭卡盧比",LRD:"利比里亞元",LSL:"萊索托洛蒂",LYD:"利比亞第納爾",MAD:"摩洛哥迪拉姆",MDL:"摩爾多瓦列伊",MGA:"馬達加斯加阿里亞里",MKD:"馬其頓第納爾",MMK:"緬甸元",MNT:"蒙古圖格里克",MOP:"澳門元",MRU:"毛里塔尼亞烏吉亞",MUR:"毛里求斯盧比",MVR:"馬爾代夫盧非亞",MWK:"馬拉維克瓦查",MXN:"墨西哥比索",MYR:"馬來西亞令吉",MZN:"莫桑比克梅蒂卡爾",NAD:"納米比亞元",NGN:"尼日利亞奈拉",NIO:"尼加拉瓜科多巴",NOK:"挪威克朗",NPR:"尼泊爾盧比",NZD:"新西蘭元",OMR:"阿曼里亞爾",PAB:"巴拿馬巴波亞",PEN:"秘魯新索爾",PGK:"巴布亞新幾內亞基那",PHP:"菲律賓披索",PKR:"巴基斯坦盧比",PLN:"波蘭茲羅提",PYG:"巴拉圭瓜拉尼",QAR:"卡塔爾里亞爾",RON:"羅馬尼亞列伊",RSD:"塞爾維亞第納爾",RUB:"俄羅斯盧布",RWF:"盧旺達法郎",SAR:"沙特阿拉伯里亞爾",SBD:"所羅門群島元",SCR:"塞舌爾盧比",SDG:"蘇丹鎊",SEK:"瑞典克朗",SGD:"新加坡元",SHP:"聖赫勒拿鎊",SLE:"塞拉利昂新利昂",SLL:"塞拉利昂利昂",SOS:"索馬里先令",SRD:"蘇里南元",SSP:"南蘇丹鎊",STN:"聖多美和普林西比多布拉",SYP:"敘利亞鎊",SZL:"斯威士蘭里蘭吉尼",THB:"泰銖",TJS:"塔吉克斯坦索莫尼",TMT:"土庫曼斯坦馬納特",TND:"突尼斯第納爾",TOP:"湯加潘加",TRY:"土耳其里拉",TTD:"千里達及托巴哥元",TVD:"圖瓦盧元",TZS:"坦桑尼亞先令",UAH:"烏克蘭赫里納",UGX:"烏干達先令",USD:"美元",UYU:"烏拉圭披索",UZS:"烏茲別克索姆",VES:"委內瑞拉玻利瓦爾",VND:"越南盾",VUV:"瓦努阿圖瓦圖",WST:"薩摩亞塔拉",XAF:"中非金融合作法郎",XCD:"東加勒比元",XDR:"特殊提款權",XOF:"西非法郎",XPF:"太平洋法郎",YER:"也門里亞爾",ZAR:"南非蘭特",ZMW:"贊比亞克瓦查",ZWL:"辛巴威元"}}},mounted(){this.fetchRates()},methods:{async fetchRates(){try{const e=await R.A.get("https://api.exchangerate-api.com/v4/latest/TWD");this.rates=e.data.rates}catch(e){console.error("Error fetching rates:",e)}},convertFromTWD(){const e=this.rates[this.selectedCurrency]||0;this.foreignAmount=(this.twdAmount*e).toFixed(2)},convertToTWD(){const e=this.rates[this.selectedCurrency]||0;this.twdAmount=(this.foreignAmount/e).toFixed(2)}}},T=N,y=(0,l.A)(T,P,C,!1,null,null,null),M=y.exports,g={name:"ExchangeRates",components:{CurrencyConverter:M},data(){return{selectedCurrencies:[],currencyMap:{TWD:"新台幣",AED:"阿聯酋迪拉姆",AFN:"阿富汗尼",ALL:"阿爾巴尼亞列克",AMD:"亞美尼亞德拉姆",ANG:"荷屬安的列斯盾",AOA:"安哥拉寬扎",ARS:"阿根廷比索",AUD:"澳元",AWG:"阿魯巴盾",AZN:"亞塞拜疆馬納特",BAM:"波斯尼亞可兌換馬克",BBD:"巴巴多斯元",BDT:"孟加拉塔卡",BGN:"保加利亞列弗",BHD:"巴林第納爾",BIF:"布隆迪法郎",BMD:"百慕達元",BND:"文萊元",BOB:"玻利維亞諾",BRL:"巴西里亞伊",BSD:"巴哈馬元",BTN:"不丹努爾特魯姆",BWP:"博茨瓦納普拉",BYN:"白俄羅斯盧布",BZD:"伯利茲元",CAD:"加拿大元",CDF:"剛果法郎",CHF:"瑞士法郎",CLP:"智利比索",CNY:"人民幣",COP:"哥倫比亞比索",CRC:"哥斯達黎加科朗",CUP:"古巴比索",CVE:"佛得角埃斯庫多",CZK:"捷克克朗",DJF:"吉布提法郎",DKK:"丹麥克朗",DOP:"多米尼加比索",DZD:"阿爾及利亞第納爾",EGP:"埃及鎊",ERN:"厄立特里亞納克法",ETB:"埃塞俄比亞比爾",EUR:"歐元",FJD:"斐濟元",FKP:"福克蘭群島鎊",FOK:"法羅群島克朗",GBP:"英鎊",GEL:"喬治亞拉里",GGP:"根西鎊",GHS:"加納塞地",GIP:"直布羅陀鎊",GMD:"岡比亞達拉西",GNF:"幾內亞法郎",GTQ:"危地馬拉格查爾",GYD:"圭亞那元",HKD:"港元",HNL:"洪都拉斯倫皮拉",HRK:"克羅地亞庫納",HTG:"海地古德",HUF:"匈牙利福林",IDR:"印尼盾",ILS:"以色列新謝克爾",IMP:"馬恩島鎊",INR:"印度盧比",IQD:"伊拉克第納爾",IRR:"伊朗里亞爾",ISK:"冰島島克朗",JEP:"澤西鎊",JMD:"牙買加元",JOD:"約旦第納爾",JPY:"日元",KES:"肯尼亞先令",KGS:"吉爾吉斯斯坦索姆",KHR:"柬埔寨瑞爾",KID:"基里巴斯元",KMF:"科摩羅法郎",KRW:"韓圓",KWD:"科威特第納爾",KYD:"開曼群島元",KZT:"哈薩克斯坦坚戈",LAK:"老撾基普",LBP:"黎巴嫩鎊",LKR:"斯里蘭卡盧比",LRD:"利比里亞元",LSL:"萊索托洛蒂",LYD:"利比亞第納爾",MAD:"摩洛哥迪拉姆",MDL:"摩爾多瓦列伊",MGA:"馬達加斯加阿里亞里",MKD:"馬其頓第納爾",MMK:"緬甸元",MNT:"蒙古圖格里克",MOP:"澳門元",MRU:"毛里塔尼亞烏吉亞",MUR:"毛里求斯盧比",MVR:"馬爾代夫盧非亞",MWK:"馬拉維克瓦查",MXN:"墨西哥比索",MYR:"馬來西亞令吉",MZN:"莫桑比克梅蒂卡爾",NAD:"納米比亞元",NGN:"尼日利亞奈拉",NIO:"尼加拉瓜科多巴",NOK:"挪威克朗",NPR:"尼泊爾盧比",NZD:"新西蘭元",OMR:"阿曼里亞爾",PAB:"巴拿馬巴波亞",PEN:"秘魯新索爾",PGK:"巴布亞新幾內亞基那",PHP:"菲律賓披索",PKR:"巴基斯坦盧比",PLN:"波蘭茲羅提",PYG:"巴拉圭瓜拉尼",QAR:"卡塔爾里亞爾",RON:"羅馬尼亞列伊",RSD:"塞爾維亞第納爾",RUB:"俄羅斯盧布",RWF:"盧旺達法郎",SAR:"沙特阿拉伯里亞爾",SBD:"所羅門群島元",SCR:"塞舌爾盧比",SDG:"蘇丹鎊",SEK:"瑞典克朗",SGD:"新加坡元",SHP:"聖赫勒拿鎊",SLE:"塞拉利昂新利昂",SLL:"塞拉利昂利昂",SOS:"索馬里先令",SRD:"蘇里南元",SSP:"南蘇丹鎊",STN:"聖多美和普林西比多布拉",SYP:"敘利亞鎊",SZL:"斯威士蘭里蘭吉尼",THB:"泰銖",TJS:"塔吉克斯坦索莫尼",TMT:"土庫曼斯坦馬納特",TND:"突尼斯第納爾",TOP:"湯加潘加",TRY:"土耳其里拉",TTD:"千里達及托巴哥元",TVD:"圖瓦盧元",TZS:"坦桑尼亞先令",UAH:"烏克蘭赫里納",UGX:"烏干達先令",USD:"美元",UYU:"烏拉圭披索",UZS:"烏茲別克索姆",VES:"委內瑞拉玻利瓦爾",VND:"越南盾",VUV:"瓦努阿圖瓦圖",WST:"薩摩亞塔拉",XAF:"中非金融合作法郎",XCD:"東加勒比元",XDR:"特殊提款權",XOF:"西非法郎",XPF:"太平洋法郎",YER:"也門里亞爾",ZAR:"南非蘭特",ZMW:"贊比亞克瓦查",ZWL:"辛巴威元"},rates:{}}},watch:{selectedCurrencies:{handler(){this.saveSelectedCurrencies()},deep:!0}},computed:{sortedRates(){const e={},t={};return Object.keys(this.rates).forEach((r=>{this.selectedCurrencies.includes(r)?e[r]=this.rates[r]:t[r]=this.rates[r]})),{...e,...t}}},created(){this.fetchRates(),this.loadSelectedCurrencies()},beforeDestroy(){this.saveSelectedCurrencies()},methods:{async fetchRates(){const e=await R.A.get("https://api.exchangerate-api.com/v4/latest/TWD");this.rates=e.data.rates},loadSelectedCurrencies(){const e=localStorage.getItem("selectedCurrencies");this.selectedCurrencies=e?JSON.parse(e):["USD","EUR","JPY","GBP","CNY","HKD"]},saveSelectedCurrencies(){localStorage.setItem("selectedCurrencies",JSON.stringify(this.selectedCurrencies))},computeInverseRate(e){return e>0?(1/e).toFixed(2):"N/A"}}},K=g,B=(0,l.A)(K,S,m,!1,null,"4a8d8902",null),G=B.exports;n.Ay.use(A.Ay);var O=new A.Ay({mode:"history",base:"/ExchangeRate_TWD/",routes:[{path:"/",redirect:"/exchange-rate"},{path:"/exchange-rate",name:"exchange-rate",component:G}]});n.Ay.config.productionTip=!1,new n.Ay({router:O,render:e=>e(h)}).$mount("#app")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var c=t[n]={exports:{}};return e[n].call(c.exports,c,c.exports,r),c.exports}r.m=e,function(){var e=[];r.O=function(t,n,o,c){if(!n){var a=1/0;for(l=0;l<e.length;l++){n=e[l][0],o=e[l][1],c=e[l][2];for(var s=!0,i=0;i<n.length;i++)(!1&c||a>=c)&&Object.keys(r.O).every((function(e){return r.O[e](n[i])}))?n.splice(i--,1):(s=!1,c<a&&(a=c));if(s){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}c=c||0;for(var l=e.length;l>0&&e[l-1][2]>c;l--)e[l]=e[l-1];e[l]=[n,o,c]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,c,a=n[0],s=n[1],i=n[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(i)var l=i(r)}for(t&&t(n);u<a.length;u++)c=a[u],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(l)},n=self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[504],(function(){return r(3440)}));n=r.O(n)})();
//# sourceMappingURL=app.f2b8b522.js.map