
window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav'); 
    if (window.innerWidth < 992 && window.scrollY > 0) {
        nav.style.backgroundColor = '#5865f2'; 
    } else {
        nav.style.backgroundColor = '#404eed'; 
    }
});

window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('.scroll-effect');
    
    sections.forEach(function(section) {
      var sectionTop = section.getBoundingClientRect().top;
      var screenHeight = window.innerHeight;
      
      if (sectionTop < screenHeight) {
        section.classList.add('animate');
      }
    });
  });
  