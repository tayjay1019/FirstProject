$(function(){
    $('#birthday').pickadate({ format: 'mmmm, d' });
});

// uncheck all checkboxes (FireFox)
$('.form-check-input').each(function () {
    $(this).prop('checked', false);
});

// event listener for check/uncheck
$('.form-check-input').on('change', function () {
    // make the image visible
    $('#' + this.id + 'Img').css('visibility', 'visible')
    // animate balloon in/out based on checkbox
    $(this).is(':checked') ?
     $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
     $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
});

let animations = ['animate__animated animate__bounch',
                    'animate__animated animate__flash',
                    'animate__animated animate__pulse',
                    'animate__animated animate__rubberBand',
                    'animate__animated animate__shakeX',
                    'animate__animated animate__shakeY',
                    'animate__animated animate__headShake',
                    'animate__animated animate__swing',
                    'animate__animated animate__tada',
                    'animate__animated animate__wobble',
                    'animate__animated animate__jello',
                    'animate__animated animate__heartBeat'];

var ran = Math.floor(Math.random() * animations.length);

$(function(){
    $('#birthdayTag').addClass(animations[ran]);
});