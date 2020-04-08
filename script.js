const overlay = document.getElementById('overlay'),
      nav1 = document.getElementById('nav-1'),
      nav2 = document.getElementById('nav-2'),
      nav3 = document.getElementById('nav-3'),
      nav4 = document.getElementById('nav-4'),
      nav5 = document.getElementById('nav-5'),
      menuBars = document.getElementById('menu-bars');

function toggleNav() {
  // Toggle: Menu Bars Open/Closed
  menuBars.classList.toggle('change');
  // Toggle: Menu Active
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    // Animate In - Overlay
    overlay.classList.remove('overlay-slide-left');
    overlay.classList.add('overlay-slide-right');
    // Animate In - Nav Items
    nav1.classList.remove('slide-in-nav-item-reverse');
    nav1.classList.add('slide-in-nav-item');
    nav2.classList.remove('slide-in-nav-item-delay-1-reverse');
    nav2.classList.add('slide-in-nav-item-delay-1');
    nav3.classList.remove('slide-in-nav-item-delay-2-reverse');
    nav3.classList.add('slide-in-nav-item-delay-2');
    nav4.classList.remove('slide-in-nav-item-delay-3-reverse');
    nav4.classList.add('slide-in-nav-item-delay-3');
    nav5.classList.remove('slide-in-nav-item-delay-4-reverse');
    nav5.classList.add('slide-in-nav-item-delay-4');
  } else {
    // Animate Out - Overlay
    overlay.classList.remove('overlay-slide-right');
    overlay.classList.add('overlay-slide-left');
    // Animate Out - Nav Items
    nav1.classList.remove('slide-in-nav-item');
    nav1.classList.add('slide-in-nav-item-reverse');
    nav2.classList.remove('slide-in-nav-item-delay-1');
    nav2.classList.add('slide-in-nav-item-delay-1-reverse');
    nav3.classList.remove('slide-in-nav-item-delay-2');
    nav3.classList.add('slide-in-nav-item-delay-2-reverse');
    nav4.classList.remove('slide-in-nav-item-delay-3');
    nav4.classList.add('slide-in-nav-item-delay-3-reverse');
    nav5.classList.remove('slide-in-nav-item-delay-4');
    nav5.classList.add('slide-in-nav-item-delay-4-reverse');
  }
}