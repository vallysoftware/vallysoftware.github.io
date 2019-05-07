;(function () {
  const START_SCREEN_STATE = 1;
  const RANGE_TRADE_SCREEN_STATE = 2;
  const KAELUM_SCREEN_STATE = 3;

  let btnRangeTradeOpen = document.getElementById('btn-range-trade-open');
  let btnRangeTradeClose = document.getElementById('btn-range-trade-close');
  let btnKaelumOpen = document.getElementById('btn-kaelum-open');
  let btnKaelumClose = document.getElementById('btn-kaelum-close');
  let currentScreenState = START_SCREEN_STATE;
  let blockedUpdateScreen = false;

  if (window.innerWidth < 570) {
    var bodyLeft = $('body').css('margin-left').replace('px', '');
    var containerLeft = $('#start-state').css('margin-left').replace('px', '');
    var left = parseInt(bodyLeft) + parseInt(containerLeft);
    $('#btn-range-trade-open, #btn-apla').css('padding-left', left + 'px');
  }
  /**
   * Adding event listeners
   */
  if (window.innerWidth > 800) {
    // btnRangeTradeOpen.addEventListener('mouseenter', mouseOverBtnRangeTrade);
    // btnRangeTradeClose.addEventListener('mouseleave', mouseOutBtnRangeTrade);
    // btnKaelumOpen.addEventListener('mouseenter', mouseOverBtnKaelum);
    // btnKaelumClose.addEventListener('mouseleave', mouseOutBtnKaelum);

    // checkScreenState();
    btnRangeTradeOpen.addEventListener('click', clickBtnRangeTrade);
    btnRangeTradeClose.addEventListener('click', clickBtnRangeTradeClose);
    VANTA.CLOUDS({
       el: "html",
       /*skyColor: 0x89b3ca,
       cloudShadowColor: 0x6b8aa7,
       sunColor: 0xfcc4fc,
       sunGlareColor: 0x252931,
       sunlightColor: 0xe38e2f*/
        /*skyColor: 0xe4e5e5, cloudShadowColor: 0x6b8aa7, sunColor: 0xfcc4fc, sunGlareColor: 0x252931, sunlightColor: 0xea973a*/
        skyColor: 0xadd9ea, cloudColor: 0xd2dcea, cloudShadowColor: 0x638cb3
    });
  } else {
    btnRangeTradeOpen.addEventListener('click', clickBtnRangeTrade);
    btnRangeTradeClose.addEventListener('click', clickBtnRangeTradeClose);
    // btnKaelumOpen.addEventListener('click', clickBtnKaelum);
    // btnKaelumClose.addEventListener('click', clickBtnKaelumClose);
  }



  let clickBtnRangeTradeAfterMoment = timeoutDecorator(clickBtnRangeTrade, 100);
  let clickBtnRangeTradeCloseAfterMoment = timeoutDecorator(clickBtnRangeTradeClose, 700);
  // let clickBtnKaelumAfterMoment = timeoutDecorator(clickBtnKaelum, 100);
  // let clickBtnKaelumCloseAfterMoment = timeoutDecorator(clickBtnKaelumClose, 700);

  /**
   *
   */
  function checkScreenState() {
    let $buttonRangeTradeOpen = $('#btn-range-trade-open');
    let $buttonKaelumOpen = $('#btn-kaelum-open');
    let $buttonRangeTradeClose = $('#btn-range-trade-close');
    let $buttonKaelumClose = $('#btn-kaelum-close');

    var offsetRangeOpen = $.extend($buttonRangeTradeOpen.offset(), {
    	width : $buttonRangeTradeOpen.outerWidth(),
      height : $buttonRangeTradeOpen.outerHeight()
    });

    var offsetKaelumOpen = $.extend($buttonKaelumOpen.offset(), {
    	width : $buttonKaelumOpen.outerWidth(),
      height : $buttonKaelumOpen.outerHeight()
    });

    var offsetRangeClose = $.extend($buttonRangeTradeClose.offset(), {
    	width : $buttonRangeTradeClose.outerWidth(),
      height : $buttonRangeTradeClose.outerHeight()
    });

    var offsetKaelumClose = $.extend($buttonKaelumClose.offset(), {
    	width : $buttonKaelumClose.outerWidth(),
      height : $buttonKaelumClose.outerHeight()
    });

    function isMoveOn(x, y, elementCoords) {
      if((x >= elementCoords.left && x <= elementCoords.left + elementCoords.width) && (y >= elementCoords.top && y <= elementCoords.top + elementCoords.height)) {
        return true;
      } else {
        return false;
      }
    }

    $('body').mousemove(function(e){
    	var x = e.pageX;
      var y = e.pageY;

      if (isMoveOn(x, y, offsetRangeOpen)) {
        console.log('1 condition');
        if (currentScreenState === START_SCREEN_STATE || currentScreenState === KAELUM_SCREEN_STATE) {
          console.log('go to screen 2');
          currentScreenState = RANGE_TRADE_SCREEN_STATE;
          clickBtnRangeTrade();
        }
      } else if (isMoveOn(x, y, offsetKaelumOpen)) {
        console.log('2 condition');
        if (currentScreenState === START_SCREEN_STATE || currentScreenState === RANGE_TRADE_SCREEN_STATE) {
          console.log('go to screen 3');
          currentScreenState = KAELUM_SCREEN_STATE;
          clickBtnKaelum();
        }
      } else {
        console.log('3 condition');
        if (currentScreenState === RANGE_TRADE_SCREEN_STATE) {
          console.log('go to screen 1 from 2 screen');
          currentScreenState = START_SCREEN_STATE;
          clickBtnRangeTradeClose();
        } else if (currentScreenState === KAELUM_SCREEN_STATE) {
          console.log('go to screen 1 from 3 screen');
          currentScreenState = START_SCREEN_STATE;
          clickBtnKaelumClose();
        } else {
          console.log('Special');
          if (! blockedUpdateScreen) {
            setStartState();
          }
        }
      }
    });
  }

  /**
   * Wrap for clickBtnRangeTrade function
   *
   * @author Robert Kuznetsov
   */
  function mouseOverBtnRangeTrade(event) {
    clickBtnRangeTradeAfterMoment();
  }

  /**
   * Wrap for clickBtnRangeTradeClose function
   *
   * @author Robert Kuznetsov
   */
  function mouseOutBtnRangeTrade(event) {
    clickBtnRangeTradeCloseAfterMoment();
  }

  /**
   * Wrap for clickBtnKaelum function
   *
   * @author Robert Kuznetsov
   */
  function mouseOverBtnKaelum(event) {
    clickBtnKaelumAfterMoment();
  }

  /**
   * Wrap for clickBtnKaelumClose function
   *
   * @author Robert Kuznetsov
   */
  function mouseOutBtnKaelum(event) {
    clickBtnKaelumCloseAfterMoment();
  }

  function setStartState() {
    $('#range-trade-state').css('display', 'none');
    $('#kaelum-state').css('display', 'none');

    let $startState = $('#start-state');
    let $rangeTradeState = $('#range-trade-state');
    let $kaelumState = $('#kaelum-state');
    let $body = $('body');

    $rangeTradeState.css('display', 'none');
    $kaelumState.css('display', 'none');
    $startState.css('display', 'block');
    $body.removeAttr('id');
    $body.css('opacity', 1);
  }

  /**
   * Event Handler for click to Range.Trade portfolio button
   *
   * @author Robert Kuznetsov
   */
  function clickBtnRangeTrade() {
    if (! blockedUpdateScreen) {
      blockedUpdateScreen = true;
      let $startState = $('#start-state');
      let $rangeTradeState = $('#range-trade-state');
      let $body = $('body');
      let $html = $('html');

      $startState.animate({opacity: 0}, 'slow', function () {
        $startState.css('display', 'none');
        $('#range-trade-portfolio').css('opacity', 0);
        $rangeTradeState.css('opacity', 0);
        $rangeTradeState.css({'display':'block'});
        $rangeTradeState.animate({'opacity': 1}, 'slow', function () {
          blockedUpdateScreen = false;
        });

        $body.attr('id', 'range-trade-portfolio');
        $html.attr('id', 'range-trade-html');
      });
    }

    // let startState = document.getElementById('start-state');
    // let rangeTradeState = document.getElementById('range-trade-state');
    // let body = document.getElementsByTagName('body');

    // startState.style.display = 'none';
    // rangeTradeState.style.display = 'block';
    // body[0].setAttribute('id', 'range-trade-portfolio');
  }

  /**
   * Event Handler for click to Kaelum portfolio button
   *
   * @author Robert Kuznetsov
   */
  function clickBtnKaelum() {
    if (! blockedUpdateScreen) {
      blockedUpdateScreen = true;

      let $startState = $('#start-state');
      let $kaelumState = $('#kaelum-state');
      let $body = $('body');

      $startState.animate({opacity: 0}, 'slow', function () {
        $startState.css('display', 'none');
        $('#kaelum-portfolio').css('opacity', 0);
        $kaelumState.css('opacity', 0);
        $kaelumState.css({'display':'block'});
        $kaelumState.animate({'opacity': 1}, 'slow', function () {
          blockedUpdateScreen = false;
        });

        $body.attr('id', 'kaelum-portfolio');
      });
    }

    /*let startState = document.getElementById('start-state');
    let kaelumState = document.getElementById('kaelum-state');
    let body = document.getElementsByTagName('body');

    startState.style.display = 'none';
    startState.style.backgroundImage = 'none';
    kaelumState.style.display = 'block';

    body[0].setAttribute('id', 'kaelum-portfolio');*/
  }

  /**
   * Event Handler for click to Range.Trade portfolio close button
   *
   * @author Robert Kuznetsov
   */
  function clickBtnRangeTradeClose() {
    // if (! blockedUpdateScreen) {
      blockedUpdateScreen = true;
      let $startState = $('#start-state');
      let $rangeTradeState = $('#range-trade-state');
      let $body = $('body');
      let $html = $('html');

      $rangeTradeState.animate({opacity: 0}, 'slow', function () {
        $rangeTradeState.css('display', 'none');
        $startState.css('opacity', 0);
        $startState.css('display', 'block');
        $startState.animate({'opacity': 1}, 'slow', function () {
          blockedUpdateScreen = false;
        });
        $body.removeAttr('id');
        $html.removeAttr('id');
      });
    // }

    // let startState = document.getElementById('start-state');
    // let rangeTradeState = document.getElementById('range-trade-state');
    // let body = document.getElementsByTagName('body');

    // startState.style.display = 'block';
    // rangeTradeState.style.display = 'none';
    // body[0].removeAttribute('id');
  }

  /**
   * Event Handler for click to Kaelum portfolio close button
   *
   * @author Robert Kuznetsov
   */
  function clickBtnKaelumClose() {
    // if (! blockedUpdateScreen) {
      blockedUpdateScreen = true;

      let $startState = $('#start-state');
      let $kaelumState = $('#kaelum-state');
      let $body = $('body');

      $kaelumState.animate({opacity: 0}, 'slow', function () {
        $kaelumState.css('display', 'none');
        $startState.css('opacity', 0);
        $startState.css('display', 'block');
        $startState.animate({'opacity': 1}, 'slow', function () {
          blockedUpdateScreen = false;
        });
        $body.removeAttr('id');
      });
    // }

    /*let startState = document.getElementById('start-state');
    let kaelumState = document.getElementById('kaelum-state');
    let body = document.getElementsByTagName('body');

    startState.style.display = 'block';
    startState.style.backgroundImage = 'url(images/v.png)';
    kaelumState.style.display = 'none';
    body[0].removeAttribute('id');*/
  }

  /**
   * Timeout decorator for setTimeout function
   *
   * @author Robert Kuznetsov <robert@malanka.pro>
   *
   * @param function which it call with timeout
   * @param int timeout in ms
   *
   * @return function
   */
  function timeoutDecorator(func, timeout) {
      return function () {
          setTimeout(func, timeout);
      }
  }

  $(document).ready(function () {
    $(document).on('click', '.project-ragne-trade', function () {
      if ($('#range-trade-state').css('display') == 'block') {
        window.location = 'https://www.range.trade/';
      }
    });

    $(document).on('click', '.project-apla', function () {
      if ($('.project-apla').css('display') == 'block') {
        window.location = 'https://apla.tb.ru/projectmanager'
      }
    })
  });
}());
