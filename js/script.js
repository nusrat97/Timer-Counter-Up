let days=document.querySelector(".days")
let hours=document.querySelector(".hours")
let minutes=document.querySelector(".minutes")
let second=document.querySelector(".second")

setInterval(() => {
    let date=new Date()

    if(date.getDay()<10){
        days.innerHTML=`0${date.getDay()}`
    }else{
        days.innerHTML=date.getDay()
    }

    if(date.getHours()<10){
        hours.innerHTML=`0${date.getHours()}`
    }else{
        hours.innerHTML=date.getHours()
    }

    if(date.getMinutes()<10){
        minutes.innerHTML=`0${date.getMinutes()}`
    }else{
        minutes.innerHTML=date.getMinutes()
    }   

    if(date.getSeconds()<10){
        second.innerHTML=`0${date.getSeconds()}`
    }else{
        second.innerHTML=date.getSeconds()
    }   

}, 1000);
