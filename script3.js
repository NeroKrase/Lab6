$(document).ready(function () {
    let i = 1;
    let timer = 0;
    $('#start').click(function(e) {
        let $this = $(this);

        if($this.hasClass("startTimer")){
            $this.removeClass("startTimer").addClass("stopTimer");
            timer = setInterval(function () {
                let minutes = Math.floor(i / 60);
                let seconds = i % 60;
                if(minutes.toString().length === 0){
                    minutes = "00";
                }
                if(minutes.toString().length === 1){
                    minutes = "0" + minutes;
                }
                if(seconds.toString().length === 1){
                    seconds = "0" + seconds;
                }
                $('#watch').text(minutes + ":" + seconds);
                i++;
            }, 1000);
        } else {
            $this.removeClass("stopTimer").addClass("startTimer");
            clearInterval(timer);
        }
    });

    $('#reset').click(function(e) {
        i = 1;
        $('#watch').text("00:00");
    });
});