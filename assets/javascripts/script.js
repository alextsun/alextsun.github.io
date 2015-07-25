
$(document).ready(function() {

    // initially start w/ home
    loadContent("home");

    // when click on tab, load content
    $("#cssmenu li").click(function() {
        loadContent(this.id);
    });

    $("#cse, #math, #stat").click(function() {
        $(".accordion").accordion();
    });
});

// load content for tab and change highlights
function loadContent(id) {
    if (id !== "") {
        var file = id + ".html";
        $.ajax({
            url: file,
            type: "GET",
            success: function(result) {
                $("#content").html(result);
            }
        });
        swapSelectionTo(id);
    }
}

// change what's highlighted on menu
function swapSelectionTo(id) {
    $('#cssmenulist').children().each(function () {
        $(this).removeClass("active");
    });
    $("#" + id).addClass("active");
}