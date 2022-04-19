
window.onload = function() {
    let button = document.querySelector("#button");
    let daytime = document.querySelector("#dte");
    let body = document.querySelector("#indt");
    let mkspn = document.createElement('div');
    let h = document.querySelector("#hour");
    let m = document.querySelector("#minute");
    let si = document.querySelector("#si");
    let bun = document.querySelector("#bun");
    todayDate(daytime);
    
    button.onclick = function(event) {
        let dayt = new Date(daytime.value);
        let year = dayt.getFullYear();
        let month = dayt.getMonth() + 1;
        let day = dayt.getDate();
        if(month < 10) {
            month = "0" + month; 
        }
        if(day < 10) {
            day = "0" + day;
        }
        if(h < 10) {
            h = "0"+h;
        }
        if(m < 10) {
            m = "0"+m;
        }
        let memo = document.createTextNode(year+"-"+month+"-"+day+" "+h.value+":"+m.value);


        let value = event.target.value;
        daytime.style.display = 'none';
        h.style.display = 'none';
        m.style.display = 'none';
        si.style.display = 'none';
        bun.style.display = 'none';    
        mkspn.appendChild(memo);
        makeStyle(mkspn);
        body.appendChild(mkspn);
        
        if(value == 'start'){
            repeat(daytime.value, h.value, m.value);

            event.target.value = 'stop';
        }
        else if(value == 'stop') {
            window.location.reload();
        }

    }

}

function repeat(lastday, hour, minute) { setInterval( function showTime() {
    let DTime = new Date(lastday);
    let ho = hour * 60 * 60;
    let min = minute * 60;
    let time = (ho + min) * 1000;
    let span = document.querySelector("#timet");
    let nowTime = new Date();
    let distance = DTime - nowTime - 32400000 + time;
    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % (1000 * 60)) / 1000);
    if(s < 10){
        s = '0'+s;
    }
    if(distance > 0) {
        span.innerHTML = d + "일 "+ h +"시간 "+ m +"분 "+ s +"초 남음";
    }
    else if(distance <= 0) {
        span.innerHTML = "D-DAY!!!";
    }
    if(d <= 0) {
        span.innerHTML = h + "시간 " + m + "분 " + s + "초 남음";
    }
    

    

}, 100)};

function makeStyle(mkspn) {
    mkspn.style.color =  "#000";
    mkspn.style.fontFamily = 'Lobster';
    mkspn.style.textAlign = 'center';
    mkspn.style.border = '1px soild #fff';
    mkspn.style.backgroundColor = '#fff';
    mkspn.style.width = "230px";
    mkspn.style.height = '23px';
    mkspn.style.fontSize = '18px';
    mkspn.style.padding = '10px 12px 12px 10px';
    mkspn.style.borderRadius =  '5px';
}

function todayDate(dayTm) {
    let daytt = new Date();
        let toyear = daytt.getFullYear();
        let tomonth = daytt.getMonth() + 1;
        let today = daytt.getDate();
        if(tomonth < 10) {
            tomonth = "0" + tomonth; 
        }
        if(today < 10) {
            today = "0" + today;
        }
        dayTm.min = toyear+"-"+tomonth+"-"+today;
        dayTm.value = toyear+"-"+tomonth+"-"+today;
}