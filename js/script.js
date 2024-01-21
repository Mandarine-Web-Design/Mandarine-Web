// copyright
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// Scroll to prices
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector('a[href="#prices"]')
    .addEventListener("click", function (e) {
      e.preventDefault();
      const pricesHeading = document.getElementById("prices");
      pricesHeading.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

window.onload = function () {
  // Cookies
  const consentBox = document.getElementById("consentBox");
  const overlay = document.getElementById("cookie-overlay");
  const acceptBtn = document.querySelector(".consentButton"); // Use the correct class name

  // Function to set the cookie
  function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }

  // Function to check if the cookie exists
  function checkCookie(name) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return true;
      }
    }
    return false;
  }

  // Function to handle the button click
  function handleButtonClick() {
    setCookie("CookieBy", "GeeksForGeeks", 30); // Set the cookie for 30 days
    consentBox.classList.add("hide");
    overlay.classList.add("hide");
  }

  // Check if the cookie exists and hide the consent box if it does
  if (checkCookie("CookieBy")) {
    consentBox.classList.add("hide");
    overlay.classList.add("hide");
  }

  // Attach click event to the "I Accept" button
  acceptBtn.addEventListener("click", handleButtonClick);
};
