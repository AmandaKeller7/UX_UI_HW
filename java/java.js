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
        name = $("#name").val();
        // get the email field
        email = $("#email").val();
        // get the body
        body = $("#emailBody").val();

        if (name && body && emailReg.test(email))
        {
            // TODO: add logic to send email and handle any submission errors
            clicked=true;
            $(this).addClass("submitSent");
            
            resetErrors();

            $(this).addClass("sentButton");
        } else
        {
            resetErrors();
            // Something was missing or incorrect.  Display error.
            message = ""
            if (!name)
            {
                message = "Name is empty. ";
                $("#name").addClass("inputError");
            }
            if (!email)
            {
                message += "Email is empty. ";
                $("#email").addClass("inputError");
            }
            if (!emailReg.test(email))
            {
                message += "Email address invalid. ";
                $("#email").addClass("inputError");
            }
            if (!body)
            {
                message += "Message is empty. ";
                $("#emailBody").addClass("inputError");
            }
            $("#error").attr("placeholder", message);

            clicked=false;
        }


    });
}

function resetErrors()
{
    $("#name").removeClass("inputError");
            $("#email").removeClass("inputError");
            $("#emailBody").removeClass("inputError");
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