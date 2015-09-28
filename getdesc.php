<?php
 function getdesc($arr)
   {
     foreach ($arr as $key => $value) {
          if ($key == "description" ||$key == "summary" ) {
              echo $value;break;
          }else{
            if (is_array($value)){
                getdesc($value);
            }
          }
     }
   }

  $arr1=array(
      'name'=>"dsdsdsds",
      'sds'=>array('summary' =>'ssssss' ),
      );

  getdesc($arr1);


 ?>
