/* Current Year 
*******************************************************/

document.getElementById("current-year").innerHTML = new Date().getFullYear();

/* Current Year for mobile
*******************************************************/
document.getElementById("current-year-m").innerHTML = new Date().getFullYear();

/* Countdown Section
*******************************************************/
let target = new Date("Jun 30,2022 13:00:00").getTime();

let _second = 1000;
let _minute = _second * 60;
let _hour = _minute * 60;
let _day = _hour * 24;


let x = setInterval(function () {
    let now = new Date().getTime();
    let remain = target - now;

    let day = Math.floor(remain / _day);
    let hour = Math.floor((remain % _day) / _hour);
    let minute = Math.floor((remain % _hour) / _minute);
    let second = Math.floor((remain % _minute) / _second);

    $('#day').html(day);
    $('#hour').html(hour);
    $('#minute').html(minute);
    $('#second').html(second);
});




$(document).ready(function(){
    // click on button submit
    $("#submit").on('click', function(){
        
        $.ajax({
            url: './mail.json', 
            type : "POST", 
            dataType : 'json', 
            data : $("#form").serialize(),
            success : function(result) {
                console.log(result);
            }
        })
    });
});