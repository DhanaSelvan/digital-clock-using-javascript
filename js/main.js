var hours = document.getElementById('hours');
var mins = document.getElementById('mins');
var secs = document.getElementById('secs');
var am = document.getElementById('am');

setInterval(()=> {
    const date = new Date();
    const hour = date.getHours()>12? date.getHours()-12: date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const amPm = date.getHours()>12? 'PM': 'AM';
    hours.innerHTML = hour<10? '0' + hour : hour;
    mins.innerHTML = min<10? '0' + min: min;
    secs.innerHTML = sec<10? '0' + sec: sec;
    am.innerHTML = amPm;
    document.getElementById('date').innerHTML = date.toDateString()
}, 500)