setInterval(function() {
  var likes = document.getElementsByClassName('UFILikeLink');
  for (var i = 0; i < likes.length; ++i) {
    if (likes[i].innerText == 'Like')
      likes[i].dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: false, view: window}))
  }
}, 1000);
