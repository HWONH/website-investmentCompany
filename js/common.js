$(document).ready(function(){
    $("#header").load("header.html", function(){
        call_fnc();
    });
    $("#footer").load("footer.html");

    function call_fnc(){
        var $hash = location.hash;
        var $ch_hash = $hash.replace("#", "");
    
        console.log($hash);
        console.log($ch_hash);
        console.log(typeof $ch_hash);

        $("#header li").removeClass("active");
        $("#header li").eq($ch_hash).addClass("active");
    }
});