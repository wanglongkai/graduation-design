/**
 * 封装class属性的相关操作
 */

//判断是否有指定class
export function hasClass(el,cls) {
  if(el.className){
    return new RegExp('(^|\\s)'+cls+'($|\\s)').test(el.className);
  }
  return false;
}

//添加指定class
export function addClass(el,cls) {
  if(!hasClass(el,cls)){
    el.className += ` ${cls}`;
  }
}

//删除指定class
export function removeClass(el,cls) {
  if(hasClass(el,cls)){
    el.className = el.className.replace(new RegExp('(^|\\s)'+cls+'($|\\s)'),' ');
  }
}

//删除全部class
export function removeAllClass(el) {
  el.className = '';
}