const days_ = document.querySelector(".days");
const hours_ = document.querySelector(".hours");
const minutes_ = document.querySelector(".minutes");
const seconds_ = document.querySelector(".seconds");
const target_date = document.querySelector("#target-date");
const selectedDate = document.querySelector("#selectedDate");
const sbmt = document.querySelector("button");

var targetDate;
localStorage.getItem('targetDate') == null ?  targetDate = new Date("1 January 2022 00:00:00") : targetDate = new Date(localStorage.getItem('targetDate')) ;
target_date.textContent = `Target Date: ${targetDate.toLocaleString()}`;
localStorage.setItem('targetDate',targetDate);



function countDown(){
    function checkDigit(number){
        return number < 10 ? `0${number}` : number;
    }
    
    const currentDate = new Date();
    // console.log("current date:",currentDate)
    var totalSeconds = (targetDate-currentDate)/1000;
    var days=Math.floor(((totalSeconds/60)/60)/24);
    var hours =  checkDigit(Math.floor(((totalSeconds/60)/60)%24));
    var minutes = checkDigit(Math.floor((totalSeconds/60)%60));
    var seconds= checkDigit(Math.floor(totalSeconds%60));
    // console.log("seconds",seconds);
    // console.log("minutes",minutes);
    // console.log("hours", hours)
    // console.log("days", days)
   
    days_.textContent=days;
    hours_.textContent=hours;
    minutes_.textContent=minutes;
    seconds_.textContent=seconds;

    
}


function dateUpdate(){
    Number.isNaN(selectedDate.valueAsNumber) ? null : targetDate = selectedDate.valueAsNumber-(180*60*1000);
    localStorage.setItem('targetDate',new Date(targetDate));
    target_date.textContent = `Target Date: ${new Date(targetDate).toLocaleString()}`;
}    

sbmt.addEventListener("click",dateUpdate);


 setInterval(countDown, 1000);