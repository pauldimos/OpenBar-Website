const signupForm = document.querySelector(".signup form");
if (signupForm) {
    signupForm.addEventListener("submit", () => {
        alert("Thank you! We'll notify you soon.");
    });
}

const yearEl = document.getElementById("year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}
