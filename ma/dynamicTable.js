$(document).ready(function() {

    /* $("table tr:first").css("background-color", "powderblue");
    $("table tr:nth-child(3)").css("background-color", "powderblue");
    $("table tr:nth-child(odd)").css("background-color", "powderblue"); */

    //$("table").prepend("<tr><td>Zero!</tr>");

    $("#prepend").click(function() {
        $("table").prepend("<tr><td>Zero!</tr>");
    });

    $("#after").click(function() {
        var itemString = "<tr><td>Here!</tr>";
        var item = $(itemString);
        /* item.hide(); */
        $("table tr:nth-child(2)").after(item)
    });

    $("#remove").click(function() {
        $("table tr:last").remove();
    });
});