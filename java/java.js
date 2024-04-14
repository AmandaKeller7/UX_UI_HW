// Initialize the page
$(document).ready(function () {
    initButton();
    initCardHover();
});


// ** Set up event handlers **

// Send Button
function initButton() {
    var clicked = false;
    var emailReg = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    $(":button").hover(function () {
        if (!clicked) {
            $(this).addClass("submitHover");
        }
    },
        function () {
            if (!clicked) {
                $(this).removeClass("submitHover");
            }
        });

        
    $(":button").click(function () {
        // get the name field
        var name = $("#name").val();
        // get the email field
        var email = $("#email").val();
        // get the body
        var body = $("#emailBody").val();

        if (name && body && emailReg.test(email))
        {
            // TODO: add logic to send email and handle any submission errors - backend
            clicked=true;
            $(this).addClass("submitSent");
            $("#sentIcon").addClass("submitSentIcon")
            $("#sentIcon").addClass("animator")
            resetErrors();

            $(this).addClass("sentButton");
        } else
        {
            resetErrors();
            // Something was missing or incorrect.  Display error.
            var message = '<p class="error">'
            if (!name)
            {
                message += "Name is missing. ";
                $("#name").addClass("inputError");
            }
            if (!email)
            {
                message += "Email is missing. ";
                $("#email").addClass("inputError");
            }
            if (!emailReg.test(email))
            {
                message += "Email address is invalid. ";
                $("#email").addClass("inputError");
            }
            if (!body)
            {
                message += "Message is missing. ";
                $("#emailBody").addClass("inputError");
            }
            message +="</p>";
            $("#error").append(message);
            $("#errorimg").removeClass("hidden");
            $("#error").removeClass("hidden");

            clicked=false;
        }


    });
}

function resetErrors()
{
    $("#name").removeClass("inputError");
    $("#email").removeClass("inputError");
    $("#emailBody").removeClass("inputError");
    $("#errorimg").addClass("hidden");
    $("#error").addClass("hidden");
    $("#error").empty();
}

// Card hover
function initCardHover() {
    $(".blueDiv").hover(function () {
        $(this).addClass("cardHover");
    },
        function () {
            $(this).removeClass("cardHover");
        });

    $(".greenDiv").hover(function () {
        $(this).addClass("cardHover");
    },
        function () {
            $(this).removeClass("cardHover");
        });

}