
document.querySelector('.hire-me').addEventListener('click', function() {
    alert("Thank you for your interest! Let's get in touch.");
});
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
