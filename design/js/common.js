$(function() {
    var $Width = $(window).width();
    var $Height = $(window).height();
    
    //--Load components--//
    $('#nav').load('components/inc_nav.html');
    $('#footer').load('components/inc_footer.html',function(){
        $('.email').on('click',function(){
            var $temp = $("<input>");
                $(".email").append($temp);
                $temp.val('seiyuuqueen@gmail.com').select();
                document.execCommand("copy");
                $temp.remove();
                $('span.ps').addClass('alert').text('( 已複製mail )')
                setTimeout(function() {
                    $('span.ps').removeClass('alert').text('( 點擊即可複製mail )')
                },1050)
        })
        $('.footer-show').hide();
        $('.footer-trigger').on('click', function(){
            $('.footer-show').slideToggle(500,'swing');
            $('.footer').toggleClass('active')
        })
    });
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