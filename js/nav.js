$(document).ready(function () {
    $('.sub_mn_area ').hide();
  $('.sub_mn_area >ul').hide();

    let key = true;
  console.log(key);
  
  $('#header_in nav').mouseenter(function () {
   if (key == true) {
    key = false;
   console.log(key);
    $('.sub_mn_area').show().css({ height: '0px' }).animate({ height: '80px' });
    }
    $('.sub_mn_area >ul').show()
            });
 $('.sub_mn_area').mouseleave(function () {
                key = true;
                console.log(key);
   $(this).css({ height: '80px' }).animate({ height: 0 })
   $('.sub_mn_area >ul').hide();
 });
  
  
  $('.main_mn >li ').hover(
            function(){
                $(this).find('a').addClass('act1');
            },
            function(){
                $(this).find('a').removeClass('act1');
            }
        )
  
  

});
