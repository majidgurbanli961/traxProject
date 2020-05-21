$(document).ready(function () {

    // this function add active class to nav bar succesfully
    function navBarActiveAdder() {
        $(document).on('click', '.right-nav-bar li', function () {
            let navSpans = [];
            navSpans = $('.right-nav-bar span').toArray();
            for (let i = 0; i < navSpans.length; i++) {
                if ($(navSpans[i]).hasClass('nav-bar-active')) {
                    $(navSpans[i]).removeClass('nav-bar-active');
                }

            }
            $(this).children(':first').addClass('nav-bar-active');
        })
    }
    // this function animate Hamburger menu
    function hambMenuAnimation() {
        console.log('bashladi')
        $(document).on('mouseenter', '.hamburger-menu', function () {
            console.log("Ozudu");
            
            $('#hamb-2').animate({ width: '24px' });
            $('#hamb-3').animate({ width: '24px' });


        })
    }
    // this function animate return Hamburger Menu
    function hambMenuReturnAnimation() {
        $(document).on('mouseleave', '.hamburger-menu', function () {

            $('#hamb-2').animate({ width: '18px' });
            $('#hamb-3').animate({ width: '10.8px' });


        })

    }
    // bring hamburger menu content
    function hambContentCaller() {
        let scrollTop=$(document).scrollTop();
        console.log(scrollTop);
        $(document).scroll(function(){
            scrollTop=$(document).scrollTop();
            
        })
        
        $(document).on('click', '.hamburger-menu', function () {
            $('.hamburger-menu-content').animate({
                left: '60%',
                top:`${scrollTop}px`
            }, 300)
        })
    }
    // exit hamburger menu content
    function hambContentExit() {
        $(document).on('click', '.exit-click', function () {
            $('.hamburger-menu-content').animate({
                left: '100%'
            }, 300)
        })
    }
    // do animation of border from left to right
    function borderAnimationPlus() {
        $(document).on('mouseenter', '.menu-lists ul li', function () {
            if ($(this).next().hasClass('active-li-border')) {
                console.log("Entered");

                return
            }
            $(this).next().css("display", 'block');
            let mySpan = $(this).children().toArray();


            $(this).next().animate({
                width: `${$(mySpan[0]).innerWidth()}px`
            }, 500)


        })

    }
    // do animation from righ to left
    function borderAnimationMinus() {
        $(document).on('mouseleave', '.menu-lists ul li', function () {
            if ($(this).next().hasClass('active-li-border')) {
                return
            }

            $(this).next().animate({
                width: '00%'
            }, 500)
            let variable = this;
            //    $(this).next().css("display",'none');
            setTimeout(function () {


                $(variable).next().css("display", 'none');

            }, 500)


        })

    }
    // add active clas in click
    function borderActiveAdder() {
        let firstSpan = $('.first-li').children().toArray();



        $('.first-li-border').css('width', `${$(firstSpan[0]).innerWidth()}px`)
        $('.first-li-border').css('display', 'block');
        $('.first-li-border').addClass('active-li-border');
        $(document).on('click', '.menu-lists ul li', function () {
            let liArray = $('.menu-lists ul li').toArray();
            let borderArrays = $('.li-border').toArray();
            let index = parseInt($(this).attr('id')) - 100;
            for (let i = 0; i < liArray.length; i++) {
                $(borderArrays[i]).removeClass('active-li-border')
                $(borderArrays[i]).css('width', '0px');
                $(borderArrays[i]).css('display', 'none');

            }
            $(borderArrays[index]).addClass('active-li-border')

            $(borderArrays[index]).css('width', `${$(this).children(':first').innerWidth()}px`)
            $(borderArrays[index]).css('display', 'block');



        })

    }
    // do text slider
    function textSlider() {
        // $( ".first-h1" ).slideUp(2000);
        let arrayOfText = [$('.text-slider-first'), $('.text-slider-second'), $('.text-slider-third')];
        let counter = 0;

        $(document).on('click', '.right-button', function () {
            counter = 2;
            console.log(counter);
            for (let i = 0; i < arrayOfText.length; i++) {
                $(arrayOfText[i]).hide();
            }
            $(arrayOfText[2]).show();


        })
        $(document).on('click', '.middle-button', function () {
            counter = 0;
            for (let i = 0; i < arrayOfText.length; i++) {
                $(arrayOfText[i]).hide();
            }
            $(arrayOfText[0]).show();


        })
        $(document).on('click', '.left-button', function () {
            counter = 0;
            for (let i = 0; i < arrayOfText.length; i++) {
                $(arrayOfText[i]).hide();
            }
            $(arrayOfText[0]).show();


        })

        setInterval(() => {
            // if($('.carousel-indicators').hasClass('stop')){
            //     return
            // }
            counter++;
            $(".first-h1").slideDown(1000);
            $(".second-h1").slideDown(1000);
            $(".third-h1").slideDown(1000);
            if (counter == 3) {
                counter = 0;
            }
            if (counter == (-1)) {
                counter = 2;
            }

            for (let i = 0; i < arrayOfText.length; i++) {
                $(arrayOfText[i]).hide();
            }


            $(arrayOfText[counter]).show(500);

            setTimeout(() => {
                $(".first-h1").slideUp(1000);
                $(".second-h1").slideUp(1000);
                $(".third-h1").slideUp(1000);




            }, 4000);



        }, 5000);








    }
    function preventAuto() {
        $(document).on('click', '.carousel-indicators li', function () {
            $('.carousel-indicators').addClass('stop');

        })
    }
    function navBarFixed() {
        $(document).scroll(function () {
            if ($(document).scrollTop() >= 300) {
                $('.nav-bar').addClass('nav-bar-fixed');
                $('.nav-bar-fixed').css('position', 'fixed');
                $('.hamburger-menu div').css('border-color', 'black');
                $('.nav-bar').css('top', '-20px');
                $('.left-nav-bar img:first-child').css('display','none');
                $('.left-nav-bar img:nth-child(2)').css('display','block');
                $('.left-nav-bar img:nth-child(2)').css('position','relative');

                $('.left-nav-bar img:nth-child(2)').css('left','60px');


                console.log();
                
                // $('.nav-bar-fixed').css('transition',' top 1s linear ')

            }


            if ($(document).scrollTop() >= 300) {
                $('.nav-bar').addClass('nav-bar-fixed');
                $('.hamburger-menu div').css('border-color', 'black');
                $('.nav-bar').css('top', '-20px');
                $('.left-nav-bar img:nth-child(2)').css('display','block');
                $('.left-nav-bar img:nth-child(2)').css('position','relative');

                $('.left-nav-bar img:nth-child(2)').css('left','60px');

                // $('.nav-bar-fixed').css('transition','top 1s linear ')

            }
            if ($(document).scrollTop() < 300) {
                $('.nav-bar').removeClass('nav-bar-fixed');
                $('.nav-bar').css('position', 'absolute');
                $('.nav-bar').css('top', '0px')
                $('.hamburger-menu div').css('border-color', 'white');
                $('.left-nav-bar img:nth-child(2)').css('display','none');
                $('.left-nav-bar img:first-child').css('display','block');


                // $('.nav-bar-fixed').css('transition','top 1s linear ')

            }
        })

    }
    function toTop() {
        // console.log(input);

        console.log('Yari ozudu');

        $(document).on('mouseover', '.theme-options h3', function () {
            $(this).prev().animate({
                top: '-20px'
            }, 300)


        })
        $(document).on('mouseleave', '.theme-options h3', function () {
            $(this).prev().animate({
                top: '0px'
            }, 300)


        })
        $(document).on('mouseover', '.customisation h3', function () {
            $(this).prev().animate({
                top: '-20px'
            }, 300)


        })
        $(document).on('mouseleave', '.customisation h3', function () {
            $(this).prev().animate({
                top: '0px'
            }, 300)


        })
        $(document).on('mouseover', '.powerful h3', function () {
            $(this).prev().animate({
                top: '-20px'
            }, 300)


        })
        $(document).on('mouseleave', '.powerful h3', function () {
            $(this).prev().animate({
                top: '0px'
            }, 300)


        })
        $(document).on('mouseover', '.documentation h3', function () {
            $(this).prev().animate({
                top: '-20px'
            }, 300)


        })
        $(document).on('mouseleave', '.documentation h3', function () {
            $(this).prev().animate({
                top: '0px'
            }, 300)


        })


    }
    function middleSliderHover() {
        $(document).on('mouseover', '.middle-slider-content', function () {
            $(this).children('.middle-slider-hovered').slideDown();

            $(this).children('.slide-down').children('.slide-down-text').slideUp();







        })
        $(document).on('mouseleave', '.middle-slider-content', function () {
            $(this).children('.middle-slider-hovered').slideUp();
            $(this).children('.slide-down').children('.slide-down-text').slideDown();





        })
    }
    function sliderContentResizer() {
        window.onresize = displayWindowSize;
        function displayWindowSize() {
            let customWidth = window.innerWidth;
            if (customWidth < 1200) {


            }
        }
        // console.log(customWidth);


    }
    function buttonActiveChanger() {
        $(document).on('click', '.pricing-offer-button', function () {
            let buttons = $('.pricing-offer-button').toArray();
            for (let i = 0; i < buttons.length; i++) {
                $(buttons[i]).removeClass('active-price-button');

            }
            $(this).addClass('active-price-button');
        })

    }
    function lastSliderColorAdder(){
        $(document).on('mouseover','.last-slider-content',function(){
          
            $(this).children('.last-slider-content-content').removeClass('last-slider-content-content-passive')
            $(this).children('.last-slider-content-content').addClass('last-slider-content-content-active')

            $(this).children('.last-slider-content-content').children('.last-slider-bottom').children('.choose-plan').css('background-color','white');
            $(this).children('.last-slider-content-content').children('.last-slider-bottom').children('.choose-plan').css('color','black');
            $(this).children('.last-slider-content-content').children('.last-slider-top').children('h3').css('color','white')

            

            
        })
    }
    function lastCliderColorRemover(){
        $(document).on('mouseleave','.last-slider-content',function(){
          
            $(this).children('.last-slider-content-content').removeClass('last-slider-content-content-active')
            $(this).children('.last-slider-content-content').addClass('last-slider-content-content-passive')

            $(this).children('.last-slider-content-content').children('.last-slider-bottom').children('.choose-plan').css('background-color','#24cdd5');
            $(this).children('.last-slider-content-content').children('.last-slider-bottom').children('.choose-plan').css('color','white');
            $(this).children('.last-slider-content-content').children('.last-slider-top').children('h3').css('color','#808080')
            

            
        })

    }
    function lastSliderNumberChanger(){
        let monthlyNumbers=[9.95,19.95,29.95,49.95];
        let yearlyNumbers=[89.95,179.55,269.55,449.55];
        let spans=[];

        spans=$('.last-slider-second h1').toArray();
        $(document).on('click','.second-pricing-button',function(){
            for(let i=0;i<spans.length;i++){
                hambMenuAnimation();
                $(spans[i]).empty();
                $(spans[i]).append(yearlyNumbers[i]);
            }
        })
        $(document).on('click','.first-pricing-button',function(){
            for(let i=0;i<spans.length;i++){
                $(spans[i]).empty();
                $(spans[i]).append(monthlyNumbers[i]);
            }
        })

    }
    function portfolioImageScaller(){
        $(document).on('mouseover','.animatable',function(){
            $(this).children('img').removeClass('portfolio-image-passive')
            $(this).children('img').addClass('portfolio-image-active')
            $(this).children('.hovered-blue').css('display','block')
            
        })
        $(document).on('mouseleave','.animatable',function(){
        
            $(this).children('img').removeClass('portfolio-image-active')
            $(this).children('img').addClass('portfolio-image-passive')
            $(this).children('.hovered-blue').css('display','none')

            
        })
    }
    function portfolioContentChanger(){
        let contents=[$('.portfolio-content-all'),$('.portfolio-content-digital'),$('.portfolio-content-design'),$('.portfolio-content-brand')];
        let index;
        $(document).on('click','.portfolio-content-text span', function(){
            index=parseInt($(this).attr('id'));
           for(let i=0;i<contents.length;i++){
               $(contents[i]).hide(1000);
           }
           $(contents[index]).show(1000);
            

        })
        
    }
    function portfolioSpanActiveAdder(){
        let spans=$('.portfolio-content-text span').toArray();
        console.log(spans);
        
        $(document).on('click','.portfolio-content-text span',function(){
            for(let i=0;i<spans.length;i++){
                $(spans[i]).removeClass('active-span-portfolio')
            }
            $(this).addClass('active-span-portfolio')
        })
    }
    function miniSlider(){
        let images=$('.mini-slider-photo img').toArray();
        console.log(images);
        let nameSpans=['John Smith','Hayden Wood','Kevin Miller','Alina Johanson'];
        let locationSpans=['UPWORK,New York','FIVVER, Italy','ENVATO, Australia','INTEL,Sidney'];
        let counter=0;
        $(document).on('click','.right-angel',function(){
            counter++;
            if(counter==nameSpans.length){
                counter=0;
            }
            for(let i=0;i<images.length;i++){
                $(images[i]).removeClass('active-image');
            }
           $(images[counter]).addClass('active-image');
           $('.name-span').text(nameSpans[counter]);
           $('.location-span').text(locationSpans[counter]);

        })
        $(document).on('click','.left-angel',function(){
            counter--;
            if(counter==-1){
                counter=nameSpans.length-1;
            }
            for(let i=0;i<images.length;i++){
                $(images[i]).removeClass('active-image');
            }
           $(images[counter]).addClass('active-image');
           $('.name-span').text(nameSpans[counter]);
           $('.location-span').text(locationSpans[counter]);


        })
        
    }
    function miniSliderPhotoIncreaser(){
        $(document).on('mouseover','.mini-slider-photo',function(){
            $('.mini-slider-photo .active-image').removeClass('mini-slider-passive');

            $('.mini-slider-photo .active-image').addClass('mini-slider-active');

            
        })
        $(document).on('mouseleave','.mini-slider-photo',function(){
            $('.mini-slider-photo .active-image').removeClass('mini-slider-active');

            $('.mini-slider-photo .active-image').addClass('mini-slider-passive');

            
        })
    }
    function blogImageResizer(){
        $(document).on('mouseover','.blog-main',function(){
            $(this).children('.blog-main-top').children('img').removeClass('blog-image-passive');

            $(this).children('.blog-main-top').children('img').addClass('blog-image-active');
        })
        $(document).on('mouseleave','.blog-main',function(){
            $(this).children('.blog-main-top').children('img').removeClass('blog-image-active');

            $(this).children('.blog-main-top').children('img').addClass('blog-image-passive');
        })

    }
    function footerHover(){
        $(document).on('mouseover','.footer-third-bottom ul li',function(){
            $(this).removeClass('footer-passive');

            $(this).addClass('footer-active');
        })
        $(document).on('mouseleave','.footer-third-bottom ul li',function(){
            $(this).removeClass('footer-active');

            $(this).addClass('footer-passive');
        })
    }
    function lastFunction(){
        let sections=[$('#slider'),$('#cup'),$('#pricing'),$('#port'),$('#blog'),$('#contact')];
        let index;
       $(document).on('click','.right-nav-bar ul li',function(){
           index=parseInt($(this).attr('id'))-1000;
           $('html, body').animate({
            scrollTop: $(sections[index]).offset().top
        }, 2000);
           

       })
       $(document).on('click','.menu-lists ul li',function(){
        index=parseInt($(this).attr('id'))-100;
        $('html, body').animate({
         scrollTop: $(sections[index]).offset().top
     }, 2000);
        

    })

        
    }
    
        lastFunction();
    navBarActiveAdder();
    hambMenuAnimation();
    hambMenuReturnAnimation();
    hambContentCaller();
    hambContentExit();
    borderAnimationPlus();
    borderAnimationMinus();
    borderActiveAdder();
    textSlider();
    preventAuto();
    navBarFixed();
    toTop();
    middleSliderHover();
    sliderContentResizer();
    buttonActiveChanger();
    lastSliderColorAdder();
    lastCliderColorRemover();
    lastSliderNumberChanger();
    portfolioImageScaller();
    portfolioContentChanger();
    portfolioSpanActiveAdder();
    miniSlider();
    miniSliderPhotoIncreaser()
    blogImageResizer();
    footerHover();
    // scroller();
    
    $('.your-class').slick({
        "slidesToShow": 4, "slidesToScroll": 1,
        responsive: [
            {
                breakpoint: 1038,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1

                }
            },
            {
                breakpoint: 765,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1

                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
            }
        ]
    });
    $('.last-slider').slick({
        "slidesToShow": 3, "slidesToScroll": 1,
        responsive: [
            {
                breakpoint: 1038,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1

                }
            },
            {
                breakpoint: 765,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1

                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
            }
        ]
    });
    $('.en-last-slider-content').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive:[
            {
                breakpoint: 987,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1

                }

            },
            {
                breakpoint: 751,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1

                }

            }
        ]
       
      });

      $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: false,
        cursor: 'grab',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
        ]
        
      });







})