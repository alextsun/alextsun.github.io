
$(document).ready(function() {

    // initially start w/ home
    loadContent("home");


    // when click on tab, load content
    $("#cssmenu li").click(function() {
       loadContent(this.id);
    });
});

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

function swapSelectionTo(id) {
    $('#cssmenulist').children("li").each(function () {
        console.log($(this) + "");
        $(this).removeClass("active");
    });
    $("#" + id).addClass("active");
}