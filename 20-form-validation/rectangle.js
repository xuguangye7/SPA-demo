$(function(){
    var $width=$('#width'),
        $height=$('#height'),
        $btnCal=$('#calculate'),
        $perimeter=$('#perimeter'),
        $area=$('#area');
    $btnCal.click(function(){
      if(!validate('#width') || !validate('#height')) return;
        var w =Number($width.val()),
            h =Number($height.val());
        var p = Math.round(2*(w+h)*Math.pow(10,3))/Math.pow(10,3),
            a = Math.round(w*h*Math.pow(10,3))/Math.pow(10,3);
        $perimeter.val(p);
        $area.val(a);       
    });
    
    $width.keypress(function(e){
      console.log('keypress')
      var pos = e.target.selectionStart,
          con = e.target.value;
     console.log(pos);
     console.log(con);
      if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>/?\\]/.test(e.key)){
        e.preventDefault();
        return;
      }
      if(e.key==='e'){
        if(pos===0 || con.indexOf('e') !== -1 || con.indexOf('E') !==-1){
          e.preventDefault();
          return;
        }
        if(pos === 1 && con.substring(0,1)==='-'){
          e.preventDefault();
          return;
        }
      }
    });

    $height.keypress(function(e){
      if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>/?\\]/.test(e.key)){
        e.preventDefault();
        return;
      }
    });





    $width.focusout(function(){
      if(!validate('#width')) $width.select();
    });

    $height.focusout(function(){
      if(!validate('#height')) $height.select();
    });


    function validate(field){
      var $data = $(field),
          $msg = $(field + '-validation-message');
      
      if($data.val()===''){
        if(field=='#width'){
          $msg.html('宽度不能为空');
        }else if(field=='#height'){
          $msg.html('高度不能为空');
        }

        $data.select();
        return false;
      }

      if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())){
        $msg.html('必须是数值');
        $data.select();
        return false;
      }

      if(Number($data.val())<0){
        $msg.html('必须大于0');
        $data.select();
        return false;
      }
      $msg.html('');
      return true;
    }
});

