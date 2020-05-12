chrome.extension.sendMessage({}, function(response) {});
function getCookieValue(a) {
  const b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
  return b ? b.pop() : '';
}

if (document.cookie.split(';').some(item => item.trim().startsWith('ip='))) {
  window.ip = getCookieValue('ip');  
} else {
  chrome.storage.local.get(["globals"], function (result) {
    const globals= result.globals;    
    window.ip = globals.ip;
  });  
}



document.querySelector('body').classList.add('yz');
// document.querySelector("body").dataset.ip = window.ip;

var anchors = document.querySelectorAll('article');
for (let z = 0; z < anchors.length; z++) {
  let elem = anchors[z];
  elem.querySelector('.read-more').onclick = function() {
    chrome.runtime.sendMessage({
      type: 'yz',
      url: `http://${window.ip}/win${elem
        .querySelector('.entry-content')
        .innerText.trim()}`
    });
  };
}
