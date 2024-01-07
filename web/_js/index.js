var toggleTime = 250; // milliseconds

$.when($.ready).then(function() {
    // Document is ready.

    $("#resume-link").click(function() {
        if ($("#projects-section").is(":visible")) {
            $('#projects-section').slideToggle(toggleTime, "swing", function() {
                $('#resume-section').slideToggle(toggleTime, "swing");
            }); 
        }
        else {
            $('#resume-section').slideToggle(toggleTime, "swing");
        }
    });

    $("#projects-link").click(function() {
        if ($('#resume-section').is(":visible")) {
            $('#resume-section').slideToggle(toggleTime, "swing", function () {
                $('#projects-section').slideToggle(toggleTime, "swing");
            });
        }
        else {
            $('#projects-section').slideToggle(toggleTime, "swing");
        }
    });
});

