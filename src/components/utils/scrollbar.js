/**
 *隐藏和现实浏览的滚动条
 */

 function showScrollBar(){
     document.body.style.overflow = 'auto';
 }

 function hideScrollBar(){
     document.body.style.overflow = 'hidden';
 }

 export {
    showScrollBar,
    hideScrollBar
 }