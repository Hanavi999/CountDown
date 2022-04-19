window.onload = function() {
    getTime();
};

function getTime() {
    var todays = document.querySelector('#timset');
    
    var time = new Date();
    var hour = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    if(minutes < 10) {
        minutes = "0" + minutes; 
    }
    if(seconds < 10) {
        seconds = "0" + seconds;
    }
    if(hour < 10) {
        hour = "0" + hour;
    }

    todays.innerHTML = hour + ":" + minutes + ":" + seconds;
}

function init(){
    setInterval(getTime, 100);
}

init();

