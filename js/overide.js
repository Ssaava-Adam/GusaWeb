//color_modes.js
(()=>{"use strict";const t=()=>localStorage.getItem("theme"),e=t=>localStorage.setItem("theme",t),n=()=>{const e=t();return e?e:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"},o=t=>{"auto"===t?document.documentElement.setAttribute("data-bs-theme",window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"):document.documentElement.setAttribute("data-bs-theme",t)};o(n());const c=(t,e=!1)=>{const n=document.querySelector("#bd-theme");if(!n)return;const o=document.querySelector("#bd-theme-text"),c=document.querySelector(".theme-icon-active use"),a=document.querySelector(`[data-bs-theme-value="${t}"]`),r=a.querySelector("svg use").getAttribute("href");document.querySelectorAll("[data-bs-theme-value]").forEach((t=>{t.classList.remove("active"),t.setAttribute("aria-pressed","false")})),a.classList.add("active"),a.setAttribute("aria-pressed","true"),c.setAttribute("href",r);const s=`${o.textContent} (${a.dataset.bsThemeValue})`;n.setAttribute("aria-label",s),e&&n.focus()};window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(()=>{const e=t();"light"!==e&&"dark"!==e&&o(n())})),window.addEventListener("DOMContentLoaded",(()=>{c(n()),document.querySelectorAll("[data-bs-theme-value]").forEach((t=>{t.addEventListener("click",(()=>{const n=t.getAttribute("data-bs-theme-value");e(n),o(n),c(n,!0)}))})),document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      // Show loading state
      const submitBtn = this.querySelector('button[type="submit"]');
      const submitText = submitBtn.querySelector('.submit-text');
      const spinner = submitBtn.querySelector('.spinner-border');
      
      submitBtn.disabled = true;
      submitText.textContent = 'Sending...';
      spinner.classList.remove('d-none');

      try {
        const response = await fetch(this.action, {
          method: 'POST',
          body: new FormData(this),
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          // Show success message
          submitText.textContent = 'Message Sent!';
          this.reset();
          
          // Reset button after 3 seconds
          setTimeout(() => {
            submitText.textContent = 'Send Message';
            submitBtn.disabled = false;
            spinner.classList.add('d-none');
          }, 3000);
        } else {
          throw new Error('Network response was not ok');
        }
      } catch (error) {
        // Show error message
        submitText.textContent = 'Error! Try Again';
        submitBtn.classList.remove('btn-primary');
        submitBtn.classList.add('btn-danger');
        
        // Reset button after 3 seconds
        setTimeout(() => {
          submitText.textContent = 'Send Message';
          submitBtn.disabled = false;
          spinner.classList.add('d-none');
          submitBtn.classList.remove('btn-danger');
          submitBtn.classList.add('btn-primary');
        }, 3000);
      }
    });
  }
})))})})();