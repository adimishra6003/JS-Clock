setInterval(showtime, 1000);

function showtime(){
    let time = new Date();
    let hours = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    let am_pm = "AM";

    if(hours>=12){
        if(hours>12){
            hours-=12;
            am_pm = "PM";
        }
        else{
            am_pm = "PM";
        }
    }

    hours = hours<10 ? '0'+hours:hours;
    mins = mins<10 ? '0'+mins:mins;
    secs = secs<10 ? '0'+secs:secs;

    let current_time = hours+":"+mins+":"+secs+" "+am_pm;

    document.getElementById("clock").innerHTML = current_time;
    // console.log(current_time);
}