"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8914],{99771:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var o=t(74848),s=t(28453);const a={id:"learn-proxies",title:"Proxy Accounts",sidebar_label:"Proxy Accounts",description:"Proxy Accounts on Polkadot.",keywords:["proxy","proxies","proxy accounts","proxy types","staking proxy"],slug:"../learn-proxies"},i=void 0,r={id:"learn/learn-proxies",title:"Proxy Accounts",description:"Proxy Accounts on Polkadot.",source:"@site/../docs/learn/learn-proxies.md",sourceDirName:"learn",slug:"/learn-proxies",permalink:"/docs/learn-proxies",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-proxies.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1727943421e3,frontMatter:{id:"learn-proxies",title:"Proxy Accounts",sidebar_label:"Proxy Accounts",description:"Proxy Accounts on Polkadot.",keywords:["proxy","proxies","proxy accounts","proxy types","staking proxy"],slug:"../learn-proxies"},sidebar:"docs",previous:{title:"Multi-Signature Accounts",permalink:"/docs/learn-account-multisig"},next:{title:"Pure Proxy Accounts",permalink:"/docs/learn-proxies-pure"}},c={},l=[{value:"Proxy Types",id:"proxy-types",level:2},{value:"Proxy Deposits",id:"proxy-deposits",level:2},{value:"Time-delayed Proxy",id:"time-delayed-proxy",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Proxies are helpful because they let you delegate efficiently and add a layer of security. Rather\nthan using funds in a single account, smaller accounts with unique roles can complete tasks on\nbehalf of the main stash account. Proxies can be ",(0,o.jsx)(n.em,{children:"hotter"})," than the initial account, which can be\nkept cold, but the ",(0,o.jsx)(n.em,{children:"weight"})," of the tokens in the colder account can be used by the hotter accounts.\nThis increases the security of your accounts by minimizing the number of transactions the cold\naccount has to make. This also drives attention away from the stash account, although it is possible\nto determine the relationship between the proxy and the proxied account."]}),"\n",(0,o.jsx)(n.p,{children:"From the security perspective, we can imagine proxies as bodyguards of a VIP, loyal and ready to\nrisk their lives to ensure the VIP's protection. But proxies are also useful in other contexts such\nas efficient account management at the corporate level. They also provide an elegant solution to\nchange signatories within multi-signature accounts, and they can be used within proxy calls and\nnested proxy calls. In this page we will explore all these interesting use cases of proxies within\nthe Polkadot ecosystem."}),"\n",(0,o.jsx)(n.p,{children:"Shown below is an example of how you might use these accounts. Imagine you have one stash account as\nyour primary token-holding account and don't want to access it very often, but you want to\nparticipate in staking to earn staking rewards. You could set one of your existing accounts as a\nstaking proxy for that stash account, and use your staking proxy to sign all staking-related\ntransactions."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"proxies",src:t(60546).A+"",width:"1920",height:"800"})}),"\n",(0,o.jsxs)(n.p,{children:["Having a staking proxy will make the stash account isolated within the staking context. In other\nwords, the account assigned as a staking proxy can participate in staking on behalf of that stash.\nWithout the proxy you will need to sign all the staking-related transactions with the stash. If the\nproxy is compromised, it doesn't have access to transfer-related transactions, so the stash account\ncould just set a new proxy to replace it. You can also monitor proxies by\n",(0,o.jsx)(n.a,{href:"#time-delayed-proxy",children:"setting a time-delay"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Creating multiple proxy accounts that act for a single account, lets you come up with more granular\nsecurity practices around how you protect private keys while still being able to actively\nparticipate in the network."}),"\n",(0,o.jsx)(n.h2,{id:"proxy-types",children:"Proxy Types"}),"\n",(0,o.jsx)(n.p,{children:"When a proxy account makes a transaction, Polkadot filters the desired transaction to ensure that\nthe proxy account has the appropriate permission to make that transaction on behalf of the proxied\naccount. For example, staking proxies have permission to do only staking-related transactions."}),"\n",(0,o.jsx)(n.p,{children:"When you set a proxy, you must choose a type of proxy for the relationship with the proxied account."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Any"}),": allow any transaction, including balance transfers. In most cases, this should be avoided\nas the proxy account is used more frequently than the cold account and is therefore less secure."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Non-transfer"}),": allow any type of transaction except\n",(0,o.jsx)(n.a,{href:"/docs/learn-transactions#balance-transfers",children:"balance transfers"})," (including\n",(0,o.jsx)(n.a,{href:"/docs/learn-transactions#vested-transfers",children:"vested"})," transfers). Hence, this proxy does not have\npermission to access calls in the Balances and XCM pallet."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Governance"}),": allow to make transactions related to governance."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Nomination pool"}),": allow transactions pertaining to\n",(0,o.jsx)(n.a,{href:"/docs/learn-nomination-pools",children:"Nomination Pools"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Staking"}),": allow all staking-related transactions. The stash account is meant to stay in cold\nstorage, while the staking proxy account makes day-to-day transactions like setting session keys\nor deciding which validators to nominate. Visit the\n",(0,o.jsx)(n.a,{href:"/docs/learn-staking-advanced#staking-proxies",children:"Advanced Staking Concepts page"})," for more detailed\ninformation about staking proxies."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Identity Judgement"}),": allow registrars to make judgments on an account's identity. If you are\nunfamiliar with judgment and identities on chain, please refer to\n",(0,o.jsx)(n.a,{href:"/docs/learn-identity#judgements",children:"this page"}),". This proxy can only access ",(0,o.jsx)(n.code,{children:"provide_judgement"})," call\nfrom the Identity pallet along with the calls from the Utility pallet."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Cancel"}),": allow to reject and remove any time-delay proxy announcements. This proxy can only\naccess ",(0,o.jsx)(n.code,{children:"reject_announcement"})," call from the Proxy pallet."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"proxy-deposits",children:"Proxy Deposits"}),"\n",(0,o.jsx)(n.p,{children:"Proxies require deposits in the native currency to be created. The deposit is required because\nadding a proxy requires some storage space on-chain, which must be replicated across every peer in\nthe network. Due to the costly nature of this, these functions could open up the network to a\nDenial-of-Service attack. To defend against this attack, proxies require a deposit to be reserved\nwhile the storage space is consumed over the lifetime of the proxy. When the proxy is removed, so is\nthe storage space, and therefore the deposit is returned."}),"\n",(0,o.jsxs)(n.p,{children:["The required deposit amount for ",(0,o.jsx)(n.code,{children:"n"})," proxies is equal to:"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ProxyDepositBase"})," + ",(0,o.jsx)(n.code,{children:"ProxyDepositFactor"})," * ",(0,o.jsx)(n.code,{children:"n"})]}),"\n",(0,o.jsxs)(n.p,{children:["where the ",(0,o.jsx)(n.a,{href:"/docs/chain-state-values#proxy-deposits",children:(0,o.jsx)(n.code,{children:"ProxyDepositBase"})})," is the required\namount to be reserved for an account to have a proxy list (creates one new item in storage). For\nevery proxy the account has, an additional amount defined by the\n",(0,o.jsx)(n.a,{href:"/docs/chain-state-values#proxy-deposits",children:(0,o.jsx)(n.code,{children:"ProxyDepositFactor"})})," is reserved as well (appends\n33 bytes to storage location)."]}),"\n",(0,o.jsx)(n.h2,{id:"time-delayed-proxy",children:"Time-delayed Proxy"}),"\n",(0,o.jsx)(n.p,{children:"We can add a layer of security to proxies by giving them a delay time. The delay will be quantified\nin blocks. Polkadot has approximately 6 seconds of block time. A delay value of 10 will mean ten\nblocks, which equals about one minute delay."}),"\n",(0,o.jsx)(n.p,{children:"The proxy will announce its intended action and will wait for the number of blocks defined in the\ndelay time before executing it. Within this time window, the intended action may be canceled by\naccounts that control the proxy."}),"\n",(0,o.jsxs)(n.p,{children:["Announcing ",(0,o.jsx)(n.code,{children:"n"})," calls using a time-delayed proxy also requires a deposit of the form:"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"announcementDepositBase"})," + ",(0,o.jsx)(n.code,{children:"announcementDepositFactor"})," * ",(0,o.jsx)(n.code,{children:"n"})]}),"\n",(0,o.jsxs)(n.p,{children:["where the ",(0,o.jsx)(n.a,{href:"/docs/chain-state-values#proxy-deposits",children:(0,o.jsx)(n.code,{children:"announcementDepositBase"})})," is the\nrequired amount to be reserved for an account to announce a proxy call. For every proxy call the\naccount has, an additional amount defined by the\n",(0,o.jsx)(n.a,{href:"/docs/chain-state-values#proxy-deposits",children:(0,o.jsx)(n.code,{children:"announcementDepositFactor"})})," is reserved as well."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.admonition,{title:"Polkadot-JS Guides",type:"info",children:(0,o.jsxs)(n.p,{children:["If you are an advanced user, see the\n",(0,o.jsx)(n.a,{href:"/docs/learn-guides-accounts-proxy",children:"Polkadot-JS guides about proxy accounts"}),". You can find\ninformation about creating and removing proxies, and more."]})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},60546:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/stash-vs-stash-and-staking-proxy-2104e1a23d5c29821cec15fb9b67eba5.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var o=t(96540);const s={},a=o.createContext(s);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);