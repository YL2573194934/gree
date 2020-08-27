    /**
     * @description 缓冲动画
     * @param {获取元素的} dom 
     * @param {*对象属性} json 
     * @time 2020年7月25日11:30:26
     * @author 杨岚
     * 
     */
    function move(dom,json,fn){
    clearInterval(dom.timer)
    dom.timer=setInterval(function(){
       for(var atter in json){
           //每隔40毫秒 重新判断是否需要清除定时器
           var flag=true
           //定义目标值
           target=json[atter]
           //当前位置
          if(atter=="opacity"){
              var start=parseInt(getStyle(dom,atter)*100)
          }
          else if(atter == "zIndex"){
            dom.style[atter] = json[atter];
        }	
          else{
              start=parseInt(getStyle(dom,atter))
          }

           //步长
           var spen=(target-start)/10
           spen=spen>0?Math.ceil(spen):Math.floor(spen)
           //到达位置
           var next=start+spen
           if(atter=="opacity"){
               dom[atter]=next/100
               dom.style.filter = "alpha(opacity="+next+")";//兼容ie78

           }else if(atter=="zIndex"){
            dom.style[atter] = json[atter];
        }
         
           else{
               dom.style[atter]=next+"px"
           }
           //如果到达到的位置跟目标位置还不是一致,如果有一个动画属性,还没走完就是flase
           if(next!=target){
               flag=false//就修改状态
           }
          

       }
       if(flag==true){
        if(fn){
            fn();
        }
        clearInterval(dom.timer)
    }
    },40)
}
/**
 * @description 获取元素样式的兼容
 * @param {*元素} dom  
 * @param {*属性} attle 
 */
function getStyle(dom,attle){
    if(window.getComputedStyle){
      return  window.getComputedStyle(dom,null)[attle]
    }else{
      return  dom.currentStyle[attle]
    }
}
//获取页面滚动的距离
function getScroll(){
    return {
        left:document.body.scrollLeft||document.documentElement.scrollLeft,
        top:document.body.scrollTop||document.documentElement.scrollTop
    }
}