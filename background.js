chrome.tabs.onActivated.addListener(function(activeInfo) {
  chrome.tabs.get(activeInfo.tabId, function(tab) {
    if (tab.url === 'https://wled.yeonv.com/') {
      chrome.browserAction.setIcon({path: 'yz.png'});
      // chrome.tabs.executeScript(null, {file: 'inject.js'}, function(url) {});
    } else {
      chrome.browserAction.setIcon({path: 'icon.png'});
    }
  });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.url) {
    chrome.tabs.sendMessage(tabId, {
      message: 'hello!',
      url: changeInfo.url
    });
  }

  if (tab.url === 'https://wled.yeonv.com/') {
    chrome.browserAction.setIcon({path: 'yz.png'});
    chrome.tabs.executeScript(null, {file: 'inject.js'}, function(url) {});
  } else {
    chrome.browserAction.setIcon({path: 'icon.png'});
  }
});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type == 'yz') {
    fetch(request.url);
  }
  sendResponse();
});
