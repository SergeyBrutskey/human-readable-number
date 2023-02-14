module.exports = function toReadable(number) {
    if (number === 0) return 'zero';
    const units = [' ', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',];
    const dozens = [' ', ' ', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let str = '';
    if (number > 99) {
      str += units[Math.floor(number / 100)] + ' hundred ';
      number = +number.toString().slice(1);
    }
    if (number > 19) {
      str += dozens[Math.floor(number / 10)] + ' '
      number = +number.toString().slice(1);
    }
    str += units[number];
    return str.trim();
  }
