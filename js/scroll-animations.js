// Function to add the 'fade-in' class to elements when they come into view
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// Select all elements you want to animate
const elementsToAnimate = document.querySelectorAll('.fade-in-element');

// Add each element to the observer
elementsToAnimate.forEach(element => {
    observer.observe(element);
});
