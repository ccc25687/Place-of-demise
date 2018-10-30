const indexStyle=require('../style/index.sass')
let oLeftNav=document.getElementsByClassName('leftNav')[0],
oLeftNavLight=document.getElementsByClassName('leftNavLight')[0];
oLeftNavLight.addEventListener('click',function(){
    oLeftNav.style.width==="100vw"?oLeftNav.style.width="0vw":oLeftNav.style.width="100vw";
});
setTimeout(()=>{
    oLeftNavLight.style.opacity=".3";
},3000);
