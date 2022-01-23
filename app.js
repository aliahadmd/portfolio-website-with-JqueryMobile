$(function () {
    $("[data-role='footer']").toolbar();






// social media icon style.
    const trigger = document.querySelector("menu > .trigger");
    trigger.addEventListener('click', (e) => {
      e.currentTarget.parentElement.classList.toggle("open");
    });


  
//map API

var map1 = new BMap.Map("myMap1");
    var point1 = new BMap.Point(114.03, 22.32);
    map1.centerAndZoom(point1, 11);



    //Blog

    $('.card').on('click', function (e) {
        let card = $(e.currentTarget)
        let card_offset_scrolltop = $(card).offset().top - $(window).scrollTop()
        
        $(card).css('--data-offset-top', card_offset_scrolltop * -1 + 'px')
        
        $(card).toggleClass('active')
        
        let ratio = 480/420
        let height = $(window).height()
        height -= $(card).find('img').outerHeight() * ratio
        height -= $(card).find('h4').outerHeight() * ratio
        height /= ratio
        
        $(card).find('.content').css('height', height)
        
        if ($(card).hasClass('active')) {
          $('body').addClass('noscroll')
        } else {
          $('body').removeClass('noscroll')
        }
      })


      


   

    
})