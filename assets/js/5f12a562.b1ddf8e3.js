/*! For license information please see 5f12a562.b1ddf8e3.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[245452],{430058:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>a,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(824246),s=t(511151);const o={id:"plugin-kubernetes-node",title:"@backstage/plugin-kubernetes-node",description:"API Reference for @backstage/plugin-kubernetes-node"},i=void 0,c={id:"reference/plugin-kubernetes-node",title:"@backstage/plugin-kubernetes-node",description:"API Reference for @backstage/plugin-kubernetes-node",source:"@site/../docs/reference/plugin-kubernetes-node.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-node",permalink:"/docs/reference/plugin-kubernetes-node",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-kubernetes-node.md",tags:[],version:"current",frontMatter:{id:"plugin-kubernetes-node",title:"@backstage/plugin-kubernetes-node",description:"API Reference for @backstage/plugin-kubernetes-node"}},u={},l=[{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function d(e){const n=Object.assign({p:"p",a:"a",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-node",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-kubernetes-node"})})]}),"\n",(0,r.jsx)(n.p,{children:"Node.js library for the kubernetes plugin."}),"\n",(0,r.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Interface"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-node.authenticationstrategy",children:"AuthenticationStrategy"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-node.clusterdetails",children:"ClusterDetails"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-node.customresource",children:"CustomResource"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-node.customresourcesbyentity",children:"CustomResourcesByEntity"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-node.fetchresponsewrapper",children:"FetchResponseWrapper"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-node.kubernetesauthstrategyextensionpoint",children:"KubernetesAuthStrategyExtensionPoint"})}),(0,r.jsxs)(n.td,{children:["The interface for ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-node.kubernetesauthstrategyextensionpoint",children:"kubernetesAuthStrategyExtensionPoint"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-node.kubernetesclusterssupplier",children:"KubernetesClustersSupplier"})}),(0,r.jsx)(n.td,{children:"Used to load cluster details from different sources"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-node.kubernetesclustersupplierextensionpoint",children:"KubernetesClusterSupplierExtensionPoint"})}),(0,r.jsxs)(n.td,{children:["The interface for ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-node.kubernetesclustersupplierextensionpoint",children:"kubernetesClusterSupplierExtensionPoint"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-node.kubernetesfetcher",children:"KubernetesFetcher"})}),(0,r.jsx)(n.td,{children:"Fetches information from a kubernetes cluster using the cluster details object to target a specific cluster"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-node.kubernetesfetcherextensionpoint",children:"KubernetesFetcherExtensionPoint"})}),(0,r.jsxs)(n.td,{children:["The interface for ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-node.kubernetesfetcherextensionpoint",children:"kubernetesFetcherExtensionPoint"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-node.kubernetesobjectsbyentity",children:"KubernetesObjectsByEntity"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-node.kubernetesobjectsprovider",children:"KubernetesObjectsProvider"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-node.kubernetesobjectsproviderextensionpoint",children:"KubernetesObjectsProviderExtensionPoint"})}),(0,r.jsxs)(n.td,{children:["The interface for ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-node.kubernetesobjectsproviderextensionpoint",children:"kubernetesObjectsProviderExtensionPoint"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-node.kubernetesservicelocator",children:"KubernetesServiceLocator"})}),(0,r.jsx)(n.td,{children:"Used to locate which cluster(s) a service is running on"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-node.kubernetesservicelocatorextensionpoint",children:"KubernetesServiceLocatorExtensionPoint"})}),(0,r.jsxs)(n.td,{children:["The interface for ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-node.kubernetesservicelocatorextensionpoint",children:"kubernetesServiceLocatorExtensionPoint"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-node.objectfetchparams",children:"ObjectFetchParams"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-node.objecttofetch",children:"ObjectToFetch"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-node.servicelocatorrequestcontext",children:"ServiceLocatorRequestContext"})}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Variable"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-node.kubernetesauthstrategyextensionpoint",children:"kubernetesAuthStrategyExtensionPoint"})}),(0,r.jsx)(n.td,{children:"An extension point the exposes the ability to add an Auth Strategy."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-node.kubernetesclustersupplierextensionpoint",children:"kubernetesClusterSupplierExtensionPoint"})}),(0,r.jsx)(n.td,{children:"An extension point the exposes the ability to configure a cluster supplier."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-node.kubernetesfetcherextensionpoint",children:"kubernetesFetcherExtensionPoint"})}),(0,r.jsx)(n.td,{children:"An extension point the exposes the ability to configure a kubernetes fetcher."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-node.kubernetesobjectsproviderextensionpoint",children:"kubernetesObjectsProviderExtensionPoint"})}),(0,r.jsx)(n.td,{children:"An extension point the exposes the ability to configure a objects provider."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-node.kubernetesservicelocatorextensionpoint",children:"kubernetesServiceLocatorExtensionPoint"})}),(0,r.jsx)(n.td,{children:"An extension point the exposes the ability to configure a kubernetes service locator."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Type Alias"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-node.authmetadata",children:"AuthMetadata"})}),(0,r.jsx)(n.td,{children:"Provider-specific authentication configuration"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-node.kubernetescredential",children:"KubernetesCredential"})}),(0,r.jsx)(n.td,{children:"Authentication data used to make a request to Kubernetes"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-node.kubernetesobjecttypes",children:"KubernetesObjectTypes"})}),(0,r.jsx)(n.td,{})]})]})]})]})}const a=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},371426:(e,n,t)=>{var r=t(827378),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,o={},l=null,d=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,r)&&!u.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:s,type:e,key:l,ref:d,props:o,_owner:c.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},541535:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),a=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),h=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,x={};function j(e,n,t){this.props=e,this.context=n,this.refs=x,this.updater=t||p}function y(){}function k(e,n,t){this.props=e,this.context=n,this.refs=x,this.updater=t||p}j.prototype.isReactComponent={},j.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=j.prototype;var g=k.prototype=new y;g.constructor=k,b(g,j.prototype),g.isPureReactComponent=!0;var v=Array.isArray,m=Object.prototype.hasOwnProperty,_={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function E(e,n,r){var s,o={},i=null,c=null;if(null!=n)for(s in void 0!==n.ref&&(c=n.ref),void 0!==n.key&&(i=""+n.key),n)m.call(n,s)&&!S.hasOwnProperty(s)&&(o[s]=n[s]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var l=Array(u),d=0;d<u;d++)l[d]=arguments[d+2];o.children=l}if(e&&e.defaultProps)for(s in u=e.defaultProps)void 0===o[s]&&(o[s]=u[s]);return{$$typeof:t,type:e,key:i,ref:c,props:o,_owner:_.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var C=/\/+/g;function R(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function O(e,n,s,o,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var u=!1;if(null===e)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case t:case r:u=!0}}if(u)return i=i(u=e),e=""===o?"."+R(u,0):o,v(i)?(s="",null!=e&&(s=e.replace(C,"$&/")+"/"),O(i,n,s,"",(function(e){return e}))):null!=i&&(P(i)&&(i=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(i,s+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),n.push(i)),1;if(u=0,o=""===o?".":o+":",v(e))for(var l=0;l<e.length;l++){var d=o+R(c=e[l],l);u+=O(c,n,s,d,i)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(c=e.next()).done;)u+=O(c=c.value,n,s,d=o+R(c,l++),i);else if("object"===c)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return u}function w(e,n,t){if(null==e)return e;var r=[],s=0;return O(e,r,"","",(function(e){return n.call(t,e,s++)})),r}function A(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},T={transition:null},I={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:T,ReactCurrentOwner:_};n.Children={map:w,forEach:function(e,n,t){w(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return w(e,(function(){n++})),n},toArray:function(e){return w(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=j,n.Fragment=s,n.Profiler=i,n.PureComponent=k,n.StrictMode=o,n.Suspense=d,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=b({},e.props),o=e.key,i=e.ref,c=e._owner;if(null!=n){if(void 0!==n.ref&&(i=n.ref,c=_.current),void 0!==n.key&&(o=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in n)m.call(n,l)&&!S.hasOwnProperty(l)&&(s[l]=void 0===n[l]&&void 0!==u?u[l]:n[l])}var l=arguments.length-2;if(1===l)s.children=r;else if(1<l){u=Array(l);for(var d=0;d<l;d++)u[d]=arguments[d+2];s.children=u}return{$$typeof:t,type:e.type,key:o,ref:i,props:s,_owner:c}},n.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},n.createElement=E,n.createFactory=function(e){var n=E.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:l,render:e}},n.isValidElement=P,n.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:A}},n.memo=function(e,n){return{$$typeof:a,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=T.transition;T.transition={};try{e()}finally{T.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return $.current.useCallback(e,n)},n.useContext=function(e){return $.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return $.current.useDeferredValue(e)},n.useEffect=function(e,n){return $.current.useEffect(e,n)},n.useId=function(){return $.current.useId()},n.useImperativeHandle=function(e,n,t){return $.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return $.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return $.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return $.current.useMemo(e,n)},n.useReducer=function(e,n,t){return $.current.useReducer(e,n,t)},n.useRef=function(e){return $.current.useRef(e)},n.useState=function(e){return $.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return $.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return $.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>o});var r=t(667294);const s=r.createContext({});function o(e){const n=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||i:o(e),r.createElement(s.Provider,{value:c},n)}}}]);