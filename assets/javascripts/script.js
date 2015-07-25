
$(document).ready(function() {

    // initially start w/ home
    loadContent("home");

    // when click on tab, load content
    $("#cssmenu li").click(function() {
        loadContent(this.id);
    });

    $("#accordion").accordion({
        collapsible: true
    });
});

// load content for tab and change highlights
function loadContent(id) {
    if (id !== "" && id !== "coursework") {
        var file = id + ".html";
        $.ajax({
            url: file,
            type: "GET",
            success: function(result) {
                $("#content").html(result);
                if (id == 'cse' || id == 'math' || id == 'stat') {
                    $( ".accordion" ).accordion({
                        active: false,
                        collapsible: true
                    });
                }
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