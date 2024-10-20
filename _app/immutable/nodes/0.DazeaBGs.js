import{s as U,l as N,m as M,e as Y,c as Z,b as ee,f as D,o as re,i as te,u as G,r as k,v as B,y as K,z as H,k as Qe,N as ve,t as we,d as Ae,I as pe,a7 as Se,a as $e,g as Te,C as ue,h as oe}from"../chunks/scheduler.Bg8jKZla.js";import{S as x,i as E,t as _,a as O,c as Q,b as w,m as A,e as S}from"../chunks/index.BQd2NE1s.js";import{t as R,g as ge,F as Ue,a as xe,B as Ee,i as Ie,f as Ke,r as He,n as p,b as Re,e as Ne,c as ye,R as be,d as z,h as _e,j as f,S as Oe,k as Ce,p as j,m as le,l as ce,o as he,q as W,s as J,u as X,v as I,w as de}from"../chunks/logger.CNeHInmz.js";import{w as Ge}from"../chunks/paths.D96ByxAY.js";import{g as ke}from"../chunks/entry.DjbvOL7Z.js";function Be(n){let e,t,s;const i=n[4].default,a=N(i,n,n[3],null);let o=[n[1],{class:t=R("mx-auto flex flex-wrap justify-between items-center ",n[0]?"w-full":"container",n[2].class)}],u={};for(let r=0;r<o.length;r+=1)u=M(u,o[r]);return{c(){e=Y("div"),a&&a.c(),this.h()},l(r){e=Z(r,"DIV",{class:!0});var l=ee(e);a&&a.l(l),l.forEach(D),this.h()},h(){re(e,u)},m(r,l){te(r,e,l),a&&a.m(e,null),s=!0},p(r,[l]){a&&a.p&&(!s||l&8)&&G(a,i,r,r[3],s?B(i,r[3],l,null):k(r[3]),null),re(e,u=ge(o,[l&2&&r[1],(!s||l&5&&t!==(t=R("mx-auto flex flex-wrap justify-between items-center ",r[0]?"w-full":"container",r[2].class)))&&{class:t}]))},i(r){s||(_(a,r),s=!0)},o(r){O(a,r),s=!1},d(r){r&&D(e),a&&a.d(r)}}}function Ve(n,e,t){const s=["fluid"];let i=K(e,s),{$$slots:a={},$$scope:o}=e,{fluid:u=!1}=e;return n.$$set=r=>{t(2,e=M(M({},e),H(r))),t(1,i=K(e,s)),"fluid"in r&&t(0,u=r.fluid),"$$scope"in r&&t(3,o=r.$$scope)},e=H(e),[u,i,e,o,a]}class qe extends x{constructor(e){super(),E(this,e,Ve,Be,U,{fluid:0})}}const Le=n=>({hidden:n&2}),fe=n=>({hidden:n[1],toggle:n[3],NavContainer:qe});function ze(n){let e;const t=n[6].default,s=N(t,n,n[7],fe);return{c(){s&&s.c()},l(i){s&&s.l(i)},m(i,a){s&&s.m(i,a),e=!0},p(i,a){s&&s.p&&(!e||a&130)&&G(s,t,i,i[7],e?B(t,i[7],a,Le):k(i[7]),fe)},i(i){e||(_(s,i),e=!0)},o(i){O(s,i),e=!1},d(i){s&&s.d(i)}}}function We(n){let e,t;return e=new qe({props:{fluid:n[0],$$slots:{default:[ze]},$$scope:{ctx:n}}}),{c(){Q(e.$$.fragment)},l(s){w(e.$$.fragment,s)},m(s,i){A(e,s,i),t=!0},p(s,i){const a={};i&1&&(a.fluid=s[0]),i&130&&(a.$$scope={dirty:i,ctx:s}),e.$set(a)},i(s){t||(_(e.$$.fragment,s),t=!0)},o(s){O(e.$$.fragment,s),t=!1},d(s){S(e,s)}}}function Je(n){let e,t;const s=[{tag:"nav"},n[4],{class:R("px-2 sm:px-4 py-2.5 w-full",n[5].class)}];let i={$$slots:{default:[We]},$$scope:{ctx:n}};for(let a=0;a<s.length;a+=1)i=M(i,s[a]);return e=new Ue({props:i}),{c(){Q(e.$$.fragment)},l(a){w(e.$$.fragment,a)},m(a,o){A(e,a,o),t=!0},p(a,[o]){const u=o&48?ge(s,[s[0],o&16&&xe(a[4]),o&32&&{class:R("px-2 sm:px-4 py-2.5 w-full",a[5].class)}]):{};o&131&&(u.$$scope={dirty:o,ctx:a}),e.$set(u)},i(a){t||(_(e.$$.fragment,a),t=!0)},o(a){O(e.$$.fragment,a),t=!1},d(a){S(e,a)}}}function Xe(n,e,t){const s=["fluid"];let i=K(e,s),a,{$$slots:o={},$$scope:u}=e,{fluid:r=!1}=e,l=Ge(!0);Qe(n,l,g=>t(1,a=g)),ve("navHidden",l);let m=()=>l.update(g=>!g);return n.$$set=g=>{t(5,e=M(M({},e),H(g))),t(4,i=K(e,s)),"fluid"in g&&t(0,r=g.fluid),"$$scope"in g&&t(7,u=g.$$scope)},n.$$.update=()=>{t(4,i.color=i.color??"navbar",i)},e=H(e),[r,a,l,m,i,e,o,u]}class Ye extends x{constructor(e){super(),E(this,e,Xe,Je,U,{fluid:0})}}function Ze(n){let e;return{c(){e=we("GitHub")},l(t){e=Ae(t,"GitHub")},m(t,s){te(t,e,s)},d(t){t&&D(e)}}}function et(n){let e,t;return e=new Ee({props:{href:"https://github.com/lyrklif",target:"_blank",color:"alternative",class:"ml-auto border-0",$$slots:{default:[Ze]},$$scope:{ctx:n}}}),{c(){Q(e.$$.fragment)},l(s){w(e.$$.fragment,s)},m(s,i){A(e,s,i),t=!0},p(s,i){const a={};i&1&&(a.$$scope={dirty:i,ctx:s}),e.$set(a)},i(s){t||(_(e.$$.fragment,s),t=!0)},o(s){O(e.$$.fragment,s),t=!1},d(s){S(e,s)}}}function tt(n){let e,t;return e=new Ye({props:{class:"px-4 md:px-10 py-0 w-full border-0",$$slots:{default:[et]},$$scope:{ctx:n}}}),{c(){Q(e.$$.fragment)},l(s){w(e.$$.fragment,s)},m(s,i){A(e,s,i),t=!0},p(s,[i]){const a={};i&1&&(a.$$scope={dirty:i,ctx:s}),e.$set(a)},i(s){t||(_(e.$$.fragment,s),t=!0)},o(s){O(e.$$.fragment,s),t=!1},d(s){S(e,s)}}}class st extends x{constructor(e){super(),E(this,e,null,tt,U,{})}}class it{constructor(e){this.abortSignalConsumed=!1,this.hadObservers=!1,this.defaultOptions=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.cache=e.cache,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.initialState=e.state||this.getDefaultState(this.options),this.state=this.initialState,this.meta=e.meta,this.scheduleGc()}setOptions(e){var t;this.options=Object.assign(Object.assign({},this.defaultOptions),e),this.meta=e==null?void 0:e.meta,this.cacheTime=Math.max(this.cacheTime||0,(t=this.options.cacheTime)!==null&&t!==void 0?t:5*60*1e3)}setDefaultOptions(e){this.defaultOptions=e}scheduleGc(){this.clearGcTimeout(),Ie(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}clearGcTimeout(){clearTimeout(this.gcTimeout),this.gcTimeout=void 0}optionalRemove(){this.observers.length||(this.state.isFetching?this.hadObservers&&this.scheduleGc():this.cache.remove(this))}setData(e,t){var s,i;const a=this.state.data;let o=Ke(e,a);return!((i=(s=this.options).isDataEqual)===null||i===void 0)&&i.call(s,a,o)?o=a:this.options.structuralSharing!==!1&&(o=He(a,o)),this.dispatch({data:o,type:"success",dataUpdatedAt:t==null?void 0:t.updatedAt}),o}setState(e,t){this.dispatch({type:"setState",state:e,setStateOptions:t})}cancel(e){var t;const s=this.promise;return(t=this.retryer)===null||t===void 0||t.cancel(e),s?s.then(p).catch(p):Promise.resolve()}destroy(){this.clearGcTimeout(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(e=>e.options.enabled!==!1)}isFetching(){return this.state.isFetching}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(e=>e.getCurrentResult().isStale)}isStaleByTime(e=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!Re(this.state.dataUpdatedAt,e)}onFocus(){var e;const t=this.observers.find(s=>s.shouldFetchOnWindowFocus());t&&t.refetch(),(e=this.retryer)===null||e===void 0||e.continue()}onOnline(){var e;const t=this.observers.find(s=>s.shouldFetchOnReconnect());t&&t.refetch(),(e=this.retryer)===null||e===void 0||e.continue()}addObserver(e){this.observers.indexOf(e)===-1&&(this.observers.push(e),this.hadObservers=!0,this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.indexOf(e)!==-1&&(this.observers=this.observers.filter(t=>t!==e),this.observers.length||(this.retryer&&(this.retryer.isTransportCancelable||this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.cacheTime?this.scheduleGc():this.cache.remove(this)),this.cache.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(e,t){var s,i,a,o,u,r;if(this.state.isFetching){if(this.state.dataUpdatedAt&&(t!=null&&t.cancelRefetch))this.cancel({silent:!0});else if(this.promise)return(s=this.retryer)===null||s===void 0||s.continueRetry(),this.promise}if(e&&this.setOptions(e),!this.options.queryFn){const c=this.observers.find(C=>C.options.queryFn);c&&this.setOptions(c.options)}const l=Ne(this.queryKey),m=ye(),g={queryKey:l,pageParam:void 0,meta:this.meta};Object.defineProperty(g,"signal",{enumerable:!0,get:()=>{if(m)return this.abortSignalConsumed=!0,m.signal}});const d=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(g)):Promise.reject("Missing queryFn"),b={fetchOptions:t,options:this.options,queryKey:l,state:this.state,fetchFn:d,meta:this.meta};return!((i=this.options.behavior)===null||i===void 0)&&i.onFetch&&((a=this.options.behavior)===null||a===void 0||a.onFetch(b)),this.revertState=this.state,(!this.state.isFetching||this.state.fetchMeta!==((o=b.fetchOptions)===null||o===void 0?void 0:o.meta))&&this.dispatch({type:"fetch",meta:(u=b.fetchOptions)===null||u===void 0?void 0:u.meta}),this.retryer=new be({fn:b.fetchFn,abort:(r=m==null?void 0:m.abort)===null||r===void 0?void 0:r.bind(m),onSuccess:c=>{var C,y;this.setData(c),(y=(C=this.cache.config).onSuccess)===null||y===void 0||y.call(C,c,this),this.cacheTime===0&&this.optionalRemove()},onError:c=>{var C,y;z(c)&&c.silent||this.dispatch({type:"error",error:c}),z(c)||((y=(C=this.cache.config).onError)===null||y===void 0||y.call(C,c,this),_e().error(c)),this.cacheTime===0&&this.optionalRemove()},onFail:()=>{this.dispatch({type:"failed"})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:b.options.retry,retryDelay:b.options.retryDelay}),this.promise=this.retryer.promise,this.promise}dispatch(e){this.state=this.reducer(this.state,e),f.batch(()=>{this.observers.forEach(t=>{t.onQueryUpdate(e)}),this.cache.notify({query:this,type:"queryUpdated",action:e})})}getDefaultState(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,i=typeof e.initialData<"u"?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0,a=typeof t<"u";return{data:t,dataUpdateCount:0,dataUpdatedAt:a?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isFetching:!1,isInvalidated:!1,isPaused:!1,status:a?"success":"idle"}}reducer(e,t){var s,i;switch(t.type){case"failed":return Object.assign(Object.assign({},e),{fetchFailureCount:e.fetchFailureCount+1});case"pause":return Object.assign(Object.assign({},e),{isPaused:!0});case"continue":return Object.assign(Object.assign({},e),{isPaused:!1});case"fetch":return Object.assign(Object.assign(Object.assign({},e),{fetchFailureCount:0,fetchMeta:(s=t.meta)!==null&&s!==void 0?s:null,isFetching:!0,isPaused:!1}),!e.dataUpdatedAt&&{error:null,status:"loading"});case"success":return Object.assign(Object.assign({},e),{data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:(i=t.dataUpdatedAt)!==null&&i!==void 0?i:Date.now(),error:null,fetchFailureCount:0,isFetching:!1,isInvalidated:!1,isPaused:!1,status:"success"});case"error":const a=t.error;return z(a)&&a.revert&&this.revertState?Object.assign({},this.revertState):Object.assign(Object.assign({},e),{error:a,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,isFetching:!1,isPaused:!1,status:"error"});case"invalidate":return Object.assign(Object.assign({},e),{isInvalidated:!0});case"setState":return Object.assign(Object.assign({},e),t.state);default:return e}}}class Pe extends Oe{constructor(e){super(),this.config=e||{},this.queries=[],this.queriesMap={}}build(e,t,s){var i;const a=t.queryKey,o=(i=t.queryHash)!==null&&i!==void 0?i:Ce(a,t);let u=this.get(o);return u||(u=new it({cache:this,queryKey:a,queryHash:o,options:e.defaultQueryOptions(t),state:s,defaultOptions:e.getQueryDefaults(a),meta:t.meta}),this.add(u)),u}add(e){this.queriesMap[e.queryHash]||(this.queriesMap[e.queryHash]=e,this.queries.push(e),this.notify({type:"queryAdded",query:e}))}remove(e){const t=this.queriesMap[e.queryHash];t&&(e.destroy(),this.queries=this.queries.filter(s=>s!==e),t===e&&delete this.queriesMap[e.queryHash],this.notify({type:"queryRemoved",query:e}))}clear(){f.batch(()=>{this.queries.forEach(e=>{this.remove(e)})})}get(e){return this.queriesMap[e]}getAll(){return this.queries}find(e,t){const[s]=j(e,t);return typeof s.exact>"u"&&(s.exact=!0),this.queries.find(i=>le(s,i))}findAll(e,t){const[s]=j(e,t);return Object.keys(s).length>0?this.queries.filter(i=>le(s,i)):this.queries}notify(e){f.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){f.batch(()=>{this.queries.forEach(e=>{e.onFocus()})})}onOnline(){f.batch(()=>{this.queries.forEach(e=>{e.onOnline()})})}}class at{constructor(e){this.options=Object.assign(Object.assign({},e.defaultOptions),e.options),this.mutationId=e.mutationId,this.mutationCache=e.mutationCache,this.observers=[],this.state=e.state||nt(),this.meta=e.meta}setState(e){this.dispatch({type:"setState",state:e})}addObserver(e){this.observers.indexOf(e)===-1&&this.observers.push(e)}removeObserver(e){this.observers=this.observers.filter(t=>t!==e)}cancel(){return this.retryer?(this.retryer.cancel(),this.retryer.promise.then(p).catch(p)):Promise.resolve()}continue(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()}execute(){let e;const t=this.state.status==="loading";let s=Promise.resolve();return t||(this.dispatch({type:"loading",variables:this.options.variables}),s=s.then(()=>{var i,a;(a=(i=this.mutationCache.config).onMutate)===null||a===void 0||a.call(i,this.state.variables,this)}).then(()=>{var i,a;return(a=(i=this.options).onMutate)===null||a===void 0?void 0:a.call(i,this.state.variables)}).then(i=>{i!==this.state.context&&this.dispatch({type:"loading",context:i,variables:this.state.variables})})),s.then(()=>this.executeMutation()).then(i=>{var a,o;e=i,(o=(a=this.mutationCache.config).onSuccess)===null||o===void 0||o.call(a,e,this.state.variables,this.state.context,this)}).then(()=>{var i,a;return(a=(i=this.options).onSuccess)===null||a===void 0?void 0:a.call(i,e,this.state.variables,this.state.context)}).then(()=>{var i,a;return(a=(i=this.options).onSettled)===null||a===void 0?void 0:a.call(i,e,null,this.state.variables,this.state.context)}).then(()=>(this.dispatch({type:"success",data:e}),e)).catch(i=>{var a,o;return(o=(a=this.mutationCache.config).onError)===null||o===void 0||o.call(a,i,this.state.variables,this.state.context,this),_e().error(i),Promise.resolve().then(()=>{var u,r;return(r=(u=this.options).onError)===null||r===void 0?void 0:r.call(u,i,this.state.variables,this.state.context)}).then(()=>{var u,r;return(r=(u=this.options).onSettled)===null||r===void 0?void 0:r.call(u,void 0,i,this.state.variables,this.state.context)}).then(()=>{throw this.dispatch({type:"error",error:i}),i})})}executeMutation(){var e;return this.retryer=new be({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:()=>{this.dispatch({type:"failed"})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:(e=this.options.retry)!==null&&e!==void 0?e:0,retryDelay:this.options.retryDelay}),this.retryer.promise}dispatch(e){this.state=rt(this.state,e),f.batch(()=>{this.observers.forEach(t=>{t.onMutationUpdate(e)}),this.mutationCache.notify(this)})}}function nt(){return{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0}}function rt(n,e){switch(e.type){case"failed":return Object.assign(Object.assign({},n),{failureCount:n.failureCount+1});case"pause":return Object.assign(Object.assign({},n),{isPaused:!0});case"continue":return Object.assign(Object.assign({},n),{isPaused:!1});case"loading":return Object.assign(Object.assign({},n),{context:e.context,data:void 0,error:null,isPaused:!1,status:"loading",variables:e.variables});case"success":return Object.assign(Object.assign({},n),{data:e.data,error:null,status:"success",isPaused:!1});case"error":return Object.assign(Object.assign({},n),{data:void 0,error:e.error,failureCount:n.failureCount+1,isPaused:!1,status:"error"});case"setState":return Object.assign(Object.assign({},n),e.state);default:return n}}class Fe extends Oe{constructor(e){super(),this.config=e||{},this.mutations=[],this.mutationId=0}build(e,t,s){const i=new at({mutationCache:this,mutationId:++this.mutationId,options:e.defaultMutationOptions(t),state:s,defaultOptions:t.mutationKey?e.getMutationDefaults(t.mutationKey):void 0,meta:t.meta});return this.add(i),i}add(e){this.mutations.push(e),this.notify(e)}remove(e){this.mutations=this.mutations.filter(t=>t!==e),e.cancel(),this.notify(e)}clear(){f.batch(()=>{this.mutations.forEach(e=>{this.remove(e)})})}getAll(){return this.mutations}find(e){return typeof e.exact>"u"&&(e.exact=!0),this.mutations.find(t=>ce(e,t))}findAll(e){return this.mutations.filter(t=>ce(e,t))}notify(e){f.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){this.resumePausedMutations()}onOnline(){this.resumePausedMutations()}resumePausedMutations(){const e=this.mutations.filter(t=>t.state.isPaused);return f.batch(()=>e.reduce((t,s)=>t.then(()=>s.continue().catch(p)),Promise.resolve()))}}function ut(){return{onFetch:n=>{n.fetchFn=()=>{var e,t,s,i,a,o;const u=(t=(e=n.fetchOptions)===null||e===void 0?void 0:e.meta)===null||t===void 0?void 0:t.refetchPage,r=(i=(s=n.fetchOptions)===null||s===void 0?void 0:s.meta)===null||i===void 0?void 0:i.fetchMore,l=r==null?void 0:r.pageParam,m=(r==null?void 0:r.direction)==="forward",g=(r==null?void 0:r.direction)==="backward",d=((a=n.state.data)===null||a===void 0?void 0:a.pages)||[],b=((o=n.state.data)===null||o===void 0?void 0:o.pageParams)||[],c=ye(),C=c==null?void 0:c.signal;let y=b,se=!1;const De=n.options.queryFn||(()=>Promise.reject("Missing queryFn")),V=(h,P,v,F)=>(y=F?[P,...y]:[...y,P],F?[v,...h]:[...h,v]),$=(h,P,v,F)=>{if(se)return Promise.reject("Cancelled");if(typeof v>"u"&&!P&&h.length)return Promise.resolve(h);const ae={queryKey:n.queryKey,signal:C,pageParam:v,meta:n.meta},T=De(ae),ne=Promise.resolve(T).then(L=>V(h,v,L,F));if(he(T)){const L=ne;L.cancel=T.cancel}return ne};let q;if(!d.length)q=$([]);else if(m){const h=typeof l<"u",P=h?l:me(n.options,d);q=$(d,h,P)}else if(g){const h=typeof l<"u",P=h?l:ot(n.options,d);q=$(d,h,P,!0)}else{y=[];const h=typeof n.options.getNextPageParam>"u";q=(u&&d[0]?u(d[0],0,d):!0)?$([],h,b[0]):Promise.resolve(V([],b[0],d[0]));for(let v=1;v<d.length;v++)q=q.then(F=>{if(u&&d[v]?u(d[v],v,d):!0){const T=h?b[v]:me(n.options,F);return $(F,h,T)}return Promise.resolve(V(F,b[v],d[v]))})}const ie=q.then(h=>({pages:h,pageParams:y})),Me=ie;return Me.cancel=()=>{se=!0,c==null||c.abort(),he(q)&&q.cancel()},ie}}}}function me(n,e){var t;return(t=n.getNextPageParam)===null||t===void 0?void 0:t.call(n,e[e.length-1],e)}function ot(n,e){var t;return(t=n.getPreviousPageParam)===null||t===void 0?void 0:t.call(n,e[0],e)}class je{constructor(e={}){this.queryCache=e.queryCache||new Pe,this.mutationCache=e.mutationCache||new Fe,this.defaultOptions=e.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}mount(){this.unsubscribeFocus=W.subscribe(()=>{W.isFocused()&&J.isOnline()&&(this.mutationCache.onFocus(),this.queryCache.onFocus())}),this.unsubscribeOnline=J.subscribe(()=>{W.isFocused()&&J.isOnline()&&(this.mutationCache.onOnline(),this.queryCache.onOnline())})}unmount(){var e,t;(e=this.unsubscribeFocus)===null||e===void 0||e.call(this),(t=this.unsubscribeOnline)===null||t===void 0||t.call(this)}isFetching(e,t){const[s]=j(e,t);return s.fetching=!0,this.queryCache.findAll(s).length}isMutating(e){return this.mutationCache.findAll(Object.assign(Object.assign({},e),{fetching:!0})).length}getQueryData(e,t){var s;return(s=this.queryCache.find(e,t))===null||s===void 0?void 0:s.state.data}getQueriesData(e){return this.getQueryCache().findAll(e).map(({queryKey:t,state:s})=>{const i=s.data;return[t,i]})}setQueryData(e,t,s){const i=X(e),a=this.defaultQueryOptions(i);return this.queryCache.build(this,a).setData(t,s)}setQueriesData(e,t,s){return f.batch(()=>this.getQueryCache().findAll(e).map(({queryKey:i})=>[i,this.setQueryData(i,t,s)]))}getQueryState(e,t){var s;return(s=this.queryCache.find(e,t))===null||s===void 0?void 0:s.state}removeQueries(e,t){const[s]=j(e,t),i=this.queryCache;f.batch(()=>{i.findAll(s).forEach(a=>{i.remove(a)})})}resetQueries(e,t,s){const[i,a]=j(e,t,s),o=this.queryCache,u=Object.assign(Object.assign({},i),{active:!0});return f.batch(()=>(o.findAll(i).forEach(r=>{r.reset()}),this.refetchQueries(u,a)))}cancelQueries(e,t,s){const[i,a={}]=j(e,t,s);typeof a.revert>"u"&&(a.revert=!0);const o=f.batch(()=>this.queryCache.findAll(i).map(u=>u.cancel(a)));return Promise.all(o).then(p).catch(p)}invalidateQueries(e,t,s){var i,a,o;const[u,r]=j(e,t,s),l=Object.assign(Object.assign({},u),{active:(a=(i=u.refetchActive)!==null&&i!==void 0?i:u.active)!==null&&a!==void 0?a:!0,inactive:(o=u.refetchInactive)!==null&&o!==void 0?o:!1});return f.batch(()=>(this.queryCache.findAll(u).forEach(m=>{m.invalidate()}),this.refetchQueries(l,r)))}refetchQueries(e,t,s){const[i,a]=j(e,t,s),o=f.batch(()=>this.queryCache.findAll(i).map(r=>r.fetch(void 0,Object.assign(Object.assign({},a),{meta:{refetchPage:i==null?void 0:i.refetchPage}}))));let u=Promise.all(o).then(p);return a!=null&&a.throwOnError||(u=u.catch(p)),u}fetchQuery(e,t,s){const i=X(e,t,s),a=this.defaultQueryOptions(i);typeof a.retry>"u"&&(a.retry=!1);const o=this.queryCache.build(this,a);return o.isStaleByTime(a.staleTime)?o.fetch(a):Promise.resolve(o.state.data)}prefetchQuery(e,t,s){return this.fetchQuery(e,t,s).then(p).catch(p)}fetchInfiniteQuery(e,t,s){const i=X(e,t,s);return i.behavior=ut(),this.fetchQuery(i)}prefetchInfiniteQuery(e,t,s){return this.fetchInfiniteQuery(e,t,s).then(p).catch(p)}cancelMutations(){const e=f.batch(()=>this.mutationCache.getAll().map(t=>t.cancel()));return Promise.all(e).then(p).catch(p)}resumePausedMutations(){return this.getMutationCache().resumePausedMutations()}executeMutation(e){return this.mutationCache.build(this,e).execute()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(e){this.defaultOptions=e}setQueryDefaults(e,t){const s=this.queryDefaults.find(i=>I(e)===I(i.queryKey));s?s.defaultOptions=t:this.queryDefaults.push({queryKey:e,defaultOptions:t})}getQueryDefaults(e){var t;return e?(t=this.queryDefaults.find(s=>de(e,s.queryKey)))===null||t===void 0?void 0:t.defaultOptions:void 0}setMutationDefaults(e,t){const s=this.mutationDefaults.find(i=>I(e)===I(i.mutationKey));s?s.defaultOptions=t:this.mutationDefaults.push({mutationKey:e,defaultOptions:t})}getMutationDefaults(e){var t;return e?(t=this.mutationDefaults.find(s=>de(e,s.mutationKey)))===null||t===void 0?void 0:t.defaultOptions:void 0}defaultQueryOptions(e){if(e!=null&&e._defaulted)return e;const t=Object.assign(Object.assign(Object.assign(Object.assign({},this.defaultOptions.queries),this.getQueryDefaults(e==null?void 0:e.queryKey)),e),{_defaulted:!0});return!t.queryHash&&t.queryKey&&(t.queryHash=Ce(t.queryKey,t)),t}defaultQueryObserverOptions(e){return this.defaultQueryOptions(e)}defaultMutationOptions(e){return e!=null&&e._defaulted?e:Object.assign(Object.assign(Object.assign(Object.assign({},this.defaultOptions.mutations),this.getMutationDefaults(e==null?void 0:e.mutationKey)),e),{_defaulted:!0})}clear(){this.queryCache.clear(),this.mutationCache.clear()}}function lt(n){let e;const t=n[5].default,s=N(t,n,n[4],null);return{c(){s&&s.c()},l(i){s&&s.l(i)},m(i,a){s&&s.m(i,a),e=!0},p(i,[a]){s&&s.p&&(!e||a&16)&&G(s,t,i,i[4],e?B(t,i[4],a,null):k(i[4]),null)},i(i){e||(_(s,i),e=!0)},o(i){O(s,i),e=!1},d(i){s&&s.d(i)}}}function ct(n,e,t){let{$$slots:s={},$$scope:i}=e,{queryCache:a=new Pe}=e,{mutationCache:o=new Fe}=e,{defaultOptions:u={}}=e,{client:r=new je({queryCache:a,mutationCache:o,defaultOptions:u})}=e;return pe(()=>{r.mount()}),ve("queryClient",r),Se(()=>{r.unmount()}),n.$$set=l=>{"queryCache"in l&&t(0,a=l.queryCache),"mutationCache"in l&&t(1,o=l.mutationCache),"defaultOptions"in l&&t(2,u=l.defaultOptions),"client"in l&&t(3,r=l.client),"$$scope"in l&&t(4,i=l.$$scope)},[a,o,u,r,i,s]}class ht extends x{constructor(e){super(),E(this,e,ct,lt,U,{queryCache:0,mutationCache:1,defaultOptions:2,client:3})}}const dt=new je;function ft(n){let e,t,s,i,a;t=new st({});const o=n[0].default,u=N(o,n,n[1],null);return{c(){e=Y("div"),Q(t.$$.fragment),s=$e(),i=Y("main"),u&&u.c(),this.h()},l(r){e=Z(r,"DIV",{class:!0});var l=ee(e);w(t.$$.fragment,l),s=Te(l),i=Z(l,"MAIN",{class:!0});var m=ee(i);u&&u.l(m),m.forEach(D),l.forEach(D),this.h()},h(){ue(i,"class","py-10 px-4 md:px-10 flex flex-col items-center max-w-screen-md mx-auto"),ue(e,"class","app max-w-screen-2xl mx-auto")},m(r,l){te(r,e,l),A(t,e,null),oe(e,s),oe(e,i),u&&u.m(i,null),a=!0},p(r,l){u&&u.p&&(!a||l&2)&&G(u,o,r,r[1],a?B(o,r[1],l,null):k(r[1]),null)},i(r){a||(_(t.$$.fragment,r),_(u,r),a=!0)},o(r){O(t.$$.fragment,r),O(u,r),a=!1},d(r){r&&D(e),S(t),u&&u.d(r)}}}function mt(n){let e,t;return e=new ht({props:{client:dt,$$slots:{default:[ft]},$$scope:{ctx:n}}}),{c(){Q(e.$$.fragment)},l(s){w(e.$$.fragment,s)},m(s,i){A(e,s,i),t=!0},p(s,[i]){const a={};i&2&&(a.$$scope={dirty:i,ctx:s}),e.$set(a)},i(s){t||(_(e.$$.fragment,s),t=!0)},o(s){O(e.$$.fragment,s),t=!1},d(s){S(e,s)}}}function vt(n,e,t){let{$$slots:s={},$$scope:i}=e;return pe(()=>{if(window.location.hash){console.log("TTT window.location.hash",window.location.hash);const a=window.location.hash.substring(1);console.log("TTT path",a),ke(`pets/${a}`)}}),n.$$set=a=>{"$$scope"in a&&t(1,i=a.$$scope)},[s,i]}class Ot extends x{constructor(e){super(),E(this,e,vt,mt,U,{})}}export{Ot as component};
