/* Console animation */

let underscoreDisplay = true;
let i = 0;
const underscore = document.querySelector("#console-underscore");
const consoleText = document.querySelector("#console-text");
const consoleString = "Scroll down to know more.";

setInterval(function() {
  underscoreDisplay = !underscoreDisplay;
  const atr = underscoreDisplay ? "1" : "0";
  underscore.style.opacity = atr;
}, 400);

setTimeout(function() {
  const interval = setInterval(function() {
    // Sometimes the bot fails to hit the key
    if (Math.random() < 0.7) i++;
    consoleText.innerHTML = consoleString.slice(0, i);
    if (i === consoleString.length) clearInterval(interval);
  }, 100);
}, 2000);
