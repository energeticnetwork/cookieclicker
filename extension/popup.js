let autoclickers = 0;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.autoclickers) {
    autoclickers = request.autoclickers;
    autoclick();
  }
});

function autoclick() {
  setInterval(function() {
    chrome.storage.sync.set({ score: autoclickers }, function() {
      console.log('Score is set to ' + autoclickers);
    });
  }, 1000);
}
