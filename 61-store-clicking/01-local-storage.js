$(function(){
   var n=localStorage.getItem("n")||0;
   function t(n){
       $(".main input").val("被按了 "+n+" 次")
   }t(n),
   $(".main input").click(function(){
       localStorage.setItem("n",++n),t(n)
    })
});
