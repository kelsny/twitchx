(this.webpackJsonpdocs=this.webpackJsonpdocs||[]).push([[0],{14:function(e){e.exports=JSON.parse('{"meta":{"generator":"1.0.0","format":20,"date":1623719541680},"classes":[{"name":"Base","description":"Base class for any entity returned by the Twitch API.","abstract":true,"construct":{"name":"Base","description":"Constructs a new base prototype.","params":[{"name":"client","description":"Client that instantiated this entity.","type":[[["Client"]]]}]},"meta":{"line":8,"file":"Base.js","path":"dist/base"}},{"name":"Cache","description":"Implements some sort of LFU cache with a few utility methods.\\nBuilt specifically for entity managers.","construct":{"name":"Cache","description":"Creates a new cache.","params":[{"name":"options","description":"Options to configure the caching behaviour.","type":[]}]},"methods":[{"name":"clear","description":"Clears the entire cache.","returns":[[["void"]]],"meta":{"line":27,"file":"Cache.js","path":"dist/base"}},{"name":"get","description":"Retrieves a value from the cache.","params":[{"name":"key","description":"Key to retrieve.","type":[[["string"]]]}],"returns":[[["Value"]],[["undefined"]]],"meta":{"line":41,"file":"Cache.js","path":"dist/base"}},{"name":"set","description":"Sets or updates a key to a new value.","params":[{"name":"key","description":"Key to set or update.","type":[[["string"]]]},{"name":"value","description":"New value to store.","type":[[["Value"]]]}],"returns":[[["this"]]],"meta":{"line":63,"file":"Cache.js","path":"dist/base"}},{"name":"delete","description":"Deletes a key from the cache.","params":[{"name":"key","description":"Key to delete","type":[]}],"returns":[[["Value"]]],"meta":{"line":85,"file":"Cache.js","path":"dist/base"}},{"name":"has","description":"Returns true if the cache holds the key.","params":[{"name":"key","description":"Key to check.","type":[[["string"]]]}],"returns":[[["boolean"]]],"meta":{"line":100,"file":"Cache.js","path":"dist/base"}},{"name":"find","description":"Performs a search operation on the cache\'s values.","params":[{"name":"predicate","description":"Callback function to execute.","type":[[["function"]]]},{"name":"thisArg","description":"Optional `this` context for the callback.","type":[[["any"]],[["undefined"]]]}],"returns":[[["Value"]],[["undefined"]]],"meta":{"line":109,"file":"Cache.js","path":"dist/base"}}],"meta":{"line":12,"file":"Cache.js","path":"dist/base"}},{"name":"Client","description":"The main client to interact with the Twitch API.\\nSupports app and user access tokens and is configurable.\\nDelegates API endpoints to different managers.","extends":[[["EventEmitter"]]],"construct":{"name":"Client","description":"Creates a new client to interact with the Twitch API.","params":[{"name":"options","description":"Options for the client.","type":[]}]},"props":[{"name":"token","description":"Current token being used.","readonly":true,"type":[[["string"]]],"meta":{"line":240,"file":"Client.js","path":"dist/base"}},{"name":"type","description":"Authentication type; either `\\"app\\"` or `\\"user\\"`.","readonly":true,"type":[[["string"]]],"meta":{"line":248,"file":"Client.js","path":"dist/base"}}],"methods":[{"name":"login","description":"Logs in the client and retrieves an app access token.","examples":["```js\\nconst token = await client.login();\\n```"],"returns":{"types":[[["Promise","<("],["string","|"],["object",")>"]]],"description":"The new access token or OAuth details object."},"meta":{"line":55,"file":"Client.js","path":"dist/base"}},{"name":"destroy","description":"Destroys the client and revokes its access token.\\n\\nTODO: Add a destroy method on managers as well and call it here.","returns":{"types":[[["Promise","<"],["void",">"]]],"description":"Nothing."},"meta":{"line":151,"file":"Client.js","path":"dist/base"}},{"name":"setInterval","description":"Sets an interval to be managed by the client.","meta":{"line":254,"file":"Client.js","path":"dist/base"}},{"name":"setTimeout","description":"Sets a timeout to be managed by the client.","meta":{"line":262,"file":"Client.js","path":"dist/base"}},{"name":"clearInterval","description":"Clears an interval managed by the client.","meta":{"line":270,"file":"Client.js","path":"dist/base"}},{"name":"clearTimeout","description":"Clears a timeout managed by the client.","meta":{"line":278,"file":"Client.js","path":"dist/base"}},{"name":"on","description":"Adds an event listener to the client.","params":[{"name":"event","description":"Event to listen to.","type":[]},{"name":"listener","description":"Callback for the event.","type":[]}],"returns":{"types":[[["Client"]]],"description":"The client instance."},"meta":{"line":289,"file":"Client.js","path":"dist/base"}},{"name":"once","description":"Adds an event listener to the client, but the listener gets removed as soon as an event is received.","params":[{"name":"event","description":"Event to listen to.","type":[]},{"name":"listener","description":"Callback for the event.","type":[]}],"returns":{"types":[[["Client"]]],"description":"The client instance."},"meta":{"line":298,"file":"Client.js","path":"dist/base"}}],"meta":{"line":17,"file":"Client.js","path":"dist/base"}},{"name":"Manager","description":"Manager superclass with a cache and method to fetch entities.","abstract":true,"construct":{"name":"Manager","description":"Creates a new manager.","params":[{"name":"client","description":"Client that instantiated this manager.","type":[]},{"name":"options","description":"Options for the cache,","type":[]}]},"meta":{"line":11,"file":"Manager.js","path":"dist/base"}},{"name":"Emote","description":"Represents a global emote on Twitch.","extends":[[["Base"]]],"construct":{"name":"Emote","description":"Constructs an Emote from the client and raw data.","params":[{"name":"client","description":"The client this emote belongs to","type":[[["Client"]]]},{"name":"data","description":"The raw data provided by the api","type":[[["EmoteData"]]]}]},"props":[{"name":"id","description":"The emote\'s ID","type":[[["string"]]],"meta":{"line":29,"file":"Emote.js","path":"dist/classes/emotes"}},{"name":"name","description":"The emote\'s name","type":[[["string"]]],"meta":{"line":36,"file":"Emote.js","path":"dist/classes/emotes"}},{"name":"images","description":"The emote\'s images","type":[[["Array","<"],["string",">"]]],"meta":{"line":43,"file":"Emote.js","path":"dist/classes/emotes"}}],"methods":[{"name":"update","description":"Updates this emote\'s data.\\nShould not be called because emotes don\'t update often.\\nOnly here to satify EmoteManager.","returns":{"types":[],"description":"A promise that resolves to undefined on success"},"meta":{"line":52,"file":"Emote.js","path":"dist/classes/emotes"}}],"meta":{"line":13,"file":"Emote.js","path":"dist/classes/emotes"}},{"name":"EmoteManager","description":"Manages global emotes.","extends":[[["Manager","<"],["Emote",">"]]],"construct":{"name":"EmoteManager","description":"Constructs an EmoteManager for the client.","params":[{"name":"client","description":"The client that this manager belongs to","type":[[["Client"]]]}]},"methods":[{"name":"get","description":"Returns the emote with the given ID in cache or undefined.","params":[{"name":"id","description":"the ID of the emote to get","type":[]}],"returns":{"types":[[["Emote"]],[["undefined"]]],"description":"the emote with the given ID"},"meta":{"line":40,"file":"EmoteManager.js","path":"dist/classes/emotes"}}],"meta":{"line":14,"file":"EmoteManager.js","path":"dist/classes/emotes"}},{"name":"User","description":"Represents a user on twitch.","extends":[[["Base"]]],"construct":{"name":"User","description":"Creates a user from the given client and","params":[{"name":"client","description":"The Client instance that this user belongs to","type":[]},{"name":"data","description":"The raw data provided by the Twitch API","type":[]}]},"props":[{"name":"id","description":"The user\'s ID.","type":[[["string"]]],"meta":{"line":33,"file":"User.js","path":"dist/classes/users"}},{"name":"login","description":"The user\'s login name (username but all lowercase).","type":[[["string"]]],"meta":{"line":40,"file":"User.js","path":"dist/classes/users"}},{"name":"displayName","description":"The user\'s display name.","type":[[["string"]]],"meta":{"line":47,"file":"User.js","path":"dist/classes/users"}},{"name":"type","description":"The user\'s type (staff status).","type":[[["string"]]],"meta":{"line":54,"file":"User.js","path":"dist/classes/users"}},{"name":"broadcasterType","description":"The user\'s broadcaster type (partner program).","type":[[["string"]]],"meta":{"line":61,"file":"User.js","path":"dist/classes/users"}},{"name":"viewCount","description":"Total number of views on this user\'s channel.","type":[[["number"]]],"meta":{"line":68,"file":"User.js","path":"dist/classes/users"}},{"name":"email","description":"Returns the email of the user (scope `user:read:email` is required).","type":[[["string"]],[["undefined"]]],"meta":{"line":75,"file":"User.js","path":"dist/classes/users"}},{"name":"description","description":"The user\'s description.","type":[[["string"]]],"meta":{"line":82,"file":"User.js","path":"dist/classes/users"}},{"name":"createdAt","description":"The Date when the user was created.","type":[[["Date"]]],"meta":{"line":89,"file":"User.js","path":"dist/classes/users"}},{"name":"createdTimestamp","description":"The timestamp of the user being created.\\nIdentical to calling `getTime()` on `createdAt`.","type":[[["number"]]],"meta":{"line":97,"file":"User.js","path":"dist/classes/users"}}],"methods":[{"name":"avatarURL","description":"Returns the user\'s avatar URL.\\nIf `options.offline` is true, the offline avatar will be returned.","params":[{"name":"options","description":"options for the avatar URL","type":[[["AvatarURLOptions"]]]}],"returns":{"types":[[["string"]]],"description":"the user\'s avatar URL"},"meta":{"line":110,"file":"User.js","path":"dist/classes/users"}},{"name":"update","description":"Updates this user object to hold the newest data.","returns":{"types":[],"description":"a promise that should resolve to undefined on success"},"meta":{"line":117,"file":"User.js","path":"dist/classes/users"}},{"name":"block","description":"Blocks the user. Requires `user:manage:blocked_users` scope on the client.","params":[{"name":"options","description":"the options for blocking the user","type":[]}],"returns":{"types":[],"description":"A promise that resolves to a boolean, representing the success of the operation"},"meta":{"line":155,"file":"User.js","path":"dist/classes/users"}},{"name":"unblock","description":"Unblocks the given user. Requires `user:manage:blocked_users` scope on the client.","returns":{"types":[[["Promise","<"],["boolean",">"]]],"description":"a promise that is resolved to a boolean representing the success of the operation"},"meta":{"line":184,"file":"User.js","path":"dist/classes/users"}},{"name":"fetchBlocks","description":"Returns an array of users that were blocked by this user","params":[{"name":"param0","description":"pagination options","type":[[["BlockFetchOptions"]]]}],"returns":{"types":[[["Promise","<"],["Array","<"],["User",">>"]]],"description":"an array of users that this user has blocked"},"meta":{"line":214,"file":"User.js","path":"dist/classes/users"}}],"meta":{"line":15,"file":"User.js","path":"dist/classes/users"}},{"name":"UserManager","description":"Manages the client\'s users.","extends":[[["Manager","<"],["User",">"]]],"construct":{"name":"UserManager","description":"Constructs a UserManager with the given client.","params":[{"name":"client","description":"The client that this UserManager belongs to","type":[]}]},"meta":{"line":14,"file":"UserManager.js","path":"dist/classes/users"}}],"interfaces":[],"typedefs":[{"name":"AvatarURLOptions","type":[[["object"]]],"props":[{"name":"offline","description":"fetch offline avatar?","type":[[["boolean"]]]}],"meta":{"line":100,"file":"User.js","path":"dist/classes/users"}},{"name":"BlockFetchOptions","type":[[["object"]]],"props":[{"name":"first","type":[[["number"]]]},{"name":"after","type":[[["string"]]]}],"meta":{"line":204,"file":"User.js","path":"dist/classes/users"}},{"name":"ClientUpdateOptions","type":[[["object"]]],"props":[{"name":"users","type":[[["boolean"]],[["number"]],[["undefined"]]]},{"name":"channels","type":[[["boolean"]],[["number"]],[["undefined"]]]},{"name":"emotes","type":[[["boolean"]],[["number"]],[["undefined"]]]},{"name":"channelEmotes","type":[[["boolean"]],[["number"]],[["undefined"]]]}],"meta":{"line":3,"file":"client.js","path":"dist/types/base"}},{"name":"ClientTTLOptions","type":[[["object"]]],"props":[{"name":"users","type":[[["number"]],[["undefined"]]]},{"name":"channels","type":[[["number"]],[["undefined"]]]},{"name":"emotes","type":[[["number"]],[["undefined"]]]},{"name":"channelEmotes","type":[[["number"]],[["undefined"]]]}],"meta":{"line":10,"file":"client.js","path":"dist/types/base"}},{"name":"ClientOptions","type":[[["object"]]],"props":[{"name":"clientId","type":[[["string"]]]},{"name":"clientSecret","type":[[["string"]]]},{"name":"redirectUri","type":[[["string"]],[["undefined"]]]},{"name":"forceVerify","type":[[["string"]],[["undefined"]]]},{"name":"state","type":[[["string"]],[["undefined"]]]},{"name":"scope","type":[[["Array","<"],["string",">"]],[["undefined"]]]},{"name":"update","type":[[["ClientUpdateOptions"]]]},{"name":"ttl","type":[[["ClientTTLOptions"]]]},{"name":"debug","type":[[["boolean"]],[["undefined"]]]},{"name":"suppressRejections","type":[[["boolean"]],[["undefined"]]]}],"meta":{"line":17,"file":"client.js","path":"dist/types/base"}},{"name":"ChannelData","type":[[["object"]]],"props":[{"name":"broadcaster_id","type":[[["string"]]]},{"name":"broadcaster_name","type":[[["string"]]]},{"name":"game_name","type":[[["string"]]]},{"name":"game_id","type":[[["string"]]]},{"name":"broadcaster_language","type":[[["string"]]]},{"name":"title","type":[[["string"]]]},{"name":"delay","type":[[["number"]]]}],"meta":{"line":3,"file":"channel.js","path":"dist/types/classes"}},{"name":"ChannelEmoteData","type":[[["object"]]],"props":[{"name":"id","type":[[["string"]]]},{"name":"name","type":[[["string"]]]},{"name":"images","type":[[["Object"]]]},{"name":"tier","type":[[["string"]]]},{"name":"emote_type","type":[[["string"]]]},{"name":"emote_set_id","type":[[["string"]]]}],"meta":{"line":3,"file":"channelEmote.js","path":"dist/types/classes"}},{"name":"EmoteDataImages","type":[[["object"]]],"props":[{"name":"url_1x","type":[[["string"]]]},{"name":"url_2x","type":[[["string"]]]},{"name":"url_4x","type":[[["string"]]]}],"meta":{"line":3,"file":"emote.js","path":"dist/types/classes"}},{"name":"EmoteData","type":[[["object"]]],"props":[{"name":"id","type":[[["string"]]]},{"name":"name","type":[[["string"]]]},{"name":"images","type":[[["EmoteDataImages"]]]}],"meta":{"line":9,"file":"emote.js","path":"dist/types/classes"}},{"name":"UserData","type":[[["object"]]],"props":[{"name":"id","type":[[["string"]]]},{"name":"login","type":[[["string"]]]},{"name":"display_name","type":[[["string"]]]},{"name":"type","type":[[["string"]]]},{"name":"broadcaster_type","type":[[["string"]]]},{"name":"description","type":[[["string"]]]},{"name":"profile_image_url","type":[[["string"]]]},{"name":"offline_image_url","type":[[["string"]]]},{"name":"view_count","type":[[["number"]]]},{"name":"email","type":[[["string"]],[["undefined"]]]},{"name":"created_at","type":[[["string"]]]}],"meta":{"line":3,"file":"user.js","path":"dist/types/classes"}},{"name":"PubSubOptions","type":[[["object"]]],"props":[{"name":"suppressRejections","description":"Suppresses any rejections coming from the PubSub instance.","type":[[["boolean"]],[["undefined"]]]},{"name":"ws","description":"Options for the websocket.","type":[[["WebSocketClientOptions"]],[["undefined"]]]}],"meta":{"line":3,"file":"index.js","path":"dist/types/pubsub"}}],"externals":[{"name":"WebSocketClientOptions","description":"Options for the websocket.","see":["https://github.com/DefinitelyTyped/DefinitelyTyped/blob/69e29e847155bd4d845497319116281cb5a384a3/types/ws/index.d.ts#L171-L187"],"meta":{"line":8,"file":"index.js","path":"dist/types/pubsub"}}]}')},257:function(e,t,s){},258:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),i=s(24),r=s.n(i),o=s(8),c=s(2),l=s(27),p=s(13),m=s.n(p),d=s(5),h=s(14),u=s(6),g=s(0);function y(e){var t=e.name,s=e.pages,a=e.active,i=Object(n.useState)(!0),r=Object(u.a)(i,2),c=r[0],l=r[1];return Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"flex items-center gap-2",children:[Object(g.jsx)("button",{className:"text-sm text-gray-700 dark:text-gray-100 transform ".concat(c?"":"-rotate-90"," outline-none focus:outline-none"),onClick:function(){return l(!c)},children:"\u25bc"}),Object(g.jsx)("h2",{className:"text-lightPurple select-none",children:t})]}),Object(g.jsx)("ul",{className:"pl-1 ".concat(c?"":"h-0 overflow-hidden"),children:s.map((function(e){return Object(g.jsx)("li",{className:"pl-5 flex border-l-2 ".concat(a==="".concat(t.toLowerCase(),"/").concat(e.slug)?"border-lightPurple":"dark:border-gray-600"),children:Object(g.jsx)(o.b,{className:"block flex-1 text-sm ".concat(a==="".concat(t.toLowerCase(),"/").concat(e.slug)?"text-gray-800 dark:text-gray-400":"text-gray-700 dark:text-gray-500"),to:{pathname:"/docs/".concat(t.toLowerCase(),"/").concat(e.slug)},children:e.name})},"".concat(t.toLowerCase(),"/").concat(e.slug))}))})]})}function f(e){var t=e.active;return Object(g.jsx)("aside",{className:"px-4 lg:px-0 py-3 w-56 flex-shrink-0 border-r border-gray-100 dark:border-gray-700 overflow-y-scroll",style:{maxHeight:"calc(100vh - 3rem)"},children:Object(g.jsxs)("div",{children:[d.categories.map((function(e){var s=e.name,n=e.pages;return Object(g.jsx)(y,{name:s,pages:n,active:t},s)})),Object(g.jsx)(y,{name:"Classes",pages:h.classes.map((function(e){var t=e.name;return{name:t,slug:t.toLowerCase(),content:""}})),active:t}),Object(g.jsx)(y,{name:"Typedefs",pages:h.typedefs.map((function(e){var t=e.name;return{name:t,slug:t.toLowerCase(),content:""}})),active:t})]})})}function b(){Object(n.useEffect)((function(){m.a.configure({languages:["typescript"]}),document.querySelectorAll("pre code").forEach((function(e){m.a.highlightElement(e)}))}),[]);var e=Object(c.g)().route;if(!e)return Object(g.jsx)(c.a,{to:"/docs/general/welcome"});console.log(e);var t=d.categories.flatMap((function(e){var t=e.name;return e.pages.map((function(e){return Object(l.a)({category:t},e)}))}));return Object(g.jsxs)("div",{className:"flex flex-1",children:[Object(g.jsx)(f,{active:e}),Object(g.jsx)("main",{className:"docs flex-1 px-4 lg:pr-0 py-3 dark:text-white",children:d.categories.some((function(t){var s=t.name;return e.startsWith(s.toLowerCase())}))&&t.map((function(e){return{category:e.category,slug:e.slug}})).some((function(t){var s=t.category,n=t.slug;return e.startsWith("".concat(s.toLowerCase(),"/").concat(n))}))?Object(g.jsx)("div",{className:"markdown",dangerouslySetInnerHTML:{__html:t.find((function(t){var s=t.category,n=t.slug;return e.startsWith("".concat(s.toLowerCase(),"/").concat(n))})).content}}):Object(g.jsx)("div",{className:"markdown"})})]})}var j=s(26),x=s.n(j);var v=function(e){var t=Object(n.useState)(window.innerWidth),s=Object(u.a)(t,2),a=s[0],i=s[1];return Object(n.useEffect)((function(){var t=x()((function(){return i(window.innerWidth)}),e);return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[e]),a};function w(){var e=v(50),t=Object(n.useState)("dark"===localStorage.getItem("twitchx-theme")),s=Object(u.a)(t,2),a=s[0],i=s[1];return Object(n.useEffect)((function(){localStorage.setItem("twitchx-theme",a?"dark":"light")}),[a]),Object(g.jsx)("div",{className:"h-12 px-4 py-2 grid place-items-center shadow dark:bg-purple",children:Object(g.jsxs)("header",{className:"flex items-center justify-between w-full max-w-4xl",children:[Object(g.jsxs)("nav",{className:"flex items-center gap-4 sm:gap-8",children:[e>440?Object(g.jsx)("h1",{className:"text-xl sm:text-2xl text-purple select-none cursor-pointer dark:text-white",role:"link",onClick:function(){return window.location.hash="#/"},children:"twitchx"}):null,Object(g.jsxs)("div",{className:"flex items-center gap-4 sm:-mb-0.5 mr-4",children:[Object(g.jsx)("a",{className:"cursor-pointer text-gray-700 dark:text-gray-50",href:"#/docs",children:e>640?"documentation":Object(g.jsx)("svg",{className:"fill-current text-gray-400 hover:text-gray-500 dark:text-gray-50 h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 26 26",children:Object(g.jsx)("path",{d:"M 12.34375 1.09375 C 12.0625 1.109375 11.8125 1.21875 11.625 1.4375 L 1.28125 12.96875 C 1.066406 13.214844 0.535156 14.113281 0.28125 15.28125 C 0.105469 15.773438 0 16.34375 0 17 C 0 20.101563 2.59375 21.34375 2.59375 21.34375 C 2.632813 21.367188 2.675781 21.386719 2.71875 21.40625 L 14.71875 24.96875 C 15.109375 25.082031 15.53125 24.945313 15.78125 24.625 L 25.5625 12.84375 C 25.804688 12.542969 25.855469 12.128906 25.6875 11.78125 C 25.6875 11.78125 25.308594 10.90625 25.71875 9.90625 C 25.855469 9.574219 25.804688 9.195313 25.585938 8.910156 C 25.367188 8.625 25.011719 8.480469 24.65625 8.53125 C 24.304688 8.585938 24.003906 8.824219 23.875 9.15625 C 23.363281 10.410156 23.511719 11.363281 23.6875 11.96875 L 14.65625 22.84375 L 3.34375 19.5 L 3.28125 19.46875 C 3.09375 19.398438 2 18.90625 2 17 C 2 16.25 2.160156 15.851563 2.3125 15.625 C 2.464844 15.398438 2.625 15.289063 2.84375 15.21875 C 3.0625 15.148438 3.3125 15.148438 3.5 15.15625 L 3.53125 15.15625 L 13.96875 18.15625 C 14.058594 18.179688 14.160156 18.1875 14.25 18.1875 C 14.5625 18.1875 14.863281 18.027344 15.0625 17.78125 L 25.65625 5.5625 C 25.886719 5.28125 25.964844 4.90625 25.84375 4.5625 C 25.726563 4.214844 25.417969 3.953125 25.0625 3.875 L 12.625 1.09375 C 12.53125 1.074219 12.4375 1.089844 12.34375 1.09375 Z M 12.0625 5.0625 C 12.171875 5.058594 12.273438 5.070313 12.375 5.09375 L 19.8125 6.90625 C 20.21875 7.003906 20.375 7.269531 20.15625 7.53125 L 19.34375 8.5 C 19.121094 8.761719 18.597656 8.878906 18.1875 8.78125 L 10.78125 6.96875 C 10.371094 6.871094 10.21875 6.570313 10.4375 6.3125 L 11.21875 5.375 C 11.382813 5.179688 11.734375 5.070313 12.0625 5.0625 Z"})})}),Object(g.jsx)("a",{className:"cursor-pointer text-gray-700 dark:text-gray-50",href:"https://github.com/cursorsdottsx/twitch",children:e>640?"github":Object(g.jsx)("svg",{className:"fill-current text-gray-400 hover:text-gray-500 dark:text-gray-50 h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Object(g.jsx)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})})]})]}),Object(g.jsxs)("nav",{className:"flex items-center gap-4",children:[Object(g.jsx)("button",{className:"outline-none focus:outline-none",onClick:function(){var e;null===(e=document.querySelector("html"))||void 0===e||e.classList.toggle("dark"),i(!a)},children:a?Object(g.jsx)("svg",{width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",className:"fill-current text-gray-100 hover:text-white h-6 w-6","aria-hidden":"true",children:Object(g.jsx)("g",{fill:"none",children:Object(g.jsx)("path",{d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}):Object(g.jsx)("svg",{width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",className:"fill-current text-gray-300 hover:text-gray-400 h-6 w-6","aria-hidden":"true",children:Object(g.jsx)("g",{fill:"none",children:Object(g.jsx)("path",{d:"M20.354 15.354A9 9 0 0 1 8.646 3.646A9.003 9.003 0 0 0 12 21a9.003 9.003 0 0 0 8.354-5.646z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})}),Object(g.jsxs)("div",{className:"relative flex items-center",children:[Object(g.jsx)("svg",{preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",className:"absolute left-1.5 h-5 w-5 text-gray-300 dark:text-gray-200",children:Object(g.jsx)("g",{fill:"none",children:Object(g.jsx)("path",{d:"M21 21l-6-6m2-5a7 7 0 1 1-14 0a7 7 0 0 1 14 0z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),Object(g.jsx)("input",{className:"pl-8 pr-1.5 py-1 w-52 sm:w-64 text-sm border border-gray-200 rounded-sm outline-none focus:outline-none focus:border-gray-300 dark:bg-lightPurple dark:border-transparent dark:text-white",autoCapitalize:"false",autoComplete:"off",autoCorrect:"off",type:"text",name:"search"})]})]})]})})}function C(){return Object(g.jsx)("div",{dangerouslySetInnerHTML:{__html:d.index}})}function O(){return Object(g.jsxs)("div",{className:"app flex flex-col min-h-screen dark:bg-dark",children:[Object(g.jsx)(w,{}),Object(g.jsx)("div",{className:"content flex flex-1 justify-center",children:Object(g.jsx)("main",{className:"flex w-full max-w-4xl",children:Object(g.jsx)(o.a,{basename:"/twitch",children:Object(g.jsxs)(c.d,{children:[Object(g.jsx)(c.b,{path:"/",exact:!0,component:C}),Object(g.jsx)(c.b,{path:"/docs",exact:!0,component:b}),Object(g.jsx)(c.b,{path:"/docs/:route+",component:b})]})})})})]})}s(257);r.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(O,{})}),document.getElementById("root"))},5:function(e){e.exports=JSON.parse('{"index":"<h1>twitchx</h1>\\n","categories":[{"name":"General","pages":[{"name":"Welcome","slug":"welcome","content":"<h1>Welcome!</h1>\\n"},{"name":"Changelog","slug":"changelog","content":"<h1>Changelog</h1>\\n"},{"name":"FAQ","slug":"faq","content":"<h1>Frequently Asked Questions</h1>\\n"}]}]}')}},[[258,1,2]]]);
//# sourceMappingURL=main.733a406d.chunk.js.map