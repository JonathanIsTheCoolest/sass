const nav = document.getElementById("topNav"); /* scrolling navbar */

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

const navButton = document.querySelector('button[aria-expanded]'); /* button toggler */

function toggleNav ({ target }) {
  const expanded = target.getAttribute('aria-expanded') === 'true' || false;
  navButton.setAttribute('aria-expanded', !expanded);
}

navButton.addEventListener('click', toggleNav);