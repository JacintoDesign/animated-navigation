const overlay = document.getElementById('overlay'),
      nav1 = document.getElementById('nav-1'),
      nav2 = document.getElementById('nav-2'),
      nav3 = document.getElementById('nav-3'),
      nav4 = document.getElementById('nav-4'),
      nav5 = document.getElementById('nav-5'),
      toggle1 = document.getElementById('toggle-1'),
      toggle2 = document.getElementById('toggle-2'),
      toggle3 = document.getElementById('toggle-3');

function toggleNav() {
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    // Toggle
    toggle1.classList.remove('animate-out-toggle-1');
    toggle1.classList.add('animate-toggle-1');
    toggle2.classList.remove('animate-out-toggle-2');
    toggle2.classList.add('animate-toggle-2');
    toggle3.classList.remove('animate-out-toggle-3');
    toggle3.classList.add('animate-toggle-3');
    // Overlay
    overlay.classList.remove('overlay-slide-left');
    overlay.classList.add('overlay-slide-right');
    // Nav Items
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
    // Toggle
    toggle1.classList.remove('animate-toggle-1');
    toggle1.classList.add('animate-out-toggle-1');
    toggle2.classList.remove('animate-toggle-2');
    toggle2.classList.add('animate-out-toggle-2');
    toggle3.classList.remove('animate-toggle-3');
    toggle3.classList.add('animate-out-toggle-3');
    // Overlay
    overlay.classList.remove('overlay-slide-right');
    overlay.classList.add('overlay-slide-left');
    // Nav Items
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