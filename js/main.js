$(document).ready(function(){
    var width = $(window).width();
    //pick a random number to find out the order
    var x = Math.floor((Math.random() * 2) + 1);
    var afirst = (x == 1);
    var rows = $("#canvas > div");
    
    for(var i = 1; i <= rows.length; i++){
        if(afirst){
            $("#canvas > div:nth-child(" + i + ")").addClass("hex-row-a");
        } else {
            $("#canvas > div:nth-child(" + i + ")").addClass("hex-row-b");
        }
        afirst = !afirst;
    }
});