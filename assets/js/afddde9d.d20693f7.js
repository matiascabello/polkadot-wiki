"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9009],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=s,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=new Array(o);r[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:s,r[1]=i;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},55228:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=n(87462),s=n(63366),o=(n(67294),n(3905)),r=["components"],i={id:"learn-asset-conversion-assethub",title:"Asset Conversion on AssetHub",sidebar_label:"Asset Conversion",description:"Asset Conversion implementation details on AssetHub.",keywords:["Assets","DEX","Exchange","Pools","Tokens"],slug:"../learn-asset-conversion-assethub"},l=void 0,c={unversionedId:"learn/learn-asset-conversion-assethub",id:"learn/learn-asset-conversion-assethub",title:"Asset Conversion on AssetHub",description:"Asset Conversion implementation details on AssetHub.",source:"@site/../docs/learn/learn-asset-conversion-assethub.md",sourceDirName:"learn",slug:"/learn-asset-conversion-assethub",permalink:"/docs/learn-asset-conversion-assethub",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-asset-conversion-assethub.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1714376284,formattedLastUpdatedAt:"Apr 29, 2024",frontMatter:{id:"learn-asset-conversion-assethub",title:"Asset Conversion on AssetHub",sidebar_label:"Asset Conversion",description:"Asset Conversion implementation details on AssetHub.",keywords:["Assets","DEX","Exchange","Pools","Tokens"],slug:"../learn-asset-conversion-assethub"},sidebar:"docs",previous:{title:"Asset Hub",permalink:"/docs/learn-assets"},next:{title:"Teleporting Assets",permalink:"/docs/learn-teleport"}},p={},u=[{value:"Fee Payment in Any Asset - Wallets",id:"fee-payment-in-any-asset---wallets",level:2},{value:"Fee Payment in Any Asset - Parachains",id:"fee-payment-in-any-asset---parachains",level:2},{value:"Creation of Pools with Foreign Assets - Parachains",id:"creation-of-pools-with-foreign-assets---parachains",level:2}],d={toc:u},h="wrapper";function f(e){var t=e.components,n=(0,s.Z)(e,r);return(0,o.kt)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Asset conversion is a simple AMM (Automated Market Maker) based on\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/v2-core"},"Uniswap V2")," logic, deployed as a\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/asset-conversion"},"pallet on Polkadot AssetHub"),".\nIn the AMM model the prices of tokens are determined by a mathematical formula based on the ratio of\ntokens in a liquidity pool, unlike traditional exchanges that use an order book. This will be a\n\u201ctrustless\u201d DEX, controlled through Polkadot OpenGov."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The asset pairs of the liquidity pools of AssetHub will always contain\nDOT as one of the assets. Provision of liquidity\nfor pools with arbitrary asset pairs is not allowed.")),(0,o.kt)("p",null,"Asset Conversion on Asset Hub enables fee payment in any asset, given it has a liquidity pool, such\nthat the fee handler (in this case, a Collator) only receives the native asset\n(DOT )."),(0,o.kt)("p",null,"Asset Conversion pallet allows you to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/pallet-asset-conversion/latest/pallet_asset_conversion/pallet/struct.Pallet.html#method.create_pool"},"create a liquidity pool"),"\nwith DOT and an asset"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/pallet-asset-conversion/latest/pallet_asset_conversion/pallet/struct.Pallet.html#method.add_liquidity"},"provide the liquidity"),"\nand receive back an LP token"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/pallet-asset-conversion/latest/pallet_asset_conversion/pallet/struct.Pallet.html#method.remove_liquidity"},"exchange the LP token back to assets")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/pallet-asset-conversion/latest/pallet_asset_conversion/pallet/struct.Pallet.html#method.swap_exact_tokens_for_tokens"},"swap assets if there is a pool created")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/pallet-asset-conversion/latest/pallet_asset_conversion/trait.AssetConversionApi.html#method.quote_price_exact_tokens_for_tokens"},"query for an exchange price"),"\nvia a runtime call endpoint"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/pallet-asset-conversion/latest/pallet_asset_conversion/trait.AssetConversionApi.html#method.get_reserves"},"query the size of a liquidity pool"),".")),(0,o.kt)("admonition",{title:"Asset Conversion Tutorials",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The Asset Conversion user guide and tutorials are available\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-guides-asset-conversion"},"here"))),(0,o.kt)("h2",{id:"fee-payment-in-any-asset---wallets"},"Fee Payment in Any Asset - Wallets"),(0,o.kt)("p",null,"Without Asset Conversion pallet, only DOT and\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-assets#sufficient-assets"},"sufficient assets")," can be used for paying transaction fees.\nWith the Asset Conversion pallet deployed, Wallets can enable users to pay transaction fees through\nany arbitrary asset made available in pools with either DOT or sufficient assets. More specifically,\nthis functionality is enabled through\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/tree/cdc8d197e6d487ef54f7e16767b5c1ab041c8b10/substrate/frame/transaction-payment/asset-conversion-tx-payment"},"Asset Conversion Transaction Payment Pallet"),",\nallowing runtimes that include it to pay for transactions in assets other than the native token of\nthe chain."),(0,o.kt)("admonition",{title:"Handling Pools with Low Liquidity",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The wallets and UIs should ensure that the user is prompted with the necessary warnings, such that\nthey do not accidentally spend all of their funds to perform a swap on a pool with no or low\nliquidity.")),(0,o.kt)("h2",{id:"fee-payment-in-any-asset---parachains"},"Fee Payment in Any Asset - Parachains"),(0,o.kt)("p",null,"Parachains can pay for their XCM execution fees in any asset with a liquidity pool on AssetHub."),(0,o.kt)("h2",{id:"creation-of-pools-with-foreign-assets---parachains"},"Creation of Pools with Foreign Assets - Parachains"),(0,o.kt)("p",null,"Assets pallet uses XCM MultiLocations to represent assets, and their corresponding origins to\ncontrol them."),(0,o.kt)("p",null,"One of the pain points of integrating parachain tokens natively on wallets and exchanges is that\nthey require running individual parachain infrastructure like full nodes to process deposits, and\nrequire additional code to handle withdrawals because they need to be able to construct and\nbroadcast transactions on each parachain. These parachains could use different balances pallets or\norder them differently. When Polkadot hosts hundreds of parachains (and possibly thousands of\nthreads), this becomes a huge burden in terms of network support. This is in contrast to adding\nsupport for an additional ERC20 token; the marginal effort is very small since an Ethereum node\nalready serves all the data they need."),(0,o.kt)("p",null,"With support for these assets on Asset Hub, exchanges/custodians could monitor one chain for\ndeposits (applications and UIs would need to give the option to transfer to Asset Hub). For\nwithdrawals, users could choose to withdraw to their address on Asset Hub. There are two user\nexperience bonuses here:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The exchange/custodian only needs to transact on one parachain and can access every other without\nany infrastructure lift."),(0,o.kt)("li",{parentName:"ul"},"For the user, they never actually need to \u201csee\u201d AssetHub. It\u2019s entirely abstracted away behind\neither the parachain wallet/application or the exchange/custodian.")))}f.isMDXComponent=!0}}]);