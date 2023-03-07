export default function initAnimaScroll () {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const windowmetade = window.innerHeight * 0.3;
  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - windowmetade;
      const isSectionVisible = (sectionTop - windowmetade) < 0;
      if(isSectionVisible) 
        section.classList.add('ativo');
      else if (section.classList.contains('ativo')){
        section.classList.remove('ativo');
      }
    });
  };
  if(sections.length) {
    animaScroll()
    window.addEventListener('scroll', animaScroll);

  }
  };