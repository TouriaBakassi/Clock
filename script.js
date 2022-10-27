"use strict";
let HEUR=document.querySelector(".heur");
let MINUTE=document.querySelector(".minute");
let SECOND=document.querySelector(".second");

function Clock(){
    const DATE= new Date();
    let her= DATE.getHours() ;
    let min= DATE.getMinutes();
    let sec= DATE.getSeconds();
//    converting
    let heur= her*30 +(min/2);
    let minute= min*6;
    let second= sec*6;
    
    HEUR.style.transform ="rotate("+ heur +"deg)";
    MINUTE.style.transform ="rotate("+ minute +"deg)";
    SECOND.style.transform ="rotate("+ second +"deg)";
}
setInterval(Clock,1000);
