document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul.all-links a");
    
    navLinks.forEach(link => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust for fixed header
            behavior: "smooth",
          });
        }
      });
    });
  
    // Form validation
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const name = form.querySelector("input[placeholder='Name*']").value.trim();
      const email = form.querySelector("input[placeholder='Email*']").value.trim();
      const message = form.querySelector("textarea[placeholder='Message*']").value.trim();
  
      if (!name || !email || !message) {
        alert("Please fill out all required fields.");
        return;
      }
  
      if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      alert("Thank you for your message! We will get back to you shortly.");
      form.reset();
    });
  
    // Email validation function
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });