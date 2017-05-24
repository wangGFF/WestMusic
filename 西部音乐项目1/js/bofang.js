
  var data=[];
  function bofang(data_all){
  data =data_all.data.list;
    };
    function $(id){return document.getElementById(id)};
// 创建列表
window.onload=function () {
    var listmusic = $("listmusic");
  createList(data);
  function createList(data){
    // listmusic.innerHTML = "";
    
    for (var i = 0; i < data.length; i++) {
      
      var div=document.createElement("div");
          div.className="gg";
                div.id="gg";
            var span0=document.createElement("span");
                span0.id="kk"+i;
                span0.className="kk";
                div.appendChild(span0);
            var spa=document.createElement("span");
                spa.className="xu";
                spa.innerHTML = i+1;
                div.appendChild(spa);    
      var span=document.createElement("span");
                span.className="ss";
                span.innerHTML = data[i].music;
                div.appendChild(span);
            var span1=document.createElement("span");
                span1.className="yy";
                span1.innerHTML = data[i].name;
                div.appendChild(span1);
            var span3=document.createElement("span");
                span3.className="zz";
                span3.innerHTML = data[i].time;
                div.appendChild(span3);
       
      listmusic.appendChild(div);
    };
    }// 数组结束
    
// 点击选中 
 var play=document.getElementById("play");       
       var k=document.getElementsByClassName("kk"); 
    for (var i = 0; i < k.length; i++) {
        k[i].index = i;
        
        k[i].onclick=function () {
        var key = this.index;
        if (k[key].innerHTML == " ") {
            k[key].innerHTML = "√" ;
        }else{
            k[key].innerHTML = " ";
        }
    }
    }
    //进度条
      var progress=document.getElementById("progress");
      //灰色进度条
      var bar=document.getElementById("bar");
      //声音按钮
      var control=document.getElementById("control");
// 进度条动画
    var animate = $("animate");    
    var gg=document.getElementsByClassName("gg");
    
     var audio=document.createElement("audio");
            audio.className = "video";
            audio.id = "video";
            audio.autoplay="autoplay";
              
                listmusic.appendChild(audio)
        console.log(listmusic);
    for (var i = 0; i < data.length; i++) {
// 循环
        
        gg[i].index = i;
        gg[i].onclick=function () {
          var key1 = this.index;
          audio.src = "music/"+data[key1].play+".mp3";
          console.log(audio);
          play.className="pause";
          
          // console.log(audio);
          // console.log(audio);
          // 时间显示 
var duration=document.getElementsByClassName("duration")[0];
var current=document.getElementsByClassName("current")[0];
var shiian = $("shiian");     
       audio.addEventListener("timeupdate",function  () {
        
          var alltime = Math.floor(audio.duration);
          var mintime = Math.floor(alltime/60);
          var secondtime = alltime - mintime*60;
          console.log(audio.duration);
          console.log(audio.currentTime);
          var mintime=mintime<10?'0' + mintime:mintime;
          var secondtime=secondtime<10?'0' + secondtime:secondtime;

          var alltimes = Math.floor(audio.currentTime);
          var mintimes = Math.floor(alltimes/60);
          var secondtimes = alltimes - mintimes*60;
          var mintimes=mintimes<10?'0' + mintimes:mintimes;
          var secondtimes=secondtimes<10?'0' + secondtimes:secondtimes;
         
          
        setTimeout(function () {
          shiian.innerHTML = mintimes+" "+':'+" "+secondtimes+" "+
        "/"+" "+mintime+" "+':'+" "+secondtime;
        },1000)
          
// 歌词同步
//         var tim = audio.currentTime.toFixed(2); 
// var lrcItem = document.getElementsByClassName("lrcItem")[0];      
// lrcItem.style.marginTop = '-'+ tim + 'px';
        
      },false); 
                // 下一首     
var right = $("right");
  right.onclick=function () {
          key1++;
          play.className="pause";
          audio.src = "music/"+data[key1].play+".mp3";console.log(audio);
          geshou.innerHTML = data[key1].music;

 }
var left = $("left");
  left.onclick=function () {
          key1--;
          play.className="pause";
          audio.src = "music/"+data[key1].play+".mp3";console.log(audio);
          geshou.innerHTML = data[key1].music;
 }

         
 // 歌曲名    
var geshou = $("geshou");     
geshou.innerHTML = data[key1].music;
        //进度条
        var one=document.getElementsByClassName("bofang_one")[0];
      audio.addEventListener("timeupdate",function  () {
        var scales=audio.currentTime/audio.duration;
        bar.style.width=progress.offsetWidth*scales+"px";
        control.style.left=progress.offsetWidth*scales+"px";
      },false);

      // 进度条拖拽
           control.onmousedown=function  (e) {
         audio.pause();
         document.onmousemove=function  (e) {
         var leftv=e.clientX-one.offsetLeft-animate.offsetLeft;
         if(leftv<=0){
          leftv=0;
         }
         if(leftv>=progress.offsetWidth){
         leftv=progress.offsetWidth;
         }
         control.style.left=leftv+"px"
         }
       document.onmouseup=function  () {
         var scales=control.offsetLeft/progress.offsetWidth;
               audio.currentTime =audio.duration*scales;
          audio.play();
        document.onmousemove=null;
        document.onmousedown=null;
       }
           } 
    
    
    
      
      //播放按钮
      
      play.onclick=function  () {
        if(audio.paused || audio.ended){
          play.className="pause";
          audio.play();
        }else{
          play.className="play";
          audio.pause();
        }
      }
      
    }// 点击选项

 }// for循环结束
     
// 静音
 var voices = true;
 var yinliangtu = $("yinliangtu");
  yinliangtu.onclick = function(){
    if (voices === true) {
      audio.muted = true;
      console.log(yinliangtu)
      yinliangtu.innerHTML = "<img style='margin-top:22px;margin-left:-4px' src='imgs/QQ截图20170517103238.png'>";
      voices = false;
    } else{
      audio.muted = false;
      yinliangtu.innerHTML = "<img class='yinliangtu' src='imgs/bofang_51.png'>";
      voices = true;
    };
  }   
    
var one3 = $("bofang_one"); console.log(one3.offsetLeft)        
var video=document.getElementById("video");       
 //音量条容器
var volume=document.getElementById("volume");
//volumeBar音量灰色
var volumeBar=document.getElementById("volumeBar");
//音量调整按钮
var volumeControl=document.getElementById("volumeControl");
//音量调整
volumeControl.onmousedown=function(e){  
document.onmousemove=function(e){
  var one1=document.getElementById("tt");
  
var leftb=e.clientX-volume.offsetLeft-one1.offsetLeft-one3.offsetLeft;
console.log(volume.offsetLeft)
console.log(e.clientX)
console.log(leftb)

if(leftb<=0){
leftb=0;
yinliangtu.innerHTML = "<img style='margin-top:22px;margin-left:-4px' src='imgs/QQ截图20170517103238.png'>";
}
if (leftb>=volume.offsetWidth) {
leftb=volume.offsetWidth;
}
if (leftb>0) {
  yinliangtu.innerHTML = "<img class='yinliangtu' src='imgs/bofang_51.png'>";
}
volumeControl.style.left=leftb+"px";
volumeBar.style.width=leftb+"px";
}
document.onmouseup=function(){

audio.volume=volumeControl.offsetLeft/volume.offsetWidth;
document.onmousedown=null;
document.onmousemove=null;
}
}

           
          
    
     
        

// 全部播放
    var all=$("all");
    all.onclick=function () {
        for (var i = 0; i < k.length; i++) {
            
            if (listmusic.children[i].children[0].innerHTML == " ") {
            listmusic.children[i].children[0].innerHTML = "√";
        }else{
            listmusic.children[i].children[0].innerHTML = " ";
        }
        }
    }

    

}
 



       