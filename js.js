function showPart (part) {
    $('.part').hide();
    $('#' + part).show();
}

$(document).ready(function () {

    $('#birthYear').bind("change paste keyup", function() {
        if ('' == $(this).val()) {
            $('#mystery1 .alert-success').addClass('hidden');
            $('#mystery1 .alert-danger').addClass('hidden');
            $('#mystery1 .forward').prop('disabled', true);
        }
        else if ('1984' == $(this).val()) {
            $('#mystery1 .alert-success').removeClass('hidden');
            $('#mystery1 .alert-danger').addClass('hidden');
            $('#mystery1 .forward').prop('disabled', false);
        }
        else {
            $('#mystery1 .alert-success').addClass('hidden');
            $('#mystery1 .alert-danger').removeClass('hidden');
            $('#mystery1 .forward').prop('disabled', true);
        }
    });

    showPart('mystery1');

});