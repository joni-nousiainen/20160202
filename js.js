function showPart (part) {
    $('.part').hide();
    $('#' + part).show();
}

function validateField(fieldToValidate, expectedValue) {
    var value = $(fieldToValidate).val();
    if ('' === value) {
        $('.part:not(:hidden) .alert-success').addClass('hidden');
        $('.part:not(:hidden) .alert-danger').addClass('hidden');
        $('.part:not(:hidden) .forward').prop('disabled', true);
    }
    else if (expectedValue === value) {
        $('.part:not(:hidden) .alert-success').removeClass('hidden');
        $('.part:not(:hidden) .alert-danger').addClass('hidden');
        $('.part:not(:hidden) .forward').prop('disabled', false);
    }
    else {
        $('.part:not(:hidden) .alert-success').addClass('hidden');
        $('.part:not(:hidden) .alert-danger').removeClass('hidden');
        $('.part:not(:hidden) .forward').prop('disabled', true);
    }
}

function showHint() {
    $('.part:not(:hidden) .hint').toggleClass('hidden');
}

$(document).ready(function () {

    $('#birthYear').bind('change paste keyup', function () {
        validateField(this, '1984')
    });

    $('#thermometerNumber').bind("change paste keyup", function() {
        /*
            Täällä kuusipuisten seinien keskellä (6)
            on juotu kaksistaan (2)
            kolmosolutta ja (3)
            ykkösolutta. (1)
         */
        validateField(this, '6231');
    });

    $('.hint-trigger').click(function () {
        showHint();
    });

    showPart('mystery2');

});