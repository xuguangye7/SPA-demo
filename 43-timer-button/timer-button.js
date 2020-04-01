function TimerButton(){
  var $btn = $('<input class="timer-button" disabled>'),
    cfg={
      container:'body',
      i:6,
      title:'同意',
      onClick:null
    },
    i,
    timer;
  this.show = function(conf){
    $(cfg.container).append($btn); 
    $.extend(cfg,conf);
    i = cfg.i;
    $btn.val(cfg.title+'('+cfg.i+'s)');
    timer = setInterval(function(){
      i--;
      if(i === 0){
        clearInterval(timer);
        $btn.val(cfg.title);
        $btn.removeAttr('disabled');
      }else{
        $btn.val(cfg.title+'('+i+'s)');
      }
    },1000);
    $btn.click(cfg.onClick);
  }
}

var $timerButton = (function(){ 
     function show(conf){ 
          var $btn = $('<input class="timer-button" disabled>'), 
            cfg={ 
                     container:'body', 
                     i:6, 
                     title:'同意', 
                     onClick:null 
                  }, 
           i, 
           timer; 
       
           $(cfg.container).append($btn);  
           $.extend(cfg,conf); 
           i = cfg.i; 
           $btn.val(cfg.title+'('+cfg.i+'s)'); 
           timer = setInterval(function(){ 
                    i--; 
                    if(i === 0){ 
                               clearInterval(timer); 
                               $btn.val(cfg.title); 
                               $btn.removeAttr('disabled'); 
                            }else{ 
                                       $btn.val(cfg.title+'('+i+'s)'); 
                                    } 
                 },1000); 
           $btn.click(cfg.onClick); 
         } 
    return { 
          show:show 
       }; 
  }());
                                                    
