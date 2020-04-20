$(document).ready(function () {
    $('#form').submit(function (e) {
        e.preventDefault();
        let name = $('#name-input').val();
        let email = $('#email-input').val();
        let message = $('#message-input').val();

        $(".error").remove();

        if(name.length < 1){
            $('#name-input').after('<span class="error">This field is required</span>');
        }
        if(message.length < 1){
            $('#message-input').after('<span class="error">This field is required</span>');
        }
        if(email.length < 1){
            $('#email-input').after('<span class="error">This field is required</span>');
        } else{
            let regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let validEmail = regEx.test(email);
            if(!validEmail){
                $('#email-input').after('<span class="error">Enter a valid email</span>');
            }
        }
        let data = JSON.stringify($("#form").serializeArray());
        $.post('index11.html', data);
    })
});