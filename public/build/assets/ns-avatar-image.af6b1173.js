import{c,s as i}from"./index.es.f7e98ba1.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{b1 as s,aB as n,aA as t,am as a}from"./runtime-core.esm-bundler.db039fbe.js";const u={name:"ns-avatar-image",props:["url","name","size"],data(){return{svg:"",currentSize:8}},mounted(){this.currentSize=this.size||8,this.svg=c(i,{seed:this.name})}},o=["src","alt"],m=["innerHTML"];function _(d,h,e,v,r,f){return s(),n("div",{class:a("h-"+r.currentSize+" w-"+r.currentSize)},[e.url!==""&&e.url!==null?(s(),n("img",{key:0,src:e.url,class:"overflow-hidden rounded-full",alt:e.name,srcset:""},null,8,o)):t("",!0),e.url===""||e.url===null?(s(),n("div",{key:1,class:a("h-"+r.currentSize+" w-"+r.currentSize),innerHTML:r.svg},null,10,m)):t("",!0)],2)}var k=l(u,[["render",_]]);export{k as n};
