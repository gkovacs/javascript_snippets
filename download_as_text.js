function downloadAsText(data) {
  var tag = document.createElement('a');
  tag.setAttribute('id', 'foo');
  tag.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
  tag.setAttribute('download', 'data.txt');
  tag.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: false, view: window}))
}
