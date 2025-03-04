const title = document.querySelector('.title');
const texts = [
  "",
  "Alizay, my forever love..",
  "You are my lovely spring..",
  "With you, my heart takes wing..",
  "Your love shines, soft and bright.",
  "You make my world feel light.",
  "In your arms, I belong.",
  "With you, life’s a love song..",
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
