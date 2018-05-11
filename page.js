function timer()
        {
            var today = new Date();

            var day = today.getDate();
            var month = today.getMonth()+1;
            var year = today.getFullYear();
    
            var hour = today.getHours();
            if (hour<10) hour = "0"+hour;
            var minute = today.getMinutes();
            if (minute<10) minute = "0"+minute;
            var second = today.getSeconds();
            if (second<10) second = "0"+second;
            
            document.getElementById("clock").innerHTML = "real time PL: "+day+"/"+month+"/"+year+"|"+hour+":"+minute+":"+second;
            
            setTimeout("timer()",1000);
        }


function check()
{
    var number = document.getElementById("place").value;
    
    if (number>0) document.getElementById("result").innerHTML="positive number";
    
    else if (number<0) document.getElementById("result").innerHTML="negative number";
    else if (number==0) document.getElementById("result").innerHTML="zero";
    else document.getElementById("result").innerHTML="This is not a number to check!"
}

var number = Math.floor(Math.random()*5)+1;

var timer1 = 0;
var timer2 = 0;

function setslide (nrslide)
{
    clearTimeout(timer1);
    clearTimeout(timer2);
    number = nrslide-1;
    
    cover();
    setTimeout("changeslide()",500);
    
}


function cover ()
{
    $("#slider").fadeOut(500);
}

function changeslide ()
{
    number++; if(number>5) number=1;
    
    var photo = "<img src=\"photos/slider/s"+ number +".jpg\"/>";
    
    document.getElementById("slider").innerHTML = photo;
    
    $("#slider").fadeIn(500);
    
    timer1 = setTimeout("changeslide()",5000);
    timer2 = setTimeout("cover()",4500);
    
    
}