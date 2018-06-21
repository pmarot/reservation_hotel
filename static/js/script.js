$('document').ready(function () {

    var val1 = $('#id-hotel').val();
    var val2 = $('#name-hotel').val();
    var val3 = $('#img-hotel').val();
    var val4 = $('#mark-hotel').val();
    var val5 = $('#secteur-hotel').val();

    // A REVOIR
    
    $('#add').click(function () {
        $.ajax({
            url: 'http://localhost:4013/update',
            method: "PUT",
            data: { donnee1: val1, donnee2: val2, donnee3: val3, donnee4: val4, donnee5: val5 },
            success: function (data) {

                console.log(data);

            }
        });
    });
})