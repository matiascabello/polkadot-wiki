"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5168],{34495:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>h,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=n(74848),i=n(28453),o=n(67141);const s={id:"learn-parachains",title:"Parachains",sidebar_label:"Introduction to Parachains",description:"An Introduction to Polkadot's Parachains.",keywords:["parachains","application-specific","sharding","on-demand","parathread"],slug:"../learn-parachains"},r=void 0,c={id:"learn/learn-parachains",title:"Parachains",description:"An Introduction to Polkadot's Parachains.",source:"@site/../docs/learn/learn-parachains.md",sourceDirName:"learn",slug:"/learn-parachains",permalink:"/docs/learn-parachains",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-parachains.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1727943421e3,frontMatter:{id:"learn-parachains",title:"Parachains",sidebar_label:"Introduction to Parachains",description:"An Introduction to Polkadot's Parachains.",keywords:["parachains","application-specific","sharding","on-demand","parathread"],slug:"../learn-parachains"},sidebar:"docs",previous:{title:"Parachains",permalink:"/docs/learn-parachains-index"},next:{title:"Protocol Overview",permalink:"/docs/learn-parachains-protocol"}},h={},l=[{value:"Definition of a Parachain",id:"definition-of-a-parachain",level:2},{value:"State Transitions",id:"state-transitions",level:3},{value:"Why Parachains?",id:"why-parachains",level:2},{value:"Parachain Benefits",id:"parachain-benefits",level:3},{value:"Shared Security",id:"shared-security",level:3},{value:"PoW vs Parachain Model",id:"pow-vs-parachain-model",level:3},{value:"Parachain Economies",id:"parachain-economies",level:2},{value:"Coretime",id:"coretime",level:2},{value:"Coretime Expiration",id:"coretime-expiration",level:3},{value:"System Parachains",id:"system-parachains",level:2},{value:"On-demand Parachains",id:"on-demand-parachains",level:2},{value:"Historical Context of On-demand parachains",id:"historical-context-of-on-demand-parachains",level:3},{value:"Parachains vs. On-demand Parachains",id:"parachains-vs-on-demand-parachains",level:3},{value:"Parachains&#39; Use Cases",id:"parachains-use-cases",level:2},{value:"Parachain Host",id:"parachain-host",level:2},{value:"Parachain Hubs",id:"parachain-hubs",level:2},{value:"Resources",id:"resources",level:2}];function d(e){const a={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.A,{message:"[Agile Coretime](./learn-agile-coretime.md) is activated on the network, and parachain slot auctions and crowdloans have been deprecated. For existing parachains, the remainder of the lease is automatically converted to coretime. See more information [here](./learn-agile-coretime.md#implementation). For decentralized, transparent, and regulatory-compliant fundraising within the ecosystem, check out the [Polimec parachain](https://www.polimec.org/)."}),"\n",(0,t.jsx)(a.admonition,{title:"Testing on Rococo",type:"info",children:(0,t.jsxs)(a.p,{children:["For information on how to test coretime functionalities on Rococo, please see the\n",(0,t.jsx)(a.a,{href:"/docs/build-pdk##testing-a-parachains:-rococo-testnet",children:"Rococo Content"})," on the\nparachain development guide."]})}),"\n",(0,t.jsx)(a.h2,{id:"definition-of-a-parachain",children:"Definition of a Parachain"}),"\n",(0,t.jsx)(a.p,{children:"A parachain is an application-specific data structure that is globally coherent and can be validated\nby the validators of the relay chain. They take their name from the concept of parallelized chains\nthat run parallel to the relay chain. Most commonly, a parachain will take the form of a blockchain,\nbut there is no specific need for them to be actual blockchains."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"One parachain",src:n(52608).A+"",width:"1920",height:"800"})}),"\n",(0,t.jsxs)(a.p,{children:["Due to their parallel nature, they can parallelize transaction processing and achieve scalability of\nthe protocol. They ",(0,t.jsx)(a.a,{href:"#shared-security",children:"inherit the security"})," of the entire network and can\ncommunicate with other parachains through the ",(0,t.jsx)(a.a,{href:"/docs/learn-xcm",children:"XCM"})," format."]}),"\n",(0,t.jsxs)(a.p,{children:["Parachains are maintained by a network maintainer known as a ",(0,t.jsx)(a.a,{href:"/docs/learn-collator",children:"collator"}),". The role\nof the collator node is to maintain a full node of the parachain, retain all necessary information\nabout the parachain, and produce new block candidates to pass to the relay chain validators for\nverification and inclusion in the shared state. The incentivization of a collator node is an\nimplementation detail of the parachain. They are not required to be staked on the Relay Chain or own\nthe native token unless stipulated by the parachain implementation."]}),"\n",(0,t.jsx)(a.h3,{id:"state-transitions",children:"State Transitions"}),"\n",(0,t.jsxs)(a.p,{children:["Like other blockchains, parachains are ",(0,t.jsx)(a.strong,{children:"deterministic state machines"}),". Each parachain has a\n",(0,t.jsx)(a.strong,{children:"state"}),", executes a batch of transactions grouped into a block, and achieves a new state. Joe\nPetrowski provided in ",(0,t.jsx)(a.a,{href:"https://polkadot.network/blog/the-path-of-a-parachain-block/",children:"this article"})," a\ngood analogy of a state with a light switch that can be either on or off, which is one of the\nsimplest examples of how a state machine functions. Each parachain has its own state, and the Relay\nChain links all those states into one state, i.e. a state of states. A multi-chain network like\nPolkadot can be viewed like one computer's state with many light switches where a ",(0,t.jsx)(a.strong,{children:"state transition\nfunction"})," is the logic to decide which switches should be toggled. Parachains have their own\ntransition rule, separate economies, governance mechanisms, and users."]}),"\n",(0,t.jsxs)(a.p,{children:["A parachain's state is stored in a ",(0,t.jsx)(a.a,{href:"https://en.wikipedia.org/wiki/Merkle_tree",children:"Merkle tree"}),". Merkle\ntrees have the convenient property that if some values within the tree change, this will be\nreflected in the Merkle root (in this case, the state root). One can verify the change by only\nlooking at the new values and the paths that are affected within the tree."]}),"\n",(0,t.jsxs)(a.p,{children:["The Polkadot Host requires that the state transitions performed on parachains be specified as a\n",(0,t.jsx)(a.a,{href:"/docs/learn-wasm",children:"Wasm"})," executable. Proofs of new state transitions that occur on a parachain must be\nvalidated against the registered state transition function (STF) that is stored on the relay chain\nby the validators before the relay chain acknowledges a state transition has occurred on a\nparachain. The key constraint regarding the logic of a parachain is that it must be verifiable by\nthe relay chain validators. Verification most commonly takes the form of a bundled proof of a state\ntransition known as a Proof-of-Verification (PoV) block, which is submitted for checking to the\nvalidators from one or more parachain collators."]}),"\n",(0,t.jsx)(a.h2,{id:"why-parachains",children:"Why Parachains?"}),"\n",(0,t.jsx)(a.p,{children:"Parachains are a solution to two fundamental problems in blockchains:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"Scalability"}),": Having one blockchain for many purposes makes it difficult to scale as future\nimplementations and upgrades will likely advantage some purposes and disadvantage others.\nConversely, having different blockchains will allow them to implement features without affecting\nother chains."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"Flexibility"}),": It is reasonable to state a blockchain will either be really good at solving one\nproblem or not so good at trying to solve many problems. A blockchain specializing in solving a\nspecific problem has more leverage toward itself and its users. Parachains are purpose-built\nblockchains are highly specialized and can take advantage of each other through cooperation."]}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"parachain-benefits",children:"Parachain Benefits"}),"\n",(0,t.jsx)(a.p,{children:"Parachains contain their own runtime/STF logic and benefit from the shared security and the\ncross-consensus messaging provided by the relay chain. Parachains permit high flexibility and\ncustomization but require more effort to create and maintain over time. A production-grade parachain\nis typically more involved to create due to the complexity involved in blockchain networks'\ntechnical and economic aspects."}),"\n",(0,t.jsx)(a.p,{children:"Parachains grant the creators more space to build the monetary system and other chain aspects from\nthe ground up. They will allow for a more concise and efficient execution of complex logic than a\nsmart contract platform could offer. Parachains also provide more flexibility in the form of\ngovernance and can perform complete upgrades in a less controversial way than the current process of\nhard forks."}),"\n",(0,t.jsx)(a.p,{children:"Some examples of features you can have on a parachain or parathread:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Custom fee structure (for example, pay a flat transaction fee or pay per byte)."}),"\n",(0,t.jsx)(a.li,{children:"Shared security and finalization via the relay chain (Polkadot or Kusama)."}),"\n",(0,t.jsx)(a.li,{children:"Custom monetary policy for the native token and local economy."}),"\n",(0,t.jsx)(a.li,{children:"Treasury to be funded through transitions in your state function."}),"\n",(0,t.jsx)(a.li,{children:"A governance mechanism that could manage a DAO that is responsible for allocating your on-chain\ntreasury."}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"shared-security",children:"Shared Security"}),"\n",(0,t.jsxs)(a.p,{children:["Shared security, sometimes referred as ",(0,t.jsx)(a.em,{children:"pooled security"}),", is one of the unique value propositions\nfor chains considering becoming a ",(0,t.jsx)(a.a,{href:"/docs/learn-parachains",children:"parachain"})," and joining the network. On a\nhigh level, shared security means that all parachains that are connected to the relay chain by\naccessing a core will benefit from the economic security provided by the relay chain\n",(0,t.jsx)(a.a,{href:"/docs/learn-validator",children:"validators"}),"."]}),"\n",(0,t.jsxs)(a.p,{children:["The notion of shared security is different from inter-chain protocols that build on an architecture\nof bridges. For bridge protocols, each chain is considered sovereign and must maintain its own\nvalidator set and economic security. One concern in these protocols is the point of scalability of\nsecurity. For example, one suggestion to scale blockchains is that of ",(0,t.jsx)(a.em,{children:"scale by altcoins,"})," which\nsuggests that transaction volumes will filter down to lower market cap altcoins as the bigger ones\nfill their blocks. A major flaw in this idea is that the lower market cap coins will have less\neconomic security attached and be easier to attack. A real-life example of a 51% attack occurred\nrecently (\n",(0,t.jsx)(a.a,{href:"https://cointelegraph.com/news/ethereum-classic-51-attack-the-reality-of-proof-of-work",children:"Ethereum Classic attack on January 10, 2019"}),"\n), in which an unknown attacker double spent 219_500 ETC (~1.1 million USD). This was followed by\ntwo more 51% attacks on ETC."]}),"\n",(0,t.jsx)(a.p,{children:"Polkadot overcomes security scalability concerns since it gravitates all the economic incentives to\nthe relay chain and allows the parachains to tap into stronger guarantees at genesis. Sovereign\nchains must expend much more effort to grow the value of their coin so that it is sufficiently\nsecure against well-funded attackers."}),"\n",(0,t.jsx)(a.h3,{id:"pow-vs-parachain-model",children:"PoW vs Parachain Model"}),"\n",(0,t.jsx)(a.p,{children:"Let's compare the standard sovereign security model that exists on current proof-of-work (PoW)\nchains to Polkadot's shared security model. Bitcoin, Zcash, and their derivatives, must bootstrap\ntheir independent network of miners and maintain a competitive portion of honest hashing power.\nSince mining is becoming a larger industry that increasingly centralizes key players, it is becoming\nmore real that a single actor may control enough hash power to attack a chain."}),"\n",(0,t.jsxs)(a.p,{children:["This means that smaller chains that cannot maintain a secure amount of hash power on their networks\ncould potentially be attacked by a large mining cartel at the simple whim of redirecting its hash\npower away from Bitcoin and toward a new and less secure chain.\n",(0,t.jsx)(a.a,{href:"https://www.crypto51.app",children:"51% attacks are viable today"})," with attacks having been reported on\nEthereum Classic (see above),\n",(0,t.jsx)(a.a,{href:"https://coincentral.com/verge-suffers-51-attack-hard-forks-in-response/",children:"Verge"}),",\n",(0,t.jsx)(a.a,{href:"https://bitcoingold.org/responding-to-attacks/",children:"Bitcoin Gold"}),", and other cryptocurrencies."]}),"\n",(0,t.jsx)(a.p,{children:"On Polkadot, this disparity between chain security will not be present. When a parachain connects to\nthe relay chain, validators become the securers of that parachain's state transitions. The parachain\nwill only have the overhead of running a few collator nodes to keep the validators informed with the\nlatest state transitions and proofs/witness. Validators will then check these for the parachains to\nwhich they are assigned. In this way, new parachains instantly benefit from the overall security\nprovided by the relay chain even if they have just been launched."}),"\n",(0,t.jsx)(a.h2,{id:"parachain-economies",children:"Parachain Economies"}),"\n",(0,t.jsx)(a.p,{children:"Parachains may have their economies with their native tokens. Schemes such as Proof-of-Stake are\nusually used to select the validator set to handle validation and finalization; parachains will not\nbe required to do either of those things. However, since Polkadot is not overly particular about\nwhat the parachain can implement, it may be the choice of the parachain to implement a staking\ntoken, but it's not generally necessary."}),"\n",(0,t.jsx)(a.p,{children:"Collators may be incentivized through the inflation of a native parachain token. There may be other\nways to incentivize the collator nodes that do not involve inflating the native parachain token."}),"\n",(0,t.jsx)(a.p,{children:"Transaction fees in a native parachain token can also be an implementation choice of parachains.\nPolkadot makes no hard and fast rules for how the parachains decide on the original validity of\ntransactions. For example, a parachain may be implemented so that transactions must pay a minimum\nfee to collators to be valid. The relay chain will enforce this validity. Similarly, a parachain\ncould not include that in their implementation, and the relay chain would still enforce its\nvalidity."}),"\n",(0,t.jsx)(a.p,{children:"Parachains are not required to have their token. If they do, it is up to the parachain (and not the\nrelay chain) to make the economic case for their token."}),"\n",(0,t.jsx)(a.h2,{id:"coretime",children:"Coretime"}),"\n",(0,t.jsx)(a.p,{children:"Parachains can access the relay chain via cores."}),"\n",(0,t.jsx)(a.p,{children:"There are two ways to allocate relay chain cores:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Via Governance only to ",(0,t.jsx)(a.a,{href:"/docs/learn-system-chains",children:"system chains"}),"."]}),"\n",(0,t.jsxs)(a.li,{children:["Via ",(0,t.jsx)(a.a,{href:"/docs/learn-agile-coretime",children:"coretime"})," purchase with DOT (KSM on Kusama) for non-system chains.\nCoretime is used to rent computation time on a relay chain core. This is the only way to access\nPolkadot's shared security and interoperability."]}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"#system-parachains",children:"System parachains"})," are allocated by Polkadot's on-chain\n",(0,t.jsx)(a.a,{href:"/docs/learn-polkadot-opengov",children:"governance"})," and are part of the network's protocol, such as bridges to\nother networks or chains. These typically do not have an economic model and help remove transactions\nfrom the relay chain, allowing for more efficient parachain processing."]}),"\n",(0,t.jsx)(a.p,{children:"Non-system chains can access the relay chain's cores via bulk or on-demand coretime purchased with\nDOT (or KSM on Kusama)."}),"\n",(0,t.jsx)(a.h3,{id:"coretime-expiration",children:"Coretime Expiration"}),"\n",(0,t.jsxs)(a.p,{children:["The DOT (or KSM on Kusama) used to purchase coretime are burned. Before the coretime expires, parachains\ncan renew it at a fixed cost through a bulk coretime purchase. If the parachain does not purchase bulk coretime, it has an option to purchase coretime on-demand (at a variable price per block,\ndepending on the demand and other market conditions) when they need to access the relay chain.\nParachains without coretime to extend time on a relay chain core will be deprecated to the status of\na parathread (i.e., a chain with a registered ",(0,t.jsx)(a.code,{children:"ParaID"})," but without access to a core)."]}),"\n",(0,t.jsx)(a.h2,{id:"system-parachains",children:"System Parachains"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"/docs/learn-system-chains",children:"System parachains"})," are parachains that use execution cores allocated by\nthe network's governance. These chains remove transactions from the relay chain, allowing network\nvalidators to allocate resources to validating parachains. System chains are Polkadot using its\nscaling technology to host itself."]}),"\n",(0,t.jsx)(a.h2,{id:"on-demand-parachains",children:"On-demand Parachains"}),"\n",(0,t.jsx)(a.admonition,{title:"On-demand parachains were previously named parathreads",type:"info",children:(0,t.jsxs)(a.p,{children:["On-demand parachains (previously called parathreads) are parachains that acquire\n",(0,t.jsx)(a.a,{href:"/docs/learn-agile-coretime#on-demand-coretime",children:"on-demand coretime"}),"."]})}),"\n",(0,t.jsxs)(a.p,{children:["On-demand parachains temporarily participate (on a block by block basis) in network security without\nneeding to lease a dedicated relay chain core. This is done through economically sharing the scarce\nresource of a core among several competing resources (parachains). Chains that otherwise would not\nbe able to acquire a full core or do not find it economically sensible to do so, can participate in\nshared security, as the ",(0,t.jsx)(a.a,{href:"/docs/learn-agile-coretime#on-demand-coretime",children:"on-demand coretime"})," offers a\ngraceful off-ramp to parachains that no longer require a dedicated core, but would like to continue\nusing the relay chain."]}),"\n",(0,t.jsx)(a.h3,{id:"historical-context-of-on-demand-parachains",children:"Historical Context of On-demand parachains"}),"\n",(0,t.jsxs)(a.p,{children:["According to ",(0,t.jsx)(a.a,{href:"https://v.douyu.com/show/a4Jj7llO5q47Dk01",children:"this talk"})," in Chengdu back in 2019, the\norigin of the idea for on-demand parachains came from similar notions in the limited resource of\nmemory on early personal computers of the late '80s and '90s. Since computers have a limited amount\nof physical memory, when an application needs more, the computer can create virtual memory by using\n",(0,t.jsx)(a.em,{children:"swap space"})," on a hard disk. Swap space allows the capacity of a computer's memory to expand and for\nmore processes to run concurrently with the trade-off that some processes will take longer to\nprogress."]}),"\n",(0,t.jsx)(a.h3,{id:"parachains-vs-on-demand-parachains",children:"Parachains vs. On-demand Parachains"}),"\n",(0,t.jsx)(a.p,{children:"Parachains and on-demand parachains are very similar from a development perspective. One can imagine\nthat a chain developed with Substrate can at different points in its lifetime assume one of three\nstates:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"an independent chain with secured bridge,"}),"\n",(0,t.jsx)(a.li,{children:"a parachain continuously connected to the relay chain,"}),"\n",(0,t.jsx)(a.li,{children:"or a parachain intermittently connected to the relay chain (i.e. on-demand)"}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"It can switch between these states with relatively minimal effort since the difference is more of an\neconomic distinction than a technological one."}),"\n",(0,t.jsxs)(a.p,{children:["On-demand parachains have the exact same benefits for connecting to the relay chain that a full\nparachain has. Namely, it is able to send messages to other para-objects through\n",(0,t.jsx)(a.a,{href:"/docs/learn-xcm###XCMP",children:"XCMP"})," and it is secured under the full economic security of the relay chain\nvalidator set."]}),"\n",(0,t.jsx)(a.h2,{id:"parachains-use-cases",children:"Parachains' Use Cases"}),"\n",(0,t.jsx)(a.p,{children:"Note that we still have to see the true potential of parachains and what it is listed below are just\na few examples."}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"Encrypted Consortium Chains"}),": These are possibly private chains that do not leak any\ninformation to the public but still can be interacted with trustlessly due to the nature of the\nXCMP protocol."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"High-Frequency Chains"}),": These chains can compute many transactions in a short amount of time by\ntaking certain trade-offs or making optimizations."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"Privacy Chains"}),": These chains do not leak any information to the public through novel\ncryptography."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"Smart Contract Chains"}),": These chains can have additional logic implemented through the\ndeployment of code known as ",(0,t.jsx)(a.em,{children:"smart contracts"}),"."]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"parachain-host",children:"Parachain Host"}),"\n",(0,t.jsxs)(a.p,{children:["A blockchain is a ",(0,t.jsx)(a.a,{href:"https://en.wikipedia.org/wiki/Directed_acyclic_graph",children:"Directed Acyclic Graph"}),"\n(DAG) of state transitions, where every added block can be viewed as the head of the chain or fork\nwith cumulative state. All paths through the DAG terminate at the Genesis Block. A blockchain is a\ntree, as each block can have only one parent."]}),"\n",(0,t.jsx)(a.p,{children:"A blockchain network is made of nodes that have a view of many forks of the chain and must decide\nwhich fork to follow. To construct the parachain host we need to answer two categories of questions\naddressed by two different components:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["What is the state transition function of the blockchain? This is handled by the ",(0,t.jsx)(a.strong,{children:"Runtime"}),", which\ndefines the state transition logic of the chain. The Runtime logic is divided into:"]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"Modules"})," encapsulate particular behavior of the protocol and consist of:","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Storage"}),"\n",(0,t.jsx)(a.li,{children:"Routines are invoked by entry points and other modules upon block initialization or closing.\nRoutines can alter the storage of a module."}),"\n",(0,t.jsx)(a.li,{children:"The entry point defines how new information is introduced to a module and can limit the origin\nfrom which they are called (user, root, parachain)."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"API"})," provides means for the node-side behavior to extract meaningful information from the\nstate of a single fork."]}),"\n"]}),"\n",(0,t.jsx)(a.admonition,{type:"info",children:(0,t.jsxs)(a.p,{children:["The Polkadot Parachain Host Implementers' Guide provides details about\n",(0,t.jsx)(a.a,{href:"https://paritytech.github.io/polkadot/book/runtime/index.html",children:"Runtime Architecture"})," and\n",(0,t.jsx)(a.a,{href:"https://paritytech.github.io/polkadot/book/runtime-api/index.html",children:"Runtime API"}),"."]})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Knowing various forks of the blockchain, what behaviors should a node take? What information\nshould a node extract from the state of which forks, and how should that information be used? This\nis handled by the ",(0,t.jsx)(a.strong,{children:"Node-side behavior"}),", which defines all activities a node undertakes given its\nview of the blockchain. The node-side behavior can be divided into two categories:"]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"Networking behaviors"}),", relate to how information is distributed between nodes but not how the\ninformation is used afterward."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"Core behaviors"}),", relate to internal work that a specific node does. Such behavior cares about\nthat information is ",(0,t.jsx)(a.em,{children:"distributed"})," and ",(0,t.jsx)(a.em,{children:"received"}),", but not how these two are achieved."]}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["These two categories often interact, but they can be heavily abstracted from each other. The\nnode-side behavior is split into various ",(0,t.jsx)(a.strong,{children:"subsystems"}),", which perform a particular category of\nwork. Subsystems can communicate with each other through an\n",(0,t.jsx)(a.a,{href:"https://paritytech.github.io/polkadot/book/node/overseer.html",children:"Overseer"})," that prevents race\nconditions."]}),"\n",(0,t.jsxs)(a.admonition,{type:"info",children:[(0,t.jsxs)(a.p,{children:["The Polkadot Parachain Host Implementers' Guide provides details about\n",(0,t.jsx)(a.a,{href:"https://paritytech.github.io/polkadot/book/node/index.html",children:"node architecture"})," the main\nsubsystems:"]}),(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://paritytech.github.io/polkadot/book/node/collators/index.html",children:"Collator subsystem"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://paritytech.github.io/polkadot/book/node/backing/index.html",children:"Backing subsystem"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://paritytech.github.io/polkadot/book/node/availability/index.html",children:"Availability subsystem"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://paritytech.github.io/polkadot/book/node/approval/index.html",children:"Approval subsystem"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://paritytech.github.io/polkadot/book/node/disputes/index.html",children:"Dispute subsystem"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://paritytech.github.io/polkadot/book/node/utility/index.html",children:"Utility subsystem"})}),"\n"]})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["The Runtime and Node-side behavior are dependent on each other. The Runtime depends on Node-side\nbehavior to author blocks, and to include ",(0,t.jsx)(a.a,{href:"/docs/learn-transactions",children:"extrinsics"})," which trigger the\ncorrect entry points. The Node-side behavior relies on the Runtime APIs to extract information\nnecessary to determine which action to take."]}),"\n",(0,t.jsx)(a.h2,{id:"parachain-hubs",children:"Parachain Hubs"}),"\n",(0,t.jsx)(a.p,{children:"While the relay chain enables crosschain functionality amongst the parachains, it necessitates that\nthere is some latency between the dispatch of a message from one parachain until the destination\nparachain receives the message. In the optimistic scenario, the latency for this message should be\nat least two blocks - one block for the message to be dispatched and one block for the receiving\nparachain to process and produce a block that acts upon the message. However, in some cases, we may\nsee that the latency for messages is higher if many messages are in queue to be processed or if no\nnodes are running both parachain networks that can quickly gossip the message across the networks."}),"\n",(0,t.jsxs)(a.p,{children:["Due to the necessary latency in sending crosschain messages, some parachains plan to become ",(0,t.jsx)(a.em,{children:"hubs"}),"\nfor an entire industry (see the ",(0,t.jsx)(a.a,{href:"/docs/learn-assets",children:"Asset Hub"})," and\n",(0,t.jsx)(a.a,{href:"/docs/learn-system-chains#bridge-hub",children:"Bridge Hub"}),"). For example, many DeFi applications could take\nadvantage of a property known as ",(0,t.jsx)(a.em,{children:"composability"})," which means that functions of one application can\nbe synergistically composed with others to create new applications. One example of this includes\nflash loans, which borrow funds to execute some on-chain logic as long as the loan is repaid at the\nend of the transaction."]}),"\n",(0,t.jsxs)(a.p,{children:["An issue with crosschain latency means that composability property weakens among parachains compared\nto a single blockchain. ",(0,t.jsx)(a.strong,{children:"This implication is common to all sharded blockchain designs, including\nPolkadot, Ethereum, and others."})," The solution to this is the introduction of parachain hubs, which\nmaintain the stronger property of single block composability."]}),"\n",(0,t.jsx)(a.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"https://medium.com/polkadot-network/polkadot-the-parachain-3808040a769a",children:"Polkadot: The Parachain"}),' -\nBlog post by Polkadot co-founder Rob Habermeier who introduced parachains in 2017 as "a simpler\nform of blockchain, which attaches to the security provided by a relay chain rather than providing\nits own. The relay chain provides security to attached parachains, but also provides a guarantee\nof secure message-passing between them."']}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"https://polkadot.network/the-path-of-a-parachain-block/",children:"The Path of a Parachain Block"})," - A\ntechnical walk-through of how parachains interact with the relay chain."]}),"\n"]})]})}function p(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},67141:(e,a,n)=>{n.d(a,{A:()=>o});var t=n(96540),i=n(74848);const o=function(e){var a,n=e.message,o=(0,t.useState)(!0),s=o[0],r=o[1];return(0,i.jsx)(i.Fragment,{children:s&&(0,i.jsxs)("div",{className:"message-box",children:[(0,i.jsx)("button",{className:"close-button",onClick:function(){r(!1)},children:"\u2716 "}),(0,i.jsx)("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(a=n,a.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})]})})}},52608:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/one-parachain-f8e0673144a718bd67834cdd69894ca2.png"},28453:(e,a,n)=>{n.d(a,{R:()=>s,x:()=>r});var t=n(96540);const i={},o=t.createContext(i);function s(e){const a=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:a},e.children)}}}]);