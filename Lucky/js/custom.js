/* *******************
    OTP-Code
******************** */
var verificationCode = [];
$(".otp_code input[type=text]").keyup(function (e) {

    // Get Input for Hidden Field
    $(".otp_code input[type=text]").each(function (i) {
        verificationCode[i] = $(".otp_code input[type=text]")[i].value;
        $('#verificationCode').val(Number(verificationCode.join('')));
    });


    if ($(this).val() > 0) {
        if (event.key == 1 || event.key == 2 || event.key == 3 || event.key == 4 || event.key == 5 || event.key == 6 || event.key == 7 || event.key == 8 || event.key == 9 || event.key == 0) {
            $(this).next().focus();
        }
    } else {
        if (event.key == 'Backspace') {
            $(this).prev().focus();
        }
    }

}); // keyup

$('.otp_code input').on("paste", function (event, pastedValue) {
    console.log(event)
    $('#txt').val($content)
    console.log($content)
    //console.log(values)
});

$editor.on('paste, keydown', function () {
    var $self = $(this);
    setTimeout(function () {
        var $content = $self.html();
        $clipboard.val($content);
    }, 100);
});

