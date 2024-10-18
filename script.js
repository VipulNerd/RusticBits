let texts = Array.from(document.querySelectorAll('.container p'));
let i = 1; // starting from 1 because 0 already has is-visible, it would cause slight delay otherwise.

setInterval(() => {
  texts.forEach(text => {
    text.classList.remove('is-visible');
  });
  texts[i].classList.add('is-visible');
  i += 1;
  if (i >= texts.length) {
    i = 0;
  }
}, 2000);

//