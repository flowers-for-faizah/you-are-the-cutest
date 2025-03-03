const title = document.querySelector('.title');
const texts = [
  "My heart goes poco loco",
  "Whenever I see you..",
  "Here are some flowers",
  "For my dearest Alizay",
  "These will last forever :D"
];

let index = 0;
function showText() {
  if (index < texts.length) {
    title.innerHTML = '';
    const textArray = texts[index].split('');
    textArray.forEach((char, i) => {
      setTimeout(() => {
        let span = document.createElement('span');
        span.textContent = char;
        if (char === ' ') {
          span.innerHTML = '&nbsp;';
        }
        span.style.opacity = 0;
        span.style.transition = 'opacity 0.5s';
        title.appendChild(span);
        setTimeout(() => {
          span.style.opacity = 1;
        }, 50);
      }, i * 100);
    });
    index++;
    setTimeout(showText, 4500);
  }
}

showText();
