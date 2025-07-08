// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.hash !== '') {
        e.preventDefault();
        const hash = this.hash;
        document.querySelector(hash).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Animate progress bars
  const skills = document.querySelectorAll('.progress');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        const progress = entry.target;
        progress.style.width = progress.getAttribute('data-progress');
        observer.unobserve(progress);
      }
    });
  }, { threshold: 0.5 });
  
  skills.forEach(skill => {
    observer.observe(skill);
  });
  
  // Animate Skill Summary bullets with stagger effect
const skillItems = document.querySelectorAll('.skill-summary li');

const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add stagger effect
      skillItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('show');
        }, index * 200); // 200ms delay between bullets
      });

      // Stop observing once triggered
      skillObserver.disconnect();
    }
  });
}, { threshold: 0.1 });

skillItems.forEach(item => {
  skillObserver.observe(item);
});

  