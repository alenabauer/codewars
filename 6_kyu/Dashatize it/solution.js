function dashatize(num) {
  if (typeof num == 'number') {
    if (!num) return String(num);
    num = Math.abs(num);
    let str = [...String(num)].map(x => Number(x) % 2 != 0 ? `-${x}-` : x).join('');
    if (str.charAt(0) == '-') str = str.substring(1);
    if (str.charAt(str.length - 1) == '-') str = str.substring(0, str.length - 1);
    return str.replace(/--/g, '-');
  } else {
    return "";
  }
}
