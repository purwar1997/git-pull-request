const clickBtn = document.querySelector('.click-btn');
const paragraph = document.querySelector('.text');

clickBtn.addEventListener('click', function () {
  paragraph.textContent = 'Pull requests are used by developers to collaborate.';
  console.log('Button clicked');
});
