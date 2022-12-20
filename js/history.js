$(document).ready(function () {
    $('.cover1').hide()
    $('#history>ul>li').mouseenter(function(){
        $(this).find('.cover1').show()
    })

    
    $('#history>ul>li').mouseleave(function(){
        $(this).find('.cover1').hide()
     
    })

    
});
