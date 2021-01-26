<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" 
    integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="stylesheet" href="calendar.css">

  </head>

<body>


  
<?php
class calender{
    private $year; //當前的年
    private $month; //當前的月份
    private $fdm; //當月的第一天(1號)是星期幾 first day of the month 
    private $days; //當月一共有幾天
    private $ldm; // 當月的最後一天是禮拜幾 last day of the month
    
 

    function __construct(){
        $this->year=isset($_GET['year']) ? $_GET["year"]:date("Y");
        $this->month=isset($_GET['month']) ? $_GET["month"]:intval(date("m"));        
        print $this->month;

        $this->fdm=date("w",strtotime($this->year."-".$this->month.-"1"));
        $this->days=date("t",strtotime($this->year."-".$this->month));
        $this->ldm=date("w",strtotime($this->year."-".$this->month."-".$this->days));
       

    }

    function out(){
        echo '<table>';
        $this->cal_pic();
        $this->monthlist();
        $this->weeklist();
        $this->daylist();
        echo '</table>';
    }

    private function weeklist(){
        $week=array('SUN','MON','TUE','WED','THR','FRI','SAT');

        echo '<tr>';
        for ($i=0; $i<7; $i++){
            if($i==0 or $i==6){
                echo '<td class="tag">'.$week[$i].'</td>';
            }
            else{
            echo '<td>'.$week[$i].'</td>';
            }
            
        }
        echo '</tr>';
    }

    private function daylist(){ // 輸出當月天數表
        echo '<tr>';
        //輸出空格(當前月份第一天前面的空格要印出來)
        for ($j=0; $j<$this->fdm; $j++)
            echo '<td>&nbsp;</td>';

        for($k=1; $k<=$this->days; $k++){
            $j++; 

            if ($k==date('d')){ // 如果日期等於今天則加上顏色
                echo '<td class="today-td atd"><div class="today-div tag">'.$k.'</div></td>';   //開始直接列印天數

            }
            elseif ($j%7==0 or $j%7==1)                     //開始直接列印天數
                
                echo '<td class="tag atd">'.$k.'</td>';  
            
            else
                echo '<td class="atd">'.$k.'</td>';  


            if($j%7==0)
                echo '</tr><tr>'; //因為要換行 每當遇到7的倍數印出<tr>   
            
        }

        if($this->ldm!=6)  // 如果當月最後一天不是在禮拜六 則補空白印出
            for($t=$this->ldm; $t<6; $t++){
                echo "<td>&nbsp</td>";
        }
        echo '</tr>';
        
    }
    private function monthlist(){
      $monthlist=array('0','january','february','march','april','may','june','july','august','september','october','november','december');
      $showmonth= $monthlist[$this->month];

        echo '<tr>';
        echo '<td>';   
        echo '<div class="circle">';
        echo '<a href="?'.$this->premonth($this->year,$this->month).'">';
        echo '<div class="move-l">
        <div class="arrow-l"></div>
        </div>
        </a>
        </div>
        </td>';
        echo '<td colspan="5" class="h1">'.strtoupper($showmonth).'</td>';
        echo '<td>
        <div class="circle">
        <a href="?'.$this->nextmonth($this->year,$this->month).'"><div class="move">
        <div class="arrow-r"></div>
        </a>
        </div>
    </div>
        </td>';
        echo '</tr>';
    }
    private function cal_pic(){
        echo '<tr>';
        echo '<td colspan="7">
          
              <div class="content">

              <a href="?'.$this->preyear($this->year,$this->month).'">
              <div class="items">
                <div class="left-key"></div>
              </div>
              </a>';
              
        echo '<div class="year">'.$this->year.'</div>';

        echo '<a href="?'.$this->nextyear($this->year,$this->month).'">
              <div class="items">
                <div class= "right-key"></div>
              </div>
              </a>';

        echo '</div>
        
        <div class= "content-img">
       
        <div class="case">
        <img src="img/1.jpg" alt="" >
        <img src="img/2.jpg" alt="" >
        <img src="img/3.jpg" alt="" > 
        <img src="img/4.jpg" alt="" > 
        <img src="img/5.jpg" alt="" > 
        <img src="img/6.jpg" alt="" > 
        <img src="img/7.jpg" alt="" > 
        <img src="img/8.jpg" alt="" >
        </div>
        
        </div>';

        echo '</td>';
        echo '</tr>';
    }

    private function preyear($year,$month){ // 這裡不能寫反不然參數傳送的值會錯誤 需要再研究 跟return值一起
     $year=$year-1;
    if($year<1996)
      $year=1996;
    
    return "year={$year}&month={$month}";
    }

    private function premonth($year,$month){ 
     if($month==1){
       $year=$year-1;

       if($year<1996)
            $year=1996;
       $month=12;
     }else{
       $month--;
     }
     return "year={$year}&month={$month}";

      }

      private function nextyear($year,$month){ 
          $year=$year+1;
          if ($year>2040)
              $year=2040;

          return "year={$year}&month={$month}";
   
         }
   
       private function nextmonth($year,$month){ 
        if ($month==12){
          $year++;
          if ($year>2040)
            $year=2040;
            $month=1;
        }else{
          $month++;
        }
        return "year={$year}&month={$month}";
  
       }
         

}

$calender = new calender;
$calender -> out();


?>


 <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
</body>
</html>