//canvas
   		var canvas = document.getElementById("canvas"); 
        var r = 50;
        var ctx = canvas.getContext("2d");
        var img = new Image();  
        img.src = "img/1.jpg";  
        img.onload = function() {  
          ctx.drawImage(img, 0, 0);  
        }  
          
     moveToRight = function() {
       	  ctx.drawImage(img, 0, 0);  
          ctx.globalCompositeOperation = "source-over";  
          ctx.font = "30px 黑体";  
          ctx.textAlign = "center";  
          ctx.fillStyle = "#fff";  
          ctx.fillText("SunLife 欢迎您", r, 150);  
          r = r + 10;  
        }  
        setInterval(moveToRight, 200);  
