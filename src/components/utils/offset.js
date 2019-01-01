 //相对于适口的左偏移
 export function offsetLeft(el){
    return el.getBoundingClientRect().left;
 }

 //相对于适口的上偏移
 export function offsetTop(el){
     return el.getBoundingClientRect().top;
 }

 //获取元素相对于page的位置信息
 export function position(el){
     if(!el || typeof el !== 'object'){
         return false;
     }
     let rect = el.getBoundingClientRect();
     //page的上滚动值
     let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
     //page的左滚动值
     let scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;

     return {
         left:rect.left+(scrollLeft||0),
         top:rect.top+(scrollTop || 0),
         width:el.offsetWidth,
         height:el.offsetHeight
     }
 }
