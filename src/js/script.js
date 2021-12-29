window.onload = function() {
  // Burger menu with working out click

  const burger = document.querySelector('.header-hidden__burger');
  const menu = document.querySelector('.hidden-menu');

  const toggleMenu = function() {
    menu.classList.toggle('active')
  }

  burger.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
  });

  document.addEventListener('click', function(e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_burger = target == burger;
    const menu_is_active = menu.classList.contains('active');

    if (!its_menu && !its_burger && menu_is_active) {
      toggleMenu();
    }
  });


  //Swiper

  new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },

    loop: true,
  });
}