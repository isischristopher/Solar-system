import $ from 'jquery';

const printToDom = (divId, toPrint) => {
  $(`#${divId}`).html(toPrint);
  document.getElementById(divId).innerHTML = toPrint;
};

export default { printToDom };
