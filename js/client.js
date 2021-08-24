$(function(){
    // preload audio
    var toast = new Audio('media/toast.wav');

    $('.code').on('click', function(e) {
        e.preventDefault();
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();

        //add name and code
        var name = $(this).data('name');
        var code = $(this).data('code');
        $('#productName').text(name);
        $('#productCode').text(code);

        $('#toast').toast({ autohide: false }).toast('show');
    });

    $(document).on('keyup', function(e){
        if(e.key == "Escape") {
            $('#toast').toast('hide');
        }
    });
});