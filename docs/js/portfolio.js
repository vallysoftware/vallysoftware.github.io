;(function () {
  let btnRangeTradeOpen = document.getElementById('btn-range-trade-open');
  let btnRangeTradeClose = document.getElementById('btn-range-trade-close');
  let btnKaelumOpen = document.getElementById('btn-kaelum-open');
  let btnKaelumClose = document.getElementById('btn-kaelum-close');

  /**
   * Adding event listeners
   */
  if (window.innerWidth > 800) {
    btnRangeTradeOpen.addEventListener('mouseenter', mouseOverBtnRangeTrade);
    btnRangeTradeClose.addEventListener('mouseleave', mouseOutBtnRangeTrade);
    btnKaelumOpen.addEventListener('mouseenter', mouseOverBtnKaelum);
    btnKaelumClose.addEventListener('mouseleave', mouseOutBtnKaelum);
  } else {
    btnRangeTradeOpen.addEventListener('click', clickBtnRangeTrade);
    btnRangeTradeClose.addEventListener('click', clickBtnRangeTradeClose);
    btnKaelumOpen.addEventListener('click', clickBtnKaelum);
    btnKaelumClose.addEventListener('click', clickBtnKaelumClose);
  }

  let clickBtnRangeTradeAfterMoment = timeoutDecorator(clickBtnRangeTrade, 100);
  let clickBtnRangeTradeCloseAfterMoment = timeoutDecorator(clickBtnRangeTradeClose, 700);
  let clickBtnKaelumAfterMoment = timeoutDecorator(clickBtnKaelum, 100);
  let clickBtnKaelumCloseAfterMoment = timeoutDecorator(clickBtnKaelumClose, 700);

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

  /**
   * Event Handler for click to Range.Trade portfolio button
   *
   * @author Robert Kuznetsov
   */
  function clickBtnRangeTrade() {
    let $startState = $('#start-state');
    let $rangeTradeState = $('#range-trade-state');
    let $body = $('body');

    $startState.animate({opacity: 0}, 'slow', function () {
      $startState.css('display', 'none');
      $('#range-trade-portfolio').css('opacity', 0);
      $rangeTradeState.css('opacity', 0);
      $rangeTradeState.css({'display':'block'});
      $rangeTradeState.animate({'opacity': 1}, 'slow');

      $body.attr('id', 'range-trade-portfolio');
    });

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
    console.log('clickBtnKaelum')
    let startState = document.getElementById('start-state');
    let kaelumState = document.getElementById('kaelum-state');
    let body = document.getElementsByTagName('body');

    startState.style.display = 'none';
    startState.style.backgroundImage = 'none';
    kaelumState.style.display = 'block';

    body[0].setAttribute('id', 'kaelum-portfolio');
  }

  /**
   * Event Handler for click to Range.Trade portfolio close button
   *
   * @author Robert Kuznetsov
   */
  function clickBtnRangeTradeClose() {
    let $startState = $('#start-state');
    let $rangeTradeState = $('#range-trade-state');
    let $body = $('body');

    $rangeTradeState.animate({opacity: 0}, 'slow', function () {
      $rangeTradeState.css('display', 'none');
      $startState.css('opacity', 0);
      $startState.css('display', 'block');
      $startState.animate({'opacity': 1}, 'slow', function () {
        console.log('call analitics'); //@TODO add yandex metrics
      });
      $body.removeAttr('id');

    });

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
    let startState = document.getElementById('start-state');
    let kaelumState = document.getElementById('kaelum-state');
    let body = document.getElementsByTagName('body');

    startState.style.display = 'block';
    startState.style.backgroundImage = 'url(images/v.png)';
    kaelumState.style.display = 'none';
    body[0].removeAttribute('id');
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
}());
