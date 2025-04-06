document.addEventListener("DOMContentLoaded", () => {
  const apiUrl = window.env.API_URL;
  document.getElementById("output").textContent = `API URL: ${apiUrl}`;
});
