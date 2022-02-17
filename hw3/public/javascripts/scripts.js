//Tony Hayden


document.getElementById('buttonID').onclick = function() {
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

/* For some reason, this code does not work and I have spent about 8 hours trying to figure it out.
 * It should work, but it doesn't. The post order is correct, but doesn't work. There are no jQuery/JS issues
 * In inspect element when the page loads. The functions about work just fine.*/
document.getElementById('dropbutton').onclick = function() {
    //The following code was found here: https://stackoverflow.com/questions/13437446/how-to-display-selected-item-in-bootstrap-button-dropdown-title
    $('.dropdown').each(function(key, dropdown) {
        var $dropdown = $(dropdown);
        $dropdown.find('.dropdown-content a').on('click', function() {
            $dropdown.find("#dropbutton").text($(this).text()).append('');
        });
    });
    
    $("#orderList").empty();

    //Code below to handle the post request of the JSON
    $.post('./orders', function(data, status, xhr) {
        for(var i = 1, x = data.length; i < x; i++) {
            var order = data[i];
            $("#numberBought").append("<li>" + order.quantity + " " + order.topping + "</li>");
        }
    });
}