function getStyleAsStringExcluding(el, exclude = []) {
  var style = el.style;
  for (var i = 0; i < exclude.length; i++) {
    style.removeProperty(exclude[i]);
  }
  var styleArr = Array.from(style);
  var str = styleArr.map(function (pair) {
    return pair.join(': ');
  }).join('; ');
  //console.log('Style Attrubute Value: ' + str);
  return str;
}

var fit2window = function(event) {
  var img = document.getElementsByTagName('img')[0];
  var imgSrc = img.getAttribute('src');
  var imgBounds = img.getBoundingClientRect();

  var w = img.clientWidth;
  var h = img.clientHeight;

  var imgAspectRatio = img.naturalWidth / img.naturalHeight;

  var winW = window.innerWidth;
  var winH = window.innerHeight;
  var winPixelRatio = window.devicePixelRatio;
  var winAspectRatio = winW / winH;

  var styleStr = getStyleAsStringExcluding(img, ['width', 'height']);

  if (winAspectRatio < imgAspectRatio) {
    // img.style.height = winH + 'px';
    styleStr += 'height: ' + winH + 'px';
  } else {
    // img.style.width = winW + 'px';
    styleStr += 'width: ' + winW + 'px';
  }

  img.setAttribute('style', styleStr);
};

window.onload = fit2window;
window.onresize = fit2window;
