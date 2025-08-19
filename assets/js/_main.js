/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function(){
   // Sticky footer
  var bumpIt = function() {
      $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
    },
    didResize = false;

  bumpIt();

  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);
  // FitVids init
  $("#main").fitVids();

  // init sticky sidebar
  $(".sticky").Stickyfill();

  var stickySideBar = function(){
    var show = $(".author__urls-wrapper button").length === 0 ? $(window).width() > 925 : !$(".author__urls-wrapper button").is(":visible");
    // console.log("has button: " + $(".author__urls-wrapper button").length === 0);
    // console.log("Window Width: " + windowWidth);
    // console.log("show: " + show);
    //old code was if($(window).width() > 1024)
    if (show) {
      // fix
      Stickyfill.rebuild();
      Stickyfill.init();
      $(".author__urls").show();
    } else {
      // unfix
      Stickyfill.stop();
      $(".author__urls").hide();
    }
  };

  stickySideBar();

  $(window).resize(function(){
    stickySideBar();
  });

  // Follow menu drop down

  $(".author__urls-wrapper button").on("click", function() {
    $(".author__urls").fadeToggle("fast", function() {});
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // init smooth scroll
  $("a").smoothScroll({offset: -20});

  // add lightbox class to all image links
  $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    // disableOn: function() {
    //   if( $(window).width() < 500 ) {
    //     return false;
    //   }
    //   return true;
    // },
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

  // 添加像素风about-me部分的滚动处理
  function setupAboutMeScrolling() {
    console.log('Setting up pixel about-me scrolling...');
    const pixelAboutSection = $('#pixel-about-me');
    const mastheadWrapper = $('#masthead-wrapper');
    const pageAboutBackground = $('.page-about_background');
    const startGameButton = $('#startGameButton');
    
    if (pixelAboutSection.length === 0) {
      console.log('Pixel about-me section not found');
      return;
    }
    
    console.log('Pixel about-me section found:', pixelAboutSection);
    
    let isScrolling = false;
    
    // 初始状态：显示像素风界面，隐藏正常内容
    mastheadWrapper.hide();
    pageAboutBackground.hide();
    pixelAboutSection.show();
    
    // 处理Start按钮点击事件
    startGameButton.on('click', function(e) {
      e.preventDefault();
      console.log('Start button clicked - switching to normal content');
      
      if (isScrolling) return; // 防止重复触发
      
      isScrolling = true;
      
      // 切换到正常内容
      pixelAboutSection.fadeOut(400, function() {
        mastheadWrapper.fadeIn(300);
        pageAboutBackground.show();
        $('html, body').scrollTop(0);
        setTimeout(() => {
          isScrolling = false;
        }, 300);
      });
    });
    
    // 处理滚动事件（保留滚动功能作为备选）
    $(window).on('wheel', function(e) {
      const scrollTop = $(window).scrollTop();
      
      console.log('Scroll info:', {
        scrollTop,
        deltaY: e.originalEvent.deltaY,
        isScrolling,
        pixelVisible: pixelAboutSection.is(':visible')
      });
      
      if (isScrolling) return; // 防止重复触发
      
      // 如果像素风界面可见且向下滚动
      if (pixelAboutSection.is(':visible')) {
        if (e.originalEvent.deltaY > 0) { // 向下滚动
          console.log('Switching to normal content');
          e.preventDefault();
          isScrolling = true;
          
          // 切换到正常内容
          pixelAboutSection.fadeOut(300, function() {
            mastheadWrapper.fadeIn(200);
            pageAboutBackground.show();
            $('html, body').scrollTop(0);
            setTimeout(() => {
              isScrolling = false;
            }, 200);
          });
        }
      }
      // 如果正常内容可见且在顶部向上滚动
      else if (scrollTop <= 50) {
        if (e.originalEvent.deltaY < 0) { // 向上滚动
          console.log('Switching to pixel content');
          e.preventDefault();
          isScrolling = true;
          
          // 切换到像素风界面
          $('html, body').scrollTop(0);
          mastheadWrapper.fadeOut(200);
          pageAboutBackground.hide();
          pixelAboutSection.fadeIn(300, function() {
            setTimeout(() => {
              isScrolling = false;
            }, 200);
          });
        }
      }
    });
    
    // 点击滚动提示
    $('.pixel-scroll-hint').on('click', function(e) {
      console.log('Pixel scroll hint clicked');
      if (!isScrolling && pixelAboutSection.is(':visible')) {
        isScrolling = true;
        pixelAboutSection.fadeOut(300, function() {
          mastheadWrapper.fadeIn(200);
          pageAboutBackground.show();
          $('html, body').scrollTop(0);
          setTimeout(() => {
            isScrolling = false;
          }, 200);
        });
      }
    });
    
    // 键盘事件
    $(document).on('keydown', function(e) {
      if (isScrolling) return;
      
      if (pixelAboutSection.is(':visible')) {
        if (e.keyCode === 40 || e.keyCode === 32) { // 下箭头或空格
          console.log('Keyboard: switching to normal content');
          e.preventDefault();
          isScrolling = true;
          pixelAboutSection.fadeOut(300, function() {
            mastheadWrapper.fadeIn(200);
            pageAboutBackground.show();
            $('html, body').scrollTop(0);
            setTimeout(() => {
              isScrolling = false;
            }, 200);
          });
        }
      } else if ($(window).scrollTop() <= 50) {
        if (e.keyCode === 38) { // 上箭头
          console.log('Keyboard: switching to pixel content');
          e.preventDefault();
          isScrolling = true;
          $('html, body').scrollTop(0);
          mastheadWrapper.fadeOut(200);
          pageAboutBackground.hide();
          pixelAboutSection.fadeIn(300, function() {
            setTimeout(() => {
              isScrolling = false;
            }, 200);
          });
        }
      }
    });
    
    // 触摸事件（移动端）
    let touchStartY = 0;
    let touchStartTime = 0;
    
    $(document).on('touchstart', function(e) {
      touchStartY = e.originalEvent.touches[0].clientY;
      touchStartTime = Date.now();
    });
    
    $(document).on('touchend', function(e) {
      if (isScrolling) return;
      
      const touchEndY = e.originalEvent.changedTouches[0].clientY;
      const touchDiff = touchStartY - touchEndY;
      const touchTime = Date.now() - touchStartTime;
      
      // 快速滑动且距离足够
      if (Math.abs(touchDiff) > 50 && touchTime < 300) {
        if (pixelAboutSection.is(':visible') && touchDiff > 0) {
          // 向上滑动 - 切换到正常内容
          e.preventDefault();
          isScrolling = true;
          pixelAboutSection.fadeOut(300, function() {
            mastheadWrapper.fadeIn(200);
            pageAboutBackground.show();
            $('html, body').scrollTop(0);
            setTimeout(() => {
              isScrolling = false;
            }, 200);
          });
        } else if (!pixelAboutSection.is(':visible') && $(window).scrollTop() <= 50 && touchDiff < 0) {
          // 向下滑动 - 切换到像素风界面
          e.preventDefault();
          isScrolling = true;
          $('html, body').scrollTop(0);
          mastheadWrapper.fadeOut(200);
          pageAboutBackground.hide();
          pixelAboutSection.fadeIn(300, function() {
            setTimeout(() => {
              isScrolling = false;
            }, 200);
          });
        }
      }
    });
  }
  
  // 初始化滚动功能
  setupAboutMeScrolling();
});
