function display(){
    const n = new Date();
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    let hr = n.getHours();
    let min = n.getMinutes();
    let seconds = n.getSeconds()     
    let date = n.getDate()
    let month=n.getMonth()
    let year =n.getFullYear()
    let day = n.getDay()
    if(hr > 12){
        hr = hr-12
    document.getElementById("ampm").innerHTML = "PM";    
    }
    function ntr(num){
        if(num<10)
        return '0'+num
        else
        return num  }
   document.getElementById("hr").innerHTML = ntr(hr);
    document.getElementById("min").innerHTML = ntr(min);
    document.getElementById("seconds").innerHTML = ntr(seconds);
    document.getElementById("date").innerHTML = ntr(date);
    document.getElementById("month").innerHTML = months[month];
    document.getElementById("year").innerHTML = year;
    document.getElementById("day").innerHTML = days[day];
}
setInterval(display,100)