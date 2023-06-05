let score = 0;
let autoclickers = 0;

document.getElementById('clicker').onclick = function() {
  score++;
  document.getElementById('score').textContent = 'Score: ' + score;
  if (score >= 10) {
    document.getElementById('autoclicker').disabled = false;
  }
};

document.getElementById('autoclicker').onclick = function() {
  if (score >= 10) {
    score -= 10;
    autoclickers++;
    document.getElementById('score').textContent = 'Score: ' + score;
    document.getElementById('autoclicker').disabled = true;
    chrome.runtime.sendMessage({ autoclickers: autoclickers });
  }
};
