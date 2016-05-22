$(document).on('ready', function(){
    var rows = $("#canvas > div");
    for(var i = 1; i <= rows.length; i++){
        var hexagons = $("#canvas > div:nth-child(" + i + ") > .hexagon:not(.unactive)");
        for(var j = 1; j <= hexagons.length; j++){
            //jth hexagon for the ith row
            //assign colors
            var r = Math.floor((Math.random() * 255) + 1);
            var g = Math.floor((Math.random() * 255) + 1);
            var b = Math.floor((Math.random() * 255) + 1);
            
            $("#canvas > div:nth-child(" + i + ") > .hexagon:not(.unactive):nth-child("+ j +"), #canvas > div#first > .hexagon:not(.unactive):nth-child("+j+")").css("background-color", "rgb(" +r+", "+g+", "+b+")");
            
            //manipulate pseudo elements :after and :before
            document.styleSheets[0].addRule("#canvas > div:nth-child(" + i + ") > .hexagon:not(.unactive):nth-child("+ j +"):before, #canvas > div#first > .hexagon:not(.unactive):nth-child("+j+"):before",
            "border-bottom: 20px solid rgb(" +r+", "+g+", "+b+")");
            document.styleSheets[0].addRule("#canvas > div:nth-child(" + i + ") > .hexagon:not(.unactive):nth-child("+ j +"):after, #canvas > div#first > .hexagon:not(.unactive):nth-child("+j+"):after",
            "border-top: 20px solid rgb(" +r+", "+g+", "+b+")");
        }
    }
    
    $(".hexagon").mouseenter(function(){
        $(this).addClass("unactive");
    });
    $(".hexagon:not(#first > .hexagon.unactive)").mouseleave(function(){
        $(this).removeClass("unactive");
    });
});