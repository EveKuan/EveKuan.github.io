$(function() {
    var $Width = $(window).width();
    var $Height = $(window).height();
    
    //--Load components--//
    $('#nav').load('components/inc_nav.html');
    $('#footer').load('components/inc_footer.html');
    $('#back').load('components/inc_back.html');
    
   
    $('.works-tab').find('li').on('click',function(){
    	var N = $(this).index()
    	$(this).addClass('now').siblings().removeClass('now')
    	$('.works-box-cont').eq(N).fadeIn(300).siblings().fadeOut(10)
    })

   //resize
   $(window).on('resize', function (){
       
    });

})