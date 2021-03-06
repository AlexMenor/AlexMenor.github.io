/* Console animation */

var underscoreDisplay = true;
var i = 0;
var underscore = document.querySelector("#console-underscore");
var consoleText = document.querySelector("#console-text");
var consoleString = "Scroll down to know more.";

setInterval(function() {
  underscoreDisplay = !underscoreDisplay;
  var atr = underscoreDisplay ? "1" : "0";
  underscore.style.opacity = atr;
}, 400);

setTimeout(function() {
  var interval = setInterval(function() {
    // Sometimes the bot fails to hit the key
    if (Math.random() < 0.7) i++;
    consoleText.innerHTML = consoleString.slice(0, i);
    if (i === consoleString.length) clearInterval(interval);
  }, 100);
}, 2000);

/* Check background-attachment compatibility */

var isIOS =
  /iPad|iPhone|iPod/.test(navigator.platform) ||
  (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

if (isIOS) {
  document.querySelectorAll("section").forEach(function(s) {
    s.style.backgroundAttachment = "scroll";
  });
}

/* Hide scroll hint when a scrollable area has been tapped */

document.querySelectorAll(".skill-row").forEach(function(row) {
  row.addEventListener("scroll", function(event) {
    document.querySelector(".scroll-hint-skill").style.opacity = "0";
  });
});

document.querySelectorAll(".project-row").forEach(function(row) {
  row.addEventListener("scroll", function(event) {
    document.querySelector(".scroll-hint-project").style.opacity = "0";
  });
});
