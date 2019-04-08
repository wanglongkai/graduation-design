//生产[0,1,2,3,....]的普通数组
export default function (length) {
  return Array.from({length},(item,index)=>index);
}