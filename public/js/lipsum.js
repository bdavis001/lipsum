$(document).ready(function () {

    $.getJSON('/chevronlocked', genLip);
    $('form').submit(function (e) {
        e.preventDefault();
        $.post('/chevronlocked', {quantity: $('#quantity').val()} , genLip);
        this.reset();
    });

});

function genLip(lipsums) {
    $('#lipsumblock').empty();
    $.each(lipsums, function () {
    console.log(lipsums);
        $('<p>').html(this.result).appendTo('#lipsumblock');
    });
  
}
