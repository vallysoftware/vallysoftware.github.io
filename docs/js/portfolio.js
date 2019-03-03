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
    btnKaelumClose.addEventListener('click', clickBtnKaelum);
  }

  let clickBtnRangeTradeAfterMoment = timeoutDecorator(clickBtnRangeTrade, 100);
  let clickBtnRangeTradeCloseAfterMoment = timeoutDecorator(clickBtnRangeTradeClose, 300);
  let clickBtnKaelumAfterMoment = timeoutDecorator(clickBtnKaelum, 100);
  let clickBtnKaelumCloseAfterMoment = timeoutDecorator(clickBtnKaelumClose, 300);

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
    let startState = document.getElementById('start-state');
    let rangeTradeState = document.getElementById('range-trade-state');
    let body = document.getElementsByTagName('body');

    startState.style.display = 'none';
    rangeTradeState.style.display = 'block';
    body[0].setAttribute('id', 'range-trade-portfolio');
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
    let startState = document.getElementById('start-state');
    let rangeTradeState = document.getElementById('range-trade-state');
    let body = document.getElementsByTagName('body');

    startState.style.display = 'block';
    rangeTradeState.style.display = 'none';
    body[0].removeAttribute('id');
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
    startState.style.backgroundImage = 'url(../images/v.png)';
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
