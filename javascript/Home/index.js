const words = ['empowers your team', 'foster collaboration', 'streamlines operations', 'increase engagement'];
let index = 0;
const interval = 3000; // 3 seconds

function changeText() {
  const wrapper = document.querySelector('.animation-wrapper');
  wrapper.classList.remove('animation-wrapper');
  wrapper.offsetHeight; // trigger reflow to restart animation
  wrapper.querySelector('.changecolor').textContent = words[index];
  index = (index + 1) % words.length;
  wrapper.classList.add('animation-wrapper');
  setTimeout(changeText, interval);
}

changeText();