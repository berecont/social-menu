use strict;

let help = document.getElementById('help');
let menu = document.querySelector('.menu');

help.onclick = function() {
  menu.classList.toggle('active');
  if (menu.classList.contains('active')) {
    help.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  } else {
    help.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }
}
