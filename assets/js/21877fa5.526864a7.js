(self.webpackChunk=self.webpackChunk||[]).push([[6466],{47379:(e,a,t)=>{"use strict";t.d(a,{A:()=>h});var n=t(90675),o=t(10467),r=t(96540),s=t(69761),i=t(82285),l=t(11135);function c(e,a,t){return u.apply(this,arguments)}function u(){return(u=(0,o.A)((0,n.A)().mark((function e(a,t,o){var r,l,c,u,p;return(0,n.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=void 0,l=void 0,e.t0=a,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:"polkadotpeople"===e.t0?13:"kusamapeople"===e.t0?15:17;break;case 5:return r="wss://rpc.polkadot.io",e.abrupt("break",18);case 7:return r="wss://kusama-rpc.polkadot.io/",e.abrupt("break",18);case 9:return r="wss://statemine-rpc.polkadot.io/",e.abrupt("break",18);case 11:return r="wss://statemint-rpc.polkadot.io/",e.abrupt("break",18);case 13:return r="wss://polkadot-people-rpc.polkadot.io/",e.abrupt("break",18);case 15:return r="wss://kusama-people-rpc.polkadot.io/",e.abrupt("break",18);case 17:console.log("Unknown socket url provided, no connection made.");case 18:if(void 0!==r){e.next=22;break}return e.abrupt("return");case 22:return c=new s.E(r),e.next=25,i.G.create({provider:c});case 25:u=e.sent,(p=t.split(".")).forEach((function(e){e in u&&(u=u[e])})),e.t1=p[0],e.next="consts"===e.t1?31:"query"===e.t1?33:38;break;case 31:return l=u.toString(),e.abrupt("break",39);case 33:return e.next=35,u();case 35:return l=(l=e.sent).toString(),e.abrupt("break",39);case 38:console.log("Unknown path prefix ("+p[0]+") in "+t);case 39:return e.abrupt("return",l);case 40:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e,a,t,n){switch(a){case"humanReadable":(0,l.HumanReadable)(e,t,n);break;case"precise":(0,l.Precise)(e,t,n);break;case"blocksToDays":(0,l.BlocksToDays)(e,n);break;case"erasToDays":(0,l.ErasToDays)(e,n,t);break;case"percentage":(0,l.Percentage)(e,n);break;case"permillToPercent":(0,l.PermillToPercent)(e,n);break;case"arrayLength":(0,l.ArrayLength)(e,n);break;default:return void console.log("Ignoring unknown filter type")}}const h=function(e){var a=e.network,t=e.path,s=e.defaultValue,i=e.filter,l=void 0===i?void 0:i,u=(0,r.useState)(""),h=u[0],d=u[1];return a=a.toLowerCase(),(0,r.useEffect)((function(){void 0!==l?p(s.toString(),l,a,d):d(s.toString());var e=void 0;switch(a){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":e="wss://polkadot-asset-hub-rpc.polkadot.io/";break;case"kusamapeople":e="wss://kusama-people-rpc.polkadot.io";break;case"polkadotpeople":e="wss://polkadot-people-rpc.polkadot.io";break;default:console.log("Unknown network provided, "+a)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var r=function(){var e=(0,o.A)((0,n.A)().mark((function e(){var o;return(0,n.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(a,t,d);case 2:if(void 0!==(o=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?p(o,l,a,d):d(o);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{r()}catch(i){console.log(i)}}}),[]),h}},11135:e=>{var a="polkadot",t="kusama",n="statemine",o="statemint",r="polkadotpeople",s="kusamapeople",i={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"},polkadotpeople:{precision:1e10,symbol:"DOT"},kusamapeople:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,l,c){var u=void 0;if(l===a||l===o)u=3;else if(l===t||l===n||l===r)u=6;else{if(l!=s)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");u=8}e=parseFloat(e),c((e=Number.isInteger(e/i[l].precision)?e/i[l].precision+" "+i[l].symbol:(e/i[l].precision).toFixed(u)+" "+i[l].symbol).toString())},Precise:function(e,a,t){t(e=(e=parseFloat(e))/i[a].precision+" "+i[a].symbol)},BlocksToDays:function(e,a){a((e=6*e/86400).toString())},ErasToDays:function(e,i,l){var c=void 0;if(l===a||l===o||l==r)c=1;else{if(l!==t&&l!==n&&l!=s)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");c=4}i((e/=c).toString())},Percentage:function(e,a){a((e/=1e7).toString())},PermillToPercent:function(e,a){a((e/=1e4).toString())},ArrayLength:function(e,a){a((e=e.split(",").length).toString())}}},19365:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});var n=t(96540),o=t(20053);const r={tabItem:"tabItem_Ymn6"};function s(e){var a=e.children,t=e.hidden,s=e.className;return n.createElement("div",{role:"tabpanel",className:(0,o.A)(r.tabItem,s),hidden:t},a)}},11470:(e,a,t)=>{"use strict";t.d(a,{A:()=>w});var n=t(58168),o=t(96540),r=t(20053),s=t(23104),i=t(56347),l=t(57485),c=t(31682),u=t(89466);function p(e){return function(e){var a,t;return null!=(a=null==(t=o.Children.map(e,(function(e){if(!e||(0,o.isValidElement)(e)&&(a=e.props)&&"object"==typeof a&&"value"in a)return e;var a;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?a:[]}(e).map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes,default:a.default}}))}function h(e){var a=e.values,t=e.children;return(0,o.useMemo)((function(){var e=null!=a?a:p(t);return function(e){var a=(0,c.X)(e,(function(e,a){return e.value===a.value}));if(a.length>0)throw new Error('Docusaurus error: Duplicate values "'+a.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[a,t])}function d(e){var a=e.value;return e.tabValues.some((function(e){return e.value===a}))}function m(e){var a=e.queryString,t=void 0!==a&&a,n=e.groupId,r=(0,i.W6)(),s=function(e){var a=e.queryString,t=void 0!==a&&a,n=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,o.useCallback)((function(e){if(s){var a=new URLSearchParams(r.location.search);a.set(s,e),r.replace(Object.assign({},r.location,{search:a.toString()}))}}),[s,r])]}function y(e){var a,t,n,r,s=e.defaultValue,i=e.queryString,l=void 0!==i&&i,c=e.groupId,p=h(e),y=(0,o.useState)((function(){return function(e){var a,t=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var o=null!=(a=n.find((function(e){return e.default})))?a:n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:s,tabValues:p})})),f=y[0],g=y[1],b=m({queryString:l,groupId:c}),v=b[0],k=b[1],w=(a=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),t=(0,u.Dv)(a),n=t[0],r=t[1],[n,(0,o.useCallback)((function(e){a&&r.set(e)}),[a,r])]),T=w[0],P=w[1],S=function(){var e=null!=v?v:T;return d({value:e,tabValues:p})?e:null}();return(0,o.useLayoutEffect)((function(){S&&g(S)}),[S]),{selectedValue:f,selectValue:(0,o.useCallback)((function(e){if(!d({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),k(e),P(e)}),[k,P,p]),tabValues:p}}var f=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var a=e.className,t=e.block,i=e.selectedValue,l=e.selectValue,c=e.tabValues,u=[],p=(0,s.a_)().blockElementScrollPositionUntilNextRender,h=function(e){var a=e.currentTarget,t=u.indexOf(a),n=c[t].value;n!==i&&(p(a),l(n))},d=function(e){var a,t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":var n,o=u.indexOf(e.currentTarget)+1;t=null!=(n=u[o])?n:u[0];break;case"ArrowLeft":var r,s=u.indexOf(e.currentTarget)-1;t=null!=(r=u[s])?r:u[u.length-1]}null==(a=t)||a.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},a)},c.map((function(e){var a=e.value,t=e.label,s=e.attributes;return o.createElement("li",(0,n.A)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:function(e){return u.push(e)},onKeyDown:d,onClick:h},s,{className:(0,r.A)("tabs__item",g.tabItem,null==s?void 0:s.className,{"tabs__item--active":i===a})}),null!=t?t:a)})))}function v(e){var a=e.lazy,t=e.children,n=e.selectedValue,r=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){var s=r.find((function(e){return e.props.value===n}));return s?(0,o.cloneElement)(s,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map((function(e,a){return(0,o.cloneElement)(e,{key:a,hidden:e.props.value!==n})})))}function k(e){var a=y(e);return o.createElement("div",{className:(0,r.A)("tabs-container",g.tabList)},o.createElement(b,(0,n.A)({},e,a)),o.createElement(v,(0,n.A)({},e,a)))}function w(e){var a=(0,f.A)();return o.createElement(k,(0,n.A)({key:String(a)},e))}},69026:(e,a,t)=>{"use strict";t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>d});var n=t(58168),o=t(98587),r=(t(96540),t(15680)),s=(t(47379),t(11470)),i=t(19365),l=["components"],c={id:"learn-system-chains",title:"System Parachains",sidebar_label:"System Parachains",description:"System Parachains currently deployed on Polkadot.",keywords:["common good","system","parachains","system level","public utility"],slug:"../learn-system-chains"},u=void 0,p={unversionedId:"learn/learn-system-chains",id:"learn/learn-system-chains",title:"System Parachains",description:"System Parachains currently deployed on Polkadot.",source:"@site/../docs/learn/learn-system-chains.md",sourceDirName:"learn",slug:"/learn-system-chains",permalink:"/docs/learn-system-chains",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-system-chains.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1725460864,formattedLastUpdatedAt:"Sep 4, 2024",frontMatter:{id:"learn-system-chains",title:"System Parachains",sidebar_label:"System Parachains",description:"System Parachains currently deployed on Polkadot.",keywords:["common good","system","parachains","system level","public utility"],slug:"../learn-system-chains"},sidebar:"docs",previous:{title:"Protocol Overview",permalink:"/docs/learn-parachains-protocol"},next:{title:"Parachain Slot Auctions",permalink:"/docs/learn-auction"}},h={},d=[{value:"Overview",id:"overview",level:2},{value:"Existing System Chains",id:"existing-system-chains",level:2},{value:"Asset Hub",id:"asset-hub",level:3},{value:"Collectives",id:"collectives",level:3},{value:"Bridge Hub",id:"bridge-hub",level:3},{value:"People Chain",id:"people-chain",level:3},{value:"Coretime Chain",id:"coretime-chain",level:3},{value:"Encointer",id:"encointer",level:3}],m={toc:d},y="wrapper";function f(e){var a=e.components,t=(0,o.A)(e,l);return(0,r.yg)(y,(0,n.A)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The primary functionality of the Relay chain is to secure the parachains and facilitate secure\ncommunication between them. All other functionalities like asset transfers, governance, identities\nand bridging (a potentially resource intensive task) can benefit from operating separately on system\nchains. System chains are responsible for delegating functionality away from the relay chain for\npeformance reasons, taking advantage of the inherent parallelization the architecture of Polkadot\nprovides."),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,"System parachains are those that contain core Polkadot protocol features, but in parachains rather\nthan the Relay Chain. Rather than leasing an execution core by economic means (e.g., auction),\nexecution cores are allocated by network ",(0,r.yg)("a",{parentName:"p",href:"/docs/learn-guides-polkadot-opengov"},"governance"),"."),(0,r.yg)("p",null,"By hosting core protocol logic in parachains instead of the Relay Chain, Polkadot uses its own\nscaling technology -- namely, parallel execution -- to host ",(0,r.yg)("em",{parentName:"p"},"itself"),". System parachains remove\ntransactions from the Relay Chain, allowing more Relay Chain\n",(0,r.yg)("a",{parentName:"p",href:"https://www.rob.tech/polkadot-blockspace-over-blockchains/"},"blockspace")," to be used for Polkadot's\nprimary purpose: validating parachains."),(0,r.yg)("p",null,"System parachains always defer to on-chain governance to manage their upgrades and other sensitive\nactions. That is, they do not have their own native tokens or governance systems separate from DOT\nKSM. In fact, there will likely be a system parachain specifically for network governance."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},'In the past, these were often called "Common Good Parachains", so you may come across articles and\ndiscussions using that term. As the network has evolved, that term has been confusing in many cases,\nso "System Parachains" is preferred now. A discussion on this evolution can be found in\n',(0,r.yg)("a",{parentName:"p",href:"https://forum.polkadot.network/t/polkadot-protocol-and-common-good-parachains/866"},"this forum thread"),".")),(0,r.yg)("h2",{id:"existing-system-chains"},"Existing System Chains"),(0,r.yg)(s.A,{groupId:"clients",values:[{label:"Polkadot",value:"polkadot"},{label:"Kusama",value:"kusama"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"polkadot",mdxType:"TabItem"},(0,r.yg)("h3",{id:"asset-hub"},"Asset Hub"),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/tree/master/cumulus#asset-hub-"},"Asset Hub")," on both\nPolkadot and Kusama are the first system parachains."),(0,r.yg)("p",null,"The Asset Hub is an asset portal for the entire network. It helps asset creators (e.g. reserve\nbacked stablecoin issuers) to track the total issuance of their asset in the\nPolkadot network, including amounts that have\nbeen transferred to other parachains. It is also the point where they can transact, to mint and\nburn, to manage the on-chain asset."),(0,r.yg)("p",null,"The Asset Hub also supports non-fungible assets (NFTs) via the\n",(0,r.yg)("a",{parentName:"p",href:"https://polkadot.js.org/docs/substrate/extrinsics#uniques"},"Uniques pallet")," and the new\n",(0,r.yg)("a",{parentName:"p",href:"https://polkadot.js.org/docs/substrate/extrinsics#nfts"},"nfts pallet"),". For more information about\nNFTs see the ",(0,r.yg)("a",{parentName:"p",href:"/docs/learn-nft-pallets"},"dedicated wiki page"),"."),(0,r.yg)("p",null,"This logic for asset management is not encoded in smart contracts, but rather directly in the\nruntime of the chain. Because of the efficiency of executing logic in a parachain, fees and deposits\nare about 1/10th of their respective value on the Relay Chain."),(0,r.yg)("p",null,"These low fee levels mean that the Asset Hub is well suited for handling\nDOT balances and transfers as well as managing\non-chain assets."),(0,r.yg)("h3",{id:"collectives"},"Collectives"),(0,r.yg)("p",null,"The Polkadot Collectives parachain was added in\n",(0,r.yg)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/referendum/81"},"Referendum 81")," and exists only on Polkadot (i.e.,\nthere is no Kusama equivalent). The Collectives chain hosts on-chain collectives that serve the\nPolkadot network."),(0,r.yg)("p",null,"Some of these collectives are the\n",(0,r.yg)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/referendum/94"},"Polkadot Alliance")," and the Polkadot Technical\n",(0,r.yg)("a",{parentName:"p",href:"/docs/learn-polkadot-technical-fellowship"},"Fellowship"),". These on-chain collectives will play\nimportant roles in the future of network stewardship and decentralized governance."),(0,r.yg)("p",null,"Networks themselves can act as collectives and express their legislative voices as single opinions\nwithin other networks. This is achieved with the assistance from a ",(0,r.yg)("a",{parentName:"p",href:"#bridge-hub"},"bridge hub"),"."),(0,r.yg)("h3",{id:"bridge-hub"},"Bridge Hub"),(0,r.yg)("p",null,"Before Polkadot and Kusama supported their first parachains, the only way to design a bridge was to\nput the logic onto the Relay Chain itself. Since both networks now support parachains, it makes\nsense to have a parachain on each network dedicated to bridges. This is because of the execution\nisolation provided by parachains."),(0,r.yg)("p",null,"The Bridge Hub system parachain operates on the relay chain, and is responsible for faciliating\nbridges to the wider Web3 space. It contains the required bridge\n",(0,r.yg)("a",{parentName:"p",href:"/docs/glossary#pallet"},"pallets")," in its runtime, which enable trustless bridging with other\nblockchain networks like Polkadot, Kusama and Ethereum. The Bridge Hub uses the native token of the\nrelay chain."),(0,r.yg)("p",null,"See the ",(0,r.yg)("a",{parentName:"p",href:"/docs/learn-bridges"},"Bridges page")," for information on the latest bridge projects."),(0,r.yg)("h3",{id:"people-chain"},"People Chain"),(0,r.yg)("p",null,"The People Chain allows users to mange their account ",(0,r.yg)("a",{parentName:"p",href:"/docs/learn-identity"},"identity"),"."),(0,r.yg)("h3",{id:"coretime-chain"},"Coretime Chain"),(0,r.yg)("p",null,"The Coretime system chain allows users to buy coretime to access Polkadot's computation.\n",(0,r.yg)("a",{parentName:"p",href:"/docs/learn-guides-coretime-marketplaces"},"Coretime marketplaces")," run on top of the Coretime chain.\nFor more information about agile coretime, see ",(0,r.yg)("a",{parentName:"p",href:"/docs/learn-agile-coretime"},"here"),".")),(0,r.yg)(i.A,{value:"kusama",mdxType:"TabItem"},(0,r.yg)("p",null,"Compared to Polkadot, Kusama does not have the Collectives system chain, and it has the\n",(0,r.yg)("a",{parentName:"p",href:"https://encointer.org/encointer-for-web3/"},"Encointer")," system chain."),(0,r.yg)("h3",{id:"encointer"},"Encointer"),(0,r.yg)("p",null,"Encointer is a blockchain platform for self-sovereign ID and a global universal basic income. With\n",(0,r.yg)("a",{parentName:"p",href:"https://kusama.polkassembly.io/referendum/158"},"referendum 158")," Encointer was registered as the\nsecond system parachain on Kusama's network. The functionality of Encointer adds logic to the Relay\nChain that aims to bring financial inclusivity to Web3 and mitigate Sybil attacks with a novel Proof\nof Personhood (PoP) system for unique identity."),(0,r.yg)("p",null,"Encointer offers a framework that, in principle, allows for any group of real people to create,\ndistribute, and use their own digital community tokens.\n",(0,r.yg)("a",{parentName:"p",href:"https://kusama.polkassembly.io/referendum/187"},"Referendum 187")," introduced a runtime upgrade\nbringing governance and full functionality for communities to be able to use the protocol."),(0,r.yg)("p",null,"Encointer aims to invert the\n",(0,r.yg)("a",{parentName:"p",href:"https://www.newworldencyclopedia.org/entry/Richard_Cantillon"},"Cantillon Effect"),", where money is\nissued at the bottom, and not as credit to businesses or creditworthy individuals. This way, every\nindividual gets a ",(0,r.yg)("a",{parentName:"p",href:"https://book.encointer.org/economics-ubi.html"},"universal basic income (UBI)"),"."),(0,r.yg)("p",null,"To resist Sybil attacks, the Encointer protocol uses a PoP mechanism to foster a unique identity\nsystem. The notion is that a person can only be present at one place at a given time. Participants\nare requested to attend physical key-signing ceremonies with small groups of random people at\nrandomized locations, where these local meetings are part of one global ceremony that co-occur.\nParticipants use the Encointer wallet app to participate in these ceremonies, and the wallet enables\nthe management of local community currencies. Watch an Encointer ceremony in action in\n",(0,r.yg)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=tcgpCCYBqko"},"this video"),"."),(0,r.yg)("p",null,"The protocol involves ",(0,r.yg)("a",{parentName:"p",href:"https://book.encointer.org/ssi.html#privacy-considerations"},"other mechanisms"),"\nto protect the privacy of users in addition to the physical key-signing ceremonies."),(0,r.yg)("p",null,"Encointer was accepted as a system chain based on its offer of a Sybil defense mechanism as a basis\nfor digital democracy. This can also be adapted by other chains, which can use the unique identity\nsystem to prevent Sybil attacks and use PoP for token airdrops or faucets."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"To learn more about Encointer, check out the official\n",(0,r.yg)("a",{parentName:"p",href:"https://book.encointer.org/introduction.html"},"Encointer book"),".")))))}f.isMDXComponent=!0},47790:()=>{}}]);