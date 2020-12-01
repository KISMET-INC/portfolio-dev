$(".hide").hide();

$(document).on("click",".click-tech",function() {
    if ($(this).closest(".tech").length ===0) { 
        $(".hide").hide();
    } 

    $(".dropdown-tech").slideDown("fast");

});
$(document).on("click",".click-challenge",function() {
    if ($(this).closest(".dropdown-challenge").length ===0) { 
        $(".hide").hide();
    } 
    $(".dropdown-challenge").slideDown("fast")
});

$(document).on("click",".click-different",function() {
    if ($(this).closest(".dropdown-different").length ===0) { 
        $(".hide").hide();
    } 
    $(".dropdown-different").slideDown("fast")
});
$(document).on("click",".click-learn",function() {
    if ($(this).closest(".dropdown-learn").length ===0) { 
        $(".hide").hide();
    } 
    $(".dropdown-learn").slideDown("fast")
});

$(document).on("click",".click-plans",function() {
    if ($(this).closest(".dropdown-plans").length ===0) { 
        $(".hide").hide();
    } 
    $(".dropdown-plans").slideDown("fast")
});
