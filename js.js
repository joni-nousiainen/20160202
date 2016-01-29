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

var finishMusic = null;

function finish() {
    showPart('finish');

    if (finishMusic == null) {
        finishMusic = new Audio('http://wav.urbandictionary.com/rickrolled-33940.wav');
    }

    if (finishMusic.paused) {
        finishMusic.play()
    }
}

$(document).ready(function () {

    $('input').keypress(function(e) {
        if(e.keyCode == 13) {
            e.preventDefault();
        }
    });

    $('#birthYear').bind('change paste keyup', function () {
        /*
            1984, duh! :)
         */
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

    $('#televisionNumber').bind("change paste keyup", function() {
        /*
            TV ilman katsojia on pelkkä nolla...
            Nolla, nolla, nolla!
         */
        validateField(this, '0000');
    });

    $('#fusePanelNumber').bind("change paste keyup", function() {
        /*
            Suorituksesi tähän mennessä
            on ihan 10/10.
         */
        validateField(this, '1010');
    });

    $('#drinkingCupNumber').bind("change paste keyup", function() {
        /*
            hau hau
            hau hau hau hau
            hau
            hau hau hau
         */
        validateField(this, '2413');
    });

    $('.hint-trigger').click(function () {
        showHint();
    });

    showPart('start');

});