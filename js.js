function showPart (part) {
    $('.part').hide();
    $('#' + part).show();
}

$(document).ready(function () {

    showPart('doubt');

});