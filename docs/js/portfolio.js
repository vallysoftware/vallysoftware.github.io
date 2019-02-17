;(function () {
  let btnRangeTradeOpen = document.getElementById('btn-range-trade-open');
  let btnRangeTradeClose = document.getElementById('btn-range-trade-close');

  /**
   * Adding event listeners
   */
  btnRangeTradeOpen.addEventListener('click', clickBtnRangeTrade);
  btnRangeTradeClose.addEventListener('click', clickBtnRangeTradeClose);

  /**
   * Event Handler for clict to Range.Trade portfolio button
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
   * Event Handler for clict to Range.Trade portfolio close button
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
}());
