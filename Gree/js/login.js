	/* 
			需求分析:
				1 点击按钮(li标签),当前按钮高亮(加类名on).
				2 点击按钮以后,对应的内容卡(类名叫login_list的div)显示出来.(要完成这个步骤,要知道点的li是第几个)
			
    */

    //点击的li标签
    var liS=document.querySelectorAll(".li_nav")
    //点击后选中的login_list
   var loginS=document.querySelectorAll(".login_list")
  //1 点击按钮(li标签),当前按钮高亮(加类名Tab_show).
  for(var i=0;i<liS.length;i++){
       //每个a标签都是一个对象,我可以给每个a标签对象都添加一个属性,用于记录他是第几个
       liS[i].index=i
       liS[i].onclick=function(){
           for(var j=0;j<liS.length;j++){
               liS[j].className=""
               loginS[j].style.display="none"
           }
           this.className="Tab_show"
           loginS[this.index].style.display="block"

       }
  }
