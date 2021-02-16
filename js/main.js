function setContent(){
    var a = document.getElementById('main-text');
    a.textContent +=' info';

}

function showClocknDate(){
    var  timeBlock = document.getElementById('time');
    var  dateBlock = document.getElementById('date');
    var timendate = new Date();
    timeBlock.textContent = formatTime(timendate);
    dateBlock.textContent = formatDate(timendate);
}

function formatDate(d){
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    monthName = monthNames[d.getMonth()]
    dayName = dayNames[d.getDay()];
    nubmerOfMonth = d.getDate();

    fullDate = dayName + ', ' + nubmerOfMonth + ' ' + monthName;

    return fullDate;
}


function formatTime(t){
    var time = t;
    let fullTime;
    fullTime = t.getHours();

    if (t.getMinutes() < 10){
     
        fullTime +=  ':0' + t.getMinutes();

    } else {

        fullTime +=  ':' + t.getMinutes();
    }

    if (t.getSeconds() < 10){

        fullTime +=  ':0' + t.getSeconds();

    } else {

        fullTime +=  ':' + t.getSeconds();
    }

      
    return fullTime;
}


function setWallpaper(){
    let wallPath;
    var time = new Date();
    
    var timeInMin = time.getHours()*60 + time.getMinutes();
    var times = [0, 90, 180, 270, 360, 450, 540, 630, 720, 810, 900, 990, 1080, 1170, 1260, 1350, 1440];
    
    for (let i = 0; i <= 16; i++) {
        if (timeInMin <= times[i]){ 
            wallPath = "url('/img/" + i + ".jpeg')";

            document.body.style.backgroundImage = wallPath;
            break;
        }
        
    }
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat'
}

function blinkingCursor(){

    var c = document.getElementById("cursor")

    if (c.style.display ==   "none") {
      c.style.display = "block";
    } else {
      c.style.display = "none";
    }
  }

/*
0:00 =    1
1:30 =    2
3:00 =    3 
4:30 =    4
6:00 =    5  
7:30 =    6
9:00 =    7
10:30 =   8
12:00 =   9
13:30 =   10
15:00 =   11
16:30 =   12 
18:00 =   13
19:30 =   14
21:00 =   15
22:30 =   16
*/

//setTimeout(100000);
setContent();
showClocknDate();
setInterval(showClocknDate, 1000);
setWallpaper();
setInterval(blinkingCursor, 500);