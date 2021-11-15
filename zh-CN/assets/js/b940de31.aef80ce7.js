"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7633],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=s,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||r;return n?a.createElement(m,i(i({ref:t},h),{},{components:n})):a.createElement(m,i({ref:t},h))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11427:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>l,metadata:()=>c,toc:()=>h,default:()=>u});var a=n(87462),s=n(63366),r=(n(67294),n(3905)),i=["components"],o={id:"learn-assets",title:"Assets",sidebar_label:"Assets",description:"Learn about fungible and non-fungible assets in the Polkadot network.",slug:"../learn-assets"},l=void 0,c={unversionedId:"learn/learn-assets",id:"learn/learn-assets",isDocsHomePage:!1,title:"Assets",description:"Learn about fungible and non-fungible assets in the Polkadot network.",source:"@site/../docs/learn/learn-assets.md",sourceDirName:"learn",slug:"/learn-assets",permalink:"/zh-CN/docs/learn-assets",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-assets.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1634695124,formattedLastUpdatedAt:"2021/10/20",frontMatter:{id:"learn-assets",title:"Assets",sidebar_label:"Assets",description:"Learn about fungible and non-fungible assets in the Polkadot network.",slug:"../learn-assets"},sidebar:"docs",previous:{title:"Backing up and Restoring Accounts",permalink:"/zh-CN/docs/learn-account-restore"},next:{title:"NFTs",permalink:"/zh-CN/docs/learn/learn-nft"}},h=[{value:"Fungible Assets",id:"fungible-assets",children:[{value:"Creation and Management",id:"creation-and-management",children:[],level:3},{value:"Using",id:"using",children:[],level:3},{value:"Application Development",id:"application-development",children:[],level:3},{value:"Cross-Chain Accounting",id:"cross-chain-accounting",children:[],level:3}],level:2},{value:"Non-Fungible Assets",id:"non-fungible-assets",children:[{value:"Creation and Management",id:"creation-and-management-1",children:[],level:3},{value:"Using",id:"using-1",children:[],level:3}],level:2},{value:"Advanced Techniques",id:"advanced-techniques",children:[],level:2}],p={toc:h};function u(e){var t=e.components,n=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Assets in the Polkadot network can be\nrepresented on several chains. They can also take many forms, from a parachain's native token to\non-chain representations of off-chain reserves. This page focuses on the latter, namely assets that\nwould be issued by a creator (e.g. rights to audited, off-chain reserves held by the creator, or art\nissued as an NFT)."),(0,r.kt)("p",null,"The\n",(0,r.kt)("a",{parentName:"p",href:"https://www.parity.io/blog/statemint-generic-assets-chain-proposing-a-common-good-parachain-to-polkadot-governance/"},"Statemint parachain"),"\n",'\nhosts data structures and logic that specialize in the creation, management, and use of assets in\nthe Polkadot network. Although other\nparachains can host applications dealing with assets on\nStatemint, Statemint can be\nthought of as the "home base" of assets in the network.'),(0,r.kt)("p",null,"Statemint uses DOT as its native\ntoken. The chain yields its governance to its parent Relay Chain, and has no inflation or era-based\nrewards for collators (although collators do receive a portion of transaction fees). As a\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.network/blog/common-good-parachains-an-introduction-to-governance-allocated-parachain-slots/"},"common good parachain"),",\nStatemint\nhas a trusted relationship with the Relay Chain,\nand as such, can teleport DOT between itself and the Relay Chain. That is, DOT on Statemint is\njust as good as DOT on the Relay Chain."),(0,r.kt)("p",null,"Statemint does not support smart\ncontracts. See the ",(0,r.kt)("a",{parentName:"p",href:"#advanced-techniques"},"Advanced")," section at the bottom for discussion on using\nproxy and multisig accounts to replicate oft used contract logic."),(0,r.kt)("h2",{id:"fungible-assets"},"Fungible Assets"),(0,r.kt)("p",null,"Fungible assets are those that are interchangeable, i.e. one unit is equivalent to any other unit\nfor the purposes of claiming the underlying item. Statemint\nrepresents fungible assets in the Assets pallet. For those familiar\nwith the ERC20 standard, this pallet presents a similar interface. However, the logic is encoded\ndirectly in the chain's runtime. As such, operations are not gas metered and instead are benchmarked\nupon every release, leading to efficient execution and stable transaction fees."),(0,r.kt)("h3",{id:"creation-and-management"},"Creation and Management"),(0,r.kt)("p",null,"Anyone on the network can create assets on Statemint, as long as they can reserve the\nrequired deposit of 100 DOT.. The network reserves the deposit on creation. The creator\nalso must specify a unique ",(0,r.kt)("inlineCode",{parentName:"p"},"AssetId"),", an integer of type ",(0,r.kt)("inlineCode",{parentName:"p"},"u32"),", to identify the asset. The ",(0,r.kt)("inlineCode",{parentName:"p"},"AssetId"),'\nshould be the canonical identifier for an asset, as the chain does not enforce the uniqueness of\nmetadata like "name" and "symbol". The creator must also specify a minimum balance, which will\nprevent accounts from having dust balances.'),(0,r.kt)("p",null,"An asset class has a number of privileged roles. The creator of the asset automatically takes on all\nprivileged roles, but can reassign them after creation. These roles are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Owner"),(0,r.kt)("li",{parentName:"ul"},"Issuer"),(0,r.kt)("li",{parentName:"ul"},"Admin"),(0,r.kt)("li",{parentName:"ul"},"Freezer")),(0,r.kt)("p",null,"The owner has the ability to set the accounts responsible for the other three roles, as well as set\nasset metadata (e.g. name, symbol, decimals). The issuer can mint and burn tokens to/from addresses\nof their choosing. The freezer can freeze assets on target addresses or the entire asset class. The\nadmin can make force transfers as well as unfreeze accounts of the asset class. ",(0,r.kt)("strong",{parentName:"p"},"Always refer to\nthe ",(0,r.kt)("a",{parentName:"strong",href:"https://crates.parity.io/pallet_assets/index.html"},"reference documentation")," for certainty on\nprivileged roles.")),(0,r.kt)("p",null,"An asset's details contain one field not accessible to its owner or admin team, that of asset\nsufficiency. Only the network's governance mechanism can deem an asset as ",(0,r.kt)("em",{parentName:"p"},"sufficient"),". A balance of\na non-sufficient asset (the default) can only exist on already-existing accounts. That is, a user\ncould not create a new account on-chain by transferring an insufficient asset to it; the account\nmust already exist by having more than the existential deposit in DOT\n(or a sufficient asset). However, assets deemed ",(0,r.kt)("em",{parentName:"p"},"sufficient")," can\ninstantiate accounts. In the future, ",(0,r.kt)("em",{parentName:"p"},"sufficient")," assets will be able to pay transaction fees, such\nthat users can transact on Statemint without the need for DOT\n."),(0,r.kt)("h3",{id:"using"},"Using"),(0,r.kt)("p",null,"Users have a simple interface, namely the ability to transfer asset balances to other accounts\non-chain. As mentioned before, if the asset is not ",(0,r.kt)("em",{parentName:"p"},"sufficient"),", then the destination account must\nalready exist for the transfer to succeed."),(0,r.kt)("p",null,"The chain also contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer_keep_alive")," function, similar to that of the Balances pallet,\nthat will fail if execution would kill the sending account."),(0,r.kt)("p",null,"Statemint also sweeps dust balances into\ntransfers. For example, if an asset has a minimum balance of 10 and an account has a balance of 25,\nthen an attempt to transfer 20 units would actually transfer all 25."),(0,r.kt)("h3",{id:"application-development"},"Application Development"),(0,r.kt)("p",null,"Statemint provides an ",(0,r.kt)("inlineCode",{parentName:"p"},"approve_transfer"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"transfer_approved"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"cancel_approval")," interface. Application developers can use this interface\nso that users can authorize the application to effectuate transfers up to a given amount on behalf\nof an account."),(0,r.kt)("h3",{id:"cross-chain-accounting"},"Cross-Chain Accounting"),(0,r.kt)("p",null,"Statemint uses a reserve-backed system to\nmanage asset transfers to other parachains. It tracks how much of each asset has gone to each\nparachain and will not accept more back from a particular parachain."),(0,r.kt)("p",null,"As a result of this, asset owners can use Statemint\nto track information like the total issuance of their asset in the\nentire network, as parachain balances would be included in the reserve-backed table. Likewise, for\nthe minting and burning of tokens, an asset's team can perform all operations on\nStatemint and propagate any minted tokens\nto other parachains in the network."),(0,r.kt)("p",null,'Parachains that want to send assets to other parachains should do so via instructions to\nStatemint so that the reserve-backed table\nstays up to date. For more info, see the "Moving Assets between Chains in XCM" section of the\n',(0,r.kt)("a",{parentName:"p",href:"https://polkadot.network/blog/xcm-the-cross-consensus-message-format/"},"article on the XCM format"),"."),(0,r.kt)("h2",{id:"non-fungible-assets"},"Non-Fungible Assets"),(0,r.kt)("p",null,"Unlike fungible assets, the particular instance of a non-fungible asset (NFT) has meaning separate\nfrom another instance of the same class. Statemint\nrepresents NFTs in the\n",(0,r.kt)("a",{parentName:"p",href:"https://crates.parity.io/pallet_uniques/index.html"},"Uniques pallet"),"."),(0,r.kt)("p",null,"Similar to the Assets pallet, this functionality is encoded into the chain. Operations are\nbenchmarked prior to each release in lieu of any runtime metering, ensuring efficient execution and\nstable transaction fees."),(0,r.kt)("h3",{id:"creation-and-management-1"},"Creation and Management"),(0,r.kt)("p",null,'Anyone on the network can create an asset class, as long as they reserve the required\ndeposit of 100 DOT on Statemint. Creating instances of\na class also requires a per-instance deposit, unless the chain\'s governance designates the class as\n"free holding", allowing the class to mint more instances without deposit. The creator must specify\na ',(0,r.kt)("inlineCode",{parentName:"p"},"ClassId"),", which, like its cousin ",(0,r.kt)("inlineCode",{parentName:"p"},"AssetId"),", should be the canonical identifier for the class."),(0,r.kt)("p",null,"The creator can also specify the same privileged roles of Owner, Admin, Issuer, and Freezer."),(0,r.kt)("p",null,"Asset classes and instances can have associated metadata. The metadata is an array of data that the\nclass Owner can add on-chain, for example, a link to an IPFS hash or other off-chain hosting\nservice. The Uniques pallet also supports setting key/value pairs as attributes to a class or\ninstance."),(0,r.kt)("h3",{id:"using-1"},"Using"),(0,r.kt)("p",null,"Users can transfer their NFTs to other accounts. The chain also provides an ",(0,r.kt)("inlineCode",{parentName:"p"},"approve_transfer"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"transfer_approved"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"cancel_approval")," interface that application developers can use to allow\nusers to authorize an application to transfer an instance on their behalf."),(0,r.kt)("h2",{id:"advanced-techniques"},"Advanced Techniques"),(0,r.kt)("p",null,"Many asset creators on other networks use smart contracts to control privileged functions like\nminting and burning. Although Statemint\ndoes not have a smart contract interface, it contains the\n",(0,r.kt)("a",{parentName:"p",href:"https://crates.parity.io/pallet_multisig/index.html"},"Multisig"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://crates.parity.io/pallet_proxy/index.html"},"Proxy"),", and\n",(0,r.kt)("a",{parentName:"p",href:"https://crates.parity.io/pallet_utility/index.html"},"Utility")," pallets, which will meet most account\nmanagement needs."),(0,r.kt)("p",null,"For example, if a team wants sign-off from two groups to perform a privileged operation, it could\ncreate a 2-of-2 multisig from two anonymous proxies, and then set members from each group as proxies\nto those two accounts."))}u.isMDXComponent=!0}}]);