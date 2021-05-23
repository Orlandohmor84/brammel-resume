$(document).ready(function(){

    AOS.init();

    $('#view-resume-link').click(function(){
        console.log('View reume link clicked.')
        $('#desktop').hide();
        $('#mobile').show();
    });
});

