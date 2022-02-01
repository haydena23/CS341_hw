eventButton = function(event) {
    var text=$('textarea#notes').val();
                    var comp="vegan"
                    if(text.indexOf(comp) != -1) {
                        alert("Warning: Cheesecake contains dairy!")
                    }
                    else {
                        var num = $("#quantity").val();
                        var top = $("input[name=flavor]:checked").val().toLowerCase();
                        var details = $("#notes").val();
                        $("#form1").empty();
                        $("#form1").text("Thank you for your order! You ordered " + num + " " + top + " cheesecakes. The notes for your order are: " + details);
                    }
}

eventDropdown = function(event) {
    var $dropdown = $(dropdown);
    $dropdown.find('.dropdown-content a').on('click', function() {
        $dropdown.find("#dropbutton").text($(this).text()).append('');
    });
}

$(document).ready(function() {
    $(function() {
        $("button").click(eventButton);
    });
});