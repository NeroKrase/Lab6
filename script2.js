$(document).ready(function () {
    $.getJSON('http://dummy.restapiexample.com/api/v1/employees', function (data) {
        data.data.forEach(obj => {
            Object.entries(obj).forEach(([key, value]) => {
                $('body').append($('<div>', {
                    text: key + ": " + value
                }));
            });
            $('body').append($('<br>'));
        });
    });
});