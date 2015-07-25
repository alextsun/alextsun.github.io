
$(document).ready(function() {

    // load correct html based on user click
    $("#cssmenu li").click(function() {
        var id = this.id;
        if (id !== "") {
            var file = id + ".html";
            $.ajax({
                url: file,
                type: "GET",
                success: function(result) {
                    $("#content").html(result);
                }
            });
        }
    });
});
