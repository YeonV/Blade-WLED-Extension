var ip;
chrome.extension.sendMessage({}, function(response) {});
function getCookieValue(a) {
  const b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
  return b ? b.pop() : '';
}
if (document.cookie.split(';').some(item => item.trim().startsWith('ip='))) {
  ip = getCookieValue('ip');
} else {
  ip = window.prompt("Gimme WLED's IP!");
  if (ip && ip.length > 3) {
    document.cookie = `ip=${ip}`;
  }
}
console.log('YZ Using IP: ', ip);
document.querySelector('body').classList.add('yz');
var anchors = document.querySelectorAll('article');
for (let z = 0; z < anchors.length; z++) {
  let elem = anchors[z];
  elem.querySelector('.read-more').onclick = function() {
    chrome.runtime.sendMessage({
      type: 'yz',
      url: `http://${ip}/win${elem
        .querySelector('.entry-content')
        .innerText.trim()}`
    });
  };
}
